/* Ngân hàng bổ sung Task 1: thêm bài cho mọi bậc Bloom × mọi band, kèm biểu đồ mới tự soạn số liệu. */
(function () {
const L = (title, unit, labels, series) => ({ kind: 'line', title, unit, labels, series: series.map(([name, data]) => ({ name, data })) });
const B = (title, unit, labels, series) => ({ kind: 'bar', title, unit, labels, series: series.map(([name, data]) => ({ name, data })) });
const T = (title, headers, rows) => ({ kind: 'table', title, headers, rows });
const PIE = (title, pies) => ({ kind: 'pie', unit: '%', title, pies: pies.map(([t, s]) => ({ title: t, slices: Object.entries(s).map(([name, value]) => ({ name, value })) })) });
const PR = (title, steps) => ({ kind: 'process', title, steps });
const C = {
  INTERNET: L('Percentage of households with internet access in three countries, 2005–2025', '%', ['2005', '2010', '2015', '2020', '2025'], [['South Korea', [72, 88, 96, 99, 99]], ['Brazil', [14, 27, 51, 71, 83]], ['Nigeria', [2, 6, 15, 30, 44]]]),
  MUSEUM: L('Annual visitors to three museums in a city (millions), 2012–2024', 'million', ['2012', '2015', '2018', '2020', '2022', '2024'], [['History Museum', [1.8, 2.1, 2.4, 0.6, 1.9, 2.6]], ['Science Centre', [1.2, 1.3, 1.5, 0.4, 1.6, 2.2]], ['Art Gallery', [2.5, 2.3, 2.0, 0.5, 1.4, 1.5]]]),
  RICE: L('Rice exports from four countries (million tonnes), 2000–2020', 'million t', ['2000', '2005', '2010', '2015', '2020'], [['India', [1.5, 4.7, 2.2, 10.0, 14.5]], ['Thailand', [6.1, 7.5, 9.0, 9.8, 5.7]], ['Vietnam', [3.5, 5.2, 6.9, 6.6, 6.2]], ['Pakistan', [2.0, 3.0, 4.0, 4.2, 3.9]]]),
  HOLIDAY: B('Preferred holiday types among adults in a country, by age group (%), 2023', '%', ['Beach', 'City break', 'Countryside', 'Cruise', 'Adventure'], [['18–34', [30, 28, 10, 4, 28]], ['35–54', [38, 22, 20, 8, 12]], ['55+', [25, 15, 30, 25, 5]]]),
  SCREEN: B('Average daily screen time of children by activity (minutes), 2023', 'minutes', ['Video', 'Games', 'Homework', 'Social media', 'Reading'], [['Age 8–11', [95, 70, 30, 15, 20]], ['Age 12–15', [110, 85, 55, 90, 12]]]),
  ENERGYMIX: T('Electricity generation in Country A (TWh), 2010 and 2025, with total', ['Source', '2010', '2025'], [['Coal', '180', '95'], ['Gas', '60', '110'], ['Nuclear', '40', '40'], ['Wind & Solar', '5', '120'], ['Total', '285', '365']]),
  JOBS: T('Employment by sector in Country B (% of workers) and total workforce (millions)', ['Year', 'Agriculture', 'Industry', 'Services', 'Workforce'], [['1995', '52%', '18%', '30%', '33 m'], ['2010', '40%', '24%', '36%', '45 m'], ['2025', '26%', '29%', '45%', '54 m']]),
  PHONE: PIE('How people aged 18–30 mainly used their smartphones, 2015 and 2025', [['2015', { Calls: 35, Messaging: 30, 'Social media': 20, Video: 10, Other: 5 }], ['2025', { Calls: 8, Messaging: 22, 'Social media': 35, Video: 30, Other: 5 }]]),
  BUDGET: PIE('City council spending by area, 2010 and 2024', [['2010', { Roads: 30, Education: 25, Health: 20, Parks: 5, Housing: 10, Other: 10 }], ['2024', { Roads: 18, Education: 28, Health: 26, Parks: 9, Housing: 14, Other: 5 }]]),
  CHOC: PR('How chocolate is produced from cocoa beans', ['Ripe cocoa pods are harvested', 'Beans are removed and left to ferment for 5–7 days', 'Fermented beans are dried in the sun', 'Dried beans are shipped to factories', 'Beans are roasted at 120–150°C', 'Shells are removed, leaving cocoa nibs', 'Nibs are ground into cocoa liquor', 'Sugar and milk are added and the mixture is moulded into bars']),
  WATERCYCLE: PR('The water cycle', ['Heat from the sun causes water in oceans and lakes to evaporate', 'Water vapour rises and cools', 'Vapour condenses into clouds', 'Water falls as rain or snow (precipitation)', 'Water runs off into rivers or soaks into the ground', 'Rivers and groundwater return water to the sea']),
  BRICK: PR('How bricks are manufactured', ['Clay is dug from the ground by a large digger', 'Clay is placed on a metal grid and broken up', 'Sand and water are added', 'The mixture is shaped in moulds or cut by a wire cutter', 'Bricks are dried in a drying oven for 24–48 hours', 'Bricks are heated in a kiln at 200–1,300°C', 'Bricks are cooled for 48–72 hours', 'Bricks are packaged and delivered']),
  HARBOUR: { kind: 'map', title: 'A fishing harbour, 1995 and 2025', maps: [
    { title: '1995', items: [{ name: 'Fishing boats', x: 5, y: 5, w: 45, h: 30, color: '#cfe6fb' }, { name: 'Fish market', x: 55, y: 5, w: 20, h: 20 }, { name: 'Warehouses', x: 78, y: 5, w: 18, h: 30 }, { name: 'Beach', x: 5, y: 40, w: 40, h: 15, color: '#fdf1c8' }, { name: 'Houses', x: 50, y: 40, w: 45, h: 25 }, { name: 'Coast road', x: 0, y: 70, w: 100, h: 6, color: '#ddd' }, { name: 'Fields', x: 5, y: 80, w: 90, h: 15, color: '#e9f3d6' }] },
    { title: '2025', items: [{ name: 'Marina (yachts)', x: 5, y: 5, w: 45, h: 30, color: '#cfe6fb' }, { name: 'Seafood restaurants', x: 55, y: 5, w: 20, h: 20, color: '#fde7c8' }, { name: 'Hotel', x: 78, y: 5, w: 18, h: 30 }, { name: 'Beach', x: 5, y: 40, w: 40, h: 15, color: '#fdf1c8' }, { name: 'Houses', x: 50, y: 40, w: 25, h: 25 }, { name: 'Car park', x: 77, y: 40, w: 18, h: 25, color: '#eee' }, { name: 'Coast road (widened)', x: 0, y: 68, w: 100, h: 9, color: '#ddd' }, { name: 'Holiday apartments', x: 5, y: 80, w: 55, h: 15 }, { name: 'Fields', x: 65, y: 80, w: 30, h: 15, color: '#e9f3d6' }] }] },
  LIBRARY: { kind: 'map', title: 'Ground floor of a public library, 2005 and now', maps: [
    { title: '2005', items: [{ name: 'Entrance', x: 40, y: 85, w: 20, h: 10, color: '#fde7c8' }, { name: 'Reference books', x: 5, y: 5, w: 40, h: 40 }, { name: 'Fiction shelves', x: 55, y: 5, w: 40, h: 40 }, { name: 'Reading tables', x: 5, y: 50, w: 40, h: 30 }, { name: 'Newspapers', x: 55, y: 50, w: 40, h: 30 }] },
    { title: 'Now', items: [{ name: 'Entrance (automatic doors)', x: 40, y: 85, w: 20, h: 10, color: '#fde7c8' }, { name: 'Computer room', x: 5, y: 5, w: 40, h: 40 }, { name: 'Fiction shelves', x: 55, y: 5, w: 40, h: 20 }, { name: 'Café', x: 55, y: 28, w: 40, h: 17, color: '#fde7c8' }, { name: 'Group study rooms', x: 5, y: 50, w: 40, h: 30 }, { name: 'Children\'s area', x: 55, y: 50, w: 40, h: 30, color: '#e9f3d6' }] }] },
  OBESITY: L('Adult obesity rates in four countries (%), 2000–2030 (projected from 2025)', '%', ['2000', '2010', '2020', '2025', '2030*'], [['USA', [30, 35, 42, 44, 47]], ['UK', [21, 25, 28, 30, 33]], ['Japan', [3, 4, 4, 5, 5]], ['Mexico', [24, 30, 36, 38, 41]]]),
  STUDY: B('Number of international students in five countries (thousands), 2015 and 2025', 'thousand', ['USA', 'UK', 'Canada', 'Australia', 'Japan'], [['2015', [975, 430, 270, 290, 150]], ['2025', [1100, 730, 800, 450, 280]]]),
  MEAT: T('Average weekly consumption of food per person (grams), Country C', ['Food', '1990', '2005', '2020'], [['Red meat', '650', '540', '410'], ['Poultry', '220', '330', '420'], ['Fish', '180', '170', '160'], ['Vegetables', '1,100', '1,180', '1,260'], ['Sweets', '190', '260', '240']]),
  GENDER: B('Percentage of men and women working in selected jobs in a country, 2024', '%', ['Nursing', 'Engineering', 'Teaching', 'IT', 'Law'], [['Men', [11, 82, 28, 74, 52]], ['Women', [89, 18, 72, 26, 48]]]),
  HOUSE: T('Housing in a city, 2024: average price, average size and share of residents', ['Type', 'Avg price (USD)', 'Avg size (m²)', 'Share of residents'], [['Apartment', '180,000', '70', '55%'], ['Townhouse', '320,000', '110', '25%'], ['Villa', '750,000', '250', '5%'], ['Rented room', '—', '20', '15%']]),
  SOLARPANEL: PR('How a solar panel system powers a home', ['Solar panels on the roof absorb sunlight', 'Cells convert sunlight into direct current (DC) electricity', 'An inverter changes DC into alternating current (AC)', 'AC electricity powers household appliances', 'Surplus electricity is stored in a battery', 'Any remaining surplus is sent to the national grid through a meter']),
  COMMUTE2: T('Average commuting time (minutes) and main mode in four cities, 2024', ['City', 'Avg time', 'Car', 'Public transport', 'Motorbike/Bike'], [['Bangkok', '58', '45%', '35%', '20%'], ['Hanoi', '42', '10%', '12%', '78%'], ['Singapore', '35', '20%', '70%', '10%'], ['Jakarta', '64', '35%', '25%', '40%']]),
};
const SNAP = window.KL_SNAP();
window.KL_BANK(`
@t1a
#remember 1 mcq Task 1 question types | Choose the question type.
A chart with a time axis and several lines :: +Line graph || Process || Map
Two maps of the same area at two points in time :: +Maps || Pie chart || Table
A diagram of the steps in making a product :: +Process || Bar chart || Line graph
#remember 2 mcq Task 1 report structure | Choose the standard structure.
:: +Introduction → Overview → Body 1 → Body 2 || Introduction → Body → Conclusion with an opinion || Overview → Introduction → Body
Where should the overview go? :: +ngay sau Introduction || at the end, as a conclusion with a personal opinion
#remember 3 mcq Thorough introduction paraphrasing | Choose the most advanced paraphrase.
*The table shows the number of international students in five countries in 2015 and 2025.* :: +The table compares how many overseas students five nations hosted in 2015 and a decade later. || The table shows the number of international students in five countries in 2015 and 2025. || The table is about students.
#understand 1 mcq Words to replace "shows" | Choose the substitute.
:: +illustrates || make || speaks
:: +compares || compute || explains why
#understand 2 mcq Overview or detail? | Which sentence is an overview?
:: +Overall, internet access rose in all three countries, with South Korea leading throughout. || In 2005, 72% of Korean homes had internet access.
#understand 3 mcq Evaluate the overview | Which overview matches the INTERNET chart?
:: +Overall, while South Korea had near-universal access throughout, Brazil and Nigeria saw rapid growth, although Nigeria still lagged far behind by 2025. || Overall, Nigeria had 44% in 2025. || Overall, internet is popular.
#apply 1 gap A basic introduction | Fill in one word.
The bar chart ___ the number of international students in five countries. = compares / shows / illustrates
The data is given ___ thousands. = in
#apply 2 rewrite Paraphrase Intro | Rewrite the prompt as an introduction sentence.
The graph shows the percentage of households with internet access in three countries from 2005 to 2025. => The line graph illustrates the proportion of homes with internet access in three countries over a twenty-year period from 2005.
#apply 3 rewrite Write an advanced overview | Write a 2-sentence overview for the MUSEUM chart (History 1.8→2.6; Science 1.2→2.2; Art 2.5→1.5; all fell sharply in 2020).
Write an overview for MUSEUM => Overall, all three museums saw a sharp but temporary fall in visitors in 2020. While the History Museum and Science Centre ended the period well above their starting levels, the Art Gallery, initially the most popular, experienced a long-term decline.
#analyze 1 mcq Striking features | INTERNET chart: the most striking feature?
:: +Nigeria rose quickly but remained the lowest || South Korea was always at 99% || Brazil was at 27% in 2010
#analyze 2 match Parts & content | Match each part of the report with its content.
Introduction => paraphrase of the prompt
Overview => main trends & features
Body 1 => details of the first data group
Body 2 => details of the second data group
#analyze 3 mcq Subtle overview errors | *Overall, the History Museum was the most visited attraction.*
The error: :: +Wrong: the Art Gallery had the most visitors at the start; History led only from 2018 → the overview must mention the change in ranking || No error: the overview states the main trend and correctly says the History Museum led throughout the period
#evaluate 1 mcq A correct introduction | Choose the correct introduction.
:: +The pie charts compare how young adults mainly used their smartphones in 2015 and 2025. || The pie charts shows how young adults mainly uses their smartphones in 2015 and 2025.
#evaluate 2 mcq The better overview | The PHONE chart.
:: +Overall, phones became far less of a calling device and more of a platform for social media and video. || Overall, calls were 35% in 2015 and 8% in 2025.
#evaluate 3 mcq Intro + Overview (Band 8) | The MUSEUM chart.
:: +The line graph tracks annual attendance at three city museums between 2012 and 2024. Overall, despite a dramatic collapse in 2020, the History Museum and Science Centre recovered to record levels, whereas the Art Gallery never regained its former popularity. || The graph is about museums. Overall, 2020 was low.
#create 1 write Intro + Overview: home internet access | 45 | paraphrasing; a 2-point overview | INTERNET
Write only the Introduction + Overview (50–70 words).

The graph below shows the percentage of households with internet access in three countries between 2005 and 2025.

Suggested frame: *The line graph illustrates ... Overall, ... while ...*
#create 2 write Intro + Overview: museum visitors | 50 | thorough paraphrasing; an overview without figures; mention the 2020 anomaly | MUSEUM
Write the Introduction + Overview (60–80 words).

The graph below shows the number of visitors to three museums in a city between 2012 and 2024.
#create 3 write Full report: international students (Band 8) | 150 | a 2-point overview; group countries by growth; multiple comparisons | STUDY
The chart below shows the number of international students in five countries in 2015 and 2025.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1b
#remember 1 mcq Trend verbs | Choose the verb meaning "increase".
:: +increase || decrease || remain
:: +climb || drop || fall
:: +grow || decline || plunge
#remember 2 mcq Adjectives / trend adverbs | Choose the correct sentence.
:: +There was a gradual decline in exports. || There was a gradually decline in exports.
:: +Exports declined gradually. || Exports declined gradual.
:: +The figure rose dramatically. || The figure rose dramatic.
#remember 3 mcq Complex trends | Choose the accurate expression.
A rise, then a fall, then a recovery :: +rose, dipped and then recovered || rose and fell and rose
Almost unchanged, with small fluctuations :: +remained broadly stable, with minor fluctuations || stayed same with some move up and down
#understand 1 mcq Which trend? | Choose the correct description.
10 → 20 :: +doubled || halved
50 → 25 :: +halved || doubled
#understand 2 mcq Degree | Choose the suitable adverb.
40 → 41 :: +slightly || dramatically
5 → 60 :: +dramatically || marginally
#understand 3 mcq Read the RICE chart | Which sentence is correct?
:: +India's exports increased almost tenfold over the period. || India's exports fell steadily throughout the period. || Thailand's exports overtook India's in 2020.
:: +Thailand's exports peaked in 2015 before dropping sharply. || Thailand's exports rose steadily throughout.
#apply 1 gap Trend verb forms | Put the verbs into the past simple.
Exports ___ (fall) to 5 million tonnes. = fell
The figure ___ (peak) in 2015. = peaked
Prices ___ (fluctuate) between 2010 and 2015. = fluctuated
#apply 2 rewrite Verbs ↔ nouns | Rewrite using a noun (There was a ...).
Exports rose sharply. => There was a sharp rise in exports.
Sales fell slightly in 2010. => There was a slight fall in sales in 2010.
#apply 3 rewrite Band 8 trend sentences | Rewrite as ONE sentence using the RICE data.
Thailand: 6.1 (2000) → 9.8 (2015) → 5.7 (2020). => Thailand's exports climbed steadily to a peak of 9.8 million tonnes in 2015, before plummeting to 5.7 million tonnes by 2020.
India: 1.5 (2000) → 14.5 (2020), dip in 2010. => Despite a brief dip in 2010, India's rice exports surged almost tenfold, from 1.5 to 14.5 million tonnes.
#analyze 1 mcq Which line? | RICE chart.
The line that rose the most: :: +India || Pakistan || Vietnam
#analyze 2 match Figures & descriptions | Match.
3.5 → 6.9 => nearly doubled
9.8 → 5.7 => fell sharply
4.0 → 4.2 → 3.9 => remained relatively stable
2.0 → 3.0 => rose by half
#analyze 3 mcq Grouping lines | A logical grouping for the 2 body paragraphs (RICE).
:: +Body 1: India & Thailand (large fluctuations, swapping places); Body 2: Vietnam & Pakistan (more stable) || Body 1: 2000–2010; Body 2: 2010–2020, describing all 4 countries for each year
#evaluate 1 mcq Correct sentences | Choose the correct sentence.
:: +The number of tourists increased. || The number of tourists increasing.
#evaluate 2 mcq The better sentence | Choose the better sentence.
:: +Vietnam's exports nearly doubled to 6.9 million tonnes by 2010, before levelling off. || Vietnam was 3.5, then 5.2, then 6.9, then 6.6 and then 6.2 million tonnes.
#evaluate 3 mcq A Band 8 sentence | Choose the best sentence.
:: +India, initially a minor exporter, overtook Thailand around 2012 to become by far the largest supplier, shipping 14.5 million tonnes in 2020. || India go up and Thailand go down. || India exported more rice and became first.
#create 1 write Intro + Overview: rice exports | 45 | paraphrasing; overview: the general trend + the standout country | RICE
Write only the Introduction + Overview (50–70 words).

The graph below shows rice exports from four countries between 2000 and 2020.

Suggested frame: *The line graph illustrates ... Overall, ... In addition, ...*
#create 2 write Line graph: rice exports | 150 | a range of trend verbs/nouns; grouping lines; by/to | RICE
The graph below shows rice exports from four countries between 2000 and 2020.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write A line graph with fluctuations (Band 8) | 150 | handling the 2020 anomaly; peak/recover; Super Boosters | MUSEUM
The graph below shows the number of visitors to three museums in a city between 2012 and 2024.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1c
#remember 1 mcq Static comparison words | Choose the correct word.
Highest :: +the highest || the most high
Lower :: +lower than || more low than
#remember 2 mcq Number phrases | Choose the correct sentence.
:: +Beach holidays were the most popular choice among 35–54-year-olds, at 38%. || Beach holidays were most popular in 35–54, with 38 percents.
:: +Cruises appealed to only 4% of the youngest group. || Cruises appealed only 4% the youngest group.
#remember 3 mcq Grouping structures | Choose the most advanced sentence.
:: +City breaks and adventure holidays were equally popular among young adults, each chosen by just under 30%. || City break 28% and adventure 28% for young.
#understand 1 mcq Read the HOLIDAY chart | Choose the correct answer.
The 55+ group's favourite: :: +Countryside || Beach || Adventure
Adventure is most popular in the group: :: +18–34 || 55+
#understand 2 mcq Correct comparisons | Which sentence is true of HOLIDAY?
:: +Cruises were over six times as popular among the over-55s as among young adults. || Cruises were equally popular in all groups.
#understand 3 mcq Grouping | The best way to divide the body (HOLIDAY).
:: +Body 1: choices that decline with age (City break, Adventure); Body 2: choices that rise with age (Countryside, Cruise) + Beach || Body 1: every choice for the 18–34 group; Body 2: the 35–54 group; Body 3: the 55+ group
#apply 1 gap Basic comparisons | Fill in one word.
Beach was ___ popular than cruise. = more
Countryside was the most popular choice ___ the oldest group. = among / for
#apply 2 gap The language of numbers | Fill in one word.
Adventure holidays ___ for 28% of young adults' choices. = accounted
Cruises were five times ___ popular among over-55s. = as
#apply 3 rewrite Band 8 comparison sentences | Write ONE sentence for the data.
Screen time — Social media: 8–11: 15 min; 12–15: 90 min. => Teenagers aged 12–15 spent six times as long on social media as younger children, at 90 minutes compared to just 15.
#analyze 1 mcq Highest/lowest | SCREEN chart, the 8–11 group.
The most time-consuming activity: :: +Video || Games || Reading
#analyze 2 match Figures & comparisons | Match (SCREEN chart).
Video 95 vs 110 => slightly higher for older children
Social media 15 vs 90 => six times higher for older children
Reading 20 vs 12 => the only activity higher for younger children
Homework 30 vs 55 => nearly double for older children
#analyze 3 mcq Features for the overview | SCREEN chart.
:: +Older children used screens more for most activities; video was the main activity in both groups || Younger children spent 20 minutes reading, and older children spent longer
#evaluate 1 mcq Correct sentences | Choose the correct sentence.
:: +Video was the most popular activity. || Video was the more popular activity of all.
#evaluate 2 mcq The better sentence | Choose the better sentence.
:: +Reading was the least common activity for both groups, at 20 and 12 minutes respectively. || Reading was 20 and 12.
#evaluate 3 mcq A Band 8 sentence | Choose the best sentence.
:: +Reading was the only activity on which younger children spent more time than their older counterparts, albeit by a modest eight minutes. || Young children read more. || Reading 20 and 12 minutes.
#create 1 write Intro + Overview: favourite holidays | 45 | paraphrasing; an overview of the 2 main differences | HOLIDAY
Write only the Introduction + Overview (50–70 words).

The chart below shows the preferred holiday types of adults in a country in 2023, by age group.

Suggested frame: *The bar chart compares ... Overall, it is clear that ... whereas ...*
#create 2 write No change: screen time | 150 | grouping figures; multiple comparisons; respectively | SCREEN
The chart below shows the average daily screen time of children in two age groups, by activity, in 2023.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write No change with 3 age groups (Band 8) | 150 | grouping by age trend; counterparts; by far | HOLIDAY
The chart below shows the preferred holiday types of adults in a country in 2023, by age group.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1g
#remember 1 mcq Mixed charts | A Mixed question has:
:: +two (or more) charts of different types on a related topic || one line graph with several lines on it
#remember 2 mcq Moving between charts | Choose a good transition sentence.
:: +As for the second chart, ... || Second chart is ...
:: +Turning to the table, ... || Next table it ...
#remember 3 mcq An advanced mixed-chart introduction | Choose the best introduction (JOBS table).
:: +The table illustrates how employment in Country B was distributed across three sectors in three different years, alongside the size of the overall workforce. || The table shows jobs. || There are two tables.
#understand 1 mcq Read JOBS | Choose the correct answer.
The largest sector in 2025: :: +Services || Agriculture || Industry
The workforce in 1995: :: +33 million || 54 million
#understand 2 mcq Linking % and totals | JOBS: Agriculture 52% of 33m (1995) vs 26% of 54m (2025).
The absolute number of agricultural workers: :: +fell from ~17m to ~14m || doubled
#understand 3 mcq Overview Mixed | A good overview should state:
:: +the shift from agriculture to services AND the growth of the workforce || only the sector with the highest percentage in the final year
#apply 1 gap Figures | Fill in the blanks.
In 1995, agriculture employed ___ of workers. = 52% / 52 percent
The workforce grew from 33 to ___ million. = 54
#apply 2 rewrite A sentence linking the two parts | Write ONE sentence linking the % to the total.
Services: 30% (1995, workforce 33m) → 45% (2025, workforce 54m). => The share of workers in services rose from 30% to 45%, meaning that, as the workforce expanded, the number of service jobs more than doubled.
#apply 3 rewrite Mixed-task overview (Band 8) | Write an overview for JOBS.
Overview => Overall, Country B's economy shifted markedly away from agriculture towards services and industry, while its total workforce expanded by more than half over the thirty-year period.
#analyze 1 mcq Which part? | JOBS: the "Workforce" column is:
:: +absolute figures || a percentage
#analyze 2 match Trends | Match (JOBS).
Agriculture => halved in share
Industry => rose steadily
Services => became the largest sector
Workforce => grew by over 60%
#analyze 3 mcq Correct inferences | Which sentence is a CORRECT inference from JOBS?
:: +By 2025, almost one in two workers was employed in services. || Fewer people worked in industry in 2025 than in 1995. || Agriculture employed most workers in 2025.
#evaluate 1 mcq Correct sentences | Choose the correct sentence.
:: +Services accounted for 45% of jobs in 2025. || Services accounted 45% jobs in 2025.
#evaluate 2 mcq The better sentence | Choose the better sentence.
:: +While agriculture's share halved, industry and services both expanded. || Agriculture was 52, 40 and 26. Industry was 18, 24 and 29.
#evaluate 3 mcq A Band 8 paragraph | Choose the best sentence.
:: +Agriculture, which employed over half the workforce in 1995, saw its share fall steadily to just 26%, being overtaken by services as early as 2010. || Agriculture fell and services rose and industry rose.
#create 1 write Intro + Overview: employment by sector | 45 | paraphrasing; an overview covering both % and totals | JOBS
Write only the Introduction + Overview (50–70 words).

The table below shows the share of employment by sector in Country B and the total workforce in 1995, 2010 and 2025.

Suggested frame: *The table illustrates ... Overall, ... while the total workforce ...*
#create 2 write Mixed: employment by sector | 150 | linking % and absolute numbers; paragraph transitions | JOBS
The table below shows the share of employment by sector in Country B and the total workforce in 1995, 2010 and 2025.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write Mixed: commuting time & transport (Band 8) | 150 | linking time to transport; grouping cities; a 2-part overview | COMMUTE2
The table below shows the average commuting time and the main mode of transport in four Asian cities in 2024.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1d
#remember 1 mcq Fractions | Choose the correct fraction.
25% :: +a quarter || a third || a half
50% :: +a half || a fifth
75% :: +three quarters || two thirds
#remember 2 mcq Pie chart vocabulary | Choose the correct sentence.
:: +Social media made up the largest proportion in 2025. || Social media made up the largest proportion of in 2025.
:: +Calls represented roughly a third of usage in 2015. || Calls represented roughly one-third percent.
#remember 3 mcq Expressing changes in share | Choose the most advanced sentence.
:: +The share devoted to calls shrank more than fourfold, from 35% to a mere 8%. || Calls went down 35 to 8.
#understand 1 mcq Read PHONE | Choose the answer.
The largest in 2015: :: +Calls || Video
The largest in 2025: :: +Social media || Messaging
#understand 2 mcq Approximate fractions | Choose the expression.
30% :: +just under a third || just over a half
22% :: +just over a fifth || nearly a half
#understand 3 mcq Changes | PHONE: Video 10% → 30%.
:: +tripled || doubled || halved
#apply 1 gap Basic pie chart language | Fill in the blanks.
In 2015, calls accounted ___ 35%. = for
Video ___ (triple) to 30%. = tripled
#apply 2 rewrite Comparing 2 time points in one sentence | Rewrite as one sentence.
Messaging 2015: 30%. 2025: 22%. => The proportion of time spent messaging fell from 30% to 22%.
Social media 2015: 20%. 2025: 35%. => Social media rose from a fifth to over a third of total usage.
#apply 3 rewrite A Band 8 sentence | Write one sentence combining trend and comparison.
Calls 35→8, Social media 20→35. => Calls, the dominant use in 2015, were overtaken by social media, which grew to 35% while calls plummeted to just 8%.
#analyze 1 mcq No change | PHONE chart: the unchanged category.
:: +Other || Calls || Video
#analyze 2 match Categories & trends | Match (BUDGET).
Roads 30→18 => fell considerably
Health 20→26 => rose
Parks 5→9 => almost doubled
Other 10→5 => halved
#analyze 3 mcq Paragraphing | BUDGET: the best way to divide it.
:: +Body 1: the items that rose (Education, Health, Parks, Housing); Body 2: the items that fell (Roads, Other) || Body 1: every category in the 2010 pie; Body 2: every category in the 2024 pie
#evaluate 1 mcq Correct sentences | Choose the correct sentence.
:: +The proportion of spending on roads fell. || The proportion of spending on roads were fell.
#evaluate 2 mcq The better sentence | Choose the better sentence.
:: +Spending on parks almost doubled, from 5% to 9%. || Parks 5% and 9%.
#evaluate 3 mcq Overview Band 8 | BUDGET.
:: +Overall, the council redirected funds away from roads towards social services, with education replacing roads as the largest area of spending. || Overall, roads were 30% and 18%. || Overall, the budget changed a lot.
#create 1 write Intro + Overview: phone use | 45 | paraphrasing; overview: the biggest change | PHONE
Write only the Introduction + Overview (50–70 words).

The pie charts below show how people aged 18–30 mainly used their smartphones in 2015 and 2025.

Suggested frame: *The pie charts compare ... Overall, ... whereas ...*
#create 2 write Pie charts at 2 time points: phone use | 150 | fractions; comparison; paragraphing by trend | PHONE
The pie charts below show how people aged 18–30 mainly used their smartphones in 2015 and 2025.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write 6-category pie charts: a city budget (Band 8) | 150 | grouping rises/falls; overtake; accurate fractions | BUDGET
The pie charts below show how a city council's spending was divided among different areas in 2010 and 2024.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1e
#remember 1 mcq Sequencing words | Choose the correct word.
The first step :: +First / In the first stage || Finally / In the final stage
The last step :: +Finally / In the final stage || Firstly / At the beginning
#remember 2 mcq The passive in processes | Choose the correct sentence.
:: +The cocoa beans are left to ferment for five days. || The cocoa beans left to ferment for five days.
:: +The beans are then roasted. || The beans then roast by worker.
#remember 3 mcq Advanced step-linking sentences | Choose the most advanced sentence.
:: +Once roasted, the beans have their shells removed, leaving the nibs, which are subsequently ground into cocoa liquor. || The beans are roasted. Shells removed. Nibs ground.
#understand 1 mcq Read CHOC | Choose the answer.
Step 3: :: +Fermented beans are dried in the sun || Beans are roasted at this stage
Number of steps: :: +8 || 6
#understand 2 mcq Natural or man-made? | Choose the answer.
Water cycle :: +natural (a cycle) || man-made
Brick manufacturing :: +man-made (linear) || natural
#understand 3 mcq Active or passive? | The water cycle should be written with:
:: +mainly the active (water evaporates, vapour rises) || only the passive (water is evaporated)
#apply 1 gap The passive | Fill in the passive form.
The clay ___ (dig) from the ground. = is dug
The bricks ___ (heat) in a kiln. = are heated
#apply 2 gap Linking steps | Fill in one word.
___ being dried, the bricks are heated in a kiln. = After
The mixture is shaped, ___ which it is dried. = after
#apply 3 rewrite Band 8 process sentences | Combine into ONE sentence.
Bricks are dried for 24–48 hours. Then they are heated in a kiln. Then they are cooled for 48–72 hours. => Having been dried for up to two days, the bricks are fired in a kiln and subsequently left to cool for a further 48 to 72 hours.
#analyze 1 mcq The first step | WATERCYCLE begins with:
:: +evaporation from oceans and lakes || rain falling on the land
#analyze 2 match Steps & linkers | Match (BRICK).
Clay is dug => First
Sand and water are added => Next
Bricks are cooled => After that
Bricks are delivered => Finally
#analyze 3 mcq A correct overview | Choose a correct overview for WATERCYCLE.
:: +Overall, the water cycle is a continuous natural process in which water moves between the sea, the atmosphere and the land. || Overall, there are 6 stages and it starts with rain.
#evaluate 1 mcq Correct sentences | Choose the correct sentence.
:: +The beans are dried in the sun. || The beans is dried in the sun.
#evaluate 2 mcq The better sentence | Choose the better sentence.
:: +After being harvested, the pods are opened and the beans are left to ferment. || Pods harvested. Then open. Then beans ferment.
#evaluate 3 mcq Overview Band 8 | CHOC.
:: +Overall, chocolate production is an eight-stage process that begins with harvesting cocoa pods on plantations and ends with moulding the chocolate into bars in factories. || Overall, chocolate is made from cocoa.
#create 1 write Intro + Overview: brick manufacturing | 45 | paraphrasing; overview: number of steps, start–end | BRICK
Write only the Introduction + Overview (50–70 words).

The diagram below shows how bricks are manufactured.

Suggested frame: *The diagram illustrates how ... Overall, ... stages, beginning with ... and ending with ...*
#create 2 write Process: chocolate production | 150 | passive; varied linkers; overview | CHOC
The diagram below shows how chocolate is produced from cocoa beans.

Summarise the information by selecting and reporting the main features. Write at least 150 words.
#create 3 write Natural process: the water cycle (Band 8) | 150 | the active for natural stages; a cycle; advanced linking sentences | WATERCYCLE
The diagram below shows the water cycle.

Summarise the information by selecting and reporting the main features. Write at least 150 words.

@t1f
#remember 1 mcq Directions | Choose the correct word.
North :: +to the north || in the up
Southeast :: +in the south-east || in the down-right
#remember 2 mcq Verbs of change | Choose the correct sentence.
:: +The warehouses were demolished to make way for a hotel. || The warehouses demolished to make way for a hotel.
:: +The road was widened. || The road was widen.
#remember 3 mcq Advanced map sentences | Choose the most advanced sentence.
:: +The harbour, once home to fishing boats, has been converted into a marina for yachts. || The fishing boats are now yachts.
#understand 1 mcq Read HARBOUR | Choose the answer.
The fish market became: :: +seafood restaurants || car park
Unchanged: :: +Beach || Warehouses
#understand 2 mcq The general trend | The HARBOUR map shows:
:: +a shift from fishing to tourism || heavy industrialisation
#understand 3 mcq Read LIBRARY | Which change is CORRECT?
:: +Reference books replaced by a computer room || Children's area replaced by newspapers || Fiction shelves removed entirely
#apply 1 gap Prepositions of location | Fill in the blanks.
The hotel is ___ the north-east corner. = in
The car park is next ___ the houses. = to
#apply 2 rewrite Map sentences | Write a passive sentence.
Newspapers area → Children's area. => The newspaper area has been replaced by a children's area.
Coast road → wider. => The coast road has been widened.
#apply 3 rewrite Band 8 map sentences | Combine into ONE sentence.
Fields in the south: part became holiday apartments, part remains. => Much of the farmland to the south has given way to holiday apartments, although a small area of fields remains in the south-east.
#analyze 1 mcq What is new? | HARBOUR 2025: an entirely new structure.
:: +Car park || Beach || Houses
#analyze 2 match Changes | Match (LIBRARY).
Reference books => replaced by a computer room
Fiction shelves => reduced in size
Reading tables => converted into group study rooms
Newspapers => replaced by a children's area
#analyze 3 mcq Grouping changes | The most logical way to divide the HARBOUR body.
:: +Body 1: the waterfront (pier, market, warehouse); Body 2: the residential area & inland (houses, roads, fields) || Body 1: every feature on the 1995 map; Body 2: every feature on the 2025 map
#evaluate 1 mcq Correct sentences | Choose the correct sentence.
:: +A café was added. || A café was add.
#evaluate 2 mcq The better sentence | Choose the better sentence.
:: +The fiction section was reduced to make room for a café. || The fiction section reduced to make room for a café.
#evaluate 3 mcq Overview Band 8 | HARBOUR.
:: +Overall, the harbour has been transformed from a working fishing port into a tourist destination, with commercial fishing facilities giving way to leisure and accommodation. || Overall, there are more buildings. || Overall, the harbour is different.
#create 1 write Intro + Overview: a library | 45 | paraphrasing; overview: the modernisation trend | LIBRARY
Write only the Introduction + Overview (50–70 words).

The maps below show the ground floor of a public library in 2005 and now.

Suggested frame: *The maps illustrate ... Overall, the library has been ... with ...*
#create 2 write Map: a library | 150 | present perfect passive; location; grouping changes | LIBRARY
The maps below show the ground floor of a public library in 2005 and now.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write Map: a fishing harbour (Band 8) | 150 | the trend of conversion; give way to / be converted into; grouping by area | HARBOUR
The maps below show a fishing harbour in 1995 and 2025.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1h
#remember 1 mcq The 4 Task 1 criteria | Choose the correct criterion.
:: +Task Achievement || Task Response
:: +Coherence and Cohesion || Creativity
#remember 2 mcq TA requirements | Choose the correct requirement.
:: +A clear overview, selected key features, accurate figures || Giving personal opinions and possible causes
#remember 3 mcq TA Band 8 | Choose the Band 8 description.
:: +covers all requirements; clearly presents and highlights key features || describes all numbers in order
#understand 1 mcq Why does it lose TA marks? | Choose the reason.
*This is because people like coffee.* :: +it gives causes/opinions not shown in the chart || it has grammar errors in most sentences
#understand 2 mcq Choose the figures | OBESITY chart: which figures should be used?
:: +the start and actual end (2025) figures, the 2030 projection and the gaps between countries || every figure for every year and every country, in chronological order
#understand 3 mcq Key features | OBESITY: the most important feature?
:: +Rates rose in 3 countries, while Japan was very low and almost stable; the USA was highest || The UK's rate was 25% in 2010, the middle year of the chart
#apply 1 gap Accurate figures | Fill in the blanks (OBESITY).
In 2000, the USA's rate was ___%. = 30
Japan's rate is projected to be ___% in 2030. = 5
#apply 2 rewrite Selective sentences | Write one sentence that selects key figures.
Mexico: 24, 30, 36, 38, 41. => Mexico's obesity rate rose steadily from 24% to 38% by 2025 and is projected to reach 41% by 2030.
#apply 3 rewrite A Band 8 TA sentence | Write a sentence comparing the striking features.
USA 30→44 (47 in 2030); Japan 3→5. => The USA had by far the highest rate, which is projected to reach almost half the adult population by 2030, nearly ten times the figure for Japan.
#analyze 1 mcq Highest | OBESITY: the highest throughout the period.
:: +USA || Mexico || UK
#analyze 2 match Countries & trends | Match (OBESITY).
USA => highest and rising
Japan => lowest and almost stable
Mexico => rising steadily, second highest
UK => rising, third
#analyze 3 mcq TA errors | What is missing from the report?
The report describes only 2000–2025 and ignores 2030*. :: +The projected data is missing → TA loses marks || It does not matter, because projections are optional
#evaluate 1 mcq Correct sentences | Choose the correct sentence.
:: +The USA had the highest obesity rate. || The USA had the most high obesity rate.
#evaluate 2 mcq The better sentence | Choose the better sentence.
:: +Obesity rates rose in all countries except Japan, where they remained very low. || USA 30, UK 21, Japan 3 and Mexico 24 were the rates in the year 2000.
#evaluate 3 mcq Overview Band 8 | OBESITY.
:: +Overall, obesity rates rose in all four countries and are expected to continue climbing, with the USA consistently recording the highest figures and Japan remaining an outlier with exceptionally low levels. || Overall, obesity is a big problem because of fast food.
#create 1 write Intro + Overview: obesity | 45 | paraphrasing; an overview with the trend + projections | OBESITY
Write only the Introduction + Overview (50–70 words).

The graph below shows adult obesity rates in four countries from 2000 to 2025, with projections for 2030.

Suggested frame: *The line graph illustrates ... Overall, ... and this trend is expected to ...*
#create 2 write Change over time: obesity | 150 | selecting figures; projections; no causes | OBESITY
The graph below shows adult obesity rates in four countries from 2000 to 2025, with projections for 2030.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write Change over time: internet (Band 8) | 150 | highlight key features; gaps between countries; Super Boosters | INTERNET
The graph below shows the percentage of households with internet access in three countries between 2005 and 2025.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1i
#remember 1 mcq Basic boosters | Choose the correct sentence.
:: +Video was the most popular, followed by games. || Video was the most popular, following games.
:: +Sales rose, while profits fell. || Sales rose, while profits fall.
#remember 2 mcq Booster: which / reaching | Choose the correct sentence.
:: +Poultry rose to 420g, overtaking red meat. || Poultry rose to 420g, overtake red meat.
:: +Sweets peaked at 260g in 2005, which was the highest level. || Sweets peaked at 260g in 2005, it was the highest.
#remember 3 mcq Advanced boosters | Choose the most advanced sentence.
:: +Red meat consumption fell steadily to 410g, a drop of almost 40%, while poultry nearly doubled, eventually overtaking it. || Red meat 650 to 410 and poultry 220 to 420.
#understand 1 mcq The function of a booster | Choose the function.
*followed by* :: +giving the next ranking || giving a cause
*a rise of 20%* :: +adding the size of the change || concluding the paragraph
#understand 2 mcq Read MEAT | Which sentence is correct?
:: +Poultry consumption almost doubled. || Fish consumption doubled. || Sweets fell steadily.
#understand 3 mcq Which booster? | *Vegetables, already the most consumed food, rose further to 1,260g.*
:: +an appositive || inversion
#apply 1 gap Booster | Fill in one word.
Red meat fell, ___ poultry rose. = while / whereas
Vegetables were the most consumed, ___ by red meat. = followed
#apply 2 rewrite Using boosters | Combine the sentences using the booster in brackets.
Sweets rose to 260g in 2005. Then they fell to 240g. (before + V-ing) => Sweets rose to 260g in 2005, before falling slightly to 240g.
Poultry rose to 420g. It overtook red meat. (V-ing) => Poultry rose to 420g, overtaking red meat.
#apply 3 rewrite Body paragraphs with 3 boosters | Write 2 sentences using ≥3 boosters (MEAT: Fish 180→170→160).
Fish => Fish was the only category to decline gradually throughout, falling by 20g to 160g, which made it the least consumed food in 2020 apart from sweets.
#analyze 1 mcq Is there a booster? | Choose the sentence with a booster.
:: +Fish fell to 160g, the lowest level. || Fish fell. It was 160g.
#analyze 2 match Boosters & types | Match.
followed by => ranking
overtaking => result V-ing
a rise of => the amount of change
which was => a non-defining relative clause
#analyze 3 mcq A booster with wrong figures | MEAT: Red meat 650 → 410.
:: +Red meat fell by 240g, a drop of over a third. || Red meat fell by 240g, a drop of over a half.
#evaluate 1 mcq Correct sentences | Choose the correct sentence.
:: +Vegetables rose, reaching 1,260g. || Vegetables rose, reached 1,260g.
#evaluate 2 mcq The better sentence | Choose the better sentence.
:: +Poultry nearly doubled to 420g, overtaking red meat for the first time. || Poultry was 220, 330, 420.
#evaluate 3 mcq A Band 8 sentence | Choose the best sentence.
:: +Vegetables, consistently the most consumed food, rose steadily to 1,260g, while red meat followed the opposite trajectory, falling by over a third. || Vegetables are most and red meat less.
#create 1 write A short body paragraph with 3 boosters | 60 | followed by; while; result V-ing | MEAT
Write ONE body paragraph (60–80 words) about Red meat, Poultry and Fish, using at least 3 boosters.

The table below shows average weekly consumption of five foods per person in Country C in 1990, 2005 and 2020.
#create 2 write A complete report using boosters | 150 | ≥5 boosters; grouping categories | MEAT
The table below shows average weekly consumption of five foods per person in Country C in 1990, 2005 and 2020.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write A data-dense line graph (Band 8) | 150 | ≥7 boosters; handling changes in ranking; no listing | RICE
The graph below shows rice exports from four countries between 2000 and 2020.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1j
#remember 1 mcq Count the categories | Count the categories.
MEAT table :: +5 || 3 || 4
BUDGET pie :: +6 || 5
#remember 2 mcq The 4-category rule | 4 categories should be divided:
:: +2 + 2 by shared features || 1 + 3 at random
#remember 3 mcq The 5+ category rule | 5+ categories should be:
:: +grouped by trend or level, not described one by one || given one paragraph each, in chart order
#understand 1 mcq What are the categories? | The categories in the STUDY chart are:
:: +5 countries || 2 years
#understand 2 mcq Grouping STUDY | The country with the sharpest rise:
:: +Canada (almost tripled) || USA (the largest figure)
#understand 3 mcq Dividing the body: STUDY | The best division:
:: +Body 1: sharp rises (Canada, UK, Japan, Australia); Body 2: USA (the largest, with a small rise) || Body 1: USA and UK; Body 2: Canada; Body 3: Australia and Japan, in chart order
#apply 1 gap Counting | Fill in the number.
The STUDY chart has ___ countries. = 5 / five
#apply 2 rewrite Topic sentences for grouped paragraphs | Write an opening sentence for the group.
Canada, UK, Japan, Australia: sharp rises. => Canada, the UK, Japan and Australia all experienced significant growth in international student numbers.
#apply 3 rewrite Band 8 grouping sentences | Write a grouping sentence + the standout.
Canada 270→800; UK 430→730. => Canada saw the most dramatic growth, almost tripling to 800,000 and overtaking the UK, which itself rose considerably to 730,000.
#analyze 1 mcq The highest category | STUDY 2025.
:: +USA (the largest figure) || Canada (the fastest growth)
#analyze 2 match Groups | Match (MEAT).
Red meat => fell
Poultry => a sharp rise
Vegetables => rose slightly, the highest
Fish => fell slightly
#analyze 3 mcq How to group MEAT | Choose the best way.
:: +Body 1: rises (Poultry, Vegetables, Sweets); Body 2: falls (Red meat, Fish) || Body 1: 1990; Body 2: 2005; Body 3: 2020, with every category each time
#evaluate 1 mcq Correct sentences | Choose the correct sentence.
:: +Canada had more students in 2025. || Canada have more students in 2025.
#evaluate 2 mcq The better grouping sentence | Choose the better sentence.
:: +Both Australia and Japan saw substantial increases, of 160,000 and 130,000 respectively. || Australia 290 450. Japan 150 280.
#evaluate 3 mcq A Band 8 overview for 5 categories | STUDY.
:: +Overall, all five countries attracted more international students over the decade, with the USA remaining the top destination, although Canada recorded by far the fastest growth. || Overall, USA 1,100.
#create 1 write Intro + Overview: 5 categories | 45 | paraphrasing; an overview grouping the categories | STUDY
Write only the Introduction + Overview (50–70 words).

The chart below shows the number of international students in five countries in 2015 and 2025.
#create 2 write 5 categories: food | 150 | grouping by trend; a 2-point overview | MEAT
The table below shows average weekly consumption of five foods per person in Country C in 1990, 2005 and 2020.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write 6 budget categories (Band 8) | 150 | logical grouping; overtake; fractions | BUDGET
The pie charts below show how a city council's spending was divided among different areas in 2010 and 2024.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1k
#remember 1 mcq A prediction | Choose the correct sentence.
:: +The figure is expected to rise. || The figure expected to rise.
:: +It is predicted to reach 50%. || It is predicted reaching 50%.
#remember 2 mcq The language of prediction | Choose the correct phrase.
:: +is projected to || is projecting to
:: +is forecast to || forecasts to
#remember 3 mcq The Total row | Choose the most advanced sentence.
:: +Total electricity generation rose by almost 30%, driven largely by the expansion of wind and solar. || Total is 285 and 365.
#understand 1 mcq Years marked with * | *2030** means:
:: +projected figures || incorrect figures
#understand 2 mcq Read ENERGYMIX | Choose the answer.
The Total rose: :: +from 285 to 365 TWh || from 285 to 95
The unchanged source: :: +Nuclear || Gas
#understand 3 mcq Handling the Total | The Total in ENERGYMIX should be:
:: +stated in the overview or a separate sentence, linked to the fast-growing source || ignored, because it adds no new information about the separate sources
#apply 1 gap A prediction | Fill in the blanks.
The rate is expected ___ reach 47%. = to
By 2030, it ___ rise to 41%. = will / is expected to
#apply 2 rewrite Prediction sentences | Write a prediction sentence.
UK obesity 2030*: 33%. => The UK's obesity rate is projected to reach 33% by 2030.
#apply 3 rewrite A Band 8 Total sentence | Write a sentence about the Total + the main source.
Total 285→365; Wind & Solar 5→120. => Total output grew by 80 TWh, a rise driven almost entirely by wind and solar, which surged from a negligible 5 TWh to 120 TWh.
#analyze 1 mcq The sharpest rise | ENERGYMIX.
:: +Wind & Solar || Gas || Coal
#analyze 2 match Sources & trends | Match (ENERGYMIX).
Coal => almost halved
Gas => nearly doubled
Nuclear => unchanged
Wind & Solar => rose 24-fold
#analyze 3 mcq An overview with the Total | Choose the correct overview.
:: +Overall, total generation rose, with renewables replacing coal as the leading source, while nuclear output remained constant. || Overall, coal was 180.
#evaluate 1 mcq Correct sentences | Choose the correct sentence.
:: +Coal is expected to fall. || Coal is expected falling.
#evaluate 2 mcq The better sentence | Choose the better sentence.
:: +Gas generation nearly doubled, from 60 to 110 TWh. || Gas 60 and 110.
#evaluate 3 mcq A Band 8 sentence | Choose the best sentence.
:: +Coal, the dominant source in 2010, saw its output almost halve to 95 TWh, being overtaken by both gas and renewables. || Coal fell and others rose.
#create 1 write Intro + Overview with a Total | 45 | paraphrasing; an overview including the Total | ENERGYMIX
Write only the Introduction + Overview (50–70 words).

The table below shows electricity generation by source in Country A in 2010 and 2025.
#create 2 write A table with a Total row | 150 | handling the Total; grouping sources | ENERGYMIX
The table below shows electricity generation by source in Country A in 2010 and 2025.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write Projections: obesity (Band 8) | 150 | past + projections; outliers; Super Boosters | OBESITY
The graph below shows adult obesity rates in four countries from 2000 to 2025, with projections for 2030.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1l
#remember 1 mcq Comparing 2 groups | Choose the correct sentence.
:: +More women than men worked in nursing. || More women than men works in nursing.
#remember 2 mcq counterparts | Choose the correct sentence.
:: +Male engineers far outnumbered their female counterparts. || Male engineers far outnumbered their female counterpart.
#remember 3 mcq Information-heavy tables | Choose the most advanced sentence (HOUSE).
:: +Villas, the most expensive type at $750,000, were also by far the largest, yet were home to only 5% of residents. || Villa 750,000 and 250 m2 and 5%.
#understand 1 mcq Read GENDER | Choose the answer.
The most female-dominated occupation: :: +Nursing || Teaching
The most balanced occupation: :: +Law || IT
#understand 2 mcq Comparison | GENDER: Engineering.
:: +Men outnumbered women by more than four to one. || Women outnumbered men.
#understand 3 mcq Paragraphing GENDER | The best division:
:: +Body 1: male-dominated occupations (Engineering, IT, Law); Body 2: female-dominated occupations (Nursing, Teaching) || Body 1: Men in all five occupations; Body 2: Women in all five occupations
#apply 1 gap Comparison | Fill in the blanks.
Women made ___ 89% of nurses. = up
Law was almost evenly split ___ men and women. = between
#apply 2 rewrite 2-item sentences | Write one sentence.
IT: Men 74%, Women 26%. => Men accounted for almost three quarters of IT workers, nearly three times the proportion of women.
#apply 3 rewrite Band 8 table sentences | Write one sentence (HOUSE: Apartment 55%, 180,000, 70m²).
Apartment => Apartments were the most common form of housing, accommodating over half of residents, and were also relatively affordable at an average of $180,000 for 70 m².
#analyze 1 mcq The higher group | GENDER, Teaching.
:: +Women || Men
#analyze 2 match Occupations & descriptions | Match (GENDER).
Nursing => female-dominated
Engineering => male-dominated
Law => almost equal
Teaching => mostly female
#analyze 3 mcq Overview HOUSE | Choose the best overview.
:: +Overall, larger homes were considerably more expensive and less common, with apartments housing the majority of residents. || Overall, villa is expensive.
#evaluate 1 mcq Correct sentences | Choose the correct sentence.
:: +Women were more likely to work in teaching. || Women were more likely work in teaching.
#evaluate 2 mcq The better sentence | Choose the better sentence.
:: +In law, the gender split was nearly even, at 52% men and 48% women. || Law 52 48.
#evaluate 3 mcq A Band 8 sentence | Choose the best sentence.
:: +Engineering and nursing were the most gender-imbalanced professions, but in opposite directions, with men and women respectively making up over four-fifths of the workforce. || Engineering men and nursing women.
#create 1 write Intro + Overview: gender & occupations | 45 | paraphrasing; an overview with 2 trends | GENDER
Write only the Introduction + Overview (50–70 words).

The chart below shows the percentage of men and women working in five jobs in a country in 2024.
#create 2 write 2 items: gender & occupations | 150 | comparing 2 groups; counterparts; grouping occupations | GENDER
The chart below shows the percentage of men and women working in five jobs in a country in 2024.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write An information-heavy table: housing (Band 8) | 150 | linking price–size–share; overview; logical grouping | HOUSE
The table below shows the average price, average size and share of residents for four types of housing in a city in 2024.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1m
#remember 1 mcq Mechanism vocabulary | Choose the correct word.
The device that converts DC into AC :: +inverter || solar panel
The network that carries electricity across the country :: +national grid || household circuit
#remember 2 mcq Mechanism sentences | Choose the correct sentence.
:: +The inverter converts DC into AC. || The inverter is convert DC into AC.
:: +Surplus electricity is stored in a battery. || Surplus electricity stores in a battery.
#remember 3 mcq Advanced mechanism sentences | Choose the most advanced sentence.
:: +Any electricity not consumed by the household is stored in a battery, with the remainder fed into the national grid. || Electricity goes to battery and grid.
#understand 1 mcq Read SOLARPANEL | Choose the answer.
The first step: :: +Panels absorb sunlight || Battery stores power
The last step: :: +Surplus sent to the grid || Inverter converts
#understand 2 mcq Type of diagram | SOLARPANEL is:
:: +how something works (a mechanism) || a natural cycle (like the water cycle)
#understand 3 mcq Active/passive | Which sentence is most suitable?
:: +Solar cells convert sunlight into electricity. || Sunlight is converted by solar cells into electricity by them.
#apply 1 gap Verbs | Fill in the blanks.
The panels ___ sunlight. = absorb
The inverter ___ DC into AC. = converts / changes
#apply 2 rewrite Step-linking sentences | Combine into one sentence.
Panels absorb sunlight. Cells convert it into DC. => Once the panels absorb sunlight, the cells convert it into DC electricity.
#apply 3 rewrite A Band 8 sentence | Combine into one sentence.
AC powers appliances. Surplus goes to a battery. The rest goes to the grid. => The AC electricity powers household appliances, with any surplus stored in a battery and the remainder exported to the national grid.
#analyze 1 mcq Order | Which step comes first?
:: +DC → AC conversion || powering appliances
#analyze 2 match Parts & functions | Match.
solar panel => absorbs sunlight
inverter => converts DC to AC
battery => stores surplus
meter => records exports to grid
#analyze 3 mcq Overview | Choose the correct overview.
:: +Overall, the system converts sunlight into usable electricity in a series of stages, with excess power either stored or exported to the grid. || Overall, there are panels on the roof.
#evaluate 1 mcq Correct sentences | Choose the correct sentence.
:: +Electricity is sent to the grid. || Electricity is send to the grid.
#evaluate 2 mcq The better sentence | Choose the better sentence.
:: +The DC electricity is then converted into AC by an inverter. || Then inverter. DC AC.
#evaluate 3 mcq A Band 8 sentence | Choose the best sentence.
:: +Having been converted into alternating current, the electricity is used to power household appliances. || Electricity converted and power.
#create 1 write Intro + Overview: solar panels | 45 | paraphrasing; overview: input – output | SOLARPANEL
Write only the Introduction + Overview (50–70 words).

The diagram below shows how a solar panel system provides electricity for a home.
#create 2 write How it works: solar panels | 150 | appropriate active/passive; linkers; overview | SOLARPANEL
The diagram below shows how a solar panel system provides electricity for a home.

Summarise the information by selecting and reporting the main features. Write at least 150 words.
#create 3 write An 8-step process: chocolate (Band 8) | 150 | passive + active; advanced linking sentences; start–end overview | CHOC
The diagram below shows how chocolate is produced from cocoa beans.

Summarise the information by selecting and reporting the main features. Write at least 150 words.
`, C);
window.KL_ATTACH(C, SNAP);
})();
