/* Luyện Viết IELTS — app tĩnh, dữ liệu lưu localStorage, chấm bằng Gemini API */
(function () {
'use strict';

const BLOOM = [
  { id: 'remember',   vi: 'Ghi nhớ',   en: 'Remember',   desc: 'Nhận biết & nhớ lại kiến thức' },
  { id: 'understand', vi: 'Hiểu',      en: 'Understand', desc: 'Hiểu ý nghĩa của quy tắc, dữ kiện' },
  { id: 'apply',      vi: 'Vận dụng',  en: 'Apply',      desc: 'Áp dụng quy tắc vào câu cụ thể' },
  { id: 'analyze',    vi: 'Phân tích', en: 'Analyze',    desc: 'Tách nhỏ, tìm lỗi, nhận ra cấu trúc' },
  { id: 'evaluate',   vi: 'Đánh giá',  en: 'Evaluate',   desc: 'So sánh, chọn phương án tốt nhất' },
  { id: 'create',     vi: 'Sáng tạo',  en: 'Create',     desc: 'Tự viết sản phẩm hoàn chỉnh' },
];
const BLOOM_COLOR = id => `var(--${id})`;
const STAGES = [
  { id: 'grammar', name: 'Chặng 1 · Grammar cho Writing', desc: 'Ngữ pháp nền tảng để viết câu đúng và đa dạng.' },
  { id: 'task1',   name: 'Chặng 2 · Writing Task 1',      desc: 'Mô tả biểu đồ, bảng, quy trình, bản đồ.' },
  { id: 'task2',   name: 'Chặng 3 · Writing Task 2',      desc: 'Viết bài luận theo từng dạng đề.' },
];
const TYPE_NAME = { mcq: 'Trắc nghiệm', gap: 'Điền từ', match: 'Nối / phân loại', order: 'Sắp xếp câu', rewrite: 'Viết lại câu (AI chấm)', write: 'Viết tự do (AI chấm)', mcq2: 'Trắc nghiệm 2 tầng' };

const STAGE_ORDER = { grammar: 0, task1: 1, task2: 2 };
const UNITS = (window.UNITS || []).map((u, i) => Object.assign({ n: 50 + i }, u)).sort((a, b) => (STAGE_ORDER[a.stage] - STAGE_ORDER[b.stage]) || (a.n - b.n));
const unitById = id => UNITS.find(u => u.id === id);

/* ---------- storage ---------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { console.warn(e); } },
};
const settings = () => Object.assign({ model: 'gemini-2.5-flash', fbLang: 'vi', target: '6.5' }, store.get('kl_settings', {}));

/* ---------- API key vault: mã hoá AES-GCM bằng mã PIN, không bao giờ lưu key dạng thô ---------- */
const enc = new TextEncoder(), dec = new TextDecoder();
const b64 = buf => btoa(String.fromCharCode(...new Uint8Array(buf)));
const unb64 = str => Uint8Array.from(atob(str), c => c.charCodeAt(0));
let memKey = null;
const ss = { get(k) { try { return sessionStorage.getItem(k); } catch { return null; } }, set(k, v) { try { v == null ? sessionStorage.removeItem(k) : sessionStorage.setItem(k, v); } catch {} } };
async function deriveKey(pin, salt) {
  const base = await crypto.subtle.importKey('raw', enc.encode(pin), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: 310000, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}
const vault = {
  info() { return store.get('kl_vault', null); },
  async lock(apiKey, pin) {
    const salt = crypto.getRandomValues(new Uint8Array(16)), iv = crypto.getRandomValues(new Uint8Array(12));
    const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, await deriveKey(pin, salt), enc.encode(apiKey));
    store.set('kl_vault', { v: 1, salt: b64(salt), iv: b64(iv), ct: b64(ct), hint: apiKey.slice(0, 4) + '…' + apiKey.slice(-3) });
  },
  async unlock(pin) {
    const v = this.info(); if (!v) throw new Error('Chưa có key.');
    try { const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: unb64(v.iv) }, await deriveKey(pin, unb64(v.salt)), unb64(v.ct)); return dec.decode(pt); }
    catch { throw new Error('Sai mã PIN.'); }
  },
  clear() { try { localStorage.removeItem('kl_vault'); } catch {} memKey = null; ss.set('kl_k', null); },
};
function hasKey() { return !!(memKey || ss.get('kl_k') || vault.info()); }
function askPin() {
  return new Promise((resolve, reject) => {
    const d = $('#unlock'); $('#pinIn').value = ''; $('#pinErr').textContent = '';
    const done = async ev => {
      ev?.preventDefault();
      try { const k = await vault.unlock($('#pinIn').value); cleanup(); d.close(); resolve(k); }
      catch (e) { $('#pinErr').textContent = e.message; $('#pinIn').select(); }
    };
    const cancel = () => { cleanup(); d.close(); reject(new Error('Chưa mở khoá API key.')); };
    const cleanup = () => { $('#unlockForm').onsubmit = null; $('#pinCancel').onclick = null; d.oncancel = null; };
    $('#unlockForm').onsubmit = done; $('#pinCancel').onclick = cancel; d.oncancel = e => { e.preventDefault(); cancel(); };
    d.showModal(); $('#pinIn').focus();
  });
}
async function getKey() {
  if (memKey) return memKey;
  const sk = ss.get('kl_k'); if (sk) return (memKey = sk);
  if (!vault.info()) throw new Error('Chưa có API key. Bấm "⚙ API key" ở góc trên để thêm.');
  memKey = await askPin(); ss.set('kl_k', memKey); return memKey;
}
// Dọn key dạng thô của bản cũ (nếu có)
(function migrate() { const s = store.get('kl_settings', {}); if (s.apiKey) { ss.set('kl_k', s.apiKey); memKey = s.apiKey; delete s.apiKey; store.set('kl_settings', s); store.set('kl_legacy_key', 1); } })();
let progress = store.get('kl_progress', {});
let extras = store.get('kl_extras', {});      // { "unitId:bloom": [exercise,...] }
const saveProgress = () => store.set('kl_progress', progress);

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\*(?=\S)([^*]+?)\*/g, '<i>$1</i>').replace(/\n/g, '<br>');
const h = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const norm = s => String(s ?? '').toLowerCase().replace(/[’‘`]/g, "'").replace(/[“”]/g, '"')
  .replace(/\s+/g, ' ').replace(/\s+([,.;:!?])/g, '$1').trim().replace(/[.!?]+$/, '').trim();
const arr = x => Array.isArray(x) ? x : (x == null ? [] : [x]);
const words = s => (String(s).trim().match(/\S+/g) || []).length;
const exKey = (unitId, bloom, idx, extra) => `${unitId}:${bloom}:${extra ? 'x' : ''}${idx}`;

const LEVELS = { 1: { name: 'Nền tảng · có hướng dẫn', short: 'Nền tảng', band: '~Band 5–6', cls: 'lv1' }, 2: { name: 'Kiểm soát · ít hỗ trợ', short: 'Kiểm soát', band: '~Band 6.5–7', cls: 'lv2' }, 3: { name: 'Tinh tế · độc lập', short: 'Tinh tế', band: '~Band 8+', cls: 'lv3' } };
const lvOf = ex => ex.lv || (ex.bloom === 'remember' || ex.bloom === 'understand' ? 1 : 2);
const KL_MATRIX = `KIEN LUYEN DIFFICULTY MATRIX (use it to judge level and to suggest upgrades):
Level 1 (Band 5-6): simple/compound sentences with and/but/so/because, repeated subjects; mechanical linkers (Firstly, Moreover...); listing ideas without explanation, personal examples; Task 1 describes each year in separate simple sentences; common words (good, bad, problem).
Level 2 (Band 6.5-7): relative and adverb clauses (who/which, although/while/if); linkers plus basic pronoun reference (this, they); correct 1-idea / 2-idea paragraphs with explanation and general examples; Task 1 joins two time points with before/after + V-ing or while/whereas; common collocations (play an important role, mitigate the problem).
Level 3 (Band 8-9): noun clauses as subjects (What lies at the core of...), participle reduction (thereby allowing...), absolute constructions (with + N + V-ing/V3), inversion (Not until... should..., Were we to...), concessive As + adj + as + S + may + V; nominalisation + referencing instead of linkers (This line of reasoning..., The corollary of this..., Added to this is the fact that...); counter-argument (Granted, one might argue that... This is predicated on the assumption that... However, this line of reasoning is not sound because it fails to factor in...); solutions developed as solution -> obstacle -> supporting step; Task 1 Super Boosters merging three stages (started at..., after which..., before ending the period at...; with a subsequent...; followed by...; Similar/Opposite changes can be seen in...) and the 7 No-change comparison structures (far exceeded that of, with respective figures being, compared to only, While... only... did so, in that order); precise academic collocations (a necessary evil, pale in comparison with, compound the problem, bring to the fore).`;
function exercisesFor(unit, bloom) {
  return (unit.exercises || []).map((e, i) => ({ ex: e, key: exKey(unit.id, e.bloom, i) })).filter(o => o.ex.bloom === bloom)
    .sort((a, b) => lvOf(a.ex) - lvOf(b.ex))
    .concat((extras[unit.id + ':' + bloom] || []).map((e, i) => ({ ex: e, key: exKey(unit.id, bloom, i, true), extra: true, idx: i })));
}
const flags = { all() { return store.get('kl_flags', {}); }, has(k) { return !!this.all()[k]; }, toggle(k, note) { const f = this.all(); if (f[k]) delete f[k]; else f[k] = { at: Date.now(), note: note || '' }; store.set('kl_flags', f); } };
function levelScore(unit, bloom) {
  const list = exercisesFor(unit, bloom).filter(o => !o.extra && !flags.has(o.key));
  if (!list.length) return null;
  const done = list.map(o => progress[o.key]).filter(Boolean);
  if (!done.length) return null;
  return Math.round(done.reduce((s, p) => s + p.best, 0) / list.length);
}
function unitPct(unit) {
  let sum = 0, n = 0;
  BLOOM.forEach(b => { const list = exercisesFor(unit, b.id).filter(o => !o.extra && !flags.has(o.key)); list.forEach(o => { n++; sum += (progress[o.key]?.best || 0); }); });
  return n ? Math.round(sum / n) : 0;
}
function record(key, pct) {
  const p = progress[key] || { best: 0, tries: 0 };
  p.best = Math.max(p.best, pct); p.last = pct; p.tries++; p.at = Date.now();
  progress[key] = p; saveProgress(); renderSidebar();
}

/* ---------- Gemini ---------- */
async function gemini(prompt, { json = true, temperature = 0.4 } = {}) {
  const s = settings();
  const apiKey = await getKey();
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(s.model || 'gemini-2.5-flash')}:generateContent`;
  const body = { contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig: { temperature } };
  if (json) body.generationConfig.responseMimeType = 'application/json';
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey }, body: JSON.stringify(body), referrerPolicy: 'strict-origin' });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error?.message || `Lỗi HTTP ${res.status}`);
  const cand = data.candidates?.[0];
  const text = (cand?.content?.parts || []).filter(p => !p.thought).map(p => p.text || '').join('');
  if (!text) throw new Error('Gemini không trả về nội dung' + (cand?.finishReason ? ` (${cand.finishReason})` : '') + '.');
  if (!json) return text;
  const clean = text.replace(/^\s*```(?:json)?/i, '').replace(/```\s*$/, '').trim();
  try { return JSON.parse(clean); }
  catch { const m = clean.match(/\{[\s\S]*\}/); if (m) return JSON.parse(m[0]); throw new Error('Không đọc được JSON từ Gemini.'); }
}
const langLine = () => settings().fbLang === 'en'
  ? 'Write all feedback/explanations in clear English.'
  : 'Viết mọi nhận xét/giải thích bằng tiếng Việt (giữ nguyên ví dụ tiếng Anh).';

