/* Chặng 3 (bổ sung) — bám theo danh sách 21 bài Writing Task 2. Nội dung & đề tự soạn. */
(function () {
const U = id => window.UNITS.find(u => u.id === id);
const tag = (id, n, lessons, title) => { const u = U(id); u.n = n; u.lessons = lessons; if (title) u.title = title; return u; };

tag('t2a', 1, 'Lesson 1 · Task Response', 'Task Response: analysing the prompt & the introduction');
const b = tag('t2b', 5, 'Lesson 5 · 1-idea paragraph · Lesson 6 · 2-idea paragraph', 'One-idea & two-idea body paragraphs');
tag('t2c', 10, 'Lesson 10 · Opinion "The only way" · Lesson 11 · Opinion', 'Opinion: Agree/Disagree & "The only way"');
tag('t2d', 13, 'Lesson 13 · A and B · Lesson 14 · Advantages outweigh disadvantages', 'Discussion (A and B) & Advantages outweigh');
tag('t2e', 16, 'Lesson 16 · Problems – solutions · Lesson 19 · 2-part question', 'Problems – Solutions & two-part questions');

b.theory.push({ h: '3 types of body paragraph (from the course)', p: ['**1 idea**: Topic sentence → explain → example → discuss (or use a contrasting example for clarity).', '**2 ideas**: Topic sentence (stating both ideas) → idea 1 + explanation → idea 2 + explanation. Suitable when neither idea needs lengthy development.', '**Counter-argument**: state the opposing view + explain it → rebut it (see the Counter-argument unit).'] });
b.exercises.splice(5, 0, { bloom: 'analyze', type: 'match', title: 'One-idea or two-idea paragraph?', instr: 'Choose the paragraph type that suits each outline.', options: ['1 idea (developed in depth)', '2 ideas (each one short)'],
  pairs: [
    { l: 'Online learning saves commuting time → explanation → example of students in the provinces → comparison with face-to-face study', r: '1 idea (developed in depth)' },
    { l: 'A sugar tax helps reduce obesity; it also raises money for healthcare', r: '2 ideas (each one short)' },
    { l: 'Mass tourism causes pollution and erodes local cultural identity', r: '2 ideas (each one short)' },
    { l: 'Remote work blurs the line between work and life → explain the mechanism → example → consequences', r: '1 idea (developed in depth)' },
  ] });
b.exercises.push({ bloom: 'create', type: 'write', kind: 'task2', title: 'Write a two-idea paragraph', prompt: 'Prompt: *Some people think that public museums and galleries should be free of charge. To what extent do you agree or disagree?*\n\nWrite **a two-idea body paragraph** (about 120–150 words) supporting free entry: a topic sentence stating both ideas, then develop each idea.', minWords: 110, focus: ['a topic sentence covering both ideas', 'explaining each idea', 'a linker between the 2 ideas'] });

window.UNITS = window.UNITS.concat([
{
  id: 't2f', n: 2, stage: 'task2', lessons: 'Lesson 2 · Coherence & Cohesion · Lesson 3 · Vocabulary · Lesson 4 · Grammar', title: 'CC, Vocabulary & Grammar: the other 3 criteria',
  desc: 'Besides Task Response, the other three criteria make up 75% of the score: coherence and cohesion, vocabulary and grammar. Learn how examiners look at your writing.',
  theory: [
    { h: 'Coherence & Cohesion', p: ['Each paragraph has **one clear function**; ideas are arranged logically.', 'Link ideas with **referencing** (this, such a policy, the former) and **purposeful linkers**, rather than putting Firstly/Secondly/Moreover in every sentence.', 'Topic sentences link back to the prompt.'] },
    { h: 'Lexical Resource', p: ['Accurate **collocations** matter more than "impressive" words: *tackle a problem, pose a threat, a heavy burden*.', 'Paraphrase the prompt and avoid repeating keywords.', 'A rare word used wrongly loses more marks than a simple word used correctly.'] },
    { h: 'Grammatical Range & Accuracy', p: ['Combine complex sentences (relative clauses, conditionals, passives, participles) **naturally**.', 'Band 7: most sentences are error-free. Accuracy matters more than length.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Which criterion does this error affect?', instr: 'Choose the affected criterion.', options: ['Coherence & Cohesion', 'Lexical Resource', 'Grammar'],
      pairs: [
        { l: 'Using "Moreover" at the start of 6 consecutive sentences', r: 'Coherence & Cohesion' },
        { l: '"make a crime" instead of "commit a crime"', r: 'Lexical Resource' },
        { l: '"The government should invests more"', r: 'Grammar' },
        { l: 'A body paragraph containing two unrelated ideas', r: 'Coherence & Cohesion' },
        { l: 'Repeating "pollution" 9 times', r: 'Lexical Resource' },
        { l: 'Using only simple sentences from start to finish', r: 'Grammar' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Correct collocations', instr: 'Choose the most natural phrase.',
      items: [
        { q: '___ a serious threat to public health', options: ['pose', 'do', 'give'], a: 0 },
        { q: '___ the problem of youth unemployment', options: ['tackle', 'solve out', 'make'], a: 0 },
        { q: 'place a heavy ___ on taxpayers', options: ['burden', 'weight load', 'trouble'], a: 0 },
        { q: '___ awareness of environmental issues', options: ['raise', 'rise', 'arise'], a: 0 },
      ] },
    { bloom: 'apply', type: 'gap', title: 'Linking through referencing', instr: 'Fill in ONE word to link to the previous sentence.',
      items: [
        { q: 'Many cities have introduced congestion charges. ___ a policy discourages unnecessary car journeys.', a: ['such'] },
        { q: 'Some parents limit screen time, while others ban devices entirely. The ___ approach seems more realistic.', a: ['former'] },
        { q: 'Online courses are cheap and flexible. ___ advantages make them attractive to working adults.', a: ['these'] },
      ] },
    { bloom: 'analyze', type: 'rewrite', title: 'Upgrade the sentence', instr: 'Rewrite each sentence with a wider range of grammar and vocabulary, keeping the meaning.',
      items: [
        { q: 'Many people use cars. This makes a lot of pollution. It is bad for health.', a: ['The widespread use of private cars generates significant pollution, which poses a serious threat to public health.'] },
        { q: 'If the government does not do something, the problem will be bigger.', a: ['Unless the government takes action, the problem is likely to worsen.', 'Without government intervention, the problem will only grow more severe.'] },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Which paragraph is better connected?', instr: 'Choose the paragraph with better Coherence & Cohesion.',
      items: [{ q: '', options: [
        'Firstly, tourism brings money. Moreover, tourism creates jobs. Furthermore, tourism is good. In addition, tourism helps culture.',
        'Tourism is a major source of income for many developing regions. This revenue not only creates jobs in hotels and restaurants but also funds the preservation of historic sites, which might otherwise fall into disrepair.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'A paragraph focusing on CC – LR – GRA', prompt: 'Prompt: *In many countries, people are moving from rural areas to cities. Why is this happening, and is it a positive or negative development?*\n\nWrite **one body paragraph** (130–160 words) explaining the causes. Aim for at least 3 collocations, 2 kinds of referencing (this/such/these...), and 3 different types of complex sentence.', minWords: 120, focus: ['coherence & cohesion', 'collocation', 'complex sentences'] },
  ],
},
{
  id: 't2g', n: 7, stage: 'task2', lessons: 'Lesson 7 · Counter-argument', title: 'Counter-argument paragraphs: concession & rebuttal',
  desc: 'Present the opposing argument fairly, then show its weakness. This makes an Opinion essay more persuasive.',
  theory: [
    { h: 'Structures', p: ['**Point + explain** (the opposing side\'s): *Granted, one might argue that... This is because...*', '**Counter**: *However, this line of reasoning is flawed/not entirely convincing, since...*', 'End the paragraph by linking back to your own view.'] },
    { h: 'Language', p: ['Concession: *Granted, ... / Admittedly, ... / It is true that... / Opponents of this view may claim that...*', 'Rebuttal: *However, this argument overlooks... / This, however, fails to take into account... / Yet this concern is largely unfounded because...*'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Concession or rebuttal?', instr: 'Classify the phrases.', options: ['Concession', 'Rebuttal'],
      pairs: [
        { l: 'Admittedly, ...', r: 'Concession' }, { l: 'This argument, however, overlooks...', r: 'Rebuttal' }, { l: 'Opponents may claim that...', r: 'Concession' },
        { l: 'Yet this concern is largely unfounded because...', r: 'Rebuttal' }, { l: 'It is true that...', r: 'Concession' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'The role of a counter-argument', instr: 'Choose the correct answer.',
      items: [
        { q: 'A counter-argument helps an Opinion essay to:', options: ['Show that both sides have been considered while keeping a clear position', 'Change position halfway through the essay to show balance', 'Increase the word count of the essay to reach 250 words'], a: 0 },
        { q: 'After the rebuttal, your position is:', options: ['Stronger and consistent with the thesis', 'Neutral, so both sides are equal', 'Not worth restating in the conclusion'], a: 0 },
      ] },
    { bloom: 'apply', type: 'gap', title: 'Complete the paragraph', instr: 'Prompt: *Homework should be banned in primary schools. Agree or disagree?* (You: disagree). Fill in ONE word.',
      items: [
        { q: '___, one might argue that homework puts unnecessary pressure on young children.', a: ['granted', 'admittedly'] },
        { q: 'However, this line of reasoning is not entirely ___.', a: ['convincing', 'sound', 'persuasive'] },
        { q: 'This argument ___ the fact that short, well-designed tasks can build good study habits.', a: ['overlooks', 'ignores'] },
      ] },
    { bloom: 'analyze', type: 'order', title: 'Order a counter-argument paragraph', instr: 'Put the parts in order.',
      items: [{ words: 'Granted, some argue that remote work isolates employees, / as they lose daily contact with colleagues. / However, this concern is largely unfounded, / since video calls and occasional office days / can maintain strong team relationships.' }] },
    { bloom: 'evaluate', type: 'mcq', title: 'Which rebuttal is stronger?', instr: 'The opposing argument: *"Public transport should not be free because it costs taxpayers too much."*',
      items: [{ q: '', options: [
        'However, I disagree because free transport is good.',
        'However, this argument overlooks the hidden costs of car dependency, such as road maintenance and pollution-related healthcare, which may well exceed the price of subsidising public transport.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'Write a counter-argument paragraph', prompt: 'Prompt: *Some people think that university education should be free for everyone. To what extent do you agree or disagree?*\n\nChoose a position, then write **one counter-argument paragraph** (120–150 words): state and explain the opposing argument, then rebut it.', minWords: 110, focus: ['a fair concession', 'a reasoned rebuttal', 'a consistent position'] },
  ],
},
{
  id: 't2h', n: 8, stage: 'task2', lessons: 'Lesson 8 · Big no-nos in IELTS Writing Task 2', title: 'Big no-nos: errors that cap your score',
  desc: 'Common errors that keep Task 2 below band 6: going off-topic, memorised phrases, spoken style, overgeneralisation, and new ideas in the conclusion.',
  theory: [
    { h: 'Things to avoid', p: ['Not answering every part of the question.', 'Memorised openings unrelated to the prompt (*"In this day and age, ... is a hot topic"*).', 'Spoken style: *kids, lots of, gonna, don\'t, I think so*.', 'Absolute generalisations: *everyone, always, never, all young people*.', 'Examples with invented figures: "a Harvard study shows that 97%..."', 'New ideas in the conclusion; a position that changes halfway through.', 'Writing fewer than 250 words.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'mcq', title: 'Is it a "no-no"?', instr: 'Choose the sentence that MAKES the error.',
      items: [
        { q: '', options: ['Kids these days are glued to their phones.', 'Many children now spend several hours a day on their phones.'], a: 0, ex: 'Spoken style + informal idioms.' },
        { q: '', options: ['Everyone agrees that technology is harmful.', 'There is growing concern that excessive screen time may be harmful.'], a: 0, ex: 'Absolute generalisation.' },
        { q: '', options: ['A recent Harvard study found that 97% of teenagers are addicted.', 'For instance, many teenagers check their phones within minutes of waking up.'], a: 0, ex: 'Invented research figures.' },
      ] },
    { bloom: 'understand', type: 'match', title: 'Name the error', instr: 'Choose the type of error.', options: ['Spoken style', 'Overgeneralisation', 'Memorised phrase', 'New idea in the conclusion'],
      pairs: [
        { l: 'In this day and age, education is a hot topic that is being debated.', r: 'Memorised phrase' },
        { l: 'Old people can\'t use technology.', r: 'Overgeneralisation' },
        { l: 'Lots of folks reckon it\'s a good idea.', r: 'Spoken style' },
        { l: 'In conclusion, ... Also, governments should build more parks.', r: 'New idea in the conclusion' },
      ] },
    { bloom: 'apply', type: 'rewrite', title: 'Correct the errors', instr: 'Rewrite each sentence so that it is academic and accurate.',
      items: [
        { q: 'Kids don\'t do sports anymore cuz they play games all the time.', a: ['Many children now do less physical activity, partly because they spend a considerable amount of time playing video games.'] },
        { q: 'All politicians are corrupt, so people never trust them.', a: ['Corruption scandals involving some politicians have led many people to lose trust in their governments.'] },
      ] },
    { bloom: 'analyze', type: 'mcq', title: 'Does it fully answer the prompt?', instr: 'Prompt: *Why do many people choose to work from home? What are the drawbacks of this trend?*',
      items: [{ q: 'Outline: Body 1 – the benefits of working from home; Body 2 – the benefits for companies. The problem:', options: ['It does not cover the drawbacks and does not explain "why"', 'There is no problem; the outline is complete', 'It only lacks examples in the body paragraphs'], a: 0, ex: '"Benefits" can serve as reasons, but the second question, about drawbacks, is ignored completely.' }] },
    { bloom: 'evaluate', type: 'mcq', title: 'Which introduction avoids the no-nos?', instr: 'Prompt: *Some people think that children should start school at the age of four. Do you agree or disagree?*',
      items: [{ q: '', options: [
        'Nowadays, education is a controversial issue that has sparked a heated debate among people all around the world.',
        'There is a debate over whether children should begin formal schooling as early as four. In my view, starting at this age brings more drawbacks than benefits, since young children learn best through play.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'Fix an essay full of no-nos', prompt: 'Read the paragraph below and **rewrite it as a band 7 body paragraph** (120–150 words), removing every no-no:\n\n*"Nowadays technology is a hot topic. Everybody uses social media all the time and it\'s super bad for kids. A study shows 99% of teens are depressed because of Facebook. So I think the government must ban it and also we should plant more trees."*\n\nOriginal prompt: *Social media does more harm than good to young people. Agree or disagree?*', minWords: 110, focus: ['an academic tone', 'avoiding generalisations', 'staying on topic'] },
  ],
},
{
  id: 't2i', n: 9, stage: 'task2', lessons: 'Lesson 9 · Should questions · Lesson 12 · A better than B · Lesson 12 · Better for a certain group', title: 'Opinion: Should questions, "A better than B" & "better for which group"',
  desc: 'Three common Opinion variants: prompts with should/should not, prompts comparing A with B, and prompts asking what is better for a specific group of people.',
  theory: [
    { h: 'Should questions', p: ['Answer: **to what extent should it happen?** (fully / with conditions / not at all).', 'You can propose a scope: *should be required, but only for...*'] },
    { h: 'A better than B', p: ['Compare A and B **directly** on the same criteria; do not write only about A.', 'A thesis like: *A is preferable to B in terms of X, although B has the edge in Y.*'] },
    { h: 'Better for a certain group', p: ['Every argument must be tied to **the group named** (elderly people, children, students...).', 'Use examples about that exact group.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Identify the variant', instr: 'Choose the type.', options: ['Should', 'A better than B', 'Better for a group'],
      pairs: [
        { l: 'Governments should require all citizens to vote. Agree or disagree?', r: 'Should' },
        { l: 'Learning from books is better than learning from experience. Agree or disagree?', r: 'A better than B' },
        { l: 'Living in the countryside is better for elderly people than living in a city. Agree or disagree?', r: 'Better for a group' },
        { l: 'Children should not be allowed to own smartphones until the age of 14. Agree or disagree?', r: 'Should' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Which thesis meets the requirement?', instr: 'Choose the suitable thesis.',
      items: [
        { q: 'Prompt: *Living in the countryside is better for elderly people than living in a city.*', options: ['I agree that rural areas offer elderly people a calmer and healthier lifestyle, although access to hospitals remains a concern.', 'The countryside is beautiful and peaceful, and it is a good place for everyone to live.', 'Cities are developing quickly, and many elderly people now live in them.'], a: 0 },
        { q: 'Prompt: *Learning from books is better than learning from experience.*', options: ['Books are useful, and experience is also useful in many ways.', 'While books provide a structured foundation, I believe experience teaches practical skills more effectively.', 'Experience is important in life, and so are books for most people.'], a: 1 },
      ] },
    { bloom: 'apply', type: 'rewrite', title: 'Write a conditional thesis', instr: 'Write a thesis for a Should prompt, agreeing with conditions.',
      items: [
        { q: 'Prompt: *Governments should make cycling helmets compulsory.*', a: ['I believe helmets should be compulsory for children and on busy roads, but making them mandatory for all cyclists could discourage people from cycling.'] },
        { q: 'Prompt: *University students should be required to do part-time work.*', a: ['While part-time work can teach valuable skills, I do not think it should be compulsory, as it may harm students\' academic performance.'] },
      ] },
    { bloom: 'analyze', type: 'match', title: 'Is the argument tied to the group?', instr: 'Prompt: *Living in the countryside is better for elderly people.* Evaluate each idea.', options: ['Tied to elderly people', 'Too general'],
      pairs: [
        { l: 'Cleaner air reduces respiratory problems, which are common among older adults.', r: 'Tied to elderly people' },
        { l: 'The countryside has beautiful scenery.', r: 'Too general' },
        { l: 'Retirees in villages often have stronger community ties, reducing loneliness.', r: 'Tied to elderly people' },
        { l: 'Houses are cheaper in rural areas.', r: 'Too general' },
      ], ex: 'The "cheaper housing" idea can be used if it is linked to a fixed pension income.' },
    { bloom: 'evaluate', type: 'mcq', title: 'Which A-vs-B paragraph is better?', instr: 'Prompt: *Learning from books is better than learning from experience.*',
      items: [{ q: '', options: [
        'Books are good. They have a lot of information. People can read them at home or in the library. Many famous people read books.',
        'Books allow learners to benefit from knowledge that would take a lifetime to gain first-hand. A medical student, for example, can study thousands of documented cases, whereas relying on experience alone would expose patients to unnecessary risk.'], a: 1, ex: 'The second paragraph compares books and experience directly.' }] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'An Opinion essay: Should question', prompt: 'Some people think that governments should ban cars from city centres. To what extent do you agree or disagree?\n\nWrite at least 250 words.', minWords: 250, focus: ['a clear degree of agreement', 'conditional agreement is possible', 'counter-argument'] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'An Opinion essay: better for a group', prompt: 'Some people believe that living in a big city is better for young adults than living in a small town. To what extent do you agree or disagree?\n\nWrite at least 250 words.', minWords: 250, focus: ['tying arguments to the group', 'direct comparison'] },
  ],
},
{
  id: 't2j', n: 15, stage: 'task2', lessons: 'Lesson 15 · Positive or negative development', title: 'Positive or negative development',
  desc: 'The prompt asks whether a trend is positive or negative. State your attitude clearly, consider the other side, and stay consistent.',
  theory: [
    { h: 'Approach', p: ['Thesis: *I believe this is a largely positive/negative development because...*', 'Suggested structure: Body 1 – the opposing side (counter), Body 2 – the side you choose (stronger); or 2 paragraphs both supporting your view.', 'If the prompt has 2 parts (Why + positive/negative?), you must answer both.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'gap', title: 'Language for evaluating trends', instr: 'Fill in ONE word.',
      items: [
        { q: 'I believe this is a largely ___ development, as it improves access to education.', a: ['positive'] },
        { q: 'The drawbacks of this trend far ___ its benefits.', a: ['outweigh'] },
        { q: 'This shift is likely to have ___ consequences for local communities.', a: ['negative', 'serious', 'harmful', 'detrimental'] },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Read the prompt', instr: 'Prompt: *More and more people are buying goods online rather than in shops. Is this a positive or negative development?*',
      items: [
        { q: 'You need to:', options: ['Evaluate whether the trend towards online shopping is positive or negative', 'Explain why people shop online', 'List the advantages and disadvantages without giving a view'], a: 0 },
        { q: 'A good thesis:', options: ['Online shopping is popular, and many people now buy things online every day.', 'Although convenient for consumers, I believe this is a largely negative development for local high streets and the environment.'], a: 1 },
      ] },
    { bloom: 'apply', type: 'match', title: 'Positive or negative?', instr: 'Trend: *more and more young people are living alone*.', options: ['Positive', 'Negative'],
      pairs: [
        { l: 'Develops independence and life skills', r: 'Positive' }, { l: 'Increases demand for housing, pushing up rents', r: 'Negative' },
        { l: 'Greater freedom to pursue careers in other cities', r: 'Positive' }, { l: 'Higher risk of loneliness and mental health problems', r: 'Negative' },
      ] },
    { bloom: 'analyze', type: 'mcq', title: 'Consistency', instr: 'Thesis: *"This is a largely positive development."* Which conclusion fits?',
      items: [{ q: '', options: ['In conclusion, while living alone can cause loneliness, the independence it fosters makes it a positive trend overall.', 'In conclusion, living alone is a negative trend that governments should stop.', 'In conclusion, there are both advantages and disadvantages.'], a: 0 }] },
    { bloom: 'evaluate', type: 'mcq', title: 'Which outline is better?', instr: 'Prompt: *Many museums now offer virtual tours online. Is this a positive or negative development?* View: positive.',
      items: [{ q: '', options: [
        'Body 1: benefits (global access, education); Body 2: a concession (losing the real experience) followed by a rebuttal (virtual tours inspire real visits).',
        'Body 1: the history of museums; Body 2: famous museums around the world and what they contain.'], a: 0 }] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'A positive-or-negative essay', prompt: 'In many countries, the number of people working from home is increasing. Is this a positive or negative development?\n\nWrite at least 250 words.', minWords: 250, focus: ['a clear attitude', 'counter-argument', 'consistency'] },
  ],
},
{
  id: 't2k', n: 17, stage: 'task2', lessons: 'Lesson 17 · Causes – solutions · Lesson 18 · Causes – effects', title: 'Causes – Solutions & Causes – Effects',
  desc: 'Distinguish causes from effects, and make sure each solution targets a cause you have stated.',
  theory: [
    { h: 'Causes – Solutions', p: ['Body 1: 2 main causes. Body 2: solutions **matching** each cause.', 'Specific solutions: who acts, what they do, and why it works.'] },
    { h: 'Causes – Effects', p: ['Effects must be **logical** results of the trend, not causes rewritten.', 'Vocabulary: *stem from, be attributed to, give rise to, lead to, result in, as a consequence*.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Cause or effect?', instr: 'Phenomenon: *fewer and fewer young people read books*.', options: ['Cause', 'Effect'],
      pairs: [
        { l: 'The rise of short-form video entertainment', r: 'Cause' }, { l: 'Declining attention spans', r: 'Effect' },
        { l: 'Heavy academic workloads leave little free time', r: 'Cause' }, { l: 'Weaker vocabulary and writing skills', r: 'Effect' },
        { l: 'Fewer libraries in local communities', r: 'Cause' },
      ] },
    { bloom: 'understand', type: 'gap', title: 'Cause–effect vocabulary', instr: 'Fill in ONE word.',
      items: [
        { q: 'Obesity among children largely ___ from poor diets and inactivity.', a: ['stems', 'results'] },
        { q: 'Rising rents have given ___ to a housing crisis.', a: ['rise'] },
        { q: 'This trend can be ___ to the growth of remote work.', a: ['attributed'] },
        { q: 'As a ___, many small shops have closed.', a: ['consequence', 'result'] },
      ] },
    { bloom: 'apply', type: 'match', title: 'Match causes with solutions', instr: 'Problem: *many young people are unemployed despite having university degrees*.',
      pairs: [
        { l: 'University courses do not match employer needs', r: 'Universities partner with companies to design curricula and internships' },
        { l: 'Graduates lack practical experience', r: 'Compulsory work placements during degree programmes' },
        { l: 'Too many students choose the same few majors', r: 'Career guidance in secondary schools on in-demand fields' },
      ] },
    { bloom: 'analyze', type: 'mcq', title: 'Logical errors', instr: 'Prompt: *Why are fewer people reading books? What are the effects?*',
      items: [
        { q: 'What is wrong with "One effect is that people prefer watching videos."?', options: ['It is a cause, not an effect', 'It is ungrammatical', 'There is no problem'], a: 0 },
        { q: 'The solution "Governments should build more parks" for the reading problem:', options: ['Is unrelated to any cause', 'Is very suitable'], a: 0 },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Which effects paragraph is more convincing?', instr: 'Trend: *people moving from rural areas to cities*.',
      items: [{ q: '', options: [
        'One effect is that cities are big. Another effect is that villages are small. This is bad.',
        'One major consequence is the strain placed on urban infrastructure. As cities absorb thousands of newcomers each year, public transport and housing struggle to keep pace, leading to overcrowding and rising rents.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'A causes–effects essay', prompt: 'Fewer young people today are choosing to read books for pleasure. What are the causes of this, and what effects might it have on society?\n\nWrite at least 250 words.', minWords: 250, focus: ['distinguishing cause and effect', 'cause–effect vocabulary', 'example'] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'A causes–solutions essay', prompt: 'In many cities, traffic congestion is getting worse. What are the causes of this problem, and what measures could be taken to solve it?\n\nWrite at least 250 words.', minWords: 250, focus: ['solutions that match the causes', 'specificity'] },
  ],
},
{
  id: 't2l', n: 20, stage: 'task2', lessons: 'Lesson 20 · Essay analysis · Lesson 21 · Task 2 checklist', title: 'Analysing model essays & the Task 2 checklist',
  desc: 'Read essays like an examiner, then check your own essay with the checklist before submitting.',
  theory: [
    { h: 'Check-list Task 2', p: ['Have you answered **every part** of the prompt?', 'Is your position clear in the introduction and **consistent** through to the conclusion?', 'Does each paragraph have **one main idea** + an explanation + an example?', 'Is the linking natural, without overused linkers?', 'Are the collocations correct, with no "risky" words?', 'Are there any grammar or spelling errors? Have you written 250 words?'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'order', title: 'The order for analysing an essay', instr: 'Put the checking steps in order.',
      items: [{ words: 'check the thesis answers the question / check each body has one clear idea / check explanations and examples / check linking and vocabulary / check grammar and spelling' }] },
    { bloom: 'understand', type: 'match', title: 'Checklist for this essay', instr: 'Prompt: *Some people think governments should spend money on space exploration. Others think this money should be spent on problems on Earth. Discuss both views and give your opinion.*', options: ['Met', 'Not met'],
      passage: 'Space exploration is a very hot topic nowadays. Many countries spend lots of money on it.\n\nFirstly, space is interesting. Moreover, we can find new planets. Furthermore, technology develops.\n\nIn conclusion, space is good, but also we should help poor people and protect animals and build schools.',
      pairs: [
        { l: 'Discusses both views', r: 'Not met' }, { l: 'Gives a clear personal opinion', r: 'Not met' },
        { l: 'Each idea has an explanation + an example', r: 'Not met' }, { l: 'Academic tone', r: 'Not met' }, { l: 'At least 250 words', r: 'Not met' },
      ] },
    { bloom: 'apply', type: 'rewrite', title: 'Fix using the checklist', instr: 'Rewrite the introduction of the essay above so that it meets the checklist.',
      items: [{ q: 'Space exploration is a very hot topic nowadays. Many countries spend lots of money on it.', a: ['While some argue that public funds should support space exploration, others believe they should be used to tackle pressing problems on Earth. In my view, although space research brings long-term benefits, urgent issues at home deserve priority.'] }] },
    { bloom: 'analyze', type: 'mcq', title: 'Analyse a model essay', instr: 'Paragraph: *"Granted, space research is costly. However, it has produced technologies we now rely on daily, such as satellite navigation and weather forecasting. Without such investment, these innovations might have taken decades longer to emerge."*',
      items: [
        { q: 'The function of "Granted, space research is costly":', options: ['Concession', 'Thesis', 'Example'], a: 0 },
        { q: '"satellite navigation and weather forecasting" is:', options: ['A specific example', 'A conclusion'], a: 0 },
        { q: 'The last sentence serves to:', options: ['State a consequence that strengthens the argument', 'Introduce an unrelated new idea'], a: 0 },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'What band would the examiner give?', instr: 'Evaluate the Task Response of the essay in the "Checklist for this essay" exercise.',
      items: [{ q: '', options: ['Around band 4–5: it discusses only one side, ideas are undeveloped, and the conclusion adds new ideas', 'Band 7: the main ideas are covered, and the language is mostly accurate', 'Band 8: a wide range of ideas and language, with only rare errors'], a: 0 }] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'A complete essay + self-checklist', prompt: 'Some people think governments should spend money on space exploration. Others believe this money should be spent on solving problems on Earth. Discuss both views and give your own opinion.\n\nWrite at least 250 words. When you finish, check your essay against the checklist before submitting it for grading.', minWords: 250, focus: ['check-list Task 2', 'discussion', 'clear position'] },
  ],
},
]);
})();
