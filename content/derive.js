/* Bổ sung cho đủ ≥3 bài mỗi ô (chủ đề × bậc Bloom × band) bằng bài SOÁT LỖI dựng từ chính các câu mẫu Band 7–8 của chủ đề.
   Mỗi câu sai được tạo bằng MỘT lỗi có quy tắc rõ ràng (đã biết chắc là sai) và kèm giải thích.
   Band 5–6: lỗi cơ bản (hoà hợp, a/an, many/much...). Band 6.5–7: lỗi từ loại, thì, bị động, so sánh. Band 8+: lỗi tinh vi (mệnh đề quan hệ, giới từ đi kèm, mạo từ so sánh nhất, cụm liên kết). */
(function () {
const NEED = 3;
const lvOf = e => e.lv || (e.bloom === 'remember' || e.bloom === 'understand' ? 1 : 2);
const W = s => String(s).trim().split(/\s+/).length;
const FAM = [[14, 15, 16], [4, 5, 6], [10, 22, 11, 20], [3, 23, 9], [2, 7], [12, 24], [18, 8, 17], [0], [1], [13], [19], [21]];
const fam = i => FAM.findIndex(f => f.includes(i));
const LEVEL_RULES = { 1: [14, 15, 16, 19, 20, 5, 21, 17, 23, 8], 2: [1, 2, 3, 6, 7, 9, 10, 11, 12, 24, 4], 3: [0, 18, 22, 13, 4, 1, 2, 7, 12, 24] };
const hash = s => [...String(s)].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
const viet = s => (String(s).match(/[^\x00-\x7F]/g) || []).length > 0;
const clean = s => String(s).replace(/\*/g, '').trim();
function sentencesOf(u) {
  const out = new Set();
  for (const e of u.exercises) {
    if (lvOf(e) < 2 && e.bloom !== 'evaluate') continue;
    if (e.type === 'mcq') e.items.forEach(it => { const c = it.options[it.a]; if (!/Các phương án sai/.test(it.ex || '') || true) out.add(clean(c)); });
    if (e.type === 'rewrite') e.items.forEach(it => [].concat(it.a).forEach(a => out.add(clean(a))));
  }
  return [...out].filter(s => !viet(s) && W(s) >= 7 && W(s) <= 45 && /[.?!]$/.test(s) && /^[A-Z]/.test(s) && !/\.\.\.|…| \/ |\?$/.test(s));
}
/* đoạn khác nhau giữa câu đúng và câu sai */
function diff(a, b) {
  const x = a.split(' '), y = b.split(' ');
  let i = 0; while (i < x.length && i < y.length && x[i] === y[i]) i++;
  let j = 0; while (j < x.length - i && j < y.length - i && x[x.length - 1 - j] === y[y.length - 1 - j]) j++;
  return { i, good: x.slice(i, x.length - j), bad: y.slice(i, y.length - j), x, y, j };
}
const strip = w => w.replace(/^[^\w']+|[^\w']+$/g, '');
const GAP_HINT = { 0: '(đại từ quan hệ)', 18: '(giới từ)', 22: '(mạo từ)', 24: '(1 từ)', 11: '(mạo từ)', 17: '(1 từ)', 8: '(1 từ)' };
function build(kind, lv, pool, seed, unitTitle) {
  const rules = kind === 'best' || kind === 'pick' ? [...new Set([...LEVEL_RULES[lv], ...LEVEL_RULES[lv === 1 ? 2 : lv - 1]])] : LEVEL_RULES[lv];
  const cand = [];
  for (const s of pool) { const cs = window.KL_CORRUPT(s).filter(c => rules.includes(c.i)); if (cs.length) cand.push({ s, cs }); }
  if (cand.length < 3) return null;
  const pick = (n) => { const out = []; for (let k = 0; k < cand.length && out.length < n; k++) out.push(cand[(seed + k * 7) % cand.length]); return [...new Set(out)]; };
  const items = [];
  if (kind === 'spot') { // analyze: lỗi nằm ở đâu?
    for (const { s, cs } of pick(5)) {
      const c = cs[seed % cs.length]; const d = diff(s, c.s); if (!d.bad.length && !d.good.length) continue;
      const lo = Math.max(0, d.i - 1), hi = Math.min(d.y.length, d.y.length - d.j + 1);
      const right = d.y.slice(lo, hi).join(' ');
      const others = []; for (let p = 0; p + 3 <= d.y.length && others.length < 2; p += 4) { if (p + 3 <= lo || p >= hi) others.push(d.y.slice(p, p + 3).join(' ')); }
      if (others.length < 2) continue;
      const opts = [right, ...others].map(o => o.replace(/[,.;:]$/, ''));
      const k = (seed + items.length) % 3; const o = opts.slice(k).concat(opts.slice(0, k));
      items.push({ q: '*' + c.s + '*', options: o, a: (3 - k) % 3, ex: `Lỗi: ${c.why}. Câu đúng: *${s}*` });
      if (items.length >= 4) break;
    }
    return items.length >= 3 ? { type: 'mcq', title: ['', 'Tìm lỗi sai (cơ bản)', 'Tìm lỗi sai', 'Tìm lỗi tinh vi (Mức 3)'][lv], instr: 'Mỗi câu có đúng MỘT lỗi. Chọn phần chứa lỗi.', items } : null;
  }
  if (kind === 'pick') { // remember: câu nào đúng?
    const nOpt = lv === 3 ? 2 : 1;
    for (const { s, cs } of pick(6)) {
      if (cs.length < nOpt) continue;
      const wr = cs.slice(0, nOpt); const opts = [s, ...wr.map(w => w.s)]; const k = (hash(s) + seed) % opts.length; const o = opts.slice(k).concat(opts.slice(0, k));
      items.push({ q: '', options: o, a: (opts.length - k) % opts.length, ex: 'Phương án còn lại sai vì: ' + wr.map(w => w.why).join('; ') + '.' });
      if (items.length >= 4) break;
    }
    return items.length >= 2 ? { type: 'mcq', title: ['', 'Nhận diện câu đúng (cơ bản)', 'Nhận diện dạng đúng', 'Nhận diện câu chính xác (Mức 3)'][lv], instr: 'Chọn câu không có lỗi.', items } : null;
  }
  if (kind === 'best') { // evaluate: 2 tầng — chọn câu đúng, rồi chọn lý do câu kia sai
    for (const { s, cs } of pick(6)) {
      const c = cs[0]; const others = []; for (const t of cand) for (const x of t.cs) if (fam(x.i) !== fam(c.i) && !others.includes(x.why)) others.push(x.why);
      if (others.length < 2) continue;
      const d1 = others[(hash(s) + seed) % others.length], d2 = others[(hash(s) + seed + 1) % others.length]; if (d1 === d2) continue;
      items.push({ q: '', options: [s, c.s], a: 0, why: { q: 'Câu còn lại sai vì:', options: [c.why, d1, d2], a: 0 } });
      if (items.length >= 3) break;
    }
    return items.length >= 2 ? { type: 'mcq2', title: ['', 'Chọn câu đúng & giải thích', 'Câu nào chính xác – vì sao?', 'Chọn câu chính xác & gọi tên lỗi (Mức 3)'][lv], instr: 'Tầng 1: chọn câu không có lỗi. Tầng 2: chọn lý do câu còn lại sai. Đúng cả hai tầng mới được điểm đủ.', items } : null;
  }
  if (kind === 'why') { // understand: vì sao câu này sai?
    const allWhy = [...new Set(Object.values(LEVEL_RULES).flat().map(i => i))];
    for (const { s, cs } of pick(6)) {
      const c = cs[0]; const pool2 = []; for (const t of cand) for (const x of t.cs) if (fam(x.i) !== fam(c.i) && !pool2.includes(x.why)) pool2.push(x.why);
      if (pool2.length < 2) continue;
      const d1 = pool2[(hash(s) + seed) % pool2.length], d2 = pool2[(hash(s) + seed + 1) % pool2.length]; if (d1 === d2) continue;
      const opts = [c.why, d1, d2]; const k = (hash(s) + seed) % 3; const o = opts.slice(k).concat(opts.slice(0, k));
      items.push({ q: '*' + c.s + '*', options: o, a: (3 - k) % 3, ex: `Câu đúng: *${s}*` });
      if (items.length >= 4) break;
    }
    return items.length >= 3 ? { type: 'mcq', title: ['', 'Hiểu lỗi: vì sao sai? (cơ bản)', 'Hiểu lỗi: vì sao sai?', 'Hiểu lỗi tinh vi (Mức 3)'][lv], instr: 'Mỗi câu có MỘT lỗi. Chọn lý do đúng.', items } : null;
  }
  if (kind === 'fix') { // apply: điền dạng đúng
    for (const { s, cs } of pick(6)) {
      const c = cs.find(x => { const d = diff(s, x.s); return d.good.length >= 1 && d.good.length <= 2 && d.bad.length <= 2; }); if (!c) continue;
      const d = diff(s, c.s);
      const ans = d.good.map(strip).join(' '); const trail = d.good.length ? d.good[d.good.length - 1].replace(/^.*?[\w']+/, '') : '';
      const hint = GAP_HINT[c.i] || '(' + (d.bad.map(strip).join(' ') || '…') + ')';
      const q = [...d.x.slice(0, d.i), '___ ' + hint + trail, ...d.x.slice(d.x.length - d.j)].join(' ');
      if (!ans) continue;
      items.push({ q, a: [ans], ex: c.why });
      if (items.length >= 4) break;
    }
    return items.length >= 3 ? { type: 'gap', title: ['', 'Điền dạng đúng (cơ bản)', 'Điền dạng đúng của từ', 'Điền chính xác tuyệt đối (Mức 3)'][lv], instr: 'Điền dạng đúng vào chỗ trống (gợi ý trong ngoặc).', items } : null;
  }
  return null;
}
const KIND = { remember: 'pick', understand: 'why', apply: 'fix', analyze: 'spot', evaluate: 'best' };
let made = 0;
const stagePool = {};
for (const u of window.UNITS.filter(u => u.stage === 'grammar')) (stagePool[u.stage] = stagePool[u.stage] || []).push(...sentencesOf(u));
for (const u of window.UNITS) {
  if (u.stage !== 'grammar') continue;
  const own = sentencesOf(u);
  for (const bloom of Object.keys(KIND)) for (const lv of [1, 2, 3]) {
    let have = u.exercises.filter(e => e.bloom === bloom && lvOf(e) === lv).length;
    let seed = hash(u.id + bloom + lv), tries = 0;
    while (have < NEED && tries < 14) {
      const pool = tries < 5 ? own : stagePool[u.stage];
      const ex = build(KIND[bloom], lv, pool, seed + tries * 37, u.title);
      tries++;
      if (!ex) continue;
      const sg = e => JSON.stringify((e.items || []).map(i => i.q + '|' + (i.options ? i.options[i.a] : '')));
      if (u.exercises.some(e => e.type === ex.type && sg(e) === sg(ex))) { seed += 5; continue; }
      u.exercises.push(Object.assign({ bloom, lv, derived: true }, ex)); have++; made++;
    }
  }
}
window.KL_DERIVE_STATS = { made };
})();