function chartToText(c) { return c ? '\nVISUAL DATA (JSON):\n' + JSON.stringify(c) : ''; }

/* ---------- Charts ---------- */
const PALETTE = ['#2f5bd3', '#ef7d1a', '#16a34a', '#c026d3', '#dc2626', '#0891b2', '#7c3aed'];
function niceMax(v) { if (v <= 0) return 1; const p = Math.pow(10, Math.floor(Math.log10(v))); const n = v / p; return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * p; }
function renderChart(c) {
  if (!c) return '';
  const title = c.title ? `<div class="chart-title">${esc(c.title)}</div>` : '';
  if (c.kind === 'table') {
    return `<div class="chart">${title}<table><tr>${c.headers.map(x => `<th>${esc(x)}</th>`).join('')}</tr>${c.rows.map(r => `<tr>${r.map((x, i) => i ? `<td>${esc(x)}</td>` : `<th>${esc(x)}</th>`).join('')}</tr>`).join('')}</table></div>`;
  }
  if (c.kind === 'process') {
    return `<div class="chart">${title}<div class="flow">${c.steps.map((s, i) => `<div class="step"><b>${i + 1}.</b> ${esc(s)}</div>${i < c.steps.length - 1 ? '<span class="arrow">➜</span>' : ''}`).join('')}</div></div>`;
  }
  if (c.kind === 'pie') {
    const pies = c.pies.map(p => {
      const total = p.slices.reduce((s, x) => s + x.value, 0); let a = -Math.PI / 2; const R = 76, cx = 105, cy = 98;
      const paths = p.slices.map((sl, i) => {
        const ang = sl.value / total * Math.PI * 2; const a2 = a + ang;
        const x1 = cx + R * Math.cos(a), y1 = cy + R * Math.sin(a), x2 = cx + R * Math.cos(a2), y2 = cy + R * Math.sin(a2);
        const mid = a + ang / 2; const small = sl.value / total < .06; const rr = small ? R * 1.13 : R * .62; const lx = cx + rr * Math.cos(mid), ly = cy + rr * Math.sin(mid);
        const d = `M${cx},${cy} L${x1.toFixed(1)},${y1.toFixed(1)} A${R},${R} 0 ${ang > Math.PI ? 1 : 0} 1 ${x2.toFixed(1)},${y2.toFixed(1)} Z`;
        a = a2;
        return `<path d="${d}" fill="${PALETTE[i % PALETTE.length]}" stroke="#fff"/><text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" font-size="11" fill="${small ? '#333' : '#fff'}" text-anchor="middle" dominant-baseline="middle" font-weight="700">${sl.value}${c.unit || ''}</text>`;
      }).join('');
      return `<svg viewBox="0 0 210 215" width="220"><text x="105" y="210" text-anchor="middle" font-size="12" font-weight="600">${esc(p.title)}</text>${paths}</svg>`;
    }).join('');
    const legend = c.pies[0].slices.map((s, i) => `<span style="display:inline-flex;align-items:center;gap:4px;margin:0 8px;font-size:12px"><i style="width:10px;height:10px;background:${PALETTE[i % PALETTE.length]};display:inline-block"></i>${esc(s.name)}</span>`).join('');
    return `<div class="chart">${title}<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:8px">${pies}</div><div style="text-align:center">${legend}</div></div>`;
  }
  if (c.kind === 'map') {
    const maps = c.maps.map(m => {
      const items = m.items.map(it => {
        const x = it.x * 3, y = it.y * 2.2, w = it.w * 3, hh = it.h * 2.2;
        const fill = it.color || '#dfe7f7';
        const ws = String(it.name).split(' '); let lines = [it.name];
        if (it.name.length * 5.3 > w - 4 && ws.length > 1) { const mid = Math.ceil(ws.length / 2); lines = [ws.slice(0, mid).join(' '), ws.slice(mid).join(' ')]; }
        const t = lines.map((ln, li) => `<tspan x="${x + w / 2}" dy="${li ? 11 : -(lines.length - 1) * 5.5}">${esc(ln)}</tspan>`).join('');
        return `<rect x="${x}" y="${y}" width="${w}" height="${hh}" rx="4" fill="${fill}" stroke="#7a8aa8"/><text x="${x + w / 2}" y="${y + hh / 2}" font-size="9.5" text-anchor="middle" dominant-baseline="middle">${t}</text>`;
      }).join('');
      const n = m.north !== false ? '<text x="290" y="16" font-size="11" text-anchor="end">N ↑</text>' : '';
      return `<svg viewBox="0 0 300 245" width="300"><rect x="0" y="0" width="300" height="220" fill="#f7faf3" stroke="#bbb"/>${items}${n}<text x="150" y="238" font-size="12" text-anchor="middle" font-weight="600">${esc(m.title)}</text></svg>`;
    }).join('');
    return `<div class="chart">${title}<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px">${maps}</div></div>`;
  }
  // line / bar
  const W = 560, H = 300, L = 52, B = 40, T = 14, Rr = 24;
  const all = c.series.flatMap(s => s.data); const max = niceMax(Math.max(...all)); const pw = W - L - Rr, ph = H - T - B;
  const ticks = 5; let grid = '';
  for (let i = 0; i <= ticks; i++) { const v = max / ticks * i; const y = T + ph - ph * i / ticks; grid += `<line x1="${L}" x2="${W - Rr}" y1="${y}" y2="${y}" stroke="#e5e7eb"/><text x="${L - 6}" y="${y + 4}" font-size="11" text-anchor="end">${+v.toFixed(2)}</text>`; }
  const n = c.labels.length; let body = '', xl = '';
  if (c.kind === 'line') {
    const xs = i => L + (n === 1 ? pw / 2 : pw * i / (n - 1));
    c.labels.forEach((lb, i) => xl += `<text x="${xs(i)}" y="${H - B + 18}" font-size="11" text-anchor="middle">${esc(lb)}</text>`);
    c.series.forEach((s, si) => { const col = PALETTE[si % PALETTE.length]; const pts = s.data.map((v, i) => `${xs(i).toFixed(1)},${(T + ph - ph * v / max).toFixed(1)}`); body += `<polyline fill="none" stroke="${col}" stroke-width="2.5" points="${pts.join(' ')}"/>` + pts.map(p => `<circle cx="${p.split(',')[0]}" cy="${p.split(',')[1]}" r="3.5" fill="${col}"/>`).join(''); });
  } else {
    const gw = pw / n, bw = Math.min(28, (gw * .75) / c.series.length);
    c.labels.forEach((lb, i) => {
      xl += `<text x="${L + gw * i + gw / 2}" y="${H - B + 18}" font-size="11" text-anchor="middle">${esc(lb)}</text>`;
      c.series.forEach((s, si) => { const v = s.data[i]; const bh = ph * v / max; const x = L + gw * i + gw / 2 - (bw * c.series.length) / 2 + bw * si; body += `<rect x="${x.toFixed(1)}" y="${(T + ph - bh).toFixed(1)}" width="${bw.toFixed(1)}" height="${bh.toFixed(1)}" fill="${PALETTE[si % PALETTE.length]}"><title>${esc(s.name)}: ${v}</title></rect>`; });
    });
  }
  const ylab = c.unit ? `<text x="12" y="${T + ph / 2}" font-size="11" transform="rotate(-90 12 ${T + ph / 2})" text-anchor="middle">${esc(c.unit)}</text>` : '';
  const legend = c.series.length > 1 || c.series[0].name ? `<div style="text-align:center">${c.series.map((s, i) => `<span style="display:inline-flex;align-items:center;gap:4px;margin:0 8px;font-size:12px"><i style="width:14px;height:4px;background:${PALETTE[i % PALETTE.length]};display:inline-block"></i>${esc(s.name)}</span>`).join('')}</div>` : '';
  return `<div class="chart">${title}<svg viewBox="0 0 ${W} ${H}" width="${W}">${grid}<line x1="${L}" x2="${L}" y1="${T}" y2="${T + ph}" stroke="#999"/>${body}${xl}${ylab}</svg>${legend}</div>`;
}

/* ---------- Exercise renderers ---------- */
function renderExercise(o, unit) {
  const ex = o.ex;
  const card = h(`<section class="card ex"><div class="card-head"><div>
      <span class="tag" style="background:${BLOOM_COLOR(ex.bloom)}">${BLOOM.find(b => b.id === ex.bloom)?.en}</span>
      <span class="tag type-tag">${TYPE_NAME[ex.type] || ex.type}</span><span class="tag ${LEVELS[lvOf(ex)].cls}" title="Mức hỗ trợ; tương ứng mục tiêu ${LEVELS[lvOf(ex)].band}">${LEVELS[lvOf(ex)].short}</span>${o.extra ? '<span class="tag type-tag">Gemini tạo</span>' : ''}
      <h3 style="margin-top:8px">${fmt(ex.title || '')}</h3></div>
      <div class="row">${progress[o.key] ? `<span class="muted">Tốt nhất: ${progress[o.key].best}%</span>` : ''}${o.extra ? '<button class="btn small ghost del-extra">Xoá</button>' : ''}<button class="btn small ghost flag" title="Báo đáp án/đề có vấn đề: bài sẽ không tính vào tiến độ">${flags.has(o.key) ? '⚑ Đã báo lỗi' : '⚐ Báo lỗi đề'}</button></div></div>
      ${ex.instr ? `<p class="instr">${fmt(ex.instr)}</p>` : ''}
      ${ex.passage ? `<div class="passage">${fmt(ex.passage)}</div>` : ''}
      ${renderChart(ex.chart)}${(ex.extraCharts || []).map(renderChart).join("")}
      <div class="body"></div>
      <div class="actions"></div></section>`);
  const body = $('.body', card), actions = $('.actions', card);
  $('.flag', card).onclick = () => { flags.toggle(o.key); route(); };
  if (flags.has(o.key)) card.classList.add('flagged');
  if (o.extra) $('.del-extra', card).onclick = () => { extras[unit.id + ':' + ex.bloom].splice(o.idx, 1); store.set('kl_extras', extras); route(); };
  const R = RENDER[ex.type];
  if (!R) { body.textContent = 'Dạng bài không hỗ trợ: ' + ex.type; return card; }
  R(ex, body, actions, o, unit);
  return card;
}

