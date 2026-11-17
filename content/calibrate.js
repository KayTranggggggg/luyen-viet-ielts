/* Hiệu chỉnh độ khó trắc nghiệm theo band.
   Vấn đề: một số câu Band 6.5–7 / 8+ có đáp án đúng là câu "dài và hay" còn phương án sai thì lộ liễu → đoán được ngay.
   Cách làm (theo ma trận khoá học: Band 8 = câu đa dạng VÀ chính xác tuyệt đối):
   - Band 6.5–7: đáp án đúng + 1 bản có lỗi tinh vi + 1 phương án gốc.
   - Band 8+: đáp án đúng + 2–3 bản gần giống hệt nhưng mỗi bản cài MỘT lỗi tinh vi → phải soát từng chữ.
   Không tạo bản sao "nhận diện" ở Band 5–6 nữa: phương án sai lộ liễu không còn giá trị luyện tập. */
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
  [s => /, which\b/.test(s), s => s.replace(/, which\b/, ', that'), 'non-defining clauses (after a comma) do not use *that*'],
  [s => Object.keys(ADV).some(a => ADV[a] && new RegExp('\\b' + a + '\\b', 'i').test(s)), s => { const a = Object.keys(ADV).find(a => ADV[a] && new RegExp('\\b' + a + '\\b', 'i').test(s)); return s.replace(new RegExp('\\b' + a + '\\b', 'i'), m => (m[0] === m[0].toUpperCase() ? ADV[a][0].toUpperCase() + ADV[a].slice(1) : ADV[a])); }, 'an **adverb** (-ly) is needed, not an adjective'],
  [s => /\b(has|have|had)\s+(been\s+)?([a-z]+)\b/.test(s) && PP[s.match(/\b(has|have|had)\s+(been\s+)?([a-z]+)\b/)[3]], s => s.replace(/\b(has|have|had)\s+(been\s+)?([a-z]+)\b/, (m, h, b, v) => `${h} ${b || ''}${PP[v]}`), '*has/have/had* must be followed by a **past participle**'],
  [s => /\b(\w+er|more \w+|less \w+|fewer|greater)\s+than\b/.test(s), s => s.replace(/\b(\w+er|more \w+|less \w+|fewer|greater)\s+than\b/, '$1 to'), 'comparatives go with *than*, not *to*'],
  [s => /\b(although|though|while|whereas)\b/i.test(s), s => s.replace(/\b(although|though|while|whereas)\b/i, m => m[0] === m[0].toUpperCase() ? 'Despite' : 'despite'), '*despite* + noun/V-ing, not + a clause'],
  [s => /\bdespite\b/i.test(s) && !/\bdespite of\b/i.test(s), s => s.replace(/\b(despite)\b/i, '$1 of'), 'there is no *despite of*: use *despite* or *in spite of*'],
  [s => ING.test(s), s => s.replace(ING, (m, p, v) => `${p} ${v.length > 2 ? v : v + 'e'}`), 'a preposition must be followed by **V-ing**'],
  [s => /\b(is|are|was|were|be|been|being)\s+([a-z]+ed)\b/.test(s), s => s.replace(/\b(is|are|was|were|be|been|being)\s+([a-z]+)ed\b/, (m, b, v) => `${b} ${baseOf(v)}`), 'the passive needs **be + past participle**'],
  [s => /\baccount(s|ed)? for\b/.test(s), s => s.replace(/\baccount(s|ed)? for\b/, 'account$1'), '*account for* needs the preposition *for*'],
  [s => /\b(\w+) times as (\w+) as\b/.test(s), s => s.replace(/\b(\w+) times as (\w+) as\b/, '$1 times as $2 than'), 'the structure is *X times as ... as*'],
  [s => /\bthe most \w+/.test(s), s => s.replace(/\bthe most (\w+)/, 'the more $1'), 'a superlative uses *the most*, not *the more*'],
  [s => /\b[Tt]he (number|proportion|percentage|amount|share|figure) of\b/.test(s), s => s.replace(/\b([Tt])he (number|proportion|percentage|amount|share|figure) of\b/, (m, t, n) => (t === 'T' ? n[0].toUpperCase() + n.slice(1) : n) + ' of'), 'the article *the* is missing before *number/proportion/figure of*'],
  [s => /\b(is|was) expected to\b/.test(s), s => s.replace(/\b(is|was) expected to\b/, '$1 expected'), 'the structure is *be expected **to** + verb*'],
  [s => /\bin turn\b/.test(s) || /\bthereby (\w+)ing\b/.test(s), s => s.replace(/\bthereby (\w+?)ing\b/, 'thereby $1ed').replace(/\bin turn\b/, 'in return'), 'the linking phrase is used wrongly (*thereby + V-ing*, *in turn*)'],
  [s => /\b(is|are)\b/.test(s), s => s.replace(/\b(is|are)\b/, m => m === 'is' ? 'are' : 'is'), 'wrong **subject–verb agreement** (is/are)'],
  [s => /\b(has|have)\b/.test(s), s => s.replace(/\b(has|have)\b/, m => m === 'has' ? 'have' : 'has'), 'wrong **subject–verb agreement** (has/have)'],
  [s => /\b(was|were)\b/.test(s) && !/\b(if|as if|were it|wish)\b[^.]*\bwere\b/i.test(s) && !/^Were\b/.test(s), s => s.replace(/\b(was|were)\b/, m => m === 'was' ? 'were' : 'was'), 'wrong **subject–verb agreement** (was/were)'],
  [s => /\bbetween \S+ and\b/.test(s), s => s.replace(/\bbetween (\S+) and\b/, 'between $1 to'), 'the structure is *between ... **and***, not *between ... to*'],
  [s => /\b(depend|depends|depended|rely|relies|relied|focus|focused|interested|lead|leads|led|due|contribute|contributes|contributed|result|results|resulted|impact|effect|access|reliance|dependence|demand|investment|invest|invested|increase|rise|fall|decline) (on|in|to|for|of)\b/.test(s), s => s.replace(/\b(depend|depends|depended|rely|relies|relied|focus|focused|interested|lead|leads|led|due|contribute|contributes|contributed|result|results|resulted|impact|effect|access|reliance|dependence|demand|investment|invest|invested|increase|rise|fall|decline) (on|in|to|for|of)\b/, (m, w, p) => `${w} ${{ on: 'of', in: 'on', to: 'for', for: 'of', of: 'at' }[p]}`), 'wrong **dependent preposition** (collocation)'],
  [s => /\b(many|much) \w+/.test(s), s => s.replace(/\b(many|much)\b/, m => m === 'many' ? 'much' : 'many'), '*many* + countable nouns, *much* + uncountable nouns'],
  [s => /\ban? [a-z]/i.test(s), s => s.replace(/\b(a|an) ([a-z]\w*)/i, (m, a, w) => (/^[aeiou]/i.test(w) ? (a[0] === 'A' ? 'A' : 'a') : (a[0] === 'A' ? 'An' : 'an')) + ' ' + w), 'wrong article: *a* before consonant sounds, *an* before vowel sounds'],
  [s => /\bsuch as\b/.test(s), s => s.replace(/\bsuch as\b/, 'such like'), 'the phrase is *such as*; *such like* is not standard'],
  [s => /\bthe (\w+est|most \w+)\b/.test(s), s => s.replace(/\bthe (\w+est|most \w+)\b/, '$1'), 'a superlative needs *the* in front of it'],
  [s => /\b\w{3,}er than\b/.test(s), s => s.replace(/\b(\w{3,}er) than\b/, 'more $1 than'), 'do not use *more* with a comparative that already ends in -er'],
  [s => /\b(likely|projected|forecast|predicted|able|unable) to\b/.test(s), s => s.replace(/\b(likely|projected|forecast|predicted|able|unable) to\b/, '$1'), '*to* is missing after *likely/projected/able*'],
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
  if (u.stage !== 'grammar') continue; /* Task 1/2: phương án nhiễu phải là lỗi chiến thuật, không phải lỗi ngữ pháp cài máy */
  for (const e of u.exercises) {
    const lv = lvOf(e);
    if (e.type !== 'mcq' || lv < 2) continue;
    let changed = 0;
    e.items.forEach((it, idx) => {
      const c = it.options[it.a]; const others = it.options.filter((_, k) => k !== it.a);
      const easy = W(c) >= 1.4 * Math.max(...others.map(W)) && W(c) - Math.max(...others.map(W)) >= 4;
      if (!easy) return;
      if ((c.match(/[^\x00-\x7F]/g) || []).length > 2) return; /* chỉ cài lỗi vào câu tiếng Anh */
      const cs = corruptions(c);
      const need = lv === 3 ? 2 : 1;
      if (cs.length < need) return;
      const picks = cs.slice(0, lv === 3 ? 3 : 1);
      const wrongs = lv === 3 ? picks.map(p => p.s) : [picks[0].s, others.sort((a, b) => W(b) - W(a))[0]];
      const pl = place(c, wrongs, hash(c + idx));
      e.items[idx] = { q: it.q, options: pl.options, a: pl.a, ex: 'Why the other options are wrong: ' + picks.map(p => p.why).join('; ') + '.' + (it.ex ? ' ' + it.ex : '') };
      hardened++; changed++;
    });
    if (changed) {
      e.instr = (e.instr ? e.instr + ' ' : '') + (lv === 3 ? 'The options are almost identical: only ONE is fully correct, so check every word.' : 'One option contains a subtle error: read carefully.');
      moved++;
    }
  }
  u.exercises.push(...add);
}
/* Bước 2: câu tiếng Anh vẫn còn "đoán được" mà không cài được lỗi tinh vi → chuyển thành bài VIẾT LẠI
   (sản xuất câu đúng band): câu gốc yếu là đề, câu tốt là đáp án mẫu; Gemini chấm.
   Câu hỏi khái niệm (đáp án là câu giải thích) giữ nguyên chỗ: phương án nhiễu của chúng được viết cân độ dài ngay trong nội dung. */
