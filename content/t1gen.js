/* Task 1: sinh bài CHIẾN THUẬT từ chính số liệu biểu đồ của unit (overview, độ chính xác số liệu, chọn lọc, nhóm hạng mục, trình tự quy trình, thay đổi bản đồ).
   Mọi đáp án được tính từ dữ liệu nên luôn đúng; phương án nhiễu là lỗi có thật của người học Task 1 (by/to, sai chiều, sai mốc, lấy nhầm số, overview có số liệu, suy đoán nguyên nhân, liệt kê máy móc...).
   Chỉ bổ sung vào ô còn thiếu để mỗi ô đủ 3 bài. */
(function () {
const NEED = 3;
const lvOf = e => e.lv || (e.bloom === 'remember' || e.bloom === 'understand' ? 1 : 2);
const hash = s => [...String(s)].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
const isYear = l => /^\d{4}\*?$/.test(String(l).trim());
const num = x => { const v = parseFloat(String(x).replace(/[,$%\s]/g, '')); return isNaN(v) ? null : v; };
const lc = s => s.charAt(0).toLowerCase() + s.slice(1);
const strip = s => String(s).replace(/\s*\(.*?\)\s*/g, ' ').replace(/\.$/, '').trim();
function fv(v, unit) {
  const n = Math.round(v * 100) / 100; const t = n.toLocaleString('en-US');
  if (!unit) return t; if (unit === '%') return t + '%'; if (unit === 'USD') return '$' + t;
  return t + ' ' + unit;
}
/* ---- chuẩn hoá biểu đồ ---- */
function norm(c) {
  if (!c) return null;
  if (c.kind === 'line' || c.kind === 'bar') {
    if (!c.labels || !c.series?.length) return null;
    if (c.series.every(s => isYear(s.name)) && !c.labels.every(isYear) && c.series.length >= 2)
      return { title: c.title, unit: c.unit, time: true, labels: c.series.map(s => s.name), series: c.labels.map((l, i) => ({ name: l, data: c.series.map(s => s.data[i]) })) };
    return { title: c.title, unit: c.unit, time: c.labels.every(isYear), labels: c.labels, series: c.series.map(s => ({ name: s.name, data: s.data })) };
  }
  if (c.kind === 'pie' && c.pies?.length >= 2) {
    const names = c.pies[0].slices.map(s => s.name);
    return { title: c.title, unit: '%', time: true, labels: c.pies.map(p => p.title), series: names.map(n => ({ name: n, data: c.pies.map(p => (p.slices.find(s => s.name === n) || {}).value ?? null) })).filter(s => s.data.every(v => v != null)) };
  }
  if (c.kind === 'table' && c.rows?.length >= 2 && c.headers?.length >= 2) {
    const rows = c.rows.filter(r => !/^total$/i.test(String(r[0]).trim()));
    const cols = c.headers.slice(1).map((h, j) => ({ name: h, data: rows.map(r => num(r[j + 1])) })).filter(s => s.data.every(v => v != null));
    if (!cols.length) return null;
    const unit = c.rows.some(r => /%/.test(r.join(''))) ? '%' : '';
    if (rows.every(r => isYear(r[0]))) return { title: c.title, unit, time: true, labels: rows.map(r => r[0]), series: cols.filter(s => /%/.test(rows.map(r => r[c.headers.indexOf(s.name)]).join('')) === (unit === '%')) };
    return { title: c.title, unit: '', time: false, labels: rows.map(r => String(r[0])), series: cols.slice(0, 1), table: true };
  }
  return null;
}
const proj = l => /\*/.test(l);
const yr = l => String(l).replace('*', '');
const trendOf = d => { const a = d[0], b = d[d.length - 1]; return b > a * 1.05 ? 'up' : b < a * 0.95 ? 'down' : 'flat'; };
const listTxt = a => a.length <= 1 ? a.join('') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1];
const nm = s => s.name.length > 1 && !/^[A-Z]{2,}/.test(s.name) && !/^(Country|City|Museum|Bus|Metro|Ferry)/.test(s.name) ? s.name.charAt(0).toLowerCase() + s.name.slice(1) : s.name;
const NM = s => s.name;
function pickPair(N, seed) { const n = N.series.length; return [N.series[seed % n], N.series[(seed + 1) % n]]; }

/* ---- TIME (line / bar 2 mốc / pie 2 mốc / bảng theo năm) ---- */
function tOverview(N, seed, lv) {
  const ups = N.series.filter(s => trendOf(s.data) === 'up'), downs = N.series.filter(s => trendOf(s.data) === 'down'), last = N.labels.length - 1;
  const top = N.series.slice().sort((a, b) => b.data[last] - a.data[last])[0];
  if (!ups.length && !downs.length) return null;
  const good = 'Overall, ' + [ups.length ? `${listTxt(ups.map(NM))} ${ups.length > 2 ? 'all ' : ups.length === 2 ? 'both ' : ''}increased` : '', downs.length ? `${ups.length ? 'whereas ' : ''}${listTxt(downs.map(NM))} ${downs.length > 2 ? 'all ' : downs.length === 2 ? 'both ' : ''}declined` : ''].filter(Boolean).join(', ') + `, and ${NM(top)} ${proj(N.labels[last]) ? 'is expected to be' : 'was'} the largest category by ${yr(N.labels[last])}.`;
  const [a, b] = pickPair(N, seed);
  const numeric = `Overall, ${NM(a)} went from ${fv(a.data[0], N.unit)} to ${fv(a.data[last], N.unit)}, while ${NM(b)} went from ${fv(b.data[0], N.unit)} to ${fv(b.data[last], N.unit)}.`;
  const cause = `Overall, ${NM(top)} grew the most because people became more interested in it, while the other categories were less popular.`;
  const opts = lv === 3 ? [good, numeric, cause] : [good, numeric];
  return { q: `Biểu đồ: *${N.title}*. Chọn Overview tốt nhất.`, options: opts, a: 0,
    why: { q: 'Vì sao?', options: ['Overview nêu xu hướng và đặc điểm chính, không đưa số liệu chi tiết, không suy đoán nguyên nhân', 'Overview cần có số liệu đầu và cuối của từng hạng mục', 'Overview nên giải thích lý do của các thay đổi'], a: 0 },
    ex: 'Theo band descriptors, Band 7 Task Achievement cần "a clear overview" nêu xu hướng/khác biệt chính; số liệu để dành cho thân bài, và Task 1 không suy đoán nguyên nhân.' };
}
function tWrongTrend(N, seed) {
  const last = N.labels.length - 1; const s = N.series.find((x, i) => i >= seed % N.series.length && trendOf(x.data) !== 'flat') || N.series.find(x => trendOf(x.data) !== 'flat'); if (!s) return null;
  const up = trendOf(s.data) === 'up';
  const good = `Overall, ${NM(s)} ${up ? 'rose' : 'fell'} over the period shown.`, bad = `Overall, ${NM(s)} ${up ? 'fell' : 'rose'} over the period shown.`;
  return { q: `Biểu đồ: *${N.title}*. Câu overview nào ĐÚNG với dữ liệu?`, options: [good, bad], a: 0,
    why: { q: 'Câu còn lại sai vì:', options: [`mô tả sai chiều xu hướng của ${NM(s)} (${fv(s.data[0], N.unit)} → ${fv(s.data[last], N.unit)})`, 'có số liệu chi tiết trong overview', 'dùng sai thì'], a: 0 }, ex: '' };
}
function tAccuracy(N, seed, lv) {
  const L = N.labels.length; if (L < 2) return null;
  const s = N.series[seed % N.series.length]; const i = 0, j = L - 1 - (lv === 3 && L > 3 ? (seed % 2) : 0);
  const a = s.data[i], b = s.data[j]; if (a == null || b == null || a === b) return null;
  const up = b > a, P = proj(N.labels[j]);
  const good = P ? `${NM(s)} is projected to ${up ? 'rise' : 'fall'} from ${fv(a, N.unit)} in ${yr(N.labels[i])} to ${fv(b, N.unit)} in ${yr(N.labels[j])}.`
    : `${NM(s)} ${up ? 'rose' : 'fell'} from ${fv(a, N.unit)} in ${yr(N.labels[i])} to ${fv(b, N.unit)} in ${yr(N.labels[j])}.`;
  const errs = [];
  const diff = Math.round(Math.abs(b - a) * 100) / 100;
  if (diff !== b) errs.push({ s: good.replace(` to ${fv(b, N.unit)}`, ` by ${fv(b, N.unit)}`).replace(` from ${fv(a, N.unit)} in ${yr(N.labels[i])}`, ` between ${yr(N.labels[i])} and ${yr(N.labels[j])},`).replace(/, in \d{4}\.$/, '.').replace(` in ${yr(N.labels[j])}.`, '.'), why: `nhầm "by" (mức chênh, ở đây là ${fv(diff, N.unit)}) với "to" (mức đạt được)`, lv: 2 });
  errs.push({ s: P ? good.replace(up ? 'rise' : 'fall', up ? 'fall' : 'rise') : good.replace(up ? 'rose' : 'fell', up ? 'fell' : 'rose'), why: 'sai chiều thay đổi', lv: 1 });
  if (L > 2) { const k = j === L - 1 ? L - 2 : j + 1; if (k !== i && s.data[k] !== b) errs.push({ s: good.replace(`in ${yr(N.labels[j])}`, `in ${yr(N.labels[k])}`), why: `gắn số liệu với sai mốc thời gian (${fv(b, N.unit)} là số của ${yr(N.labels[j])})`, lv: 3 }); }
  const other = N.series.find(x => x !== s && x.data[j] != null && x.data[j] !== b && (x.data[j] > a) === up);
  if (other) errs.push({ s: good.replace(`to ${fv(b, N.unit)}`, `to ${fv(other.data[j], N.unit)}`), why: `lấy nhầm số liệu của ${NM(other)}`, lv: 3 });
  if (P) errs.push({ s: good.replace(/is projected to (rise|fall)/, up ? 'rose' : 'fell'), why: 'mô tả số liệu dự báo như điều đã xảy ra', lv: 2 });
  const pool = errs.filter(e => lv === 3 ? e.lv >= 2 : e.lv <= 2); const e = pool[seed % pool.length] || errs[0];
  const distract = ['sai chiều thay đổi', 'nhầm "by" với "to"', 'gắn số liệu với sai mốc thời gian', 'lấy nhầm số liệu của hạng mục khác', 'mô tả số liệu dự báo như điều đã xảy ra'].filter(x => !e.why.startsWith(x.slice(0, 10)));
  return { q: `Biểu đồ: *${N.title}*. Câu nào mô tả CHÍNH XÁC dữ liệu?`, options: [good, e.s], a: 0,
    why: { q: 'Câu còn lại sai vì:', options: [e.why, distract[seed % distract.length], distract[(seed + 2) % distract.length]], a: 0 }, ex: '' };
}
function tSelect(N, seed, lv) {
  const s = N.series[seed % N.series.length]; const L = N.labels.length; if (L < 4) return null;
  const d = s.data; const mx = d.indexOf(Math.max(...d)), mn = d.indexOf(Math.min(...d));
  const mid = mx > 0 && mx < L - 1 ? mx : mn > 0 && mn < L - 1 ? mn : -1;
  const good = mid >= 0 ? `${NM(s)} started at ${fv(d[0], N.unit)} in ${yr(N.labels[0])}, ${d[mid] > d[0] ? 'peaked at' : 'dipped to'} ${fv(d[mid], N.unit)} in ${yr(N.labels[mid])} and ${proj(N.labels[L - 1]) ? 'is projected to end' : 'ended'} the period at ${fv(d[L - 1], N.unit)}.`
    : `${NM(s)} ${d[L - 1] > d[0] ? 'rose' : 'fell'} steadily from ${fv(d[0], N.unit)} in ${yr(N.labels[0])} to ${fv(d[L - 1], N.unit)} in ${yr(N.labels[L - 1])}.`;
  const mech = N.labels.map((l, k) => `${k ? 'in' : 'In'} ${yr(l)} it was ${fv(d[k], N.unit)}`).join(', ') + '.';
  const change = Math.abs(d[L - 1] - d[0]) / (d[0] || 1);
  const exag = `${NM(s)} ${d[L - 1] >= d[0] ? 'soared dramatically' : 'collapsed dramatically'} over the period.`;
  const opts = lv === 3 && change < 0.4 ? [good, mech, exag] : [good, mech];
  return { q: `Biểu đồ: *${N.title}*. Câu thân bài nào chọn lọc số liệu tốt nhất cho ${NM(s)}?`, options: opts, a: 0,
    why: { q: 'Vì sao?', options: ['Chọn điểm đầu, điểm đặc biệt và điểm cuối cho thấy xu hướng; liệt kê mọi mốc là "mechanical"', 'Phải nêu đủ mọi mốc mới đạt Task Achievement', 'Từ mạnh (dramatically) luôn được điểm từ vựng cao'], a: 0 },
    ex: 'Band 5 Task Achievement: "details mechanically recounted". Mức độ từ (dramatically/slightly) phải khớp độ lớn thay đổi.' };
}
function tCompare(N, seed) {
  const last = N.labels.length - 1; const [a, b] = pickPair(N, seed); if (a === b) return null;
  const ta = trendOf(a.data), tb = trendOf(b.data); if (ta === 'flat' && tb === 'flat') return null;
  const v = (s, t) => t === 'up' ? 'rose' : t === 'down' ? 'fell' : 'remained broadly stable';
  const good = `While ${NM(a)} ${v(a, ta)} to ${fv(a.data[last], N.unit)}, ${NM(b)} ${ta === tb ? 'followed a similar pattern, ending at' : v(b, tb) + (tb === 'flat' ? ' at' : ' to')} ${fv(b.data[last], N.unit)}.`.replace('stable to', 'stable at');
  const sep = `${NM(a)} ${v(a, ta)} to ${fv(a.data[last], N.unit)}. ${NM(b)} ${v(b, tb)} to ${fv(b.data[last], N.unit)}.`.replace(/stable to/g, 'stable at');
  return { q: `Biểu đồ: *${N.title}*. Cách viết nào tốt hơn cho thân bài?`, options: [good, sep], a: 0,
    why: { q: 'Vì sao?', options: ['Có so sánh trực tiếp hai hạng mục trong một câu, làm rõ khác biệt/điểm giống', 'Câu ngắn tách rời dễ đọc hơn nên luôn tốt hơn', 'Phải có từ nối Firstly/Secondly'], a: 0 }, ex: 'Band 7 TA: "main trends/differences identified"; CC: liên kết ý bằng cấu trúc so sánh thay vì câu rời.' };
}
/* gap / rewrite (Apply) */
function tGap(N, seed, lv) {
  const items = []; const L = N.labels.length;
  for (let r = 0; r < N.series.length && items.length < 4; r++) {
    const s = N.series[(seed + r) % N.series.length]; const a = s.data[0], b = s.data[L - 1]; if (a === b) continue;
    const up = b > a, P = proj(N.labels[L - 1]);
    if (lv === 1) items.push({ q: `${s.name} ___ from ${fv(a, N.unit)} in ${yr(N.labels[0])} to ${fv(b, N.unit)} in ${yr(N.labels[L - 1])}. (động từ xu hướng, ${P ? 'dự báo: is projected to + V' : 'quá khứ'})`, a: P ? (up ? ['is projected to rise', 'is projected to increase', 'is expected to rise'] : ['is projected to fall', 'is projected to decrease', 'is expected to fall']) : (up ? ['rose', 'increased', 'grew', 'climbed'] : ['fell', 'decreased', 'declined', 'dropped']), ex: up ? 'Số liệu tăng.' : 'Số liệu giảm.' });
    else if (lv === 2) { const d = Math.round(Math.abs(b - a) * 100) / 100; items.push({ q: `Between ${yr(N.labels[0])} and ${yr(N.labels[L - 1])}, ${lc(s.name)} ${P ? 'is projected to ' + (up ? 'rise' : 'fall') : up ? 'rose' : 'fell'} ___ ${fv(d, N.unit)}, ___ ${fv(b, N.unit)}. (giới từ + giới từ, cách nhau bằng dấu phẩy)`, a: ['by, to', 'by,to'], ex: '"by" + mức chênh; "to" + mức đạt được.' }); }
  }
  return items.length >= 2 ? items.slice(0, 3) : null;
}
function tRewrite(N, seed) {
  const L = N.labels.length; const items = [];
  if (L === 2) {
    for (let r = 0; r + 1 < N.series.length && items.length < 2; r += 2) {
      const A = N.series[(seed + r) % N.series.length], B = N.series[(seed + r + 1) % N.series.length]; if (A === B) break;
      const va = A.data[1] > A.data[0] ? 'rose' : 'fell', vb = B.data[1] > B.data[0] ? 'rose' : 'fell';
      items.push({ q: `Viết MỘT câu so sánh thay đổi của hai hạng mục (${N.labels[0]} → ${N.labels[1]}): ${A.name} ${fv(A.data[0], N.unit)} → ${fv(A.data[1], N.unit)}; ${B.name} ${fv(B.data[0], N.unit)} → ${fv(B.data[1], N.unit)}.`,
        a: [`While ${A.name} ${va} from ${fv(A.data[0], N.unit)} to ${fv(A.data[1], N.unit)}, ${B.name} ${va === vb ? 'also ' + vb : vb} from ${fv(B.data[0], N.unit)} to ${fv(B.data[1], N.unit)}.`] });
    }
    return items;
  }
  if (L < 3) return null;
  for (let r = 0; r < N.series.length && items.length < 2; r++) {
    const s = N.series[(seed + r) % N.series.length]; const m = Math.floor(L / 2); const d = s.data;
    const v1 = d[m] > d[0] ? 'rose' : d[m] < d[0] ? 'fell' : 'stayed', v2 = d[L - 1] > d[m] ? 'climbing' : d[L - 1] < d[m] ? 'falling' : 'remaining';
    items.push({ q: `Gộp 3 mốc thành MỘT câu chính xác: ${s.name} — ${yr(N.labels[0])}: ${fv(d[0], N.unit)}; ${yr(N.labels[m])}: ${fv(d[m], N.unit)}; ${yr(N.labels[L - 1])}${proj(N.labels[L - 1]) ? ' (dự báo)' : ''}: ${fv(d[L - 1], N.unit)}.`,
      a: [`${s.name} started at ${fv(d[0], N.unit)} in ${yr(N.labels[0])} and ${v1 === 'stayed' ? 'remained there' : v1 + ' to ' + fv(d[m], N.unit)} by ${yr(N.labels[m])}, before ${v2 === 'remaining' ? 'remaining at that level' : v2 + ' to ' + fv(d[L - 1], N.unit)} ${proj(N.labels[L - 1]) ? '(projected) ' : ''}in ${yr(N.labels[L - 1])}.`] });
  }
  return items;
}
/* ---- STATIC (một thời điểm) ---- */
function sRank(N) { const s = N.series[0]; return N.labels.map((l, i) => ({ l, v: s.data[i] })).filter(x => x.v != null).sort((a, b) => b.v - a.v); }
function sTrendWords(N, seed) {
  const r = sRank(N); if (r.length < 3) return null; const s = N.series[0]; const A = r[0], B = r[r.length - 1];
  const good = `${A.l} had the highest figure${s.name && N.series.length > 1 ? ' for ' + s.name : ''}, at ${fv(A.v, N.unit)}, while ${B.l} had the lowest, at ${fv(B.v, N.unit)}.`;
  const bad = `${A.l} increased to ${fv(A.v, N.unit)}, while ${B.l} decreased to ${fv(B.v, N.unit)}.`;
  return { q: `Biểu đồ: *${N.title}* (chỉ một thời điểm). Câu nào phù hợp?`, options: [good, bad], a: 0,
    why: { q: 'Câu còn lại sai vì:', options: ['dữ liệu một thời điểm không có thay đổi, nên không dùng increase/decrease', 'thiếu đơn vị', 'không dùng mệnh đề quan hệ'], a: 0 }, ex: 'Dạng No change: dùng so sánh và xếp hạng.' };
}
function sGroup(N) {
  const r = sRank(N); if (r.length < 4) return null; const h = Math.ceil(r.length / 2);
  const good = `Đoạn 1: ${listTxt(r.slice(0, h).map(x => x.l))} (nhóm cao). Đoạn 2: ${listTxt(r.slice(h).map(x => x.l))} (nhóm thấp).`;
  const bad = `Mỗi hạng mục một câu theo thứ tự trong biểu đồ: ${N.labels.join(' → ')}.`;
  return { q: `Biểu đồ: *${N.title}*. Cách chia thân bài nào hợp lý hơn?`, options: [good, bad], a: 0,
    why: { q: 'Vì sao?', options: ['Nhóm theo đặc điểm chung giúp so sánh trong nhóm (dữ liệu được phân nhóm)', 'Phải mô tả đúng thứ tự trong biểu đồ', 'Càng nhiều đoạn càng tốt'], a: 0 }, ex: 'Band 7 TA: "data appropriately categorised".' };
}
function ratioPhrase(r) { if (r >= 1.9 && r <= 2.1) return 'twice as high as'; if (r >= 2.85 && r <= 3.15) return 'three times as high as'; if (r >= 1.4 && r <= 1.6) return 'one and a half times as high as'; return null; }
function sRatio(N, seed, lv) {
  const r = sRank(N); const pairs = [];
  for (let i = 0; i < r.length; i++) for (let j = i + 1; j < r.length; j++) { const p = ratioPhrase(r[i].v / r[j].v); if (p) pairs.push([r[i], r[j], p]); }
  if (pairs.length) {
    const [A, B, p] = pairs[seed % pairs.length];
    const good = `The figure for ${A.l} (${fv(A.v, N.unit)}) was ${p} that for ${B.l} (${fv(B.v, N.unit)}).`;
    const wrongP = p === 'twice as high as' ? 'three times as high as' : 'twice as high as';
    const bad = lv === 3 ? good.replace(p, wrongP) : `The figure for ${B.l} (${fv(B.v, N.unit)}) was ${p} that for ${A.l} (${fv(A.v, N.unit)}).`;
    return { q: `Biểu đồ: *${N.title}*. Câu nào chính xác?`, options: [good, bad], a: 0, why: { q: 'Câu còn lại sai vì:', options: [lv === 3 ? 'sai tỷ lệ gấp' : 'đảo chiều so sánh (số nhỏ hơn lại nói là gấp)', 'không dùng "that for"', 'dùng sai thì'], a: 0 }, ex: `${fv(A.v, N.unit)} ÷ ${fv(B.v, N.unit)} ≈ ${(A.v / B.v).toFixed(1)}.` };
  }
  if (r.length < 3) return null; const A = r[0], B = r[1];
  const good = `${A.l} recorded the highest figure, at ${fv(A.v, N.unit)}, ahead of ${B.l} (${fv(B.v, N.unit)}).`;
  const bad = `${B.l} recorded the highest figure, at ${fv(B.v, N.unit)}, ahead of ${A.l} (${fv(A.v, N.unit)}).`;
  return { q: `Biểu đồ: *${N.title}*. Câu nào chính xác?`, options: [good, bad], a: 0, why: { q: 'Câu còn lại sai vì:', options: ['xếp hạng sai (đọc nhầm hạng mục cao nhất)', 'thiếu đơn vị', 'dùng "ahead of" là sai'], a: 0 }, ex: '' };
}
function sGap(N, seed) {
  const r = sRank(N); if (r.length < 3) return null; const A = r[0], B = r[r.length - 1], C = r[1];
  return [{ q: `${A.l} recorded the ___ figure, at ${fv(A.v, N.unit)}. (so sánh nhất)`, a: ['highest', 'largest', 'greatest'] },
    { q: `${B.l} had the ___ figure, at only ${fv(B.v, N.unit)}. (so sánh nhất)`, a: ['lowest', 'smallest'] },
    { q: `The figure for ${C.l} was ___ than that for ${B.l}. (so sánh hơn)`, a: ['higher', 'larger', 'greater', 'considerably higher', 'much higher', 'significantly higher'] }];
}
/* ---- PROCESS ---- */
function pOverview(c, seed, lv) {
  const n = c.steps.length; const f = lc(strip(c.steps[0])), l = lc(strip(c.steps[n - 1]));
  const good = `Overall, there are ${n} main stages, beginning with the point at which ${f} and ending when ${l}.`;
  const bad1 = `Overall, the process is very efficient and good for the economy because it creates jobs.`;
  const bad2 = `Overall, there are ${n - 1} stages, and the most important stage is the ${['second', 'third', 'fourth'][seed % 3]} one.`;
  return { q: `Quy trình: *${c.title}*. Overview nào tốt nhất?`, options: lv === 3 ? [good, bad1, bad2] : [good, bad1], a: 0,
    why: { q: 'Vì sao?', options: ['Overview của Process nêu số bước, bước đầu và bước cuối; không nhận xét, không đếm sai', 'Overview phải đánh giá quy trình', 'Overview phải chọn bước quan trọng nhất'], a: 0 }, ex: '' };
}
function pOrder(c, seed, lv) {
  const n = c.steps.length; if (n < 4) return null; const k = seed % (n - 2);
  const A = lc(strip(c.steps[k])), B = lc(strip(c.steps[k + 1])), C = lc(strip(c.steps[k + 2]));
  const good = `Once ${A}, ${B}.`; const bad = lv === 3 ? `Once ${A}, ${C}.` : `Once ${B}, ${A}.`;
  return { q: `Quy trình: *${c.title}*. Câu nào đúng trình tự?`, options: [good, bad], a: 0,
    why: { q: 'Câu còn lại sai vì:', options: [lv === 3 ? 'bỏ sót một bước ở giữa' : 'đảo ngược trình tự hai bước', 'dùng sai bị động', 'thiếu từ nối'], a: 0 }, ex: `Bước ${k + 1}: ${c.steps[k]} → Bước ${k + 2}: ${c.steps[k + 1]}${lv === 3 ? ' → Bước ' + (k + 3) + ': ' + c.steps[k + 2] : ''}.` };
}
function pLinkers(c, seed) {
  const s = c.steps.slice(0, 4).map(x => lc(strip(x)));
  const good = `At the first stage, ${s[0]}. Once this has been done, ${s[1]}, after which ${s[2]}. ${s[3].charAt(0).toUpperCase() + s[3].slice(1)} at the next stage.`;
  const bad = `First, ${s[0]}. Second, ${s[1]}. Third, ${s[2]}. Fourth, ${s[3]}.`;
  return { q: `Quy trình: *${c.title}*. Đoạn nào liên kết tốt hơn?`, options: [good, bad], a: 0,
    why: { q: 'Vì sao?', options: ['Từ nối bước đa dạng và có tham chiếu (this, after which) thay vì lặp First/Second/Third', 'Đánh số các bước là cách duy nhất đúng', 'Đoạn ngắn hơn luôn tốt hơn'], a: 0 }, ex: 'Band 6 CC: cohesive devices "may be faulty or mechanical".' };
}
function pRewrite(c, seed, lv) {
  const n = c.steps.length; const items = [];
  for (let r = 0; r < 2; r++) { const k = (seed + r * 2) % (n - 1); const A = strip(c.steps[k]), B = strip(c.steps[k + 1]);
    items.push({ q: `Nối hai bước thành MỘT câu ${lv === 1 ? '(dùng after that / then / and then)' : lv === 2 ? '(dùng Once / After)' : '(dùng after which / , which / after being + V3)'}: «${A}» + «${B}»`, a: [`Once ${lc(A)}, ${lc(B)}.`, `After ${lc(A)}, ${lc(B)}.`] }); }
  return items;
}
/* ---- MAP ---- */
const base = n => String(n).replace(/\s*\(.*?\)/g, '').replace(/\s*\+.*$/, '').trim().toLowerCase();
function mDiff(c) {
  const [m1, m2] = c.maps; const b1 = m1.items.map(i => base(i.name)), b2 = m2.items.map(i => base(i.name));
  return { T1: m1.title, T2: m2.title, removed: m1.items.filter(i => !b2.includes(base(i.name))).map(i => i.name), added: m2.items.filter(i => !b1.includes(base(i.name))).map(i => i.name), kept: m2.items.filter(i => b1.includes(base(i.name))).map(i => i.name) };
}
const when = T => /^(now|today)$/i.test(T) ? 'today' : 'in ' + T;
const byT = T => /^(now|today)$/i.test(T) ? 'today' : T;
const art = n => /s$/i.test(base(n)) ? 'the ' + base(n) : 'the ' + base(n);
function mOverview(c) {
  const d = mDiff(c); if (!d.added.length) return null;
  const good = `Overall, the area changed considerably between ${d.T1} and ${byT(d.T2)}, with ${listTxt(d.added.slice(0, 2).map(art))} added${d.removed.length ? ' and ' + art(d.removed[0]) + ' removed' : ''}.`;
  const bad = `Overall, in ${d.T1} there was ${art(c.maps[0].items[0].name)} in the north-west, and ${when(d.T2)} there ${/^(now|today)$/i.test(d.T2) ? 'is' : 'was'} ${art(c.maps[1].items[0].name)} in the north-west.`;
  return { q: `Bản đồ: *${c.title}*. Overview nào tốt hơn?`, options: [good, bad], a: 0,
    why: { q: 'Vì sao?', options: ['Overview nêu xu hướng thay đổi chính, không liệt kê vị trí từng chi tiết', 'Overview phải dùng hướng la bàn', 'Overview phải bắt đầu bằng năm đầu tiên'], a: 0 }, ex: '' };
}
function mAccuracy(c, seed) {
  const d = mDiff(c); const items = [];
  if (d.added.length) { const x = d.added[seed % d.added.length]; items.push({ q: `Bản đồ: *${c.title}*. Câu nào chính xác?`, options: [`${art(x).replace(/^t/, 'T')} ${/s$/.test(base(x)) ? 'were' : 'was'} built after ${d.T1}.`, `${art(x).replace(/^t/, 'T')} ${/s$/.test(base(x)) ? 'were' : 'was'} demolished after ${d.T1}.`], a: 0, why: { q: 'Câu còn lại sai vì:', options: [`đảo ngược thay đổi: ${base(x)} chỉ xuất hiện ở bản đồ ${byT(d.T2)}`, 'thiếu giới từ chỉ vị trí', 'sai thì'], a: 0 }, ex: '' }); }
  if (d.kept.length && items.length < 2) { const x = d.kept[seed % d.kept.length]; items.push({ q: `Bản đồ: *${c.title}*. Câu nào chính xác?`, options: [`${art(x).replace(/^t/, 'T')} remained in place throughout the period.`, `${art(x).replace(/^t/, 'T')} ${/s$/.test(base(x)) ? 'were' : 'was'} built after ${d.T1}.`], a: 0, why: { q: 'Câu còn lại sai vì:', options: [`mô tả một thay đổi không có thật: ${base(x)} có ở cả hai bản đồ`, 'thiếu so sánh', 'dùng sai mạo từ'], a: 0 }, ex: '' }); }
  if (d.removed.length && items.length < 2) { const x = d.removed[seed % d.removed.length]; items.push({ q: `Bản đồ: *${c.title}*. Câu nào chính xác?`, options: [`${art(x).replace(/^t/, 'T')} no longer existed by ${byT(d.T2)}.`, `${art(x).replace(/^t/, 'T')} ${/s$/.test(base(x)) ? 'were' : 'was'} extended by ${byT(d.T2)}.`], a: 0, why: { q: 'Câu còn lại sai vì:', options: [`${base(x)} đã biến mất, không phải được mở rộng`, 'phải dùng hiện tại hoàn thành', 'thiếu số liệu'], a: 0 }, ex: '' }); }
  return items;
}
function mGap(c) {
  const d = mDiff(c); const items = d.added.slice(0, 3).map(x => ({ q: `By ${d.T2.toLowerCase() === 'today' ? 'today' : d.T2}, ${art(x)} ___ (build). (bị động)`, a: d.T2.toLowerCase() === 'today' ? (/s$/.test(base(x)) ? ['have been built'] : ['has been built']) : (/s$/.test(base(x)) ? ['had been built', 'were built'] : ['had been built', 'was built']) }));
  return items.length >= 2 ? items : null;
}
/* ---- lắp ráp ---- */
function makeFor(bloom, lv, c, seed) {
  const two = (fs) => { const out = []; for (const f of fs) { const it = f(); if (it && !out.some(o => o.options && it.options && o.options[0] === it.options[0])) out.push(it); if (out.length >= 2) break; } return out; };
  const MQ = (title, instr, items) => items.length ? { type: 'mcq2', title, instr: instr || 'Tầng 1: chọn phương án. Tầng 2: chọn lý do. Đúng cả hai tầng mới được điểm đủ.', items } : null;
  const N = c.kind === 'process' || c.kind === 'map' ? null : norm(c);
  if (c.kind === 'process' && c.steps?.length >= 4) {
    if (bloom === 'understand') return MQ('Overview cho quy trình', '', two([() => pOverview(c, seed, lv), () => pOrder(c, seed + 1, lv)]));
    if (bloom === 'analyze') return MQ('Kiểm tra trình tự quy trình', '', two([() => pOrder(c, seed, lv), () => pOrder(c, seed + 3, lv)]));
    if (bloom === 'evaluate') return MQ('Đánh giá cách nối các bước', '', two([() => pLinkers(c, seed), () => pOverview(c, seed + 1, lv)]));
    if (bloom === 'apply') return { type: 'rewrite', title: 'Nối các bước quy trình', instr: 'Viết một câu đúng trình tự, đúng chủ động/bị động. Đáp án mẫu chỉ để tham khảo.', items: pRewrite(c, seed, lv) };
    return null;
  }
  if (c.kind === 'map' && c.maps?.length === 2) {
    if (bloom === 'understand' || bloom === 'evaluate') { const o = mOverview(c); const acc = mAccuracy(c, seed); return MQ(bloom === 'understand' ? 'Overview cho bản đồ' : 'Đánh giá câu mô tả bản đồ', '', [o, ...acc].filter(Boolean).slice(0, 2)); }
    if (bloom === 'analyze') return MQ('Kiểm tra thay đổi trên bản đồ', '', mAccuracy(c, seed + 1));
    if (bloom === 'apply') { const g = mGap(c); return g ? { type: 'gap', title: 'Bị động mô tả thay đổi', instr: 'Điền dạng bị động đúng thì.', items: g } : null; }
    return null;
  }
  if (!N || N.series.length < 1 || N.labels.length < 2) return null;
  if (N.time) {
    if (bloom === 'understand') return MQ(lv === 3 ? 'Overview: chọn bản chính xác nhất' : 'Chọn Overview', '', two([() => tOverview(N, seed, lv), () => tWrongTrend(N, seed + 1)]));
    if (bloom === 'analyze') return MQ(lv === 3 ? 'Soát số liệu tinh (Mức 3)' : 'Soát độ chính xác số liệu', '', two([() => tAccuracy(N, seed, lv), () => tAccuracy(N, seed + 1, lv), () => tAccuracy(N, seed + 2, lv)]));
    if (bloom === 'evaluate') return MQ('Chọn lọc & so sánh số liệu', '', two([() => tSelect(N, seed, lv), () => tCompare(N, seed)]).length ? two([() => tSelect(N, seed, lv), () => tCompare(N, seed)]) : []);
    if (bloom === 'apply') { if (lv === 3) { const it = tRewrite(N, seed); return it?.length ? { type: 'rewrite', title: 'Gộp 3 mốc số liệu (Mức 3)', instr: 'Viết MỘT câu gộp 3 mốc, đúng số liệu và trình tự. Không bắt buộc giống mẫu.', items: it } : null; }
      const g = tGap(N, seed, lv); return g ? { type: 'gap', title: lv === 1 ? 'Động từ xu hướng theo dữ liệu' : 'Giới từ số liệu by / to', instr: 'Điền theo đúng dữ liệu biểu đồ.', items: g } : null; }
    return null;
  }
  if (bloom === 'understand') return MQ('Dữ liệu một thời điểm: viết thế nào?', '', two([() => sTrendWords(N, seed), () => sGroup(N)]));
  if (bloom === 'analyze') return MQ('Soát câu so sánh', '', two([() => sRatio(N, seed, lv), () => sTrendWords(N, seed + 1)]));
  if (bloom === 'evaluate') return MQ('Chọn cách tổ chức thân bài', '', two([() => sGroup(N), () => sRatio(N, seed + 2, lv)]));
  if (bloom === 'apply') { const g = sGap(N, seed); return g ? { type: 'gap', title: 'So sánh & xếp hạng theo dữ liệu', instr: 'Điền theo đúng dữ liệu biểu đồ.', items: g } : null; }
  return null;
}
const stageCharts = [];
for (const u of window.UNITS) if (u.stage === 'task1') for (const e of u.exercises) for (const c of [e.chart, ...(e.extraCharts || [])]) if (c && !stageCharts.includes(c)) stageCharts.push(c);
let made = 0;
for (const u of window.UNITS) {
  if (u.stage !== 'task1') continue;
  const own = []; for (const e of u.exercises) for (const c of [e.chart, ...(e.extraCharts || [])]) if (c && !own.includes(c)) own.push(c);
  const kinds = new Set(own.map(c => c.kind));
  const pool = own.concat(stageCharts.filter(c => kinds.has(c.kind) && !own.includes(c)));
  for (const bloom of ['understand', 'analyze', 'evaluate', 'apply']) for (const lv of [1, 2, 3]) {
    let have = u.exercises.filter(e => e.bloom === bloom && lvOf(e) === lv).length; let t = 0;
    while (have < NEED && t < pool.length * 2) {
      const c = pool[(hash(u.id + bloom + lv) + t) % pool.length]; t++;
      const ex = makeFor(bloom, lv, c, hash(u.id + bloom) + t * 7 + lv);
      if (!ex || !ex.items?.length) continue;
      const sig = JSON.stringify(ex.items.map(i => i.q + (i.options ? i.options[0] : '')));
      if (u.exercises.some(e => e.gen && e.sig === sig)) continue;
      u.exercises.push(Object.assign({ bloom, lv, chart: c, gen: 'task1', sig }, ex)); have++; made++;
    }
  }
}
window.KL_T1GEN = { made };
})();