function addResult(actions, pct, extraHTML = '') {
  let r = $('.result', actions); if (!r) { r = h('<span class="result"></span>'); actions.appendChild(r); }
  r.innerHTML = `${pct}%${extraHTML}`; r.style.color = pct >= 80 ? 'var(--ok)' : pct >= 50 ? 'inherit' : 'var(--bad)';
}
const xcache = { get(k) { return store.get('kl_explain', {})[k]; }, set(k, v) { const c = store.get('kl_explain', {}); c[k] = v; const ks = Object.keys(c); if (ks.length > 4000) delete c[ks[0]]; store.set('kl_explain', c); } };
const unlocked = () => !!(memKey || ss.get('kl_k'));
function putExplain(el, text, ok) { const f = $('.fbk', el); if (!f) return; f.querySelector('.ai')?.remove(); f.appendChild(h(`<div class="explain ai ${ok ? 'ok' : ''}">🤖 ${fmt(text)}</div>`)); }
async function explainItems(ex, list) {
  const todo = [];
  list.forEach(c => { const v = xcache.get(c.k); if (v) putExplain(c.el, v, c.ok); else todo.push(c); });
  if (!todo.length) return 0;
  const r = await gemini(`You are an IELTS writing teacher explaining answers to a Vietnamese learner (target band ${settings().target}). Exercise: "${ex.title}". ${ex.instr ? 'Instructions: ' + ex.instr : ''}
For EACH item, explain in 2–4 sentences why the correct answer is correct (name the grammar rule / band criterion), and, if the learner was wrong, why their choice is wrong. Be precise and accurate. If you are confident the given key is wrong or the item is ambiguous (another option is also acceptable, or context is missing), say so plainly instead of justifying the key, and set "suspected_key_issue": true for that item. ${langLine()}
Return JSON: {"items":[{"i":0,"explanation":"...","suspected_key_issue":false}]}
DATA: ${JSON.stringify(todo.map((c, i) => ({ i, question: c.q, options: c.options, correct: c.correct, learner: c.learner, learner_was_correct: c.ok })))}`);
  (r.items || []).forEach(x => { const c = todo[+x.i]; if (c && x.explanation) { const t = (x.suspected_key_issue ? '⚠️ Gemini nghi đáp án/đề này có vấn đề — bạn có thể bấm "⚐ Báo lỗi đề" để không tính điểm bài này. ' : '') + x.explanation; xcache.set(c.k, t); putExplain(c.el, t, c.ok); } });
  return todo.length;
}
function explainBtn(actions, ex, getWrong) {
  const b = h('<button class="btn ghost">🤖 Gemini giải thích từng câu</button>');
  const out = h('<div></div>'); actions._explainOut = out;
  b.onclick = async () => {
    const list = getWrong(); out.innerHTML = '';
    if (!list.length) { out.innerHTML = '<div class="explain ok">Bạn đúng hết rồi, và câu nào cũng đã có giải thích 🎉</div>'; return; }
    b.disabled = true; b.innerHTML = '<span class="spinner"></span> Đang hỏi...';
    try {
      if (list[0].el) await explainItems(ex, list);
      else {
        const r = await gemini(`You are an IELTS writing teacher. A Vietnamese learner (target band ${settings().target}) answered these questions wrongly in an exercise titled "${ex.title}". For each, explain briefly why the correct answer is right and why the learner's answer is wrong, with one extra example. ${langLine()}
Return JSON: {"items":[{"q":"...","explanation":"..."}]}
DATA: ${JSON.stringify(list)}`);
        out.innerHTML = (r.items || []).map(it => `<div class="explain"><b>${fmt(it.q)}</b><br>${fmt(it.explanation)}</div>`).join('');
      }
    } catch (e) { out.innerHTML = `<div class="notice err-n">${esc(e.message)}</div>`; }
    b.disabled = false; b.textContent = '🤖 Gemini giải thích từng câu';
  };
  actions.appendChild(b); actions.parentElement.appendChild(out);
}
function afterCheck(actions, ex, need) {
  actions._getWrong = () => need; if (actions._explainOut) actions._explainOut.innerHTML = '';
  if (!$('.explain-ai', actions)) { explainBtn(actions, ex, () => actions._getWrong()); actions.lastElementChild.classList.add('explain-ai'); }
  if (!need.length || !need[0].el) return;
  const cached = need.filter(c => xcache.get(c.k)); cached.forEach(c => putExplain(c.el, xcache.get(c.k), c.ok));
  if (cached.length < need.length && unlocked()) explainItems(ex, need).catch(e => actions._explainOut && (actions._explainOut.innerHTML = `<div class="notice err-n">${esc(e.message)}</div>`));
  else if (cached.length < need.length && !hasKey()) need.filter(c => !xcache.get(c.k)).forEach(c => putExplain(c.el, 'Thêm Gemini API key (⚙) để xem giải thích chi tiết cho câu này.', c.ok));
}
function resetBtn(actions, cb) { const b = h('<button class="btn ghost">Làm lại</button>'); b.onclick = cb; actions.appendChild(b); }

const RENDER = {};

RENDER.mcq = (ex, body, actions, o) => {
  ex.items.forEach((it, i) => {
    const name = 'q' + Math.random().toString(36).slice(2);
    const opts = it.options.map((op, k) => `<label class="opt"><input type="radio" name="${name}" value="${k}"><span>${fmt(op)}</span></label>`).join('');
    body.appendChild(h(`<div class="item" data-i="${i}"><div><span class="qnum">${i + 1}.</span>${fmt(it.q)}</div><div class="opts">${opts}</div><div class="fbk"></div></div>`));
  });
  const check = h('<button class="btn primary">Kiểm tra</button>');
  check.onclick = () => {
    let ok = 0; const wrong = [];
    body.querySelectorAll('.item').forEach(el => {
      const it = ex.items[+el.dataset.i]; const sel = el.querySelector('input:checked'); const v = sel ? +sel.value : -1;
      el.querySelectorAll('.opt').forEach((lab, k) => { lab.classList.toggle('correct', k === it.a); lab.classList.toggle('wrong', k === v && v !== it.a); });
      if (v === it.a) ok++;
      if (v !== it.a || !it.ex) wrong.push({ el, k: o.key + ':' + el.dataset.i, ok: v === it.a, q: it.q, options: it.options, correct: it.options[it.a], learner: v >= 0 ? it.options[v] : '(bỏ trống)' });
      $('.fbk', el).innerHTML = `<div class="explain ${v === it.a ? 'ok' : ''}">${v === it.a ? 'Chính xác.' : 'Đáp án đúng: <b>' + fmt(it.options[it.a]) + '</b>'}${it.ex ? '<br>' + fmt(it.ex) : ''}</div>`;
    });
    const pct = Math.round(ok / ex.items.length * 100); addResult(actions, pct, ` · ${ok}/${ex.items.length}`); record(o.key, pct);
    afterCheck(actions, ex, wrong);
  };
  actions.appendChild(check); resetBtn(actions, () => route());
};

/* Trắc nghiệm 2 tầng: tầng 1 chọn phương án, tầng 2 chọn lý do. 1 điểm khi đúng cả hai, 0,5 khi chỉ đúng tầng 1. */
const hstr = t => [...String(t)].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
const permOf = (n, seed) => { const p = [...Array(n).keys()]; let x = seed || 1; for (let i = n - 1; i > 0; i--) { x = (x * 1103515245 + 12345) >>> 0; const j = x % (i + 1); [p[i], p[j]] = [p[j], p[i]]; } return p; };
RENDER.mcq2 = (ex, body, actions, o) => {
  const view = ex.items.map((it, i) => {
    const p1 = permOf(it.options.length, hstr(it.q + it.options[0])), p2 = permOf(it.why.options.length, hstr(it.why.options.join('|')));
    const n1 = 'a' + Math.random().toString(36).slice(2), n2 = 'b' + Math.random().toString(36).slice(2);
    const L = 'ABCD';
    body.appendChild(h(`<div class="item" data-i="${i}"><div><span class="qnum">${i + 1}.</span>${fmt(it.q || 'Chọn phương án đúng/tốt hơn.')}</div>
      <div class="tier"><div class="tier-h">Tầng 1 · Chọn phương án</div><div class="opts">${p1.map((k, d) => `<label class="opt" data-k="${k}"><input type="radio" name="${n1}" value="${k}"><span><b>${L[d]}.</b> ${fmt(it.options[k])}</span></label>`).join('')}</div></div>
      <div class="tier"><div class="tier-h">Tầng 2 · ${fmt(it.why.q || 'Vì sao?')}</div><div class="opts">${p2.map(k => `<label class="opt" data-k="${k}"><input type="radio" name="${n2}" value="${k}"><span>${fmt(it.why.options[k])}</span></label>`).join('')}</div></div>
      <div class="fbk"></div></div>`));
    return { p1 };
  });
  const check = h('<button class="btn primary">Kiểm tra</button>');
  check.onclick = () => {
    let sum = 0; const need = [];
    body.querySelectorAll('.item').forEach(el => {
      const i = +el.dataset.i, it = ex.items[i]; const [t1, t2] = el.querySelectorAll('.tier');
      const v1 = +(t1.querySelector('input:checked')?.value ?? -1), v2 = +(t2.querySelector('input:checked')?.value ?? -1);
      t1.querySelectorAll('.opt').forEach(l => { const k = +l.dataset.k; l.classList.toggle('correct', k === it.a); l.classList.toggle('wrong', k === v1 && v1 !== it.a); });
      t2.querySelectorAll('.opt').forEach(l => { const k = +l.dataset.k; l.classList.toggle('correct', k === it.why.a); l.classList.toggle('wrong', k === v2 && v2 !== it.why.a); });
      const ok1 = v1 === it.a, ok2 = v2 === it.why.a; const sc = ok1 && ok2 ? 1 : ok1 ? 0.5 : 0; sum += sc;
      const msg = ok1 && ok2 ? 'Chính xác cả hai tầng.' : ok1 ? 'Đúng phương án nhưng chưa đúng lý do (0,5 điểm). Lý do đúng: <b>' + fmt(it.why.options[it.why.a]) + '</b>' : 'Phương án đúng: <b>' + fmt(it.options[it.a]) + '</b><br>Lý do: <b>' + fmt(it.why.options[it.why.a]) + '</b>';
      $('.fbk', el).innerHTML = `<div class="explain ${sc === 1 ? 'ok' : ''}">${msg}${it.ex ? '<br>' + fmt(it.ex) : ''}</div>`;
      if (sc < 1) need.push({ el, k: o.key + ':' + i, ok: false, q: (it.q || '') + ' | Tier 2: ' + (it.why.q || 'Why?'), options: it.options.concat(['— reasons —'], it.why.options), correct: it.options[it.a] + ' / reason: ' + it.why.options[it.why.a], learner: (v1 >= 0 ? it.options[v1] : '(trống)') + ' / reason: ' + (v2 >= 0 ? it.why.options[v2] : '(trống)') });
    });
    const pct = Math.round(sum / ex.items.length * 100); addResult(actions, pct, ` · ${sum}/${ex.items.length}`); record(o.key, pct);
    afterCheck(actions, ex, need);
  };
  actions.appendChild(check); resetBtn(actions, () => route());
};

RENDER.gap = (ex, body, actions, o) => {
  ex.items.forEach((it, i) => {
    const parts = String(it.q).split('___');
    const html = parts.map((p, k) => fmt(p) + (k < parts.length - 1 ? `<input class="gap" data-k="${k}" autocomplete="off" spellcheck="false">` : '')).join('');
    body.appendChild(h(`<div class="item" data-i="${i}"><span class="qnum">${i + 1}.</span>${html}${it.hint ? ` <span class="muted">(${esc(it.hint)})</span>` : ''}<div class="fbk"></div></div>`));
  });
  const check = h('<button class="btn primary">Kiểm tra</button>');
  check.onclick = () => {
    let ok = 0, total = 0; const wrong = [];
    body.querySelectorAll('.item').forEach(el => {
      const it = ex.items[+el.dataset.i]; const inputs = [...el.querySelectorAll('input.gap')];
      // answers: if single blank -> it.a is string or array of alternatives; multiple blanks -> it.a is array of (string|array)
      const keys = inputs.length === 1 ? [arr(it.a)] : arr(it.a).map(arr);
      let allOk = true;
      inputs.forEach((inp, k) => { total++; const good = (keys[k] || []).some(a => norm(a) === norm(inp.value)); inp.classList.toggle('ok', good); inp.classList.toggle('bad', !good); if (good) ok++; else allOk = false; });
      if (!allOk || !it.ex) wrong.push({ el, k: o.key + ':' + el.dataset.i, ok: allOk, q: it.q, correct: keys.map(k => k[0]).join(' | '), learner: inputs.map(i => i.value || '(trống)').join(' | ') });
      $('.fbk', el).innerHTML = allOk ? (it.ex ? `<div class="explain ok">${fmt(it.ex)}</div>` : '') : `<div class="explain">Đáp án: <b>${esc(keys.map(k => k.join(' / ')).join(' | '))}</b>${it.ex ? '<br>' + fmt(it.ex) : ''}</div>`;
    });
    const pct = Math.round(ok / total * 100); addResult(actions, pct, ` · ${ok}/${total}`); record(o.key, pct);
    afterCheck(actions, ex, wrong);
  };
  actions.appendChild(check); resetBtn(actions, () => route());
};

