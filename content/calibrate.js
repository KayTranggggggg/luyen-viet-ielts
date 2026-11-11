/* Hiệu chỉnh độ khó trắc nghiệm theo band.
   Vấn đề: nhiều câu Band 6.5–7 / 8+ có đáp án đúng là câu "dài và hay" còn phương án sai thì lộ liễu → đoán được ngay.
   Cách làm (theo ma trận khoá học: Band 8 = câu đa dạng VÀ chính xác tuyệt đối):
   - Bản gốc (phương án sai lộ liễu) được chuyển xuống Band 5–6 (nhận diện).
   - Band 6.5–7: đáp án đúng + 1 bản có lỗi tinh vi + 1 phương án gốc.
   - Band 8+: đáp án đúng + 2–3 bản gần giống hệt nhưng mỗi bản cài MỘT lỗi tinh vi → phải soát từng chữ. */
(function () {
const lvOf = e => e.lv || (e.bloom === 'remember' || e.bloom === 'understand' ? 1 : 2);
const W = s => String(s).trim().split(/\s+/).length;
const ADV = { significantly: 'significant', dramatically: 'dramatic', sharply: 'sharp', steadily: 'steady', considerably: 'considerable', slightly: 'slight', gradually: 'gradual', rapidly: 'rapid', largely: 'large', particularly: 'particular', markedly: 'marked', substantially: 'substantial', marginally: 'marginal', consistently: 'consistent', increasingly: 'increasing', heavily: 'heavy', widely: 'wide', primarily: 'primary', relatively: 'relative', roughly: 'rough', respectively: 'respective', eventually: 'eventual', initially: 'initial', noticeably: 'noticeable', effectively: 'effective', approximately: 'approximate', almost: null };
const PP = { risen: 'rose', fallen: 'fell', grown: 'grew', become: 'became', been: 'be', seen: 'saw', taken: 'took', given: 'gave', shown: 'showed', overtaken: 'overtook', reached: 'reach', increased: 'increase', declined: 'decline', doubled: 'double', remained: 'remain', reduced: 'reduce', changed: 'change', introduced: 'introduce', built: 'build', replaced: 'replace', made: 'make', led: 'lead', caused: 'cause', transformed: 'transform', converted: 'convert', placed: 'place', forced: 'force', chosen: 'choose', driven: 'drive', brought: 'bring', left: 'leave', cut: 'cuts' };
const ING = /\b(by|without|before|after|despite)\s+([a-z]+?)ing\b/;
const baseOf = v => {
  if (/([bcdfghjklmnpqrstvwz])\1$/.test(v) && !/(ss|ll|ff|zz)$/.test(v)) return v.slice(0, -1);
  if (/i$/.test(v)) return v.slice(0, -1) + 'y';
  if (/[cvzu]$|[^aeiou](at|ut|ot|or|ur|ir|il|ap|ak|ag|in|iz|is|os|us|as)$|^us$|[aeiou][aeiou]s$/.test(v)) return v + 'e';
  return v;
};
const RULES = [
  [s => /, which\b/.test(s), s => s.replace(/, which\b/, ', that'), 'mệnh đề không xác định (sau dấu phẩy) không dùng *that*'],
  [s => Object.keys(ADV).some(a => ADV[a] && new RegExp('\\b' + a + '\\b', 'i').test(s)), s => { const a = Object.keys(ADV).find(a => ADV[a] && new RegExp('\\b' + a + '\\b', 'i').test(s)); return s.replace(new RegExp('\\b' + a + '\\b', 'i'), m => (m[0] === m[0].toUpperCase() ? ADV[a][0].toUpperCase() + ADV[a].slice(1) : ADV[a])); }, 'cần **trạng từ** (-ly) chứ không phải tính từ'],
  [s => /\b(has|have|had)\s+(been\s+)?([a-z]+)\b/.test(s) && PP[s.match(/\b(has|have|had)\s+(been\s+)?([a-z]+)\b/)[3]], s => s.replace(/\b(has|have|had)\s+(been\s+)?([a-z]+)\b/, (m, h, b, v) => `${h} ${b || ''}${PP[v]}`), 'sau *has/have/had* phải là **V3 (quá khứ phân từ)**'],
  [s => /\b(\w+er|more \w+|less \w+|fewer|greater)\s+than\b/.test(s), s => s.replace(/\b(\w+er|more \w+|less \w+|fewer|greater)\s+than\b/, '$1 to'), 'so sánh hơn đi với *than*, không phải *to*'],
  [s => /\b(although|though|while|whereas)\b/i.test(s), s => s.replace(/\b(although|though|while|whereas)\b/i, m => m[0] === m[0].toUpperCase() ? 'Despite' : 'despite'), '*despite* + danh từ/V-ing, không + mệnh đề'],
  [s => /\bdespite\b/i.test(s) && !/\bdespite of\b/i.test(s), s => s.replace(/\b(despite)\b/i, '$1 of'), 'không có *despite of*'],
  [s => ING.test(s), s => s.replace(ING, (m, p, v) => `${p} ${v.length > 2 ? v : v + 'e'}`), 'sau giới từ phải là **V-ing**'],
  [s => /\b(is|are|was|were|be|been|being)\s+([a-z]+ed)\b/.test(s), s => s.replace(/\b(is|are|was|were|be|been|being)\s+([a-z]+)ed\b/, (m, b, v) => `${b} ${baseOf(v)}`), 'bị động cần **be + V3**'],
  [s => /\baccount(s|ed)? for\b/.test(s), s => s.replace(/\baccount(s|ed)? for\b/, 'account$1'), '*account for* cần giới từ *for*'],
  [s => /\b(\w+) times as (\w+) as\b/.test(s), s => s.replace(/\b(\w+) times as (\w+) as\b/, '$1 times as $2 than'), 'cấu trúc *X times as ... as*'],
  [s => /\bthe most \w+/.test(s), s => s.replace(/\bthe most (\w+)/, 'the more $1'), 'so sánh nhất dùng *the most*'],
  [s => /\b[Tt]he (number|proportion|percentage|amount|share|figure) of\b/.test(s), s => s.replace(/\b([Tt])he (number|proportion|percentage|amount|share|figure) of\b/, (m, t, n) => (t === 'T' ? n[0].toUpperCase() + n.slice(1) : n) + ' of'), 'thiếu mạo từ *the* trước *number/proportion/figure of*'],
  [s => /\b(is|was) expected to\b/.test(s), s => s.replace(/\b(is|was) expected to\b/, '$1 expected'), '*be expected **to** + V*'],
  [s => /\bin turn\b/.test(s) || /\bthereby (\w+)ing\b/.test(s), s => s.replace(/\bthereby (\w+?)ing\b/, 'thereby $1ed').replace(/\bin turn\b/, 'in return'), 'dùng sai cụm liên kết (*thereby + V-ing*, *in turn*)'],
  [s => /\b(is|are)\b/.test(s), s => s.replace(/\b(is|are)\b/, m => m === 'is' ? 'are' : 'is'), 'sai **hoà hợp chủ ngữ – động từ** (is/are)'],
  [s => /\b(has|have)\b/.test(s), s => s.replace(/\b(has|have)\b/, m => m === 'has' ? 'have' : 'has'), 'sai **hoà hợp chủ ngữ – động từ** (has/have)'],
  [s => /\b(was|were)\b/.test(s) && !/\b(if|as if|were it|wish)\b[^.]*\bwere\b/i.test(s) && !/^Were\b/.test(s), s => s.replace(/\b(was|were)\b/, m => m === 'was' ? 'were' : 'was'), 'sai **hoà hợp chủ ngữ – động từ** (was/were)'],
  [s => /\bbetween \S+ and\b/.test(s), s => s.replace(/\bbetween (\S+) and\b/, 'between $1 to'), '*between ... **and***'],
  [s => /\b(depend|depends|depended|rely|relies|relied|focus|focused|interested|lead|leads|led|due|contribute|contributes|contributed|result|results|resulted|impact|effect|access|reliance|dependence|demand|investment|invest|invested|increase|rise|fall|decline) (on|in|to|for|of)\b/.test(s), s => s.replace(/\b(depend|depends|depended|rely|relies|relied|focus|focused|interested|lead|leads|led|due|contribute|contributes|contributed|result|results|resulted|impact|effect|access|reliance|dependence|demand|investment|invest|invested|increase|rise|fall|decline) (on|in|to|for|of)\b/, (m, w, p) => `${w} ${{ on: 'of', in: 'on', to: 'for', for: 'of', of: 'at' }[p]}`), 'sai **giới từ đi kèm** (collocation)'],
  [s => /\b(many|much) \w+/.test(s), s => s.replace(/\b(many|much)\b/, m => m === 'many' ? 'much' : 'many'), '*many* + danh từ đếm được, *much* + không đếm được'],
  [s => /\ban? [a-z]/i.test(s), s => s.replace(/\b(a|an) ([a-z]\w*)/i, (m, a, w) => (/^[aeiou]/i.test(w) ? (a[0] === 'A' ? 'A' : 'a') : (a[0] === 'A' ? 'An' : 'an')) + ' ' + w), 'sai mạo từ *a/an*'],
  [s => /\bsuch as\b/.test(s), s => s.replace(/\bsuch as\b/, 'such like'), 'dùng *such as*, không *such like*'],
  [s => /\bthe (\w+est|most \w+)\b/.test(s), s => s.replace(/\bthe (\w+est|most \w+)\b/, '$1'), 'so sánh nhất cần *the*'],
  [s => /\b\w{3,}er than\b/.test(s), s => s.replace(/\b(\w{3,}er) than\b/, 'more $1 than'), 'không dùng *more* với so sánh hơn đã có -er'],
  [s => /\b(likely|projected|forecast|predicted|able|unable) to\b/.test(s), s => s.replace(/\b(likely|projected|forecast|predicted|able|unable) to\b/, '$1'), 'thiếu *to* sau *likely/projected/able*'],
];
function corruptions(sent) {
  const out = [];
  for (const [ri, [test, fn, why]] of RULES.entries()) {
    try { if (!test(sent)) continue; const c = fn(sent); if (c && c !== sent && !out.some(o => o.s === c)) out.push({ s: c, why, i: ri }); } catch { }
  }
  return out;
}
window.KL_CORRUPT = corruptions;
const hash = s => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
const place = (correct, wrongs, seed) => { const opts = [correct, ...wrongs]; const k = seed % opts.length; const o = opts.slice(k).concat(opts.slice(0, k)); return { options: o, a: (opts.length - k) % opts.length }; };
let moved = 0, hardened = 0;
for (const u of window.UNITS) {
  const add = [];
  for (const e of u.exercises) {
    const lv = lvOf(e);
    if (e.type !== 'mcq' || lv < 2) continue;
    const easyItems = [];
    e.items.forEach((it, idx) => {
      const c = it.options[it.a]; const others = it.options.filter((_, k) => k !== it.a);
      const easy = W(c) >= 1.4 * Math.max(...others.map(W)) && W(c) - Math.max(...others.map(W)) >= 4;
      if (!easy) return;
      if ((c.match(/[^\x00-\x7F]/g) || []).length > 2) return; /* chỉ cài lỗi vào câu tiếng Anh */
      const cs = corruptions(c);
      const need = lv === 3 ? 2 : 1;
      if (cs.length < need) return;
      easyItems.push(JSON.parse(JSON.stringify(it)));
      const picks = cs.slice(0, lv === 3 ? 3 : 1);
      const wrongs = lv === 3 ? picks.map(p => p.s) : [picks[0].s, others.sort((a, b) => W(b) - W(a))[0]];
      const pl = place(c, wrongs, hash(c + idx));
      e.items[idx] = { q: it.q, options: pl.options, a: pl.a, ex: 'Các phương án sai: ' + picks.map(p => p.why).join('; ') + '.' + (it.ex ? ' ' + it.ex : '') };
      hardened++;
    });
    if (easyItems.length) {
      e.instr = (e.instr ? e.instr + ' ' : '') + (lv === 3 ? '⚠️ Mức 3: các phương án gần như giống nhau, chỉ MỘT câu chính xác tuyệt đối — soát từng chữ.' : '⚠️ Một phương án có lỗi tinh vi, đọc kỹ.');
      add.push({ bloom: e.bloom, lv: 1, type: 'mcq', title: e.title.replace(/\s*\(?Mức [23]\)?|\s*Band 8\+?|\s*Band 8/g, '').trim() + ' (nhận diện)', instr: (e.instr || '').split('⚠️')[0].trim(), items: easyItems });
      moved++;
    }
  }
  u.exercises.push(...add);
}
/* Bước 2: câu vẫn còn "đoán được" mà không cài được lỗi tinh vi.
   - Câu tiếng Anh → chuyển thành bài VIẾT LẠI (sản xuất câu đúng band), câu gốc yếu là đề, câu tốt là đáp án mẫu; Gemini chấm.
   - Câu giải thích tiếng Việt → về đúng chỗ của nó: Band 5–6 (nhận diện khái niệm). */
let produced = 0, demoted = 0;
const isEasy = it => { const c = it.options[it.a]; const o = it.options.filter((_, k) => k !== it.a); return W(c) >= 1.4 * Math.max(...o.map(W)) && W(c) - Math.max(...o.map(W)) >= 4; };
const viet = s => (String(s).match(/[^\x00-\x7F]/g) || []).length > 2;
const RW_INSTR = { 2: 'Viết lại **câu gốc** thành câu đạt **Band 6.5–7**: câu phức, từ vựng chính xác, đúng ý/số liệu.', 3: 'Viết lại **câu gốc** thành câu đạt **Band 8+**: cấu trúc đa dạng (danh hoá, mệnh đề rút gọn, so sánh/nhượng bộ...), chính xác tuyệt đối, đúng ý/số liệu.' };
for (const u of window.UNITS) {
  const add = [];
  for (const e of u.exercises.slice()) {
    const lv = lvOf(e); if (e.type !== 'mcq' || lv < 2) continue;
    const keep = [], rw = [], low = [];
    for (const it of e.items) {
      const c = it.options[it.a];
      if (!isEasy(it) && !viet(c)) { keep.push(it); continue; }
      low.push(JSON.parse(JSON.stringify(it)));
      if (!viet(c)) { const weak = it.options.filter((_, k) => k !== it.a).sort((x, y) => W(x) - W(y))[0]; rw.push({ q: (it.q ? it.q + '\n' : '') + 'Câu gốc: «' + weak + '»', a: [c] }); produced++; }
      else demoted++;
    }
    if (!low.length) continue;
    const lowEx = { bloom: e.bloom, lv: 1, type: 'mcq', title: e.title.replace(/\s*\(?Mức [23]\)?|\s*\(?Band 8\+?\)?/g, '').trim() + ' (nhận diện)', instr: (e.instr || '').split('⚠️')[0].trim(), items: low, chart: e.chart };
    const rwEx = rw.length ? { bloom: e.bloom, lv, type: 'rewrite', title: 'Nâng cấp câu: ' + e.title.replace(/\s*\(?Mức [23]\)?|\s*\(?Band 8\+?\)?/g, '').trim(), instr: RW_INSTR[lv] + (e.instr && !/^Chọn/.test(e.instr) ? ' Ngữ cảnh: ' + e.instr.split('⚠️')[0].trim() : ''), items: rw, chart: e.chart } : null;
    if (keep.length) { e.items = keep; if (rwEx) add.push(rwEx); add.push(lowEx); }
    else if (rwEx) { Object.keys(e).forEach(k => delete e[k]); Object.assign(e, rwEx); add.push(lowEx); }
    else { Object.keys(e).forEach(k => delete e[k]); Object.assign(e, lowEx); }
  }
  u.exercises.push(...add);
}
window.KL_CALIBRATE_STATS = { moved, hardened, produced, demoted };
})();
