/* Task 2: sinh bài CHIẾN THUẬT từ ngân hàng đề (82 đề tự soạn trong app), theo đúng dạng đề:
   nhận dạng đề, số phần phải trả lời, thesis đúng dạng, dàn ý thiếu phần, xử lý từ phạm vi (only/best/most), kết luận nhất quán,
   no-no (văn phong), lỗi ảnh hưởng tiêu chí nào. Chỉ bổ sung vào ô còn thiếu để mỗi ô đủ 3 bài. */
(function () {
const NEED = 3;
const lvOf = e => e.lv || (e.bloom === 'remember' || e.bloom === 'understand' ? 1 : 2);
const hash = s => [...String(s)].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
const viet = s => window.KL_isMeta(s) || /[ăâđêôơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]/i.test(s);
const typeOf = p => { const q = (p.match(/\?/g) || []).length;
  if (/discuss both/i.test(p)) return 'disc'; if (/outweigh/i.test(p)) return 'adv';
  if (/positive or negative/i.test(p)) return q >= 2 ? null : 'posneg';
  if (/\bthe (only|best) (way|method|solution)\b|\bthe most important\b/i.test(p)) return 'best';
  if (/extent do you agree|agree or disagree|do you agree/i.test(p)) return 'opinion';
  if (/(problem|solution|measures|be done|be solved)/i.test(p)) return 'probsol';
  if (/(cause|reason|why)/i.test(p)) return 'cause'; if (/better/i.test(p)) return 'better'; if (/should/i.test(p) && q === 1) return 'should'; return null; };
const T = {
  opinion: { name: 'Opinion (Agree / Disagree)', parts: 'state a clear degree of agreement (one position) and the reasons',
    good: 'I largely agree with this view, mainly because …, although …', bad: 'This essay will discuss the advantages and disadvantages of this issue.',
    plan: ['Body 1: the main reason supporting the position. Body 2: a second reason, or a concession to the other side followed by a rebuttal.', 'Body 1: the advantages of the idea. Body 2: the disadvantages of the idea. Conclusion: both sides have a point.'], miss: 'does not state a clear degree of agreement',
    ts: ['The main reason I support this view is that …, which means …', 'There are many reasons why people hold different views on this.'] },
  disc: { name: 'Discussion (Discuss both views + opinion)', parts: 'discuss view A and view B and give your own opinion',
    good: 'While some believe …, others argue …; in my view, … because …', bad: 'I completely agree that …, for several reasons.',
    plan: ['Body 1: view A. Body 2: view B with your opinion (or the opinion in the thesis and conclusion).', 'Body 1 and Body 2: two reasons for your opinion, without presenting the other view.'], miss: 'ignores one of the two views',
    ts: ['Those who favour … point to …, arguing that …', 'This view is wrong, and it does not deserve serious discussion.'] },
  adv: { name: 'Advantages outweigh disadvantages?', parts: 'weigh whether the advantages or disadvantages are greater, and why',
    good: 'In my view, the benefits of this trend clearly outweigh its drawbacks, as …', bad: 'This trend has both advantages and disadvantages for individuals and for society.',
    plan: ['Body 1: concede the disadvantages. Body 2: the advantages and why they are greater.', 'Body 1: list the advantages. Body 2: list the disadvantages. No sentence compares which side is greater.'], miss: 'does not weigh which side is greater',
    ts: ['Although this development has some drawbacks, these are outweighed by …', 'This development has some advantages and some disadvantages for society.'] },
  posneg: { name: 'Positive or negative development?', parts: 'evaluate whether the trend is positive or negative (possibly with conditions)',
    good: 'I believe this is a largely positive development, since …', bad: 'This essay will discuss the reasons for this trend.',
    plan: ['Body 1–2: reasons for your evaluation (you may concede the other side).', 'Body 1: a definition of the trend and who it affects. Body 2: the history of the trend and how it spread.'], miss: 'does not give a positive/negative evaluation',
    ts: ['This development is beneficial mainly because it …', 'This is a very interesting development in the modern world.'] },
  probsol: { name: 'Problems / Causes – Solutions (two-part questions)', parts: 'answer both questions fully (problems/causes and solutions)',
    good: 'The main problems (or causes) are …, and they could be tackled by …', bad: 'I completely agree with this statement for several important reasons.',
    plan: ['Body 1: specific problems and their effects. Body 2: solutions matching each problem.', 'Body 1: problems. Body 2: more problems. Conclusion: the government should do something.'], miss: 'is missing the solutions',
    ts: ['One practical solution would be for … to …, which would directly address …', 'The government should do something to solve this serious problem as soon as possible.'] },
  cause: { name: 'Causes – Effects / Causes – Solutions', parts: 'give the causes and the second part the prompt asks for (effects or solutions)',
    good: 'This is mainly caused by …, and it has led to …', bad: 'There are both advantages and disadvantages of this trend.',
    plan: ['Body 1: causes (explaining the mechanism). Body 2: effects/solutions, exactly as the prompt asks.', 'Body 1: the main causes, with examples. Body 2: further causes and why they matter today.'], miss: 'is missing the second part of the prompt',
    ts: ['A key reason is that …, which means that …', 'There are many different reasons for this trend nowadays.'] },
  better: { name: 'A better than B? / Which is better?', parts: 'choose the better option (or name a specific group) and compare directly',
    good: 'I believe … is the better option for most people, because …', bad: 'Both options have their own advantages and disadvantages.',
    plan: ['Body 1–2: compare the two options directly, criterion by criterion.', 'Body 1: the features of option A in detail. Body 2: the features of option B in detail.'], miss: 'does not compare the two options directly',
    ts: ['Compared with …, … offers …, which matters because …', 'Option A is good, and it also has many other benefits.'] },
  should: { name: 'Should …? (yes/no Opinion)', parts: 'answer clearly yes or no, and why',
    good: 'I believe … should …, as this would …', bad: 'There are many different opinions on this issue.',
    plan: ['Body 1–2: reasons for the yes/no answer (conditions may be stated).', 'Body 1: the supporters\' view. Body 2: the opponents\' view. No answer of your own.'], miss: 'does not answer yes or no',
    ts: ['The strongest argument for this policy is that it would …', 'Some people think yes, while many other people think no.'] },
  best: { name: '"The best / The only / The most" (special Opinion)', parts: 'evaluate whether it really is the best/only way, by comparing it with other ways',
    good: 'Although this approach may help, I would argue that … is more effective, because …', bad: 'I agree, because this approach has many benefits for most people in society.',
    plan: ['Body 1: concede the benefits of the stated way. Body 2: another way that is more effective, and why.', 'Body 1–2: list the benefits of the stated way, without comparing it with any other.'], miss: 'only proves it is "beneficial" without comparing it with other ways',
    ts: ['Admittedly, this approach can help; however, … would be far more effective because …', 'This approach has many benefits, and it is useful for a lot of people in society.'] },
};
const CONF = { opinion: 'best', best: 'opinion', disc: 'adv', adv: 'disc', posneg: 'adv', probsol: 'cause', cause: 'probsol', better: 'should', should: 'opinion' };
/* ---- ngân hàng đề ---- */
const prompts = [];
for (const u of window.UNITS) if (u.stage === 'task2') for (const e of u.exercises) if (e.type === 'write' && e.kind === 'task2') {
  const p = e.prompt.split('\n')[0].replace(/^(?:Đề|Prompt):\s*/, '').replace(/\*/g, '').trim();
  if (p.length > 30 && !viet(p) && typeOf(p) && !prompts.some(x => x.p === p)) prompts.push({ p, t: typeOf(p) });
}
const UNIT_TYPES = { t2a: null, t2c: ['opinion', 'best'], t2d: ['disc', 'adv'], t2e: ['probsol'], t2i: ['should', 'better', 'opinion'], t2j: ['posneg'], t2k: ['cause', 'probsol'], t2m: ['best'] };
const SCOPE = p => (p.match(/\b(the only way|the best way|the most important|the best|all|every|completely|never)\b/i) || [])[0];
const MQ2 = (title, items, instr) => items.length ? { type: 'mcq2', title, instr: instr || 'Tier 1: choose an option. Tier 2: choose the reason. You get full marks only if both tiers are correct.', items } : null;
const others = (t, n, seed) => Object.keys(T).filter(k => k !== t).sort((a, b) => hash(a + seed) - hash(b + seed)).slice(0, n);
function typeItem(P, lv, seed) {
  const wrong = lv === 3 ? [CONF[P.t], others(P.t, 3, seed).find(k => k !== CONF[P.t])] : others(P.t, 2, seed);
  return { q: `*${P.p}*\nWhich type is this prompt?`, options: [T[P.t].name, ...wrong.map(k => T[k].name)], a: 0, ex: `The prompt asks you to: ${T[P.t].parts}.` };
}
function partsItem(P, seed) {
  const w = others(P.t, 2, seed + 3);
  return { q: `*${P.p}*\nWhat does this prompt ask you to do?`, options: [T[P.t].parts, T[w[0]].parts, T[w[1]].parts], a: 0, ex: 'According to the band descriptors, Task Response Band 6–7 requires addressing all the main parts of the prompt.' };
}
function thesisItem(P, lv, seed) {
  const opts = [T[P.t].good, T[P.t].bad]; if (lv === 3) { const b2 = Object.keys(T).map(k => T[k].bad).find((b, i) => b !== T[P.t].bad && (hash(P.p) + i) % 3 === 0) || T[CONF[P.t]].bad; if (b2 !== T[P.t].bad) opts.push(b2); }
  return { q: `*${P.p}*\nWhich thesis frame answers the prompt correctly?`, options: opts, a: 0,
    why: { q: 'Why?', options: [`This prompt type requires you to ${T[P.t].parts}`, 'The thesis should stay neutral and avoid taking a position, so that it cannot lose marks', 'The thesis should list as many ideas as possible, because a longer thesis shows more range'], a: 0 }, ex: '' };
}
function planItem(P, seed) {
  return { q: `*${P.p}*\nWhich outline fully answers the prompt?`, options: [T[P.t].plan[0], T[P.t].plan[1]], a: 0,
    why: { q: 'What is wrong with the other outline?', options: [`${T[P.t].miss}, which affects Task Response`, 'has too few body paragraphs for an essay of this length', 'has no personal examples, which every Task 2 body paragraph needs'], a: 0 }, ex: 'Band 5 TR: "main parts of the prompt are incompletely addressed".' };
}
function scopeItem(P) {
  const w = SCOPE(P.p); if (!w) return null;
  return { q: `*${P.p}*\nHow should the word "${w}" in the prompt be handled?`, options: [`The thesis states clearly whether you agree with the level of "${w}", and the body compares it with other possibilities`, `Ignore the word "${w}" and just prove that the main idea of the prompt is beneficial`], a: 0,
    why: { q: 'Why?', options: ['A scope word changes what the prompt asks; ignoring it means answering off-target', 'An absolute word must always be accepted, so the thesis should simply agree with it', 'A scope word is only decoration and does not change what the prompt asks'], a: 0 }, ex: '' };
}
function tsItem(P) {
  return { q: `*${P.p}*\nWhich topic sentence suits this prompt type better?`, options: [T[P.t].ts[0], T[P.t].ts[1]], a: 0,
    why: { q: 'Why?', options: ['The chosen sentence signals the main idea and ties it to the prompt; the other is vague', 'The other sentence is shorter, and short sentences are always clearer for the reader', 'The chosen sentence has more academic words, which is what topic sentences are for'], a: 0 }, ex: 'Band 6–7 TR: main ideas must be clearly stated and developed.' };
}
function conclItem(P, lv) {
  const opts = ['The conclusion restates the answer/position from the thesis in different words and summarises the main reasons.', 'The conclusion switches to "it depends" and adds a new solution not discussed in the body.'];
  if (lv === 3) opts.push('The conclusion copies the thesis word for word and then lists every example from the body.');
  return { q: `*${P.p}*\nThe thesis has answered clearly. Which conclusion is appropriate?`, options: opts, a: 0,
    why: { q: 'Why?', options: ['The conclusion must be consistent with the thesis and add no new ideas', 'The conclusion should open a new direction to leave a strong impression', 'The conclusion should stay neutral so that the position cannot be wrong'], a: 0 }, ex: 'Band 6 TR: "conclusions may be unclear, unjustified or repetitive".' };
}
function rwItem(P, lv) {
  if (lv === 1) return { q: `Write a thesis for the prompt using the suggested frame «${T[P.t].good}»:\n*${P.p}*`, a: ['(There is no single model answer) Frame: ' + T[P.t].good] };
  if (lv === 2) return { q: `Write an introduction: paraphrase the prompt + thesis (no frame):\n*${P.p}*`, a: ['(There is no single model answer: the paraphrase keeps the meaning, the thesis ' + T[P.t].parts + ')'] };
  return { q: `Write a thesis that answers EVERY part of the prompt PRECISELY${SCOPE(P.p) ? ' and handles the word "' + SCOPE(P.p) + '"' : ''}:\n*${P.p}*`, a: ['(There is no single model answer) Requirement: ' + T[P.t].parts] };
}
/* ---- câu mẫu Task 2 (no-no, tiêu chí) ---- */
const pool = [];
for (const u of window.UNITS) if (u.stage === 'task2') for (const e of u.exercises) {
  const add = s => { s = String(s).replace(/\*/g, '').trim(); const w = s.split(/\s+/).length; if (w >= 8 && w <= 32 && /^[A-Z]/.test(s) && /\.$/.test(s) && !viet(s) && !/…|\.\.\.| \/ |\bI\b|^In conclusion/.test(s) && !pool.includes(s)) pool.push(s); };
  if (e.type === 'rewrite') e.items.forEach(it => [].concat(it.a).forEach(add));
  if (e.type === 'mcq' && lvOf(e) >= 2) e.items.forEach(it => add(it.options[it.a]));
}
const lc = s => s.charAt(0).toLowerCase() + s.slice(1);
const NONO = [
  { why: 'contractions — not suitable for an academic style', f: s => { const m = s.replace(/\b(do|does|is|are|can|will|should|would|has|have) not\b/, (x, a) => a === 'can' ? "can't" : a === 'will' ? "won't" : a + "n't"); return m !== s ? m : null; } },
  { why: 'using "etc." instead of listing specifically', f: s => { const m = s.match(/^(.*\b\w+), (\w+(?: \w+)?) and [^,.]+(\.)$/); return m ? `${m[1]}, ${m[2]}, etc.` : null; } },
  { why: 'unfounded absolute claims ("Everybody knows")', f: s => 'Everybody knows that ' + lc(s) },
  { why: 'redundancy ("In my personal opinion, I think")', f: s => 'In my personal opinion, I think that ' + lc(s) },
  { why: 'rhetorical questions instead of argument', f: s => s.replace(/\.$/, '') + ', don\'t you think?' },
];
function nonoItem(s, seed, lv) {
  const rules = NONO.filter(r => r.f(s)); if (!rules.length) return null; const r = rules[seed % rules.length]; const bad = r.f(s);
  const opts = [s, bad]; if (lv === 3) { const r2 = rules.find(x => x !== r); if (r2) opts.push(r2.f(s)); }
  return { q: 'Which sentence suits the Task 2 style?', options: opts, a: 0,
    why: { q: 'What does the incorrect sentence violate?', options: [r.why, ...NONO.filter(x => x !== r).sort((a, b) => hash(a.why + seed) - hash(b.why + seed)).slice(0, 2).map(x => x.why)], a: 0 }, ex: 'Band 7 LR: "awareness of style"; no-nos reduce accuracy and academic tone.' };
}
function critItem(s, seed) {
  const cs = window.KL_CORRUPT ? window.KL_CORRUPT(s) : []; if (!cs.length) return null; const c = cs[seed % cs.length];
  const crit = c.i === 18 ? 'Lexical Resource' : 'Grammatical Range and Accuracy';
  return { q: `*${c.s}*\nWhich criterion does the error in this sentence mainly affect?`, options: [crit, 'Task Response', 'Coherence and Cohesion'], a: 0, ex: `The error: ${c.why}. Correct sentence: *${s}*` };
}
const CRIT_DESC = [
  ['The thesis agrees, but the conclusion says "it depends".', 'Task Response'],
  ['Every sentence begins with a different linker (Firstly, Moreover, Furthermore...).', 'Coherence and Cohesion'],
  ['Using "make a research", "do a mistake".', 'Lexical Resource'],
  ['Many complex sentences have subject–verb agreement and article errors.', 'Grammatical Range and Accuracy'],
  ['The body lists 5 ideas, one sentence each, with no explanation.', 'Task Response'],
  ['The pronouns "this" and "it" have unclear references.', 'Coherence and Cohesion'],
  ['Repeating "important" 9 times in the essay.', 'Lexical Resource'],
  ['Using only simple sentences, with no complex ones.', 'Grammatical Range and Accuracy'],
  ['Ignoring one of the prompt\'s two questions.', 'Task Response'],
  ['No paragraphing: the whole essay is one block.', 'Coherence and Cohesion'],
];
function critDescItem(seed) { const [d, c] = CRIT_DESC[seed % CRIT_DESC.length]; const all = ['Task Response', 'Coherence and Cohesion', 'Lexical Resource', 'Grammatical Range and Accuracy']; return { q: `Problem: ${d}\nWhich criterion does it mainly affect?`, options: [c, ...all.filter(x => x !== c).slice(0, 2)], a: 0, ex: '' }; }
/* rotate mcq options (mcq2 đã được trộn khi hiển thị) */
const rot = (it, seed) => { const n = it.options.length, k = seed % n; const o = it.options.slice(k).concat(it.options.slice(0, k)); return Object.assign({}, it, { options: o, a: (it.a - k + n) % n }); };
function gen(u, bloom, lv, seed) {
  const mine = UNIT_TYPES[u.id] ? prompts.filter(P => UNIT_TYPES[u.id].includes(P.t)) : prompts;
  const P1 = mine[seed % mine.length], P2 = mine[(seed + 5) % mine.length];
  if (!P1) return null;
  if (u.id === 't2h') {
    const s1 = pool[seed % pool.length], s2 = pool[(seed + 11) % pool.length];
    if (bloom === 'remember') return { type: 'mcq', title: 'Identify no-nos', instr: 'Choose the sentence that breaks a Task 2 style rule.', items: [s1, s2].map((s, i) => { const r = NONO.find(x => x.f(s)); const b = r && r.f(s); return b ? rot({ q: 'Which sentence contains a no-no?', options: [b, s], a: 0, ex: r.why }, seed + i) : null; }).filter(Boolean) };
    if (bloom === 'apply') return { type: 'rewrite', title: 'Fix no-no sentences', instr: 'Rewrite in a correct academic style, keeping the meaning.', items: [s1, s2, pool[(seed + 23) % pool.length]].map((s, i) => { const r = NONO.filter(x => x.f(s))[(seed + i) % 3]; return r ? { q: r.f(s), a: [s] } : null; }).filter(Boolean) };
    return MQ2(bloom === 'analyze' ? 'Diagnose no-nos' : 'Which sentence has an academic style?', [nonoItem(s1, seed, lv), nonoItem(s2, seed + 1, lv)].filter(Boolean));
  }
  if (u.id === 't2l' || u.id === 't2f') {
    const s1 = pool[seed % pool.length], s2 = pool[(seed + 7) % pool.length];
    if (bloom === 'remember') return { type: 'mcq', title: 'Which criterion does this error affect?', instr: 'Choose the criterion mainly affected.', items: [critDescItem(seed), critDescItem(seed + 3), critDescItem(seed + 6)].map((x, i) => rot(x, seed + i)) };
    if (bloom === 'apply') return { type: 'rewrite', title: 'Fix errors by criterion', instr: 'Rewrite the sentence correctly, keeping the meaning.', items: [s1, s2].map(s => { const c = (window.KL_CORRUPT(s) || [])[seed % 3]; return c ? { q: c.s, a: [s] } : null; }).filter(Boolean) };
    if (bloom === 'understand') return { type: 'mcq', title: 'Errors and assessment criteria', instr: 'Choose the criterion mainly affected.', items: [critItem(s1, seed), critItem(s2, seed + 1), critDescItem(seed + 2)].filter(Boolean).map((x, i) => rot(x, seed + i)) };
    return MQ2(bloom === 'analyze' ? 'Check sentences against the criteria' : 'Choose the sentence that meets the standard', [nonoItem(s1, seed, lv), thesisItem(P1, lv, seed)].filter(Boolean));
  }
  if (bloom === 'remember') return { type: 'mcq', title: lv === 3 ? 'Identify easily confused prompt types' : 'Identify prompt types & requirements', instr: 'Choose the correct answer.', items: [typeItem(P1, lv, seed), lv === 3 ? partsItem(P2, seed) : typeItem(P2, lv, seed + 1)].map((x, i) => rot(x, seed + i)) };
  if (bloom === 'understand') return MQ2(lv === 3 ? 'Thesis matched to prompt type (advanced)' : 'Thesis matched to prompt type', [thesisItem(P1, lv, seed), lv === 3 ? (scopeItem(P2) || thesisItem(P2, lv, seed)) : tsItem(P2)].filter(Boolean));
  if (bloom === 'analyze') return MQ2(lv === 3 ? 'Outline & prompt scope' : 'Does the outline fully answer the prompt?', [planItem(P1, seed), lv === 3 ? (scopeItem(P2) || planItem(P2, seed)) : planItem(P2, seed)].filter(Boolean));
  if (bloom === 'evaluate') return MQ2('Topic sentences & conclusions', [tsItem(P1), conclItem(P2, lv)]);
  if (bloom === 'apply') return { type: 'rewrite', title: ['', 'Write a thesis using a frame', 'Write an introduction: paraphrase + thesis', 'A thesis that addresses every part'][lv], instr: 'Gemini marks against the prompt\'s requirements; you do not have to follow the frame.', items: [rwItem(P1, lv), rwItem(P2, lv)] };
  return null;
}
let made = 0;
for (const u of window.UNITS) {
  if (u.stage !== 'task2' || u.id === 't2b' || u.id === 't2g') continue;
  for (const bloom of ['remember', 'understand', 'apply', 'analyze', 'evaluate']) for (const lv of [1, 2, 3]) {
    let have = u.exercises.filter(e => e.bloom === bloom && lvOf(e) === lv).length; let t = 0;
    while (have < NEED && t < 12) {
      const ex = gen(u, bloom, lv, hash(u.id + bloom + lv) + t * 13); t++;
      if (!ex || !ex.items?.length || ex.items.length < 2) continue;
      const sig = JSON.stringify(ex.items.map(i => i.q + (i.options ? i.options[0] : '')));
      if (u.exercises.some(e => e.sig === sig)) continue;
      u.exercises.push(Object.assign({ bloom, lv, gen: 'task2', sig }, ex)); have++; made++;
    }
  }
}
window.KL_T2GEN = { made, prompts: prompts.length, pool: pool.length };
})();