RENDER.match = (ex, body, actions, o) => {
  const options = ex.options || shuffle([...new Set(ex.pairs.map(p => p.r))]);
  ex.pairs.forEach((p, i) => {
    body.appendChild(h(`<div class="match-row" data-i="${i}"><div><span class="qnum">${i + 1}.</span>${fmt(p.l)}</div>
      <select><option value="">— chọn —</option>${options.map(op => `<option>${esc(op)}</option>`).join('')}</select></div>`));
  });
  const fb = h('<div class="fbk"></div>'); body.appendChild(fb);
  const check = h('<button class="btn primary">Kiểm tra</button>');
  check.onclick = () => {
    let ok = 0; const wrong = []; const notes = [];
    body.querySelectorAll('.match-row').forEach(el => {
      const p = ex.pairs[+el.dataset.i]; const s = $('select', el); const good = s.value === p.r;
      s.classList.toggle('ok', good); s.classList.toggle('bad', !good); if (good) ok++; else { wrong.push({ q: p.l, correct: p.r, learner: s.value || '(trống)' }); notes.push(`${+el.dataset.i + 1} → <b>${esc(p.r)}</b>`); }
    });
    fb.innerHTML = notes.length ? `<div class="explain">Đáp án đúng: ${notes.join(' · ')}${ex.ex ? '<br>' + fmt(ex.ex) : ''}</div>` : (ex.ex ? `<div class="explain ok">${fmt(ex.ex)}</div>` : '');
    const pct = Math.round(ok / ex.pairs.length * 100); addResult(actions, pct, ` · ${ok}/${ex.pairs.length}`); record(o.key, pct);
    afterCheck(actions, ex, wrong);
  };
  actions.appendChild(check); resetBtn(actions, () => route());
};

RENDER.order = (ex, body, actions, o) => {
  ex.items.forEach((it, i) => {
    const parts = String(it.words).split(' / ').map(s => s.trim());
    const el = h(`<div class="item" data-i="${i}"><span class="qnum">${i + 1}.</span>${it.q ? fmt(it.q) : '<span class="muted">Bấm các cụm từ theo đúng thứ tự:</span>'}
      <div class="chips pool"></div><div class="chips built"></div><div class="fbk"></div></div>`);
    const pool = $('.pool', el), built = $('.built', el);
    shuffle(parts.map((p, k) => ({ p, k }))).forEach(({ p }) => {
      const c = h(`<button class="chip">${esc(p)}</button>`);
      c.onclick = () => { (c.parentElement === pool ? built : pool).appendChild(c); };
      pool.appendChild(c);
    });
    el._answer = () => [...built.children].map(c => c.textContent).join(' ');
    el._correct = arr(it.a).length ? arr(it.a) : [parts.join(' ')];
    body.appendChild(el);
  });
  const check = h('<button class="btn primary">Kiểm tra</button>');
  check.onclick = () => {
    let ok = 0; const wrong = [];
    body.querySelectorAll('.item').forEach(el => {
      const it = ex.items[+el.dataset.i]; const ans = el._answer(); const good = el._correct.some(c => norm(c) === norm(ans));
      $('.built', el).classList.toggle('ok', good); $('.built', el).style.borderColor = good ? 'var(--ok)' : 'var(--bad)';
      if (good) ok++;
      if (!good || !it.ex) wrong.push({ el, k: o.key + ':' + el.dataset.i, ok: good, q: it.words, correct: el._correct[0], learner: ans || '(trống)' });
      $('.fbk', el).innerHTML = good ? (it.ex ? `<div class="explain ok">${fmt(it.ex)}</div>` : '') : `<div class="explain">Đáp án: <b>${esc(el._correct[0])}</b>${it.ex ? '<br>' + fmt(it.ex) : ''}</div>`;
    });
    const pct = Math.round(ok / ex.items.length * 100); addResult(actions, pct, ` · ${ok}/${ex.items.length}`); record(o.key, pct);
    afterCheck(actions, ex, wrong);
  };
  actions.appendChild(check); resetBtn(actions, () => route());
};

RENDER.rewrite = (ex, body, actions, o) => {
  ex.items.forEach((it, i) => {
    body.appendChild(h(`<div class="item" data-i="${i}"><div><span class="qnum">${i + 1}.</span>${fmt(it.q)}</div>
      ${it.hint ? `<div class="muted" style="font-size:.88rem">Gợi ý: ${fmt(it.hint)}</div>` : ''}
      <textarea rows="2" style="min-height:60px;margin-top:6px" spellcheck="false"></textarea><div class="fbk"></div></div>`));
  });
  const check = h('<button class="btn primary">🤖 Gemini chấm</button>');
  const show = h('<button class="btn ghost">Xem đáp án mẫu</button>');
  show.onclick = () => body.querySelectorAll('.item').forEach(el => { const it = ex.items[+el.dataset.i]; $('.fbk', el).innerHTML = `<div class="explain">Mẫu: <b>${esc(arr(it.a).join('  |  '))}</b></div>`; });
  check.onclick = async () => {
    const items = [...body.querySelectorAll('.item')].map(el => ({ el, it: ex.items[+el.dataset.i], ans: $('textarea', el).value.trim() }));
    // local exact match first
    const pending = items.filter(x => !arr(x.it.a).some(a => norm(a) === norm(x.ans)));
    let results = {};
    if (pending.length && pending.some(x => x.ans)) {
      check.disabled = true; check.innerHTML = '<span class="spinner"></span> Đang chấm...';
      try {
        const r = await gemini(`You are a strict but encouraging IELTS writing teacher. Grade each learner sentence for the task given. Accept any answer that is grammatically correct, natural and fulfils the instruction even if different from the sample. ${langLine()}
You are giving feedback on post-video practice, not grading an IELTS exam. Judge SEPARATELY: (a) grammatical accuracy, (b) whether meaning/information of the original is kept, (c) whether the REQUIRED structure stated in the instruction (if any) is used. A sentence that is correct English but lacks the required structure has NOT completed the task, but it is not "wrong English" — say so explicitly. Style suggestions are optional and must not lower the score. If the sample answer or the task itself looks wrong or ambiguous, set "suspected_key_issue": true and explain instead of forcing a judgement. Give one fix hint first, then the corrected version.
Return JSON: {"results":[{"id":0,"grammar_ok":true,"meaning_kept":true,"requirement":"met|partly|not_met|none","score":0-1 (1 = grammar ok + meaning kept + requirement met or none; 0.5 = correct English but requirement partly/not met, or one minor slip; 0 = grammatically wrong or meaning changed),"feedback":"short explanation","hint":"one fix hint","corrected":"best corrected version of the learner's sentence","style_tip":"optional, not penalised","suspected_key_issue":false}]}
Exercise: ${ex.title}. Instruction: ${ex.instr || ''}
ITEMS: ${JSON.stringify(pending.filter(x => x.ans).map(x => ({ id: ex.items.indexOf(x.it), task: x.it.q, sample: arr(x.it.a), learner: x.ans })))}`);
        (r.results || []).forEach(x => results[x.id] = x);
      } catch (e) { actions.parentElement.appendChild(h(`<div class="notice err-n">${esc(e.message)} — bạn có thể bấm "Xem đáp án mẫu" để tự so.</div>`)); }
      check.disabled = false; check.textContent = '🤖 Gemini chấm';
    }
    let sum = 0;
    items.forEach(x => {
      const id = ex.items.indexOf(x.it); const ta = $('textarea', x.el);
      let sc, fbHTML;
      if (arr(x.it.a).some(a => norm(a) === norm(x.ans))) { sc = 1; fbHTML = `<div class="explain ok">Chính xác!${x.it.ex ? ' ' + fmt(x.it.ex) : ''}</div>`; }
      else if (!x.ans) { sc = 0; fbHTML = `<div class="explain">Bạn chưa trả lời. Mẫu: <b>${esc(arr(x.it.a)[0])}</b></div>`; }
      else if (results[id]) { const r = results[id]; sc = Math.max(0, Math.min(1, +r.score || 0));
        const badge = (ok, t) => `<span class="pill ${ok ? 'ok' : 'no'}">${ok ? '✓' : '✗'} ${t}</span>`;
        const req = r.requirement && r.requirement !== 'none' ? badge(r.requirement === 'met', r.requirement === 'met' ? 'Đúng cấu trúc yêu cầu' : r.requirement === 'partly' ? 'Cấu trúc yêu cầu: chưa đủ' : 'Chưa dùng cấu trúc yêu cầu') : '';
        fbHTML = `<div class="explain ${sc >= 1 ? 'ok' : ''}"><div class="pills">${badge(r.grammar_ok !== false, 'Ngữ pháp')}${badge(r.meaning_kept !== false, 'Giữ nghĩa')}${req}</div>${r.suspected_key_issue ? '⚠️ Gemini nghi đề/đáp án mẫu có vấn đề. ' : ''}${fmt(r.feedback)}${sc < 1 && r.hint ? `<br>💡 ${fmt(r.hint)}` : ''}${sc < 1 && r.corrected ? `<details><summary>Xem câu đã sửa</summary><b>${esc(r.corrected)}</b><br><span class="muted">Mẫu: ${esc(arr(x.it.a)[0])}</span></details>` : ''}${r.style_tip ? `<br><span class="muted">Gợi ý văn phong (không trừ điểm): ${fmt(r.style_tip)}</span>` : ''}</div>`; }
      else { sc = 0; fbHTML = `<div class="explain">Chưa chấm được. Mẫu: <b>${esc(arr(x.it.a).join(' | '))}</b></div>`; }
      ta.classList.toggle('ok', sc >= 1); ta.classList.toggle('bad', sc < .5);
      $('.fbk', x.el).innerHTML = fbHTML; sum += sc;
    });
    const pct = Math.round(sum / items.length * 100); addResult(actions, pct); record(o.key, pct);
  };
  actions.append(check, show); resetBtn(actions, () => route());
};

