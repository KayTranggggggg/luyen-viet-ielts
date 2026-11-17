/* Bậc nâng cao (Mức 3 – Band 8.0+) theo ma trận độ khó của khoá học. Khung câu theo khoá; câu ví dụ, số liệu, đề bài tự soạn. */
(function () {
const U = id => window.UNITS.find(u => u.id === id);
const A = (id, ex) => U(id).exercises.push(Object.assign({ lv: 3 }, ex));
const T = (id, p, h = '🚀 Towards Band 8+ (Level 3)') => U(id).theory.push({ h, p });

/* ---------- dữ liệu biểu đồ nâng cao ---------- */
const LINE_WIND = { kind: 'line', title: 'Electricity generated from wind power in four countries (TWh), 2010–2020', unit: 'TWh', labels: ['2010', '2012', '2014', '2016', '2018', '2020'],
  series: [{ name: 'Germany', data: [38, 51, 57, 79, 110, 131] }, { name: 'Spain', data: [44, 49, 52, 49, 50, 56] }, { name: 'UK', data: [10, 20, 32, 37, 57, 75] }, { name: 'Denmark', data: [8, 10, 13, 13, 14, 16] }] };
const BAR_SPORT = { kind: 'bar', title: 'Percentage of teenagers who regularly do selected activities, by gender (2022)', unit: '%', labels: ['Team sports', 'Gym', 'Dance', 'Cycling', 'Swimming'],
  series: [{ name: 'Boys', data: [34, 21, 4, 18, 15] }, { name: 'Girls', data: [13, 19, 22, 9, 16] }] };
const TABLE_DEGREE = { kind: 'table', title: 'Highest qualification held by residents of a city, by age group (%), 2021', headers: ['Age', 'University degree', 'High school', 'No qualification'],
  rows: [['18–24', '58', '38', '4'], ['25–34', '64', '31', '5'], ['35–49', '57', '33', '10'], ['50–64', '39', '35', '26'], ['65+', '18', '22', '60']] };

/* ================= GRAMMAR ================= */
T('g1', ['Level 1: *People use phones every day.* (S + V + O + A)', 'Level 2: expand the **noun phrase** with adjectives + prepositions: *The **excessive use of smartphones in classrooms** can distract students.*', 'Level 3: **academic noun phrases** (nominalisation + modifiers): *The **growing availability of low-cost flights to regional airports** has transformed domestic tourism.*']);
A('g1', { bloom: 'apply', type: 'rewrite', title: 'Expanding noun phrases further', instr: 'Rewrite each sentence, turning the subject into an **academic noun phrase** (nominalisation + preposition) while keeping the meaning.',
  items: [
    { q: 'Many people now buy things online. This has hurt small shops.', a: ['The rapid growth of online shopping has hurt many small shops.', 'The increasing popularity of online shopping among consumers has damaged small retailers.'] },
    { q: 'Cars are becoming cheaper, so more families own one.', a: ['The falling cost of private cars has led to higher rates of car ownership among families.'] },
    { q: 'Young people use social media a lot, and this affects their sleep.', a: ['Excessive use of social media among young people can disrupt their sleep.'] },
  ] });
A('g1', { bloom: 'analyze', type: 'match', title: 'Analyse an advanced sentence', instr: 'Sentence: *The increasing affordability of electric scooters in Asian cities has encouraged many commuters to abandon their motorbikes.*', options: ['S (noun phrase)', 'V', 'O', 'C (object complement)'],
  pairs: [{ l: 'The increasing affordability of electric scooters in Asian cities', r: 'S (noun phrase)' }, { l: 'has encouraged', r: 'V' }, { l: 'many commuters', r: 'O' }, { l: 'to abandon their motorbikes', r: 'C (object complement)' }] });

T('g3', ['Level 2: the present perfect for ongoing trends in Task 2: *Over the past decade, remote work **has attracted** both praise and criticism.*', 'Level 3: the **future perfect** + predictions: *Experts predict that by 2035, electric vehicles **will have overtaken** petrol cars in new sales.*']);
A('g3', { bloom: 'apply', type: 'rewrite', title: 'Present perfect & future perfect', instr: 'Rewrite each sentence as instructed in brackets.',
  items: [
    { q: 'Many cities started to ban plastic bags ten years ago and they still ban them. (present perfect, beginning with Over the last decade)', a: ['Over the last decade, many cities have banned plastic bags.'] },
    { q: 'Scientists say solar power will be cheaper than coal before 2030. (future perfect, by 2030)', a: ['Scientists predict that by 2030, solar power will have become cheaper than coal.'] },
    { q: 'The company plans that half of its delivery vans will be electric by 2028. (future perfect, passive)', a: ['The company has announced that by 2028 half of its delivery vans will have been replaced by electric ones.'] },
  ] });
A('g3', { bloom: 'evaluate', type: 'mcq', title: 'Choose the most accurate tense', instr: 'Choose the sentence with the most accurate tense.',
  items: [
    { q: '', options: ['By 2040, the city will have built three new metro lines.', 'By 2040, the city builds three new metro lines.', 'By 2040, the city has built three new metro lines.'], a: 0 },
    { q: '', options: ['Since 2015, the number of cyclists rose steadily.', 'Since 2015, the number of cyclists has risen steadily.', 'Since 2015, the number of cyclists is rising steadily.'], a: 1 },
    { q: 'Task 1, a chart covering 1990–2010:', options: ['Coal consumption has fallen sharply between 1990 and 2010.', 'Coal consumption fell sharply between 1990 and 2010.'], a: 1 },
  ] });

T('g8', ['Level 1 (a common Band 5 error): absolute claims: *Violent films **will** turn teenagers into criminals.*', 'Level 2: softening modals: *Violent films **may** encourage aggressive behaviour in some teenagers.*', 'Level 3: modal + **much/far more likely to** + passive/reduced conditional: *Teenagers exposed to such content **could be far more likely to** act aggressively **if left unsupervised**.*']);
A('g8', { bloom: 'apply', type: 'rewrite', title: 'Advanced hedging', instr: 'Rewrite each absolute claim as an **advanced hedged sentence** (modal + likely/much more likely + a conditional or passive).',
  items: [
    { q: 'Children who play online games all day will fail at school.', a: ['Children who spend most of their free time gaming could be much more likely to fall behind at school if left unsupervised.'] },
    { q: 'Banning cars from city centres will solve air pollution.', a: ['Restricting car access to city centres may significantly reduce air pollution, although it is unlikely to solve the problem on its own.'] },
    { q: 'People who work from home are lazy.', a: ['Some people working from home may find it harder to stay motivated, particularly if they lack a dedicated workspace.'] },
  ] });
A('g8', { bloom: 'evaluate', type: 'mcq', title: 'Which sentence is the most advanced?', instr: 'Choose the sentence with the most sophisticated hedging.',
  items: [{ q: '', options: [
    'Fast food makes people obese.',
    'Fast food can make people obese.',
    'A diet high in fast food is likely to increase the risk of obesity, particularly among children who are already physically inactive.'], a: 2 }] });

T('g6', ['Level 2: comparatives + adverbs of degree: *The figure for girls was **significantly lower**, at 12%.*', 'Level 3: **double comparatives** *the more..., the more...*; *pale in comparison with*; *by a large margin*: *The impact of public health campaigns **pales in comparison with** that of constant junk-food advertising.*']);
A('g6', { bloom: 'apply', type: 'rewrite', title: 'Double comparatives & "pale in comparison with"', instr: 'Rewrite using the structure in brackets.',
  items: [
    { q: 'If cities build more roads, more people drive. (the more..., the more...)', a: ['The more roads cities build, the more people drive.'] },
    { q: 'Recycling helps the environment a little; reducing consumption helps it much more. (pale in comparison with)', a: ['The environmental benefits of recycling pale in comparison with those of reducing consumption.'] },
    { q: 'Male sprinters run 100 m much faster than female sprinters. (by a large margin, counterparts)', a: ['Male sprinters can complete a 100-metre race faster than their female counterparts by a large margin.'] },
  ] });
A('g6', { bloom: 'analyze', type: 'gap', title: 'Comparisons in Task 1', instr: 'Fill in ONE word.', chart: BAR_SPORT,
  items: [
    { q: 'The proportion of boys playing team sports was more than ___ that of girls.', a: ['double', 'twice'] },
    { q: 'Girls were over five times as ___ as boys to dance regularly.', a: ['likely'] },
    { q: 'Swimming was the only activity in which girls slightly outnumbered their male ___.', a: ['counterparts'] },
  ] });

T('g5', ['Level 2: the passive in Process/Map tasks: *After being transported to the plant, the ore is crushed...*; *The woodland was cleared to make way for...*', 'Level 3: the **impersonal passive** (*It is widely argued that...*, *X is predicated on the assumption that...*) and the **subjunctive passive** (*It is essential that such experiments **be** strictly regulated.*)']);
A('g5', { bloom: 'apply', type: 'rewrite', title: 'Impersonal & subjunctive passives', instr: 'Rewrite as instructed.',
  items: [
    { q: 'Many people believe that homework improves discipline. (It is widely believed...)', a: ['It is widely believed that homework improves discipline.'] },
    { q: 'Governments must regulate animal testing strictly. (It is essential that ... be ...)', a: ['It is essential that animal testing be strictly regulated.'] },
    { q: 'Workers dug up the clay and took it to the factory. (After being..., passive)', a: ['After being dug up, the clay is transported to the factory.', 'After being excavated, the clay was taken to the factory.'] },
  ] });
A('g5', { bloom: 'evaluate', type: 'mcq', title: 'Subjunctive passive', instr: 'Choose the correct sentence.',
  items: [
    { q: '', options: ['It is vital that every child is given access to clean water.', 'It is vital that every child be given access to clean water.'], a: 1, ex: 'Both are acceptable in modern English, but the subjunctive "be" is the standard academic form the course aims for.' },
    { q: '', options: ['The argument is predicated on the assumption that all citizens have internet access.', 'The argument predicates the assumption that all citizens have internet access.'], a: 0 },
  ] });

T('g9', ['Level 2: *Not until women\'s sports attract larger audiences **should they** be given more airtime.* / *Only by investing in research **could we** solve...*', 'Level 3: conditional inversion: ***Were we to** ignore..., we would...* (type 2); ***Had it not been for** X, Y would have...* (type 3); ***Should** the policy fail, ...* (type 1).']);
A('g9', { bloom: 'apply', type: 'rewrite', title: 'Conditional inversion', instr: 'Rewrite using inversion, following the prompt.',
  items: [
    { q: 'If we ignored climate warnings, future generations would suffer. (Were we to...)', a: ['Were we to ignore climate warnings, future generations would suffer.'] },
    { q: 'If mobile banking had not existed, many rural farmers would have struggled to access credit. (Had it not been for...)', a: ['Had it not been for mobile banking, many rural farmers would have struggled to access credit.'] },
    { q: 'Cities should only expand public transport when they have reliable funding. (Only when..., should...)', a: ['Only when cities have reliable funding should they expand public transport.'] },
    { q: 'We can reduce traffic deaths only by changing driver behaviour. (Only by...)', a: ['Only by changing driver behaviour can we reduce traffic deaths.'] },
  ] });
A('g9', { bloom: 'evaluate', type: 'mcq', title: 'Inversion in the right place', instr: 'Choose the grammatically correct sentence.',
  items: [
    { q: '', options: ['Not until governments act will the problem disappear.', 'Not until governments act the problem will disappear.'], a: 0 },
    { q: '', options: ['Had it not been for vaccines, millions more would die last century.', 'Had it not been for vaccines, millions more would have died last century.'], a: 1 },
    { q: '', options: ['Were the government to raise fuel taxes, public transport use would rise.', 'Were the government raise fuel taxes, public transport use would rise.'], a: 0 },
  ] });

T('g10', ['Level 2: a *whether*-clause after a preposition: *Opinions are divided **on whether** phones should be banned in schools.*', 'Level 3: **noun clauses as subjects**: ***What lies at the core of** the problem is...*, ***What can be inferred from** this gap is that...*, ***That** education should be free **is a belief shared by** many.*']);
A('g10', { bloom: 'apply', type: 'rewrite', title: 'Noun clauses as subjects', instr: 'Rewrite using the frame in brackets.',
  items: [
    { q: 'The main cause of traffic jams is the lack of public transport. (What lies at the core of...)', a: ['What lies at the core of traffic congestion is the lack of reliable public transport.'] },
    { q: 'We can see from this data that young people prefer cities. (What can be inferred from...)', a: ['What can be inferred from this data is that young people prefer to live in cities.'] },
    { q: 'Many teachers believe that every child should learn to code. (That ... is a belief shared by...)', a: ['That every child should learn to code is a belief shared by many teachers.'] },
    { q: 'People disagree about whether tourism helps local culture. (Opinions are divided on...)', a: ['Opinions are divided on whether tourism helps local culture.'] },
  ] });
A('g10', { bloom: 'evaluate', type: 'mcq', title: 'Correct noun clauses', instr: 'Choose the correct sentence.',
  items: [
    { q: '', options: ['What causes the problem are poor planning.', 'What causes the problem is poor planning.'], a: 1, ex: 'A noun-clause subject → singular verb.' },
    { q: '', options: ['The chart shows how much rice was exported by Vietnam.', 'The chart shows how much rice did Vietnam export.'], a: 0 },
  ] });

T('g4', ['Level 2: preposition + which, **whose**: *Singapore, **whose** public transport is world-class, ...*; *matches **in which** professional players compete*.', 'Level 3: continuative **all of which / most of which / none of which**: *Home schooling can protect children from bullying, peer pressure and early relationships, **all of which** may harm their studies.*']);
A('g4', { bloom: 'apply', type: 'rewrite', title: 'whose / in which / all of which', instr: 'Combine into ONE sentence following the prompt.',
  items: [
    { q: 'Norway is a small country. Its electric car sales are the highest in the world. (whose)', a: ['Norway, whose electric car sales are the highest in the world, is a small country.', 'Norway is a small country whose electric car sales are the highest in the world.'] },
    { q: 'Online courses offer flexibility, low fees and global access. All of these attract working adults. (all of which)', a: ['Online courses offer flexibility, low fees and global access, all of which attract working adults.'] },
    { q: 'Newspapers provide a lot of knowledge. Most of it is useful later in life. (most of which)', a: ['Newspapers provide a wealth of knowledge, most of which can prove useful later in life.'] },
  ] });
A('g4', { bloom: 'evaluate', type: 'mcq', title: 'Advanced relative clauses', instr: 'Choose the correct sentence.',
  items: [
    { q: '', options: ['The factory, which workers went on strike last year, has closed.', 'The factory, whose workers went on strike last year, has closed.'], a: 1 },
    { q: '', options: ['Many students face debt, stress and long hours, all of them harm their health.', 'Many students face debt, stress and long hours, all of which can harm their health.'], a: 1 },
  ] });

T('g11', ['Level 2: condition/concession: *as long as / provided that*.', 'Level 3: **As + adj + as + S + may + V** (concession with the adjective fronted): ***As admirable as** this proposal **may appear**, it is unworkable in practice.*; *insomuch as* (to the extent that).']);
A('g11', { bloom: 'apply', type: 'rewrite', title: 'Concession with "As adj as..."', instr: 'Rewrite using *As + adj + as + S + may + V, ...*',
  items: [
    { q: 'Although a four-day week sounds attractive, many businesses cannot afford it.', a: ['As attractive as a four-day week may sound, many businesses cannot afford it.'] },
    { q: 'Although the plan is ambitious, it ignores the needs of rural areas.', a: ['As ambitious as the plan may be, it ignores the needs of rural areas.'] },
  ] });
A('g11', { bloom: 'analyze', type: 'gap', title: 'Advanced adverbial conjunctions', instr: 'Fill in ONE word.',
  items: [
    { q: 'People should be free to do extreme sports ___ that they understand the risks.', a: ['provided', 'providing'] },
    { q: '___ people are forced to change jobs, they tend to experience stress.', a: ['whenever'] },
    { q: 'As effective ___ the ban may seem, it is difficult to enforce.', a: ['as'] },
  ] });

T('g12', ['Level 2: fronted reduced clauses: ***Given** the availability of cheap flights, ...*; result: *..., **thereby allowing** patients to recover faster.*', 'Level 3: **absolute constructions** *with + N + V-ing / V3*: *..., **with** single-use plastics **being** discarded daily*; concession with ***albeit** + adj/V-ing*.']);
A('g12', { bloom: 'apply', type: 'rewrite', title: 'thereby / with + N + V-ing / albeit', instr: 'Rewrite using the structure in brackets.',
  items: [
    { q: 'Better vaccines treat diseases earlier. This allows people to live longer. (thereby + V-ing)', a: ['Better vaccines prevent diseases earlier, thereby allowing people to live longer.'] },
    { q: 'Our society throws things away. Plastic bags are used once and waste is piling up. (with + N + V-ing)', a: ['Our society has become a throw-away one, with plastic bags being used only once and waste piling up rapidly.'] },
    { q: 'Home schooling has some benefits, but it is not suitable for most families. (albeit)', a: ['Home schooling, albeit beneficial in some respects, is not suitable for most families.', 'Home schooling, albeit having some benefits, is not suitable for most families.'] },
    { q: 'Because cheap flights are available, travelling abroad is no longer a luxury. (Given + N)', a: ['Given the availability of cheap flights, travelling abroad is no longer a luxury.'] },
  ] });

T('g13', ['Level 3: parallelism in **noun clauses** and **repeated structures** for rhythm: *Instead of..., they can...; instead of..., they can...; and instead of..., they can...*']);
A('g13', { bloom: 'apply', type: 'rewrite', title: 'Advanced parallelism', instr: 'Fix the parallelism error or rewrite using a repeated structure.',
  items: [
    { q: 'Whether students choose a course depends on what they enjoy and their future job.', a: ['Whether students choose a course depends on what they enjoy and what job they hope to do in the future.'] },
    { q: 'Running awareness campaigns and to have healthier school meals would reduce obesity.', a: ['Running awareness campaigns and providing healthier school meals would reduce obesity.'] },
    { q: 'Tourists can stop littering, stop picking flowers and stop touching ancient walls. (repeat "Instead of..., they can...")', a: ['Instead of littering, tourists can take their rubbish home; instead of picking flowers, they can photograph them; and instead of touching ancient walls, they can admire them from a distance.'] },
  ] });

T('g14', ['Besides fragments, run-ons and comma splices, there are **choppy sentences** (many disconnected simple sentences) and **stringy sentences** (too many and/but/so).', 'Fixing stringy sentences: group the actions with parallelism + a subordinate clause: *Because many students attend classes, work part-time and study at night, they are exhausted by the weekend.*']);
A('g14', { bloom: 'apply', type: 'rewrite', title: 'Fix choppy & stringy sentences', instr: 'Rewrite as ONE well-formed sentence.',
  items: [
    { q: 'Many nurses work long shifts, and then they look after their families, and they also study, so they are often exhausted.', a: ['Because many nurses work long shifts, look after their families and study, they are often exhausted.'] },
    { q: 'Rents are high. Salaries are low. Young people cannot buy homes.', a: ['With rents high and salaries low, young people cannot afford to buy homes.', 'Because rents are high and salaries are low, young people cannot afford homes.'] },
    { q: 'Prices rose sharply, people bought less.', a: ['Prices rose sharply, so people bought less.', 'Prices rose sharply; as a result, people bought less.'] },
  ] });

T('g15', ['A Band 8 paragraph often combines, in 2 sentences: a noun clause (*It is true that...*), an extended comparison (*the same... as... did*), a prepositional phrase of cause (*due primarily to...*), parallel verbs (*yield... but cause...*), and a reduced phrase (*including...*).']);
A('g15', { bloom: 'analyze', type: 'match', title: 'Anatomy of a Band 8 paragraph', instr: 'Paragraph: *It is undeniable that teenagers today rarely socialise in the same way as their parents did, due largely to the spread of smartphones. I would argue that this shift offers few benefits but creates serious problems, including weaker communication skills and poorer sleep.*', options: ['Noun clause', 'Extended comparison', 'Prepositional phrase of cause', 'Parallel verbs', 'Reduced participle phrase'],
  pairs: [
    { l: 'that teenagers today rarely socialise...', r: 'Noun clause' }, { l: 'in the same way as their parents did', r: 'Extended comparison' },
    { l: 'due largely to the spread of smartphones', r: 'Prepositional phrase of cause' }, { l: 'offers few benefits but creates serious problems', r: 'Parallel verbs' },
    { l: 'including weaker communication skills and poorer sleep', r: 'Reduced participle phrase' },
  ] });
A('g15', { bloom: 'create', type: 'write', kind: 'grammar', title: 'Write 2 Band 8 sentences with all 5 structures', prompt: 'Topic: *Fewer young people today read printed books than their parents did.*\n\nWrite **2 sentences** (about 50–70 words) using all 5 structures: a noun clause, an extended comparison, a prepositional phrase of cause, parallel verbs and a reduced participle phrase.', minWords: 40, focus: ['noun clauses', 'extended comparison', 'due to + N', 'song song', 'reduced participle phrases'] });

T('g16', ['Grammar Nazi Level 3: replace *Firstly / Secondly / Moreover* with **referencing + nominalisation**: *This line of reasoning..., Such a change..., The corollary of this..., Added to this is the fact that...*', 'A singular countable noun **never stands alone**: ✗ *Government should...* → ✓ ***The** government should...* / ***Governments** should...*']);
A('g16', { bloom: 'apply', type: 'rewrite', title: 'Replace mechanical linkers with referencing', instr: 'Rewrite the second sentence, removing the initial linker and using referencing / nominalisation.',
  items: [
    { q: 'Many cities have introduced bike-sharing schemes. Moreover, bike-sharing schemes reduce traffic.', a: ['Many cities have introduced bike-sharing schemes. Such schemes help to reduce traffic.'] },
    { q: 'Some argue that exams measure ability. However, the argument that exams measure ability is weak.', a: ['Some argue that exams measure ability. This line of reasoning, however, is weak.'] },
    { q: 'Governments invest in adult literacy. Therefore, the economy grows and families benefit.', a: ['Governments invest in adult literacy. The corollary of this investment is a stronger economy and better-supported families.'] },
  ] });
A('g16', { bloom: 'analyze', type: 'mcq', title: 'Check countable nouns', instr: 'Choose the sentence with NO errors.',
  items: [
    { q: '', options: ['Government should invest in public transport.', 'The government should invest in public transport.', 'Government should invests in public transport.'], a: 1 },
    { q: '', options: ['Student who works part-time has less time to study.', 'Students who work part-time have less time to study.', 'Students who works part-time have less time to study.'], a: 1 },
  ] });

T('g2', ['Level 3 articles: plural nouns used in general take **no the**: *Smartphones have changed how we communicate.*; abstract nouns used in general take no article: *Education is a right.*']);
T('g7', ['Level 3: replace *Firstly/Moreover* with academic cohesive phrases: *Added to this is the fact that..., This predisposition manifests itself in..., Compounding the problem is...*']);
A('g7', { bloom: 'apply', type: 'rewrite', title: 'Academic cohesion', instr: 'Rewrite the second sentence using *Added to this is the fact that...* or *Compounding the problem is...*',
  items: [
    { q: 'Housing in big cities is expensive. In addition, salaries for young workers are low.', a: ['Housing in big cities is expensive. Added to this is the fact that salaries for young workers are low.'] },
    { q: 'Traffic is heavy in Hanoi. Moreover, public transport is limited.', a: ['Traffic is heavy in Hanoi. Compounding the problem is the limited public transport network.'] },
  ] });

/* ================= TASK 1 ================= */
T('t1a', ['Level 3 introduction: paraphrase with **how much / how many** + a change of structure: *The chart illustrates **how many** people cycled to work...*', 'Level 3 overview: 2 points (trend + ranking), combined with *while... / with... witnessing...* and **no figures**.']);
A('t1a', { bloom: 'apply', type: 'rewrite', title: 'Paraphrase with how much / how many', instr: 'Paraphrase the prompt with how much (uncountable) or how many (countable).',
  items: [
    { q: 'The chart shows the proportion of adults who smoked in Australia from 1995 to 2020.', a: ['The chart illustrates how many adults smoked in Australia between 1995 and 2020.'] },
    { q: 'The graph shows household spending in Canada on four types of energy in 2010 and 2020.', a: ['The graph illustrates how much money Canadian households spent on four types of energy in 2010 and 2020.'] },
    { q: 'The table shows the amount of water used by three industries in 2015.', a: ['The table illustrates how much water was consumed by three industries in 2015.'] },
  ] });

T('t1h', ['The course\'s standard structure: Intro **1 sentence** → Overview **2 sentences** → Body 1 **3–4 sentences** → Body 2 **3–4 sentences**; 160–190 words.', 'Change overview: Point 1 **trend** (the general trend + the sharpest rise/fall); Point 2 **order** (which subject is always highest/lowest).']);
A('t1h', { bloom: 'evaluate', type: 'mcq', title: 'Is this a Band 8 overview?', instr: 'Wind power chart. Choose the overview that covers Trend + Order with no figures.', chart: LINE_WIND,
  items: [{ q: '', options: [
    'Overall, wind power generation rose in all four countries, with Germany witnessing the most dramatic growth. In addition, Germany produced the most wind electricity for most of the period, while Denmark consistently generated the least.',
    'Overall, Germany increased from 38 TWh to 131 TWh, and Denmark rose from 8 to 16 TWh.',
    'Overall, wind power is becoming more important in Europe because of climate change.'], a: 0, ex: 'Note: in 2010 Spain was higher than Germany, so "for most of the period" is more accurate than "throughout".' }] });
A('t1h', { bloom: 'create', type: 'write', kind: 'task1', title: 'Change over time (Band 8 target)', prompt: 'The graph below shows the amount of electricity generated from wind power in four countries between 2010 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: LINE_WIND, minWords: 150, focus: ['1-sentence intro, 2-sentence overview (trend + order)', 'the crossover point where Germany overtakes Spain', 'Super Boosters'] });

T('t1i', ['Level 1: *In 2010, X was 10. In 2012, X rose to 20.* (one simple sentence per point)', 'Level 2: link 2 points with *before/after + V-ing*, *while/whereas*.', 'Level 3: combine **3 stages** in one sentence with Boosters 2–4–7, alternating them to avoid repeating structures.']);
A('t1i', { bloom: 'apply', type: 'rewrite', title: 'Boosters 2, 3, 4, 6, 7 with real data', instr: 'Write ONE sentence using the specified Booster (based on the wind power chart).', chart: LINE_WIND,
  items: [
    { q: 'Booster 2 – UK (started at..., after which..., before ending the period at...)', a: ['The amount of wind electricity generated in the UK started at 10 TWh in 2010, after which it experienced a steady rise to 57 TWh in 2018, before ending the period at 75 TWh.'] },
    { q: 'Booster 3 – Spain (..., with a subsequent... and a final...)', a: ['Spain generated 44 TWh of wind power in 2010, with a subsequent rise to 52 TWh in 2014, a slight dip, and a final increase to 56 TWh in 2020.'] },
    { q: 'Booster 4 – Germany (was at..., followed by...)', a: ['The figure for Germany was at 38 TWh in 2010, followed by a significant increase to 131 TWh by the end of the period.'] },
    { q: 'Booster 6 – Denmark compared with Spain (Similar changes can be seen in the figure for..., which...)', a: ['Similar changes can be seen in the figure for Denmark, which rose modestly from 8 TWh to 16 TWh over the period.'] },
    { q: 'Booster 7 – Spain 2014–2018 (fluctuated..., ending...)', a: ['The figure for Spain fluctuated in the range from 49 to 52 TWh between 2014 and 2018, before ending the period at 56 TWh.'] },
  ] });
A('t1i', { bloom: 'evaluate', type: 'mcq', title: 'Overview Booster 1', instr: 'Choose the overview sentence that fits the Booster 1 frame.', chart: LINE_WIND,
  items: [{ q: '', options: [
    'Overall, there was an increase in wind power generation in all four countries, with Germany witnessing the most dramatic rise. In addition, Germany surpassed Spain early in the period and generally had the highest figures.',
    'Overall, there was an increase. Germany was the highest.',
    'Overall, with Germany witnessing, wind power increased the most dramatic rise.'], a: 0 }] });

T('t1b', ['Level 3: **3 ways to write a sentence about money**: *The amount of money spent on X was...* / *$1 million was spent on X by...* / *$1 million was expended on X by...*', '**4 ways to paraphrase a % of people**: *the proportion of female MPs* = *the percentage of MPs who are female* = *the share of MPs who are women* = *the percentage of women holding a seat in parliament*.', 'Vocabulary: *hover around, hit a trough of, reach parity with, surpass / overtake*.']);
A('t1b', { bloom: 'apply', type: 'rewrite', title: '3 ways to write a money sentence', instr: 'Data: *Japanese households spent $2.4 billion on pet food in 2020.* Write it in the required way.',
  items: [
    { q: 'Way 1: The amount of money...', a: ['The amount of money spent on pet food by Japanese households in 2020 was $2.4 billion.'] },
    { q: 'Way 2: passive, with the amount as the subject (spent)', a: ['$2.4 billion was spent on pet food by Japanese households in 2020.'] },
    { q: 'Way 3: passive with expended', a: ['$2.4 billion was expended on pet food by households in Japan in 2020.'] },
  ] });
A('t1b', { bloom: 'analyze', type: 'rewrite', title: '4 ways to paraphrase a % of people', instr: 'Paraphrase *the proportion of female engineers* in 3 different ways (one per box).',
  items: [
    { q: 'Way 1 (the percentage of ... who ...)', a: ['the percentage of engineers who are female', 'the percentage of engineers who are women'] },
    { q: 'Way 2 (the share of ...)', a: ['the share of engineers who are women'] },
    { q: 'Way 3 (the percentage of women + V-ing)', a: ['the percentage of women working as engineers', 'the percentage of women holding engineering jobs'] },
  ] });
A('t1b', { bloom: 'evaluate', type: 'gap', title: 'Advanced trend vocabulary', instr: 'Fill in ONE word (wind power chart).', chart: LINE_WIND,
  items: [
    { q: 'Spain\'s figure ___ around 50 TWh between 2012 and 2018.', a: ['hovered'] },
    { q: 'Germany ___ Spain in 2012 and remained the largest producer thereafter.', a: ['overtook', 'surpassed'] },
    { q: 'Denmark\'s output remained ___ unchanged at around 13–14 TWh from 2014 to 2018.', a: ['virtually', 'almost', 'largely', 'relatively'] },
  ] });

T('t1j', ['Level 3 for 5+ categories: group them in one sentence with *respectively* or *while the figures for A, B and C all rose to around...*', 'Level 3 for <4 categories: split by period, and **in each paragraph compare the lines with each other** within that period.']);
A('t1j', { bloom: 'apply', type: 'rewrite', title: 'A grouping sentence for 5+ categories', instr: 'The housework-hours table (above). Write ONE grouping sentence as required.', chart: U('t1j').exercises.find(e => e.chart).chart,
  items: [
    { q: 'Group Sweden, Canada and Japan (use respectively)', a: ['Sweden, Canada and Japan recorded the lowest figures in 2020, at 12, 13 and 16 hours respectively.'] },
    { q: 'Group all 6 countries by trend (all fell...)', a: ['The time spent on chores fell in all six countries, with the figures for India, Mexico and Italy remaining above 20 hours.'] },
  ] });

T('t1d', ['Level 3: combine trend and comparison in one sentence: *Coal, **which remained the largest source in both years**, **saw its share halve** from 55% to 30%.*']);
A('t1d', { bloom: 'apply', type: 'rewrite', title: 'Trend + comparison in one sentence', instr: 'The two-year chart (above). Write ONE sentence combining trend and comparative language.', chart: U('t1d').exercises.find(e => e.chart)?.chart,
  items: [
    { q: 'The largest category and how it changed', a: ['Coal, which remained the largest energy source in both years, saw its share fall significantly between 2000 and 2020.'] },
    { q: 'The fastest-growing category compared with another', a: ['Renewables grew faster than any other source, more than doubling their share over the two decades.'] },
  ] });

T('t1k', ['Level 3: link actual data and projections in one sentence: *Having risen to 54% in 2020, the share in Norway **is projected to reach** 100% by 2035.*', '*Projections show that...*, *is estimated to...*']);
A('t1k', { bloom: 'apply', type: 'rewrite', title: 'Linking past data and projections', instr: 'Electric car chart. Write ONE sentence linking actual figures and projections.', chart: U('t1k').exercises[0].chart,
  items: [
    { q: 'Norway: 22% (2015) → 54% (2020) → projected 100% (2035). (Having + V3..., is projected to...)', a: ['Having risen from 22% in 2015 to 54% in 2020, the share of electric cars in Norway is projected to reach 100% by 2035.'] },
    { q: 'USA: 1% → 2% → projected 50% (2035). (Projections show that...)', a: ['Projections show that the USA, where electric cars accounted for only 2% of sales in 2020, will see this figure rise to 50% by 2035.'] },
  ] });

T('t1c', ['Level 3: rotate **7 structures** for one pair of figures; add a structure grouping 3–5 subjects: *X is highest, accounting for..., and the figures for A and B are lower, at... and... respectively.* / *..., compared to... in A and... in B. Meanwhile, the figures for C and D are about...*']);
A('t1c', { bloom: 'apply', type: 'rewrite', title: 'One pair of figures, 7 structures', instr: 'Data: *42% of men and 17% of women in a survey regularly played video games.* Write it using each structure.',
  items: [
    { q: '..., and the figure for... was significantly lower, at...', a: ['The proportion of men who regularly played video games was 42%, and the figure for women was significantly lower, at 17%.'] },
    { q: 'far exceeded that of..., with respective figures being...', a: ['The proportion of men playing video games far exceeded that of women, with respective figures being 42% and 17%.'] },
    { q: 'far exceeded that of..., and the figures were... respectively', a: ['The proportion of men playing video games far exceeded that of women, and the figures were 42% and 17% respectively.'] },
    { q: 'While..., only... did so', a: ['While 42% of the men surveyed regularly played video games, only 17% of women did so.'] },
    { q: 'The percentage as subject + compared to only...', a: ['42% of the men surveyed regularly played video games, compared to only 17% of the women asked.'] },
    { q: '(brackets) + , which was only...', a: ['The proportion of men playing video games (42%) was far higher than that of women, which was only 17%.'] },
    { q: 'A significant difference can be seen... in that order', a: ['A significant difference can be seen in the percentage of men and women playing video games, which was 42% and 17% in that order.'] },
  ] });
A('t1c', { bloom: 'analyze', type: 'rewrite', title: 'Grouping 3–5 subjects in one category', instr: 'Share of income spent on housing: *Ireland 35%, Netherlands 32%, Belgium 29%, Austria 21%, Portugal 20%.* Write 1–2 sentences covering all 5 countries.',
  items: [{ q: 'Write 1–2 sentences', a: ['Ireland spent the highest proportion of income on housing, at 35%, followed by the Netherlands and Belgium, at 32% and 29% respectively. Meanwhile, the figures for Austria and Portugal were considerably lower, at around 20%.'] }] });

T('t1l', ['Level 3 for information-heavy tables: **organise by category** (not by country/age) and group similar figures: *ranging between X and Y*, *both at 71%*.', 'Overview: *Also notable is that there is **a parity in** the percentage of... across all groups, **with the exception of**...*']);
A('t1l', { bloom: 'evaluate', type: 'mcq', title: 'An overview with similarities', instr: 'A table of qualifications by age.', chart: TABLE_DEGREE,
  items: [{ q: '', options: [
    'Overall, most residents under 50 held a university degree, while the majority of those aged 65 and over had no qualifications. Also notable is that there was a broad parity in the percentage of high school graduates across the four youngest groups.',
    'Overall, 64% of 25–34-year-olds had a degree, and 60% of people over 65 had no qualification.',
    'Overall, young people are better educated because universities are more accessible today.'], a: 0 }] });
A('t1l', { bloom: 'apply', type: 'rewrite', title: 'Body by category, grouping figures', instr: 'Write 2 sentences about the University degree column, grouping age groups with similar figures.', chart: TABLE_DEGREE,
  items: [{ q: 'University degree', a: ['Regarding university education, 64% of residents aged 25–34 held a degree, followed by the 18–24 and 35–49 age groups, at 58% and 57% respectively. The figures for older residents were much smaller, with 39% of 50–64-year-olds and only 18% of those over 65 holding a degree.'] }] });
A('t1l', { bloom: 'create', type: 'write', kind: 'task1', title: 'No change: an information-heavy table (Band 8)', prompt: 'The table below shows the highest qualification held by residents of a city in 2021, by age group.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: TABLE_DEGREE, minWords: 150, focus: ['organise by category', 'Overview: differences + similarities', 'grouping figures (respectively, both at...)'] });
A('t1l', { bloom: 'create', type: 'write', kind: 'task1', title: 'No change: 2 items (Band 8)', prompt: 'The chart below shows the percentage of teenage boys and girls who regularly took part in five activities in 2022.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: BAR_SPORT, minWords: 150, focus: ['Body 1: Boys > Girls', 'Body 2: Girls ≥ Boys', '7 comparative structures'] });

T('t1g', ['Level 3: combine the 2 charts in the introduction with *while*; one overview sentence per chart; use the right tense for each chart (past for Change; past simple for a single-year No-change chart).']);
T('t1f', ['Level 3 overview: *Overall, the X underwent a number of significant changes, **the most important of which are** A and B.*', 'Body: combine location + change + purpose: *The woodland in the northeast **was cleared to facilitate the construction of**...*; *... **was removed to allow** the office next to it **to expand**.*']);
A('t1f', { bloom: 'apply', type: 'rewrite', title: 'Band 9 map sentences', instr: 'Write ONE sentence as required.',
  items: [
    { q: 'Overview: the old library gained an extra floor and the car park was removed (the most important of which...)', a: ['Overall, the library underwent a number of significant changes, the most important of which are the addition of a new floor and the removal of the car park.'] },
    { q: 'The woodland in the southeast was cleared to build a sports hall (to facilitate the construction of)', a: ['The trees in the southeast were cleared to facilitate the construction of a sports hall.'] },
    { q: 'The print room was demolished so that the office next to it could expand (was removed to allow ... to expand)', a: ['The printing room was removed to allow the office next to it to expand.'] },
  ] });

T('t1e', ['Level 3 overview: *Overall, the process comprises **a number of consecutive steps**, **starting with**..., **through**..., **and ending with**...*', 'Body: passive + *After being V3*, *..., which moves... to be...*, *Once...*, *before being V3*.']);
A('t1e', { bloom: 'apply', type: 'rewrite', title: 'Band 9 overview & process sentences', instr: 'Write as required (making recycled paper: collecting paper → sorting → soaking & pulping → de-inking → pressing & drying → rolling into new paper → delivery to printers).',
  items: [
    { q: 'Overview (starting with..., through..., and ending with...)', a: ['Overall, the process comprises a number of consecutive steps, starting with the collection of waste paper, through several cleaning and pulping stages, and ending with the delivery of new paper rolls to printers.'] },
    { q: 'Combine the soaking/pulping and de-inking stages (After being..., ..., which...)', a: ['After being sorted, the paper is soaked in water and turned into pulp, which is then filtered to remove ink.'] },
    { q: 'Combine the pressing & drying and rolling stages (before being...)', a: ['The clean pulp is pressed and dried before being rolled into new sheets of paper.'] },
  ] });
A('t1e', { bloom: 'analyze', type: 'rewrite', title: 'Natural processes: active voice & time', instr: 'Life cycle of a frog: *eggs (6–21 days) → tadpole (lives in water, ~6 weeks) → tadpole grows legs → froglet → adult frog lays eggs*. Write as required.',
  items: [
    { q: 'A sentence using "Lasting for about..., the ... then develops into..."', a: ['Lasting for about six weeks, the tadpole stage ends when the tadpole grows legs and develops into a froglet.'] },
    { q: 'An overview of a cycle', a: ['Overall, the life cycle of the frog is a cyclical process consisting of five main stages, beginning with eggs and ending with an adult frog that lays eggs of its own.'] },
  ] });

T('t1m', ['Body 1 (structure): describe **from outside to inside / from top to bottom**: *consists of, comprises, is equipped with, is attached to*.', 'Body 2 (operation): **cause and effect**: *As..., ...; This causes...; which in turn...*']);
A('t1m', { bloom: 'apply', type: 'rewrite', title: 'Structure & operation', instr: 'Device: a solar water purifier (a glass frame on top, a black tray holding dirty water underneath, a channel along the side collecting clean water, a pipe leading to a container). Write as required.',
  items: [
    { q: 'Body 1: a sentence describing the structure from top to bottom', a: ['The device consists of a sloping glass cover at the top, a black tray containing dirty water at the bottom, and a collecting channel attached to one side, which is connected to a storage container by a pipe.'] },
    { q: 'Body 2: a cause–effect sentence (As..., which in turn...)', a: ['As sunlight heats the black tray, the water evaporates and condenses on the cooler glass, which in turn causes clean droplets to run down into the collecting channel.'] },
  ] });

/* ================= TASK 2 ================= */
T('t2a', ['Level 3 introduction: sentence 1 introduces the topic **with a reason/context** (*Given..., Of all the..., There is little doubt that...*); sentence 2 is a thesis that answers directly.', 'Sample frame: *Given the [context], [issue]. I strongly believe that..., as it benefits not only X but also Y.*']);
A('t2a', { bloom: 'apply', type: 'rewrite', title: 'A Band 8 introduction', instr: 'Write a 2-sentence introduction (a contextual opening + a thesis) for the prompt.',
  items: [
    { q: 'Some people think governments should spend more on teaching adults new job skills rather than on university education for young people. To what extent do you agree or disagree?', a: ['Given the speed at which automation is reshaping the job market, many adults now risk being left behind. While university education remains important, I believe that greater investment in retraining adults is justified, as it benefits not only the workers themselves but also the wider economy.'] },
    { q: 'Many people now shop online rather than in local stores. Is this a positive or negative development?', a: ['There is little doubt that the convenience of online shopping has transformed the way people buy goods. Although this shift offers clear benefits to consumers, I believe its overall impact on local communities is largely negative.'] },
  ] });

T('t2f', ['Level 3 CC: **nominalisation + referencing**: *This predisposition manifests itself in..., The corollary of this would be..., Such a measure...*', 'Level 3 LR: sharp collocations: *reap financial rewards, a necessary evil, pale in comparison with, compound the problem, bring to the fore, reverberate through generations, of their own volition*.']);
A('t2f', { bloom: 'apply', type: 'gap', title: 'Academic collocations', instr: 'Fill in ONE word.',
  items: [
    { q: 'Countries that invest in adult education will ___ financial rewards in the long term.', a: ['reap'] },
    { q: 'For many commuters, the car remains a necessary ___.', a: ['evil'] },
    { q: 'The lack of affordable housing only serves to ___ the problem of urban poverty.', a: ['compound'] },
    { q: 'The pandemic brought the importance of public health to the ___.', a: ['fore'] },
    { q: 'Many volunteers choose to help of their own ___.', a: ['volition', 'accord'] },
    { q: 'Poor parenting can ___ through generations.', a: ['reverberate'] },
  ] });
A('t2f', { bloom: 'evaluate', type: 'mcq', title: 'Three levels of Coherence & Cohesion', instr: 'Which paragraph is the most advanced?',
  items: [{ q: '', options: [
    'Firstly, cars cause pollution. Secondly, cars cause traffic. Moreover, cars are expensive.',
    'Cars cause pollution. They also lead to traffic jams, and this makes commuting stressful.',
    'Private cars are a major source of urban pollution. Compounding the problem is the congestion they create, which not only lengthens commutes but also increases fuel consumption. The corollary of this is a city that is both dirtier and less productive.'], a: 2 }] });

T('t2b', ['Level 3 one-idea paragraph: TS → **This is because...** → **Consider X, which...** / *This can be seen in the case of...* → **This example sheds light on why...** / *The corollary of this would be...*', 'Level 3 two-idea paragraph: *The key argument here is that...* (idea 1) → explanation with a specific example → *Furthermore, exposure to... helps...* (idea 2) → result.']);
A('t2b', { bloom: 'apply', type: 'rewrite', title: 'Complete a Band 8 one-idea paragraph', instr: 'Prompt: *Historic town centres should only allow new buildings that match the traditional style.* Write the sentence for the required role.',
  items: [
    { q: 'Topic sentence (1 idea: tourism benefits)', a: ['If new buildings conform to the traditional style, the uniform appearance of a historic centre could bring considerable economic benefits through tourism.'] },
    { q: 'Example (Consider X, which...) — e.g. Hanoi\'s Old Quarter or a European town', a: ['Consider Hanoi\'s Old Quarter, which attracts millions of visitors largely because of its tube houses and narrow streets; allowing glass towers there could damage both its character and its tourist appeal.'] },
    { q: 'Link (This example sheds light on why...)', a: ['This example sheds light on why it makes sense to require residents to follow traditional styles in culturally important areas.'] },
  ] });
A('t2b', { bloom: 'create', type: 'write', kind: 'task2', title: 'A Band 8 one-idea paragraph', prompt: 'Prompt: *Governments should invest more in public libraries than in new sports stadiums. To what extent do you agree or disagree?*\n\nWrite **a one-idea paragraph** (130–170 words) following the frame: Topic sentence → This is because... → Consider X, which... → This example sheds light on why...', minWords: 120, focus: ['the course\'s one-idea frame', 'a specific, named example', 'a concluding link sentence'] });

T('t2g', ['The full set: **Point**: *Granted, one might argue that... / Admittedly, some people argue that...* → **Explain**: *This is predicated on / based on the assumption that... / This argument presupposes that...* → **Counter**: *However, this line of reasoning is not sound because it fails to factor in... / However, this reasoning is not grounded in facts as...*', 'A Level 3 counter needs **specific evidence/examples** and a concluding sentence on the consequences.']);
A('t2g', { bloom: 'apply', type: 'rewrite', title: 'A 3-step counter-argument', instr: 'Write the 3 sentences Point → Explain → Counter for the prompt.',
  items: [
    { q: 'Prompt: *Physical classrooms are no longer necessary because students can learn everything online.* (You: disagree)', a: ['Granted, one might argue that physical classrooms are obsolete. This is predicated on the assumption that every student has a reliable device and the self-discipline to study alone. However, this line of reasoning is not sound because it fails to factor in the many learners, especially younger children, who depend on face-to-face guidance and the structure that a school day provides.'] },
    { q: 'Prompt: *Cash will soon disappear completely.* (You: disagree)', a: ['Admittedly, some people argue that cash will soon vanish. This argument presupposes that digital payments are universally accessible. However, this reasoning is not grounded in facts, as millions of elderly and rural people still lack bank accounts or smartphones and continue to rely on cash for daily purchases.'] },
  ] });
A('t2g', { bloom: 'evaluate', type: 'mcq', title: 'Which counter sentence is the most advanced?', instr: 'Point: *Granted, one might argue that public museums should charge entry fees.*',
  items: [{ q: '', options: [
    'However, I think museums should be free.',
    'However, this line of reasoning is not sound because it fails to factor in the educational value of free access: when national museums in some countries removed fees, visitor numbers among low-income families rose sharply, which suggests that charges exclude precisely those who stand to benefit most.',
    'However, museums are good for culture and history and people like them.'], a: 1 }] });
A('t2g', { bloom: 'create', type: 'write', kind: 'task2', title: 'An Opinion essay with a counter-argument (Band 8)', prompt: 'Some people say that printed books will soon be replaced entirely by digital media. To what extent do you agree or disagree?\n\nWrite at least 250 words. Include a 3-step counter-argument paragraph.', minWords: 250, focus: ['Granted... This is predicated on... However, this line of reasoning...', 'evidence in the counter', 'a consistent position'] });

T('t2h', ['Level 3: do not just avoid the 12 errors — also **keep sentences at 20–35 words** with varied lengths; replace *etc.* with *countless...* or *such as A and B*.']);
A('t2h', { bloom: 'analyze', type: 'rewrite', title: 'Fix a paragraph that breaks several no-nos', instr: 'Rewrite the paragraph so that it breaks none of the 12 no-nos, keeping the ideas.',
  items: [{ q: 'Social media is bad. It wastes time. It causes stress. And it doesn\'t help students study, they spend hours on TikTok, Facebook, Instagram etc and their grades go down and their parents are worried and teachers are also worried so the school should ban phones.', a: ['Social media can harm students in several ways. Apart from wasting valuable time, it often causes stress and distracts learners from their studies. Many students spend hours on platforms such as TikTok and Instagram, which can lead to lower grades and growing concern among parents and teachers. For this reason, schools may need to restrict phone use during lessons.'] }] });

T('t2i', ['Should – Totally Agree: Body 1 **individual** benefits, Body 2 **social/economic** benefits; introduction: *...as it benefits not only the recipients but also the country as a whole.*', 'Should – Disagree: Body 1 a **counter-argument** challenging feasibility; Body 2 the harms.', 'A better than B: Approach 1 (A is better): Body 1 A\'s advantages; Body 2 a **counter-argument** about B. Approach 2: each side has its own value.', 'Each better for a group: *this idea is only relevant to [a minority group], who...; for the vast majority of people, ...*']);
A('t2i', { bloom: 'apply', type: 'rewrite', title: 'Thesis "Each is better for a certain group"', instr: 'Write a thesis using the frame *only relevant to..., who...; for the vast majority..., ...*',
  items: [
    { q: 'Prompt: *It is better for students to take a gap year before university than to start immediately.*', a: ['Personally, I believe that a gap year is only beneficial for students with financial support, who can afford to travel or volunteer without earning; for the vast majority of students, it is wiser to start university straight away.'] },
    { q: 'Prompt: *Living in the countryside is better than living in a city.*', a: ['In my view, rural life is only preferable for retirees and remote workers, who no longer depend on urban job markets; for the vast majority of young people, cities offer far better opportunities.'] },
  ] });
A('t2i', { bloom: 'create', type: 'write', kind: 'task2', title: 'Should – Totally Agree (Band 8)', prompt: 'Some people think that the government should provide free public transport for all citizens. To what extent do you agree or disagree?\n\nWrite at least 250 words. Take a fully-agree approach: Body 1 individual benefits, Body 2 social/economic benefits.', minWords: 250, focus: ['not only... but also... in the thesis', 'Body 1 individual, Body 2 society', 'specific examples'] });
A('t2i', { bloom: 'create', type: 'write', kind: 'task2', title: 'Each is better for a certain group (Band 8)', prompt: 'It is better for people to work for themselves than to work for a company. To what extent do you agree or disagree?\n\nWrite at least 250 words.', minWords: 250, focus: ['grouping by population', 'majority vs minority', 'clear position'] });

T('t2c', ['"The only way" is always **Disagree**: introduction *...many believe that only by X can Y be achieved. However, in this essay, I will challenge this school of thought.*']);
A('t2c', { bloom: 'apply', type: 'rewrite', title: 'A "The only way" introduction', instr: 'Write an introduction using the frame *Given..., many believe that only by... can... However, in this essay, I will challenge this school of thought.*',
  items: [
    { q: 'Prompt: *The only way to reduce crime among young people is to impose harsher prison sentences.*', a: ['Given the rising number of offences committed by teenagers, many people believe that only by imposing harsher prison sentences can youth crime be reduced. However, in this essay, I will challenge this school of thought.'] },
    { q: 'Prompt: *The only way to protect endangered animals is to ban all hunting.*', a: ['Given the alarming decline of many wildlife species, many believe that only by banning hunting entirely can endangered animals be protected. However, in this essay, I will challenge this school of thought.'] },
  ] });

T('t2m', ['Level 3 **No** approach: Body 1 shows that X **does not tackle the root cause** (where the real cause lies); Body 2 presents Y as better, with a direct comparison.', 'Level 3 **Yes** approach: compare X with **specific alternatives** (police, parents, teachers...) to show X is superior.']);
A('t2m', { bloom: 'apply', type: 'rewrite', title: 'A "does not tackle the root cause" sentence', instr: 'Prompt: *The best way to reduce plastic pollution is to charge customers for plastic bags.* Write the sentence as required (No approach).',
  items: [
    { q: 'Body 1: X does not tackle the root cause', a: ['Charging for plastic bags may reduce their use, but it fails to address the root of the problem, since bags make up only a small share of plastic waste compared with packaging produced by manufacturers.'] },
    { q: 'Body 2: Y is better, compared directly', a: ['A far more effective approach would be to require manufacturers to use recyclable packaging, as this would cut plastic waste at its source rather than relying on individual shoppers.'] },
  ] });
A('t2m', { bloom: 'create', type: 'write', kind: 'task2', title: '"The best" – Yes approach (Band 8)', prompt: 'Some people believe that former drug addicts are the best people to educate teenagers about the dangers of drugs. To what extent do you agree or disagree?\n\nWrite at least 250 words. Take the agree approach, comparing them with teachers, parents and the police.', minWords: 250, focus: ['comparison with alternatives', 'real experience', 'clear position'] });

T('t2d', ['Level 3 Discussion: introduction *Opinions are divided on whether... I believe that...*; Body 1 (the view you do not support) may **include a counter within the paragraph**.', 'Level 3 Outweigh: Body 1 does not just list disadvantages but **addresses/mitigates** them (*While..., this problem can be mitigated by...*).']);
A('t2d', { bloom: 'apply', type: 'rewrite', title: 'Address the problems (outweigh)', instr: 'Prompt: *More people work and study from home. Do the advantages outweigh the disadvantages?* Write a sentence stating a disadvantage and then weakening it.',
  items: [
    { q: 'Disadvantage: social isolation', a: ['While working from home may leave some employees feeling isolated, this problem can be largely mitigated by regular video meetings and occasional in-person team days.'] },
    { q: 'Disadvantage: difficulty concentrating at home', a: ['Admittedly, distractions at home can reduce concentration; however, setting up a dedicated workspace and fixed working hours can address this issue effectively.'] },
  ] });
A('t2d', { bloom: 'create', type: 'write', kind: 'task2', title: 'Discussion (Band 8)', prompt: 'Some people believe that, to protect local culture, tourism should be restricted in some areas. Others think that cultural change is inevitable and restricting tourism brings no benefits. Discuss both views and give your own opinion.\n\nWrite at least 250 words.', minWords: 250, focus: ['Opinions are divided on whether...', 'Body 1: the unsupported view + counter', 'Body 2: the supported view'] });

T('t2j', ['Level 3: split the 2 body paragraphs by the **2 groups** named in the prompt; in each paragraph, handle risks with *Of course... However, ...*']);
A('t2j', { bloom: 'create', type: 'write', kind: 'task2', title: 'Positive/negative split by group (Band 8)', prompt: 'It is now possible for both researchers and tourists to visit deep-sea environments using new submarine technology. Is this a positive or negative development?\n\nWrite at least 250 words.', minWords: 250, focus: ['Body 1 tourists, Body 2 researchers', 'Of course... However...', 'clear position'] });

T('t2e', ['**Make your solutions better!** (Band 6 → 8.5): Solution → the **obstacle** to implementing it (*However, X would be reluctant to... due to...*) → a **supporting step** that removes the obstacle (*Thus, the government would need to...*).']);
A('t2e', { bloom: 'apply', type: 'rewrite', title: 'Solution → obstacle → supporting step', instr: 'Write 3 sentences (solution, obstacle, supporting step) for the problem.',
  items: [
    { q: 'Problem: the gap in living standards between urban and rural areas. Solution: encouraging businesses to move to rural areas.', a: ['One solution would be to offer tax incentives to companies that relocate to rural areas. However, many firms would be reluctant to move due to poor infrastructure and a shortage of skilled workers. Thus, the government would also need to invest in roads, internet access and vocational training to make such relocation viable.'] },
    { q: 'Problem: students lack practical skills. Solution: compulsory internships.', a: ['Schools could make work placements compulsory for older students. However, many small businesses may lack the time or staff to supervise interns. To overcome this, local authorities could subsidise companies that take part and provide them with simple mentoring guidelines.'] },
  ] });
A('t2e', { bloom: 'create', type: 'write', kind: 'task2', title: 'Problems – Solutions (Band 8)', prompt: 'In many developing countries, young people are leaving rural areas to work in cities. What problems does this cause, and how can these problems be solved?\n\nWrite at least 250 words. Every solution must include an obstacle and a supporting step.', minWords: 250, focus: ['make your solutions better', 'solutions that match the problems', 'who acts, what they do, the result'] });

T('t2k', ['Level 3 Causes: split causes by **developed vs developing countries** for deeper ideas.', 'Level 3 Effects: consequences for **the economy** and **quality of life**, with a 2-step cause–effect chain (*..., which in turn...*).']);
A('t2k', { bloom: 'apply', type: 'rewrite', title: 'Causes from 2 perspectives', instr: 'Prompt: *Why are fewer students choosing science subjects?* Write 1 sentence for each perspective.',
  items: [
    { q: 'Developed countries', a: ['In developed countries, many students are drawn to well-paid careers in finance and media, which appear more glamorous and less academically demanding than science.'] },
    { q: 'Developing countries', a: ['In developing countries, a shortage of laboratories and qualified science teachers often makes these subjects seem difficult and abstract, discouraging students from pursuing them.'] },
    { q: '2-step effects (which in turn)', a: ['A shortage of science graduates slows technological innovation, which in turn weakens a country\'s long-term economic competitiveness.'] },
  ] });
A('t2k', { bloom: 'create', type: 'write', kind: 'task2', title: 'Causes – Effects (Band 8)', prompt: 'In many countries, fewer students are choosing to study science subjects at university. Why is this the case? What effects does this have on society?\n\nWrite at least 250 words.', minWords: 250, focus: ['causes from 2 perspectives', 'economic & quality-of-life effects', 'a cause–effect chain'] });

T('t2l', ['Level 3 editing: work from **outline → topic sentences → support**, then upgrade vocabulary and **condense sentences** (cut redundant words, use participles and reduced relative clauses).']);
A('t2l', { bloom: 'evaluate', type: 'rewrite', title: 'Condensing sentences (Lesson 20)', instr: 'Rewrite more concisely while keeping the meaning (use participles / reduced clauses / nominalisation).',
  items: [
    { q: 'There are many people who think that the government should be the one that pays for the education of adults who cannot read.', a: ['Many people think the government should fund literacy education for adults.'] },
    { q: 'Because of the fact that technology is developing very fast, there are many jobs that are being replaced by machines.', a: ['Given the rapid pace of technological change, many jobs are being replaced by machines.'] },
  ] });
A('t2l', { bloom: 'create', type: 'write', kind: 'task2', title: '2-part question (Band 8)', prompt: 'More and more people are spending large sums of money on cosmetic procedures to look younger. Why do people want to look younger? Is this a positive or negative development?\n\nWrite at least 250 words. Answer both questions briefly in the introduction.', minWords: 250, focus: ['an introduction answering both questions', 'Body 1 question 1, Body 2 question 2', 'the 5-question checklist'] });
A('g2', { bloom: 'apply', type: 'rewrite', title: 'Check articles & agreement', instr: 'Correct EVERY error in articles, singular/plural and subject–verb agreement.',
  items: [
    { q: 'The number of student who studies abroad have increased, and the most of them choose the English-speaking country.', a: ['The number of students who study abroad has increased, and most of them choose English-speaking countries.'] },
    { q: 'A knowledge of foreign language give young people the advantage in the job market.', a: ['Knowledge of a foreign language gives young people an advantage in the job market.'] },
    { q: 'Each of the policy have the different effect on the economy.', a: ['Each of the policies has a different effect on the economy.'] },
  ] });
A('t1g', { bloom: 'apply', type: 'rewrite', title: 'Mixed-chart intro + overview', instr: 'The charts above (visitors to Da Nang + purpose of visit). Write as required.', chart: U('t1g').exercises.find(e => e.chart) && U('t1g').exercises.find(e => e.chart).chart,
  items: [
    { q: 'An intro combining the 2 charts (while)', a: ['The line graph illustrates how many international visitors came to Da Nang between 2015 and 2023, while the pie chart shows the main reasons for their visits.'] },
    { q: 'Overview: one sentence per chart, no figures', a: ['Overall, international arrivals to Da Nang grew strongly until 2019, collapsed in 2021 and then recovered to almost their earlier peak. Regarding the purpose of visits, leisure was by far the most common reason.'] },
  ] });
})();
