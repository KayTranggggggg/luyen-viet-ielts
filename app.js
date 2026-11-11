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
const TYPE_NAME = { mcq: 'Trắc nghiệm', gap: 'Điền từ', match: 'Nối / phân loại', order: 'Sắp xếp câu', rewrite: 'Viết lại câu (AI chấm)', write: 'Viết tự do (AI chấm)' };

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

const LEVELS = { 1: { name: 'Cơ bản', band: 'Band 5–6', cls: 'lv1' }, 2: { name: 'Trung cấp', band: 'Band 6.5–7', cls: 'lv2' }, 3: { name: 'Nâng cao', band: 'Band 8+', cls: 'lv3' } };
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
function levelScore(unit, bloom) {
  const list = exercisesFor(unit, bloom).filter(o => !o.extra);
  if (!list.length) return null;
  const done = list.map(o => progress[o.key]).filter(Boolean);
  if (!done.length) return null;
  return Math.round(done.reduce((s, p) => s + p.best, 0) / list.length);
}
function unitPct(unit) {
  let sum = 0, n = 0;
  BLOOM.forEach(b => { const list = exercisesFor(unit, b.id).filter(o => !o.extra); list.forEach(o => { n++; sum += (progress[o.key]?.best || 0); }); });
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
      <span class="tag type-tag">${TYPE_NAME[ex.type] || ex.type}</span><span class="tag ${LEVELS[lvOf(ex)].cls}" title="${LEVELS[lvOf(ex)].name}">${LEVELS[lvOf(ex)].band}</span>${o.extra ? '<span class="tag type-tag">Gemini tạo</span>' : ''}
      <h3 style="margin-top:8px">${fmt(ex.title || '')}</h3></div>
      <div class="row">${progress[o.key] ? `<span class="muted">Tốt nhất: ${progress[o.key].best}%</span>` : ''}${o.extra ? '<button class="btn small ghost del-extra">Xoá</button>' : ''}</div></div>
      ${ex.instr ? `<p class="instr">${fmt(ex.instr)}</p>` : ''}
      ${ex.passage ? `<div class="passage">${fmt(ex.passage)}</div>` : ''}
      ${renderChart(ex.chart)}${(ex.extraCharts || []).map(renderChart).join("")}
      <div class="body"></div>
      <div class="actions"></div></section>`);
  const body = $('.body', card), actions = $('.actions', card);
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
For EACH item, explain in 2–4 sentences why the correct answer is correct (name the grammar rule / band criterion), and, if the learner was wrong, why their choice is wrong. Be precise and accurate; do not contradict the given correct answer. ${langLine()}
Return JSON: {"items":[{"i":0,"explanation":"..."}]}
DATA: ${JSON.stringify(todo.map((c, i) => ({ i, question: c.q, options: c.options, correct: c.correct, learner: c.learner, learner_was_correct: c.ok })))}`);
  (r.items || []).forEach(x => { const c = todo[+x.i]; if (c && x.explanation) { xcache.set(c.k, x.explanation); putExplain(c.el, x.explanation, c.ok); } });
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
Return JSON: {"results":[{"id":0,"score":0-1 (1=fully correct, 0.5=minor issue, 0=wrong),"feedback":"short explanation","corrected":"best corrected version of the learner's sentence"}]}
${lvOf(ex) === 3 ? 'This is a Level 3 (Band 8+) item: an answer that is correct but does not use the required structure scores at most 0.5; say which structure was expected.' : ''}
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
      else if (results[id]) { const r = results[id]; sc = Math.max(0, Math.min(1, +r.score || 0)); fbHTML = `<div class="explain ${sc >= 1 ? 'ok' : ''}">${sc >= 1 ? '✅' : sc >= .5 ? '🟡' : '❌'} ${fmt(r.feedback)}${sc < 1 && r.corrected ? `<br>Sửa: <b>${esc(r.corrected)}</b>` : ''}<br><span class="muted">Mẫu: ${esc(arr(x.it.a)[0])}</span></div>`; }
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
  btn.onclick = async () => {
    const text = ta.value.trim();
    if (words(text) < 15) { out.innerHTML = '<div class="notice">Bài quá ngắn để chấm, hãy viết thêm nhé.</div>'; return; }
    btn.disabled = true; btn.innerHTML = '<span class="spinner"></span> Đang chấm (10–40 giây)...';
    try {
      const r = await gemini(writingPrompt(ex, text, unit), { temperature: 0.3 });
      out.innerHTML = renderFeedback(r, ex);
      const pct = ex.kind === 'task1' || ex.kind === 'task2' ? Math.round((+r.overall || 0) / 9 * 100) : Math.round((+r.overall || 0) * 10);
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

function writingPrompt(ex, text, unit) {
  const s = settings();
  if (ex.kind === 'task1' || ex.kind === 'task2') {
    const crit1 = ex.kind === 'task1' ? 'Task Achievement' : 'Task Response';
    return `You are a certified IELTS Writing examiner and teacher. Assess this ${ex.kind === 'task1' ? 'Academic Writing Task 1' : 'Writing Task 2'} response using the official public band descriptors (${crit1}, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy). Be accurate and realistic, not generous. Learner is Vietnamese, target band ${s.target}. Lesson focus: ${unit.title}${ex.focus ? ' — ' + arr(ex.focus).join(', ') : ''}.
${langLine()}
${KL_MATRIX}
In each criterion comment, state which matrix level (1/2/3) the response is at and give one concrete upgrade towards Level 3 using the learner's own content. Make "improved_version" use Level 3 techniques naturally.
Penalise under-length (${ex.minWords || (ex.kind === 'task1' ? 150 : 250)} words minimum)${ex.kind === 'task1' ? ', missing overview, inaccurate data or opinions' : ', not answering all parts of the question, unclear position'}.
Return JSON only:
{"overall": number (band, step 0.5),
 "criteria":[{"name":"${crit1}","band":n,"comment":"..."},{"name":"Coherence and Cohesion","band":n,"comment":"..."},{"name":"Lexical Resource","band":n,"comment":"..."},{"name":"Grammatical Range and Accuracy","band":n,"comment":"..."}],
 "strengths":["..."],
 "errors":[{"original":"exact phrase from essay","correction":"...","type":"grammar|vocabulary|coherence|task","explanation":"..."}] (list up to 15 most important),
 "improved_version":"a rewritten version of the learner's essay at about band ${Math.min(9, +s.target + 1)}, keeping their ideas",
 "next_steps":["3 concrete things to practise next"]}
TASK PROMPT: ${ex.prompt}${chartToText(ex.chart)}
LEARNER ESSAY:
"""${text}"""`;
  }
  return `You are an IELTS grammar & writing teacher. The learner wrote a short paragraph for a grammar practice task. Score it out of 10 focusing on: ${arr(ex.focus).join(', ') || unit.title}, plus overall accuracy and naturalness. Learner is Vietnamese, target band ${s.target}. ${langLine()}
${KL_MATRIX}
Mention which matrix level the text is at and how to reach Level 3.
Return JSON only:
{"overall": number 0-10,
 "criteria":[{"name":"Đúng trọng tâm ngữ pháp","band":0-10,"comment":"..."},{"name":"Độ chính xác","band":0-10,"comment":"..."},{"name":"Độ đa dạng & tự nhiên","band":0-10,"comment":"..."},{"name":"Hoàn thành yêu cầu","band":0-10,"comment":"..."}],
 "strengths":["..."],
 "errors":[{"original":"...","correction":"...","type":"grammar|vocabulary|style","explanation":"..."}],
 "improved_version":"improved paragraph keeping the learner's ideas",
 "next_steps":["..."]}
TASK: ${ex.prompt}
LEARNER TEXT:
"""${text}"""`;
}

function renderFeedback(r, ex) {
  const isBand = ex.kind === 'task1' || ex.kind === 'task2';
  return `<div class="fb">
    <div class="band">${esc(r.overall)}<small>${isBand ? 'Band ước tính' : '/ 10'}</small></div>
    <div class="crit">${(r.criteria || []).map(c => `<div><b>${esc(c.name)}: ${esc(c.band)}</b><span>${fmt(c.comment)}</span></div>`).join('')}</div>
    ${r.strengths?.length ? `<h3>👍 Điểm tốt</h3><ul>${r.strengths.map(s => `<li>${fmt(s)}</li>`).join('')}</ul>` : ''}
    ${r.errors?.length ? `<h3>✏️ Lỗi cần sửa (${r.errors.length})</h3>${r.errors.map(e => `<div class="err"><del>${esc(e.original)}</del> → <ins>${esc(e.correction)}</ins> <span class="muted">[${esc(e.type || '')}]</span><br><span>${fmt(e.explanation)}</span></div>`).join('')}` : ''}
    ${r.improved_version ? `<h3>✨ Bản nâng cấp</h3><div class="improved">${esc(r.improved_version)}</div>` : ''}
    ${r.next_steps?.length ? `<h3>🧭 Bước tiếp theo</h3><ul>${r.next_steps.map(s => `<li>${fmt(s)}</li>`).join('')}</ul>` : ''}
    <p class="muted" style="font-size:.85rem">Điểm do AI ước tính, chỉ dùng để tham khảo.</p></div>`;
}

/* ---------- Generate more with Gemini ---------- */
const SCHEMA = {
  mcq: '{"type":"mcq","title":"...","instr":"...","items":[{"q":"question text","options":["A","B","C","D"],"a":0,"ex":"explanation"}]}  (a = index of correct option)',
  gap: '{"type":"gap","title":"...","instr":"...","items":[{"q":"sentence with ___ for the blank","a":["accepted answer","alternative"],"hint":"base word (optional)","ex":"explanation"}]}',
  match: '{"type":"match","title":"...","instr":"...","pairs":[{"l":"left item","r":"matching right item or category"}],"ex":"overall note"}',
  order: '{"type":"order","title":"...","instr":"...","items":[{"words":"chunk1 / chunk2 / chunk3 / chunk4","ex":"note"}]}  (chunks in the correct order, separated by " / ")',
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
DIFFICULTY: Level ${lv} (${LEVELS[lv].band}) of the matrix below. ${lv === 3 ? 'Items must require Level 3 structures or reasoning; avoid trivial recall.' : ''}
${KL_MATRIX}
Lesson: "${unit.title}" — ${unit.desc}
Bloom's taxonomy level: ${bloom.toUpperCase()} (${BLOOM.find(b => b.id === bloom).desc}).
Create ONE new exercise of type "${type}" with ${type === 'write' ? 'one task' : '6 items'}, different from the sample, accurate and unambiguous (only one correct answer for objective items). Instructions and explanations: ${settings().fbLang === 'en' ? 'English' : 'Vietnamese'}; exercise content in English. ${kindHint}
Return JSON exactly in this schema: ${SCHEMA[type]}
${sample ? 'SAMPLE (do not copy): ' + JSON.stringify(sample).slice(0, 2500) : ''}`, { temperature: 0.9 });
    const ex = Object.assign(r.exercise || r, { bloom, type, lv });
    if (!validEx(ex)) throw new Error('Gemini trả về bài không đúng định dạng, hãy thử lại.');
    const k = unit.id + ':' + bloom; (extras[k] = extras[k] || []).push(ex); store.set('kl_extras', extras); route();
  } catch (e) { btn.disabled = false; btn.textContent = '✨ Thử lại'; btn.title = e.message; btn.insertAdjacentHTML('afterend', `<div class="notice err-n">${esc(e.message)}</div>`); }
}
const BLOOM_TYPES = { remember: ['mcq', 'gap', 'match'], understand: ['mcq', 'match', 'gap'], apply: ['gap', 'rewrite', 'order'], analyze: ['match', 'mcq', 'order'], evaluate: ['mcq', 'rewrite'], create: ['write'] };
async function generateBatch(unit, bloom, lv, btn, n = 5) {
  const types = BLOOM_TYPES[bloom] || ['mcq'];
  const samples = (unit.exercises || []).filter(e => e.bloom === bloom && lvOf(e) === lv).slice(0, 2);
  const label = btn.textContent; btn.disabled = true; btn.innerHTML = '<span class="spinner"></span> Gemini đang soạn ' + n + ' bài...';
  try {
    const want = bloom === 'create' ? Math.min(n, 3) : n;
    const r = await gemini(`You are an experienced IELTS teacher creating ORIGINAL practice material for a Vietnamese learner, following the teaching approach of the Vietnamese IELTS teacher Kien Luyen.
DIFFICULTY: Level ${lv} (${LEVELS[lv].band}) of the matrix below. ${lv === 3 ? 'Items must require Level 3 structures or reasoning; avoid trivial recall.' : lv === 1 ? 'Keep items clear and foundational, but still accurate and useful.' : ''}
${KL_MATRIX}
Lesson: "${unit.title}" — ${unit.desc}
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
    ${unit.theory ? `<details class="theory" ${unitPct(unit) === 0 ? 'open' : ''}><summary>📘 Kiến thức trọng tâm</summary>${unit.theory.map(t => `<p><b>${esc(t.h)}</b></p><ul>${t.p.map(x => `<li>${fmt(x)}</li>`).join('')}</ul>`).join('')}</details>` : ''}
    <div class="pyramid">${BLOOM.map((b, i) => { const s = levelScore(unit, b.id); return `<button class="pyr ${b.id === bloom ? 'active' : ''}" data-b="${b.id}" style="background:${BLOOM_COLOR(b.id)};width:${100 - i * 11}%"><span>${i + 1}. ${b.en} · ${b.vi}</span><span class="score">${s == null ? '—' : s + '%'}</span></button>`; }).join('')}</div>
    <div id="exList"></div>
    <div class="card" style="text-align:center"><p class="muted" style="margin-top:0">Muốn luyện thêm ở bậc <b>${BLOOM.find(b => b.id === bloom).en}</b>? Gemini soạn bài mới cùng chủ điểm, đúng độ khó đang chọn, và lưu lại trên máy bạn.</p><div class="row" style="justify-content:center" id="genRow"></div></div>
    <div class="row" style="justify-content:space-between;margin-top:20px">${prev ? `<a class="btn" href="#/unit/${prev.id}">← ${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a class="btn" href="#/unit/${next.id}">${esc(next.title)} →</a>` : ''}</div>`;
  main.querySelectorAll('.pyr').forEach(b => b.onclick = () => go(`#/unit/${unit.id}/${b.dataset.b}`));
  const list = $('#exList', main);
  const lvF = store.get('kl_lvfilter', 0);
  const all = exercisesFor(unit, bloom);
  const exs = lvF ? all.filter(o => lvOf(o.ex) === lvF) : all;
  const fr = h(`<div class="lv-filter"><span class="muted">Độ khó:</span>${[[0, 'Tất cả'], [1, 'Cơ bản · Band 5–6'], [2, 'Trung cấp · Band 6.5–7'], [3, 'Nâng cao · Band 8+']].map(([v, t]) => `<button class="chip ${v ? LEVELS[v].cls : ''} ${v === lvF ? 'on' : ''}" data-v="${v}">${t} <small>${v ? all.filter(o => lvOf(o.ex) === v).length : all.length}</small></button>`).join('')}</div>`);
  fr.querySelectorAll('.chip').forEach(c => c.onclick = () => { store.set('kl_lvfilter', +c.dataset.v); route(); });
  list.before(fr);
  if (!exs.length) list.innerHTML = `<p class="muted">${all.length ? 'Không có bài ở độ khó này, bấm ✨ để Gemini soạn thêm.' : 'Chưa có bài ở bậc này.'}</p>`;
  exs.forEach(o => list.appendChild(renderExercise(o, unit)));
  const types = [...new Set((unit.exercises || []).filter(e => e.bloom === bloom).map(e => e.type))];
  const genTypes = types.length ? types : ['mcq'];
  const bLv = lvF || (+settings().target >= 7.5 ? 3 : +settings().target >= 6.5 ? 2 : 1);
  const big = h(`<button class="btn primary">✨ Soạn 5 bài mới · ${LEVELS[bLv].band}</button>`); big.onclick = () => generateBatch(unit, bloom, bLv, big); $('#genRow', main).appendChild(big);
  genTypes.forEach(t => { const b = h(`<button class="btn">+ 1 bài ${TYPE_NAME[t]}</button>`); b.onclick = () => generateMore(unit, bloom, t, b); $('#genRow', main).appendChild(b); });
}

function viewHistory(main) {
  const hist = store.get('kl_history', []);
  main.innerHTML = `<h1>Lịch sử chấm bài viết</h1>${hist.length ? '' : '<p class="muted">Chưa có bài nào được chấm.</p>'}<div id="hl"></div>`;
  const hl = $('#hl', main);
  if (hist.length > 1) {
    const bands = hist.filter(x => x.kind === 'task1' || x.kind === 'task2').slice(0, 20).reverse();
    if (bands.length > 1) hl.appendChild(h(`<div class="card"><h3>Band các lần gần đây</h3>${renderChart({ kind: 'line', labels: bands.map((_, i) => '#' + (i + 1)), series: [{ name: 'Overall', data: bands.map(b => +b.result.overall || 0) }] })}</div>`));
  }
  hist.forEach((x, i) => {
    const card = h(`<div class="card hist-item"><div class="card-head"><div><b>${esc(x.title)}</b><div class="muted">${esc(x.unitTitle)} · ${new Date(x.at).toLocaleString('vi-VN')}</div></div><div class="row"><span class="band" style="font-size:1.3rem">${esc(x.result.overall)}</span><button class="btn small ghost del">Xoá</button></div></div><div class="detail" hidden></div></div>`);
    card.onclick = e => {
      if (e.target.classList.contains('del')) { const b = e.target; if (b.dataset.armed) { hist.splice(i, 1); store.set('kl_history', hist); route(); } else { b.dataset.armed = 1; b.textContent = 'Chắc chắn xoá?'; } return; }
      const d = $('.detail', card); if (!d.hidden) return;
      d.hidden = false; d.innerHTML = `<div class="passage" style="white-space:normal">${fmt(x.prompt)}</div>${renderChart(x.chart)}<h3>Bài của bạn</h3><div class="improved">${esc(x.text)}</div>${renderFeedback(x.result, { kind: x.kind })}`;
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