RENDER.write = (ex, body, actions, o, unit) => {
  const draftKey = 'kl_draft_' + o.key;
  const kindLabel = ex.kind === 'task1' ? 'IELTS Writing Task 1' : ex.kind === 'task2' ? 'IELTS Writing Task 2' : 'Đoạn văn luyện ngữ pháp';
  body.appendChild(h(`<div><div class="passage" style="white-space:normal">${fmt(ex.prompt)}</div>
    ${ex.focus ? `<div class="meta"><span>🎯 Trọng tâm: ${esc(arr(ex.focus).join(', '))}</span></div>` : ''}
    ${ex.tips ? `<details class="theory" style="margin:8px 0"><summary>Gợi ý dàn ý</summary><ul>${arr(ex.tips).map(t => `<li>${fmt(t)}</li>`).join('')}</ul></details>` : ''}
    ${(() => { const st = recentErrorStats(); return st.length ? `<div class="notice">📒 Sổ lỗi của bạn (5 bài gần nhất): ${st.slice(0, 4).map(([t, n]) => `<b>${esc(ERR_TAGS[t] || t)}</b> ×${n}`).join(' · ')} — chú ý khi viết bài này.</div>` : ''; })()}
    <textarea class="essay" spellcheck="false" placeholder="Viết bài của bạn ở đây..."></textarea>
    <div class="meta"><span class="wc">0 từ</span>${ex.minWords ? `<span>Tối thiểu: ${ex.minWords} từ</span>` : ''}<span class="timer">⏱ 00:00</span><span class="muted">Bản nháp tự lưu</span></div>
    <div class="fbout"></div></div>`));
  const ta = $('textarea', body), wc = $('.wc', body), tm = $('.timer', body), out = $('.fbout', body);
  if (ex.kind !== 'task1' && ex.kind !== 'task2') ta.classList.remove('essay');
  ta.value = store.get(draftKey, '');
  let start = null, timer;
  const upd = () => { const n = words(ta.value); wc.textContent = n + ' từ'; wc.style.color = ex.minWords && n < ex.minWords ? 'var(--bad)' : 'inherit'; };
  upd();
  ta.addEventListener('input', () => {
    upd(); store.set(draftKey, ta.value);
    if (!start) { start = Date.now(); timer = setInterval(() => { if (!document.body.contains(ta)) return clearInterval(timer); const s = Math.floor((Date.now() - start) / 1000); tm.textContent = `⏱ ${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`; }, 1000); }
  });
  const btn = h('<button class="btn primary">🤖 Gemini chấm & chữa</button>');
  /* Pre-flight checklist: tự soát trước khi gửi chấm */
  const pf = [...(unit.outcome ? unit.outcome.check : []), ...arr(ex.focus).map(f => 'Đã dùng đúng chỗ: ' + f)].slice(0, 6);
  if (ex.kind === 'task1' && isFullTask(ex)) pf.push('Overview nêu đặc điểm chính, không có số liệu chi tiết', 'Số liệu đã đối chiếu lại với biểu đồ');
  if (ex.kind === 'task2' && isFullTask(ex)) pf.push('Thesis trả lời đúng mọi phần đề và khớp kết luận');
  if (pf.length) {
    const box = h(`<div class="preflight"><div class="pf-h">✅ Tự soát trước khi gửi chấm <span class="muted">(tích đủ để mở nút chấm)</span></div>${pf.map((t, i) => `<label><input type="checkbox" data-i="${i}"> ${fmt(t)}</label>`).join('')}</div>`);
    const sync = () => { const all = [...box.querySelectorAll('input')].every(c => c.checked); btn.disabled = !all; btn.title = all ? '' : 'Tích đủ các ô tự soát trước'; };
    box.addEventListener('change', sync); out.before(box); sync();
  }
  btn.onclick = async () => {
    const text = ta.value.trim();
    if (words(text) < 15) { out.innerHTML = '<div class="notice">Bài quá ngắn để chấm, hãy viết thêm nhé.</div>'; return; }
    btn.disabled = true; btn.innerHTML = '<span class="spinner"></span> Đang chấm (10–40 giây)...';
    try {
      const r = await gemini(writingPrompt(ex, text, unit), { temperature: 0.3 });
      const full = isFullTask(ex); r.full = full;
      out.innerHTML = renderFeedback(r, { kind: ex.kind, full });
      /* Tiến độ: bài hoàn chỉnh so với band mục tiêu (đạt mục tiêu ≈ 85%), không dùng band/9 */
      const pct = full ? Math.round(Math.min(100, (+r.overall || 0) / (+settings().target || 6.5) * 85)) : Math.round((+r.overall || 0) * 10);
      record(o.key, Math.min(100, pct));
      const hist = store.get('kl_history', []);
      hist.unshift({ id: Date.now(), unitId: unit.id, unitTitle: unit.title, title: ex.title, kind: ex.kind, prompt: ex.prompt, chart: ex.chart || null, text, result: r, at: Date.now() });
      store.set('kl_history', hist.slice(0, 200));
    } catch (e) { out.innerHTML = `<div class="notice err-n">${esc(e.message)}</div>`; }
    btn.disabled = false; btn.textContent = '🤖 Gemini chấm & chữa';
  };
  actions.appendChild(btn);
  if (ex.sample) { const s = h('<button class="btn ghost">Xem bài mẫu</button>'); s.onclick = () => { out.innerHTML = `<div class="fb"><h3>Bài mẫu tham khảo</h3><div class="improved">${esc(ex.sample)}</div></div>`; }; actions.appendChild(s); }
  const clr = h('<button class="btn ghost">Xoá nháp</button>'); clr.onclick = () => { if (clr.dataset.armed) { ta.value = ''; store.set(draftKey, ''); upd(); clr.textContent = 'Xoá nháp'; delete clr.dataset.armed; } else { clr.dataset.armed = 1; clr.textContent = 'Bấm lần nữa để xoá'; setTimeout(() => { delete clr.dataset.armed; clr.textContent = 'Xoá nháp'; }, 3000); } }; actions.appendChild(clr);
};

/* Bài hoàn chỉnh (Task 1 ≥150 từ, Task 2 ≥250 từ) → ước lượng band theo band descriptors công khai (bản cập nhật 05/2023).
   Bài ngắn (câu, đoạn, Intro + Overview...) → chấm theo tiêu chí của unit, KHÔNG ước lượng band. */
const isFullTask = ex => (ex.kind === 'task1' && (ex.minWords || 150) >= 150) || (ex.kind === 'task2' && (ex.minWords || 250) >= 250);
const KL_DESCRIPTORS = `IELTS WRITING BAND DESCRIPTORS (public version updated May 2023), paraphrased summary:
GENERAL: a script must FULLY fit the positive features of a band to be awarded it; negative features limit the rating. A response of 20 words or fewer = Band 1. Significantly under-length responses or responses relying on copied/memorised language are Band 3 features. Copied rubric is discounted.
TASK ACHIEVEMENT (Task 1 Academic): 9 all requirements fully and appropriately met, extremely rare lapses. 8 requirements covered appropriately, relevantly and sufficiently; key features skilfully selected; occasional omissions. 7 requirements covered with a few omissions or lapses; a CLEAR OVERVIEW; data appropriately categorised; main trends/differences identified. 6 focuses on the task, appropriate format; a relevant overview is ATTEMPTED; data supports information; some irrelevant/inaccurate detail possible. 5 task generally addressed; key features not adequately covered; detail MECHANICALLY RECOUNTED; may lack data; tends to focus on detail without the bigger picture. 4 attempt to address the task; few key features; points may be irrelevant, repetitive or inaccurate.
TASK RESPONSE (Task 2): 9 prompt explored in depth; clear, fully developed position directly answering the question; ideas fully extended and supported. 8 prompt appropriately and sufficiently addressed; clear, well-developed position; ideas well extended and supported; occasional omissions. 7 main parts addressed; clear, developed position; main ideas extended and supported but may over-generalise or lack precision in support. 6 main parts addressed, some more fully than others; position relevant but conclusions may be unclear, unjustified or repetitive; some ideas underdeveloped or support less relevant. 5 main parts incompletely addressed; position expressed but development unclear; ideas limited/underdeveloped, possible irrelevance and repetition. 4 prompt tackled minimally or tangentially; position discernible only with careful reading; main ideas hard to identify.
COHERENCE & COHESION: 9 cohesion attracts no attention; skilful paragraphing. 8 logical sequencing, cohesion well managed, occasional lapses, sufficient paragraphing. 7 logical organisation, clear progression; a range of cohesive devices incl. reference and substitution used flexibly with some inaccuracy or over/under-use. 6 generally coherent, clear overall progression; devices used to good effect but may be faulty or MECHANICAL; reference may be unclear; paragraphing may be inconsistent. 5 organisation evident but not wholly logical; sentences poorly linked; devices limited, overused or inaccurate. 4 no clear progression; basic devices, inaccurate or repetitive.
LEXICAL RESOURCE: 9 wide, natural, sophisticated control; extremely rare errors. 8 wide resource used fluently and flexibly for precise meaning; skilful uncommon/idiomatic items with occasional inaccuracy. 7 sufficient for some flexibility and precision; some less common items; awareness of style and collocation with some inappropriacies; few spelling/word-formation errors. 6 generally adequate; meaning clear despite restricted range or imprecision; some errors that do not impede. 5 limited but minimally adequate; frequent lapses and repetition; noticeable errors. 4 basic, repetitive; errors may impede meaning.
GRAMMATICAL RANGE & ACCURACY: 9 full flexibility and control; extremely rare minor errors. 8 wide range used flexibly and accurately; MAJORITY of sentences error-free; occasional non-systematic errors. 7 variety of complex structures with some flexibility and accuracy; error-free sentences are FREQUENT; a few errors. 6 mix of simple and complex forms with limited flexibility; complex structures less accurate; errors rarely impede. 5 limited, repetitive range; complex sentences often faulty; errors may be frequent. 4 very limited range; frequent errors that may impede.`;
const ERR_TAGS = { agreement: 'Hoà hợp chủ–vị', article: 'Mạo từ', countable: 'Danh từ đếm được/không đếm được', tense: 'Thì', verb_form: 'Dạng động từ', word_form: 'Từ loại', preposition: 'Giới từ / collocation', word_choice: 'Chọn từ', spelling: 'Chính tả', sentence_boundary: 'Fragment / comma splice / run-on', relative_clause: 'Mệnh đề quan hệ', participle: 'Phân từ / phân từ treo', passive: 'Bị động', comparison: 'So sánh', punctuation: 'Dấu câu', referencing: 'Tham chiếu', linker: 'Từ nối máy móc / sai', overview: 'Overview', data_accuracy: 'Số liệu sai/thiếu', position: 'Lập trường', development: 'Phát triển ý', relevance: 'Lạc đề / thừa', register: 'Văn phong' };
function recentErrorStats(n = 5) {
  const hist = store.get('kl_history', []).slice(0, n); const c = {};
  hist.forEach(x => (x.result?.errors || []).forEach(e => { const t = e.tag || e.type; if (t) c[t] = (c[t] || 0) + 1; }));
  return Object.entries(c).sort((a, b) => b[1] - a[1]);
}
function writingPrompt(ex, text, unit) {
  const s = settings();
  const tags = Object.keys(ERR_TAGS).join('|');
  const upgradeSpec = `"key_upgrades":[{"from":"exact phrase from the learner's text","to":"upgraded version","why":"one line: which criterion it helps and why"}] (exactly 3, the most valuable)`;
  if (isFullTask(ex)) {
    const crit1 = ex.kind === 'task1' ? 'Task Achievement' : 'Task Response';
    return `You are an experienced IELTS Writing examiner. Rate this ${ex.kind === 'task1' ? 'Academic Writing Task 1' : 'Writing Task 2'} response against the descriptors below. Rate each of the four criteria INDEPENDENTLY; for each, award the highest band whose positive features the script FULLY fits, and quote short evidence from the script. Be realistic, not generous: long sentences, inversion, nominalisation or rare words are NOT in themselves evidence of a high band — only accurate, flexible, appropriate use counts. The learner's target band (${s.target}) must NOT influence the bands; use it only to tailor advice. Word count: ${words(text)} (expected at least ${ex.minWords || (ex.kind === 'task1' ? 150 : 250)}); judge length only through its effect on the criteria as the descriptors describe. If the task prompt itself seems flawed, say so in "notes".
${KL_DESCRIPTORS}
For "overall", report the mean of the four criterion bands rounded to the nearest 0.5 (app convention for a single task; label it an estimate).
Advice style reference (course frameworks; use ONLY for upgrade suggestions, never to set bands): ${KL_MATRIX}
${langLine()}
Return JSON only:
{"overall": number,
 "criteria":[{"name":"${crit1}","band":n,"evidence":"short quote(s)","comment":"what limits it, per descriptors"},{"name":"Coherence and Cohesion","band":n,"evidence":"...","comment":"..."},{"name":"Lexical Resource","band":n,"evidence":"...","comment":"..."},{"name":"Grammatical Range and Accuracy","band":n,"evidence":"...","comment":"..."}],
 "strengths":["..."],
 "errors":[{"original":"exact phrase","correction":"...","tag":"${tags}","explanation":"..."}] (up to 15 most important),
 ${upgradeSpec},
 "improved_version":"a revised version keeping the learner's ideas, about one band higher than the observed level",
 "next_steps":["3 concrete things to practise next"],
 "notes":"optional"}
TASK PROMPT: ${ex.prompt}${chartToText(ex.chart)}
LEARNER RESPONSE:
"""${text}"""`;
  }
  const oc = unit.outcome;
  return `You are giving feedback on a short post-video practice task, NOT grading a full IELTS answer. Do NOT estimate an IELTS band from a text this short.
Lesson: ${unit.title}. ${oc ? 'Lesson outcome: ' + oc.text + ' Checklist: ' + oc.check.join('; ') + '.' : ''}
Required focus for this task: ${arr(ex.focus).join(', ') || '(none stated)'}.
Assess SEPARATELY and score each 0–10: (1) "Đúng yêu cầu bài" — the text does what the task asks (content, length, data accuracy if data is given); (2) "Chính xác ngôn ngữ" — grammar and vocabulary accuracy; (3) "Cấu trúc/kỹ năng trọng tâm" — whether the required focus is used correctly and where it fits (do not reward forcing structures where they do not fit); (4) "Mạch lạc" — logical order and linking. Style preferences that are not errors go in "style_tips" and do not lower scores. If the learner's choice is valid but different from what you would write, accept it. If the task is ambiguous, say so in "notes".
Learner is Vietnamese; target band ${s.target} (use only to tailor advice). ${langLine()}
Return JSON only:
{"overall": number 0-10 (mean of the four),
 "criteria":[{"name":"Đúng yêu cầu bài","band":0-10,"comment":"..."},{"name":"Chính xác ngôn ngữ","band":0-10,"comment":"..."},{"name":"Cấu trúc/kỹ năng trọng tâm","band":0-10,"comment":"..."},{"name":"Mạch lạc","band":0-10,"comment":"..."}],
 "focus_check":[{"item":"each required focus","status":"met|partly|not_met","note":"..."}],
 "strengths":["..."],
 "errors":[{"original":"...","correction":"...","tag":"${tags}","explanation":"..."}],
 ${upgradeSpec},
 "style_tips":["optional"],
 "improved_version":"improved text keeping the learner's ideas",
 "next_steps":["..."],
 "notes":"optional"}
TASK: ${ex.prompt}${chartToText(ex.chart)}
LEARNER TEXT:
"""${text}"""`;
}

