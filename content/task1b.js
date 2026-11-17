/* Chặng 2 (bổ sung) — bám theo danh sách 21 bài Writing Task 1. Nội dung & số liệu tự soạn. */
(function () {
const U = id => window.UNITS.find(u => u.id === id);

const LINE_COFFEE = { kind: 'line', title: 'Coffee consumption per person in four countries (kg), 2000–2020', unit: 'kg', labels: ['2000', '2005', '2010', '2015', '2020'],
  series: [{ name: 'Finland', data: [10.5, 10.2, 9.8, 9.9, 9.6] }, { name: 'Vietnam', data: [0.6, 0.9, 1.4, 1.9, 2.7] }, { name: 'Japan', data: [3.2, 3.4, 3.4, 3.6, 3.7] }, { name: 'Brazil', data: [4.8, 5.3, 5.9, 6.1, 6.0] }] };
const BAR_FUTURE = { kind: 'bar', title: 'Share of electric cars in new car sales (%), 2015–2035 (2025 onwards projected)', unit: '%', labels: ['2015', '2020', '2025*', '2030*', '2035*'],
  series: [{ name: 'Norway', data: [22, 54, 90, 98, 100] }, { name: 'China', data: [1, 6, 35, 55, 70] }, { name: 'USA', data: [1, 2, 12, 30, 50] }] };
const TABLE_TOTAL = { kind: 'table', title: 'Waste collected in a city by type (thousand tonnes)', headers: ['Type', '2010', '2015', '2020'], rows: [['Food', '120', '135', '150'], ['Plastic', '60', '85', '95'], ['Paper', '90', '70', '55'], ['Glass', '30', '28', '25'], ['Total', '300', '318', '325']] };
const TABLE_SIX = { kind: 'table', title: 'Average hours per week spent on household chores, by country (2005 and 2020)', headers: ['Country', '2005', '2020'], rows: [['Sweden', '14', '12'], ['Japan', '19', '16'], ['Italy', '22', '20'], ['India', '28', '27'], ['Mexico', '25', '21'], ['Canada', '15', '13']] };
const BAR_TWO = { kind: 'bar', title: 'Proportion of students who walk or cycle to school (%), 2023', unit: '%', labels: ['Primary', 'Lower secondary', 'Upper secondary'], series: [{ name: 'Walk', data: [41, 28, 19] }, { name: 'Cycle', data: [9, 22, 30] }] };
const TABLE_INFO = { kind: 'table', title: 'Facilities in five public libraries (2024)', headers: ['Library', 'Books (000s)', 'Computers', 'Study seats', 'Opening hours/week', 'Monthly visitors (000s)'], rows: [['Central', '420', '120', '600', '84', '95'], ['North', '150', '40', '180', '60', '28'], ['East', '95', '55', '220', '72', '34'], ['South', '160', '20', '90', '48', '15'], ['West', '80', '60', '260', '70', '40']] };
const PROCESS_SILK = { kind: 'process', title: 'The life cycle of the silkworm and silk production', steps: ['Moth lays eggs on mulberry leaves', 'Eggs hatch into larvae (10 days)', 'Larvae feed on mulberry leaves (4–6 weeks)', 'Larvae spin cocoons (3–8 days)', 'Cocoons are boiled', 'Threads are unwound', 'Silk is dyed and woven into fabric'] };
const PROCESS_WORKS = { kind: 'process', title: 'How a solar water heater works', steps: ['Sunlight strikes the dark collector panel on the roof', 'Water in thin pipes inside the panel heats up', 'Hot water rises naturally into the storage tank', 'Cold water from the bottom of the tank flows back to the panel', 'Hot water is drawn from the top of the tank for household use', 'A backup electric heater operates on cloudy days'] };

/* --- cập nhật unit có sẵn --- */
const a = U('t1a');
a.theory.unshift({ h: 'Task 1 question types (from the course)', p: ['**1. Change over time**: a time axis with several points (line, bar, multi-year table).', '**2. No change over time**: one time point or no year; comparisons only.', '**3. Mixed**: two charts combined.', '**4. Maps**: one or two maps (changes over time / a proposal).', '**5. Process**: a manufacturing or natural process.', '**6. Describe how something works**: how a device works.', '**7. Odd questions**: unusual types (classification diagrams, combined figures...).'] });
a.exercises.splice(1, 0, { bloom: 'remember', type: 'match', title: 'Identify the question type', instr: 'Choose the question type for each prompt.', options: ['Change over time', 'No change', 'Mixed', 'Maps', 'Process', 'How something works'],
  pairs: [
    { l: 'The graph shows sales of three phone brands from 2010 to 2022.', r: 'Change over time' },
    { l: 'The chart shows the average salary of six professions in 2021.', r: 'No change' },
    { l: 'The table shows car ownership in 2020 and the pie chart shows how people travel to work.', r: 'Mixed' },
    { l: 'The plans show a proposed redesign of a city park.', r: 'Maps' },
    { l: 'The diagram shows how instant noodles are manufactured.', r: 'Process' },
    { l: 'The diagram shows how a wind turbine generates electricity.', r: 'How something works' },
  ] });
a.exercises.push({ bloom: 'evaluate', type: 'match', title: 'Check-list Task 1 (Lesson 21)', instr: 'Skim the report below and tick each checklist item.', options: ['Met', 'Not met'],
  passage: 'The graph shows the number of people commuting by car, bus and bicycle in Riverton between 2000 and 2020.\n\nCars were very popular. In 2000 there was 52,000 car users and in 2005 there was 60,000 and in 2010 there was 65,000. Bus was 30,000, 28,000 and 25,000. Bicycle went up a lot from 8,000 to 40,000 because people care more about health now.',
  pairs: [
    { l: 'Is the introduction paraphrased?', r: 'Not met' },
    { l: 'Is the overview clear?', r: 'Not met' },
    { l: 'Is the information grouped logically?', r: 'Not met' },
    { l: 'No opinions / explanations of causes?', r: 'Not met' },
    { l: 'No basic grammar errors (there was 52,000...)?', r: 'Not met' },
  ], ex: 'The introduction copies the prompt, there is no overview, it lists each year, it gives a reason ("because people care..."), and "there was 52,000 car users" is an agreement error.' });

const e = U('t1e');
e.exercises.splice(5, 0, { bloom: 'analyze', type: 'mcq', title: 'Natural process: the life cycle of the silkworm', instr: 'How does a natural process differ from a man-made one?', chart: PROCESS_SILK,
  items: [
    { q: 'Natural stages (laying eggs, hatching, eating leaves) should use:', options: ['The active present simple: The moth lays eggs...', 'The passive: Eggs are laid by... (compulsory)', 'Past simple'], a: 0, ex: 'Natural processes usually use the active; steps carried out by people (boiled, unwound) use the passive.' },
    { q: 'A suitable overview:', options: ['There are seven stages, beginning with the moth laying eggs and ending with silk fabric; the first four are natural and the last three are man-made.', 'Silk is very expensive.', 'First the moth lays eggs.'], a: 0 },
    { q: 'Cycle vocabulary:', options: ['hatch into, feed on, spin a cocoon', 'surge, plummet, fluctuate', 'account for, make up'], a: 0 },
  ] });
e.exercises.push({ bloom: 'create', type: 'write', kind: 'task1', title: 'Write a natural process report', prompt: 'The diagram below shows the life cycle of the silkworm and the stages in the production of silk cloth.\n\nSummarise the information by selecting and reporting the main features. Write at least 150 words.', chart: PROCESS_SILK, minWords: 150, focus: ['the active for natural stages', 'the passive for man-made stages', 'sequencing words'] });

/* --- unit mới --- */
window.UNITS = window.UNITS.concat([
{
  id: 't1h', n: 2, stage: 'task1', lessons: 'Lesson 2 · Change over time – Task achievement', title: 'Change over time: Task Achievement',
  desc: 'The Task Achievement score comes from choosing the right key features, a clear overview, accurate figures and comparisons — not from listing everything.',
  theory: [
    { h: 'What does Band 7 TA require?', p: ['A **clear** overview of the main trends and striking features.', '**Selective** figures: start and end points, peaks/troughs, crossover points.', '**Accurate** figures with units.', 'No opinions, no explanations of causes, no information beyond the chart.'] },
    { h: 'Self-check questions', p: ['Which categories rose / fell / stayed stable?', 'Which category was highest at the start and end of the period? Did the ranking change?', 'Which change was the biggest?'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'mcq', title: 'What is a "key" feature?', instr: 'Choose the information WORTH including in the report.', chart: LINE_COFFEE,
      items: [
        { q: 'Key information:', options: ['Finland consumed by far the most coffee throughout.', 'Japan was 3.4 kg in 2005 and 3.4 kg in 2010.', 'Brazil was 5.3 kg in 2005.'], a: 0 },
        { q: 'Key information:', options: ['Vietnam showed the fastest growth, more than quadrupling.', 'Finland\'s figure was 9.9 kg in 2015, the middle year.', 'The chart has four lines, one for each country.'], a: 0 },
        { q: 'Information you should NOT write:', options: ['Finland\'s figure fell slightly to 9.6 kg.', 'Vietnam\'s rise is due to its growing café culture.', 'Brazil peaked at 6.1 kg in 2015.'], a: 1, ex: 'Explaining causes = information beyond the chart.' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Is the overview right or wrong?', instr: 'Evaluate each overview for the coffee chart.', chart: LINE_COFFEE,
      items: [
        { q: '"Overall, coffee consumption increased in all four countries."', options: ['Correct: it states the main trends accurately', 'Wrong: Finland fell slightly'], a: 1 },
        { q: '"Overall, Finland remained the largest consumer despite a slight decline, while Vietnam saw the most significant growth."', options: ['Good: it states the two key features clearly', 'Weak: it is missing a key point about the trends'], a: 0 },
        { q: '"Overall, coffee is popular."', options: ['Too general, with no features', 'Good: it is short and clear enough'], a: 0 },
      ] },
    { bloom: 'apply', type: 'gap', title: 'Accurate figures', instr: 'Fill in the correct number or word according to the chart.', chart: LINE_COFFEE,
      items: [
        { q: 'Vietnamese consumption rose from 0.6 kg to ___ kg over the period.', a: ['2.7'] },
        { q: 'Brazil reached a peak of ___ kg in 2015.', a: ['6.1'] },
        { q: 'Japan\'s figure increased ___ from 3.2 kg to 3.7 kg.', a: ['slightly', 'gradually', 'marginally', 'steadily'] },
        { q: 'Finland remained the ___ consumer throughout the period.', a: ['largest', 'biggest'] },
      ] },
    { bloom: 'analyze', type: 'match', title: 'Grouping categories into 2 body paragraphs', instr: 'Choose the suitable body paragraph.', chart: LINE_COFFEE, options: ['Body 1: the high-consumption group (stable/falling slightly)', 'Body 2: the lower-consumption group (rising)'],
      pairs: [{ l: 'Finland', r: 'Body 1: the high-consumption group (stable/falling slightly)' }, { l: 'Brazil', r: 'Body 1: the high-consumption group (stable/falling slightly)' }, { l: 'Japan', r: 'Body 2: the lower-consumption group (rising)' }, { l: 'Vietnam', r: 'Body 2: the lower-consumption group (rising)' }],
      ex: 'Brazil rose and then levelled off at a high level, so it goes with Finland by consumption level; Japan and Vietnam were low and rising.' },
    { bloom: 'evaluate', type: 'mcq', title: 'Which report achieves higher TA?', instr: 'Compare the two body paragraphs.', chart: LINE_COFFEE,
      items: [{ q: '', options: [
        'Finland was 10.5, 10.2, 9.8, 9.9 and 9.6 kg. Brazil was 4.8, 5.3, 5.9, 6.1 and 6.0 kg.',
        'Finland consumed the most coffee, although its figure dipped gradually from 10.5 kg to 9.6 kg. Brazil, the second-largest consumer, saw its consumption climb to a peak of 6.1 kg in 2015 before levelling off at 6 kg.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Write a change-over-time report', prompt: 'The graph below shows coffee consumption per person in four countries between 2000 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: LINE_COFFEE, minWords: 150, focus: ['task achievement', 'selecting figures', 'overview'] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Extra practice: Southeast Asia tourism table', prompt: 'The table below shows the number of international tourist arrivals in four Southeast Asian countries in 2010, 2015, 2020 and 2023.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: { kind: 'table', title: 'International tourist arrivals (millions)', headers: ['Country', '2010', '2015', '2020', '2023'], rows: [['Thailand', '15.9', '29.9', '6.7', '28.2'], ['Vietnam', '5.0', '7.9', '3.8', '12.6'], ['Malaysia', '24.6', '25.7', '4.3', '20.1'], ['Singapore', '11.6', '15.2', '2.7', '13.6']] }, minWords: 150, focus: ['task achievement'] },
  ],
},
{
  id: 't1i', n: 3, stage: 'task1', lessons: 'Lesson 3 · Grammar + Coherence and Cohesion – Super boosters', title: 'Change: "super booster" structures for linking figures',
  desc: 'A set of structures for linking several data points smoothly in one sentence: started at... after which, followed by, before ending at, with a subsequent..., similar/opposite changes...',
  theory: [
    { h: 'Structures for linking figures', p: [
      '**There was an increase in A (from X to Y), while B ...**',
      '**The figure for A started at X, after which it rose to Y.**',
      '**A rose to X in 2010, followed by a slight decline to Y.**',
      '**A climbed steadily, before ending the period at X.**',
      '**A stood at X, with a subsequent increase to Y.**',
      '**The figure for A + V..., and/but + V...** (one subject, two verbs)',
      '**Similar/Opposite changes can be seen in the figure for B, which ...**',
      '**The figure for B saw similar changes, rising/falling to ...**'] },
    { h: 'Cohesion', p: ['Use *the figure for / that of / this number / the former – the latter* to avoid repetition.', 'Purposeful linkers: *Meanwhile, By contrast, Similarly, In the same period*.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'gap', title: 'Complete the structures', instr: 'Fill in ONE word.', chart: LINE_COFFEE,
      items: [
        { q: 'Vietnam\'s consumption started at 0.6 kg, after ___ it rose steadily to 2.7 kg.', a: ['which'] },
        { q: 'Brazil\'s figure climbed to 6.1 kg in 2015, ___ by a marginal drop to 6 kg.', a: ['followed'] },
        { q: 'Japan\'s consumption grew slowly, ___ ending the period at 3.7 kg.', a: ['before'] },
        { q: 'Finland stood at 10.5 kg in 2000, with a ___ decline to 9.6 kg.', a: ['subsequent', 'gradual', 'slight'] },
        { q: '___ changes can be seen in the figure for Japan, which also increased.', a: ['similar'] },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'The meaning of the structures', instr: 'Choose the correct interpretation.',
      items: [
        { q: '"A rose to 50, followed by a fall to 40" means:', options: ['It rose to 50 and then fell to 40', 'It fell and then rose', 'It rose by 50 and fell by 40 at the same time'], a: 0 },
        { q: '"Opposite changes can be seen in B" means:', options: ['B changed in the same way as A', 'B changed in the opposite direction to A', 'B did not change'], a: 1 },
        { q: '"the former / the latter" refers to:', options: ['the one mentioned first / the one mentioned second', 'the first year shown / the last year shown'], a: 0 },
      ] },
    { bloom: 'apply', type: 'rewrite', title: 'Combine 3 sentences into 1', instr: 'Combine the ideas into ONE sentence using super boosters.', chart: LINE_COFFEE,
      items: [
        { q: 'Brazil was 4.8 kg in 2000. It rose to 6.1 kg in 2015. It fell slightly to 6 kg in 2020.', a: ['Brazil\'s consumption started at 4.8 kg in 2000, after which it rose to a peak of 6.1 kg in 2015, before ending the period at 6 kg.', 'Brazil\'s figure rose from 4.8 kg in 2000 to 6.1 kg in 2015, followed by a slight fall to 6 kg in 2020.'] },
        { q: 'Vietnam rose from 0.6 kg to 2.7 kg. Japan also rose, from 3.2 kg to 3.7 kg.', a: ['Vietnam\'s consumption rose from 0.6 kg to 2.7 kg, and similar changes can be seen in the figure for Japan, which increased from 3.2 kg to 3.7 kg.'] },
        { q: 'Finland fell from 10.5 kg to 9.8 kg in 2010. Then it stayed around 9.6–9.9 kg.', a: ['Finland\'s figure fell from 10.5 kg to 9.8 kg in 2010, after which it remained relatively stable at around 9.6 to 9.9 kg.'] },
      ] },
    { bloom: 'analyze', type: 'order', title: 'Order a long sentence', instr: 'Put the parts in order to make a correct sentence.',
      items: [
        { words: 'The figure for Brazil / started at 4.8 kg, / after which it climbed / to a peak of 6.1 kg in 2015, / before ending the period at 6 kg' },
        { words: 'Finland, by contrast, / saw opposite changes, / with its consumption / falling gradually / to 9.6 kg' },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Which paragraph is more coherent?', instr: 'Choose the paragraph with better Coherence & Cohesion.', chart: LINE_COFFEE,
      items: [{ q: '', options: [
        'Vietnam rose. Vietnam was 0.6 kg. Vietnam was 2.7 kg. Japan rose. Japan was 3.2 kg. Japan was 3.7 kg.',
        'Vietnam saw the most rapid growth, with consumption rising from just 0.6 kg to 2.7 kg. Similar, though much smaller, changes can be seen in the figure for Japan, which edged up from 3.2 kg to 3.7 kg.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Write body paragraphs using ≥5 super boosters', prompt: 'The graph below shows coffee consumption per person in four countries between 2000 and 2020.\n\nWrite **two body paragraphs** (about 120–150 words), using at least 5 different super booster structures.', chart: LINE_COFFEE, minWords: 110, focus: ['super boosters', 'coherence & cohesion'] },
  ],
},
{
  id: 't1j', n: 5, stage: 'task1', lessons: 'Lesson 5 · 1–4 categories · Lesson 6 · 5+ categories · Lesson 7 · <4 categories', title: 'Change: grouping paragraphs by number of categories',
  desc: 'How to group information into 2 body paragraphs depending on the number of categories: 1–4 categories, 5 or more, or very few categories with many time points.',
  theory: [
    { h: 'Principles', p: ['**2–4 categories**: group by trend (rising vs falling) or by level (high vs low).', '**5+ categories**: do not describe each one; choose the striking categories, group similar ones, and use "the remaining categories".', '**Few categories (1–2), many time points**: split by **time period** (e.g. 2000–2010 and 2010–2020).'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Suitable grouping', instr: 'Choose how to divide the body.', options: ['By trend / level', 'Group and select key features', 'By time period'],
      pairs: [
        { l: 'A line graph with 3 lines: 2 rising, 1 falling', r: 'By trend / level' },
        { l: 'A table of 8 countries × 3 years', r: 'Group and select key features' },
        { l: 'A line graph with 1 line, 1990–2020, with many fluctuations', r: 'By time period' },
        { l: 'A bar chart of 4 products: 2 high, 2 low', r: 'By trend / level' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Read a table of 6 countries', instr: 'A table of weekly hours of housework.', chart: TABLE_SIX,
      items: [
        { q: 'The general trend:', options: ['All fell', 'All rose', 'Half rose and half fell'], a: 0 },
        { q: 'The highest group:', options: ['India, Mexico, Italy', 'Sweden, Canada', 'Japan, Sweden'], a: 0 },
        { q: 'The largest fall:', options: ['Mexico (4 hours)', 'India (1 hour)', 'Sweden (2 hours)'], a: 0 },
      ] },
    { bloom: 'apply', type: 'match', title: 'Group the 6 countries', instr: 'Put each country in the appropriate body paragraph.', chart: TABLE_SIX, options: ['Body 1: the high-hours group (≥20)', 'Body 2: the low-hours group (<20)'],
      pairs: [{ l: 'India', r: 'Body 1: the high-hours group (≥20)' }, { l: 'Mexico', r: 'Body 1: the high-hours group (≥20)' }, { l: 'Italy', r: 'Body 1: the high-hours group (≥20)' }, { l: 'Japan', r: 'Body 2: the low-hours group (<20)' }, { l: 'Canada', r: 'Body 2: the low-hours group (<20)' }, { l: 'Sweden', r: 'Body 2: the low-hours group (<20)' }] },
    { bloom: 'analyze', type: 'rewrite', title: 'Write grouping sentences', instr: 'Write ONE sentence describing the whole group.', chart: TABLE_SIX,
      items: [
        { q: 'Describe Sweden and Canada together', a: ['Sweden and Canada recorded the lowest figures, with their respective times falling slightly from 14 and 15 hours to 12 and 13 hours.'] },
        { q: 'Describe India, Mexico and Italy together', a: ['People in India, Mexico and Italy spent the most time on chores, at between 20 and 28 hours in both years, although all three saw slight decreases.'] },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Which grouping is better?', instr: 'Line graph: 1 line, house prices 1990–2020: a slow rise in 1990–2005, a fall in 2008, a sharp rise in 2010–2020.',
      items: [{ q: '', options: ['Body 1: 1990–2008 (slow rise then fall); Body 2: 2008–2020 (recovery and sharp rise)', 'Body 1: even-numbered figures; Body 2: odd-numbered figures, in order of size', 'Just one long body paragraph covering every year for both lines'], a: 0 }] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Write a 6-category report', prompt: 'The table below shows the average number of hours per week spent on household chores in six countries in 2005 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: TABLE_SIX, minWords: 150, focus: ['grouping', 'selecting striking features', 'avoid listing'] },
  ],
},
{
  id: 't1k', n: 9, stage: 'task1', lessons: 'Lesson 9 · Future · Lesson 10 · Total', title: 'Change: future projections & the "Total" category',
  desc: 'The language of prediction (is expected/projected to, will have + V3) and how to handle a Total column/row in the overview and body.',
  theory: [
    { h: 'The future', p: ['*is expected / predicted / projected / forecast to + V*', '*is likely to + V*, *will + V*, *will have + V3 by...*', 'Separate actual data from projections clearly: *Between 2015 and 2020, ... It is projected that by 2035, ...*'] },
    { h: 'Total', p: ['The Total usually goes in the **overview** (the overall trend) or at the start of a body paragraph.', 'It can be used to calculate shares: *food accounted for almost half of the total*.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'gap', title: 'Prediction structures', instr: 'Fill in ONE word.', chart: BAR_FUTURE,
      items: [
        { q: 'Electric cars are ___ to account for all new sales in Norway by 2035.', a: ['expected', 'projected', 'predicted', 'forecast'] },
        { q: 'By 2035, the share in the USA ___ have reached 50%.', a: ['will'] },
        { q: 'China\'s figure is ___ to double between 2025 and 2035.', a: ['expected', 'projected', 'predicted', 'likely', 'forecast'] },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Actual or projected?', instr: 'Chart: 2015 and 2020 are actual figures; 2025* onwards are projections.', chart: BAR_FUTURE,
      items: [
        { q: 'The sentence with the correct tense:', options: ['In 2020, 54% of new cars sold in Norway were electric.', 'In 2020, 54% of new cars will be electric in Norway.'], a: 0 },
        { q: 'The sentence with the correct tense:', options: ['In 2030, the USA reached 30%.', 'The USA is projected to reach 30% in 2030.'], a: 1 },
      ] },
    { bloom: 'apply', type: 'mcq', title: 'Handling the Total', instr: 'Based on the waste table.', chart: TABLE_TOTAL,
      items: [
        { q: 'The overview should include:', options: ['Total waste rose slightly over the period, and food was the largest category throughout.', 'Glass was 30 in 2010.', 'Paper fell by 35.'], a: 0 },
        { q: 'What share of the total did Food account for in 2020?', options: ['Almost half (150/325)', 'A quarter', 'Two-thirds'], a: 0 },
        { q: 'The two categories that fell:', options: ['Paper and Glass', 'Food and Plastic', 'Plastic and Glass'], a: 0 },
      ] },
    { bloom: 'analyze', type: 'rewrite', title: 'Write sentences with the Total', instr: 'Write one sentence as required.', chart: TABLE_TOTAL,
      items: [
        { q: 'Describe total waste and Food\'s share in 2020', a: ['The total amount of waste rose from 300,000 to 325,000 tonnes, with food accounting for almost half of this in 2020.'] },
        { q: 'Describe the rise in plastic, relative to the total', a: ['Plastic waste rose from 60,000 to 95,000 tonnes, making it the fastest-growing category, while the total increased only modestly.'] },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'An overview with the future', instr: 'Choose the best overview.', chart: BAR_FUTURE,
      items: [{ q: '', options: ['Overall, the share of electric cars rose in all three countries and is expected to keep growing, with Norway leading throughout and projected to reach 100% by 2035.', 'Overall, electric cars are good for the environment.', 'Overall, Norway was 22% in 2015.'], a: 0 }] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Write a report with projections', prompt: 'The chart below shows the share of electric cars in new car sales in three countries from 2015 to 2020, with projections to 2035.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: BAR_FUTURE, minWords: 150, focus: ['past tenses vs predictions', 'overview'] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Write a report with a Total row', prompt: 'The table below shows the amount of waste collected in a city by type in 2010, 2015 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: TABLE_TOTAL, minWords: 150, focus: ['handling the Total', 'proportions'] },
  ],
},
{
  id: 't1l', n: 13, stage: 'task1', lessons: 'Lesson 13 · No change – 2 items · Lesson 14 · No change – a lot of information', title: 'No change: 2 items & information-heavy tables',
  desc: 'Two difficult No-change variants: only 2 groups (compare them item by item) and tables with many columns (be selective; do not list).',
  theory: [
    { h: '2 items', p: ['Overview: which group is higher on most items + any reversal.', 'Body: organise by **item** (not by the 2 groups), with each sentence comparing the 2 groups.'] },
    { h: 'A lot of information', p: ['Choose 2–3 important columns; find the **highest/lowest** and the **exceptions**.', 'Overview: the category that leads on most measures.', 'Body 1: the most striking category; Body 2: a comparison of the rest.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'mcq', title: 'Read a 2-item chart', instr: 'Walking vs cycling to school.', chart: BAR_TWO,
      items: [
        { q: 'The trend for "Walk" across school levels:', options: ['It decreases', 'It increases', 'No change'], a: 0 },
        { q: 'The reversal point:', options: ['At upper secondary level, cycling overtakes walking', 'There is none; the two lines never cross', 'At primary level, where walking is lowest'], a: 0 },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Overview 2 items', instr: 'Choose the best overview.', chart: BAR_TWO,
      items: [{ q: '', options: ['Overall, walking became less common and cycling more common as students got older, with cycling overtaking walking at upper secondary level.', 'Overall, walking was 41% and cycling was 9% at primary level, and both changed later.', 'Overall, students like walking more than cycling at every level of school.'], a: 0, ex: 'The chart covers one year (2023) but has a school-level axis, so use "as students got older" instead of time words.' }] },
    { bloom: 'apply', type: 'rewrite', title: 'Item-by-item comparison', instr: 'Write ONE sentence comparing the two groups at each level.', chart: BAR_TWO,
      items: [
        { q: 'Primary', a: ['At primary level, 41% of students walked to school, compared to only 9% who cycled.'] },
        { q: 'Upper secondary', a: ['By upper secondary level, cycling had overtaken walking, at 30% and 19% respectively.', 'At upper secondary level, 30% of students cycled, whereas only 19% walked.'] },
      ] },
    { bloom: 'analyze', type: 'mcq', title: 'Being selective with a many-column table', instr: 'A table of 5 libraries and 5 measures.', chart: TABLE_INFO,
      items: [
        { q: 'The most striking feature:', options: ['Central leads on almost every measure', 'South has 160 thousand books', 'West is open 70 hours'], a: 0 },
        { q: 'An exception worth mentioning:', options: ['West has many study seats and computers despite having the fewest books', 'North has 40 computers, the second-highest figure', 'East is open for 72 hours a week'], a: 0 },
        { q: 'The weakest library:', options: ['South (the fewest computers, seats, opening hours and visitors)', 'East (the most visitors and the longest opening hours)', 'North (the most books and the most study seats)'], a: 0 },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Which body paragraph is more selective?', instr: 'The library table.', chart: TABLE_INFO,
      items: [{ q: '', options: [
        'North has 150, 40, 180, 60 and 28. East has 95, 55, 220, 72 and 34. South has 160, 20, 90, 48 and 15.',
        'Among the smaller branches, West and East offered relatively generous study facilities, with 260 and 220 seats respectively, and attracted the most visitors after Central. South, despite holding the second-largest collection, had the fewest computers, seats and opening hours, and drew only 15,000 visitors a month.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Write a 2-item report', prompt: 'The chart below shows the proportion of students at three school levels who walk or cycle to school in 2023.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: BAR_TWO, minWords: 150, focus: ['item-by-item comparison', 'overview 2 items'] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Write an information-heavy table report', prompt: 'The table below gives information about the facilities and usage of five public libraries in a city in 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: TABLE_INFO, minWords: 150, focus: ['selectivity', 'exceptions', 'no listing'] },
  ],
},
{
  id: 't1m', n: 19, stage: 'task1', lessons: 'Lesson 19 · Describe how something works · Lesson 20 · Odd questions', title: 'How something works & unusual question types',
  desc: 'Describing how a device works (principle, parts, cycle) and strategies for "unusual" question types.',
  theory: [
    { h: 'How something works', p: ['Overview: how many main parts the device has, whether it works in a cycle or linearly, and its energy source.', 'Use the **active present simple** for working parts (*the panel absorbs*) and the passive for what is acted on (*water is heated*).', 'Vocabulary: *absorb, convert into, flow through, circulate, be connected to, be stored in*.'] },
    { h: 'Odd questions', p: ['Stay calm and identify: is there time? Is there comparison? Is there a sequence?', 'Apply the general frame: Intro – Overview (2 big points) – 2 logically divided body paragraphs.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'order', title: 'The order of operation', instr: 'Put the stages of a solar water heater in order.',
      items: [{ words: 'sunlight strikes the panel / water in the pipes heats up / hot water rises into the tank / cold water returns to the panel / hot water is drawn for use' }] },
    { bloom: 'understand', type: 'mcq', title: 'Understand the diagram', instr: 'Based on the diagram.', chart: PROCESS_WORKS,
      items: [
        { q: 'This is:', options: ['A circulating cycle', 'A linear production process'], a: 0 },
        { q: 'The backup component:', options: ['Electric heater', 'Storage tank', 'Collector panel'], a: 0 },
      ] },
    { bloom: 'apply', type: 'gap', title: 'Verbs describing operation', instr: 'Fill in ONE verb in the correct form.', chart: PROCESS_WORKS,
      items: [
        { q: 'The dark panel ___ heat from the sun.', a: ['absorbs', 'collects'] },
        { q: 'The heated water ___ naturally into the storage tank.', a: ['rises', 'flows'] },
        { q: 'Cold water then ___ back to the panel to be reheated.', a: ['flows', 'returns', 'circulates'] },
        { q: 'On cloudy days, a backup heater is ___ on.', a: ['switched', 'turned'] },
      ] },
    { bloom: 'analyze', type: 'mcq', title: 'Dividing the body', instr: 'Choose the most logical way to divide the body.', chart: PROCESS_WORKS,
      items: [{ q: '', options: ['Body 1: heat collection and water circulation; Body 2: storage, use and the backup system', 'One paragraph per step', 'Body 1: odd-numbered steps; Body 2: even-numbered steps'], a: 0 }] },
    { bloom: 'evaluate', type: 'mcq', title: 'The best overview', instr: 'Choose the overview.', chart: PROCESS_WORKS,
      items: [{ q: '', options: ['Overall, the system uses solar energy to heat water in a continuous cycle between a roof panel and a storage tank, with an electric heater as a backup.', 'Overall, solar energy is clean and cheap.', 'Overall, first sunlight strikes the panel.'], a: 0 }] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Write a how-something-works report', prompt: 'The diagram below shows how a solar water heater works.\n\nSummarise the information by selecting and reporting the main features. Write at least 150 words.', chart: PROCESS_WORKS, minWords: 150, focus: ['describing the principle', 'active/passive', 'linking words'] },
  ],
},
]);
})();
