/* Lấp đủ mọi ô Bloom × độ khó cho Chặng 2 (Task 1). Số liệu, câu mẫu, đề bài tự soạn. */
(function () {
const U = id => window.UNITS.find(u => u.id === id);
const add = (id, ex) => U(id).exercises.push(ex);
const M = (id, bloom, lv, title, instr, items) => add(id, { bloom, lv, type: 'mcq', title, instr, items: items.map(([q, options, a, ex], i) => { const k = [...(title + q + i)].reduce((s, c) => s + c.charCodeAt(0), 0) % options.length; const o = options.slice(k).concat(options.slice(0, k)); return { q, options: o, a: (a - k + o.length) % o.length, ex }; }) });
const G = (id, bloom, lv, title, instr, items) => add(id, { bloom, lv, type: 'gap', title, instr, items: items.map(([q, a]) => ({ q, a: [].concat(a) })) });
const R = (id, bloom, lv, title, instr, items) => add(id, { bloom, lv, type: 'rewrite', title, instr, items: items.map(([q, a]) => ({ q, a: [].concat(a) })) });
const W = (id, lv, title, prompt, chart, focus, minWords = 150) => add(id, { bloom: 'create', lv, type: 'write', kind: 'task1', title, prompt, chart, minWords, focus });
const SNAP = window.KL_SNAP();
const P = s => `${s}\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`;

/* ---------- dữ liệu mới ---------- */
const LINE_COFFEE = { kind: 'line', title: 'Average coffee consumption per person in four countries (kg/year), 2000–2020', unit: 'kg', labels: ['2000', '2005', '2010', '2015', '2020'],
  series: [{ name: 'Finland', data: [11.0, 11.5, 12.0, 12.1, 12.0] }, { name: 'Brazil', data: [4.2, 4.8, 5.5, 6.0, 6.3] }, { name: 'Japan', data: [3.0, 3.3, 3.4, 3.6, 3.7] }, { name: 'Vietnam', data: [0.4, 0.7, 1.1, 1.6, 2.2] }] };
const BAR_COMMUTE = { kind: 'bar', title: 'How workers in a city travelled to work (%), 2022', unit: '%', labels: ['Car', 'Bus', 'Metro', 'Bicycle', 'Walking'],
  series: [{ name: 'Under 30', data: [18, 27, 31, 15, 9] }, { name: '30 and over', data: [46, 21, 19, 5, 9] }] };
const MIX_WATER = { kind: 'table', title: 'Water use in Country Y: total (billion m³) and share by sector (%), 1990 vs 2020', headers: ['', 'Total use', 'Agriculture', 'Industry', 'Households'],
  rows: [['1990', '42', '71%', '19%', '10%'], ['2020', '58', '55%', '26%', '19%']] };
const PIE_WASTE = { kind: 'pie', unit: '%', title: 'How household waste was treated in a city, 2005 and 2025', pies: [
  { title: '2005', slices: [{ name: 'Landfill', value: 68 }, { name: 'Recycling', value: 12 }, { name: 'Incineration', value: 15 }, { name: 'Composting', value: 5 }] },
  { title: '2025', slices: [{ name: 'Landfill', value: 24 }, { name: 'Recycling', value: 38 }, { name: 'Incineration', value: 22 }, { name: 'Composting', value: 16 }] }] };
const PROCESS_TEA = { kind: 'process', title: 'How black tea is produced', steps: ['Tea leaves are picked by hand', 'Leaves are spread out to wither (12–18 hours)', 'Withered leaves are rolled to break the cells', 'Leaves are left to oxidise and turn dark', 'Leaves are dried in hot air at 120°C', 'Dried tea is sorted by size', 'Tea is packed and shipped'] };
const PROCESS_RAIN = { kind: 'process', title: 'The formation of acid rain', steps: ['Factories and vehicles release sulphur dioxide and nitrogen oxides', 'Gases rise into the atmosphere', 'Gases mix with water vapour in clouds', 'Sulphuric and nitric acids form', 'Acid falls as rain, snow or fog', 'Acid damages forests, lakes and buildings'] };
const MAP_CAMPUS = { kind: 'map', title: 'A university campus, 2010 and 2025', maps: [
  { title: '2010', items: [{ name: 'Library', x: 5, y: 5, w: 30, h: 25 }, { name: 'Car park', x: 40, y: 5, w: 30, h: 25, color: '#eee' }, { name: 'Lecture halls', x: 5, y: 40, w: 40, h: 25 }, { name: 'Sports field', x: 55, y: 40, w: 40, h: 50, color: '#e9f3d6' }, { name: 'Bus stop', x: 5, y: 75, w: 15, h: 10, color: '#fde7c8' }] },
  { title: '2025', items: [{ name: 'Library + study centre', x: 5, y: 5, w: 30, h: 25 }, { name: 'Student housing', x: 40, y: 5, w: 30, h: 25 }, { name: 'Lecture halls', x: 5, y: 40, w: 40, h: 25 }, { name: 'Indoor sports hall', x: 55, y: 40, w: 40, h: 22, color: '#fde7c8' }, { name: 'Underground car park', x: 55, y: 66, w: 40, h: 24, color: '#eee' }, { name: 'Tram station', x: 5, y: 75, w: 20, h: 12, color: '#cfe6fb' }] }] };
const BAR_SPEND6 = { kind: 'bar', title: 'Average monthly household spending in a city (USD), 2012 vs 2022', unit: 'USD', labels: ['Housing', 'Food', 'Transport', 'Education', 'Health', 'Leisure'],
  series: [{ name: '2012', data: [420, 310, 140, 90, 60, 110] }, { name: '2022', data: [690, 360, 150, 170, 120, 95] }] };
const LINE_EV = { kind: 'line', title: 'New car sales by fuel type in Country Z (thousands), 2015–2035 (projected from 2025)', unit: 'thousand', labels: ['2015', '2020', '2025', '2030*', '2035*'],
  series: [{ name: 'Petrol', data: [900, 780, 560, 300, 120] }, { name: 'Diesel', data: [400, 250, 110, 40, 10] }, { name: 'Electric', data: [10, 90, 330, 650, 900] }, { name: 'Total', data: [1310, 1120, 1000, 990, 1030] }] };
const PROCESS_DESAL = { kind: 'process', title: 'How a reverse-osmosis desalination plant works', steps: ['Seawater is pumped in through an intake pipe', 'Large debris is removed by screens', 'Fine filters remove sand and particles', 'High-pressure pumps push water through membranes', 'Salt stays behind; fresh water passes through', 'Minerals are added and the water is stored', 'Concentrated brine is returned to the sea'] };

/* ===== t1a Tổng quan, Intro & Overview ===== */
M('t1a', 'remember', 2, 'Paraphrase the prompt', 'Choose the best paraphrase for the introduction.', [
  ['*The graph shows the number of visitors to three museums from 2010 to 2020.*', ['The line graph illustrates how many people visited three museums over a ten-year period starting in 2010.', 'The graph shows the number of visitors to three museums from 2010 to 2020.', 'Museums had visitors.'], 0],
  ['*The chart shows the percentage of people who own a smartphone.*', ['The bar chart compares the proportion of people owning a smartphone.', 'The chart is about phones.'], 0]]);
M('t1a', 'remember', 3, 'An advanced overview', 'Choose the most advanced overview (main trends + striking features + comparison, no figures).', [
  ['', ['Overall, museum A had 3 million visitors in 2020.', 'Overall, while visitor numbers at the two city-centre museums rose steadily, the suburban museum saw a gradual decline, with Museum A remaining the most popular throughout.', 'Overall, there were changes.'], 1]]);
M('t1a', 'understand', 2, 'Static or change over time?', 'Identify the question type.', [
  ['Bar chart: ownership of pets in 5 countries in 2023', ['No change (1 time point)', 'Change over time'], 0], ['Line graph: rainfall 2000–2020', ['Change over time', 'No change'], 0], ['Two maps: 1990 and now', ['Map (changes)', 'Process'], 0]]);
M('t1a', 'understand', 3, 'Why does this overview lose marks?', '*Overall, in 2020, the figure for car was 45% and bus was 20%.*', [['', ['It has detailed figures and does not state the key features', 'It is too short, although its content is correct', 'It lacks linking words between its sentences'], 0]]);
G('t1a', 'apply', 1, 'Basic substitutes', 'Fill in a verb to replace *shows*.', [['The line graph ___ the number of tourists.', ['illustrates', 'depicts', 'presents', 'gives']], ['The table ___ data on rice exports.', ['provides', 'gives', 'presents']]]);
M('t1a', 'analyze', 1, 'Which sentence is an overview?', '', [['', ['Overall, most people preferred travelling by car.', 'In 2010, 40% of people travelled by car.'], 0]]);
M('t1a', 'analyze', 3, 'What is the overview missing?', '*Overall, the number of visitors to all three museums increased.*', [['Still missing:', ['Striking features/comparisons (which is highest, the biggest change)', 'Specific figures for every category', 'The time points (the first and last years)'], 0]]);
M('t1a', 'evaluate', 1, 'Which introduction is correct?', '', [['', ['The chart shows the information about some students and some countries in that year.', 'The bar chart compares the number of students studying abroad in four countries in 2022.'], 1]]);
M('t1a', 'evaluate', 3, 'The best Intro + Overview pair', 'Prompt: line graph – average coffee consumption per person in 4 countries, 2000–2020.', [['', [
  'The graph shows coffee in four countries. Overall, Finland is 12 kg.',
  'The line graph illustrates how much coffee an average person drank annually in four countries over two decades from 2000. Overall, consumption rose in all four nations, most dramatically in Vietnam, although Finland remained by far the heaviest consumer throughout.',
  'The line graph shows coffee consumption per person in four countries from 2000 to 2020. Overall, it changed.'], 1]]);
W('t1a', 3, 'Intro + Overview (Band 8)', P('The graph below shows the average amount of coffee consumed per person in four countries between 2000 and 2020.'), LINE_COFFEE, ['thorough paraphrasing', 'a 2-point overview: trend + comparison', 'no figures in the overview'], 50);

/* ===== t1b Change: từ vựng xu hướng ===== */
M('t1b', 'remember', 2, 'Trend nouns', 'Choose the correct sentence.', [['', ['There was a steady rise in sales.', 'There was a steadily rise in sales.'], 0], ['', ['Sales experienced a dramatic fall.', 'Sales experienced a dramatically fall.'], 0]]);
M('t1b', 'remember', 3, 'Advanced trend vocabulary', 'Choose the accurate expression for: *peaked and then stayed stable*.', [['', ['peaked at 70 before levelling off', 'went up and stopped', 'reached top and same'], 0], ['fluctuation', ['fluctuated around 40', 'went up and down a lot of'], 0]]);
M('t1b', 'understand', 2, 'The strength of words', 'Choose the word that accurately describes: from 50 to 52.', [['', ['rose slightly', 'soared', 'rocketed'], 0], ['from 20 to 80', ['surged', 'rose marginally'], 0]]);
M('t1b', 'understand', 3, 'by vs to', '*Coffee consumption in Vietnam rose by 1.8 kg to 2.2 kg.*', [['*by 1.8 kg* shows:', ['the amount of change', 'the final level'], 0], ['*to 2.2 kg* shows:', ['the final level', 'the amount of change'], 0]]);
G('t1b', 'apply', 1, 'Trend verbs', 'Put the verbs into the past simple.', [['Sales ___ (rise) to 500 units.', 'rose'], ['The price ___ (drop) in 2010.', 'dropped'], ['The number ___ (remain) stable.', 'remained']]);
M('t1b', 'analyze', 1, 'What is the trend?', 'Figures: 30 → 30 → 31 → 30.', [['', ['remained stable', 'rose sharply', 'fell dramatically'], 0]]);
M('t1b', 'evaluate', 1, 'Correct trend sentences', '', [['', ['The number of tourists increased sharply.', 'The number of tourists increased sharp.'], 0]]);
W('t1b', 3, 'A 4-line line graph (Band 8)', P('The graph below shows the average amount of coffee consumed per person in four countries between 2000 and 2020.'), LINE_COFFEE, ['a range of trend verbs + nouns', 'accurate by/to', 'grouping lines by trend']);

/* ===== t1c No change ===== */
M('t1c', 'remember', 2, 'Static comparison words', 'Choose the correct sentence.', [['', ['Car was the most popular mode of transport among older workers, at 46%.', 'Car was the most popular among older workers with 46% percent.'], 0]]);
M('t1c', 'remember', 3, 'Structures for grouping figures', 'Choose the most advanced sentence.', [['', ['Walking accounted for 9% for both groups.', 'Walking was 9%. Walking was 9% too.'], 0], ['', ['Bus and metro were chosen by 27% and 31% of younger workers respectively.', 'Bus was 27% and metro was 31%.'], 0]]);
M('t1c', 'understand', 2, 'Read the chart correctly', 'BAR_COMMUTE: Car — Under 30: 18%, 30+: 46%.', [['', ['Older workers were more than twice as likely to drive as younger ones.', 'Younger workers drove more.'], 0]]);
M('t1c', 'understand', 3, 'Grouping figures', 'The most logical way to divide the two body paragraphs for BAR_COMMUTE:', [['', ['Paragraph 1: the categories used more by under-30s (Bus, Metro, Bicycle); Paragraph 2: Car + Walking', 'Paragraph 1: Car; Paragraph 2: all the others in alphabetical order'], 0]]);
G('t1c', 'apply', 1, 'Prepositions with figures', 'Fill in the preposition.', [['Car was the most popular option, ___ 46%.', 'at'], ['The figure for walking was the same ___ both groups.', 'for']]);
M('t1c', 'analyze', 1, 'Which is highest?', 'Under 30: Car 18, Bus 27, Metro 31, Bicycle 15, Walking 9.', [['Most popular with under-30s:', ['Metro', 'Bus', 'Car'], 0]]);
M('t1c', 'evaluate', 1, 'Which sentence is correct?', '', [['', ['Metro was more popular than bus among younger workers.', 'Metro was popular than bus among younger workers.'], 0]]);
M('t1c', 'evaluate', 3, 'Which comparison is Band 8?', '', [['', ['Car 46% and 18%. Big difference.', 'Driving was by far the preferred option among those aged 30 and over, at 46%, more than double the figure for their younger counterparts.', 'Older people drive more than young people.'], 1]]);
W('t1c', 3, 'No change: commuting methods (Band 8)', P('The chart below shows how workers in a city travelled to work in 2022, by age group.'), BAR_COMMUTE, ['Overview: the main difference between the 2 groups', 'grouping figures: respectively, both at', 'multiple comparisons']);

/* ===== t1g Mixed ===== */
M('t1g', 'remember', 2, 'Sentences linking two charts', 'Choose a good transition sentence.', [['', ['Turning to the table, agriculture\'s share fell from 71% to 55%.', 'Second chart. Agriculture 71% 55%.'], 0]]);
M('t1g', 'remember', 3, 'Introduction for a Mixed task', 'Choose the most advanced introduction.', [['', ['The table gives information about the total volume of water used in Country Y in 1990 and 2020, together with how this was divided among three sectors.', 'There are two charts about water.'], 0]]);
M('t1g', 'understand', 2, 'Understand the relationship', 'MIX_WATER: total 42 → 58 billion m³; agriculture 71% → 55%.', [['The absolute amount of water used in agriculture:', ['stayed almost unchanged (~30 → ~32 billion m³)', 'halved sharply (~30 → ~15 billion m³)'], 0]]);
M('t1g', 'understand', 3, 'Overview for a Mixed task', 'A good overview needs:', [['', ['One point for each chart, plus the relationship between them (if any)', 'To mention only the chart with larger numbers, since it matters more'], 0]]);
G('t1g', 'apply', 1, 'Complete the sentences', 'Fill in one word.', [['Total water use ___ from 42 to 58 billion m³.', ['rose', 'increased', 'grew']], ['Households ___ for 19% in 2020.', 'accounted']]);
M('t1g', 'analyze', 1, 'Which chart gives which information?', '', [['The "Total use" column shows:', ['absolute figures', 'percentages'], 0]]);
M('t1g', 'analyze', 3, 'Valid inferences', 'From MIX_WATER, which sentence is a CORRECT inference?', [['', ['Household water use almost tripled in absolute terms (≈4.2 → ≈11 billion m³).', 'Farmers used less water in 2020 than in 1990, in absolute terms.', 'Industry used less water in 2020 than it had used in 1990.'], 0]]);
M('t1g', 'evaluate', 1, 'Which sentence is correct?', '', [['', ['Agriculture used the most water in both years.', 'Agriculture used the less water in both years.'], 0]]);
M('t1g', 'evaluate', 3, 'Which overview is best?', '', [['', ['Overall, water 58 and agriculture 55%.', 'Overall, total water consumption rose considerably, and although agriculture remained the dominant user, its share shrank as industry and households took up a greater proportion.', 'Overall, things changed between 1990 and 2020.'], 1]]);
W('t1g', 3, 'Mixed: total & composition of water use (Band 8)', P('The table below shows total water use in Country Y in 1990 and 2020 and the share of this water used by three sectors.'), MIX_WATER, ['linking absolute figures and percentages', 'an overview covering both parts', 'smooth paragraph transitions']);

/* ===== t1d Pie 2 mốc ===== */
M('t1d', 'remember', 2, 'Vocabulary for proportions', 'Choose the correct sentence.', [['', ['Landfill made up over two-thirds of waste treatment in 2005.', 'Landfill made up over two-third of waste treatment in 2005.'], 0], ['', ['Recycling accounted for 38%.', 'Recycling accounted 38%.'], 0]]);
M('t1d', 'remember', 3, 'Expressing changes in share', 'Choose the most advanced sentence.', [['', ['The share of waste sent to landfill plummeted from 68% to just under a quarter.', 'Landfill was 68% then 24%.'], 0]]);
M('t1d', 'understand', 2, 'Fractions ↔ percentages', '', [['24% ≈', ['just under a quarter', 'nearly a half'], 0], ['38% ≈', ['nearly two-fifths', 'over a half'], 0]]);
M('t1d', 'understand', 3, 'Reading changes', 'PIE_WASTE: Composting 5% → 16%.', [['', ['More than tripled', 'Doubled', 'Fall'], 0]]);
G('t1d', 'apply', 1, 'Fill in the figures', 'Fill in the percentage.', [['In 2005, recycling accounted for ___ of waste.', ['12%', '12 percent']], ['By 2025, landfill had fallen to ___.', ['24%', '24 percent']]]);
M('t1d', 'analyze', 1, 'Which one rose?', '', [['Which category fell between 2005 and 2025?', ['Landfill', 'Recycling', 'Composting'], 0]]);
M('t1d', 'analyze', 3, 'Logical paragraphing', '', [['', ['Body 1: Landfill (fell sharply); Body 2: the 3 rising categories', 'Body 1: 2005; Body 2: 2025 (describing each pie separately)'], 0, 'Comparing by category makes the changes clear instead of listing each pie.']]);
M('t1d', 'evaluate', 1, 'Correct sentences', '', [['', ['The proportion of waste recycled increased.', 'The proportion of waste recycled increase.'], 0]]);
M('t1d', 'evaluate', 3, 'The most Band 8 sentence', '', [['', ['Recycling rose from 12% to 38%.', 'Recycling more than tripled its share, climbing from a modest 12% to 38% and overtaking landfill as the main method of disposal.', 'Recycling was more.'], 1]]);
W('t1d', 3, 'Pie charts of waste treatment, 2005 vs 2025 (Band 8)', P('The pie charts below show how household waste was treated in a city in 2005 and 2025.'), PIE_WASTE, ['fractions + percentages', 'overtake / tripled', 'paragraphing by trend']);

/* ===== t1e Process ===== */
M('t1e', 'remember', 2, 'Sequencing words', 'Choose the correct sentence.', [['', ['Once withered, the leaves are rolled.', 'Once wither, the leaves rolled.'], 0], ['', ['The leaves are then dried in hot air.', 'The leaves then dry in hot air by people.'], 0]]);
M('t1e', 'remember', 3, 'Advanced sentences combining steps', 'Choose the most advanced sentence.', [['', ['After being rolled to break their cells, the leaves are left to oxidise, during which they gradually turn dark.', 'The leaves are rolled. Then they oxidise. They turn dark.'], 0]]);
M('t1e', 'understand', 2, 'Count the stages', 'How many steps does PROCESS_TEA have?', [['', ['7', '5', '9'], 0]]);
M('t1e', 'understand', 3, 'Natural or man-made process?', '', [['PROCESS_RAIN (acid rain)', ['natural (with human intervention) – uses the active as well', 'entirely man-made, so it uses the passive only'], 0]]);
G('t1e', 'apply', 1, 'The passive in processes', 'Put the verbs into the present passive.', [['The leaves ___ (pick) by hand.', 'are picked'], ['The tea ___ (pack) and shipped.', 'is packed']]);
M('t1e', 'analyze', 1, 'The first and last steps', '', [['The last step of PROCESS_TEA:', ['Tea is packed and shipped', 'Leaves are picked'], 0]]);
M('t1e', 'evaluate', 1, 'Correct process sentences', '', [['', ['The leaves are dried at 120°C.', 'The leaves is dried at 120°C.'], 0]]);
M('t1e', 'evaluate', 3, 'The best process overview', '', [['', ['Overall, there are 7 stages.', 'Overall, black tea production is a seven-stage linear process, beginning with hand-picking the leaves and ending with packaging, with the leaves undergoing several transformations in between.', 'Overall, tea is made.'], 1]]);
W('t1e', 3, 'Process: black tea production (Band 8)', P('The diagram below shows how black tea is produced.'), PROCESS_TEA, ['passive + reduced clauses', 'Overview: number of steps, start–end', 'varied step linking']);

/* ===== t1f Maps ===== */
M('t1f', 'remember', 2, 'Map verbs of change', 'Choose the correct sentence.', [['', ['The car park was replaced by student housing.', 'The car park was replace student housing.'], 0], ['', ['The library was extended to include a study centre.', 'The library extended by a study centre.'], 0]]);
M('t1f', 'remember', 3, 'Advanced map structures', 'Choose the most advanced sentence.', [['', ['The sports field made way for an indoor sports hall, beneath which an underground car park was constructed.', 'The sports field is gone. There is a sports hall.'], 0]]);
M('t1f', 'understand', 2, 'What changed?', 'MAP_CAMPUS 2010 → 2025.', [['The bus stop became:', ['tram station', 'car park'], 0], ['The old car park (at the top) became:', ['student housing', 'library'], 0]]);
M('t1f', 'understand', 3, 'Overview map', 'The overview needs:', [['', ['The general trend: modernisation, less open space, better transport', 'A list of every building and where it is located'], 0]]);
G('t1f', 'apply', 1, 'Prepositions of location', 'Fill in the preposition.', [['The library is ___ the north-west of the campus.', 'in'], ['The tram station is located next ___ the lecture halls.', 'to']]);
M('t1f', 'analyze', 1, 'What stayed the same?', '', [['', ['Lecture halls', 'Sports field', 'Car park'], 0]]);
M('t1f', 'analyze', 3, 'Grouping changes', 'A logical grouping for the 2 body paragraphs:', [['', ['Paragraph 1: the top half (library, housing); Paragraph 2: the bottom half (sports, car park, transport)', 'Paragraph 1: everything on the 2010 map; Paragraph 2: everything on the 2025 map'], 0]]);
M('t1f', 'evaluate', 1, 'Correct map sentences', '', [['', ['A tram station was built.', 'A tram station built.'], 0]]);
M('t1f', 'evaluate', 3, 'Band 8 map sentences', '', [['', ['The field was gone and a hall was there.', 'The open sports field was redeveloped into a smaller indoor sports hall, with the remaining space converted into an underground car park.'], 1]]);
W('t1f', 3, 'Map: a university campus (Band 8)', P('The maps below show a university campus in 2010 and 2025.'), MAP_CAMPUS, ['present perfect/past passive', 'grouping by area', 'Overview: the development trend']);

/* ===== t1h Change over time: Task Achievement ===== */
M('t1h', 'remember', 2, 'TA criteria', 'Choose the most important element of Task Achievement.', [['', ['A clear overview + selection of key figures', 'Using many difficult and rare words', 'Writing about 250 words, like Task 2'], 0]]);
M('t1h', 'remember', 3, 'Advanced TA errors', 'Choose the error that keeps TA below Band 8.', [['', ['Not highlighting an important crossover or peak', 'Using the past simple for past data', 'Including an overview at the start of the body'], 0]]);
M('t1h', 'understand', 2, 'Choose the key figures', 'LINE_COFFEE — which figures should be mentioned?', [['', ['The start and end levels for each country + the striking points', 'Every figure for 2005, 2010 and 2015, in year order'], 0]]);
M('t1h', 'understand', 3, 'Why does it lose marks?', '*Vietnam rose from 0.4 to 0.7 to 1.1 to 1.6 to 2.2.*', [['', ['It lists mechanically, with no selection and no comment (a fivefold increase)', 'The tense is wrong for data from past years, and the units are missing'], 0]]);
G('t1h', 'apply', 1, 'Start and end points', 'Fill in the number.', [['Finland\'s consumption started at ___ kg in 2000.', ['11', '11.0']], ['Vietnam ended the period at ___ kg.', '2.2']]);
R('t1h', 'apply', 3, 'Raise a TA sentence to Band 8', 'Rewrite as one selective sentence with a comment.', [
  ['Vietnam: 0.4 in 2000, 0.7 in 2005, 1.1 in 2010, 1.6 in 2015, 2.2 in 2020.', 'Vietnam saw the most dramatic growth, with consumption rising more than fivefold from just 0.4 kg to 2.2 kg per person over the period.']]);
M('t1h', 'analyze', 1, 'Which line is highest?', 'LINE_COFFEE', [['', ['Finland', 'Japan', 'Vietnam'], 0]]);
M('t1h', 'analyze', 3, 'A missed key feature', 'The report describes only Finland and Brazil. Which feature is missing?', [['', ['Vietnam rose the fastest (fivefold)', 'Finland had the highest figure throughout'], 0]]);
M('t1h', 'evaluate', 1, 'Which sentence has the correct figures?', 'LINE_COFFEE', [['', ['Japan rose from 3.0 to 3.7 kg.', 'Japan rose from 3.7 to 3.0 kg.'], 0]]);

/* ===== t1i Super boosters ===== */
M('t1i', 'remember', 2, 'Booster: followed by', 'Choose the correct sentence.', [['', ['Finland had the highest figure, at 12 kg, followed by Brazil at 6.3 kg.', 'Finland had the highest figure, followed Brazil 6.3 kg.'], 0]]);
M('t1i', 'remember', 3, 'Booster: before + V-ing', 'Choose the most advanced sentence.', [['', ['Sales rose to 80 units, before falling back to 60 by 2020.', 'Sales rose to 80, then fall to 60.'], 0], ['', ['Spending on housing climbed by 270 dollars, a rise of almost two-thirds.', 'Spending on housing climbed 270, a rise two-thirds.'], 0]]);
M('t1i', 'understand', 2, 'The meaning of a booster', '', [['*, which was more than double that of Japan*', ['it adds a comparison to the figure just given', 'it starts a new paragraph about another category'], 0]]);
M('t1i', 'understand', 3, 'Which booster is being used?', '*Health spending doubled to 120 dollars, overtaking leisure, which fell slightly to 95.*', [['', ['Result V-ing + which-clause', 'Inversion (Not only... but also)'], 0]]);
G('t1i', 'apply', 1, 'Basic linking words', 'Fill in the word.', [['Finland was first, ___ by Brazil.', 'followed'], ['Japan rose slightly, ___ Vietnam rose sharply.', ['while', 'whereas']]]);
M('t1i', 'analyze', 1, 'Is there a booster?', '', [['*Housing rose to 690 dollars, which was the largest increase.*', ['Yes (a which-clause)', 'No, it is a simple sentence'], 0]]);
M('t1i', 'analyze', 3, 'Does the booster match the data?', 'BAR_SPEND6: Education 90 → 170.', [['', ['Education spending almost doubled, rising by 80 dollars.', 'Education spending tripled, rising by 80 dollars.'], 0]]);
M('t1i', 'evaluate', 1, 'Correct sentences', '', [['', ['Food rose to 360, followed by transport at 150.', 'Food rose to 360, following by transport at 150.'], 0]]);
W('t1i', 3, 'Body paragraphs with 7 boosters (Band 8)', 'The chart below shows average monthly household spending in a city in 2012 and 2022.\n\nWrite **two body paragraphs** (130–160 words), using at least **7** different super boosters (followed by, before V-ing, which…, a rise of…, overtaking…, compared to…, with…).', BAR_SPEND6, ['≥7 boosters', 'accurate figures', 'no mechanical listing'], 120);

/* ===== t1j Chia đoạn theo số hạng mục ===== */
M('t1j', 'remember', 2, 'Paragraphing rules', 'The chart has 6 categories, so you should:', [['', ['Group them by trend (sharp rise / slight rise / fall)', 'Give each category its own paragraph'], 0]]);
M('t1j', 'remember', 3, 'Topic sentences for grouped paragraphs', 'Choose the most advanced opening sentence.', [['', ['Housing, education and health all saw substantial growth in spending.', 'Firstly, housing.'], 0]]);
M('t1j', 'understand', 2, '<4 categories', 'A chart with 3 categories: how should you divide it?', [['', ['Paragraph 1: the most striking category; Paragraph 2: the other two', 'Three paragraphs, a short one for each category'], 0]]);
M('t1j', 'understand', 3, 'Grouping BAR_SPEND6', 'Which category belongs to the "almost doubled" group?', [['', ['Education, Health', 'Food, Transport', 'Leisure, Housing'], 0]]);
G('t1j', 'apply', 1, 'Count the categories', 'Fill in the number.', [['BAR_SPEND6 has ___ categories.', ['6', 'six']]]);
M('t1j', 'analyze', 1, 'Which category fell?', 'BAR_SPEND6', [['', ['Leisure', 'Housing', 'Health'], 0]]);
M('t1j', 'analyze', 3, 'Which division is best?', 'BAR_SPEND6', [['', ['Body 1: Housing, Education, Health (sharp rises); Body 2: Food, Transport (slight rises), Leisure (fall)', 'Body 1: Housing, Food, Transport; Body 2: Education, Health, Leisure (in axis order)'], 0]]);
M('t1j', 'evaluate', 1, 'Correct sentences', '', [['', ['Spending on transport rose slightly.', 'Spending on transport rised slightly.'], 0]]);
M('t1j', 'evaluate', 3, 'The best 6-category overview', '', [['', ['Overall, all things changed.', 'Overall, spending rose in five of the six categories, most notably housing, which remained the largest expense, while leisure was the only area to see a decline.', 'Overall, housing was 690.'], 1]]);
W('t1j', 3, '6 spending categories (Band 8)', P('The chart below shows average monthly household spending on six categories in a city in 2012 and 2022.'), BAR_SPEND6, ['grouping categories by trend', 'a 2-point overview', 'super boosters']);

/* ===== t1k Dự đoán & Total ===== */
M('t1k', 'remember', 2, 'The language of prediction', 'Choose the correct sentence.', [['', ['Electric car sales are expected to reach 900,000 by 2035.', 'Electric car sales expect to reach 900,000 by 2035.'], 0], ['', ['Diesel sales are predicted to fall to just 10,000.', 'Diesel sales are predicted falling to 10,000.'], 0]]);
M('t1k', 'remember', 3, 'Advanced predictions', 'Choose the most advanced sentence.', [['', ['Electric vehicles are projected to overtake petrol cars shortly before 2030, eventually accounting for the vast majority of new sales.', 'Electric will be more than petrol.'], 0]]);
M('t1k', 'understand', 2, 'The Total row', 'The "Total" row should be:', [['', ['Mentioned in the overview or in a separate sentence, not grouped like an ordinary category', 'Skipped, because it only repeats the figures of the other categories'], 0]]);
M('t1k', 'understand', 3, 'Tenses for projected data', 'LINE_EV: 2015–2025 actual, 2030–2035 projected.', [['', ['past simple for 2015–2025, is expected/projected to for 2030–2035', 'only the past simple, for every year shown'], 0]]);
G('t1k', 'apply', 1, 'will / be expected to', 'Fill in one word.', [['Petrol sales are expected ___ fall.', 'to'], ['By 2035, electric sales ___ reach 900,000.', ['will', 'could']]]);
M('t1k', 'analyze', 1, 'The Total trend', 'LINE_EV Total 1310 → 1030.', [['', ['a slight fall and then near stability', 'a sharp rise across the whole period'], 0]]);
M('t1k', 'analyze', 3, 'The crossover point', 'Around which year does Electric overtake Petrol?', [['', ['between 2025 and 2030', 'before 2020', 'sau 2035'], 0]]);
M('t1k', 'evaluate', 1, 'Correct prediction sentences', '', [['', ['Diesel sales will fall to 10,000 in 2035.', 'Diesel sales fell to 10,000 in 2035.'], 0]]);
M('t1k', 'evaluate', 3, 'The best overview with projections + Total', '', [['', ['Overall, electric goes up and petrol goes down.', 'Overall, electric cars are forecast to replace petrol and diesel models as the dominant choice, while total sales are expected to remain broadly stable at around one million after an initial decline.'], 1]]);
W('t1k', 3, 'Car sales by fuel type, with projections (Band 8)', P('The graph below shows new car sales by fuel type in Country Z between 2015 and 2025, with projections to 2035.'), LINE_EV, ['past + predictions', 'handling the Total row', 'the crossover point']);

/* ===== t1l No change: 2 items & bảng ===== */
M('t1l', 'remember', 2, 'Words for comparing 2 groups', 'Choose the correct sentence.', [['', ['Younger workers were more likely to cycle than their older counterparts.', 'Younger workers were more likely cycle than older counterpart.'], 0]]);
M('t1l', 'remember', 3, 'Advanced comparisons', 'Choose the most advanced sentence.', [['', ['The proportion of under-30s who cycled was three times that of older workers.', 'Under-30s cycled 15%, older 5%.'], 0]]);
M('t1l', 'understand', 2, 'Read the table', 'TABLE_DEGREE: 65+ — No qualification 60%.', [['', ['Most people over 65 had no qualifications', 'Most people over 65 had a university degree'], 0]]);
M('t1l', 'understand', 3, 'Similarities', 'BAR_COMMUTE: what is similar between the 2 groups?', [['', ['Walking is equal (9%)', 'Car use is equal'], 0]]);
G('t1l', 'apply', 1, 'Than / as', 'Fill in one word.', [['Bus was more popular ___ cycling.', 'than'], ['Walking was as common among young workers ___ among older ones.', 'as']]);
M('t1l', 'analyze', 1, 'Which group is higher?', 'Metro: Under 30 31%, 30+ 19%.', [['', ['Under 30', '30 and over'], 0]]);
M('t1l', 'analyze', 3, 'Choose how to divide the table', 'TABLE_DEGREE (5 age groups × 3 qualifications)', [['', ['By qualification: Body 1 University degree; Body 2 High school + No qualification', 'One sentence per age group, five sentences in a row, in table order'], 0]]);
M('t1l', 'evaluate', 1, 'Correct sentences', '', [['', ['More older workers drove than younger workers.', 'More older workers drived than younger workers.'], 0]]);

/* ===== t1m How something works & dạng lạ ===== */
M('t1m', 'remember', 2, 'The language of mechanisms', 'Choose the correct sentence.', [['', ['High-pressure pumps push the water through membranes.', 'High-pressure pumps are push the water through membranes.'], 0]]);
M('t1m', 'remember', 3, 'Advanced mechanism sentences', 'Choose the most advanced sentence.', [['', ['Having been filtered, the water is forced through membranes, which trap the salt while allowing fresh water to pass.', 'Water is filtered. Then membranes. Salt stays.'], 0]]);
M('t1m', 'understand', 2, 'Cyclical or linear?', 'PROCESS_DESAL', [['', ['linear, with a side branch (brine returned to the sea)', 'a closed cycle that returns to its starting point'], 0]]);
M('t1m', 'understand', 3, 'Active or passive?', 'How something works:', [['', ['A combination: active for machines (pumps push), passive for materials (water is stored)', 'Passive only, because it is a man-made process with no natural stages'], 0]]);
G('t1m', 'apply', 1, 'Mechanism verbs', 'Fill in the verb.', [['Seawater is ___ in through a pipe.', 'pumped'], ['Salt ___ behind.', ['stays', 'remains']]]);
M('t1m', 'analyze', 1, 'Which part does what?', '', [['Membranes:', ['retains the salt', 'pumps water in'], 0]]);
M('t1m', 'analyze', 3, 'Unusual question types', 'The prompt has 1 bar chart + 1 process diagram. The approach:', [['', ['Treat it as Mixed: a 1-point overview for each part, one body paragraph per part', 'Ignore the diagram and describe only the chart, as it has the figures'], 0]]);
M('t1m', 'evaluate', 1, 'Correct sentences', '', [['', ['The water is stored in tanks.', 'The water stores in tanks.'], 0]]);
M('t1m', 'evaluate', 3, 'The best mechanism overview', '', [['', ['Overall, seawater becomes water.', 'Overall, the plant converts seawater into drinkable water through a series of filtration and pressure stages, with concentrated brine produced as a by-product.'], 1]]);
W('t1m', 3, 'How it works: a desalination plant (Band 8)', P('The diagram below shows how a reverse-osmosis desalination plant produces fresh water.'), PROCESS_DESAL, ['appropriate active + passive', 'Overview: input–output–by-product', 'linking the steps']);

/* acid rain dùng thêm cho t1e Mức 2 */
W('t1e', 2, 'Natural process: acid rain', P('The diagram below shows how acid rain is formed.'), PROCESS_RAIN, ['the active for natural processes', 'cause → effect']);
window.KL_ATTACH({ LINE_COFFEE, BAR_COMMUTE, MIX_WATER, PIE_WASTE, PROCESS_TEA, PROCESS_RAIN, MAP_CAMPUS, BAR_SPEND6, LINE_EV, PROCESS_DESAL, TABLE_DEGREE: window.UNITS.find(u => u.id === 't1l').exercises.find(e => e.chart && /qualification/.test(e.chart.title || ''))?.chart, BAR_SPORT: window.UNITS.find(u => u.id === 't1l').exercises.find(e => e.chart && /teenagers/.test(e.chart.title || ''))?.chart }, SNAP);
})();