function renderFeedback(r, ex) {
  const isBand = ex.full != null ? ex.full : (ex.kind === 'task1' || ex.kind === 'task2') && +r.overall > 0 && !r.focus_check;
  const st = { met: '✅', partly: '🟡', not_met: '❌' };
  return `<div class="fb">
    <div class="band">${esc(r.overall)}<small>${isBand ? 'Band ước lượng' : '/ 10'}</small></div>
    ${isBand ? '<p class="muted" style="font-size:.85rem;margin-top:0">Ước lượng của AI theo band descriptors công khai, <b>chưa được hiệu chuẩn</b> với giám khảo thật — dùng để định hướng luyện tập, không thay điểm thi.</p>' : '<p class="muted" style="font-size:.85rem;margin-top:0">Bài luyện ngắn: chấm theo tiêu chí của bài học, không quy ra band IELTS.</p>'}
    <div class="crit">${(r.criteria || []).map(c => `<div><b>${esc(c.name)}: ${esc(c.band)}</b><span>${fmt(c.comment)}${c.evidence ? `<br><i class="muted">Dẫn chứng: ${esc(c.evidence)}</i>` : ''}</span></div>`).join('')}</div>
    ${r.focus_check?.length ? `<h3>🎯 Trọng tâm của bài</h3><ul>${r.focus_check.map(f => `<li>${st[f.status] || '•'} <b>${esc(f.item)}</b>${f.note ? ' — ' + fmt(f.note) : ''}</li>`).join('')}</ul>` : ''}
    ${r.strengths?.length ? `<h3>👍 Điểm tốt</h3><ul>${r.strengths.map(s => `<li>${fmt(s)}</li>`).join('')}</ul>` : ''}
    ${r.errors?.length ? `<h3>✏️ Lỗi cần sửa (${r.errors.length})</h3>${r.errors.map(e => `<div class="err"><del>${esc(e.original)}</del> → <ins>${esc(e.correction)}</ins> <span class="muted">[${esc(ERR_TAGS[e.tag] || e.tag || e.type || '')}]</span><br><span>${fmt(e.explanation)}</span></div>`).join('')}` : ''}
    ${r.key_upgrades?.length ? `<h3>🔑 3 nâng cấp đáng giá nhất</h3>${r.key_upgrades.map(u => `<div class="err"><del>${esc(u.from)}</del> → <ins>${esc(u.to)}</ins><br><span class="muted">${fmt(u.why)}</span></div>`).join('')}` : ''}
    ${r.style_tips?.length ? `<h3>🎨 Gợi ý văn phong (không trừ điểm)</h3><ul>${r.style_tips.map(s => `<li>${fmt(s)}</li>`).join('')}</ul>` : ''}
    ${r.improved_version ? `<details class="upg"><summary>✨ Xem bản nâng cấp <span class="muted">(nên tự sửa các câu ở trên trước rồi mới mở)</span></summary><div class="improved">${esc(r.improved_version)}</div></details>` : ''}
    ${r.next_steps?.length ? `<h3>🧭 Bước tiếp theo</h3><ul>${r.next_steps.map(s => `<li>${fmt(s)}</li>`).join('')}</ul>` : ''}
    ${r.notes ? `<p class="muted">Ghi chú: ${fmt(r.notes)}</p>` : ''}</div>`;
}

/* ---------- Generate more with Gemini ---------- */
const SCHEMA = {
  mcq: '{"type":"mcq","title":"...","instr":"...","items":[{"q":"question text","options":["A","B","C","D"],"a":0,"ex":"explanation"}]}  (a = index of correct option)',
  gap: '{"type":"gap","title":"...","instr":"...","items":[{"q":"sentence with ___ for the blank","a":["accepted answer","alternative"],"hint":"base word (optional)","ex":"explanation"}]}',
  match: '{"type":"match","title":"...","instr":"...","pairs":[{"l":"left item","r":"matching right item or category"}],"ex":"overall note"}',
  order: '{"type":"order","title":"...","instr":"...","items":[{"words":"chunk1 / chunk2 / chunk3 / chunk4","ex":"note"}]}  (chunks in the correct order, separated by " / ")',
  mcq2: '{"type":"mcq2","title":"...","instr":"Tầng 1: chọn phương án tốt hơn. Tầng 2: chọn lý do đúng.","items":[{"q":"context / question","options":["version A","version B"],"a":0,"why":{"q":"Vì sao?","options":["reason 1","reason 2","reason 3"],"a":0},"ex":"feedback"}]}  (tier 1 = choose the better/correct option, tier 2 = choose the correct reason; options of similar length so length gives no clue)',
  rewrite: '{"type":"rewrite","title":"...","instr":"...","items":[{"q":"task / original sentence","hint":"optional","a":["model answer","alternative"]}]}',
  write: '{"type":"write","kind":"grammar|task1|task2","title":"...","prompt":"full task prompt","minWords":n,"focus":["..."],"tips":["outline tip"],"chart":null}  — for task1 include "chart": one of {"kind":"line"|"bar","title":"...","unit":"...","labels":[...],"series":[{"name":"...","data":[numbers]}]} | {"kind":"pie","unit":"%","pies":[{"title":"...","slices":[{"name":"...","value":n}]}]} | {"kind":"table","title":"...","headers":[...],"rows":[[...]]} | {"kind":"process","title":"...","steps":[...]} | {"kind":"map","maps":[{"title":"...","items":[{"name":"...","x":0-100,"y":0-100,"w":n,"h":n}]}]}',
};
async function generateMore(unit, bloom, type, btn) {
  const sample = (unit.exercises || []).find(e => e.bloom === bloom && e.type === type) || (unit.exercises || []).find(e => e.type === type);
  btn.disabled = true; btn.innerHTML = '<span class="spinner"></span> Gemini đang soạn bài...';
  try {
    const kindHint = type === 'write' ? `Use "kind":"${unit.stage === 'grammar' ? 'grammar' : unit.stage}".` : '';
    const lv = store.get('kl_lvfilter', 0) || (+settings().target >= 7.5 ? 3 : 2);
    const r = await gemini(`You are an experienced IELTS teacher creating ORIGINAL practice material for a Vietnamese learner (target band ${settings().target}), following the teaching approach of the Vietnamese IELTS teacher Kien Luyen.
DIFFICULTY: Level ${lv} = ${['', 'GUIDED (models, word banks or frames given)', 'REDUCED SUPPORT (learner chooses how to handle short input)', 'INDEPENDENT (new context, learner must weigh meaning and self-check)'][lv]}. The matrix below describes typical language at each level; use it as reference, not as a rule that longer = better.
${KL_MATRIX}
Lesson: "${unit.title}" — ${unit.desc}
${ITEM_RULES(unit)}
Bloom's taxonomy level: ${bloom.toUpperCase()} (${BLOOM.find(b => b.id === bloom).desc}).
Create ONE new exercise of type "${type}" with ${type === 'write' ? 'one task' : '6 items'}, different from the sample, accurate and unambiguous (only one correct answer for objective items). Instructions and explanations: ${settings().fbLang === 'en' ? 'English' : 'Vietnamese'}; exercise content in English. ${kindHint}
Return JSON exactly in this schema: ${SCHEMA[type]}
${sample ? 'SAMPLE (do not copy): ' + JSON.stringify(sample).slice(0, 2500) : ''}`, { temperature: 0.9 });
    const ex = Object.assign(r.exercise || r, { bloom, type, lv });
    if (!validEx(ex)) throw new Error('Gemini trả về bài không đúng định dạng, hãy thử lại.');
    const k = unit.id + ':' + bloom; (extras[k] = extras[k] || []).push(ex); store.set('kl_extras', extras); route();
  } catch (e) { btn.disabled = false; btn.textContent = '✨ Thử lại'; btn.title = e.message; btn.insertAdjacentHTML('afterend', `<div class="notice err-n">${esc(e.message)}</div>`); }
}
const BLOOM_TYPES = { remember: ['gap', 'mcq', 'match'], understand: ['mcq2', 'match', 'gap'], apply: ['gap', 'rewrite', 'order'], analyze: ['match', 'mcq2', 'rewrite'], evaluate: ['mcq2', 'rewrite'], create: ['write'] };
/* Quy tắc soạn bài chung (theo đề xuất thiết kế: đo đúng mục tiêu, phương án nhiễu là lỗi có thật, không làm khó bằng từ hiếm) */
const ITEM_RULES = unit => `ITEM-WRITING RULES: (1) Every item must test the lesson outcome: ${unit.outcome ? unit.outcome.text : unit.title}. (2) Distractors must reflect REAL learner errors${unit.stage === 'grammar' ? ' of form, meaning or use for this grammar point' : ' of STRATEGY and THINKING for this task type (e.g. an overview with detailed numbers, a topic sentence covering only one of two ideas, a vague solution that does not address the cause, a linker such as Moreover whose sentence adds nothing, describing trends for single-year data, invented causes in Task 1) — NOT single-letter grammar slips'}. (3) The correct option must not be identifiable by length or polish; keep options similar in length and register. (4) Exactly one defensible key; if two options could both be acceptable, rewrite the item or state the selection criterion in the question. (5) Do not raise difficulty with rare vocabulary; raise it by reducing support, adding decisions, or using unfamiliar contexts. (6) Never teach absolute rules that are false (e.g. that increase can never be passive, or that sentences cannot start with because).`;
async function generateBatch(unit, bloom, lv, btn, n = 5) {
  const types = BLOOM_TYPES[bloom] || ['mcq'];
  const samples = (unit.exercises || []).filter(e => e.bloom === bloom && lvOf(e) === lv).slice(0, 2);
  const label = btn.textContent; btn.disabled = true; btn.innerHTML = '<span class="spinner"></span> Gemini đang soạn ' + n + ' bài...';
  try {
    const want = bloom === 'create' ? Math.min(n, 3) : n;
    const r = await gemini(`You are an experienced IELTS teacher creating ORIGINAL practice material for a Vietnamese learner, following the teaching approach of the Vietnamese IELTS teacher Kien Luyen.
DIFFICULTY: Level ${lv} = ${['', 'GUIDED (models, word banks or frames given)', 'REDUCED SUPPORT (learner chooses how to handle short input)', 'INDEPENDENT (new context, learner must weigh meaning and self-check)'][lv]}. The matrix below describes typical language at each level; use it as reference, not as a rule that longer = better.
${KL_MATRIX}
Lesson: "${unit.title}" — ${unit.desc}
${ITEM_RULES(unit)}
Bloom's taxonomy level: ${bloom.toUpperCase()} (${BLOOM.find(b => b.id === bloom).desc}).
Create ${want} NEW, DIFFERENT exercises for this lesson, Bloom level and difficulty. Use a mix of these types: ${types.join(', ')}. ${bloom === 'create' ? `Each is a writing task with "kind":"${unit.stage === 'grammar' ? 'grammar' : unit.stage}"${unit.stage === 'task1' ? ' and a realistic original chart' : ''}${lv === 1 ? '; make them guided (shorter, with sentence starters in the prompt)' : ''}.` : 'Each objective exercise has 5 items; every item must have exactly one correct answer.'} Vary topics (education, environment, technology, health, work, cities, culture). Instructions and explanations: ${settings().fbLang === 'en' ? 'English' : 'Vietnamese'}; exercise content in English.
Return JSON: {"exercises":[ ... ]} where each exercise follows the schema for its type:
${types.map(t => t + ': ' + SCHEMA[t]).join('\n')}
${samples.length ? 'SAMPLES of the expected level (do not copy): ' + JSON.stringify(samples).slice(0, 3000) : ''}`, { temperature: 0.9 });
    const list = (r.exercises || (Array.isArray(r) ? r : [r])).map(e => Object.assign(e, { bloom, lv, type: e.type || types[0] })).filter(e => types.includes(e.type) && validEx(e));
    if (!list.length) throw new Error('Gemini trả về bài không đúng định dạng, hãy thử lại.');
    const k = unit.id + ':' + bloom; (extras[k] = extras[k] || []).push(...list); store.set('kl_extras', extras); route();
  } catch (e) { btn.disabled = false; btn.textContent = label; btn.title = e.message; btn.insertAdjacentHTML('afterend', `<div class="notice err-n">${esc(e.message)}</div>`); }
}
function validEx(ex) {
  try {
    if (ex.type === 'mcq') return ex.items.length && ex.items.every(i => Array.isArray(i.options) && Number.isInteger(i.a) && i.a < i.options.length);
    if (ex.type === 'mcq2') return ex.items.length && ex.items.every(i => Array.isArray(i.options) && Number.isInteger(i.a) && i.a < i.options.length && i.why && Array.isArray(i.why.options) && Number.isInteger(i.why.a) && i.why.a < i.why.options.length);
    if (ex.type === 'gap') return ex.items.length && ex.items.every(i => String(i.q).includes('___') && arr(i.a).length);
    if (ex.type === 'match') return ex.pairs.length > 1;
    if (ex.type === 'order') return ex.items.length && ex.items.every(i => String(i.words).includes(' / '));
    if (ex.type === 'rewrite') return ex.items.length && ex.items.every(i => i.q && arr(i.a).length);
    if (ex.type === 'write') { if (ex.chart == null) delete ex.chart; if (ex.chart) renderChart(ex.chart); return !!ex.prompt; }
  } catch { return false; }
  return false;
}

