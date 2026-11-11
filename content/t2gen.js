/* Task 2: sinh bài CHIẾN THUẬT từ ngân hàng đề (82 đề tự soạn trong app), theo đúng dạng đề:
   nhận dạng đề, số phần phải trả lời, thesis đúng dạng, dàn ý thiếu phần, xử lý từ phạm vi (only/best/most), kết luận nhất quán,
   no-no (văn phong), lỗi ảnh hưởng tiêu chí nào. Chỉ bổ sung vào ô còn thiếu để mỗi ô đủ 3 bài. */
(function () {
const NEED = 3;
const lvOf = e => e.lv || (e.bloom === 'remember' || e.bloom === 'understand' ? 1 : 2);
const hash = s => [...String(s)].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
const viet = s => /[ăâđêôơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]/i.test(s);
const typeOf = p => { const q = (p.match(/\?/g) || []).length;
  if (/discuss both/i.test(p)) return 'disc'; if (/outweigh/i.test(p)) return 'adv';
  if (/positive or negative/i.test(p)) return q >= 2 ? null : 'posneg';
  if (/\bthe (only|best) (way|method|solution)\b|\bthe most important\b/i.test(p)) return 'best';
  if (/extent do you agree|agree or disagree|do you agree/i.test(p)) return 'opinion';
  if (/(problem|solution|measures|be done|be solved)/i.test(p)) return 'probsol';
  if (/(cause|reason|why)/i.test(p)) return 'cause'; if (/better/i.test(p)) return 'better'; if (/should/i.test(p) && q === 1) return 'should'; return null; };
const T = {
  opinion: { name: 'Opinion (Agree / Disagree)', parts: 'nêu rõ mức độ đồng ý (một lập trường) và lý do',
    good: 'I largely agree with this view, mainly because …, although …', bad: 'This essay will discuss the advantages and disadvantages of this issue.',
    plan: ['Body 1: lý do chính ủng hộ lập trường. Body 2: lý do thứ hai, hoặc thừa nhận phía kia rồi phản bác.', 'Body 1: ưu điểm. Body 2: nhược điểm. Kết luận: "cả hai đều có lý".'], miss: 'không đưa ra mức độ đồng ý rõ ràng',
    ts: ['The main reason I support this view is that …, which means …', 'There are many reasons for this.'] },
  disc: { name: 'Discussion (Discuss both views + opinion)', parts: 'bàn quan điểm A, quan điểm B và nêu ý kiến của bạn',
    good: 'While some believe …, others argue …; in my view, … because …', bad: 'I completely agree that …, for several reasons.',
    plan: ['Body 1: quan điểm A. Body 2: quan điểm B kèm ý kiến của bạn (hoặc ý kiến ở thesis và kết luận).', 'Body 1 và Body 2: hai lý do cho ý kiến của bạn, không trình bày quan điểm còn lại.'], miss: 'bỏ qua một trong hai quan điểm',
    ts: ['Those who favour … point to …, arguing that …', 'This view is wrong.'] },
  adv: { name: 'Advantages outweigh disadvantages?', parts: 'cân xem lợi ích hay bất lợi lớn hơn, và vì sao',
    good: 'In my view, the benefits of this trend clearly outweigh its drawbacks, as …', bad: 'This trend has both advantages and disadvantages.',
    plan: ['Body 1: thừa nhận bất lợi. Body 2: lợi ích và vì sao chúng lớn hơn.', 'Body 1: liệt kê lợi ích. Body 2: liệt kê bất lợi. Không có câu so sánh bên nào lớn hơn.'], miss: 'không cân bên nào lớn hơn',
    ts: ['Although this development has some drawbacks, these are outweighed by …', 'This development has some advantages.'] },
  posneg: { name: 'Positive or negative development?', parts: 'đánh giá xu hướng là tích cực hay tiêu cực (có thể có điều kiện)',
    good: 'I believe this is a largely positive development, since …', bad: 'This essay will discuss the reasons for this trend.',
    plan: ['Body 1–2: lý do cho đánh giá của bạn (có thể thừa nhận mặt còn lại).', 'Body 1: định nghĩa xu hướng. Body 2: lịch sử của xu hướng.'], miss: 'không đưa ra đánh giá tích cực/tiêu cực',
    ts: ['This development is beneficial mainly because it …', 'This is good.'] },
  probsol: { name: 'Problems / Causes – Solutions (câu hỏi 2 phần)', parts: 'trả lời đủ cả hai câu hỏi (vấn đề/nguyên nhân và giải pháp)',
    good: 'The main problems (or causes) are …, and they could be tackled by …', bad: 'I completely agree with this statement.',
    plan: ['Body 1: vấn đề cụ thể và hệ quả. Body 2: giải pháp khớp với từng vấn đề.', 'Body 1: vấn đề. Body 2: thêm các vấn đề khác. Kết luận: chính phủ nên làm gì đó.'], miss: 'thiếu phần giải pháp',
    ts: ['One practical solution would be for … to …, which would directly address …', 'The government should solve this problem.'] },
  cause: { name: 'Causes – Effects / Causes – Solutions', parts: 'nêu nguyên nhân và phần thứ hai đề hỏi (hệ quả hoặc giải pháp)',
    good: 'This is mainly caused by …, and it has led to …', bad: 'There are both advantages and disadvantages of this trend.',
    plan: ['Body 1: nguyên nhân (giải thích cơ chế). Body 2: hệ quả/giải pháp đúng như đề hỏi.', 'Body 1: nguyên nhân. Body 2: thêm nguyên nhân khác.'], miss: 'thiếu phần thứ hai của đề',
    ts: ['A key reason is that …, which means that …', 'There are many reasons for this.'] },
  better: { name: 'A better than B? / Which is better?', parts: 'chọn bên tốt hơn (hoặc chia nhóm cụ thể) và so sánh trực tiếp',
    good: 'I believe … is the better option for most people, because …', bad: 'Both options have their own advantages.',
    plan: ['Body 1–2: so sánh trực tiếp hai lựa chọn theo từng tiêu chí.', 'Body 1: mô tả lựa chọn A. Body 2: mô tả lựa chọn B. Không so sánh.'], miss: 'không so sánh trực tiếp hai lựa chọn',
    ts: ['Compared with …, … offers …, which matters because …', 'Option A is good.'] },
  should: { name: 'Should …? (Opinion dạng có/không)', parts: 'trả lời rõ có hay không, và vì sao',
    good: 'I believe … should …, as this would …', bad: 'There are many different opinions on this issue.',
    plan: ['Body 1–2: lý do cho câu trả lời có/không (có thể nêu điều kiện).', 'Body 1: ý kiến người ủng hộ. Body 2: ý kiến người phản đối. Không có câu trả lời của bạn.'], miss: 'không trả lời có hay không',
    ts: ['The strongest argument for this policy is that it would …', 'Some people think yes and some people think no.'] },
  best: { name: '"The best / The only / The most" (Opinion đặc biệt)', parts: 'đánh giá đó có phải cách tốt nhất/duy nhất không, bằng cách so sánh với cách khác',
    good: 'Although this approach may help, I would argue that … is more effective, because …', bad: 'I agree because this approach has many benefits.',
    plan: ['Body 1: thừa nhận lợi ích của cách được nêu. Body 2: cách khác hiệu quả hơn và vì sao.', 'Body 1–2: liệt kê lợi ích của cách được nêu, không so sánh với cách nào khác.'], miss: 'chỉ chứng minh "có lợi" mà không so sánh với cách khác',
    ts: ['Admittedly, this approach can help; however, … would be far more effective because …', 'This approach has many benefits.'] },
};
const CONF = { opinion: 'best', best: 'opinion', disc: 'adv', adv: 'disc', posneg: 'adv', probsol: 'cause', cause: 'probsol', better: 'should', should: 'opinion' };
/* ---- ngân hàng đề ---- */
const prompts = [];
for (const u of window.UNITS) if (u.stage === 'task2') for (const e of u.exercises) if (e.type === 'write' && e.kind === 'task2') {
  const p = e.prompt.split('\n')[0].replace(/^Đề:\s*/, '').replace(/\*/g, '').trim();
  if (p.length > 30 && !viet(p) && typeOf(p) && !prompts.some(x => x.p === p)) prompts.push({ p, t: typeOf(p) });
}
const UNIT_TYPES = { t2a: null, t2c: ['opinion', 'best'], t2d: ['disc', 'adv'], t2e: ['probsol'], t2i: ['should', 'better', 'opinion'], t2j: ['posneg'], t2k: ['cause', 'probsol'], t2m: ['best'] };
const SCOPE = p => (p.match(/\b(the only way|the best way|the most important|the best|all|every|completely|never)\b/i) || [])[0];
const MQ2 = (title, items, instr) => items.length ? { type: 'mcq2', title, instr: instr || 'Tầng 1: chọn phương án. Tầng 2: chọn lý do. Đúng cả hai tầng mới được điểm đủ.', items } : null;
const others = (t, n, seed) => Object.keys(T).filter(k => k !== t).sort((a, b) => hash(a + seed) - hash(b + seed)).slice(0, n);
function typeItem(P, lv, seed) {
  const wrong = lv === 3 ? [CONF[P.t], others(P.t, 3, seed).find(k => k !== CONF[P.t])] : others(P.t, 2, seed);
  return { q: `*${P.p}*\nĐề này thuộc dạng nào?`, options: [T[P.t].name, ...wrong.map(k => T[k].name)], a: 0, ex: `Đề yêu cầu: ${T[P.t].parts}.` };
}
function partsItem(P, seed) {
  const w = others(P.t, 2, seed + 3);
  return { q: `*${P.p}*\nĐề này yêu cầu bạn làm gì?`, options: [T[P.t].parts, T[w[0]].parts, T[w[1]].parts], a: 0, ex: 'Theo band descriptors, Task Response Band 6–7 đòi hỏi trả lời đủ các phần chính của đề.' };
}
function thesisItem(P, lv, seed) {
  const opts = [T[P.t].good, T[P.t].bad]; if (lv === 3) { const b2 = Object.keys(T).map(k => T[k].bad).find((b, i) => b !== T[P.t].bad && (hash(P.p) + i) % 3 === 0) || T[CONF[P.t]].bad; if (b2 !== T[P.t].bad) opts.push(b2); }
  return { q: `*${P.p}*\nKhung thesis nào trả lời đúng đề?`, options: opts, a: 0,
    why: { q: 'Vì sao?', options: [`Đề dạng ${T[P.t].name} yêu cầu ${T[P.t].parts}`, 'Thesis nên trung lập để không bị trừ điểm', 'Thesis càng dài và nhiều ý càng tốt'], a: 0 }, ex: '' };
}
function planItem(P, seed) {
  return { q: `*${P.p}*\nDàn ý nào trả lời đủ đề?`, options: [T[P.t].plan[0], T[P.t].plan[1]], a: 0,
    why: { q: 'Dàn ý còn lại có vấn đề gì?', options: [`${T[P.t].miss} — ảnh hưởng Task Response`, 'có quá ít đoạn thân bài', 'không có ví dụ cá nhân'], a: 0 }, ex: 'Band 5 TR: "main parts of the prompt are incompletely addressed".' };
}
function scopeItem(P) {
  const w = SCOPE(P.p); if (!w) return null;
  return { q: `*${P.p}*\nTừ "${w}" trong đề nên được xử lý thế nào?`, options: [`Thesis nói rõ có đồng ý với mức "${w}" hay không, và thân bài so sánh với các khả năng khác`, `Bỏ qua từ "${w}", chỉ cần chứng minh ý chính của đề có lợi`], a: 0,
    why: { q: 'Vì sao?', options: ['Từ phạm vi thay đổi điều đề hỏi; bỏ qua nó là trả lời lệch đề', 'Từ tuyệt đối luôn phải được đồng ý', 'Từ này chỉ để trang trí'], a: 0 }, ex: '' };
}
function tsItem(P) {
  return { q: `*${P.p}*\nCâu chủ đề (topic sentence) nào phù hợp hơn với dạng đề này?`, options: [T[P.t].ts[0], T[P.t].ts[1]], a: 0,
    why: { q: 'Vì sao?', options: ['Câu được chọn báo trước ý chính và gắn với yêu cầu của đề; câu kia chung chung', 'Câu ngắn luôn rõ ràng hơn', 'Câu được chọn có nhiều từ học thuật hơn'], a: 0 }, ex: 'Band 6–7 TR: ý chính cần được nêu rõ và phát triển.' };
}
function conclItem(P, lv) {
  const opts = ['Kết luận nhắc lại câu trả lời/lập trường ở thesis bằng cách diễn đạt khác và tóm tắt lý do chính.', 'Kết luận chuyển sang "tuỳ trường hợp" và thêm một giải pháp mới chưa bàn ở thân bài.'];
  if (lv === 3) opts.push('Kết luận chép lại nguyên văn câu thesis.');
  return { q: `*${P.p}*\nThesis đã trả lời rõ ràng. Kết luận nào phù hợp?`, options: opts, a: 0,
    why: { q: 'Vì sao?', options: ['Kết luận phải nhất quán với thesis và không thêm ý mới', 'Kết luận nên mở hướng mới để gây ấn tượng', 'Kết luận nên trung lập cho an toàn'], a: 0 }, ex: 'Band 6 TR: "conclusions may be unclear, unjustified or repetitive".' };
}
function rwItem(P, lv) {
  if (lv === 1) return { q: `Viết thesis cho đề theo khung gợi ý «${T[P.t].good}»:\n*${P.p}*`, a: ['(Không có câu mẫu duy nhất) Khung: ' + T[P.t].good] };
  if (lv === 2) return { q: `Viết câu mở bài: paraphrase đề + thesis (không dùng khung):\n*${P.p}*`, a: ['(Không có câu mẫu duy nhất: paraphrase giữ nghĩa, thesis ' + T[P.t].parts + ')'] };
  return { q: `Viết thesis trả lời CHÍNH XÁC mọi phần của đề${SCOPE(P.p) ? ' và xử lý từ "' + SCOPE(P.p) + '"' : ''}:\n*${P.p}*`, a: ['(Không có câu mẫu duy nhất) Yêu cầu: ' + T[P.t].parts] };
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
  { why: 'viết tắt (contractions) — không hợp văn phong học thuật', f: s => { const m = s.replace(/\b(do|does|is|are|can|will|should|would|has|have) not\b/, (x, a) => a === 'can' ? "can't" : a === 'will' ? "won't" : a + "n't"); return m !== s ? m : null; } },
  { why: 'dùng "etc." thay vì liệt kê cụ thể', f: s => { const m = s.match(/^(.*\b\w+), (\w+(?: \w+)?) and [^,.]+(\.)$/); return m ? `${m[1]}, ${m[2]}, etc.` : null; } },
  { why: 'khẳng định tuyệt đối không có căn cứ ("Everybody knows")', f: s => 'Everybody knows that ' + lc(s) },
  { why: 'lặp ý thừa ("In my personal opinion, I think")', f: s => 'In my personal opinion, I think that ' + lc(s) },
  { why: 'câu hỏi tu từ thay cho lập luận', f: s => s.replace(/\.$/, '') + ', don\'t you think?' },
];
function nonoItem(s, seed, lv) {
  const rules = NONO.filter(r => r.f(s)); if (!rules.length) return null; const r = rules[seed % rules.length]; const bad = r.f(s);
  const opts = [s, bad]; if (lv === 3) { const r2 = rules.find(x => x !== r); if (r2) opts.push(r2.f(s)); }
  return { q: 'Câu nào phù hợp văn phong Task 2?', options: opts, a: 0,
    why: { q: 'Câu sai (phương án nhiễu) vi phạm điều gì?', options: [r.why, ...NONO.filter(x => x !== r).sort((a, b) => hash(a.why + seed) - hash(b.why + seed)).slice(0, 2).map(x => x.why)], a: 0 }, ex: 'Band 7 LR: "awareness of style"; các no-no làm giảm độ chính xác và văn phong học thuật.' };
}
function critItem(s, seed) {
  const cs = window.KL_CORRUPT ? window.KL_CORRUPT(s) : []; if (!cs.length) return null; const c = cs[seed % cs.length];
  const crit = c.i === 18 ? 'Lexical Resource' : 'Grammatical Range and Accuracy';
  return { q: `*${c.s}*\nLỗi trong câu này chủ yếu ảnh hưởng tiêu chí nào?`, options: [crit, 'Task Response', 'Coherence and Cohesion'], a: 0, ex: `Lỗi: ${c.why}. Câu đúng: *${s}*` };
}
const CRIT_DESC = [
  ['Thesis nói đồng ý, kết luận lại nói "tuỳ trường hợp".', 'Task Response'],
  ['Mỗi câu đều bắt đầu bằng một từ nối khác nhau (Firstly, Moreover, Furthermore...).', 'Coherence and Cohesion'],
  ['Dùng "make a research", "do a mistake".', 'Lexical Resource'],
  ['Nhiều câu phức có lỗi hoà hợp chủ–vị và mạo từ.', 'Grammatical Range and Accuracy'],
  ['Thân bài liệt kê 5 ý, mỗi ý một câu, không giải thích.', 'Task Response'],
  ['Đại từ "this", "it" không rõ chỉ cái gì.', 'Coherence and Cohesion'],
  ['Lặp lại "important" 9 lần trong bài.', 'Lexical Resource'],
  ['Chỉ dùng câu đơn, không có câu phức.', 'Grammatical Range and Accuracy'],
  ['Bỏ qua một trong hai câu hỏi của đề.', 'Task Response'],
  ['Không chia đoạn, cả bài là một khối.', 'Coherence and Cohesion'],
];
function critDescItem(seed) { const [d, c] = CRIT_DESC[seed % CRIT_DESC.length]; const all = ['Task Response', 'Coherence and Cohesion', 'Lexical Resource', 'Grammatical Range and Accuracy']; return { q: `Vấn đề: ${d}\nẢnh hưởng chủ yếu tiêu chí nào?`, options: [c, ...all.filter(x => x !== c).slice(0, 2)], a: 0, ex: '' }; }
/* rotate mcq options (mcq2 đã được trộn khi hiển thị) */
const rot = (it, seed) => { const n = it.options.length, k = seed % n; const o = it.options.slice(k).concat(it.options.slice(0, k)); return Object.assign({}, it, { options: o, a: (it.a - k + n) % n }); };
function gen(u, bloom, lv, seed) {
  const mine = UNIT_TYPES[u.id] ? prompts.filter(P => UNIT_TYPES[u.id].includes(P.t)) : prompts;
  const P1 = mine[seed % mine.length], P2 = mine[(seed + 5) % mine.length];
  if (!P1) return null;
  if (u.id === 't2h') {
    const s1 = pool[seed % pool.length], s2 = pool[(seed + 11) % pool.length];
    if (bloom === 'remember') return { type: 'mcq', title: 'Nhận diện no-no', instr: 'Chọn câu vi phạm quy tắc văn phong Task 2.', items: [s1, s2].map((s, i) => { const r = NONO.find(x => x.f(s)); const b = r && r.f(s); return b ? rot({ q: 'Câu nào vi phạm no-no?', options: [b, s], a: 0, ex: r.why }, seed + i) : null; }).filter(Boolean) };
    if (bloom === 'apply') return { type: 'rewrite', title: 'Sửa câu vi phạm no-no', instr: 'Viết lại cho đúng văn phong học thuật, giữ nguyên ý.', items: [s1, s2, pool[(seed + 23) % pool.length]].map((s, i) => { const r = NONO.filter(x => x.f(s))[(seed + i) % 3]; return r ? { q: r.f(s), a: [s] } : null; }).filter(Boolean) };
    return MQ2(bloom === 'analyze' ? 'Chẩn đoán no-no' : 'Câu nào đạt văn phong học thuật?', [nonoItem(s1, seed, lv), nonoItem(s2, seed + 1, lv)].filter(Boolean));
  }
  if (u.id === 't2l' || u.id === 't2f') {
    const s1 = pool[seed % pool.length], s2 = pool[(seed + 7) % pool.length];
    if (bloom === 'remember') return { type: 'mcq', title: 'Lỗi này thuộc tiêu chí nào?', instr: 'Chọn tiêu chí chịu ảnh hưởng chính.', items: [critDescItem(seed), critDescItem(seed + 3), critDescItem(seed + 6)].map((x, i) => rot(x, seed + i)) };
    if (bloom === 'apply') return { type: 'rewrite', title: 'Sửa lỗi theo tiêu chí', instr: 'Viết lại câu cho đúng, giữ nguyên ý.', items: [s1, s2].map(s => { const c = (window.KL_CORRUPT(s) || [])[seed % 3]; return c ? { q: c.s, a: [s] } : null; }).filter(Boolean) };
    if (bloom === 'understand') return { type: 'mcq', title: 'Lỗi và tiêu chí chấm', instr: 'Chọn tiêu chí chịu ảnh hưởng chính.', items: [critItem(s1, seed), critItem(s2, seed + 1), critDescItem(seed + 2)].filter(Boolean).map((x, i) => rot(x, seed + i)) };
    return MQ2(bloom === 'analyze' ? 'Soát câu theo tiêu chí' : 'Chọn câu đạt chuẩn', [nonoItem(s1, seed, lv), thesisItem(P1, lv, seed)].filter(Boolean));
  }
  if (bloom === 'remember') return { type: 'mcq', title: lv === 3 ? 'Nhận dạng đề dễ nhầm (Mức 3)' : 'Nhận dạng đề & yêu cầu', instr: 'Chọn đáp án đúng.', items: [typeItem(P1, lv, seed), lv === 3 ? partsItem(P2, seed) : typeItem(P2, lv, seed + 1)].map((x, i) => rot(x, seed + i)) };
  if (bloom === 'understand') return MQ2(lv === 3 ? 'Thesis đúng dạng (Mức 3)' : 'Thesis đúng dạng đề', [thesisItem(P1, lv, seed), lv === 3 ? (scopeItem(P2) || thesisItem(P2, lv, seed)) : tsItem(P2)].filter(Boolean));
  if (bloom === 'analyze') return MQ2(lv === 3 ? 'Dàn ý & phạm vi đề (Mức 3)' : 'Dàn ý có trả lời đủ đề?', [planItem(P1, seed), lv === 3 ? (scopeItem(P2) || planItem(P2, seed)) : planItem(P2, seed)].filter(Boolean));
  if (bloom === 'evaluate') return MQ2('Câu chủ đề & kết luận', [tsItem(P1), conclItem(P2, lv)]);
  if (bloom === 'apply') return { type: 'rewrite', title: ['', 'Viết thesis theo khung', 'Viết mở bài: paraphrase + thesis', 'Thesis chính xác mọi phần (Mức 3)'][lv], instr: 'Gemini chấm theo yêu cầu của đề, không bắt buộc giống khung.', items: [rwItem(P1, lv), rwItem(P2, lv)] };
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
