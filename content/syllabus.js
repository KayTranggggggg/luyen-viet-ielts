/* Bổ sung theo đề cương chi tiết 60 Lesson (Kay cung cấp). Ví dụ, số liệu và đề bài tự soạn. */
(function () {
const U = id => window.UNITS.find(u => u.id === id);
const addEx = (id, ex) => { const u = U(id); const i = u.exercises.findIndex(e => e.bloom === 'create'); i < 0 ? u.exercises.push(ex) : u.exercises.splice(i, 0, ex); };
const addCreate = (id, ex) => U(id).exercises.push(ex);
const setTheory = (id, h, p) => { const u = U(id); const t = u.theory.find(x => x.h === h); t ? (t.p = p) : u.theory.push({ h, p }); };

/* ================= GRAMMAR ================= */
const g1 = U('g1');
g1.title = 'Sentence structure: sentence elements & sentence types';
g1.theory.unshift(
  { h: 'Sentence elements (Lesson 1)', p: ['**S** – Subject: *Young people*', '**V** – Verb (main verb): *spend*', '**O** – Object: *a lot of time*', '**C** – Complement (after be/seem/become): *is **expensive***', '**A** – Adverbial (time, place, manner): *on social media every day*'] },
  { h: 'Find the head noun & subject–verb agreement', p: ['Long subject → find the **head noun** and make the verb agree with it: *The **number** of students who study abroad **has** risen.*', 'Ignore prepositional phrases and relative clauses when finding the head noun: *The **cost** of living in big cities **is** high.*'] });
addEx('g1', { bloom: 'remember', type: 'match', title: 'Label the sentence elements', instr: 'Sentence: *Many young people in Vietnam spend most of their free time online.*', options: ['S', 'V', 'O', 'A'],
  pairs: [{ l: 'Many young people in Vietnam', r: 'S' }, { l: 'spend', r: 'V' }, { l: 'most of their free time', r: 'O' }, { l: 'online', r: 'A' }] });
addEx('g1', { bloom: 'apply', type: 'gap', title: 'Head nouns & verb agreement', instr: 'Put the verbs in brackets into the present simple.',
  items: [
    { q: 'The quality of public schools in rural areas ___ (be) still low.', a: ['is'] },
    { q: 'The number of people who work from home ___ (continue) to grow.', a: ['continues'] },
    { q: 'Students who live far from campus ___ (spend) more on transport.', a: ['spend'] },
    { q: 'Each of these policies ___ (have) clear drawbacks.', a: ['has'] },
  ] });

const g14 = U('g14');
g14.title = 'Sentence errors: fragments, run-ons, comma splices & dangling participles';
g14.lessons = 'Lesson 13 · Sentence problems';
g14.theory.push({ h: 'Dangling / misplaced modifier', p: ['A reduced phrase at the start of a sentence must share **the same subject** as the main clause.', '✗ *Having moved to the city, the cost of living shocked her.* → ✓ *Having moved to the city, she was shocked by the cost of living.*', 'Misplaced modifiers: ✗ *She almost spent all her savings.* → ✓ *She spent almost all her savings.*'] });
addEx('g14', { bloom: 'analyze', type: 'mcq', title: 'Dangling participles', instr: 'Choose the CORRECT sentence.',
  items: [
    { q: '', options: ['Built in 1890, the bridge needs urgent repairs.', 'Built in 1890, engineers say the bridge needs repairs.'], a: 0, ex: 'Sentence 2: "engineers" were not built in 1890.' },
    { q: '', options: ['After finishing the course, a job was easy to find.', 'After finishing the course, graduates found jobs easily.'], a: 1 },
    { q: '', options: ['Walking along the beach, plastic waste was everywhere.', 'Walking along the beach, we saw plastic waste everywhere.'], a: 1 },
  ] });

const g15 = U('g15');
g15.lessons = 'Lesson 14 · Wrap-up'; g15.title = 'Wrap-up: breaking down sentence structure in a paragraph';

window.UNITS.push({
  id: 'g16', n: 15, stage: 'grammar', lessons: 'Lesson 15 · Grammar Nazi 1 · Lesson 16 · Grammar Nazi 2 · Lesson 17 · Grammar Nazi 3 · Lesson 18 · Grammar Nazi at its best',
  title: 'Grammar Nazi 1–4: error correction & self-editing',
  desc: 'Four rounds of correction on learner-style paragraphs: (1) articles, singular/plural, tenses, subject–verb agreement; (2) ungrammatical linkers, relative clauses, fragments, wordiness; (3) upgrading choppy simple sentences into complex ones; (4) self-checking.',
  theory: [
    { h: 'Grammar Nazi 1', p: ['Articles: *a/an* for singular countable nouns mentioned first; no *the* with nouns used in general.', 'Singular/plural: *many **students***, *much **information***.', 'Tenses & subject–verb agreement.'] },
    { h: 'Grammar Nazi 2', p: ['Ungrammatical linkers: ✗ *Despite it is expensive* → ✓ *Despite **being** expensive / Although it is expensive*.', '✗ *Because of people drive more* → ✓ *Because people drive more / Because of **increased driving***.', 'Relative clauses: ✗ *the city which I live* → ✓ *the city **where** I live / in which I live*.', 'Fragments and wordy sentences: cut repetition, merge ideas.'] },
    { h: 'Grammar Nazi 3', p: ['Upgrading: several simple sentences → one complex or reduced sentence: *Cities are crowded. They attract young workers.* → *Although crowded, cities attract young workers.*'] },
    { h: 'Grammar Nazi at its best: self-editing', p: ['Reread **each sentence**: does it have a main S + V?', 'Check in rounds: verbs → nouns/articles → linkers → punctuation.', 'Any risky sentence you are unsure of → rewrite it with a safer structure.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Which round does the error belong to?', instr: 'Classify the errors.', options: ['Nazi 1: articles/number/tense', 'Nazi 2: linkers/relative clauses/fragments', 'Nazi 3: choppy simple sentences'],
      pairs: [
        { l: 'The technology changes our life.', r: 'Nazi 1: articles/number/tense' },
        { l: 'Despite it is cheap, few people use it.', r: 'Nazi 2: linkers/relative clauses/fragments' },
        { l: 'Cars are fast. Cars are convenient. Cars pollute the air.', r: 'Nazi 3: choppy simple sentences' },
        { l: 'There are many informations online.', r: 'Nazi 1: articles/number/tense' },
        { l: 'This is the town which I grew up.', r: 'Nazi 2: linkers/relative clauses/fragments' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Why is it wrong?', instr: 'Choose the reason.',
      items: [
        { q: '*Because of the price is high, people buy less.*', options: ['because of + noun, not + clause', 'The tense is wrong', 'Missing article'], a: 0 },
        { q: '*Although the city is crowded, but it is exciting.*', options: ['Two conjunctions for one link', 'Agreement error', 'A comma is missing'], a: 0 },
        { q: '*The government should invests in education.*', options: ['A modal is followed by the bare infinitive', 'Wrong article before the noun', 'It is a fragment with no subject'], a: 0 },
      ] },
    { bloom: 'apply', type: 'rewrite', title: 'Nazi 1 & 2: correct the sentences', instr: 'Correct all the errors in each sentence.',
      items: [
        { q: 'The children nowadays spends too much time on the internet.', a: ['Children nowadays spend too much time on the internet.'] },
        { q: 'Despite of it is expensive, many family buy private car.', a: ['Despite being expensive, private cars are bought by many families.', 'Although it is expensive, many families buy a private car.'] },
        { q: 'Students who they study abroad gains independence.', a: ['Students who study abroad gain independence.'] },
      ] },
    { bloom: 'analyze', type: 'rewrite', title: 'Nazi 3: upgrade simple sentences', instr: 'Combine into ONE complex or reduced sentence, keeping the meaning.',
      items: [
        { q: 'Online courses are cheap. They are flexible. Many working adults choose them.', a: ['Being cheap and flexible, online courses are chosen by many working adults.', 'Because online courses are cheap and flexible, many working adults choose them.'] },
        { q: 'The factory closed in 2010. It was replaced by a shopping centre.', a: ['The factory, which closed in 2010, was replaced by a shopping centre.', 'After closing in 2010, the factory was replaced by a shopping centre.'] },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Which version is error-free?', instr: 'Choose the error-free paragraph.',
      items: [{ q: '', options: [
        'Nowadays, a number of young people prefers to living alone. Because they want freedom.',
        'Nowadays, a growing number of young people prefer to live alone because they value their independence.',
        'Nowadays, the number of young people prefer living alone, it is because freedom.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'grammar', title: 'Grammar Nazi at its best: self-check', prompt: 'Correct and rewrite the paragraph below so that it is grammatical and coherent (keep the ideas):\n\n*"Nowadays the technology is develop very fast. Many people uses smartphone everyday, it make them lazy to read the book. Despite smartphones is useful. The government should encourages people read more, for example build more library in the countryside which people can borrow book free."*', minWords: 50, focus: ['articles, number, tense', 'grammatical linkers', 'fragments, comma splices', 'relative clauses'] },
  ],
});

/* ================= TASK 1 ================= */
setTheory('t1a', 'Task 1 question types (from the course)', [
  '**1. Change over time**: standard 4 categories / lots of information (5+) / little information (<4) / 2 years / future / with a Total.',
  '**2. No change over time**: standard / 2 subjects / lots of information.',
  '**3. Mixed charts**: two charts of different types.',
  '**4. Maps**: 1 map or 2 maps.',
  '**5. Process**: natural process or manufacturing process.',
  '**6. Describe how something works**: the structure and working principle of a device.',
  '**7. Super odd questions**: rare question types.',
  'In total there are about **12 specific types**, each with its own formula in the following lessons.']);
U('t1a').theory.push({ h: 'Check-list Task 1 (Lesson 21)', p: ['1. Is the introduction paraphrased properly?', '2. Is the overview clear and **free of figures**?', '3. Is any information, unit or time point wrong?', '4. Are there any risky structures?', '5. Is there any risky vocabulary?', '6. Are there basic spelling or grammar errors (verb forms, singular/plural)?'] });
{
  const ck = U('t1a').exercises.find(e => e.title.startsWith('Check-list Task 1'));
  ck.passage = 'The line graph show the number of commuters by car, bus and bicycle in Riverton between 2000 and 2020.\n\nOverall, car was most popular, at 65,000 people in 2020, and bicycle rose from 8,000 to 40,000.\n\nIn 2000 there was 52,000 car users, and this number skyrocketed to 65,000 in 2005. Bus users declined to 25,000 in 2020, because people care more about health now. Bicycle users were 8,000 in 2000 and reached 40 in 2020.';
  ck.pairs = [
    { l: '1. Is the introduction paraphrased properly?', r: 'Not met' },
    { l: '2. Is the overview clear and free of figures?', r: 'Not met' },
    { l: '3. No wrong information, units or time points?', r: 'Not met' },
    { l: '4. No risky structures / vocabulary?', r: 'Not met' },
    { l: '5. No basic spelling / grammar errors?', r: 'Not met' },
  ];
  ck.ex = 'The introduction copies the prompt and misuses "show"; the overview contains figures; "reached 40" lacks the unit (40,000), and 65,000 was in 2010, not 2005, according to the chart; "skyrocketed" for a small rise is risky vocabulary, and explaining reasons goes beyond the chart; "there was 52,000 car users" is an agreement error.';
}

setTheory('t1b', 'Paraphrasing the subject (Lesson 4)', ['Countable: *the number / quantity of + plural N*, or *how many...*', 'Uncountable: *the amount of + N*, or *how much...*', 'Percentages: *the proportion / percentage / share of...*', 'Degree: *dramatically, substantially, steadily, marginally, progressively*.', 'Prepositions: *stand at*, *increase **by** 10* (the amount added) vs *increase **to** 40* (the end point), *fluctuate **between** X **and** Y*, *in the range **from** X **to** Y*.']);
addEx('t1b', { bloom: 'apply', type: 'gap', title: 'Paraphrasing & prepositions with figures', instr: 'Fill in ONE word.',
  items: [
    { q: 'the ___ of electricity consumed (electricity: uncountable)', a: ['amount', 'quantity'] },
    { q: 'the ___ of households with internet access (%)', a: ['proportion', 'percentage', 'share'] },
    { q: 'Prices fluctuated ___ $3 and $4 throughout the decade.', a: ['between'] },
    { q: 'Sales increased ___ 20%, from 50 to 60 units. (the amount of increase)', a: ['by'] },
    { q: 'The figure stood ___ 2 million in 2010.', a: ['at'] },
    { q: '___ much water was used → the amount of water used', a: ['how'] },
  ] });

setTheory('t1i', 'Structures for linking figures', [
  '**Pattern 1 (Overview)**: *There was an increase in..., with X witnessing the most dramatic rise. In addition, Y generally had the highest figures.*',
  '**Pattern 2**: *The number / proportion / amount of... started at..., after which it experienced a rise to... in..., before ending the period at...*',
  '**Pattern 3**: *[Figure]..., with a subsequent increase / decrease / levelling off / fluctuation... and a final...*',
  '**Pattern 4**: *The figure for... was at..., followed by a slow / significant increase to...*',
  '**Pattern 5**: *The figure for... + V, and (but) + V.*',
  '**Pattern 6**: *Similar / Opposite changes can be seen in the figure(s) for..., which...*',
  '**Pattern 7**: *The figure for... + change, ending / reaching...*']);
addEx('t1i', { bloom: 'apply', type: 'gap', title: 'Patterns 1 & 7', instr: 'Fill in ONE word.', chart: U('t1i').exercises[0].chart,
  items: [
    { q: 'There was an increase in coffee consumption in three countries, with Vietnam ___ the most dramatic rise.', a: ['witnessing', 'seeing', 'experiencing'] },
    { q: 'In ___, Finland generally had the highest figures.', a: ['addition'] },
    { q: 'The figure for Japan rose slowly, ___ 3.7 kg in 2020.', a: ['reaching', 'ending'] },
  ] });

const j = U('t1j');
j.title = 'Change: grouping paragraphs by number of categories (4 / 5+ / <4)';
setTheory('t1j', 'Principles', [
  '**Exactly 4 categories (Lesson 5)**: split 2–2 by trend (rising vs falling) or by level (high vs low), or split the time period in half.',
  '**5+ categories (Lesson 6)**: do not describe each one; group those with similar trends, merge minor ones, and give only key figures to finish in 20 minutes.',
  '**Fewer than 4 categories (Lesson 7)**, e.g. 2–3 lines: split by **time period**, cutting at **turning-point years**, to explore each change in depth.']);
{
  const m = j.exercises.find(e => e.title === 'Suitable grouping');
  m.pairs = [
    { l: 'A line graph with exactly 4 lines: 2 rising, 2 falling', r: 'By trend / level' },
    { l: 'A table of 8 countries × 3 years', r: 'Group and select key features' },
    { l: 'A line graph with 2 lines, 1990–2020, both changing direction in 2008', r: 'By time period' },
    { l: 'A bar chart of 4 products: 2 high, 2 low', r: 'By trend / level' },
    { l: 'A bar chart of 7 spending categories', r: 'Group and select key features' },
  ];
  const ev = j.exercises.find(e => e.title === 'Which grouping is better?');
  ev.instr = 'A line graph with 2 lines: house prices and rents 1990–2020; both rose slowly in 1990–2005, fell in 2008, then rose sharply in 2010–2020.';
  ev.items[0].options[0] = 'Body 1: 1990–2008 (slow rise then fall); Body 2: 2008–2020 (recovery and sharp rise), each paragraph covering both lines';
}

setTheory('t1d', 'Two time points (Lesson 8)', ['Combine **trend language** (rose, halved, doubled) with **comparative language** (the largest, twice as much as) across categories.', 'There is no trend in between → do not use *fluctuate, peak*.']);
setTheory('t1k', 'Total', ['Put the **Total in the Overview** and **the first sentence of Body 1** as a frame of reference, then move on to each component.', 'It can be used to calculate shares: *food accounted for almost half of the total*.']);
addEx('t1k', { bloom: 'analyze', type: 'mcq', title: 'Where does the Total go?', instr: 'A waste table with a Total row.',
  items: [{ q: 'The correct structure according to the course:', options: ['The overview gives the Total trend; Body 1 opens with the Total, then the rising categories; Body 2 covers the falling categories', 'Ignore the Total, because each category is already given separately', 'Mention the Total only in the very last sentence of the report'], a: 0 }] });

setTheory('t1c', 'A set of comparative structures for ONE category', [
  '**A far exceeded B, with respective figures being X and Y.**',
  '**A was X, compared to only Y for B.**',
  '**While X of A did something, only Y of B did so.** / *whereas*',
  '**The figures for A, B and C were X, Y and Z, in that order.**',
  '**The figures for A and B were X and Y respectively.**',
  '**A was X, and the figure for B was considerably lower, at Y.**',
  '**A was double / three times that of B.**']);
setTheory('t1c', 'No-change structure (Lessons 11–12)', ['Intro → paraphrase.', '**Overview**: state only **Differences** (largest/smallest, biggest gap) and **Similarities** (which groups are alike). No figures.', 'Body 1: the highest / most striking categories; Body 2: the rest.']);
addEx('t1c', { bloom: 'evaluate', type: 'mcq', title: 'No-change overview: differences & similarities', instr: 'The exercise-time-by-age table (above). Choose the overview that covers both Differences and Similarities.',
  items: [{ q: '', options: [
    'Overall, the youngest group exercised the most, while the oldest did the least; the two middle age groups recorded broadly similar figures.',
    'Overall, people aged 16–24 exercised 5 hours, and those over 65 exercised 1.5 hours.',
    'Overall, exercise is important for all ages.'], a: 0 }] });

const l = U('t1l');
setTheory('t1l', '2 items', ['A chart comparing 2 subjects (e.g. Men vs Women) across several criteria.', 'Overview: which subject is higher on most criteria + the exceptions.', '**Body 1**: criteria where **A > B**; **Body 2**: criteria where **B ≥ A**. Each sentence compares the two subjects directly.']);
const BAR_MF = { kind: 'bar', title: 'Hours per week spent on leisure activities, by gender (2023)', unit: 'hours', labels: ['Sport', 'Gaming', 'Reading', 'Socialising', 'TV'], series: [{ name: 'Men', data: [4.5, 3.8, 1.6, 4.0, 9.5] }, { name: 'Women', data: [2.4, 1.1, 3.2, 4.6, 9.4] }] };
addEx('t1l', { bloom: 'apply', type: 'match', title: 'Splitting the body by criteria', instr: 'A Men vs Women chart. Put each activity in the correct body paragraph.', chart: BAR_MF, options: ['Body 1: Men > Women', 'Body 2: Women ≥ Men'],
  pairs: [{ l: 'Sport', r: 'Body 1: Men > Women' }, { l: 'Gaming', r: 'Body 1: Men > Women' }, { l: 'Reading', r: 'Body 2: Women ≥ Men' }, { l: 'Socialising', r: 'Body 2: Women ≥ Men' }, { l: 'TV', r: 'Body 2: Women ≥ Men' }],
  ex: 'TV is almost equal (9.5 and 9.4), so it belongs in the "roughly equal / Women ≥ Men" paragraph and should be described as "almost identical".' });
addCreate('t1l', { bloom: 'create', type: 'write', kind: 'task1', title: 'Write a 2-item report: Men vs Women', prompt: 'The chart below shows the average number of hours per week men and women spent on five leisure activities in 2023.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: BAR_MF, minWords: 150, focus: ['Body 1: Men > Women', 'Body 2: Women ≥ Men', 'direct comparison'] });

setTheory('t1g', 'Strategy', ['Intro: paraphrase both charts in one sentence (*The line graph shows..., while the pie chart illustrates...*).', 'Overview: **one main point for each chart**.', 'Body 1: the first chart; Body 2: the second chart. Use the right language for each chart (Change or No change).']);
U('t1f').theory.push({ h: 'Extra vocabulary & paragraphing (Lesson 16)', p: ['Directions: *northwest, to the right of, opposite, adjacent to*.', 'Changes: *expand, demolish, knock down, make way for, convert into, construct, remain unchanged*.', '**1 map** (a proposal): organise by area. **2 maps**: organise by geographical area or by time point.'] });
addEx('t1f', { bloom: 'apply', type: 'gap', title: 'Directions & changes', instr: 'Fill in ONE word.',
  items: [
    { q: 'The car park is ___ to the library, sharing the same wall.', a: ['adjacent', 'next'] },
    { q: 'The old houses were knocked down to make ___ for a hospital.', a: ['way'] },
    { q: 'The warehouse was ___ into apartments.', a: ['converted', 'turned'] },
    { q: 'The school, in the ___ corner of the map, remained unchanged.', a: ['northwest', 'northeast', 'southwest', 'southeast', 'north-west', 'north-east', 'south-west', 'south-east'] },
  ] });

U('t1e').theory.push({ h: 'Man-made vs natural (Lessons 17–18)', p: ['**Manufacturing**: passive + sequencing linkers: *At the beginning of the process, After being + V3, The process continues with, Once..., Subsequently*.', '**Natural**: **active voice**, biological vocabulary (*hatch, mature, develop into, feed on*), usually a **closed cycle** (cyclical process).'] });
addEx('t1e', { bloom: 'apply', type: 'gap', title: 'Process linkers', instr: 'Fill in ONE word.',
  items: [
    { q: 'At the ___ of the process, used bottles are collected.', a: ['beginning', 'start'] },
    { q: 'After ___ washed, the bottles are crushed.', a: ['being'] },
    { q: 'The process ___ with the melting of the crushed glass.', a: ['continues'] },
    { q: '___ the glass has cooled, it is ready to be reused.', a: ['once'] },
  ] });

setTheory('t1m', 'How something works', ['Overview: how many main parts the device has and how it works (cyclical or linear, what energy source).', '**Body 1: structure / components**: *consists of, is composed of, is made up of, is equipped with, is attached to*.', '**Body 2: how it works**: present simple, active for parts (*the panel absorbs*), passive for what is acted on (*water is heated*).', 'Vocabulary: *absorb, convert into, flow through, circulate, be connected to, be stored in*.']);
{
  const m = U('t1m').exercises.find(e => e.title === 'Dividing the body');
  m.items[0].options = ['Body 1: structure (collector panel, pipes, tank, backup heater); Body 2: how the cycle works', 'One paragraph for each step of the diagram', 'Body 1: odd-numbered steps; Body 2: even-numbered steps'];
}
addEx('t1m', { bloom: 'apply', type: 'gap', title: 'Language for describing structure', instr: 'Fill in ONE word.',
  items: [
    { q: 'The system ___ of four main parts.', a: ['consists'] },
    { q: 'The heater is composed ___ a panel, a set of pipes and a tank.', a: ['of'] },
    { q: 'The tank is equipped ___ a backup electric heater.', a: ['with'] },
    { q: 'The panel is ___ to the tank by two pipes.', a: ['connected', 'attached', 'linked'] },
  ] });

/* ================= TASK 2 ================= */
U('t2a').theory.push({ h: 'Task Response by band (Lesson 1)', p: ['**Band 5**: addresses the task only partially; a position is given but unclear; few ideas, poorly developed.', '**Band 6**: addresses all parts, though some more fully than others; a position is given but the conclusion may be unclear.', '**Band 7**: addresses all parts; **a clear position throughout**; main ideas are extended but sometimes over-generalised.', '**Band 8+**: addresses the task fully and in depth; ideas are well developed, with no over-generalisation.'] });
addEx('t2a', { bloom: 'understand', type: 'match', title: 'Descriptions ↔ Task Response bands', instr: 'Match each description with a band.', options: ['Band 5', 'Band 6', 'Band 7', 'Band 8+'],
  pairs: [
    { l: 'Answers only one of the two questions in the prompt', r: 'Band 5' },
    { l: 'Covers all parts but some thinly; the conclusion is unclear', r: 'Band 6' },
    { l: 'A clear position throughout, sometimes over-generalised', r: 'Band 7' },
    { l: 'Ideas developed in depth with specific examples, no over-generalisation', r: 'Band 8+' },
  ] });

setTheory('t2f', 'Grammatical Range & Accuracy', ['A flexible mix of simple and complex sentences (relative clauses, conditionals, passives, participles).', '**Punctuation**: a comma after an initial subordinate clause; a **semicolon** to join two closely related independent clauses (*Prices rose; demand fell.*); a **colon** before a list/explanation.', 'Band 7: most sentences are **error-free**. Accuracy matters more than length.']);
setTheory('t2f', 'Lexical Resource', ['Natural **collocations**: *tackle a problem, pose a threat, a heavy burden*.', 'Topic-specific vocabulary.', 'Paraphrase to avoid repetition, but **do not use overly bookish, archaic or out-of-context words** (*utilise* for every *use*, *myriad* in the wrong place).']);
addEx('t2f', { bloom: 'apply', type: 'mcq', title: 'Punctuation (GRA)', instr: 'Choose the correctly punctuated sentence.',
  items: [
    { q: '', options: ['Fuel prices rose sharply; as a result, fewer people drove to work.', 'Fuel prices rose sharply, as a result fewer people drove to work.'], a: 0 },
    { q: '', options: ['Cities face two problems: congestion and pollution.', 'Cities face two problems; congestion and pollution.'], a: 0 },
    { q: '', options: ['Although online learning is flexible it can feel isolating.', 'Although online learning is flexible, it can feel isolating.'], a: 1 },
  ] });

setTheory('t2b', '3 types of body paragraph (from the course)', [
  '**1 idea (Lesson 5)**: Topic sentence (1 idea) → **Explain** (why) → **Discuss / Example** (a specific example, or a contrasting one) → **Mini conclusion / Link**.',
  '**2 ideas (Lesson 6)**: Topic sentence (general) → **Supporting idea 1** → Discuss (Explain / Result / Example) → **Supporting idea 2** → Discuss (Explain / Result / Example).',
  '**Counter-argument (Lesson 7)**: see the Counter-argument unit.']);
addEx('t2b', { bloom: 'apply', type: 'order', title: 'Order a 2-idea paragraph', instr: 'Prompt: *Newspapers should publish more positive stories.* Put the 2-idea paragraph in order.',
  items: [{ words: 'There are two main reasons why more good news would benefit readers. / First, uplifting stories can reduce the anxiety caused by constant reports of crime and disaster. / Readers who feel less overwhelmed are more likely to stay informed rather than avoid the news entirely. / Second, positive stories can inspire people to act. / A report on a successful local recycling scheme, for example, may encourage other communities to copy it.' }] });

setTheory('t2g', 'Structures', ['**Point**: *Granted, one might argue that* [the opposing view].', '**Explain**: *This is predicated on the assumption that...* (explain the opposing side\'s reasoning).', '**Counter / Rebuttal**: *However, this line of reasoning is not sound because...*', 'End the paragraph by linking back to your own view. Best used in **Opinion** essays when aiming for band 8.']);
addEx('t2g', { bloom: 'remember', type: 'gap', title: 'The course\'s counter-argument framework', instr: 'Fill in ONE word.',
  items: [
    { q: '___, one might argue that printed books will soon disappear.', a: ['granted'] },
    { q: 'This is ___ on the assumption that everyone prefers digital devices.', a: ['predicated', 'based'] },
    { q: 'However, this line of ___ is not sound because many readers still value physical copies.', a: ['reasoning'] },
  ] });

const h = U('t2h');
h.title = 'Big no-nos: 12 things to avoid in Task 2';
h.theory = [{ h: '12 no-nos (Lesson 8)', p: [
  '1. No contractions (*don\'t, can\'t, won\'t*).',
  '2. No overly long sentences (more than 35–40 words).',
  '3. No 3–4 short simple sentences in a row.',
  '4. No overly long introductions or conclusions (Intro 2 sentences, Conclusion 1–2 sentences).',
  '5. Do not list ideas without explaining them; the body and conclusion must not contradict each other.',
  '6. No sentences without a main verb or an independent clause (fragments).',
  '7. Do not leave out the introduction or the conclusion.',
  '8. Do not merge 2 body paragraphs into 1.',
  '9. Keep lists parallel (*a, b, and/or c*).',
  '10. Do not use *...* or *etc.* → use *such as A and B*.',
  '11. No informal language, slang or overused idioms.',
  '12. Do not start a sentence with FANBOYS (*For, And, Nor, But, Or, Yet, So*) after a full stop.'] },
  { h: 'Also: common thinking errors', p: ['Memorised openings unrelated to the prompt; absolute generalisations (*everyone, always*); invented research figures.'] }];
h.exercises.unshift(
  { bloom: 'remember', type: 'match', title: 'Which no-no does this sentence break?', instr: 'Choose the no-no.', options: ['Contraction', 'Etc. / ellipsis', 'FANBOYS at the start', 'A string of short simple sentences', 'Faulty parallelism', 'Informal word / idiom'],
    pairs: [
      { l: 'Governments can\'t solve this alone.', r: 'Contraction' },
      { l: 'Cities offer jobs, hospitals, schools, etc.', r: 'Etc. / ellipsis' },
      { l: 'Cars are convenient. But they pollute the air.', r: 'FANBOYS at the start' },
      { l: 'Tourism is good. It brings money. It creates jobs. It helps culture.', r: 'A string of short simple sentences' },
      { l: 'Cycling is cheap, healthy and it protects the environment.', r: 'Faulty parallelism' },
      { l: 'Online classes are a piece of cake for most kids.', r: 'Informal word / idiom' },
    ] },
  { bloom: 'apply', type: 'rewrite', title: 'Correct using the 12 no-nos', instr: 'Rewrite each sentence so that it follows the rules.',
    items: [
      { q: 'People don\'t read newspapers anymore. And they get news from social media, TV, etc.', a: ['People no longer read newspapers, and they now get news from sources such as social media and television.'] },
      { q: 'Cars are fast. Cars are comfortable. Cars are expensive.', a: ['Although cars are fast and comfortable, they are expensive.'] },
      { q: 'Remote work saves time, reduces stress and it is cheaper.', a: ['Remote work saves time, reduces stress and lowers costs.'] },
    ] });

const i = U('t2i');
i.lessons = 'Lesson 9 · Should questions · Lesson 12 · A better than B · Each is better for a certain group';
i.title = 'Opinion: "Should", "A better than B" & "Each is better for a certain group"';
setTheory('t2i', 'Should questions', ['Prompt: *The government / people should... To what extent do you agree or disagree?*', 'Fully agree: **2 body paragraphs giving 2 benefits**; or disagree: 2 paragraphs giving 2 reasons against.', 'You can agree with conditions: *should be required, but only for...*']);
setTheory('t2i', 'A better than B', ['Compare A and B **directly** on the same criteria; do not write only about A.', 'Choose one side as better, or use a **counter-argument** for the other side.']);
setTheory('t2i', 'Better for a certain group', ['Advanced argument: **each option is better for a different group of people**.', 'Sample frame: *A is better for [group 1] because..., whereas for most [group 2], B remains the better choice because...*', 'In the conclusion, state which group is **the majority** so that you still have an overall position.']);
addEx('t2i', { bloom: 'analyze', type: 'mcq', title: '"Each is better for a certain group"', instr: 'Prompt: *Studying online is better than attending classes in person. Agree or disagree?*',
  items: [{ q: 'An outline using "each side suits a different group":', options: [
    'Body 1: online study suits working adults and people in remote areas because it is flexible; Body 2: for most school students, face-to-face classes remain better because they need discipline and interaction → conclusion: overall, disagree',
    'Body 1: online study is cheap and flexible; Body 2: online study is fast and convenient → conclusion: online study is better',
    'Body 1: the history of online learning; Body 2: well-known online learning platforms and how they work'], a: 0 }] });

const c = U('t2c');
c.lessons = 'Lesson 10 · Opinion: "The only way" – No!';
c.title = 'Opinion: Agree/Disagree & "The only way" – No!';
c.theory.push({ h: '"The only way" – No! (Lesson 10)', p: ['The prompt contains an absolute phrase *the only way / the only solution* → usually **challenge the word "only"**.', '**Body 1**: acknowledge that the solution in the prompt works (or point out its limits).', '**Body 2**: show that **other solutions** are equally effective.', 'Thesis: *Although X can help, I disagree that it is the only way to..., as Y and Z can be equally effective.*'] });
addEx('t2c', { bloom: 'analyze', type: 'mcq', title: 'Outline for "The only way"', instr: 'Prompt: *The only way to reduce obesity is to tax unhealthy food. To what extent do you agree or disagree?*',
  items: [
    { q: 'A suitable thesis:', options: ['While taxing unhealthy food may help, I disagree that it is the only way to tackle obesity, since education and better urban design can be equally effective.', 'I totally agree that tax is the only way.', 'Obesity is a big problem nowadays.'], a: 0 },
    { q: 'Body 2 should cover:', options: ['Other solutions: nutrition education in schools, more parks and cycle lanes', 'The history of taxation on unhealthy food in different countries', 'A repeat of the tax argument from Body 1 in different words'], a: 0 },
  ] });
addCreate('t2c', { bloom: 'create', type: 'write', kind: 'task2', title: 'A "The only way" essay', prompt: 'Some people say that the only way to reduce the number of young people leaving the countryside is to build more universities in rural areas. To what extent do you agree or disagree?\n\nWrite at least 250 words.', minWords: 250, focus: ['challenge the word "only"', 'Body 1: acknowledgement / limits', 'Body 2: other solutions'] });

window.UNITS.push({
  id: 't2m', n: 11, stage: 'task2', lessons: 'Lesson 11 · Opinion: "The best / The most" – No! / Yes!',
  title: 'Opinion: "The best / The most" – No! / Yes!',
  desc: 'The prompt claims something is "the best way" or "the most important factor". There are two approaches: disagree (there is a better way) or agree (show it is superior to the alternatives).',
  theory: [
    { h: 'The "No!" approach', p: ['Thesis: *Although X can be effective, I do not believe it is the best way to..., as Y is likely to bring more lasting results.*', 'Body 1: X works but has limits. Body 2: Y is better, **compared directly** with X.'] },
    { h: 'The "Yes!" approach', p: ['Thesis: *I agree that X is the most effective way to..., because...*', 'Bodies 1 & 2: two reasons X is **superior**; include a sentence comparing it with another method to prove it is "the best".', 'Avoid proving only that X is "good", because the prompt asks whether X is "the best".'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Which approach?', instr: 'Match each thesis with its approach.', options: ['No!', 'Yes!'],
      pairs: [
        { l: 'Raising fuel prices may help, but investing in public transport would be far more effective.', r: 'No!' },
        { l: 'I agree that early education is the most important factor in a child\'s success, as it shapes lifelong habits.', r: 'Yes!' },
        { l: 'Harsh punishment is not the best deterrent; rehabilitation does more to stop reoffending.', r: 'No!' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Understand the task', instr: 'Prompt: *Raising the price of fuel is the best way to solve environmental problems. Agree or disagree?*',
      items: [
        { q: 'The keyword that determines the approach:', options: ['the best way', 'environmental', 'price'], a: 0 },
        { q: 'An essay that only proves "raising fuel prices is useful":', options: ['Has not fully answered the question, because it must consider whether this is the BEST way', 'Has answered the question fully by listing the benefits'], a: 0 },
      ] },
    { bloom: 'apply', type: 'rewrite', title: 'Write theses for both approaches', instr: 'Prompt: *Talking to former prisoners is the best way to stop teenagers committing crimes.* Write a thesis following the required approach.',
      items: [
        { q: 'No! approach', a: ['Although hearing from former prisoners can be powerful, I do not believe it is the best way to prevent youth crime, as tackling poverty and providing youth programmes would have a greater impact.'] },
        { q: 'Yes! approach', a: ['I agree that talks by former prisoners are the most effective deterrent for teenagers, because their real experiences are far more convincing than warnings from teachers or parents.'] },
      ] },
    { bloom: 'analyze', type: 'mcq', title: 'A "best" comparison sentence', instr: 'Choose the best supporting sentence for the Yes! approach (prompt: *Reading is the best way to improve vocabulary*).',
      items: [{ q: '', options: [
        'Reading is good for vocabulary.',
        'Unlike word lists, which present words in isolation, reading shows how words are used in context, so learners remember them for longer.',
        'Many people like reading.'], a: 1 }] },
    { bloom: 'evaluate', type: 'mcq', title: 'Which body paragraph is more convincing?', instr: 'The No! approach to the fuel-price prompt.',
      items: [{ q: '', options: [
        'Fuel prices are high. People do not like it. The government should not do it.',
        'Higher fuel prices may discourage some driving, but in cities with poor public transport, people simply have no alternative and continue to drive. Investing in reliable buses and metro lines would therefore cut emissions far more, because it gives drivers a realistic choice.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'A "The best way" essay', prompt: 'Some people believe that the best way to improve public health is to increase the number of sports facilities. To what extent do you agree or disagree?\n\nWrite at least 250 words.', minWords: 250, focus: ['address the word "best"', 'compare with other methods', 'clear position'] },
  ],
});

const d = U('t2d');
setTheory('t2d', 'Discuss both views', ['Introduction: state the 2 views and **give your own position**.', '**Body 1**: the view you **do not support** (or support less).', '**Body 2**: the view you **agree with**.', 'Conclusion: restate your position.']);
setTheory('t2d', 'Advantages vs Disadvantages', ['"Do the advantages outweigh...?" → you must show **relative weight**.', '**Body 1**: the **weaker** side, with a rebuttal that reduces it or a way to address it (*acknowledge + address the problems*).', '**Body 2**: the **stronger** side, with convincing arguments.', '"What are the advantages and disadvantages?" → present both; a conclusion on which is greater is not required.']);
addEx('t2d', { bloom: 'analyze', type: 'mcq', title: 'Outline for "outweigh"', instr: 'Prompt: *More people now work and study from home. Do the advantages outweigh the disadvantages?* Position: the advantages are greater.',
  items: [{ q: '', options: [
    'Body 1: disadvantages (isolation, poor focus) + solutions (a fixed schedule, regular team meetings); Body 2: the greater advantages (saved commuting time, flexibility)',
    'Body 1: advantages; Body 2: more advantages; no mention of disadvantages',
    'Body 1: disadvantages; Body 2: more disadvantages; conclusion that the advantages are greater'], a: 0 }] });

setTheory('t2j', 'Approach', ['Thesis: *I believe this is a largely positive / negative development because...*', '**One-sided**: entirely positive (or negative), with the 2 body paragraphs split by **2 groups** who benefit / are harmed.', '**Balanced**: Body 1 the weaker side, Body 2 the stronger side.', 'If the prompt has 2 parts (Why + positive/negative?), you must answer both.']);
addEx('t2j', { bloom: 'analyze', type: 'mcq', title: 'Split by beneficiary group', instr: 'Prompt: *More tourists and scientists are now visiting remote mountain regions. Is this a positive or negative development?* (one-sided positive approach)',
  items: [{ q: '', options: ['Body 1: benefits for tourists (experiences, environmental awareness); Body 2: benefits for scientists (climate data, ecosystem research)', 'Body 1: benefits of mountain tourism; Body 2: its harms (pollution, crowds); conclusion: both sides are equal', 'Body 1: famous high mountains (Everest, Fansipan); Body 2: the weather in mountain areas'], a: 0 }] });

U('t2e').theory.push({ h: 'Writing better solutions (Lesson 16) & 2-part questions (Lesson 19)', p: ['Each solution **directly addresses** a problem from Body 1 and states **who acts** (the government, schools, individuals), **how**, and **what the result** is.', '2-part: **the introduction briefly answers both questions**; Body 1 answers question 1; Body 2 answers question 2.'] });
addEx('t2e', { bloom: 'apply', type: 'mcq', title: 'Introduction for a 2-part question', instr: 'Prompt: *Why do many people want to look younger? Is this a positive or negative development?*',
  items: [{ q: '', options: [
    'Many people today try to appear younger than they are. This is largely driven by media images and workplace pressure, and I believe it is a mostly negative trend.',
    'Nowadays, looking young is a hot topic. This essay will discuss it.',
    'Many people want to look younger. There are many reasons.'], a: 0 }] });

U('t2k').theory.push({ h: 'According to the course (Lessons 17–18)', p: ['Causes – Solutions: Body 1 gives **2 causes** (e.g. from family and school); Body 2 gives **2 matching solutions**.', 'Causes – Effects: Body 1 causes; Body 2 effects on **society** (the economy, careers, daily life).'] });

setTheory('t2l', 'Check-list Task 2', [
  '1. Does the conclusion **summarise the main ideas** and make your **position** clear?',
  '2. Are there spelling mistakes, risky sentences or grammar errors?',
  '3. Is there any uncertain vocabulary that should be replaced with a safer, more precise word?',
  '4. Is any idea **off-topic** or **underdeveloped**?',
  '5. Where **is a linker needed**? Where could you **remove a linker** and keep the sentence coherent and easier to read?']);
U('t2l').theory.push({ h: 'The idea-generation process (Lesson 20)', p: ['Prompt → underline the topic + task → choose a position → outline 2 body paragraphs → write topic sentences → develop support (explain, example) → choose topic vocabulary.'] });
})();