/* ---------- Views ---------- */
function renderSidebar() {
  const cur = curHash.split('/')[2];
  $('#sidebar').innerHTML = STAGES.map(st => `<div class="stage"><h4>${esc(st.name)}</h4>${UNITS.filter(u => u.stage === st.id).map(u => {
    const dots = BLOOM.map(b => { const s = levelScore(u, b.id); return `<span class="dot" title="${b.en}${s != null ? ': ' + s + '%' : ''}" style="${s != null ? `background:${BLOOM_COLOR(b.id)};opacity:${s >= 80 ? 1 : .45}` : ''}"></span>`; }).join('');
    return `<a class="unit-link ${cur === u.id ? 'active' : ''}" href="#/unit/${u.id}"><span>${esc(u.title)}</span><span class="dots">${dots}</span></a>`;
  }).join('')}</div>`).join('');
}

function viewHome(main) {
  const s = settings();
  main.innerHTML = `<h1>Lộ trình luyện viết của bạn</h1>
    <p class="muted">Mỗi bài học đi qua 6 bậc tư duy Bloom: Ghi nhớ → Hiểu → Vận dụng → Phân tích → Đánh giá → Sáng tạo. Bài khách quan được chấm ngay; bài viết được Gemini chấm, chữa lỗi và gợi ý bản nâng cấp.</p>
    ${hasKey() ? '' : '<div class="notice">Chưa có Gemini API key. Bấm <b>⚙ API key</b> để thêm (miễn phí tại aistudio.google.com/apikey). Các bài trắc nghiệm, điền từ, nối, sắp xếp vẫn làm được không cần key.</div>'}
    <div class="grid">${STAGES.map(st => { const us = UNITS.filter(u => u.stage === st.id); const pct = us.length ? Math.round(us.reduce((a, u) => a + unitPct(u), 0) / us.length) : 0; const first = us.find(u => unitPct(u) < 80) || us[0];
      return `<a class="stage-card" href="#/unit/${first?.id}"><h3>${esc(st.name)}</h3><p class="muted" style="margin:0">${esc(st.desc)}</p><p style="margin:.5em 0 0">${us.length} bài · hoàn thành ${pct}%</p><div class="bar"><i style="width:${pct}%"></i></div></a>`; }).join('')}</div>
    <h2 style="margin-top:28px">Thang tư duy Bloom</h2>
    <div class="pyramid">${BLOOM.map((b, i) => `<div class="pyr" style="background:${BLOOM_COLOR(b.id)};width:${100 - i * 11}%;cursor:default"><span>${b.en} · ${b.vi}</span><small>${b.desc}</small></div>`).join('')}</div>`;
}

