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
  const numeric = `Overall, ${NM(a)} went from ${fv(a.data[0], N.unit)} in ${yr(N.labels[0])} to ${fv(a.data[last], N.unit)} in ${yr(N.labels[last])}, while ${NM(b)} went from ${fv(b.data[0], N.unit)} to ${fv(b.data[last], N.unit)} over the same period.`;
  const cause = `Overall, ${NM(top)} grew the most because people became more interested in it, while the other categories were less popular.`;
  const opts = lv === 3 ? [good, numeric, cause] : [good, numeric];
  return { q: `Chart: *${N.title}*. Choose the best overview.`, options: opts, a: 0,
    why: { q: 'Why?', options: ['An overview states the main trends and features, without detailed figures or speculation about causes', 'An overview must include the start and end figures for each category so they can be checked', 'An overview should explain the likely reasons for the changes, because examiners reward analysis'], a: 0 },
    ex: 'According to the band descriptors, Band 7 Task Achievement requires "a clear overview" of the main trends/differences; figures are kept for the body, and Task 1 does not speculate about causes.' };
}
function tWrongTrend(N, seed) {
  const last = N.labels.length - 1; const s = N.series.find((x, i) => i >= seed % N.series.length && trendOf(x.data) !== 'flat') || N.series.find(x => trendOf(x.data) !== 'flat'); if (!s) return null;
  const up = trendOf(s.data) === 'up';
  const good = `Overall, ${NM(s)} ${up ? 'rose' : 'fell'} over the period shown.`, bad = `Overall, ${NM(s)} ${up ? 'fell' : 'rose'} over the period shown.`;
  return { q: `Chart: *${N.title}*. Which overview sentence is CORRECT according to the data?`, options: [good, bad], a: 0,
    why: { q: 'The other sentence is wrong because it:', options: [`misstates the direction of the trend for ${NM(s)} (${fv(s.data[0], N.unit)} → ${fv(s.data[last], N.unit)})`, 'includes detailed figures in the overview instead of the main trend', 'uses the wrong tense for a period that has already finished'], a: 0 }, ex: '' };
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
  if (diff !== b) errs.push({ s: good.replace(` to ${fv(b, N.unit)}`, ` by ${fv(b, N.unit)}`).replace(` from ${fv(a, N.unit)} in ${yr(N.labels[i])}`, ` between ${yr(N.labels[i])} and ${yr(N.labels[j])},`).replace(/, in \d{4}\.$/, '.').replace(` in ${yr(N.labels[j])}.`, '.'), why: `confuses "by" (the amount of change, here ${fv(diff, N.unit)}) with "to" (the level reached)`, k: 'by', lv: 2 });
  errs.push({ s: P ? good.replace(up ? 'rise' : 'fall', up ? 'fall' : 'rise') : good.replace(up ? 'rose' : 'fell', up ? 'fell' : 'rose'), why: 'gets the direction of change wrong: it says the figure rose when it fell, or the reverse', k: 'dir', lv: 1 });
  if (L > 2) { const k = j === L - 1 ? L - 2 : j + 1; if (k !== i && s.data[k] !== b) errs.push({ s: good.replace(`in ${yr(N.labels[j])}`, `in ${yr(N.labels[k])}`), why: `attaches a figure to the wrong year (${fv(b, N.unit)} is the figure for ${yr(N.labels[j])})`, k: 'year', lv: 3 }); }
  const other = N.series.find(x => x !== s && x.data[j] != null && x.data[j] !== b && (x.data[j] > a) === up);
  if (other) errs.push({ s: good.replace(`to ${fv(b, N.unit)}`, `to ${fv(other.data[j], N.unit)}`), why: `uses the figure for ${NM(other)} instead of the one for ${NM(s)}`, k: 'other', lv: 3 });
  if (P) errs.push({ s: good.replace(/is projected to (rise|fall)/, up ? 'rose' : 'fell'), why: 'describes projected figures as if they had already happened', k: 'proj', lv: 2 });
  const pool = errs.filter(e => lv === 3 ? e.lv >= 2 : e.lv <= 2); const e = pool[seed % pool.length] || errs[0];
  const distract = [['dir', 'gets the direction of change wrong: it says the figure rose when it fell, or the reverse'], ['by', 'confuses "by" (the amount of change) with "to" (the level reached)'], ['year', 'attaches a figure to the wrong year, mixing up the start and end points'], ['other', 'uses a figure from another category instead of the one being described'], ['proj', 'describes projected figures as if they had already happened']].filter(x => x[0] !== e.k).map(x => x[1]);
  return { q: `Chart: *${N.title}*. Which sentence describes the data ACCURATELY?`, options: [good, e.s], a: 0,
    why: { q: 'The other sentence is wrong because it:', options: [e.why, distract[seed % distract.length], distract[(seed + 2) % distract.length]], a: 0 }, ex: '' };
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
  return { q: `Chart: *${N.title}*. Which body sentence selects figures best for ${NM(s)}?`, options: opts, a: 0,
    why: { q: 'Why?', options: ['It picks the start, the notable point and the end to show the trend; listing every point is "mechanical"', 'It mentions every time point, which Task Achievement requires for a complete description', 'It uses strong words such as dramatically, which always score highly for vocabulary'], a: 0 },
    ex: 'Band 5 Task Achievement: "details mechanically recounted". Words of degree (dramatically/slightly) must match the size of the change.' };
}
function tCompare(N, seed) {
  const last = N.labels.length - 1; const [a, b] = pickPair(N, seed); if (a === b) return null;
  const ta = trendOf(a.data), tb = trendOf(b.data); if (ta === 'flat' && tb === 'flat') return null;
  const v = (s, t) => t === 'up' ? 'rose' : t === 'down' ? 'fell' : 'remained broadly stable';
  const good = `While ${NM(a)} ${v(a, ta)} to ${fv(a.data[last], N.unit)}, ${NM(b)} ${ta === tb ? 'followed a similar pattern, ending at' : v(b, tb) + (tb === 'flat' ? ' at' : ' to')} ${fv(b.data[last], N.unit)}.`.replace('stable to', 'stable at');
  const sep = `${NM(a)} ${v(a, ta)} to ${fv(a.data[last], N.unit)} by the end of the period. ${NM(b)} ${v(b, tb)} to ${fv(b.data[last], N.unit)} by the end of the period.`.replace(/stable to/g, 'stable at');
  return { q: `Chart: *${N.title}*. Which version is better for the body?`, options: [good, sep], a: 0,
    why: { q: 'Why?', options: ['It compares two categories directly in one sentence, making the difference/similarity clear', 'Short separate sentences are easier to follow, so they always score higher for coherence', 'It begins with a linker such as Firstly or Secondly, which examiners expect in every sentence'], a: 0 }, ex: 'Band 7 TA: "main trends/differences identified"; CC: ideas are linked with comparative structures instead of separate sentences.' };
}
/* gap / rewrite (Apply) */
function tGap(N, seed, lv) {
  const items = []; const L = N.labels.length;
  for (let r = 0; r < N.series.length && items.length < 4; r++) {
    const s = N.series[(seed + r) % N.series.length]; const a = s.data[0], b = s.data[L - 1]; if (a === b) continue;
    const up = b > a, P = proj(N.labels[L - 1]);
    if (lv === 1) items.push({ q: `${s.name} ___ from ${fv(a, N.unit)} in ${yr(N.labels[0])} to ${fv(b, N.unit)} in ${yr(N.labels[L - 1])}. (trend verb, ${P ? 'projection: is projected to + V' : 'past'})`, a: P ? (up ? ['is projected to rise', 'is projected to increase', 'is expected to rise'] : ['is projected to fall', 'is projected to decrease', 'is expected to fall']) : (up ? ['rose', 'increased', 'grew', 'climbed'] : ['fell', 'decreased', 'declined', 'dropped']), ex: up ? 'The figure rose.' : 'The figure fell.' });
    else if (lv === 2) { const d = Math.round(Math.abs(b - a) * 100) / 100; items.push({ q: `Between ${yr(N.labels[0])} and ${yr(N.labels[L - 1])}, ${lc(s.name)} ${P ? 'is projected to ' + (up ? 'rise' : 'fall') : up ? 'rose' : 'fell'} ___ ${fv(d, N.unit)}, ___ ${fv(b, N.unit)}. (preposition + preposition, separated by a comma)`, a: ['by, to', 'by,to'], ex: '"by" + the amount of change; "to" + the level reached.' }); }
  }
  return items.length >= 2 ? items.slice(0, 3) : null;
}
function tRewrite(N, seed) {
  const L = N.labels.length; const items = [];
  if (L === 2) {
    for (let r = 0; r + 1 < N.series.length && items.length < 2; r += 2) {
      const A = N.series[(seed + r) % N.series.length], B = N.series[(seed + r + 1) % N.series.length]; if (A === B) break;
      const va = A.data[1] > A.data[0] ? 'rose' : 'fell', vb = B.data[1] > B.data[0] ? 'rose' : 'fell';
      items.push({ q: `Write ONE sentence comparing the changes in two categories (${N.labels[0]} → ${N.labels[1]}): ${A.name} ${fv(A.data[0], N.unit)} → ${fv(A.data[1], N.unit)}; ${B.name} ${fv(B.data[0], N.unit)} → ${fv(B.data[1], N.unit)}.`,
        a: [`While ${A.name} ${va} from ${fv(A.data[0], N.unit)} to ${fv(A.data[1], N.unit)}, ${B.name} ${va === vb ? 'also ' + vb : vb} from ${fv(B.data[0], N.unit)} to ${fv(B.data[1], N.unit)}.`] });
    }
    return items;
  }
  if (L < 3) return null;
  for (let r = 0; r < N.series.length && items.length < 2; r++) {
    const s = N.series[(seed + r) % N.series.length]; const m = Math.floor(L / 2); const d = s.data;
    const v1 = d[m] > d[0] ? 'rose' : d[m] < d[0] ? 'fell' : 'stayed', v2 = d[L - 1] > d[m] ? 'climbing' : d[L - 1] < d[m] ? 'falling' : 'remaining';
    items.push({ q: `Combine the 3 time points into ONE accurate sentence: ${s.name} — ${yr(N.labels[0])}: ${fv(d[0], N.unit)}; ${yr(N.labels[m])}: ${fv(d[m], N.unit)}; ${yr(N.labels[L - 1])}${proj(N.labels[L - 1]) ? ' (projected)' : ''}: ${fv(d[L - 1], N.unit)}.`,
      a: [`${s.name} started at ${fv(d[0], N.unit)} in ${yr(N.labels[0])} and ${v1 === 'stayed' ? 'remained there' : v1 + ' to ' + fv(d[m], N.unit)} by ${yr(N.labels[m])}, before ${v2 === 'remaining' ? 'remaining at that level' : v2 + ' to ' + fv(d[L - 1], N.unit)} ${proj(N.labels[L - 1]) ? '(projected) ' : ''}in ${yr(N.labels[L - 1])}.`] });
  }
  return items;
}
/* ---- STATIC (một thời điểm) ---- */
function sRank(N) { const s = N.series[0]; return N.labels.map((l, i) => ({ l, v: s.data[i] })).filter(x => x.v != null).sort((a, b) => b.v - a.v); }
function sTrendWords(N, seed) {
  const r = sRank(N); if (r.length < 3) return null; const s = N.series[0]; const A = r[0], B = r[r.length - 1];
  const good = `${A.l} had the highest figure${s.name && N.series.length > 1 ? ' for ' + s.name : ''}, at ${fv(A.v, N.unit)}, while ${B.l} had the lowest, at ${fv(B.v, N.unit)}.`;
  const bad = `${A.l} increased to ${fv(A.v, N.unit)} over the period, while ${B.l} decreased to ${fv(B.v, N.unit)} by the end of it.`;
  return { q: `Chart: *${N.title}* (a single point in time). Which sentence is appropriate?`, options: [good, bad], a: 0,
    why: { q: 'The other sentence is wrong because it:', options: ['uses increase/decrease, but data from a single point in time cannot show change', 'leaves out the units, so the reader cannot tell what the figures measure', 'ranks the categories wrongly, giving the highest figure to the wrong one'], a: 0 }, ex: 'No change: use comparisons and rankings.' };
}
function sGroup(N) {
  const r = sRank(N); if (r.length < 4) return null; const h = Math.ceil(r.length / 2);
  const good = `Paragraph 1: ${listTxt(r.slice(0, h).map(x => x.l))} (the high group). Paragraph 2: ${listTxt(r.slice(h).map(x => x.l))} (the low group).`;
  const bad = `One sentence per category in chart order: ${N.labels.join(' → ')}.`;
  return { q: `Chart: *${N.title}*. Which way of dividing the body is more logical?`, options: [good, bad], a: 0,
    why: { q: 'Why?', options: ['Grouping by shared features allows comparison within each group (the data is categorised)', 'Following the chart order is required, because examiners check each category in turn', 'One paragraph per category gives more paragraphs, which always scores higher'], a: 0 }, ex: 'Band 7 TA: "data appropriately categorised".' };
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
    return { q: `Chart: *${N.title}*. Which sentence is accurate?`, options: [good, bad], a: 0, why: { q: 'The other sentence is wrong because it:', options: [lv === 3 ? 'gets the multiple wrong for these two figures (divide one by the other to check)' : 'reverses the comparison, calling the smaller figure the multiple of the larger', 'leaves out "that for", so it compares a figure with a category', 'uses the wrong tense for data from a single past year'], a: 0 }, ex: `${fv(A.v, N.unit)} ÷ ${fv(B.v, N.unit)} ≈ ${(A.v / B.v).toFixed(1)}.` };
  }
  if (r.length < 3) return null; const A = r[0], B = r[1];
  const good = `${A.l} recorded the highest figure, at ${fv(A.v, N.unit)}, ahead of ${B.l} (${fv(B.v, N.unit)}).`;
  const bad = `${B.l} recorded the highest figure, at ${fv(B.v, N.unit)}, ahead of ${A.l} (${fv(A.v, N.unit)}).`;
  return { q: `Chart: *${N.title}*. Which sentence is accurate?`, options: [good, bad], a: 0, why: { q: 'The other sentence is wrong because it:', options: ['gets the ranking wrong, naming the second-highest category as the highest', 'leaves out the units, so the reader cannot tell what the figures measure', 'uses "ahead of" wrongly; this structure needs "ahead to" instead'], a: 0 }, ex: '' };
}
function sGap(N, seed) {
  const r = sRank(N); if (r.length < 3) return null; const A = r[0], B = r[r.length - 1], C = r[1];
  return [{ q: `${A.l} recorded the ___ figure, at ${fv(A.v, N.unit)}. (superlative)`, a: ['highest', 'largest', 'greatest'] },
    { q: `${B.l} had the ___ figure, at only ${fv(B.v, N.unit)}. (superlative)`, a: ['lowest', 'smallest'] },
    { q: `The figure for ${C.l} was ___ than that for ${B.l}. (comparative)`, a: ['higher', 'larger', 'greater', 'considerably higher', 'much higher', 'significantly higher'] }];
}
/* ---- PROCESS ---- */
function pOverview(c, seed, lv) {
  const n = c.steps.length; const f = lc(strip(c.steps[0])), l = lc(strip(c.steps[n - 1]));
  const good = `Overall, there are ${n} main stages, beginning with the point at which ${f} and ending when ${l}.`;
  const bad1 = `Overall, the process is highly efficient: it begins when ${f}, and the most important stage is when ${l}.`;
  const bad2 = `Overall, there are ${n - 1} main stages, beginning with the point at which ${f} and ending when ${l}.`;
  return { q: `Process: *${c.title}*. Which overview is best?`, options: lv === 3 ? [good, bad1, bad2] : [good, bad1], a: 0,
    why: { q: 'Why?', options: ['A process overview gives the correct number of stages and the first and last ones, without evaluation', 'A process overview should evaluate how efficient the process is for the people involved', 'A process overview should identify the most important stage and explain why it matters'], a: 0 }, ex: '' };
}
function pOrder(c, seed, lv) {
  const n = c.steps.length; if (n < 4) return null; const k = seed % (n - 2);
  const A = lc(strip(c.steps[k])), B = lc(strip(c.steps[k + 1])), C = lc(strip(c.steps[k + 2]));
  const good = `Once ${A}, ${B}.`; const bad = lv === 3 ? `Once ${A}, ${C}.` : `Once ${B}, ${A}.`;
  return { q: `Process: *${c.title}*. Which sentence follows the correct sequence?`, options: [good, bad], a: 0,
    why: { q: 'The other sentence is wrong because it:', options: [lv === 3 ? 'leaves out a stage that comes between the two it mentions' : 'reverses the order of two consecutive stages in the process', lv === 3 ? 'reverses the order of two consecutive stages in the process' : 'leaves out a stage that comes between the two it mentions', 'uses the passive voice where the active voice is needed'], a: 0 }, ex: `Step ${k + 1}: ${c.steps[k]} → Step ${k + 2}: ${c.steps[k + 1]}${lv === 3 ? ' → Step ' + (k + 3) + ': ' + c.steps[k + 2] : ''}.` };
}
function pLinkers(c, seed) {
  const s = c.steps.slice(0, 4).map(x => lc(strip(x)));
  const good = `At the first stage, ${s[0]}. Once this has been done, ${s[1]}, after which ${s[2]}. ${s[3].charAt(0).toUpperCase() + s[3].slice(1)} at the next stage.`;
  const bad = `First, ${s[0]}. Second, ${s[1]}. Third, ${s[2]}. Fourth, ${s[3]}.`;
  return { q: `Process: *${c.title}*. Which paragraph is better connected?`, options: [good, bad], a: 0,
    why: { q: 'Why?', options: ['It uses varied step linkers with referencing (this, after which) instead of repeating First/Second/Third', 'Numbering every step with First/Second/Third is the only accepted method in Task 1', 'It is the shorter paragraph, and a shorter paragraph always scores higher'], a: 0 }, ex: 'Band 6 CC: cohesive devices "may be faulty or mechanical".' };
}
function pRewrite(c, seed, lv) {
  const n = c.steps.length; const items = [];
  for (let r = 0; r < 2; r++) { const k = (seed + r * 2) % (n - 1); const A = strip(c.steps[k]), B = strip(c.steps[k + 1]);
    items.push({ q: `Combine two steps into ONE sentence ${lv === 1 ? '(use after that / then / and then)' : lv === 2 ? '(use Once / After)' : '(use after which / , which / after being + V3)'}: «${A}» + «${B}»`, a: [`Once ${lc(A)}, ${lc(B)}.`, `After ${lc(A)}, ${lc(B)}.`] }); }
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
  return { q: `Map: *${c.title}*. Which overview is better?`, options: [good, bad], a: 0,
    why: { q: 'Why?', options: ['An overview states the main trend of change without listing the location of every detail', 'An overview must use compass directions to show where each feature is located', 'An overview must begin with the first year and then describe each feature in turn'], a: 0 }, ex: '' };
}
function mAccuracy(c, seed) {
  const d = mDiff(c); const items = [];
  if (d.added.length) { const x = d.added[seed % d.added.length]; items.push({ q: `Map: *${c.title}*. Which sentence is accurate?`, options: [`${art(x).replace(/^t/, 'T')} ${/s$/.test(base(x)) ? 'were' : 'was'} built after ${d.T1}.`, `${art(x).replace(/^t/, 'T')} ${/s$/.test(base(x)) ? 'were' : 'was'} demolished after ${d.T1}.`], a: 0, why: { q: 'The other sentence is wrong because it:', options: [`reverses the change: ${base(x)} appears only on the map for ${byT(d.T2)}`, 'leaves out a preposition of location, so the position is unclear', 'uses the wrong tense for a change between two past maps'], a: 0 }, ex: '' }); }
  if (d.kept.length && items.length < 2) { const x = d.kept[seed % d.kept.length]; items.push({ q: `Map: *${c.title}*. Which sentence is accurate?`, options: [`${art(x).replace(/^t/, 'T')} remained in place throughout the period.`, `${art(x).replace(/^t/, 'T')} ${/s$/.test(base(x)) ? 'were' : 'was'} built in a new location after ${d.T1}.`], a: 0, why: { q: 'The other sentence is wrong because it:', options: [`describes a change that did not happen: ${base(x)} appears on both maps`, 'compares the two maps without saying what replaced the feature', 'uses the wrong article before the name of the feature'], a: 0 }, ex: '' }); }
  if (d.removed.length && items.length < 2) { const x = d.removed[seed % d.removed.length]; items.push({ q: `Map: *${c.title}*. Which sentence is accurate?`, options: [`${art(x).replace(/^t/, 'T')} no longer existed by ${byT(d.T2)}.`, `${art(x).replace(/^t/, 'T')} ${/s$/.test(base(x)) ? 'were' : 'was'} extended by ${byT(d.T2)}.`], a: 0, why: { q: 'The other sentence is wrong because it:', options: [`says it was extended, but ${base(x)} disappeared from the later map`, 'uses the past simple where the present perfect is required', 'gives no figures, so the size of the change is unclear'], a: 0 }, ex: '' }); }
  return items;
}
function mGap(c) {
  const d = mDiff(c); const items = d.added.slice(0, 3).map(x => ({ q: `By ${d.T2.toLowerCase() === 'today' ? 'today' : d.T2}, ${art(x)} ___ (build). (passive)`, a: d.T2.toLowerCase() === 'today' ? (/s$/.test(base(x)) ? ['have been built'] : ['has been built']) : (/s$/.test(base(x)) ? ['had been built', 'were built'] : ['had been built', 'was built']) }));
  return items.length >= 2 ? items : null;
}
/* ---- lắp ráp ---- */
function makeFor(bloom, lv, c, seed) {
  const two = (fs) => { const out = []; for (const f of fs) { const it = f(); if (it && !out.some(o => o.options && it.options && o.options[0] === it.options[0])) out.push(it); if (out.length >= 2) break; } return out; };
  const MQ = (title, instr, items) => items.length ? { type: 'mcq2', title, instr: instr || 'Tier 1: choose an option. Tier 2: choose the reason. You get full marks only if both tiers are correct.', items } : null;
  const N = c.kind === 'process' || c.kind === 'map' ? null : norm(c);
  if (c.kind === 'process' && c.steps?.length >= 4) {
    if (bloom === 'understand') return MQ('Process overviews', '', two([() => pOverview(c, seed, lv), () => pOrder(c, seed + 1, lv)]));
    if (bloom === 'analyze') return MQ('Check the process sequence', '', two([() => pOrder(c, seed, lv), () => pOrder(c, seed + 3, lv)]));
    if (bloom === 'evaluate') return MQ('Evaluate how steps are linked', '', two([() => pLinkers(c, seed), () => pOverview(c, seed + 1, lv)]));
    if (bloom === 'apply') return { type: 'rewrite', title: 'Link process steps', instr: 'Write one sentence with the correct sequence and the correct active/passive. The model answer is for reference only.', items: pRewrite(c, seed, lv) };
    return null;
  }
  if (c.kind === 'map' && c.maps?.length === 2) {
    if (bloom === 'understand' || bloom === 'evaluate') { const o = mOverview(c); const acc = mAccuracy(c, seed); return MQ(bloom === 'understand' ? 'An overview for the maps' : 'Evaluate map descriptions', '', [o, ...acc].filter(Boolean).slice(0, 2)); }
    if (bloom === 'analyze') return MQ('Check the changes on the map', '', mAccuracy(c, seed + 1));
    if (bloom === 'apply') { const g = mGap(c); return g ? { type: 'gap', title: 'Passives for describing changes', instr: 'Fill in the correct passive form and tense.', items: g } : null; }
    return null;
  }
  if (!N || N.series.length < 1 || N.labels.length < 2) return null;
  if (N.time) {
    if (bloom === 'understand') return MQ(lv === 3 ? 'Overview: choose the most accurate version' : 'Choose the overview', '', two([() => tOverview(N, seed, lv), () => tWrongTrend(N, seed + 1)]));
    if (bloom === 'analyze') return MQ(lv === 3 ? 'Fine-grained data checks' : 'Check data accuracy', '', two([() => tAccuracy(N, seed, lv), () => tAccuracy(N, seed + 1, lv), () => tAccuracy(N, seed + 2, lv)]));
    if (bloom === 'evaluate') return MQ('Selecting & comparing figures', '', two([() => tSelect(N, seed, lv), () => tCompare(N, seed)]).length ? two([() => tSelect(N, seed, lv), () => tCompare(N, seed)]) : []);
    if (bloom === 'apply') { if (lv === 3) { const it = tRewrite(N, seed); return it?.length ? { type: 'rewrite', title: 'Combine 3 data points', instr: 'Write ONE sentence combining the 3 points, with accurate figures and sequence. It does not have to match the model.', items: it } : null; }
      const g = tGap(N, seed, lv); return g ? { type: 'gap', title: lv === 1 ? 'Trend verbs that match the data' : 'Prepositions with figures: by / to', instr: 'Fill in the blanks according to the chart data.', items: g } : null; }
    return null;
  }
  if (bloom === 'understand') return MQ('Single-point data: how should you write it?', '', two([() => sTrendWords(N, seed), () => sGroup(N)]));
  if (bloom === 'analyze') return MQ('Check comparative sentences', '', two([() => sRatio(N, seed, lv), () => sTrendWords(N, seed + 1)]));
  if (bloom === 'evaluate') return MQ('Choose how to organise the body', '', two([() => sGroup(N), () => sRatio(N, seed + 2, lv)]));
  if (bloom === 'apply') { const g = sGap(N, seed); return g ? { type: 'gap', title: 'Comparisons & rankings from the data', instr: 'Fill in the blanks according to the chart data.', items: g } : null; }
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