let produced = 0;
const isEasy = it => { const c = it.options[it.a]; const o = it.options.filter((_, k) => k !== it.a); return W(c) >= 1.4 * Math.max(...o.map(W)) && W(c) - Math.max(...o.map(W)) >= 4; };
const meta = s => window.KL_isMeta(s) || (String(s).match(/[^\x00-\x7F]/g) || []).length > 2;
const RW_INSTR = { 2: 'Rewrite the **original sentence** at **Band 6.5–7**: a complex sentence, precise vocabulary, and the same meaning/figures.', 3: 'Rewrite the **original sentence** at **Band 8+**: varied structures (nominalisation, reduced clauses, comparison/concession...), fully accurate, with the same meaning/figures.' };
const bare = t => t.replace(/\s*\(?(?:Mức|Level) [23]\)?|\s*\(?Band 8\+?\)?/g, '').trim();
for (const u of window.UNITS) {
  const add = [];
  for (const e of u.exercises.slice()) {
    const lv = lvOf(e); if (e.type !== 'mcq' || lv < 2) continue;
    const keep = [], rw = [];
    for (const it of e.items) {
      const c = it.options[it.a];
      if (!isEasy(it) || meta(c)) { keep.push(it); continue; }
      const weak = it.options.filter((_, k) => k !== it.a).sort((x, y) => W(x) - W(y))[0];
      rw.push({ q: (it.q ? it.q + '\n' : '') + 'Original sentence: «' + weak + '»', a: [c] }); produced++;
    }
    if (!rw.length) continue;
    const rwEx = { bloom: e.bloom, lv, type: 'rewrite', title: /\?\s*$|^(Which|How|What|Is|Does|Can)\b|^(A|An|The) (sentence|correction)$/.test(bare(e.title)) ? 'Upgrade the sentence' + (lv === 3 ? ' (Band 8)' : '') : 'Upgrade the sentence: ' + bare(e.title), instr: RW_INSTR[lv] + (e.instr && !/^(Chọn|Choose)/.test(e.instr) ? ' Context: ' + e.instr.trim() : ''), items: rw, chart: e.chart };
    if (keep.length) { e.items = keep; add.push(rwEx); }
    else { Object.keys(e).forEach(k => delete e[k]); Object.assign(e, rwEx); }
  }
  u.exercises.push(...add);
}
window.KL_CALIBRATE_STATS = { moved, hardened, produced };
})();