function viewUnit(main, unitId, bloom) {
  const unit = unitById(unitId); if (!unit) { main.innerHTML = '<p>Không tìm thấy bài.</p>'; return; }
  bloom = bloom || BLOOM.find(b => (levelScore(unit, b.id) ?? 0) < 80)?.id || 'remember';
  const idx = UNITS.indexOf(unit), prev = UNITS[idx - 1], next = UNITS[idx + 1];
  main.innerHTML = `<div class="muted">${esc(STAGES.find(s => s.id === unit.stage).name)}</div><h1>${esc(unit.title)}</h1>${unit.lessons ? `<div class="lesson-tag">🎬 Bám theo khoá học: ${esc(unit.lessons)}</div>` : ''}<p>${fmt(unit.desc)}</p>
    ${unit.outcome ? `<div class="outcome"><b>🎯 Sau bài này bạn làm được:</b> ${fmt(unit.outcome.text)}</div><div id="recall"></div>` : ''}
    ${unit.theory ? `<details class="theory" ${unitPct(unit) === 0 && !unit.outcome ? 'open' : ''}><summary>📘 Kiến thức trọng tâm</summary>${unit.theory.map(t => `<p><b>${esc(t.h)}</b></p><ul>${t.p.map(x => `<li>${fmt(x)}</li>`).join('')}</ul>`).join('')}</details>` : ''}
    <div class="pyramid">${BLOOM.map((b, i) => { const s = levelScore(unit, b.id); return `<button class="pyr ${b.id === bloom ? 'active' : ''}" data-b="${b.id}" style="background:${BLOOM_COLOR(b.id)};width:${100 - i * 11}%"><span>${i + 1}. ${b.en} · ${b.vi}</span><span class="score">${s == null ? '—' : s + '%'}</span></button>`; }).join('')}</div>
    <div id="exList"></div>
    <div class="card" style="text-align:center"><p class="muted" style="margin-top:0">Muốn luyện thêm ở bậc <b>${BLOOM.find(b => b.id === bloom).en}</b>? Gemini soạn bài mới cùng chủ điểm, đúng độ khó đang chọn, và lưu lại trên máy bạn.</p><div class="row" style="justify-content:center" id="genRow"></div></div>
    <div class="row" style="justify-content:space-between;margin-top:20px">${prev ? `<a class="btn" href="#/unit/${prev.id}">← ${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a class="btn" href="#/unit/${next.id}">${esc(next.title)} →</a>` : ''}</div>`;
  main.querySelectorAll('.pyr').forEach(b => b.onclick = () => go(`#/unit/${unit.id}/${b.dataset.b}`));
  if (unit.outcome) renderRecall($('#recall', main), unit);
  const list = $('#exList', main);
  const lvF = store.get('kl_lvfilter', 0);
  const all = exercisesFor(unit, bloom);
  const exs = lvF ? all.filter(o => lvOf(o.ex) === lvF) : all;
  const fr = h(`<div class="lv-filter"><span class="muted">Độ khó:</span>${[[0, 'Tất cả'], [1, 'Nền tảng · có hướng dẫn'], [2, 'Kiểm soát · ít hỗ trợ'], [3, 'Tinh tế · độc lập']].map(([v, t]) => `<button class="chip ${v ? LEVELS[v].cls : ''} ${v === lvF ? 'on' : ''}" data-v="${v}">${t} <small>${v ? all.filter(o => lvOf(o.ex) === v).length : all.length}</small></button>`).join('')}</div>`);
  fr.querySelectorAll('.chip').forEach(c => c.onclick = () => { store.set('kl_lvfilter', +c.dataset.v); route(); });
  list.before(fr);
  if (!exs.length) list.innerHTML = `<p class="muted">${all.length ? 'Không có bài ở độ khó này, bấm ✨ để Gemini soạn thêm.' : 'Chưa có bài ở bậc này.'}</p>`;
  exs.forEach(o => list.appendChild(renderExercise(o, unit)));
  const types = [...new Set((unit.exercises || []).filter(e => e.bloom === bloom).map(e => e.type))];
  const genTypes = types.length ? types : ['mcq'];
  const bLv = lvF || (+settings().target >= 7.5 ? 3 : +settings().target >= 6.5 ? 2 : 1);
  const big = h(`<button class="btn primary">✨ Soạn 5 bài mới · ${LEVELS[bLv].short}</button>`); big.onclick = () => generateBatch(unit, bloom, bLv, big); $('#genRow', main).appendChild(big);
  genTypes.forEach(t => { const b = h(`<button class="btn">+ 1 bài ${TYPE_NAME[t]}</button>`); b.onclick = () => generateMore(unit, bloom, t, b); $('#genRow', main).appendChild(b); });
}

/* Nhớ lại (retrieval): tự trả lời trước, không có phương án để chọn; sau đó tự đánh giá. Lưu để nhắc ôn lại. */
function renderRecall(box, unit) {
  const rec = store.get('kl_recall', {})[unit.id];
  const days = rec ? Math.floor((Date.now() - rec.at) / 864e5) : null;
  const due = rec && (rec.ok < rec.n ? days >= 1 : days >= 3);
  const status = rec ? `Lần trước: nhớ ${rec.ok}/${rec.n} câu, ${days === 0 ? 'hôm nay' : days + ' ngày trước'}.${due ? ' <b>Đến lúc ôn lại.</b>' : ''}` : 'Làm phần này ngay sau khi xem video, trước khi mở lý thuyết.';
  const d = h(`<details class="recall" ${!rec || due ? 'open' : ''}><summary>🧠 Nhớ lại (${unit.outcome.recall.length} câu, tự trả lời) <span class="muted" style="font-weight:400">— ${status}</span></summary>
    <p class="muted" style="margin:6px 0">Gõ câu trả lời theo trí nhớ, không mở ghi chú. Bấm "Xem đáp án" rồi tự đánh giá.</p>
    ${unit.outcome.recall.map(([q, a], i) => `<div class="item" data-i="${i}"><div><span class="qnum">${i + 1}.</span>${fmt(q)}</div><textarea rows="2" style="min-height:44px;margin-top:6px"></textarea>
      <div class="rc-ans" hidden><div class="explain">Đáp án: ${fmt(a)}</div><div class="row" style="margin-top:6px"><button class="btn small" data-ok="1">✓ Mình nhớ được</button><button class="btn small ghost" data-ok="0">✗ Chưa nhớ</button></div></div>
      <button class="btn small ghost rc-show" style="margin-top:6px">Xem đáp án</button></div>`).join('')}
    <div class="rc-sum muted"></div></details>`);
  const marks = {};
  d.querySelectorAll('.item').forEach(el => {
    $('.rc-show', el).onclick = () => { $('.rc-ans', el).hidden = false; $('.rc-show', el).remove(); };
    el.querySelectorAll('[data-ok]').forEach(b => b.onclick = () => {
      marks[el.dataset.i] = +b.dataset.ok; el.querySelectorAll('[data-ok]').forEach(x => x.classList.toggle('primary', x === b));
      if (Object.keys(marks).length === unit.outcome.recall.length) {
        const ok = Object.values(marks).reduce((a, c) => a + c, 0), all = store.get('kl_recall', {});
        all[unit.id] = { at: Date.now(), ok, n: unit.outcome.recall.length }; store.set('kl_recall', all);
        $('.rc-sum', d).innerHTML = ok === unit.outcome.recall.length ? '✅ Nhớ đủ. Sẽ nhắc ôn lại sau vài ngày.' : `Nhớ ${ok}/${unit.outcome.recall.length}. Đọc lại phần "📘 Kiến thức trọng tâm" bên dưới; app sẽ nhắc bạn làm lại vào ngày mai.`;
      }
    });
  });
  box.appendChild(d);
}

function viewHistory(main) {
  const hist = store.get('kl_history', []);
  main.innerHTML = `<h1>Lịch sử chấm bài viết</h1>${hist.length ? '' : '<p class="muted">Chưa có bài nào được chấm.</p>'}<div id="hl"></div>`;
  const hl = $('#hl', main);
  if (hist.length > 1) {
    const bands = hist.filter(x => (x.kind === 'task1' || x.kind === 'task2') && x.result.full !== false).slice(0, 20).reverse();
    if (bands.length > 1) hl.appendChild(h(`<div class="card"><h3>Band các lần gần đây</h3>${renderChart({ kind: 'line', labels: bands.map((_, i) => '#' + (i + 1)), series: [{ name: 'Overall', data: bands.map(b => +b.result.overall || 0) }] })}</div>`));
  }
  hist.forEach((x, i) => {
    const card = h(`<div class="card hist-item"><div class="card-head"><div><b>${esc(x.title)}</b><div class="muted">${esc(x.unitTitle)} · ${new Date(x.at).toLocaleString('vi-VN')}</div></div><div class="row"><span class="band" style="font-size:1.3rem">${esc(x.result.overall)}</span><button class="btn small ghost del">Xoá</button></div></div><div class="detail" hidden></div></div>`);
    card.onclick = e => {
      if (e.target.classList.contains('del')) { const b = e.target; if (b.dataset.armed) { hist.splice(i, 1); store.set('kl_history', hist); route(); } else { b.dataset.armed = 1; b.textContent = 'Chắc chắn xoá?'; } return; }
      const d = $('.detail', card); if (!d.hidden) return;
      d.hidden = false; d.innerHTML = `<div class="passage" style="white-space:normal">${fmt(x.prompt)}</div>${renderChart(x.chart)}<h3>Bài của bạn</h3><div class="improved">${esc(x.text)}</div>${renderFeedback(x.result, { kind: x.kind, full: x.result.full })}`;
    };
    hl.appendChild(card);
  });
}

/* Điều hướng không phụ thuộc vào việc trình duyệt cho đổi URL (chạy được cả khi mở trong khung xem trước) */
let curHash = location.hash || '#/';
function go(h) {
  curHash = h;
  try { if (location.hash !== h) history.pushState(null, '', h); } catch {}
  route();
}
document.addEventListener('click', e => {
  const a = e.target.closest && e.target.closest('a[href^="#"]');
  if (!a || e.ctrlKey || e.metaKey || e.shiftKey || e.button) return;
  e.preventDefault(); go(a.getAttribute('href'));
});
function route() {
  const main = $('#main'); const [, view, a, b] = curHash.split('/');
  $('#sidebar').classList.remove('open');
  if (view === 'unit') viewUnit(main, a, b);
  else if (view === 'history') viewHistory(main);
  else viewHome(main);
  renderSidebar(); window.scrollTo(0, 0);
}

/* ---------- Settings dialog ---------- */
function initSettings() {
  const dlg = $('#settings');
  const status = () => {
    const v = vault.info();
    $('#keyStatus').innerHTML = v ? `🔒 Đã lưu key <b>${esc(v.hint)}</b>, mã hoá bằng mã PIN.` : (ss.get('kl_k') ? '🕒 Key chỉ dùng trong tab này, đóng tab là mất.' : 'Chưa có key.');
    $('#clearKey').hidden = !v && !ss.get('kl_k');
  };
  const DEFAULT_MODELS = [['gemini-2.5-pro', 'Gemini 2.5 Pro (chấm kỹ nhất, chậm hơn)'], ['gemini-2.5-flash', 'Gemini 2.5 Flash (cân bằng, khuyên dùng)'], ['gemini-2.5-flash-lite', 'Gemini 2.5 Flash-Lite (nhanh, tiết kiệm)'], ['gemini-2.0-flash', 'Gemini 2.0 Flash']];
  const fillModels = cur => {
    const list = store.get('kl_models', null) || DEFAULT_MODELS;
    if (cur && !list.some(m => m[0] === cur)) list.unshift([cur, cur]);
    $('#model').innerHTML = list.map(([id, name]) => `<option value="${esc(id)}">${esc(name)}</option>`).join('');
    if (cur) $('#model').value = cur;
  };
  const fill = () => { const s = settings(); $('#apiKey').value = ''; $('#pin').value = ''; fillModels(s.model); $('#fbLang').value = s.fbLang; $('#target').value = s.target; $('#testResult').textContent = ''; status(); };
  $('#settingsBtn').onclick = () => { fill(); dlg.showModal(); };
  $('#toggleKey').onclick = () => { const i = $('#apiKey'); i.type = i.type === 'password' ? 'text' : 'password'; $('#toggleKey').textContent = i.type === 'password' ? 'Hiện' : 'Ẩn'; };
  const save = async () => {
    store.set('kl_settings', { model: $('#model').value || 'gemini-2.5-flash', fbLang: $('#fbLang').value, target: $('#target').value });
    const key = $('#apiKey').value.trim(); if (!key) return true;
    if (!/^[A-Za-z0-9_\-]{20,}$/.test(key)) { $('#testResult').textContent = '❌ Key không đúng định dạng.'; return false; }
    const mode = $('input[name=keyMode]:checked').value;
    if (mode === 'pin') {
      const pin = $('#pin').value;
      if (pin.length < 6) { $('#testResult').textContent = '❌ Mã PIN cần ít nhất 6 ký tự.'; return false; }
      await vault.lock(key, pin);
    } else { try { localStorage.removeItem('kl_vault'); } catch {} }
    memKey = key; ss.set('kl_k', key); try { localStorage.removeItem('kl_legacy_key'); } catch {}
    $('#apiKey').value = ''; $('#pin').value = ''; status(); return true;
  };
  $('#saveSettings').onclick = async e => { e.preventDefault(); if (await save()) { dlg.close(); route(); } };
  $('#clearKey').onclick = () => { vault.clear(); status(); route(); };
  $('#lockNow').onclick = () => { memKey = null; ss.set('kl_k', null); $('#testResult').textContent = 'Đã khoá. Lần gọi Gemini tới sẽ hỏi mã PIN.'; };
  $('#testKey').onclick = async () => {
    if (!(await save())) return; const t = $('#testResult'); t.textContent = 'Đang thử...';
    try { const r = await gemini('Reply with JSON {"ok":true}'); t.textContent = r.ok ? '✅ Kết nối được' : '⚠️ Phản hồi lạ'; } catch (e) { t.textContent = '❌ ' + e.message; }
  };
  $('#loadModels').onclick = async () => {
    try {
      if (!(await save())) return;
      const key = await getKey();
      const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models?pageSize=200', { headers: { 'x-goog-api-key': key } }); const d = await res.json();
      if (!res.ok) throw new Error(d?.error?.message || res.status);
      const rank = id => (/pro/.test(id) ? 0 : /flash-lite/.test(id) ? 2 : /flash/.test(id) ? 1 : 3) + (/preview|exp/.test(id) ? 0.5 : 0);
      const ms = (d.models || []).filter(m => (m.supportedGenerationMethods || []).includes('generateContent'))
        .map(m => [m.name.replace('models/', ''), m.displayName || m.name.replace('models/', '')])
        .filter(([id]) => /gemini/.test(id) && !/embedding|tts|image|audio|live/.test(id))
        .sort((a, b) => b[0].localeCompare(a[0], 'en', { numeric: true })).sort((a, b) => rank(a[0]) - rank(b[0]))
        .map(([id, name]) => [id, name === id ? id : `${name} · ${id}`]);
      if (!ms.length) throw new Error('Không tìm thấy model nào.');
      const cur = $('#model').value; store.set('kl_models', ms); fillModels(cur);
      $('#testResult').textContent = `✅ Đã tải ${ms.length} model. Chọn trong ô Model rồi bấm Lưu.`;
    } catch (e) { $('#testResult').textContent = '❌ ' + e.message; }
  };
  $('#exportData').onclick = () => {
    const data = { progress: store.get('kl_progress', {}), extras: store.get('kl_extras', {}), history: store.get('kl_history', []) };
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(data)], { type: 'application/json' })); a.download = 'luyen-viet-ielts-backup.json'; a.click();
  };
  $('#importData').onchange = async e => {
    const f = e.target.files[0]; if (!f) return;
    try { const d = JSON.parse(await f.text()); if (d.progress) store.set('kl_progress', d.progress); if (d.extras) store.set('kl_extras', d.extras); if (d.history) store.set('kl_history', d.history); progress = store.get('kl_progress', {}); extras = store.get('kl_extras', {}); $('#testResult').textContent = 'Đã khôi phục dữ liệu.'; route(); }
    catch { $('#testResult').textContent = '❌ File sao lưu không hợp lệ.'; }
  };
}

$('#menuBtn').onclick = () => $('#sidebar').classList.toggle('open');
const syncHash = () => { curHash = location.hash || '#/'; route(); };
window.addEventListener('hashchange', syncHash); window.addEventListener('popstate', syncHash);
initSettings(); route();
window.__app = { renderChart, validEx, UNITS };
})();
