/* Bổ sung bậc Create cho đủ 3 bài mỗi band. Đề, số liệu tự soạn. */
(function () {
const L = (title, unit, labels, series) => ({ kind: 'line', title, unit, labels, series: series.map(([name, data]) => ({ name, data })) });
const B = (title, unit, labels, series) => ({ kind: 'bar', title, unit, labels, series: series.map(([name, data]) => ({ name, data })) });
const T = (title, headers, rows) => ({ kind: 'table', title, headers, rows });
const PIE = (title, pies) => ({ kind: 'pie', unit: '%', title, pies: pies.map(([t, s]) => ({ title: t, slices: Object.entries(s).map(([name, value]) => ({ name, value })) })) });
const PR = (title, steps) => ({ kind: 'process', title, steps });
const MAP = (title, a, b) => ({ kind: 'map', title, maps: [a, b].map(([t, items]) => ({ title: t, items: items.map(([name, x, y, w, h, color]) => ({ name, x, y, w, h, color })) })) });
const C = {
  CINEMA: L('Cinema attendance in four age groups in a country (% who went at least once a month), 2000–2024', '%', ['2000', '2006', '2012', '2018', '2024'], [['15–24', [62, 58, 51, 40, 33]], ['25–34', [41, 44, 46, 42, 38]], ['35–49', [22, 25, 28, 31, 30]], ['50+', [9, 11, 14, 18, 21]]]),
  BOOKS: B('Sales of books by format in a country (million copies), 2014 and 2024', 'million', ['Printed fiction', 'Printed non-fiction', 'E-books', 'Audiobooks', 'Children\'s books'], [['2014', [120, 95, 40, 6, 80]], ['2024', [98, 101, 52, 38, 104]]]),
  TRANSIT: L('Average daily passengers on three transport systems in a city (thousands), 2010–2025', 'thousand', ['2010', '2013', '2016', '2019', '2022', '2025'], [['Bus', [820, 790, 760, 700, 610, 590]], ['Metro', [0, 0, 150, 420, 560, 780]], ['Ferry', [60, 62, 65, 63, 48, 55]]]),
  FOREST: L('Forest cover in four countries (% of land area), 1990–2030 (projected from 2025)', '%', ['1990', '2000', '2010', '2020', '2025', '2030*'], [['Brazil', [70, 66, 62, 59, 58, 57]], ['Vietnam', [28, 37, 42, 46, 47, 48]], ['Indonesia', [65, 58, 53, 49, 48, 47]], ['Costa Rica', [50, 53, 57, 59, 60, 61]]]),
  SLEEP: B('Average hours of sleep per night by age group and gender, 2023', 'hours', ['13–17', '18–29', '30–44', '45–64', '65+'], [['Male', [7.1, 7.0, 6.8, 6.7, 7.2]], ['Female', [7.4, 7.3, 6.9, 6.6, 6.9]]]),
  WASTE2: T('Household waste per person (kg/year) and recycling rate in five cities, 2024', ['City', 'Waste per person', 'Recycling rate'], [['Seoul', '310', '61%'], ['Tokyo', '290', '20%'], ['Singapore', '360', '18%'], ['Taipei', '280', '55%'], ['Bangkok', '420', '14%']]),
  UNI: T('Students at a university by faculty and gender, 2024', ['Faculty', 'Male', 'Female', 'Total'], [['Engineering', '3,200', '900', '4,100'], ['Business', '2,100', '2,600', '4,700'], ['Medicine', '1,100', '1,700', '2,800'], ['Arts', '600', '1,500', '2,100'], ['Total', '7,000', '6,700', '13,700']]),
  TOURISM: T('International tourist arrivals (millions) and average spending per visitor (USD) in four countries, 2015 and 2024', ['Country', 'Arrivals 2015', 'Arrivals 2024', 'Spending 2015', 'Spending 2024'], [['Japan', '19.7', '36.9', '1,560', '1,640'], ['Vietnam', '7.9', '17.6', '950', '1,120'], ['Thailand', '29.9', '35.5', '1,480', '1,350'], ['South Korea', '13.2', '16.4', '1,210', '1,300']]),
  ENERGYHOME: PIE('Household energy use by purpose in Country D, 2005 and 2025', [['2005', { Heating: 52, 'Hot water': 18, Cooking: 8, Appliances: 14, Lighting: 8 }], ['2025', { Heating: 38, 'Hot water': 16, Cooking: 7, Appliances: 31, Lighting: 8 }]]),
  TRAVELPIE: PIE('Main purpose of international trips made by residents of a country, 2012 and 2024', [['2012', { Holiday: 48, Business: 27, 'Visiting family': 15, Study: 6, Other: 4 }], ['2024', { Holiday: 58, Business: 14, 'Visiting family': 16, Study: 9, Other: 3 }]]),
  CHEESE: PR('How cheese is made', ['Fresh milk is collected from farms and tested', 'Milk is pasteurised at 72°C for 15 seconds', 'Starter bacteria and rennet are added', 'Milk thickens into curd and liquid whey', 'Curd is cut and whey is drained off', 'Curd is salted and pressed into moulds', 'Cheese is aged for 2–24 months', 'Cheese is cut, packaged and sold']),
  SALMON: PR('The life cycle of the salmon', ['Eggs are laid in gravel on the bed of an upper river', 'Eggs hatch into alevins, which stay hidden for 4–6 weeks', 'Young fish (fry) feed in the river for 1–3 years', 'Smolts swim downstream to the sea', 'Adult salmon live in the ocean for 1–4 years', 'Adults return upriver to the place they were born', 'Salmon spawn and the cycle begins again']),
  PAPER: PR('How paper is recycled', ['Used paper is collected from homes and offices', 'Paper is sorted by grade at a recycling centre', 'Paper is mixed with water and chemicals to make pulp', 'Pulp is screened and cleaned to remove plastic and staples', 'Ink is removed in a de-inking process', 'Clean pulp is pressed and dried on heated rollers', 'Paper is wound onto large rolls and sent to manufacturers']),
  PARK: MAP('A city park, 2000 and today', ['2000', [['Lake', 5, 5, 40, 30, '#cfe6fb'], ['Grassland', 50, 5, 45, 40, '#e9f3d6'], ['Tennis courts', 5, 40, 25, 20], ['Café', 35, 40, 12, 12, '#fde7c8'], ['Woodland', 5, 65, 90, 30, '#cfe9c9']]], ['Today', [['Lake (smaller)', 5, 5, 30, 25, '#cfe6fb'], ['Children\'s playground', 38, 5, 15, 15, '#fde7c8'], ['Outdoor gym', 56, 5, 15, 15], ['Grassland', 74, 5, 21, 40, '#e9f3d6'], ['Tennis courts', 5, 40, 25, 20], ['Restaurant', 35, 40, 20, 12, '#fde7c8'], ['Cycle path', 0, 58, 100, 5, '#ddd'], ['Woodland (reduced)', 5, 66, 55, 29, '#cfe9c9'], ['Car park', 64, 66, 31, 29, '#eee']]]),
  STATION: MAP('A town railway station area, 1990 and 2025', ['1990', [['Railway line', 0, 45, 100, 6, '#ddd'], ['Station', 40, 30, 20, 14], ['Goods yard', 65, 25, 30, 18, '#eee'], ['Shops', 5, 25, 30, 18], ['Houses', 5, 60, 40, 30], ['Factory', 55, 60, 40, 30]]], ['2025', [['Railway line', 0, 45, 100, 6, '#ddd'], ['Station (extended)', 35, 28, 30, 16], ['Bus interchange', 68, 25, 27, 18, '#cfe6fb'], ['Shops', 5, 25, 28, 18], ['Houses', 5, 60, 40, 30], ['Apartments', 55, 60, 22, 30], ['Park', 79, 60, 16, 30, '#e9f3d6']]]),
  SPEND: B('Average monthly spending of university students in two countries (USD), 2024', 'USD', ['Rent', 'Food', 'Transport', 'Books', 'Entertainment', 'Phone/Internet'], [['Country A', [520, 310, 80, 45, 120, 35]], ['Country B', [210, 180, 40, 30, 60, 15]]]),
  FUTUREJOBS: L('Employment in three sectors in Country E (millions), 2000–2040 (projected from 2025)', 'million', ['2000', '2010', '2020', '2025', '2030*', '2040*'], [['Manufacturing', [6.2, 5.8, 5.1, 4.8, 4.4, 3.9]], ['Healthcare', [2.1, 2.9, 3.8, 4.4, 5.0, 6.1]], ['Digital services', [0.4, 1.1, 2.3, 3.0, 3.9, 5.2]], ['Total (all sectors)', [31, 33, 35, 36, 36.5, 37]]]),
  DIET: T('Percentage of adults meeting daily recommendations in a country, by age group, 2024', ['Age', '5 portions of fruit/veg', 'Physical activity', '7+ hours sleep'], [['18–29', '21%', '58%', '61%'], ['30–44', '27%', '44%', '49%'], ['45–64', '34%', '39%', '55%'], ['65+', '41%', '28%', '66%']]),
  PHONES2: B('Smartphone ownership by age group in two countries (%), 2024', '%', ['16–24', '25–34', '35–54', '55–64', '65+'], [['Country X', [99, 98, 94, 82, 61]], ['Country Y', [91, 88, 71, 45, 18]]]),
  WINDMILL: PR('How a wind turbine generates electricity', ['Wind turns the three large blades', 'The blades spin a shaft inside the nacelle', 'A gearbox increases the speed of rotation', 'The generator converts movement into electricity', 'A transformer increases the voltage', 'Electricity travels through underground cables to a substation', 'The substation sends power to the national grid']),
};
const SNAP = window.KL_SNAP();
const S1 = 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.';
const S2 = 'Summarise the information by selecting and reporting the main features. Write at least 150 words.';
const E = 'Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.';
window.KL_BANK(`
@g1
#create 1 write Simple, compound and complex sentences about school | 40 | 1 simple sentence; 1 compound sentence; 1 complex sentence
Write 4 sentences (40–60 words) about your old school: at least one simple sentence, one compound sentence (and/but/so) and one complex sentence (because/although/when).
#create 2 write A paragraph about city traffic | 90 | expanded noun phrases; complex sentences; no repeated subjects
Write a 90–110-word paragraph about traffic in the city where you live, using a different structure in each sentence.
#create 3 write An academic paragraph about reading habits | 110 | nominalised subjects; compound-complex sentences; noun clauses
Topic: *The decline in reading for pleasure among teenagers.* Write a 110–130-word paragraph that opens with an academic noun phrase and has at least two compound-complex sentences.

@g2
#create 1 write Describe a room | 40 | a/an/the; singular/plural; agreement
Write 4–5 sentences (40–60 words) describing your bedroom. Use *a/an/the* correctly and at least one uncountable noun (*furniture, equipment*).
#create 2 write A data paragraph about students | 80 | the number of; the proportion of; subject–verb agreement
Data: *Survey of 800 students — 55% live with family, 30% rent a room, 15% live in dormitories. The number of students renting rooms has doubled since 2015.* Write an 80–100-word paragraph with no article or agreement errors.
#create 3 write A fully accurate Task 2 paragraph | 110 | each/every/neither; abstract nouns; complex subjects
Prompt: *Is it better for children to grow up in the countryside?* Write a 110–130-word paragraph, using *each of, neither... nor, the number of, information, evidence* accurately.

@g3
#create 1 write Talk about learning English | 40 | past simple; present perfect; present simple
Write 4–5 sentences (40–60 words): when you started learning English (past simple), what you have learnt so far (present perfect) and how you usually study (present simple).
#create 2 write Describe a trend in house prices | 90 | past simple; past perfect; present perfect
Data: *Average house price in a city (USD thousand): 2005 – 80, 2010 – 95, 2015 – 140, 2020 – 210, 2025 – 230.* Write a 90–110-word paragraph that includes *By + year, ... had ...*.
#create 3 write A paragraph combining actual data and projections | 110 | accurate tenses; future perfect; is projected to
Data: *Population aged 65+ (% of total): 2000 – 6%, 2020 – 12%, 2040 (projected) – 21%, 2050 (projected) – 26%.* Write a 110–130-word paragraph with at least two ways of expressing predictions.

@g4
#create 1 write Introduce a dish from your hometown | 40 | who; which; where
Write 4–5 sentences (40–60 words) introducing a local speciality, using *who, which, where*.
#create 2 write Introduce an inspiring person | 90 | whose; , which; when
Write a 90–110-word paragraph about a person who inspires you, using *whose*, *, which* (referring to a whole clause) and *when*.
#create 3 write A Task 2 paragraph with advanced relative clauses | 110 | preposition + which; most of whom; the extent to which
Prompt: *Should governments fund the arts?* Write a 110–130-word paragraph that includes *the extent to which, by which/through which, most of whom/many of which*.

@g5
#create 1 write Describe how to make tea | 40 | present passive; First/Then/Finally
Write 4–6 sentences (40–60 words) describing how to make a cup of tea, using passive sentences.
#create 2 write Describe the bread-making process | 90 | passive; after being + past participle; once
Process: *mix flour, water, yeast → knead → leave to rise 1 hour → shape → bake 220°C → cool → slice and pack.* Write a 90–110-word paragraph.
#create 3 write An objective Task 2 paragraph | 110 | It is widely believed that; nominalisation; passive + modal
Prompt: *Should fast food advertising be banned?* Write a 110–130-word paragraph with at least 2 objective passive sentences, 2 nominalised phrases and 1 *should be + past participle* sentence.

@g6
#create 1 write Compare two seasons | 40 | comparatives; superlatives; as ... as
Write 4–5 sentences (40–60 words) comparing summer and winter where you live.
#create 2 write Compare travel fares | 90 | twice as...as; considerably; that of
Data: *Hanoi–HCMC: plane 2,000,000 VND (2h), train 1,100,000 VND (33h), coach 800,000 VND (30h).* Write a 90–110-word paragraph comparing price and journey time.
#create 3 write Multi-dimensional comparison (Band 8) | 110 | by far; counterparts; whereas; the + -er, the + -er
Data: *Daily social media use (minutes) — Teens: 190 (girls 210, boys 170); Adults 25–44: 95; Adults 45+: 40.* Write a 110–130-word paragraph.

@g7
#create 1 write Why you like a school subject | 40 | because; so; however
Write 4–5 sentences (40–60 words) about a subject you like, using *because, so, however*.
#create 2 write An argument paragraph with conditionals | 90 | first and second conditionals; as a result; in addition
Prompt: *What would happen if every family stopped using plastic bags?* Write a 90–110-word paragraph.
#create 3 write An academically cohesive argument paragraph | 110 | conditional inversion; Added to this; This is not to say that
Prompt: *Should the working week be reduced to four days?* Write a 110–130-word paragraph without using Firstly/Moreover/Furthermore.

@g8
#create 1 write Classroom rules | 40 | must; should; can
Write 4–5 sentences (40–60 words) proposing classroom rules, using *must, should, can*.
#create 2 write A solution paragraph with hedging | 90 | could; might; may well
Prompt: *How can schools reduce bullying?* Write a 90–110-word paragraph proposing 2 solutions, avoiding absolute claims.
#create 3 write An evaluative paragraph with perfect modals | 110 | could have; should have; would
Prompt: *What lessons can be learnt from the way cities handled rapid growth in the past?* Write a 110–130-word paragraph using perfect modals and advanced hedging.

@g9
#create 1 write Emphatic sentences about travel | 30 | Never have I; Not only... but also
Write 3–4 sentences (30–50 words) about a trip, including 2 inverted sentences.
#create 2 write A paragraph with well-placed inversion | 90 | Only by; Rarely do; no overuse
Prompt: *Why is it important to protect endangered languages?* Write a 90–110-word paragraph with 2 inverted sentences.
#create 3 write A strong conclusion with inversion | 90 | Only when; So + adj + that; Under no circumstances
Prompt: *Governments must act now to reduce air pollution.* Write a 90–110-word concluding paragraph with 2–3 different inversion structures.

@g10
#create 1 write Something you believe in | 40 | I believe that; What I like is; I wonder if
Write 4–5 sentences (40–60 words) about your dream job, using at least 3 noun clauses.
#create 2 write Introduction + thesis | 90 | It is often claimed that; whether; what
Prompt: *Should schools teach financial skills?* Write an introduction and a thesis sentence (90–110 words) with at least 3 noun clauses.
#create 3 write An analytical paragraph with noun clauses | 110 | What... is that; Whether...; The fact that
Prompt: *Why are fewer young people interested in farming?* Write a 110–130-word paragraph with a noun clause as the subject at least twice.

@g11
#create 1 write The time you were late for school | 40 | because; although; when
Write 4–5 sentences (40–60 words) about a time you were late for school, using *because, although, when*.
#create 2 write A cause–purpose paragraph | 90 | so that; as; whereas
Prompt: *Why do many people choose to study abroad?* Write a 90–110-word paragraph using at least 4 different adverbial conjunctions.
#create 3 write A sophisticated concession paragraph | 110 | Much as; However + adj; provided that
Prompt: *Should children be allowed to use social media?* Write a 110–130-word paragraph with 2 advanced concession structures and 1 *provided that* sentence.

@g12
#create 1 write Describe a family photo | 40 | V-ing; reduced past participle clauses
Write 4–5 sentences (40–60 words) describing a family photo, using participle phrases (*my father standing..., a cake made by...*).
#create 2 write A concise paragraph with participles | 90 | Having + V3; V-ing; V3
Prompt: *The advantages of learning online.* Write a 90–110-word paragraph with at least 3 participle phrases of different types.
#create 3 write A Band 8 paragraph with participles | 110 | Faced with; thereby; with + N + V-ing; Given
Prompt: *The impact of automation on factory workers.* Write a 110–130-word paragraph.

@g13
#create 1 write List your household chores | 40 | parallel lists; both...and
Write 4–5 sentences (40–60 words) about the chores you do, with 2 parallel lists and one *both... and* sentence.
#create 2 write A paragraph listing benefits | 90 | not only...but also; 3-part lists; parallel clauses
Prompt: *The benefits of volunteering.* Write a 90–110-word paragraph in which every list is parallel.
#create 3 write A persuasive paragraph with rhythm | 110 | repeated structures; whether by...; parallel clauses
Prompt: *How can cities become more liveable?* Write a 110–130-word paragraph with one three-part parallel structure.

@g14
#create 1 write Fix a short paragraph | 30 | no fragments; no comma splices
Correct and rewrite (30–50 words): *"Because I like football. I play every weekend, my team is good. Very fun."*
#create 2 write Rewrite a choppy paragraph | 80 | combining sentences; conjunctions; no sentence errors
Rewrite (80–100 words): *"Da Lat is a city. It is in the highlands. It is cool. Many couples go there. They take photos. The flowers are beautiful. The coffee is good."*
#create 3 write Edit an error-filled paragraph (Band 8) | 100 | no fragments/run-ons; no dangling participles; varied sentences
Edit (100–120 words): *"Being a crowded city, traffic jams happen every day. People are late, they are stressed and they are angry and they honk. A serious problem. The government should do something it is urgent."*

@g15
#create 1 write 4 sentences, 4 structures | 40 | simple sentence; compound sentence; relative clause; adverbial clause
Topic: *Your best friend.* Write 4 sentences (40–60 words), each with a different structure.
#create 2 write A self-analysed paragraph | 90 | ≥4 different structures
Topic: *The importance of sleep for students.* Write a 90–110-word paragraph with at least 4 different structures.
#create 3 write A Band 8 paragraph with all 6 structures | 120 | nominalisation; noun clause; participle; inversion; relative clause with a quantifier; concession
Topic: *The rise of electric motorbikes in Vietnam.* Write a 120–140-word paragraph using all 6 structures.

@g16
#create 1 write Write and check your own work | 40 | no agreement, article or preposition errors
Write 4–5 sentences (40–60 words) about your favourite food, then check your own agreement, article and preposition errors.
#create 2 write Edit a Band 6 paragraph | 90 | error correction; referencing; varied sentences
Edit (90–110 words): *"Nowadays, the people is very busy. Firstly, they works a lot. Secondly, they don't have time for cook. Thirdly, they eat fast food. So the health is bad."*
#create 3 write Write and self-edit (Band 8) | 110 | 0 errors; nominalisation; referencing
Prompt: *Should homework be banned in primary schools?* Write a 110–130-word paragraph, then check it against the Grammar Nazi checklist before submitting it for marking.

@t1a
#create 1 write Guided Intro + Overview | 45 | paraphrasing; a 2-point overview | CINEMA
Write only the Introduction + Overview (50–70 words).

The graph below shows the percentage of people in four age groups who went to the cinema at least once a month between 2000 and 2024.

Suggested frame: *The line graph illustrates ... Overall, while ..., ...*
#create 2 write Intro + Overview: book sales | 50 | thorough paraphrase; an Overview without figures | BOOKS
Write the Introduction + Overview (60–80 words).

The chart below shows sales of books by format in a country in 2014 and 2024.
#create 3 write Full report: cinemas (Band 8) | 150 | a 2-point Overview; crossover points; age groups | CINEMA
The graph below shows the percentage of people in four age groups who went to the cinema at least once a month between 2000 and 2024.

${S1}

@t1b
#create 1 write Intro + Overview: transport passengers | 45 | paraphrase; main trends | TRANSIT
Write only the Introduction + Overview (50–70 words).

The graph below shows the average number of daily passengers on three transport systems in a city between 2010 and 2025.

Suggested frame: *The line graph compares ... Overall, ... whereas ...*
#create 2 write Line graph: transport passengers | 150 | trend verbs + nouns; the point when the Metro appears | TRANSIT
The graph below shows the average number of daily passengers on three transport systems in a city between 2010 and 2025.

${S1}
#create 3 write Line graph: cinemas (Band 8) | 150 | opposing trends; crossover points; Super Boosters | CINEMA
The graph below shows the percentage of people in four age groups who went to the cinema at least once a month between 2000 and 2024.

${S1}

@t1c
#create 1 write Intro + Overview: sleep | 45 | paraphrase; an Overview of the main differences | SLEEP
Write only the Introduction + Overview (50–70 words).

The chart below shows the average hours of sleep per night by age group and gender in 2023.

Suggested frame: *The bar chart compares ... Overall, ...*
#create 3 write No change: student spending (Band 8) | 150 | multiples; respectively; grouping categories | SPEND
The chart below shows the average monthly spending of university students in two countries in 2024.

${S1}

@t1g
#create 1 write Intro + Overview: international tourism | 45 | paraphrase; an Overview of both visitor numbers and spending | TOURISM
Write only the Introduction + Overview (50–70 words).

The table below shows international tourist arrivals and average spending per visitor in four countries in 2015 and 2024.
#create 2 write Mixed: international tourism | 150 | linking the two measures; paragraph transitions | TOURISM
The table below shows international tourist arrivals and average spending per visitor in four countries in 2015 and 2024.

${S1}
#create 3 write Mixed: waste & recycling (Band 8) | 150 | linking waste volume and recycling rate; grouping cities | WASTE2
The table below shows the amount of household waste produced per person and the recycling rate in five Asian cities in 2024.

${S1}

@t1d
#create 1 write Intro + Overview: household energy | 45 | paraphrase; the biggest change | ENERGYHOME
Write only the Introduction + Overview (50–70 words).

The pie charts below show how households in Country D used energy in 2005 and 2025.
#create 2 write Two-year pie charts: household energy | 150 | fractions; paragraphing by trend | ENERGYHOME
The pie charts below show how households in Country D used energy in 2005 and 2025.

${S1}
#create 3 write Two-year pie charts: trip purposes (Band 8) | 150 | accurate fractions; overtake; grouping categories | TRAVELPIE
The pie charts below show the main purposes of international trips made by residents of a country in 2012 and 2024.

${S1}

@t1e
#create 1 write Intro + Overview: cheese-making | 45 | paraphrase; number of stages, first–last | CHEESE
Write only the Introduction + Overview (50–70 words).

The diagram below shows how cheese is made.
#create 3 write Natural process: the salmon life cycle (Band 8) | 150 | the active for natural stages; a cycle; advanced linking sentences | SALMON
The diagram below shows the life cycle of the salmon.

${S2}

@t1f
#create 1 write Intro + Overview: a park | 45 | paraphrase; the general pattern | PARK
Write only the Introduction + Overview (50–70 words).

The maps below show a city park in 2000 and today.
#create 2 write Map: a park | 150 | passive; location; grouping changes | PARK
The maps below show a city park in 2000 and today.

${S1}
#create 3 write Map: a railway station area (Band 8) | 150 | patterns of conversion; give way to; grouping by area | STATION
The maps below show the area around a town railway station in 1990 and 2025.

${S1}

@t1h
#create 1 write Intro + Overview: forest cover | 45 | paraphrase; trends + projections | FOREST
Write only the Introduction + Overview (50–70 words).

The graph below shows forest cover in four countries from 1990 to 2025, with projections for 2030.
#create 3 write Change over time: forest cover (Band 8) | 150 | selecting figures; two opposing trends; projections | FOREST
The graph below shows forest cover in four countries from 1990 to 2025, with projections for 2030.

${S1}

@t1i
#create 1 write A short body paragraph with 3 boosters | 60 | followed by; while; result V-ing | BOOKS
Write ONE body paragraph (60–80 words) about Printed fiction, E-books and Audiobooks, using at least 3 boosters.

The chart below shows sales of books by format in a country in 2014 and 2024.
#create 2 write A report with boosters: book sales | 150 | ≥5 boosters; grouping categories | BOOKS
The chart below shows sales of books by format in a country in 2014 and 2024.

${S1}
#create 3 write A report with 7 boosters: tourism (Band 8) | 150 | ≥7 boosters; linking the two measures | TOURISM
The table below shows international tourist arrivals and average spending per visitor in four countries in 2015 and 2024.

${S1}

@t1j
#create 1 write Intro + Overview: 6 spending categories | 45 | paraphrasing; an overview grouping the categories | SPEND
Write only the Introduction + Overview (50–70 words).

The chart below shows the average monthly spending of university students in two countries in 2024.
#create 2 write 6 categories: student spending | 150 | grouping categories; comparing two countries | SPEND
The chart below shows the average monthly spending of university students in two countries in 2024.

${S1}
#create 3 write 5 categories × 2 countries: phones (Band 8) | 150 | grouping age groups by gap; multiples | PHONES2
The chart below shows smartphone ownership by age group in two countries in 2024.

${S1}

@t1k
#create 1 write Intro + Overview with projections & Total | 45 | paraphrasing; an overview including the Total | FUTUREJOBS
Write only the Introduction + Overview (50–70 words).

The graph below shows employment in three sectors and in total in Country E from 2000 to 2025, with projections to 2040.
#create 3 write Projections + Total: employment (Band 8) | 150 | past + prediction; Total; crossover points | FUTUREJOBS
The graph below shows employment in three sectors and in total in Country E from 2000 to 2025, with projections to 2040.

${S1}

@t1l
#create 1 write Intro + Overview: a student table | 45 | paraphrasing; a 2-point overview | UNI
Write only the Introduction + Overview (50–70 words).

The table below shows the number of male and female students in four faculties of a university in 2024.

@t1m
#create 1 write Intro + Overview: a wind turbine | 45 | paraphrase; input – output | WINDMILL
Write only the Introduction + Overview (50–70 words).

The diagram below shows how a wind turbine generates electricity.
#create 2 write How it works: a wind turbine | 150 | appropriate active/passive; linkers | WINDMILL
The diagram below shows how a wind turbine generates electricity.

${S2}
#create 3 write Process: paper recycling (Band 8) | 150 | passive + reduced clauses; a first–last Overview; advanced linking sentences | PAPER
The diagram below shows how paper is recycled.

${S2}

@t2a
#create 1 write Guided prompt analysis + introduction | 60 | topic/task; paraphrase; thesis
Prompt: *Some people believe that every child should learn to play a musical instrument. Do you agree?*

Note the topic, task and scope, then write the Introduction (2 sentences).

Suggested frame: *It is sometimes argued that ... I (partly) agree because ...*
#create 2 write Introductions for 4 prompts | 100 | paraphrasing; a thesis matching the type
Write an introduction (2 sentences per prompt):
1. *Should old buildings be protected even if this stops a city from growing?*
2. *More people are working from cafés and shared offices. Positive or negative?*
3. *Why do many people not exercise enough? What can be done?*
4. *Some think news should be free; others think people should pay for it. Discuss both views.*
#create 3 write Analysing tricky prompts (Band 8) | 120 | scope; a nuanced thesis; avoiding traps
Prompt: *The best way to improve road safety is to give much harsher punishments to dangerous drivers. To what extent do you agree?*

Write an Introduction + an outline of 2 body paragraphs (120–150 words), showing clearly how you handle "the best way".

@t2b
#create 1 write A guided one-idea paragraph | 60 | topic sentence; because; for example
Prompt: *Should students wear school uniforms?* Write ONE one-idea paragraph (60–80 words).

Suggested frame: *One clear benefit of ... is that ... This is because ... For example, ...*
#create 3 write A tight two-idea paragraph (Band 8) | 130 | 2 equal ideas; a chain of consequences; general examples
Prompt: *What are the benefits of cities investing in cycle lanes?* Write ONE two-idea paragraph (130–150 words).

@t2c
#create 1 write A guided opinion essay | 110 | a clear thesis; topic sentences; examples
Prompt: *Some people think that students should study only subjects they enjoy. To what extent do you agree?*

Write an introduction + ONE body paragraph (110–140 words).

Suggested frame: *It is sometimes suggested that ... I disagree because ... The main reason is that ...*
#create 3 write Opinion "the only way" (Band 8) | 250 | a No thesis with a concession; alternative solutions; hedging
Some people say that the only way to reduce plastic pollution is to ban single-use plastics completely. To what extent do you agree or disagree?

${E}

@t2d
#create 1 write A guided discussion essay | 110 | an introduction stating both sides; one body paragraph
Prompt: *Some think young people should save money for the future; others think they should enjoy it now. Discuss both views and give your opinion.*

Write an introduction + Body 1 (110–140 words).
#create 2 write Discussion: city or countryside | 250 | balancing both sides; a clear opinion
Some people prefer to raise children in big cities, while others believe the countryside is a better environment. Discuss both views and give your own opinion.

${E}
#create 3 write Advantages outweigh (Band 8) | 250 | weighing the sides; a nuanced thesis
More and more people are using artificial intelligence tools at work. Do the advantages of this development outweigh the disadvantages?

${E}

@t2e
#create 1 write A guided problem–solution essay | 110 | Intro; 1 problem + solution paragraph
Prompt: *Many young people spend too much time on their phones. What problems does this cause and what can be done?*

Write an introduction + ONE body paragraph (110–140 words).
#create 2 write Problem–Solution: urban flooding | 250 | specific problems; matching solutions
Many cities suffer from flooding during the rainy season. What problems does this cause, and what measures could be taken?

${E}
#create 3 write A two-part problem–solution essay (Band 8) | 250 | in-depth problems; feasible solutions; chains of consequences
In many countries, there is a shortage of teachers. What are the consequences of this problem, and how could it be solved?

${E}

@t2f
#create 1 write A paragraph focusing on collocations | 60 | collocations; no repeated words
Prompt: *Why do people keep pets?* Write a 60–80-word paragraph using 3 collocations, without repeating the main noun more than twice.
#create 2 write A CC – LR – GRA paragraph | 120 | referencing; collocations; complex sentences
Prompt: *Should museums be free for everyone?* Write ONE body paragraph (120–140 words).
#create 3 write A complete essay focusing on LR & GRA (Band 8) | 250 | accurate collocations; varied sentences; referencing
Some people believe that technology has made people less creative. To what extent do you agree or disagree?

${E}

@t2g
#create 1 write A guided counter-argument paragraph | 60 | It is true that; However; restating your view
Prompt: *Should junk food be banned in schools?* (your choice: Yes) Write a counter-argument paragraph (60–80 words).
#create 2 write An Opinion essay with a counter-argument | 250 | a complete counter-argument paragraph; a direct rebuttal
Some people believe that university students should pay the full cost of their studies. To what extent do you agree or disagree?

${E}
#create 3 write An Opinion essay with a counter-argument (Band 8) | 250 | a fair concession; an evidence-based rebuttal; academic cohesion
Some people think that zoos have no place in the modern world. To what extent do you agree or disagree?

${E}

@t2h
#create 1 write Rewrite a paragraph full of no-nos | 60 | 0 contractions; 0 etc.; 0 rhetorical questions
Rewrite (60–80 words): *"Kids nowadays don't wanna go outside!!! They just stay home, play games, watch YouTube, etc. Isn't that sad?"*
#create 2 write A body paragraph with no no-nos | 120 | an academic tone; general examples
Prompt: *Should the government limit the number of cars each family can own?* Write ONE body paragraph (120–140 words) with no no-nos.
#create 3 write A full essay with zero no-nos (Band 8) | 250 | zero no-nos; a conclusion with no new ideas
Some people think that it is a waste of time for students to study history. To what extent do you agree or disagree?

${E}

@t2i
#create 1 write A guided Should essay | 110 | a Should thesis; one paragraph of reasons
Prompt: *Should public transport be free for students?*

Write an introduction + ONE body paragraph (110–140 words).
#create 3 write Each is better for a group (Band 8) | 250 | a group-based thesis; direct comparison
Some people think it is better to work for a large company, while others prefer a small business. Which do you think is better?

${E}

@t2j
#create 1 write Guided positive/negative essay | 110 | a clear thesis; one paragraph of reasons
Prompt: *More people are buying second-hand clothes. Is this a positive or negative development?*

Write an introduction + ONE body paragraph (110–140 words).
#create 2 write Positive or negative | 250 | a clear thesis; concession; a matching conclusion
In many countries, more people are moving from cities to small towns. Is this a positive or negative development?

${E}
#create 3 write Positive/negative split by group (Band 8) | 250 | a grouping thesis; balanced arguments; hedging
Many children now learn to use computers before they learn to read. Is this a positive or negative development?

${E}

@t2k
#create 1 write A guided causes essay | 110 | an introduction; one causes paragraph
Prompt: *Fewer young people are choosing to become teachers. Why? What effects does this have?*

Write an introduction + a causes paragraph (110–140 words).
#create 2 write Causes – Effects | 250 | specific causes; effects; examples
In many cities, the number of small family-run shops is falling. What are the causes of this, and what effects does it have on communities?

${E}
#create 3 write Causes – Solutions (Band 8) | 250 | deep causes; matching solutions
Many people today feel lonely despite being more connected than ever. What are the causes of this, and what can be done?

${E}

@t2l
#create 1 write Self-check with the checklist | 110 | a thesis in the introduction; topic sentences; no no-nos
Prompt: *Should children be taught to grow their own food at school?*

Write an Introduction + ONE body paragraph (110–140 words), then mark it yourself against the checklist.
#create 2 write A complete essay + checklist | 250 | all 4 parts; the thesis matches the conclusion
Some people think that the government should spend more money on public libraries, while others think the money is better spent on the internet. Discuss both views and give your opinion.

${E}
#create 3 write A self-marked checklist essay (Band 8) | 250 | the full TR/CC/LR/GRA checklist; in-depth development
Some people believe that international sporting events, such as the Olympics, bring more benefits than costs to the host country. To what extent do you agree or disagree?

${E}

@t2m
#create 1 write A guided "The best" essay | 110 | a No thesis; one acknowledging paragraph
Prompt: *The best way to make friends is through social media.*

Write an introduction + Body 1 (110–140 words).
#create 2 write "The most important" | 250 | a clear thesis; comparison with other factors
Some people say that the most important factor for success at university is intelligence. To what extent do you agree or disagree?

${E}
#create 3 write "The best way" with a Yes answer (Band 8) | 250 | a Yes thesis; proving it is better than other ways
Some people say that the best way to learn about a country's culture is to live with a local family. To what extent do you agree or disagree?

${E}
`, C);
window.KL_ATTACH(C, SNAP);
})();
