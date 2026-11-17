/* Câu hỏi CHIẾN THUẬT cho Task 1 / Task 2 (trắc nghiệm 2 tầng: chọn phương án + chọn lý do).
   Phương án nhiễu là lỗi tư duy/chiến thuật thật (overview có số liệu, topic sentence chỉ bao 1 ý, giải pháp chung chung...),
   không phải lỗi ngữ pháp cài máy. Tự soạn. */
(function () {
const U = id => window.UNITS.find(u => u.id === id);
const I = (q, o, a, w, wa, ex) => ({ q, options: o, a, why: { options: w, a: wa }, ex });
function S(id, bloom, lv, title, instr, items) { U(id).exercises.push({ bloom, lv, type: 'mcq2', title, instr, items, strategy: true }); }
function M(id, bloom, lv, title, instr, items) { U(id).exercises.push({ bloom, lv, type: 'mcq', title, instr, items: items.map(([q, o, a, ex]) => ({ q, options: o, a, ex })), strategy: true }); }
const T1 = 'Step 1: choose the better option. Step 2: choose the correct reason. Full marks only when both steps are correct.';

S('t1a', 'analyze', 3, 'Diagnose the overview', T1, [
  I('Chart: visitors to 3 museums, 2010–2020. Museum A rose sharply, while B and C fell slightly; A was always the highest.',
    ['Overall, Museum A saw a sharp rise in visitors and remained the most popular throughout, whereas the other two attracted slightly fewer people over the period.', 'Overall, Museum A rose from 2 million to 5 million visitors, while B fell from 1.5 million to 1.2 million and C from 1 million to 0.8 million.'], 0,
    ['The other option puts detailed figures in the overview instead of summarising the main features', 'The other option uses the wrong tense for a period in the past', 'The other option is too short to meet the word requirement'], 0,
    'An overview summarises the main trends/features; specific figures belong in the body.'),
  I('Table: the percentage of households owning a car in 5 cities, 2000 and 2020; all rose, and city E was always the lowest.',
    ['Overall, car ownership was highest in City A in 2000, which is probably because people there were richer.', 'Overall, every city recorded higher car ownership in 2020 than in 2000, with City E consistently having the lowest rate.'], 1,
    ['The other option mentions only one point in time and adds an explanation not in the data', 'The other option uses the wrong article before the chart type', 'The other option copies the prompt instead of paraphrasing it'], 0,
    'Task 1 does not speculate about causes; the overview must cover the general trend of the whole period.'),
]);
S('t1c', 'understand', 3, 'Why is this comparison better?', T1, [
  I('Single-year bar chart: average salary in 4 sectors (Health 52k, IT 61k, Education 38k, Retail 27k).',
    ['IT workers earned the most, at $61,000, followed by healthcare staff ($52,000), while those in retail took home just $27,000, less than half the IT figure.', 'Salaries in IT increased to $61,000, and healthcare salaries grew to $52,000, but retail salaries dropped to $27,000.'], 0,
    ['The chart covers only one year, so rises/falls cannot be described; comparison and ranking are needed', 'The other option gives no figures for the four sectors, so it cannot be checked', 'The other option uses the passive voice, which is not suitable for bar charts'], 0,
    'Static data (no change): use comparison, ranking and multiples (twice as much...), not trend words.'),
  I('Same chart. Which way of grouping the body is more logical?',
    ['Paragraph 1: Health. Paragraph 2: IT. Paragraph 3: Education. Paragraph 4: Retail.', 'Paragraph 1: the two high-paying sectors (IT, Health). Paragraph 2: the two low-paying sectors (Education, Retail).'], 1,
    ['Grouping by shared features allows comparison within groups and avoids disjointed description', 'Four body paragraphs make the essay longer, so it scores higher', 'You must describe things in the exact order of the chart'], 0,
    'Band 7 TA: "data categorised": the data is grouped, not read column by column.'),
]);
S('t1g', 'understand', 2, 'Overview for a Mixed task', T1, [
  I('Prompt: line graph (tourist numbers 2010–2020, rising steadily) + pie chart (purposes of trips in 2020, with leisure travel the largest share).',
    ['Overall, visitor numbers rose steadily over the decade, and in 2020 most trips were made for leisure.', 'Overall, visitor numbers rose steadily over the decade, reaching their highest point in 2020.'], 0,
    ['An overview for a Mixed task must state the main point of BOTH charts', 'The overview must include the peak year\'s figure', 'The overview only needs one very short sentence'], 0,
    'Leaving one chart out of the overview means leaving out a main feature → it affects Task Achievement.'),
  I('Same prompt. Which sentence links the two charts more appropriately?',
    ['The rise in tourists was caused by people taking more holidays, as the pie chart proves.', 'This growth coincided with a year in which leisure was by far the most common purpose of travel.'], 1,
    ['The other option claims a cause-and-effect relationship that the data does not prove', 'The other option uses vocabulary that is too simple for Band 7', 'The other option gives no figures to support its claims'], 0,
    'You may mention two facts together, but do not infer causes when the chart gives no such information.'),
]);
S('t1g', 'understand', 3, 'Paragraph transitions in a Mixed task', T1, [
  I('The task has a table (population of 4 cities) and a bar chart (house prices in 4 cities). Which opening sentence for paragraph 2 is better?',
    ['Secondly, the bar chart shows the information about the house prices in the four different cities.', 'Turning to housing costs, the picture is somewhat different, with the most populous city not the most expensive.'], 1,
    ['A good opening sentence both shifts the topic and signals the paragraph\'s main point', 'The shorter the opening sentence, the easier it is to follow', 'You must repeat the name of the chart type in each paragraph'], 0,
    'Band 7–8 CC: clear progression; transitions with content help the reader follow.'),
  I('Which sentence handles two different units (people and USD) more accurately?',
    ['City A had the largest population (8 million) and the highest average house price ($420,000).', 'City A was the biggest, at 8 million and $420,000, respectively higher than the others.'], 0,
    ['The other option merges the two units into one phrase, making the figures ambiguous', 'The other option uses the wrong tense for the year shown', 'The other option contains a passive sentence, which is not allowed'], 0,
    'Each figure must be clearly tied to its quantity; "respectively" is only for clear parallel lists.'),
]);
S('t1d', 'analyze', 3, 'What is wrong with this sentence describing the pie chart?', T1, [
  I('Data: coal energy 2000: 48% → 2020: 25%. Sentence: "Coal fell by 25% between 2000 and 2020."',
    ['A figure/preposition error: coal fell by 23 percentage points, to 25%, so it should be "fell to 25%".', 'A tense error: the present perfect is needed because the period lasts until now.'], 0,
    ['"by" shows the difference and "to" shows the level reached; the original sentence confuses the two', 'The period continues to the present, so the present perfect is needed', 'The verb fall cannot be used to describe pie chart data'], 0,
    'Accurate figures are the foundation of Task Achievement. The period 2000–2020 is over → the past simple is correct.'),
  I('Data: wind 2000: 5% → 2020: 20%. Sentence: "Wind power quadrupled, accounting for a fifth of energy in 2020."',
    ['The sentence is correct.', 'Error: "quadrupled" is wrong because 5 → 20 is only a rise of 15 points.'], 0,
    ['5% × 4 = 20% and 20% = one fifth, so both pieces of information are accurate', 'Fractions cannot be used when there are percentages', 'Quadrupling must be written as "increased fourfold to"'], 0,
    '"Quadrupled" describes a ratio; "rose by 15 percentage points" describes a difference. Both can be correct.'),
]);
S('t1e', 'understand', 3, 'Choose how to describe a process', T1, [
  I('Natural process: the life cycle of a frog.',
    ['Eggs are laid by the female, after which tadpoles are hatched and legs are grown.', 'The female lays eggs, which hatch into tadpoles that gradually grow legs.'], 1,
    ['Natural processes are usually described in the active; "are hatched" and "are grown" give the wrong meaning', 'The passive is always the better choice for Task 1 processes', 'The correct sentence must state the number of stages in the cycle'], 0,
    'The passive is used when an agent acts on something (man-made processes). Eggs hatch and legs grow by themselves → active.'),
  I('An overview for the process of making recycled paper (7 stages).',
    ['Overall, there are seven stages, beginning with the collection of used paper and ending with rolls of new paper being sent to manufacturers.', 'Overall, paper is recycled in a factory, which is very good for the environment because it saves trees.'], 0,
    ['The overview needs the number of stages and the first and last stages; no opinions', 'The overview must mention the benefits for the environment', 'The overview should describe the most important stage'], 0,
    'Opinions ("very good for the environment") do not belong in Task 1.'),
]);
S('t1f', 'analyze', 3, 'Diagnose sentences describing a map', T1, [
  I('Sentence: "In 2020, the trees in the north were demolished to make way for a car park."',
    ['A collocation error: trees are not "demolished"; use "cut down/cleared".', 'A tense error: it should be "have been demolished".'], 0,
    ['"demolish" is used for buildings and structures', 'Maps with two past dates use the present perfect', 'The passive cannot be used for maps'], 0,
    'Lexical Resource: accurate collocations (demolish buildings, clear/cut down trees).'),
  I('Which overview is better for the map (a village 2000 → 2020: many new houses and roads, less farmland)?',
    ['Overall, the village became considerably more residential, with farmland giving way to housing and new roads.', 'Overall, in 2000 there was a farm in the east and a school in the west, and in 2020 there were houses.'], 0,
    ['The overview states the general pattern of change without listing the position of each detail', 'The overview must give the position of each change by compass direction', 'The overview must begin with the year 2000 and then move forward in time'], 0,
    'Map overview = the general pattern (urbanisation, loss of green space...) + the biggest change.'),
]);
M('t1h', 'remember', 2, 'Recall: Task 1 Task Achievement', 'Choose the correct answer according to the public band descriptors.', [
  ['According to the band descriptors, which feature belongs to Band 7 Task Achievement (Academic)?', ['A clear overview, data that is grouped, and the main trends/differences identified', 'The report is over 200 words and has a lot of rare vocabulary', 'Every figure is described in year order'], 0, 'Length and rare words are not TA criteria.'],
  ['"Details recounted mechanically with no clear overview" is a sign of which band?', ['Band 7', 'Band 5', 'Band 8'], 1, 'Band 5 TA: focuses on details and lacks an overview.'],
  ['How is a Task 1 response of 20 words or fewer marked?', ['Band 1', 'Band 4', 'Minus 1 band'], 0, 'The band descriptors state clearly that a response of 20 words or fewer is rated Band 1.'],
]);
S('t1h', 'understand', 2, 'Select the figures', T1, [
  I('A line graph with 6 years and 3 lines. Which sentence selects figures better for the body?',
    ['Bus use fell from 820,000 to 590,000 daily passengers over the period, while the metro, opened in 2016, climbed rapidly to 780,000.', 'In 2010 bus was 820,000, in 2013 790,000, in 2016 760,000, in 2019 700,000, in 2022 610,000 and in 2025 590,000.'], 0,
    ['Choosing the start, end and notable points shows the trend; listing every year is "mechanical"', 'You must mention every data point to achieve Task Achievement', 'The other option does not compare the figures for two years'], 0,
    'Selecting figures is a key Task Achievement skill.'),
  I('Which sentence is more accurate: the metro starts from 0 in 2016 (no data before that)?',
    ['The metro increased from 0 passengers in 2010 to 780,000 passengers a day in 2025.', 'The metro, which only began operating in 2016, carried 780,000 passengers a day by 2025.'], 1,
    ['The other option implies the metro existed in 2010, which contradicts the data', 'The other option does not use a relative clause to add detail', 'The other option uses the wrong tense for a past period'], 0,
    'Read the data carefully: the starting point of a new category must be described accurately.'),
]);
S('t1h', 'understand', 3, 'Precision of description', T1, [
  I('Data: 2010: 40%, 2015: 41%, 2020: 39%. Which sentence is more accurate?',
    ['The figure fluctuated dramatically between 2010 and 2020.', 'The figure remained relatively stable at around 40% throughout the decade.'], 1,
    ['A fluctuation of 1–2 points is almost stable; "dramatically" exaggerates the data', '"fluctuate" must be used whenever figures go up and down', 'The other option has no figures'], 0,
    'The strength of the vocabulary (dramatically/slightly) must match the size of the change.'),
  I('Which overview is better for the chart of 4 countries (2 rise, 2 fall; Vietnam rises fastest)?',
    ['Overall, while forest cover expanded in two countries, most notably Vietnam, it contracted in the other two.', 'Overall, the forest cover of the four countries changed in different ways during the period shown.'], 0,
    ['A good overview states the main trends specifically, not just "changed in different ways"', 'The overview must include Vietnam\'s exact figures for each year', 'The overview must mention the projected year and its figure'], 0,
    'A vague overview ("changed in different ways") does not tell the reader the main features → Band 6 or below.'),
]);
S('t1h', 'analyze', 3, 'Diagnose a change-over-time report', T1, [
  I('The body contains only: "In 1990, Brazil was 70%. In 2000, it was 66%. In 2010, it was 62%. In 2020, it was 59%."',
    ['The main problem: mechanical listing, with no generalisation or comparison (TA/CC).', 'The main problem: serious grammar errors that block the meaning (GRA).'], 0,
    ['The sentences are grammatical but only read out figures, with no trend or comparison', 'Every sentence is missing a main verb, so none is complete', 'Years must be written in words, not in numbers'], 0,
    'A report can be grammatical but still weak in TA because details are "mechanically recounted".'),
  I('Sentence: "Indonesia\'s forest cover will drop to 47% in 2030 because of illegal logging."',
    ['The problem: it adds a cause that is not in the data.', 'The problem: "will" cannot be used for projected figures.'], 0,
    ['Task 1 only describes the data given', '"will" is always wrong in Task 1', 'It must be written as 47 percent'], 0,
    '"will" can still be used for projections; the error is information from outside the data.'),
]);
M('t1j', 'remember', 2, 'Recall: paragraphing by number of categories', 'Choose the correct answer.', [
  ['A chart has 4 categories: what is the usual way to divide the body?', ['2 paragraphs, each with 2 categories that share a feature', '4 paragraphs, one for each category in turn', 'A single paragraph covering all four categories'], 0, 'Group by shared features to compare within groups.'],
  ['A chart has 6 categories: what should you do?', ['Describe each category in turn', 'Group them by feature (high/low, rising/falling)', 'Describe only the 2 largest categories'], 1, 'Grouping makes the report coherent; important categories still need to be mentioned.'],
  ['Which grouping criterion is NOT logical?', ['In alphabetical order of category name', 'The same trend (rising or falling)', 'A similar level (high or low)'], 0, 'Groups must be based on features of the data.'],
]);
S('t1k', 'understand', 3, 'Handle projections and totals', T1, [
  I('An employment chart has a "Total" line. Which approach is more logical?',
    ['Mention the Total in the overview (the total is almost stable), then describe the sectors in the body.', 'Describe the Total as a fourth sector, mixed in with the other sectors in the body.'], 0,
    ['The Total is the overall picture, not a category on the same level', 'The Total must always go at the end of the final paragraph', 'The Total does not need to be mentioned, as it repeats the data'], 0,
    'Putting the Total in the right place helps the reader understand the structure of the data.'),
  I('Which sentence clearly separates real data from projections?',
    ['Healthcare employment rose to 4.4 million in 2025 and is projected to reach 6.1 million by 2040.', 'Healthcare employment rose to 4.4 million in 2025 and reached 6.1 million in 2040.'], 0,
    ['The other option describes projected figures as if they had already happened', 'The other option does not use the passive', 'The other option does not have the preposition "by"'], 0,
    'Years marked * are projections → use is projected/expected to.'),
]);
S('t2a', 'understand', 3, 'Which thesis answers the prompt correctly?', T1, [
  I('Prompt: "Some people think that the government should pay for university education. To what extent do you agree or disagree?"',
    ['This essay will discuss the advantages and disadvantages of free university education for students and society.', 'I largely agree, as public funding widens access to higher education, although students who benefit financially could contribute later through taxes.'], 1,
    ['The prompt asks for a degree of agreement; the thesis must state a position', 'The thesis must list 3 reasons, one for each body paragraph', 'The thesis must contain a passive sentence to sound academic'], 0,
    'Writing an Advantages/Disadvantages thesis for an Opinion prompt answers the wrong type → TR is limited.'),
  I('Prompt: "Why do many young people leave rural areas? What can be done to encourage them to stay?"',
    ['Young people leave mainly because of limited jobs and services, and better local employment and transport could persuade more of them to stay.', 'Rural life has many advantages, but city life is more exciting, so many young people prefer to live in cities.'], 0,
    ['A two-part prompt needs a thesis that answers both the causes and the solutions', 'The thesis must agree or disagree with the statement in the prompt', 'The shorter the thesis, the better it answers the question'], 0,
    'TR band descriptors: "main parts of the prompt are addressed" is the Band 6–7 threshold.'),
]);
S('t2b', 'analyze', 3, 'Diagnose a body paragraph', T1, [
  I('Topic sentence: "Cycle lanes improve public health." The paragraph then discusses health AND reduced congestion.',
    ['The error: the topic sentence covers only 1 idea while the paragraph has 2.', 'The error: the paragraph is too short for a body paragraph.'], 0,
    ['A topic sentence must signal the whole content of the paragraph', 'Each paragraph may contain only one idea', 'A two-idea paragraph must be over 200 words'], 0,
    'Fix: "Cycle lanes benefit both public health and traffic flow."'),
  I('Paragraph: "Online learning is flexible. For example, my cousin studies at night. So online learning is good."',
    ['The main problem: it does not explain why flexibility is beneficial, and the example is too personal.', 'The main problem: it uses the wrong tenses in most of its sentences.'], 0,
    ['A one-idea paragraph needs an explanation between the point and the example', 'Personal examples always lose a band, so it must be removed', '"So" cannot be used in Task 2 because it is informal'], 0,
    'Band 6 TR: "some main ideas are underdeveloped". Personal examples may be used but should be more general.'),
]);
S('t2c', 'understand', 2, 'Arguing an "only way" prompt', T1, [
  I('Prompt: "The only way to reduce traffic congestion is to build more roads." Which thesis is safer and tighter?',
    ['I disagree, because while new roads may ease congestion briefly, better public transport and flexible working hours offer longer-term relief.', 'I agree, because building roads is the only solution, and nothing else can work in big cities.'], 0,
    ['"Only" is an absolute claim; it is easy to rebut with other solutions', 'Agreeing is always marked lower than disagreeing', 'The thesis must have two similar reasons to be balanced'], 0,
    'There is no rule against agreeing, but you would have to prove there is no other way, which is very hard.'),
  I('Which body paragraph better supports a "No" thesis?',
    ['Roads are expensive to build. Also, they take a long time. Moreover, people do not like them very much.', 'Expanding roads often attracts more drivers, so congestion returns within a few years; investment in rail tends to remove cars from the road altogether.'], 1,
    ['The chosen option explains the mechanism and compares it with other ways', 'The chosen option is longer, so it is better developed', 'The chosen option has more linkers, so it is more coherent'], 0,
    'An argument needs a mechanism (why), not just a list of comments.'),
]);
S('t2c', 'understand', 3, 'Keep a consistent position', T1, [
  I('Introduction: "I completely disagree." Which conclusion is consistent?',
    ['In conclusion, I partly agree that exams are useful and fair in some cases.', 'In conclusion, although exams offer a convenient snapshot of ability, they are too narrow to be the fairest measure.'], 1,
    ['The position in the conclusion must match the introduction', 'The conclusion must contain a new idea to impress the reader', 'The conclusion should be neutral to avoid a wrong position'], 0,
    'Band 6 TR: "conclusions may be unclear, unjustified or repetitive"; changing position halfway lowers TR.'),
  I('Which concession sentence suits a "disagree" position?',
    ['Admittedly, exams are easy to administer on a large scale; however, this convenience does not make them fair.', 'Exams are definitely the fairest method of all, and everyone already knows this.'], 0,
    ['It concedes one point of the other side, then returns to the writer\'s position', 'A concession must fully agree with the other side\'s view', 'Nothing may be conceded in an Opinion essay, ever'], 0,
    'A controlled concession makes the argument more persuasive.'),
]);
S('t2d', 'understand', 2, 'Discussion: balancing both sides', T1, [
  I('A Discuss-both-views prompt. Which structure is more correct?',
    ['Body 1: view A. Body 2: view B + my opinion (or the opinion in the thesis and conclusion).', 'Body 1: my opinion. Body 2: more reasons for my opinion, with examples.'], 0,
    ['The prompt asks you to discuss both views AND give an opinion', 'A Discussion essay needs no personal opinion', 'The opinion must go in a separate third paragraph'], 0,
    'Leaving out one view means leaving out a main part of the prompt.'),
  I('Which sentence presents the opposing view more objectively?',
    ['Some people foolishly believe that children should stay in the countryside.', 'Those who favour a rural upbringing point to cleaner air and closer-knit communities.'], 1,
    ['An opposing view must be presented fairly, without disparagement', 'You must use "Some people believe" to introduce it', 'It must include figures to be presented fairly'], 0,
    'A fair, academic tone makes the argument more credible.'),
]);
S('t2d', 'understand', 3, 'Advantages outweigh: weighing the balance', T1, [
  I('Prompt: "Do the advantages of AI at work outweigh the disadvantages?" Which thesis is better?',
    ['There are both advantages and disadvantages of using AI at work, for workers and companies.', 'I believe the gains in productivity outweigh the risks, provided that workers are retrained for the tasks AI cannot do.'], 1,
    ['The prompt asks which side is greater; the thesis must weigh them and reach a conclusion', 'The thesis must list 2 advantages and 2 disadvantages in turn', 'The thesis must not contain any conditions or exceptions'], 0,
    'Saying only "there are both advantages and disadvantages" does not answer the question.'),
  I('Which paragraph shows the "weighing" more clearly?',
    ['Advantages: faster work, fewer errors, lower costs. Disadvantages: job losses, high set-up costs, privacy risks.', 'Although some routine jobs may disappear, this loss is likely to be smaller and more temporary than the long-term productivity gains, which can fund new roles.'], 1,
    ['The chosen option compares the size and duration of the two sides', 'The chosen option has more linkers, so it is more coherent', 'The chosen option has no figures, so it is more general'], 0,
    '"Outweigh" requires a direct comparison, not just a list.'),
]);
S('t2d', 'analyze', 3, 'Diagnose a Discussion essay', T1, [
  I('The essay presents both views fully but gives no opinion of its own anywhere.',
    ['The main effect: Task Response (part of the prompt is missing).', 'The main effect: Lexical Resource (the vocabulary is too limited).'], 0,
    ['"Give your own opinion" is a main part of the prompt', 'A missing opinion makes the vocabulary weaker', 'A missing opinion is a grammar error'], 0,
    'Band 5 TR: "main parts of the prompt are incompletely addressed".'),
  I('The introduction supports A, but the conclusion supports B.',
    ['The problem: an inconsistent position (TR) and broken line of argument (CC).', 'There is no problem because both sides are discussed.'], 0,
    ['The reader does not know what the writer really thinks', 'The conclusion is allowed to change opinion', 'It is only a spelling error'], 0,
    'The position must be clear and consistent from start to finish.'),
]);
S('t2e', 'understand', 2, 'Does the solution match the problem?', T1, [
  I('Problem: young people struggle to buy homes because prices are high relative to income. Which solution matches better?',
    ['Governments could build affordable rental housing and offer first-time buyers low-interest loans.', 'People should work harder and save more money so that they can afford a home.'], 0,
    ['The chosen solution acts directly on prices/affordability and has a clear agent', 'The chosen solution is longer, so it is more developed', 'The other solution is ungrammatical in its main clause'], 0,
    'A vague solution that puts the responsibility on individuals does not address a structural barrier.'),
  I('Which solution sentence is better developed?',
    ['The government should solve this problem by doing something about housing as soon as possible.', 'Local councils could require developers to include a share of low-cost flats in new projects, which would increase supply without large public spending.'], 1,
    ['It has an agent, a specific action and a mechanism', 'It uses "could" instead of "should"', 'A longer sentence is always better'], 0,
    'A good solution: who acts, what they do, and why it works.'),
]);
S('t2f', 'understand', 3, 'Referencing instead of repetition', T1, [
  I('Which next sentence links better to the previous one: "Many cities have introduced congestion charges."?',
    ['This policy has reduced traffic in central areas, although its impact on poorer drivers remains controversial.', 'Moreover, congestion charges have reduced traffic, and congestion charges are controversial.'], 0,
    ['Referencing with "This policy" links ideas naturally, avoiding repetition and mechanical linkers', 'Moreover is always wrong at the start of a sentence', 'The chosen sentence has rarer vocabulary, which scores higher'], 0,
    'Band 7 CC: flexible use of referencing and substitution.'),
  I('Which sentence shows better Lexical Resource while still sounding natural?',
    ['Technology has a big effect on people\'s creativity in a bad way nowadays.', 'Technology may stifle creativity when it replaces, rather than supports, hands-on problem solving.'], 1,
    ['Precise vocabulary (stifle, hands-on) and natural collocations', 'The more rare words a sentence has, the higher it scores', 'A sentence with "may" always scores highly'], 0,
    'The band descriptors do not reward rare words in themselves; they reward precision and flexibility.'),
]);
S('t2g', 'understand', 2, 'Counter-argument paragraph structure', T1, [
  I('Which paragraph is a genuine counter-argument?',
    ['It is true that zoos protect some endangered species. However, most animals in zoos are not endangered, and conservation can be done more effectively in the wild.', 'Zoos are bad for animals. Animals are sad in small cages, and visitors do not care about them. Therefore zoos should close as soon as possible.'], 0,
    ['It concedes the other side\'s point, then rebuts it with a reason', 'A counter-argument restates your own point more strongly', 'A counter-argument must include figures'], 0,
    'Without a concession step, it is not a counter-argument.'),
  I('Which rebuttal is tighter?',
    ['However, this is wrong, and this reasoning is not true.', 'However, this reasoning overlooks the fact that most zoo species are not threatened at all.'], 1,
    ['A rebuttal must show where the other argument goes wrong', 'The shorter the rebuttal, the stronger', '"This is wrong" is more academic'], 0,
    'An effective rebuttal targets the other side\'s assumptions or evidence.'),
]);
S('t2g', 'understand', 3, 'Fair concessions', T1, [
  I('Which concession sentence is fairer?',
    ['Granted, tuition fees can encourage students to take their studies seriously.', 'Some silly people think students should pay everything.'], 0,
    ['Presenting the other side\'s point in its strongest form makes the rebuttal convincing', 'Disparaging the other side makes the essay sound stronger', 'Granted is a forbidden word in academic writing'], 0,
    'An academic tone and fair argument.'),
  I('Where is it logical to place a counter-argument paragraph?',
    ['After the main argument paragraphs and before the conclusion (or embedded in a body paragraph).', 'Straight after the thesis, in the introduction, before the main arguments.'], 0,
    ['The reader needs to see the main argument before the counter-argument', 'The introduction must be long', 'The counter-argument is always the first paragraph'], 0,
    'There is no required position, but this order is usually the most coherent.'),
]);
S('t2g', 'analyze', 3, 'Diagnose a counter-argument paragraph', T1, [
  I('Paragraph: "It is true that X. It is true that Y. It is true that Z." (no rebuttal)',
    ['The problem: it only concedes without rebutting → it weakens the position.', 'The problem: repeated linkers at the start of each sentence.'], 0,
    ['Without a rebuttal step, the paragraph supports the other side', 'Changing the linkers is enough to fix the paragraph', 'The paragraph is too long for a counter-argument'], 0,
    'Repeated linkers are also a problem, but the flaw in the argument is more serious.'),
  I('The paragraph rebuts with: "However, I think this is not right because it is not right."',
    ['The problem: circular reasoning, with no real reason.', 'The problem: using "I think" in Task 2.'], 0,
    ['The reason just repeats the conclusion', '"I think" is forbidden in academic writing', 'It has no figures to support the claim'], 0,
    '"I think" is acceptable; the error is that there is no reason.'),
]);
S('t2h', 'understand', 2, 'Why is this a no-no?', T1, [
  I('Which sentence suits the Task 2 tone?',
    ['Kids can\'t live without phones, can they?', 'Many children have become heavily dependent on their phones.'], 1,
    ['The other option uses contractions and a rhetorical question', 'The other option is too short for an academic sentence', 'The other option uses the wrong tense for a general claim'], 0,
    'Academic writing avoids contractions and rhetorical questions.'),
  I('Which sentence is safer in terms of argument?',
    ['Everyone knows that social media is harmful to all young people.', 'Excessive use of social media may harm young people\'s concentration.'], 1,
    ['The other option makes an unfounded absolute claim', 'The other option has no linker', 'The other option uses the wrong article'], 0,
    'Absolute claims are easy to rebut and reduce the accuracy of an argument.'),
]);
S('t2h', 'understand', 3, 'Conclusions add no new ideas', T1, [
  I('Which conclusion does its job?',
    ['In conclusion, studying history helps students understand the present, which is why it remains worthwhile.', 'In conclusion, history is useful, and also schools should teach coding because it is the future.'], 0,
    ['The conclusion sums up the position without adding new points', 'The conclusion must have a new idea to impress', 'The conclusion must restate the prompt word for word'], 0,
    'A new idea in the conclusion is not developed → it affects TR and CC.'),
  I('Which sentence replaces "etc." better?',
    ['People use phones for many things, such as calling, etc.', 'People use phones for communication, entertainment and even banking.'], 1,
    ['It lists specifically instead of trailing off', '"etc." is academic', 'You must list at least 5 things'], 0,
    'Specific examples make the idea clearer.'),
]);
S('t2i', 'understand', 2, 'Answer an "A better than B" prompt correctly', T1, [
  I('Prompt: "Is it better to work for a large company or a small business?" Which body answers the prompt type correctly?',
    ['Large companies offer stable salaries. Small businesses are often family-run.', 'Large companies usually offer clearer career paths than small firms, whose limited budgets often restrict training.'], 1,
    ['The prompt asks which is better → the two sides must be compared directly', 'Each side must be described separately in its own paragraph', 'It must include figures to compare the two sides'], 0,
    'Describing the two sides separately without comparing them does not answer the question.'),
  I('A "Should...?" prompt: which thesis is correct?',
    ['Public transport should be free for students, as this would reduce costs for low-income families and ease traffic.', 'There are many different opinions about free public transport for students.'], 0,
    ['A "Should" prompt needs a clear yes/no answer', 'The thesis must be neutral so that it cannot be wrong', 'The thesis needs no reasons, only a yes or no'], 0,
    'A clear position is a requirement for TR Band 7+.'),
]);
S('t2i', 'understand', 3, 'Group-based theses', T1, [
  I('Which group-based thesis is more specific?',
    ['Each option is better for different people, depending on what they want and what kind of job they are looking for.', 'Large companies tend to suit graduates seeking structured training, while small businesses suit those who want broader responsibility early on.'], 1,
    ['A group-based thesis must say clearly which group suits which option', 'A group-based thesis is a neutral thesis that avoids a position', 'The thesis must be shorter than 15 words to be clear'], 0,
    'Naming specific groups gives the body a clear direction.'),
  I('When should you NOT use a group-based thesis?',
    ['When one option is clearly better for most people.', 'When the prompt asks "Which is better?"'], 0,
    ['Dividing by group only makes sense when each side really suits one group better', 'A "Which is better" prompt forbids dividing the answer by group', 'Dividing by group always scores higher than choosing one side'], 0,
    'Choose your approach based on the argument, not on a "trick".'),
]);
S('t2j', 'understand', 2, 'Positive/negative evaluation', T1, [
  I('Prompt: "More people are buying second-hand clothes. Positive or negative?" Which thesis is correct?',
    ['This is a largely positive development, as it reduces textile waste and lowers living costs.', 'Second-hand clothes are clothes that were worn by other people before.'], 0,
    ['The thesis must give an evaluation', 'The thesis must define the concept', 'The thesis must be neutral'], 0,
    'The prompt asks for an evaluation; a definition is not an answer.'),
  I('Which paragraph supports a "positive" evaluation better?',
    ['Second-hand clothing extends the life of garments, so fewer new items need to be produced, reducing water use and waste.', 'Second-hand clothes are cheap and nice and good, so people like buying them.'], 0,
    ['It explains the mechanism (why it is positive)', 'Short sentences are easier to understand', 'It has more adjectives'], 0,
    'An argument must show the impact, not just label something good or bad.'),
]);
S('t2j', 'understand', 3, 'Conditional evaluation', T1, [
  I('Prompt: "Children now use computers before they can read." Which thesis is more nuanced but still clear?',
    ['It is both positive and negative for children and their families, so it depends on the situation.', 'This is mostly negative if screens replace reading with adults, but it can be beneficial when parents use educational apps alongside books.'], 1,
    ['An evaluation with specific conditions is still a clear answer', '"Both" is the clearest position, because it covers everything', '"if" cannot be used in a thesis, as it makes it unclear'], 0,
    '"Both" without conditions avoids the question.'),
  I('Which conclusion is consistent with a "mostly negative" thesis?',
    ['Overall, early screen use carries more risks than benefits, unless it is carefully guided by parents.', 'Overall, computers are the future, so children must use them as early as possible.'], 0,
    ['The conclusion repeats the evaluation already given', 'The conclusion should change opinion for balance', 'The conclusion must contain a new idea'], 0,
    'A consistent position → TR and CC.'),
]);
S('t2k', 'understand', 3, 'Deep causes and chains of effects', T1, [
  I('Which cause sentence goes deeper for "small family shops are closing"?',
    ['Large supermarkets can buy in bulk and sell at lower prices, so small shops lose customers who are sensitive to price.', 'Small shops are closing because there are supermarkets in most towns now.'], 0,
    ['The chosen option explains the mechanism behind the phenomenon', 'The chosen option has more words, so it is better developed', 'The other option is ungrammatical in its main clause'], 0,
    'Naming a factor ≠ explaining a cause.'),
  I('Which sentence is a chain of effects?',
    ['When local shops close, residents must travel further for basic goods, which particularly disadvantages elderly people without cars.', 'The effect is bad for communities, and many people who live in them will feel sad about the change.'], 0,
    ['The effect is developed step by step: A → B → the group affected', 'An effect must include figures to be convincing', 'An effect must use "Firstly" to signal the first step'], 0,
    'A chain of effects develops the idea in depth (TR Band 7+).'),
]);
S('t2k', 'analyze', 3, 'Does the solution match the cause?', T1, [
  I('The stated cause: loneliness from remote work and little face-to-face contact. Solution: "People should use social media more."',
    ['It does not match: the solution could make the lack of face-to-face contact worse.', 'It matches completely, because social media is a form of contact.'], 0,
    ['A solution must act on the cause that was analysed', 'All technology solutions are wrong', 'Solutions must be carried out by the government'], 0,
    'Examples of matching solutions: co-working spaces, regular community activities.'),
  I('Solution paragraph: "Firstly, government. Secondly, schools. Thirdly, families."',
    ['The problem: it only lists agents, without saying what they do or why it works.', 'The problem: wrong tenses in most of the sentences.'], 0,
    ['It lacks the action and the mechanism', 'There must be 4 agents', 'It must begin with "In my opinion"'], 0,
    'Band 5 TR: ideas are limited and undeveloped.'),
]);
M('t2l', 'remember', 2, 'Recall: the Task 2 checklist', 'Choose the correct answer.', [
  ['What are the four Task 2 assessment criteria?', ['Task Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy', 'Task Response, Vocabulary, Grammar and Length of the essay', 'Ideas, Structure, Spelling and Handwriting quality'], 0, 'The four official criteria.'],
  ['Which CC checking question is useful?', ['Are there places where a linker could be removed and the sentence would still flow?', 'Does the essay have all 10 linkers from the lesson?', 'Does each paragraph have exactly 5 sentences in it?'], 0, 'Mechanical linkers are a sign of Band 6 CC ("faulty or mechanical").'],
]);
M('t2l', 'remember', 3, 'Recall: features of the band descriptors', 'Choose the correct answer according to the public band descriptors.', [
  ['How does GRA Band 8 describe errors?', ['Most sentences are error-free; errors are occasional, not systematic', 'There are no errors at all', 'Errors are frequent but do not impede communication'], 0, 'Only Band 9 means "extremely rare errors".'],
  ['How does TR Band 7 differ from Band 6?', ['A clear, developed position; main ideas are extended and supported', 'The essay is longer, usually more than 300 words', 'It has more rare vocabulary and idioms in each paragraph'], 0, 'Band 6: some main ideas are not developed enough; the conclusion may be unclear.'],
  ['What is a feature of LR Band 7?', ['Less common vocabulary, with awareness of collocation and style, though with some inappropriate use', 'No spelling or word-formation errors at all, from the first sentence to the last', 'Many idioms and rare words, used to impress the examiner in every paragraph'], 0, 'The band descriptors reward flexibility and precision; they do not count idioms.'],
]);
S('t2l', 'understand', 3, 'Read model answers against the criteria', T1, [
  I('Paragraph A: many rare words, but vague ideas. Paragraph B: common, precise vocabulary and clearly developed ideas. According to the band descriptors, which usually gets higher TR + LR?',
    ['Paragraph A', 'Paragraph B'], 1,
    ['The descriptors reward precision and development; misused rare words are not rewarded', 'Rare words always earn a high score for Lexical Resource', 'The two paragraphs are equal, as both use academic words'], 0,
    'Misused rare words lower LR; vague ideas lower TR.'),
  I('Which essay fits Band 7 CC better?',
    ['Each paragraph has one central idea, clear referencing and just enough linkers.', 'Every sentence begins with a different linker, so the essay flows.'], 0,
    ['Band 7 CC: clear progression and flexible cohesive devices (including referencing)', 'The more linkers an essay uses, the more coherent it is', 'Linkers must not be used at all in a Band 7 essay'], 0,
    'Excessive linkers count as "overuse".'),
]);
S('t2l', 'analyze', 3, 'Diagnose a draft using the checklist', T1, [
  I('Draft: thesis "I agree", body paragraphs 1 and 2 both support it, conclusion "In conclusion, it depends on the situation".',
    ['The main problem: the conclusion does not match the thesis (TR, CC).', 'The main problem: a lack of vocabulary in the body paragraphs (LR).'], 0,
    ['Checklist: the thesis matches the conclusion', 'Checklist: all 10 collocations', 'Checklist: 5 sentences per paragraph'], 0,
    'Fix: the conclusion restates the agreeing position and the main reasons.'),
  I('The draft contains the sentence: "Being a crowded city, the traffic is terrible."',
    ['A dangling participle (GRA).', 'A flaw in the argument (TR).'], 0,
    ['The subject "the traffic" is not "a crowded city"', 'The sentence is too short for a Band 7 essay', '"Being" cannot be used at the start of a sentence'], 0,
    'Fix: "Because the city is crowded, traffic is terrible." or "Being a crowded city, Hanoi suffers from..."'),
]);
S('t2m', 'understand', 2, '"The best way" prompts', T1, [
  I('Prompt: "The best way to make friends is through social media." Which body suits a No answer?',
    ['Social media makes it easy to start conversations, but shared activities such as clubs or sports usually build deeper friendships because people meet regularly in person.', 'Social media is bad and dangerous, because strangers online can lie about who they are, so it is not a good way to make friends at all.'], 0,
    ['A No answer must concede, then show another way that is more effective', 'A No answer should criticise social media as strongly as possible', 'A No answer needs no examples'], 0,
    '"The best" is a comparison; there must be something to compare with.'),
  I('What must a Yes answer to a "the best way" prompt prove?',
    ['That the way is better than the other ways.', 'That the way is useful for most people.'], 0,
    ['"Useful" is not enough; "best" requires a comparison', 'Only a personal example is needed to prove it', 'Only a definition of the way is needed'], 0,
    'A common error: proving only that something is "good" without proving it is "the best".'),
]);
S('t2m', 'understand', 3, '"The most important factor"', T1, [
  I('Prompt: "Intelligence is the most important factor for success at university." Which thesis is tighter?',
    ['Intelligence is important for university, and it helps students get good grades in most of their subjects.', 'While intelligence helps, I would argue that consistent study habits matter more, since they determine how effectively ability is used.'], 1,
    ['The thesis must place the factor in comparison with other factors', 'The thesis should agree with the statement in the prompt', 'The thesis must include figures to support the claim'], 0,
    '"The most" requires ranking the factors.'),
  I('Which paragraph better supports the thesis above?',
    ['Many highly able students underperform because they study irregularly, whereas students of average ability who revise consistently often achieve higher grades.', 'Study habits are good for students. Intelligence is also good. Both of them help at university.'], 0,
    ['It compares the two factors directly and explains', 'Short sentences are clearer for the reader', 'No comparison is needed for this prompt'], 0,
    'Comparative argument is the core of this prompt type.'),
]);
S('t2m', 'analyze', 3, 'Diagnose a "The best" essay', T1, [
  I('The essay answers Yes, but both body paragraphs only state the benefits of living with a local family, without mentioning any other way of learning about a culture.',
    ['The problem: it has not proved "best" because there is no comparison (TR).', 'There is no problem; the essay answers the question.'], 0,
    ['"Best" requires a comparison with other ways (books, films, short trips...)', 'A Yes answer needs no comparison with other ways', 'Only linkers need to be added to the body'], 0,
    'Adding a paragraph comparing it with 1–2 other ways gives a full answer.'),
  I('Thesis: "Living with a local family is the best and only way and there is no other way."',
    ['The problem: absolute claims, repetition, and a position that is hard to defend.', 'The problem: a missing comma in the thesis statement.'], 0,
    ['Repeating "best/only/no other" does not add persuasion; it makes the argument rigid', 'The thesis must have 3 clauses, one for each part of the essay', 'The thesis cannot contain "and" more than once in a single sentence'], 0,
    'A strong position can still be expressed with control.'),
]);
})();
