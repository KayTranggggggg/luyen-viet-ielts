/* Chặng 2 — IELTS Writing Task 1 (Academic). Nội dung & số liệu tự soạn. */
(function () {
const LINE_BIKES = { kind: 'line', title: 'Number of people commuting by different modes in Riverton (thousands), 2000–2020', unit: 'thousands', labels: ['2000', '2005', '2010', '2015', '2020'],
  series: [{ name: 'Car', data: [52, 60, 65, 63, 55] }, { name: 'Bus', data: [30, 28, 25, 25, 25] }, { name: 'Bicycle', data: [8, 10, 16, 27, 40] }] };
const BAR_SPEND = { kind: 'bar', title: 'Average monthly household spending in three countries (USD), 2022', unit: 'USD', labels: ['Housing', 'Food', 'Transport', 'Leisure'],
  series: [{ name: 'Country A', data: [900, 400, 250, 300] }, { name: 'Country B', data: [600, 450, 150, 120] }, { name: 'Country C', data: [1200, 380, 300, 450] }] };
const PIE_ENERGY = { kind: 'pie', unit: '%', title: 'Electricity generation by source in Country X', pies: [
  { title: '2000', slices: [{ name: 'Coal', value: 55 }, { name: 'Gas', value: 20 }, { name: 'Hydro', value: 18 }, { name: 'Solar & Wind', value: 2 }, { name: 'Other', value: 5 }] },
  { title: '2020', slices: [{ name: 'Coal', value: 30 }, { name: 'Gas', value: 25 }, { name: 'Hydro', value: 17 }, { name: 'Solar & Wind', value: 23 }, { name: 'Other', value: 5 }] }] };
const PROCESS_GLASS = { kind: 'process', title: 'How glass bottles are recycled', steps: ['Used bottles collected from recycling bins', 'Transported to a sorting plant', 'Sorted by colour (clear, green, brown)', 'Washed to remove labels and dirt', 'Crushed into small pieces (cullet)', 'Melted in a furnace at 1,500°C', 'Moulded into new bottles', 'Filled, labelled and sent to shops'] };
const MAP_TOWN = { kind: 'map', title: 'Lakeside village, 2000 and today', maps: [
  { title: '2000', items: [{ name: 'Farmland', x: 5, y: 5, w: 40, h: 40, color: '#e9f3d6' }, { name: 'Lake', x: 55, y: 10, w: 35, h: 30, color: '#cfe6fb' }, { name: 'Houses', x: 5, y: 55, w: 30, h: 25 }, { name: 'Primary school', x: 40, y: 55, w: 20, h: 20 }, { name: 'Forest', x: 65, y: 55, w: 30, h: 35, color: '#cfe9c9' }, { name: 'Main road', x: 0, y: 47, w: 100, h: 5, color: '#ddd' }] },
  { title: 'Today', items: [{ name: 'Housing estate', x: 5, y: 5, w: 40, h: 40 }, { name: 'Lake', x: 55, y: 10, w: 35, h: 30, color: '#cfe6fb' }, { name: 'Lakeside café', x: 55, y: 1, w: 18, h: 8, color: '#fde7c8' }, { name: 'Houses', x: 5, y: 55, w: 30, h: 25 }, { name: 'Secondary school', x: 38, y: 55, w: 23, h: 20 }, { name: 'Car park', x: 40, y: 78, w: 20, h: 12, color: '#eee' }, { name: 'Forest', x: 75, y: 55, w: 20, h: 35, color: '#cfe9c9' }, { name: 'Sports centre', x: 63, y: 60, w: 11, h: 25, color: '#fde7c8' }, { name: 'Main road', x: 0, y: 47, w: 100, h: 5, color: '#ddd' }] }] };
const TABLE_TOURISM = { kind: 'table', title: 'International tourist arrivals (millions)', headers: ['Country', '2010', '2015', '2020', '2023'], rows: [['Thailand', '15.9', '29.9', '6.7', '28.2'], ['Vietnam', '5.0', '7.9', '3.8', '12.6'], ['Malaysia', '24.6', '25.7', '4.3', '20.1'], ['Singapore', '11.6', '15.2', '2.7', '13.6']] };

window.UNITS = (window.UNITS || []).concat([
{
  id: 't1a', n: 1, stage: 'task1', lessons: 'Lesson 1 · Overview · Lesson 21 · Task 1 checklist', title: 'Task 1 overview: question types, Intro & Overview',
  desc: 'The 4-paragraph structure, how to paraphrase the prompt and how to write the Overview — the paragraph that decides Task Achievement.',
  theory: [
    { h: 'Standard structure (150–190 words, ~20 minutes)', p: ['**Introduction**: paraphrase the prompt (1 sentence).', '**Overview**: the 2 most striking features, with NO detailed figures.', '**Body 1 & 2**: data grouped logically, with figures and comparisons.', 'No separate conclusion is needed; give no personal opinions or reasons.'] },
    { h: 'Paraphrase', p: ['shows → *illustrates / compares / gives information about*', 'the number of people → *how many people*', 'in three countries → *in Vietnam, Thailand and Malaysia*', 'from 2000 to 2020 → *over a 20-year period starting in 2000*'] },
    { h: 'What does the overview look for?', p: ['General trends (rising/falling), the highest/lowest category, the biggest change, similarities.', 'Opening: *Overall, it is clear that... / In general, ...*'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'What does each paragraph do?', instr: 'Match each part of the report with its function.', options: ['Introduction', 'Overview', 'Body paragraph', 'Should not appear'],
      pairs: [
        { l: 'Restate the prompt in different words', r: 'Introduction' }, { l: 'State the 2 main trends/features, with no figures', r: 'Overview' },
        { l: 'Specific figures and comparisons', r: 'Body paragraph' }, { l: 'Explain the causes of the figures', r: 'Should not appear' },
        { l: 'Personal opinions about the trends', r: 'Should not appear' }, { l: 'Group categories with similar features', r: 'Body paragraph' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Is the paraphrase good?', instr: 'Prompt: *The graph below shows the number of people using three types of transport in a city between 2000 and 2020.*',
      items: [
        { q: 'Which introduction sentence is best?', options: ['The graph below shows the number of people using three types of transport in a city between 2000 and 2020.', 'The line graph illustrates how many commuters used cars, buses and bicycles in a city over a 20-year period from 2000.', 'The graph shows transport is very important in the city.'], a: 1, ex: 'One version copies the prompt word for word; another misstates the content.' },
        { q: '"how many commuters" refers to:', options: ['the number of people', 'three types of transport', 'in a city'], a: 0 },
        { q: 'Which word CANNOT replace "shows" in every case?', options: ['illustrates', 'proves', 'compares'], a: 1, ex: '"proves" means to demonstrate the truth of something, which does not suit a description.' },
      ] },
    { bloom: 'apply', type: 'rewrite', title: 'Paraphrase the prompt', instr: 'Write an introduction sentence (1 sentence) for each prompt.',
      items: [
        { q: 'The chart below shows the percentage of households with internet access in five countries in 2010 and 2020.', a: ['The bar chart compares the proportion of homes that had internet access in five nations in 2010 and 2020.'] },
        { q: 'The table gives information about the amount of rice exported by four countries from 2015 to 2022.', a: ['The table illustrates how much rice four countries exported over the period between 2015 and 2022.'] },
        { q: 'The diagram shows how olive oil is produced.', a: ['The diagram illustrates the process by which olive oil is made.', 'The diagram illustrates the stages in the production of olive oil.'] },
        { q: 'The maps show changes to a town centre between 1990 and the present day.', a: ['The maps illustrate how a town centre has changed from 1990 to the present.', 'The maps compare a town centre in 1990 and now.'] },
      ] },
    { bloom: 'analyze', type: 'mcq', title: 'Find the key features for the overview', instr: 'Study the chart.', chart: LINE_BIKES,
      items: [
        { q: 'Which feature deserves a place in the overview?', options: ['Bus users were 28,000 in 2005.', 'Cycling grew significantly and became more popular than the bus.', 'Car users were 63,000 in 2015.'], a: 1 },
        { q: 'A second feature for the overview:', options: ['The car remained the most popular mode throughout the period.', 'Bus use was 25,000 in 2010.', 'Bicycles were 8,000 in 2000.'], a: 0 },
        { q: 'The most logical way to group the body paragraphs:', options: ['Body 1: all three modes in 2000–2010; Body 2: 2010–2020', 'Body 1: Car & Bus (falling/stable); Body 2: Bicycle (rising sharply)', 'One paragraph for each year shown on the chart'], a: 1 },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Grade the overview', instr: 'Choose the best overview for the chart above.', chart: LINE_BIKES,
      items: [
        { q: '', options: ['Overall, car use rose from 52,000 to 65,000 and then fell to 55,000, while bicycles rose from 8,000 to 40,000.', 'Overall, while the car remained the most common way to commute, cycling saw the most dramatic growth, overtaking the bus by the end of the period.', 'In conclusion, I think more people should cycle because it is healthy.'], a: 1, ex: 'One version has too many figures; another contains a personal opinion.' },
        { q: 'The problem with the overview "Overall, the bus was stable.":', options: ['It misses the most important features (cycling rose; car led)', 'It has grammar errors that block the meaning', 'It is too long and includes every figure'], a: 0 },
      ] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Write an introduction + overview',
      prompt: 'The graph below shows the number of people commuting by car, bus and bicycle in Riverton between 2000 and 2020.\n\nWrite only the **Introduction + Overview** (about 50–70 words).', chart: LINE_BIKES, minWords: 45,
      focus: ['paraphrase', 'an overview without figures'] },
  ],
},
{
  id: 't1b', n: 4, stage: 'task1', lessons: 'Lesson 4 · Vocabulary', title: 'Change: vocabulary for describing trends',
  desc: 'Vocabulary for rising/falling/fluctuating/stable, the structures "There was + adj + noun" and "S + V + adv", and ways to say "no change".',
  theory: [
    { h: 'Two main structures', p: ['**S + V + adv**: *Car use **rose steadily** to 65,000.*', '**There was + a/an + adj + N + in**: *There was **a steady rise in** car use.*', 'A time phrase as the subject: *2010 **saw** a sharp increase in...*'] },
    { h: 'Vocabulary', p: ['Rise: rise, increase, grow, climb, surge (sharply). Fall: fall, decline, drop, decrease, plummet (sharply).', 'Stable/unchanged: *remain stable/unchanged, level off, plateau, stay constant at*.', 'Fluctuation: *fluctuate around/between*. Peaks/troughs: *peak at, hit a low of*.', 'Degree: dramatic(ally), significant(ly), sharp(ly), steady/steadily, gradual(ly), slight(ly).'] },
    { h: 'Preposition', p: ['rise **to** 40 (end point), rise **by** 10 (amount), **from** 8 **to** 40, **at** 25 (standing at), **with** 40%.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Trend vocabulary', instr: 'Choose the type of trend.', options: ['Rise', 'Fall', 'No change', 'Fluctuation', 'Peak'],
      pairs: [
        { l: 'surge', r: 'Rise' }, { l: 'plummet', r: 'Fall' }, { l: 'level off', r: 'No change' }, { l: 'fluctuate', r: 'Fluctuation' },
        { l: 'peak at', r: 'Peak' }, { l: 'remain unchanged', r: 'No change' }, { l: 'decline', r: 'Fall' }, { l: 'climb', r: 'Rise' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Prepositions & degree', instr: 'Choose the correct answer.',
      items: [
        { q: 'From 30 to 45: "The figure rose ___ 15."', options: ['to', 'by', 'at'], a: 1 },
        { q: 'From 30 to 45: "The figure rose ___ 45."', options: ['to', 'by', 'with'], a: 0 },
        { q: 'From 50 to 49: the most suitable description:', options: ['plummeted', 'fell slightly', 'dropped dramatically'], a: 1 },
        { q: 'Stayed at 25 for 10 years:', options: ['remained stable at 25', 'remained stable in 25', 'stabled at 25'], a: 0 },
        { q: '"There was a ___ increase in sales."', options: ['sharply', 'sharp', 'sharpness'], a: 1, ex: 'Use an adjective before a noun.' },
      ] },
    { bloom: 'apply', type: 'gap', title: 'Describe the Riverton chart', instr: 'Fill in ONE word for each gap based on the chart.', chart: LINE_BIKES,
      items: [
        { q: 'The number of cyclists rose ___ 8,000 in 2000 to 40,000 in 2020.', a: ['from'] },
        { q: 'Car commuters ___ at 65,000 in 2010 before declining.', a: ['peaked'] },
        { q: 'From 2010 onwards, bus use remained ___ at 25,000.', a: ['stable', 'constant', 'unchanged', 'steady'] },
        { q: 'There was a dramatic ___ in cycling between 2010 and 2020.', a: ['increase', 'rise', 'growth'] },
        { q: 'Car use fell ___ 10,000 between 2010 and 2020.', a: ['by'] },
        { q: 'Bus use decreased ___ in the first decade, from 30,000 to 25,000.', a: ['gradually', 'slightly', 'steadily'] },
      ] },
    { bloom: 'analyze', type: 'order', title: 'Order the descriptive sentence', instr: 'Make a correct sentence.',
      items: [
        { words: 'The number of cyclists / rose dramatically / to 40,000 / by 2020' },
        { words: '2010 / saw / a peak / in the number of / car commuters' },
        { words: 'Bus use / remained unchanged / at 25,000 / from 2010 onwards' },
        { words: 'Cycling / overtook / the bus / in around 2015' },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Fix a body paragraph', instr: 'Choose the best improvement.', chart: LINE_BIKES,
      items: [
        { q: '"Car went up and up then down." should be changed to:', options: ['Car use increased to a peak of 65,000 in 2010 before falling to 55,000 in 2020.', 'Car was up and then it is down.', 'Car increased very very much.'], a: 0 },
        { q: 'Which sentence is accurate about the data?', options: ['Cycling overtook car use in 2020.', 'Cycling overtook bus use between 2010 and 2015.', 'Bus use increased steadily.'], a: 1 },
        { q: 'Which sentence makes the best comparison?', options: ['In 2020, there were 55,000 car users and 40,000 cyclists.', 'By 2020, the gap between car users and cyclists had narrowed to just 15,000.', 'Cars and bicycles are different.'], a: 1 },
      ] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Write a complete line graph report',
      prompt: 'The graph below shows the number of people commuting by car, bus and bicycle in Riverton between 2000 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: LINE_BIKES, minWords: 150,
      focus: ['trend vocabulary', 'prepositions with figures', 'overview'],
      tips: ['Intro: paraphrase.', 'Overview: car was always highest; cycling rose the most, overtaking bus.', 'Body 1: car (rise → peak in 2010 → fall) + bus (slight fall, then flat).', 'Body 2: bicycle rose fivefold, overtaking bus around 2015.'] },
  ],
},
{
  id: 't1c', n: 11, stage: 'task1', lessons: 'Lesson 11 · No change · Lesson 12 · No change – Overview', title: 'No change: comparing static data',
  desc: 'The chart has only ONE time point (or no time at all): there are no trends, only comparisons. Practise rotating 7 comparative structures so that sentences are not repetitive.',
  theory: [
    { h: 'Identification', p: ['A single year (in 2022) or no year → **No change**. Do not use rise/fall; use comparisons, rankings and proportions.', 'Tense: past simple if the year is in the past; present simple if there is no year.'] },
    { h: 'A set of comparative structures for ONE category', p: [
      '**A was X, and the figure for B was considerably lower, at Y.**',
      '**A far exceeded B, with respective figures of X and Y.**',
      '**The figures for A and B were X and Y respectively.**',
      '**While X of A did something, only Y of B did so.**',
      '**X of A did something, compared to Y of B.**',
      '**A (X) was much higher than that of B, which stood at only Y.**',
      '**A marked difference can be seen between A and B, at X and Y in that order.**'] },
    { h: 'Tips for grouping data', p: ['Group by **category** (not country by country) so that each paragraph contains comparisons.', 'Use **that of / those of** to avoid repeating nouns: *the income of doctors was double **that of** nurses*.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Change or No change?', instr: 'Classify each chart description.', options: ['Change', 'No change', 'Mixed'],
      pairs: [
        { l: 'Bar chart: water use in 5 countries in 2021', r: 'No change' },
        { l: 'Line graph: house prices 2000–2020', r: 'Change' },
        { l: 'Table: average working hours by occupation (no year given)', r: 'No change' },
        { l: 'Bar chart: sales of 3 car brands in 2010, 2015 and 2020', r: 'Change' },
        { l: 'Pie chart 2019 + line graph 2010–2019', r: 'Mixed' },
        { l: 'Pie chart: a household\'s spending breakdown in 2023', r: 'No change' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Understand the structures correctly', instr: 'Data: **cyclists — men 34%, women 18%** (2022).',
      items: [
        { q: '"Men far exceeded women, with respective figures of 34% and 18%." means:', options: ['Men 34%, women 18%', 'Men 18%, women 34%', 'Men exceeded women by 34%'], a: 0, ex: '"respective" keeps the order A → B.' },
        { q: '"While 34% of men cycled regularly, only 18% of women did so." — "did so" refers to:', options: ['cycled regularly', 'were men', '34%'], a: 0 },
        { q: 'Which sentence is WRONG about the data?', options: ['The figure for women was roughly half that of men.', 'The proportion of female cyclists was higher than that of men.', 'Men were almost twice as likely to cycle as women.'], a: 1 },
        { q: '"...at 34% and 18% in that order." "in that order" is equivalent to:', options: ['respectively', 'approximately', 'in total'], a: 0 },
      ] },
    { bloom: 'apply', type: 'gap', title: 'Fill in the structures', instr: 'Fill in ONE word for each gap.', chart: { kind: 'bar', title: 'Percentage of adults who exercise weekly, by age group (2023)', unit: '%', labels: ['18–29', '30–44', '45–59', '60+'], series: [{ name: 'Men', data: [62, 48, 40, 35] }, { name: 'Women', data: [55, 46, 41, 30] }] },
      items: [
        { q: '62% of men aged 18–29 exercised weekly, ___ to 55% of women in the same age group.', a: ['compared'] },
        { q: 'The figures for men and women aged 30–44 were 48% and 46% ___.', a: ['respectively'] },
        { q: 'While 35% of men over 60 exercised weekly, only 30% of women did ___.', a: ['so'] },
        { q: 'The proportion of active men aged 18–29 was much higher than ___ of men over 60.', a: ['that'] },
        { q: 'Women aged 45–59 slightly ___ their male counterparts, at 41% and 40%.', a: ['exceeded', 'outnumbered', 'outperformed'] },
        { q: 'The youngest group had the ___ participation rates for both genders.', a: ['highest'] },
      ] },
    { bloom: 'analyze', type: 'rewrite', title: 'One figure, seven ways', instr: 'Data: **Doctors earn $8,200/month, nurses earn $4,100/month** (2022). Rewrite using the required structure.',
      items: [
        { q: 'Use "respective figures"', a: ['Doctors earned far more than nurses, with respective figures of $8,200 and $4,100 per month.'] },
        { q: 'Use "compared to"', a: ['Doctors earned $8,200 per month, compared to $4,100 for nurses.'] },
        { q: 'Use "While ..., only ... did so" or a similar while-structure', a: ['While doctors earned $8,200 per month, nurses earned only $4,100.'] },
        { q: 'Use "double that of"', a: ['The monthly income of doctors was double that of nurses, at $8,200 and $4,100 respectively.'] },
        { q: 'Use "A marked difference can be seen..."', a: ['A marked difference can be seen between the monthly salaries of doctors and nurses, at $8,200 and $4,100 in that order.'] },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Which body paragraph is better?', instr: 'Data: % of households with a car — Germany 78%, France 81%, Italy 79%, Spain 65%, Poland 54% (2022).',
      items: [
        { q: '', options: [
          'Germany was 78%. France was 81%. Italy was 79%. Spain was 65%. Poland was 54%.',
          'Car ownership was similarly high in France, Italy and Germany, at 81%, 79% and 78% respectively. By contrast, the figures for Spain and Poland were noticeably lower, at 65% and just over half.',
          'France had the most cars because French people are rich, while Poland had the fewest.'], a: 1, ex: 'The better paragraph groups similar countries, uses respectively and compares with the other group; the weaker one explains causes (not allowed).' },
        { q: 'Which sentence best avoids repetition?', options: ['The percentage of households in Spain was lower than the percentage of households in Italy.', 'The percentage of households with a car in Spain was lower than that in Italy.', 'Spain percentage was lower than Italy percentage.'], a: 1 },
      ] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Write a complete No-change report',
      prompt: 'The chart below shows the percentage of adults who exercise at least once a week, by age group and gender, in 2023.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
      chart: { kind: 'bar', title: 'Percentage of adults who exercise weekly, by age group (2023)', unit: '%', labels: ['18–29', '30–44', '45–59', '60+'], series: [{ name: 'Men', data: [62, 48, 40, 35] }, { name: 'Women', data: [55, 46, 41, 30] }] },
      minWords: 150, focus: ['No-change comparative structures', 'grouping data', 'no trend vocabulary'],
      tips: ['Overview: the rate falls with age; men are generally higher than women (except the 45–59 group).', 'Body 1: the two younger groups.', 'Body 2: the two older groups + the 45–59 exception.', 'Rotate at least 4 different structures.'] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Extra practice: household spending table',
      prompt: 'The bar chart below shows average monthly household spending on four categories in three countries in 2022.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: BAR_SPEND, minWords: 150,
      focus: ['group by category', 'respectively / compared to / that of'] },
  ],
},
{
  id: 't1g', n: 15, stage: 'task1', lessons: 'Lesson 15 · Mixed charts', title: 'Mixed charts: two charts combined',
  desc: 'Two charts of different types (e.g. line + pie, table + bar). Write an overview covering both, one body paragraph per chart, and find a link between them.',
  theory: [
    { h: 'Strategy', p: ['Intro: paraphrase both charts in one sentence (*The line graph shows..., while the pie chart illustrates...*).', 'Overview: **one main point for each chart**.', 'Body 1: the first chart; Body 2: the second chart. Use the right language for each chart (Change or No change).', 'Do not link the two charts by cause and effect unless the prompt gives that information.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'mcq', title: 'Language for each part', instr: 'Line graph: tourist arrivals in Da Nang 2015–2023. Pie chart: purpose of visit in 2023.',
      items: [
        { q: 'Which word suits the line graph?', options: ['accounted for', 'surged', 'the largest share'], a: 1 },
        { q: 'Which word suits the pie chart?', options: ['made up', 'plummeted', 'fluctuated'], a: 0 },
        { q: 'The introduction should:', options: ['Mention only the line graph', 'Mention both charts', 'Be skipped'], a: 1 },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Read the two charts', instr: 'Based on the data.', chart: { kind: 'line', title: 'International visitors to Da Nang (millions), 2015–2023', unit: 'millions', labels: ['2015', '2017', '2019', '2021', '2023'], series: [{ name: 'Visitors', data: [1.7, 2.6, 3.5, 0.2, 3.0] }] },
      passage: 'Pie chart (2023) — Purpose of visit: Leisure 68%, Business 14%, Visiting friends/relatives 11%, Other 7%.',
      items: [
        { q: 'The main point of the line graph:', options: ['Visitor numbers rose steadily throughout the period, with no sudden falls', 'Numbers rose sharply until 2019, collapsed almost completely in 2021, then recovered to near their earlier level', 'Numbers stayed almost unchanged from the first year to the last'], a: 1 },
        { q: 'The main point of the pie chart:', options: ['Leisure travel accounted for the majority (over two-thirds)', 'Business travel accounted for the majority', 'All purposes were equal'], a: 0 },
        { q: '"Visitor numbers in 2023 had fully recovered to the 2019 level." is:', options: ['Correct', 'Incorrect'], a: 1, ex: '3.0 < 3.5.' },
      ] },
    { bloom: 'apply', type: 'rewrite', title: 'Write a two-part overview sentence', instr: 'Write ONE overview sentence covering both charts (Da Nang).',
      items: [{ q: 'Line graph (2015–2023) + pie chart (2023, purpose of visit)', a: ['Overall, the number of international visitors to Da Nang grew strongly before collapsing in 2021 and then largely recovering, while leisure was by far the main purpose of visits in 2023.'] }] },
    { bloom: 'analyze', type: 'order', title: 'Order the Intro + Overview', instr: 'Put the sentences in order to form a logical opening.',
      items: [{ words: 'The line graph illustrates changes in the number of international visitors to Da Nang between 2015 and 2023, / while the pie chart shows why they visited the city in 2023. / Overall, visitor numbers rose significantly before a sharp drop in 2021, / and the vast majority of trips in 2023 were for leisure.' }] },
    { bloom: 'evaluate', type: 'mcq', title: 'Which body paragraph is valid?', instr: 'Choose the best paragraph for the pie chart.',
      items: [{ q: '', options: [
        'In 2023, leisure travel accounted for just over two-thirds of all visits, at 68%. Business trips and visits to friends or relatives made up much smaller shares, at 14% and 11% respectively, while other purposes represented only 7%.',
        'Leisure rose to 68% while business fell to 14%.',
        'Because Da Nang has beautiful beaches, most tourists went there for leisure.'], a: 0, ex: 'One weaker paragraph uses trend language for a static chart; the other explains causes.' }] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Write a complete mixed-chart report',
      prompt: 'The line graph shows the number of international visitors to Da Nang between 2015 and 2023, and the pie chart shows the purposes of their visits in 2023.\n\nPie chart (2023): Leisure 68%, Business 14%, Visiting friends/relatives 11%, Other 7%.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
      chart: { kind: 'line', title: 'International visitors to Da Nang (millions), 2015–2023', unit: 'millions', labels: ['2015', '2017', '2019', '2021', '2023'], series: [{ name: 'Visitors', data: [1.7, 2.6, 3.5, 0.2, 3.0] }] },
      minWords: 150, focus: ['a two-part overview', 'Change + No-change language'] },
  ],
},
{
  id: 't1d', n: 8, stage: 'task1', lessons: 'Lesson 8 · 2 years (pie chart example)', title: 'Change with 2 years: pie charts for 2000 vs 2020',
  desc: 'Expressing percentages and fractions, and comparing composition at two points in time.',
  theory: [
    { h: 'The language of proportions', p: ['*account for / make up / represent / comprise* + %', '*the largest share / the smallest proportion / the majority*', 'Changes: *the share of coal **halved**, falling from 55% to 30%*.'] },
    { h: 'Strategy for two pie charts', p: ['Overview: the largest component + the biggest change.', 'Body 1: the components that fell; Body 2: those that rose/stayed stable.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'gap', title: 'Verbs for proportions', instr: 'Fill in ONE verb (past form).', chart: PIE_ENERGY,
      items: [
        { q: 'In 2000, coal ___ for 55% of electricity generation.', a: ['accounted'] },
        { q: 'Hydro ___ up 18% of the total in 2000.', a: ['made'] },
        { q: 'Solar and wind ___ just 2% in 2000.', a: ['represented', 'comprised', 'constituted'] },
        { q: 'By 2020, the share of coal had almost ___.', a: ['halved'] },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Understand changes in composition', instr: 'Based on the two charts.', chart: PIE_ENERGY,
      items: [
        { q: 'The biggest change:', options: ['Solar & Wind rose from 2% to 23%', 'Hydro fell by 1%', 'Other was unchanged'], a: 0 },
        { q: '"Coal remained the largest source in 2020." is:', options: ['Correct', 'Incorrect'], a: 0, ex: 'At 30%, it was still the highest.' },
        { q: 'Hydro should be described as:', options: ['dropped dramatically', 'remained relatively stable', 'doubled'], a: 1 },
        { q: '"In 2000, coal made up more than half of electricity." is:', options: ['Correct', 'Incorrect'], a: 0 },
      ] },
    { bloom: 'apply', type: 'rewrite', title: 'Write sentences with fractions', instr: 'Rewrite each sentence, replacing % with a fraction/approximation.',
      items: [
        { q: 'Coal accounted for 55% of the total in 2000.', a: ['Coal accounted for just over half of the total in 2000.'] },
        { q: 'Solar and wind made up 23% in 2020.', a: ['Solar and wind made up almost a quarter of the total in 2020.', 'Solar and wind made up just under a quarter in 2020.'] },
        { q: 'Coal represented 30% in 2020.', a: ['Coal represented less than a third in 2020.', 'Coal represented just under a third in 2020.'] },
        { q: 'Gas rose from 20% to 25%.', a: ['The share of gas rose from a fifth to a quarter.'] },
      ] },
    { bloom: 'analyze', type: 'match', title: 'Grouping for the body paragraphs', instr: 'Put each source in the appropriate group.', chart: PIE_ENERGY, options: ['Fall', 'Rise', 'Almost unchanged'],
      pairs: [{ l: 'Coal', r: 'Fall' }, { l: 'Gas', r: 'Rise' }, { l: 'Hydro', r: 'Almost unchanged' }, { l: 'Solar & Wind', r: 'Rise' }, { l: 'Other', r: 'Almost unchanged' }] },
    { bloom: 'evaluate', type: 'mcq', title: 'Evaluate the overview', instr: 'Choose the best overview.', chart: PIE_ENERGY,
      items: [{ q: '', options: ['Overall, coal fell from 55% to 30% and solar rose from 2% to 23%.', 'Overall, although coal remained the dominant source, its share fell considerably, while renewables such as solar and wind grew dramatically.', 'Overall, the country cares more about the environment.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Write a complete pie chart report',
      prompt: 'The pie charts below show the sources of electricity generation in Country X in 2000 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: PIE_ENERGY, minWords: 150,
      focus: ['the language of proportions', 'comparing two points in time'] },
  ],
},
{
  id: 't1e', n: 17, stage: 'task1', lessons: 'Lesson 17 · Process · Lesson 18 · Natural process', title: 'Process: man-made & natural processes',
  desc: 'The present passive, sequencing linkers and how to combine steps — for both manufacturing processes and natural life cycles.',
  theory: [
    { h: 'Structure', p: ['Intro: paraphrase. Overview: **the number of steps, the start and end points**, and whether the process is linear or cyclical.', 'Body 1: the first half; Body 2: the second half.'] },
    { h: 'Language', p: ['Passive: *are collected, is heated, are then transported*.', 'Sequence: *First / To begin with, Next, Then, After that, Once..., Following this, Finally*.', 'Combining: *After being washed, the bottles are crushed...* / *..., where they are sorted*.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'order', title: 'Order the glass recycling steps', instr: 'Click the steps in the correct order.', chart: null,
      items: [{ q: 'The glass bottle recycling process:', words: 'collected / transported / sorted by colour / washed / crushed / melted / moulded / filled and labelled' }] },
    { bloom: 'understand', type: 'mcq', title: 'Understand the diagram', instr: 'Based on the diagram.', chart: PROCESS_GLASS,
      items: [
        { q: 'How many steps are there in the process?', options: ['6', '8', '10'], a: 1 },
        { q: 'This process is:', options: ['Linear but forming a loop (bottles return to the shops)', 'Entirely natural, with no human involvement', 'A single stage that is repeated'], a: 0 },
        { q: 'Cullet is:', options: ['New bottles', 'Crushed glass', 'Bottle labels'], a: 1 },
      ] },
    { bloom: 'apply', type: 'gap', title: 'Passives & linkers', instr: 'Put the verbs into the present passive.', chart: PROCESS_GLASS,
      items: [
        { q: 'First, used bottles ___ from recycling bins.', hint: 'collect', a: ['are collected'] },
        { q: 'They ___ then ___ to a sorting plant.', hint: 'transport', a: [['are'], ['transported']] },
        { q: 'At the plant, the glass ___ according to colour.', hint: 'sort', a: ['is sorted'] },
        { q: 'After being ___, the bottles are crushed into cullet.', hint: 'wash', a: ['washed'] },
        { q: 'The cullet ___ in a furnace at 1,500°C.', hint: 'melt', a: ['is melted'] },
      ] },
    { bloom: 'analyze', type: 'rewrite', title: 'Combine two steps into one sentence', instr: 'Join the two sentences into one natural sentence (using once, after being V3, where, before...).',
      items: [
        { q: 'The bottles are transported to a plant. They are sorted by colour at the plant.', a: ['The bottles are transported to a plant, where they are sorted by colour.'] },
        { q: 'The bottles are washed. Then they are crushed into small pieces.', a: ['After being washed, the bottles are crushed into small pieces.', 'Once washed, the bottles are crushed into small pieces.'] },
        { q: 'The glass is melted. Then it is moulded into new bottles.', a: ['Once the glass has been melted, it is moulded into new bottles.', 'After being melted, the glass is moulded into new bottles.'] },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Which overview is best?', instr: 'Choose the suitable overview.', chart: PROCESS_GLASS,
      items: [{ q: '', options: ['Overall, glass is good for the environment.', 'Overall, there are eight stages in the process, beginning with the collection of used bottles and ending with new bottles being delivered to shops.', 'Overall, first bottles are collected and then they are transported.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Write a complete process report',
      prompt: 'The diagram below shows how glass bottles are recycled.\n\nSummarise the information by selecting and reporting the main features. Write at least 150 words.', chart: PROCESS_GLASS, minWords: 150,
      focus: ['passive', 'sequencing words', 'combining steps'] },
  ],
},
{
  id: 't1f', n: 16, stage: 'task1', lessons: 'Lesson 16 · Maps', title: 'Maps: describing changes',
  desc: 'Vocabulary for building, demolishing, expanding and converting; prepositions of location and direction.',
  theory: [
    { h: 'Verbs of change (usually passive)', p: ['build: *was built / constructed / erected*; demolish: *was demolished / removed / knocked down*', 'expand/reduce: *was expanded / extended / reduced*; convert: *was converted into / replaced by / made way for*', 'No change: *remained unchanged*'] },
    { h: 'Location', p: ['*in the north / to the east of / next to / opposite / along the road / on the shore of the lake*', 'Overview: the area became **more urbanised/modern**; what was lost and what was kept.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Map vocabulary', instr: 'Match each word with its meaning.',
      pairs: [{ l: 'demolished', r: 'knocked down and removed' }, { l: 'converted into', r: 'changed so that it has a new use' }, { l: 'extended', r: 'made larger' }, { l: 'made way for', r: 'was removed so that something new could be built' }, { l: 'erected', r: 'built (usually something tall)' }, { l: 'remained unchanged', r: 'stayed the same' }] },
    { bloom: 'understand', type: 'mcq', title: 'Read the two maps', instr: 'Compare 2000 with the present.', chart: MAP_TOWN,
      items: [
        { q: 'The farmland:', options: ['remained unchanged', 'made way for a housing estate', 'became a lake'], a: 1 },
        { q: 'The primary school:', options: ['was demolished completely', 'was replaced by a secondary school', 'moved to the north'], a: 1 },
        { q: 'Forest:', options: ['was reduced in size to make room for a sports centre', 'was expanded to include a new sports centre', 'did not change in size or position'], a: 0 },
        { q: 'What did not change:', options: ['The lake, the main road and the houses in the southwest', 'The car park beside the main road', 'The farmland to the north of the lake'], a: 0 },
      ] },
    { bloom: 'apply', type: 'gap', title: 'Fill in the descriptive word', instr: 'Fill in ONE word.', chart: MAP_TOWN,
      items: [
        { q: 'The farmland in the north-west ___ way for a housing estate.', a: ['made'] },
        { q: 'A café has been built on the northern ___ of the lake.', a: ['shore', 'side', 'edge'] },
        { q: 'The primary school has been ___ into a secondary school.', a: ['converted', 'turned', 'transformed'] },
        { q: 'Part of the forest was cleared to make room ___ a sports centre.', a: ['for'] },
        { q: 'A car park has been constructed ___ the school.', a: ['behind', 'below', 'beside', 'near'] },
      ] },
    { bloom: 'analyze', type: 'mcq', title: 'An overview for the maps', instr: 'Choose the two main points.', chart: MAP_TOWN,
      items: [
        { q: 'Main point 1:', options: ['The village has become more residential and developed, with new leisure facilities.', 'The café is small.', 'The main road is 100 metres long.'], a: 0 },
        { q: 'Main point 2:', options: ['Natural areas such as farmland and forest have shrunk, while the lake has remained.', 'The houses are in the south-west.', 'There is a car park.'], a: 0 },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Which sentence is more accurate?', instr: 'Choose the sentence that is grammatically correct and true to the map.', chart: MAP_TOWN,
      items: [
        { q: '', options: ['The forest was demolished.', 'The forest was reduced in size to make way for a sports centre.', 'The forest has built a sports centre.'], a: 1 },
        { q: '', options: ['A new café was opened on the northern shore of the lake.', 'A new café builds on the northern shore of the lake.', 'The lake was converted into a café on its northern shore.'], a: 0 },
      ] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Write a complete map report',
      prompt: 'The maps below show the village of Lakeside in 2000 and today.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: MAP_TOWN, minWords: 150,
      focus: ['passive', 'location', 'an overview of the changes'] },
  ],
},
]);
})();
