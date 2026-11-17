/* Lấp đủ mọi ô Bloom × độ khó cho Chặng 1 (Grammar). Ví dụ tự soạn, khung theo khoá học. */
(function () {
const U = id => window.UNITS.find(u => u.id === id);
const add = (id, ex) => U(id).exercises.push(ex);
const M = (id, bloom, lv, title, instr, items) => add(id, { bloom, lv, type: 'mcq', title, instr, items: items.map(([q, options, a, ex], i) => { const k = [...(title + q + i)].reduce((s, c) => s + c.charCodeAt(0), 0) % options.length; const o = options.slice(k).concat(options.slice(0, k)); return { q, options: o, a: (a - k + o.length) % o.length, ex }; }) });
const G = (id, bloom, lv, title, instr, items) => add(id, { bloom, lv, type: 'gap', title, instr, items: items.map(([q, a]) => ({ q, a: [].concat(a) })) });
const R = (id, bloom, lv, title, instr, items) => add(id, { bloom, lv, type: 'rewrite', title, instr, items: items.map(([q, a]) => ({ q, a: [].concat(a) })) });
const X = (id, bloom, lv, title, instr, options, pairs, ex) => add(id, { bloom, lv, type: 'match', title, instr, options, pairs: pairs.map(([l, r]) => ({ l, r })), ex });
const W = (id, lv, title, prompt, minWords, focus) => add(id, { bloom: 'create', lv, type: 'write', kind: 'grammar', title, prompt, minWords, focus });

/* ===== g1 Cấu trúc câu & loại câu ===== */
M('g1', 'remember', 2, 'Identify expanded noun phrases', 'Choose the sentence whose subject is an expanded noun phrase.', [
  ['', ['People complain.', 'The excessive use of plastic packaging in supermarkets worries many shoppers.', 'It is bad.'], 1],
  ['', ['Noise annoys residents.', 'The constant noise from construction sites near schools disrupts lessons.', 'They are loud.'], 1],
  ['', ['Rents rose.', 'The rapid rise in rents for small apartments has pushed students out of the city centre.', 'Students left.'], 1]]);
M('g1', 'remember', 3, 'Identify advanced sentences', 'Choose the sentence with an advanced academic noun phrase (nominalisation + modifiers).', [
  ['', ['Cheap phones are everywhere, so people work from home.', 'The increasing affordability of mobile devices has facilitated remote working.', 'Phones are cheap and people like working at home.'], 1],
  ['', ['The widespread adoption of contactless payment has reduced the use of cash in many cities.', 'People pay with cards a lot now.', 'Cards are popular. Cash is less popular.'], 0]]);
M('g1', 'understand', 2, 'Compound or complex?', 'Choose the correct sentence type.', [
  ['*The old cinema was demolished, and a car park was built in its place.*', ['Compound sentence', 'Complex sentence', 'Simple sentence'], 0],
  ['*Although the town has grown, its centre has kept its traditional character.*', ['Compound sentence', 'Complex sentence', 'Simple sentence'], 1],
  ['*Prices rose sharply in 2020, but demand remained stable, which surprised economists.*', ['Compound-complex sentence', 'Simple sentence', 'Compound sentence'], 0]]);
M('g1', 'understand', 3, 'Understand multi-clause sentences', 'Sentence: *While I agree that homes in historic districts should look uniform, the style of houses elsewhere should reflect the owner\'s taste.*', [
  ['The main clause is:', ['the style of houses elsewhere should reflect the owner\'s taste', 'While I agree...', 'that homes in historic districts should look uniform'], 0],
  ['What type of clause is *that homes ... uniform*?', ['A noun clause (the object of agree)', 'A relative clause (describing a noun)', 'An adverb clause (showing a reason)'], 0],
  ['Here *While* means:', ['concession (although)', 'time (during the time that)', 'cause'], 0]]);
G('g1', 'apply', 1, 'Basic verb forms', 'Put the verbs in brackets into the present simple.', [
  ['Many students ___ (live) far from campus.', 'live'], ['Online learning ___ (save) time.', 'saves'], ['My city ___ (have) two universities.', 'has']]);
M('g1', 'analyze', 1, 'Find the main verb', 'Choose the main verb of the sentence.', [
  ['*Young people in big cities often rent small flats.*', ['rent', 'big', 'often'], 0],
  ['*The price of fresh vegetables rose last year.*', ['rose', 'price', 'fresh'], 0],
  ['*Many workers now travel to work by bus.*', ['travel', 'work', 'bus'], 0]]);
M('g1', 'evaluate', 1, 'Which sentence is correct?', 'Choose the structurally correct sentence.', [
  ['', ['Many people use public transport every day.', 'Many people using public transport every day.', 'Many people public transport every day.'], 0],
  ['', ['The quality of the roads are poor.', 'The quality of the roads is poor.'], 1]]);
M('g1', 'evaluate', 3, 'Which sentence is the most advanced?', 'Choose the most academic opening sentence.', [
  ['', ['Many people use cars, and cars cause pollution, so cities are dirty.', 'The growing reliance on private cars in rapidly expanding cities has become a major source of air pollution.', 'Cars are a big problem in cities today.'], 1]]);
W('g1', 3, 'A paragraph with advanced noun phrases', 'Topic: *The rise of food delivery apps.*\n\nWrite an 80–100-word paragraph that opens with an **academic noun phrase** as the subject (e.g. *The rapid growth of...*), using at least one complex and one compound-complex sentence.', 70, ['academic noun phrases', 'complex sentences', 'compound-complex sentences']);

/* ===== g3 Thì ===== */
M('g3', 'remember', 2, 'The present perfect in Task 2', 'Choose the sentence with the correct tense.', [
  ['', ['Over the past decade, online shopping has grown rapidly.', 'Over the past decade, online shopping grows rapidly.'], 0],
  ['', ['In recent years, many cities have introduced bike lanes.', 'In recent years, many cities introduce bike lanes.'], 0]]);
M('g3', 'remember', 3, 'Future perfect', 'Choose the correct sentence.', [
  ['', ['By 2030, the city will have completed its new metro line.', 'By 2030, the city will complete its new metro line yesterday.', 'By 2030, the city has completed its new metro line.'], 0],
  ['', ['Experts predict that by 2040 most cars will have become electric.', 'Experts predict that by 2040 most cars became electric.'], 0]]);
M('g3', 'understand', 2, 'Why the present perfect?', 'Choose the reason.', [
  ['*Smartphones have changed the way people read news.*', ['A change that began in the past and still affects the present', 'An action completed at a clear time point', 'A prediction'], 0],
  ['*In 2010, sales fell to 20,000.*', ['A specific past time point → past simple', 'Continuing up to now'], 0]]);
M('g3', 'understand', 3, 'The meaning of the future perfect', 'Sentence: *By 2035, half of all new cars will have been electric for several years.*', [
  ['This sentence says that:', ['Before 2035, electric cars will already have made up half of new cars for several years', 'Electric cars will only start to make up half of new cars in 2035', 'Electric cars will disappear in 2035'], 0]]);
G('g3', 'apply', 1, 'The past simple in Task 1', 'Put the verbs into the past simple.', [
  ['In 2005, car sales ___ (rise) to 2 million.', 'rose'], ['The figure ___ (fall) slightly in 2010.', 'fell'], ['Exports ___ (reach) a peak in 2015.', 'reached']]);
M('g3', 'analyze', 1, 'Time markers', 'Choose the tense that fits the time marker.', [
  ['*in 1998*', ['past simple', 'present perfect', 'future'], 0], ['*since 2015*', ['present perfect', 'past simple'], 0], ['*in 2040 (projected)*', ['is expected to + V', 'past simple'], 0]]);
M('g3', 'analyze', 3, 'Subtle tense errors', 'Choose the sentence with a tense error.', [
  ['', ['Between 2000 and 2010, the figure has doubled.', 'Since 2000, the figure has doubled.', 'Between 2000 and 2010, the figure doubled.'], 0, 'A period that ended in the past → past simple.'],
  ['', ['By 2010, prices had risen by 40%.', 'By 2010, prices have risen by 40%.'], 1]]);
M('g3', 'evaluate', 1, 'Choose the sentence with the correct tense', 'A chart covering 1990–2000.', [
  ['', ['Coal use fell from 60% to 40%.', 'Coal use falls from 60% to 40%.', 'Coal use has fallen from 60% to 40% between 1990 and 2000.'], 0]]);
W('g3', 3, 'A paragraph combining 4 tenses', 'Topic: *Electric scooters in Asian cities.*\n\nWrite a 90–110-word paragraph with: one past simple sentence (a specific time), one present perfect sentence (a trend up to now), one present simple sentence (a claim), and one **future perfect** sentence or a prediction with *is expected to*.', 80, ['past simple', 'present perfect', 'future perfect', 'predictions']);

/* ===== g8 Modal ===== */
M('g8', 'remember', 2, 'Softening modals', 'Choose the hedged sentence.', [
  ['', ['Fast food causes obesity.', 'Fast food may contribute to obesity.'], 1], ['', ['Video games can make some children more aggressive.', 'Video games make children violent.'], 0]]);
M('g8', 'remember', 3, 'Advanced hedging', 'Choose the most advanced sentence.', [
  ['', ['Online learning is bad.', 'Online learning might be bad.', 'Students learning entirely online could be far more likely to feel isolated if left without regular contact with teachers.'], 2]]);
M('g8', 'understand', 2, 'Shades of meaning in modals', 'Choose the correct meaning.', [
  ['*Governments should invest in rail.*', ['advice / suggestion', 'a legal obligation', 'possibility'], 0],
  ['*This might reduce traffic.*', ['low possibility, uncertain', 'certainty, based on clear evidence'], 0], ['*Drivers must wear seatbelts.*', ['obligation', 'suggestion'], 0]]);
M('g8', 'understand', 3, 'Perfect modals', 'Choose the correct meaning.', [
  ['*The accident could have been avoided.*', ['It could have been avoided, but it was not', 'It was avoided', 'It will be avoided'], 0],
  ['*The city should have built more parks.*', ['It should have been built, but it was not', 'Enough was built'], 0]]);
G('g8', 'apply', 1, 'Modal + bare infinitive', 'Fill in the correct form of the verb.', [
  ['Schools should ___ (teach) cooking.', 'teach'], ['This policy can ___ (help) poor families.', 'help'], ['Plastic bags must ___ (be) banned.', 'be']]);
M('g8', 'analyze', 1, 'Find the modal error', 'Choose the INCORRECT sentence.', [
  ['', ['The government should invests more.', 'The government should invest more.'], 0], ['', ['People can to save money.', 'People can save money.'], 0]]);
M('g8', 'analyze', 3, 'Degrees of certainty', 'Order from most to least certain: choose the correct order.', [
  ['', ['will → is likely to → may → might', 'might → will → may → is likely to', 'may → will → might → is likely to'], 0]]);
M('g8', 'evaluate', 1, 'Which solution sentence is appropriate?', 'Choose the sentence with a suitable modal.', [
  ['', ['The government should build more bus lanes.', 'The government should building more bus lanes.', 'The government must to build more bus lanes.'], 0]]);
W('g8', 3, 'An argument paragraph with advanced hedging', 'Prompt: *Social media is the main cause of unhappiness among teenagers.*\n\nWrite a 100–120-word paragraph challenging this claim, using at least 3 advanced hedging techniques (*could be far more likely to, tend to, if left unchecked, in many cases...*) and avoiding absolute claims.', 90, ['Advanced hedging', 'no absolute claims', 'modal + passive/conditional']);

/* ===== g6 So sánh ===== */
M('g6', 'remember', 2, 'Adverbs of degree', 'Choose the sentence that uses the intensifying adverb correctly.', [
  ['', ['The figure for girls was significantly lower, at 12%.', 'The figure for girls was significant lower, at 12%.'], 0], ['', ['Sales were slightly higher in 2020.', 'Sales were slight higher in 2020.'], 0]]);
M('g6', 'remember', 3, 'Double comparatives', 'Choose the correct sentence.', [
  ['', ['The more people drive, the worse the air becomes.', 'The more people drive, the more worse the air becomes.', 'More people drive, worse the air.'], 0]]);
M('g6', 'understand', 2, 'Understand multiples', 'Choose the correct meaning.', [
  ['*Exports were three times as high as imports.*', ['exports are 3 times imports', 'imports are 3 times exports'], 0], ['*The figure doubled.*', ['it became twice as large', 'it fell by half'], 0]]);
M('g6', 'understand', 3, '"pale in comparison with"', 'Sentence: *The benefits of recycling pale in comparison with those of reducing consumption.*', [
  ['This means:', ['The benefits of recycling are much smaller than those of reducing consumption', 'Recycling is more important', 'The two are equal'], 0], ['*those* refers to:', ['the benefits', 'recycling', 'consumption'], 0]]);
G('g6', 'apply', 1, 'Basic comparisons', 'Fill in the comparative form.', [
  ['Bikes are ___ (cheap) than cars.', 'cheaper'], ['This is the ___ (expensive) city in Asia.', 'most expensive'], ['My job is as ___ (interesting) as yours.', 'interesting']]);
M('g6', 'analyze', 1, 'Which comparison matches the data?', 'A = 40%, B = 20%.', [
  ['', ['A was twice as high as B.', 'B was twice as high as A.', 'A was as high as B.'], 0], ['', ['B was half that of A.', 'B was double that of A.'], 0]]);
M('g6', 'evaluate', 1, 'Choose the correct comparison', '', [
  ['', ['Trains are more faster than buses.', 'Trains are faster than buses.'], 1], ['', ['Tokyo is the largest city in Japan.', 'Tokyo is the most large city in Japan.'], 0]]);
M('g6', 'evaluate', 3, 'Which comparison is Band 8?', 'Choose the most academic comparison.', [
  ['', ['Boys do more sport than girls.', 'Boys were far more likely than their female counterparts to play team sports, at 34% compared to only 13%.', 'Boys sport 34%, girls 13%.'], 1]]);
W('g6', 3, 'A Band 8 comparison paragraph', 'Data: *Average monthly rent for a one-bedroom flat — Hong Kong $2,400, Singapore $2,100, Bangkok $600, Hanoi $450.*\n\nWrite an 80–100-word paragraph using: a multiple comparison, adverbs of degree, *counterparts*, and a double comparative or *pale in comparison with*.', 70, ['multiple comparisons', 'adverbs of degree', 'double comparatives']);

/* ===== g5 Bị động ===== */
M('g5', 'remember', 2, 'The passive in Process/Map tasks', 'Choose the correct sentence.', [
  ['', ['After being washed, the bottles are crushed.', 'After washed, the bottles crushed.'], 0], ['', ['The trees were cleared to make way for a car park.', 'The trees cleared to make way for a car park.'], 0]]);
M('g5', 'remember', 3, 'The impersonal passive', 'Choose the correct impersonal passive sentence.', [
  ['', ['It is widely argued that exams cause stress.', 'It widely argues that exams cause stress.'], 0], ['', ['It is essential that the law be enforced.', 'It is essential that the law enforced.'], 0]]);
M('g5', 'understand', 2, 'Why use the passive?', 'Choose the reason.', [
  ['*The clay is dug up and transported to the factory.*', ['The doer is unimportant; the focus is on the process', 'To emphasise the doer'], 0], ['*A new school was built in 2010.*', ['The focus is on the building; who built it does not matter', 'It is ungrammatical'], 0]]);
M('g5', 'understand', 3, 'Understand nominalisation', 'Choose the sentence with the same meaning.', [
  ['*There was a sharp increase in prices.*', ['Prices increased sharply.', 'Prices decreased sharply.'], 0], ['*The growing use of cars has worsened air quality.*', ['People use cars more, and this has made the air worse.', 'People use fewer cars.'], 0]]);
G('g5', 'apply', 1, 'be + V3', 'Change to the passive (present simple).', [
  ['Workers pick the tea leaves. → The tea leaves ___ by workers.', 'are picked'], ['The machine dries the rice. → The rice ___ by the machine.', 'is dried'], ['They pack the boxes. → The boxes ___.', 'are packed']]);
M('g5', 'analyze', 1, 'Active or passive?', 'Identify the voice of each sentence.', [
  ['*The bridge was opened in 1999.*', ['passive', 'active'], 0], ['*Farmers grow coffee in the highlands.*', ['active', 'passive'], 0]]);
M('g5', 'analyze', 3, 'Analyse complex passives', 'Sentence: *After being sorted by hand, the cocoons are boiled so that the silk can be unwound.*', [
  ['How many passive structures are there?', ['3', '1', '2'], 0], ['*After being sorted* is:', ['a passive participle phrase', 'the main clause'], 0]]);
M('g5', 'evaluate', 1, 'Correct passive sentences', '', [
  ['', ['The letters are deliver every day.', 'The letters are delivered every day.'], 1]]);
W('g5', 3, 'A Task 2 paragraph using the impersonal passive', 'Prompt: *Should animal testing for medicine be banned?*\n\nWrite a 90–110-word paragraph using: *It is widely argued that...*, one **subjunctive passive** sentence (*It is essential that ... be ...*), and nominalisation at least twice.', 80, ['impersonal passive', 'subjunctive passive', 'nominalisation']);

/* ===== g9 Đảo ngữ ===== */
M('g9', 'remember', 2, 'Inversion with Not until / Only by', 'Choose the correct sentence.', [
  ['', ['Only by investing in research can we cure the disease.', 'Only by investing in research we can cure the disease.'], 0], ['', ['Not until 2020 did the city ban plastic bags.', 'Not until 2020 the city banned plastic bags.'], 0]]);
M('g9', 'remember', 3, 'Conditional inversion', 'Choose the correct sentence.', [
  ['', ['Were the government to ban cars, traffic would fall.', 'If were the government ban cars, traffic would fall.'], 0], ['', ['Should you need help, please call.', 'Should you needed help, please call.'], 0]]);
M('g9', 'understand', 2, 'The equivalent normal sentence', 'Choose the sentence with the same meaning.', [
  ['*Rarely do students read for pleasure.*', ['Students rarely read for pleasure.', 'Students often read for pleasure.'], 0], ['*Not only is cycling cheap, but it is also healthy.*', ['Cycling is both cheap and healthy.', 'Cycling is cheap but unhealthy.'], 0]]);
M('g9', 'understand', 3, 'The meaning of type 3 inversion', '*Had it not been for the internet, remote work would have been impossible.*', [
  ['This means:', ['Remote work is possible only thanks to the internet', 'The internet makes remote work impossible', 'There will be no internet in the future'], 0]]);
G('g9', 'apply', 1, 'Auxiliaries in inversion', 'Fill in the auxiliary.', [
  ['Never ___ I seen such heavy traffic.', 'have'], ['Rarely ___ people walk to work here.', 'do'], ['Not only ___ it cheap, but it is also fast.', 'is']]);
M('g9', 'analyze', 1, 'Which sentence is inverted?', '', [
  ['', ['Seldom do tourists visit this area.', 'Tourists seldom visit this area.'], 0], ['', ['Only then did we understand.', 'We only then understood.'], 0]]);
M('g9', 'analyze', 3, 'Is the inversion appropriate?', 'Choose the paragraph that uses inversion most naturally.', [
  ['', ['Never do residents walk to work. Rarely do they cycle anywhere. Seldom do they use buses in the city.', 'Many residents rely on motorbikes. Only when public transport becomes reliable will they consider leaving them at home.'], 1, 'Overusing inversion in consecutive sentences loses marks; use one in the right place.']]);
M('g9', 'evaluate', 1, 'Choose the correct sentence', '', [['', ['Never I have seen it.', 'Never have I seen it.'], 1]]);
W('g9', 3, 'A conclusion with advanced inversion', 'Prompt: *Governments should invest more in renewable energy.*\n\nWrite a 70–90-word conclusion using **two** different inversion structures (e.g. *Only by..., can...* and *Were we to..., we would...*), appropriately and naturally.', 60, ['Only by inversion', 'conditional inversion', 'no overuse']);

/* ===== g10 Noun clause ===== */
M('g10', 'remember', 2, 'whether / wh-clause', 'Choose the correct sentence.', [
  ['', ['Opinions are divided on whether phones should be banned.', 'Opinions are divided on if phones should be banned.'], 0], ['', ['The chart shows how much water was used.', 'The chart shows how much water was it used.'], 0]]);
M('g10', 'remember', 3, 'Noun clauses as subjects', 'Choose the correct advanced sentence.', [
  ['', ['What matters most is how students apply their knowledge.', 'What matters most are how students apply their knowledge.'], 0], ['', ['That cities are overcrowded is undeniable.', 'That cities are overcrowded are undeniable.'], 0]]);
M('g10', 'understand', 2, 'The role of the clause', 'Identify the role of the part in italics.', [
  ['*Many believe **that exams are unfair**.*', ['object', 'subject'], 0], ['*The question is **whether the plan will work**.*', ['complement', 'object of a preposition'], 0]]);
M('g10', 'understand', 3, 'Understand advanced sentences', '*What can be inferred from this gap is that politics is not an attractive career.*', [
  ['The subject of the (second) verb *is* is:', ['What can be inferred from this gap', 'this gap', 'politics'], 0]]);
G('g10', 'apply', 1, 'that / whether / what', 'Fill in ONE word.', [
  ['I think ___ homework is useful.', 'that'], ['I do not know ___ the bus is late.', ['whether', 'if']], ['___ he said was surprising.', 'what']]);
M('g10', 'analyze', 1, 'Word order', 'Choose the correct sentence.', [['', ['I wonder why prices are rising.', 'I wonder why are prices rising.'], 0]]);
M('g10', 'analyze', 3, 'Analyse multi-layered sentences', '*That access to education should be free is a belief shared by many educators who work in rural areas.*', [
  ['How many subordinate clauses does the sentence have?', ['2 (a noun clause + a relative clause)', '1 (a noun clause only)', '3 (two noun clauses + a relative clause)'], 0], ['The main verb:', ['is', 'should be', 'work'], 0]]);
M('g10', 'evaluate', 1, 'Which sentence is correct?', '', [['', ['It is clear that cities are growing.', 'It is clear cities growing.'], 0]]);
W('g10', 3, 'An introduction with advanced noun clauses', 'Prompt: *Some people think that university should be free for everyone.*\n\nWrite an introduction + 2 body sentences (80–100 words) including: a sentence starting with *What lies at the core of...* or *What can be inferred...*, a sentence with *That... is a belief shared by...*, and *Opinions are divided on whether...*', 70, ['noun clauses as subjects', 'whether-clause', 'singular verbs after noun clauses']);

/* ===== g4 Adjective clause ===== */
M('g4', 'remember', 2, 'whose / in which', 'Choose the correct sentence.', [
  ['', ['Singapore, whose transport is efficient, has little traffic.', 'Singapore, which transport is efficient, has little traffic.'], 0], ['', ['matches in which women compete', 'matches which women compete'], 0]]);
M('g4', 'remember', 3, 'all of which / most of which', 'Choose the correct sentence.', [
  ['', ['Students face debt, stress and long hours, all of which harm their health.', 'Students face debt, stress and long hours, all of them harm their health.'], 0]]);
M('g4', 'understand', 2, 'Defining vs non-defining', 'Choose the correct meaning.', [
  ['*My brother who lives in Hue is a teacher.* (no commas)', ['I have more than one brother', 'I have only one brother'], 0], ['*Sales doubled, which surprised everyone.*', ['which refers to the whole previous clause', 'which refers only to the noun "sales"'], 0]]);
M('g4', 'understand', 3, '"most of which"', '*Newspapers provide knowledge, most of which proves useful later.*', [
  ['*most of which* refers to:', ['most of the knowledge', 'most of the newspapers'], 0]]);
G('g4', 'apply', 1, 'who / which / where', 'Fill in the relative pronoun.', [
  ['Students ___ work part-time have less free time.', ['who', 'that']], ['The city ___ I grew up has changed.', 'where'], ['The bus ___ goes to the airport is cheap.', ['which', 'that']]]);
M('g4', 'analyze', 1, 'Choose the relative pronoun', '', [['A teacher ___ students like', ['who', 'which', 'where'], 0], ['a market ___ farmers sell fruit', ['where', 'who'], 0]]);
M('g4', 'analyze', 3, 'Relative clause errors', 'Choose the INCORRECT sentence.', [
  ['', ['Hanoi, that is the capital, is crowded.', 'Hanoi, which is the capital, is crowded.'], 0, 'Non-defining clauses do not use that.'], ['', ['This is the town which I grew up.', 'This is the town where I grew up.'], 0]]);
M('g4', 'evaluate', 1, 'Which sentence is correct?', '', [['', ['People who they smoke have more health problems.', 'People who smoke have more health problems.'], 1]]);
W('g4', 3, 'A paragraph with advanced relative clauses', 'Topic: *Home schooling.*\n\nWrite a 90–110-word paragraph using: *whose*, preposition + *which* (*in which / through which*), *, which* referring to a whole clause, and *all of which / most of which*.', 80, ['whose', 'in which', ', which', 'all of which']);

/* ===== g11 Adverb clause ===== */
M('g11', 'remember', 2, 'Condition & concession', 'Choose the correct conjunction.', [
  ['People can do extreme sports ___ they receive training.', ['provided that', 'although', 'because'], 0], ['___ the plan is expensive, it is worth it.', ['Although', 'Because', 'Unless'], 0]]);
M('g11', 'remember', 3, 'As + adj + as + S + may', 'Choose the correct sentence.', [
  ['', ['As attractive as the idea may seem, it is impractical.', 'As attractive the idea may seem, it is impractical.'], 0]]);
M('g11', 'understand', 2, 'The meaning of conjunctions', 'Choose the meaning.', [['*unless*', ['except if', 'even though'], 0], ['*whereas*', ['while, by contrast', 'because of this'], 0], ['*as long as*', ['on condition that', 'as soon as'], 0]]);
M('g11', 'understand', 3, '"insomuch as"', '*Past empires fought each other, insomuch as they saw trade as a zero-sum game.*', [['*insomuch as* means:', ['to the extent that / in that', 'although / even though', 'unless / except if'], 0]]);
G('g11', 'apply', 1, 'because / when / although', 'Fill in the conjunction.', [
  ['___ it rained, we stayed home.', ['because', 'as', 'since']], ['Call me ___ you arrive.', ['when', 'once']], ['___ it is cheap, few people use it.', ['although', 'though']]]);
M('g11', 'analyze', 1, 'Clause functions', 'Identify the function.', [['*because prices rose*', ['cause', 'time'], 0], ['*while I was studying*', ['time', 'condition'], 0]]);
M('g11', 'analyze', 3, 'Conjunctions that fit the context', 'Choose the best conjunction.', [
  ['Remote work saves commuting time, ___ it can blur the line between work and home.', ['whereas', 'yet', 'so'], 1], ['Plastic taxes work well ___ affordable alternatives exist.', ['provided that', 'even though', 'whereas'], 0]]);
M('g11', 'evaluate', 1, 'Correctly punctuated sentences', '', [['', ['Although it is cheap, it is slow.', 'Although it is cheap it, is slow.'], 0]]);
M('g11', 'evaluate', 3, 'Which sentence is most persuasive?', '', [
  ['', ['Although free public transport is good, it costs money.', 'As appealing as free public transport may appear, it would place a heavy burden on taxpayers unless costs were shared with businesses.', 'Free transport is good but expensive.'], 1]]);
W('g11', 3, 'An advanced concession paragraph', 'Prompt: *A four-day working week should be introduced for all employees.*\n\nWrite a 90–110-word paragraph using *As + adj + as + S + may + V*, *provided that*, and *whereas*.', 80, ['As adj as', 'provided that', 'whereas']);

/* ===== g12 Participle ===== */
M('g12', 'remember', 2, 'Given / thereby', 'Choose the correct sentence.', [
  ['', ['Given the high cost, many people rent.', 'Giving the high cost, many people rent.'], 0], ['', ['Prices fell, thereby boosting demand.', 'Prices fell, thereby boosted demand.'], 0]]);
M('g12', 'remember', 3, 'with + N + V-ing / albeit', 'Choose the correct sentence.', [
  ['', ['Waste is rising, with plastic bags being used only once.', 'Waste is rising, with plastic bags are used only once.'], 0], ['', ['The plan, albeit costly, is effective.', 'The plan, albeit it is costly, is effective.'], 0]]);
M('g12', 'understand', 2, 'The equivalent full clause', 'Choose the sentence with the same meaning.', [
  ['*People living near the airport suffer from noise.*', ['People who live near the airport...', 'People lived near the airport...'], 0], ['*Built in 1900, the bridge is unsafe.*', ['The bridge, which was built in 1900, is unsafe.', 'The bridge, which built in 1900, is unsafe.'], 0]]);
M('g12', 'understand', 3, 'The meaning of thereby', '*Medicine has improved, thereby allowing people to live longer.*', [['*thereby allowing* shows:', ['the result of the previous clause', 'the cause of the previous clause', 'a contrast with the previous clause'], 0]]);
G('g12', 'apply', 1, 'V-ing or past participle?', 'Fill in the correct form.', [
  ['Students ___ (study) abroad gain independence.', 'studying'], ['The money ___ (spend) on health rose.', 'spent'], ['Cars ___ (make) in Japan are reliable.', 'made']]);
M('g12', 'analyze', 1, 'Active or passive?', 'What does the participle phrase mean?', [['*people working at night*', ['active', 'passive'], 0], ['*food imported from abroad*', ['passive', 'active'], 0]]);
M('g12', 'analyze', 3, 'Spot participle errors', 'Choose the correct sentence.', [
  ['', ['Having finished the course, a job was found quickly.', 'Having finished the course, she found a job quickly.'], 1], ['', ['Given its low cost, the scheme attracted many users.', 'Given its low cost, many users the scheme attracted.'], 0]]);
M('g12', 'evaluate', 1, 'Which sentence is concise and correct?', '', [['', ['People who are living in cities pay more.', 'People living in cities pay more.'], 1]]);
M('g12', 'evaluate', 3, 'The most Band 8 sentence', '', [['', ['Many people buy plastic. Plastic is used once. Waste increases.', 'Our society has become a throw-away one, with single-use plastics being discarded daily and landfill sites filling up fast.', 'Plastic is bad because people use it once.'], 1]]);
W('g12', 3, 'A conclusion with advanced reduced clauses', 'Topic: *Tourism in remote natural areas.*\n\nWrite an 80–100-word paragraph using: *Given + N*, *thereby + V-ing*, *with + N + V-ing/V3*, and *albeit*.', 70, ['Given', 'thereby', 'with + N + V-ing', 'albeit']);

/* ===== g13 Parallel ===== */
M('g13', 'remember', 2, 'Song song V-ing', 'Choose the correct sentence.', [
  ['', ['Mounting campaigns and having healthier menus would help.', 'Mounting campaigns and have healthier menus would help.'], 0]]);
M('g13', 'remember', 3, 'Parallel noun clauses', 'Choose the correct sentence.', [
  ['', ['It depends on what you study and what job you want.', 'It depends on what you study and your job wanted.'], 0]]);
M('g13', 'understand', 2, 'Why is it not parallel?', '*Modern problems include obesity, stress and they are lonely.*', [['The error:', ['the last item is a clause, while the first two are nouns', 'a comma is missing'], 0]]);
M('g13', 'understand', 3, 'The effect of repeated structures', '*Instead of littering, they can carry bags; instead of picking flowers, they can take photos.*', [['Repeated structures help to:', ['create rhythm and emphasise the argument', 'add unnecessary words and repetition'], 0]]);
G('g13', 'apply', 1, 'Complete the parallel structure', 'Fill in the correct form.', [
  ['Cycling is cheap, healthy and ___ (environment).', 'environmentally friendly'], ['She likes reading, swimming and ___ (cook).', 'cooking'], ['Both teachers and ___ (parent) agree.', 'parents']]);
M('g13', 'analyze', 1, 'Find the odd element', '', [['*to save money, reducing waste and to help others*', ['reducing waste', 'to save money'], 0]]);
M('g13', 'analyze', 3, 'Subtle parallelism errors', 'Choose the correct sentence.', [
  ['', ['Not only does it save time but also money.', 'It not only saves time but also reduces costs.'], 1], ['', ['Either we act now or we will pay later.', 'Either act now or we will pay later.'], 0]]);
M('g13', 'evaluate', 1, 'Correct parallel sentences', '', [['', ['I enjoy hiking, swimming and to cycle.', 'I enjoy hiking, swimming and cycling.'], 1]]);
M('g13', 'evaluate', 3, 'Which sentence has the best rhythm?', '', [['', ['Governments should tax sugar, they should build parks, and schools must teach cooking too.', 'Governments should tax sugar, build parks and require schools to teach cooking.', 'Tax sugar, parks, and cooking in schools.'], 1]]);
W('g13', 3, 'A solutions paragraph with repeated structures', 'Prompt: *How can tourists reduce their impact on historic sites?*\n\nWrite a 90–110-word paragraph with one 3-part repeated structure (*Instead of..., they can...; instead of..., ...; and instead of..., ...*) and at least one other parallel list.', 80, ['repeated structures', 'song song']);

/* ===== g14 Sentence problems ===== */
M('g14', 'remember', 2, 'Name the error', 'Choose the name of the error.', [
  ['*Many students attend class, and they work, and they study, so they are tired.*', ['stringy sentence', 'fragment', 'comma splice'], 0], ['*Rents are high. Salaries are low. Life is hard.*', ['choppy sentences', 'run-on'], 0]]);
M('g14', 'remember', 3, 'Dangling modifier', 'Choose the sentence with a dangling participle.', [['', ['Arriving late, the meeting had started.', 'Arriving late, I missed the start of the meeting.'], 0]]);
M('g14', 'understand', 2, 'Fixing comma splices', '*My family moved to Hue, then they moved to Da Nang.*', [['The correct fix:', ['My family moved to Hue, and then they moved to Da Nang.', 'My family moved to Hue then, they moved to Da Nang.'], 0]]);
M('g14', 'understand', 3, 'Why do stringy sentences lower your score?', '', [['', ['Ideas are strung together with and/so, with no clear logical relationship', 'The sentence is too short to show a range of grammar'], 0]]);
G('g14', 'apply', 1, 'Add a conjunction', 'Fill in one conjunction to fix the comma splice.', [
  ['It was late, ___ we went home.', ['so']], ['The bus is cheap, ___ it is slow.', ['but', 'yet']]]);
M('g14', 'analyze', 1, 'Fragment?', 'Is this a complete sentence?', [['*Because many people work at home.*', ['No, it is a fragment', 'Yes, it is a complete sentence'], 0], ['*Many people work at home.*', ['Yes, it is a complete sentence', 'No, it has no main verb'], 0]]);
M('g14', 'analyze', 3, 'Count the errors', '*Because rents are rising. Many young people live with parents, this delays their independence and they marry later and they have fewer children.*', [
  ['Which errors does the paragraph contain?', ['fragment + comma splice + stringy', 'only a fragment, nothing else', 'no errors at all; it is correct'], 0]]);
M('g14', 'evaluate', 1, 'Which sentence is correct?', '', [['', ['Prices rose, people bought less.', 'Prices rose, so people bought less.'], 1]]);
M('g14', 'evaluate', 3, 'The best correction', '*Students attend lectures, then they work in cafés, and they study at night, so they are exhausted.*', [
  ['', ['Because students attend lectures, work in cafés and study at night, they are often exhausted.', 'Students attend lectures. They work in cafés. They study at night. They are exhausted.', 'Students attend lectures, they work in cafés, they study at night.'], 0]]);
W('g14', 3, 'Rewrite an error-filled paragraph', 'Correct and rewrite the paragraph below as a Band 8 paragraph (80–100 words) with no fragments, comma splices, choppy, stringy or dangling structures:\n\n*"Because cities are crowded. Young people still move there, they want jobs. Rents are high. Food is expensive. Living far from the centre, commuting takes hours and they get tired and they cannot study and so their careers suffer."*', 70, ['no fragments', 'no comma splices', 'no choppy/stringy sentences', 'no dangling participles']);

/* ===== g15 Wrap-up ===== */
M('g15', 'remember', 2, 'Identify structures in a sentence', '*Due largely to rising costs, many families now cook at home.*', [['*Due largely to rising costs* is:', ['a prepositional phrase of cause', 'relative clauses'], 0]]);
M('g15', 'remember', 3, 'Identify advanced structures', '*Children now spend less time outdoors than their parents did, which has profound consequences, including poorer health.*', [
  ['*than their parents did*:', ['an extended comparison with an auxiliary', 'a noun clause as the subject'], 0], ['*including poorer health*:', ['a reduced participle phrase', 'the main clause'], 0]]);
M('g15', 'understand', 2, 'The role of each element', '*Many experts believe that homework improves discipline.*', [['*that homework improves discipline*:', ['object (a noun clause)', 'adverbial'], 0]]);
M('g15', 'understand', 3, 'Understand multi-layered compound sentences', '*I believe these changes yield few benefits but cause serious problems, including weaker social skills.*', [['The two parallel verbs are:', ['yield / cause', 'believe / including'], 0]]);
G('g15', 'apply', 1, 'Fill in the missing element', 'Fill in ONE word.', [['Many students ___ part-time jobs. (verb)', ['have', 'take', 'do']], ['___ teachers agree with the plan. (quantifier)', ['most', 'many', 'some']]]);
R('g15', 'apply', 3, 'Build a Band 8 sentence from simple sentences', 'Combine into ONE Band 8 sentence using at least 3 structures.', [
  ['Teenagers today read less than their parents. This is because of smartphones. This causes problems. Their vocabulary is weaker. Their concentration is worse.', 'Teenagers today read far less than their parents did, due largely to smartphones, which has caused problems including weaker vocabulary and poorer concentration.']]);
M('g15', 'analyze', 1, 'Find the subject', '', [['*The cost of living in big cities is high.*', ['The cost of living in big cities', 'living in big cities'], 0]]);
M('g15', 'evaluate', 1, 'Which sentence is correct?', '', [['', ['Due to rising costs, many families cook at home.', 'Due to costs rise, many families cook at home.'], 0]]);
M('g15', 'evaluate', 3, 'Which multi-layered sentence is most accurate?', '', [['', ['It is true that people travel more than before because of cheap flights, and this is good and bad.', 'It is undeniable that people travel far more than previous generations did, due primarily to cheap flights, a trend that brings both opportunities and serious environmental costs.'], 1]]);

/* ===== g16 Grammar Nazi ===== */
M('g16', 'remember', 2, 'Nazi round 2 errors', 'Choose the correct sentence.', [['', ['Despite being expensive, it sells well.', 'Despite it is expensive, it sells well.'], 0], ['', ['Because of the high price, people buy less.', 'Because of the price is high, people buy less.'], 0]]);
M('g16', 'remember', 3, 'Referencing instead of linkers', 'Choose the most advanced second sentence.', [['Sentence 1: *Many cities have introduced congestion charges.*', ['Moreover, congestion charges reduce traffic.', 'Such measures have cut traffic noticeably.'], 1]]);
M('g16', 'understand', 2, 'Why is it wrong?', '', [['*Government should spend more.*', ['a singular countable noun without an article', 'wrong tense'], 0], ['*There are many informations.*', ['information is uncountable', 'missing verb'], 0]]);
M('g16', 'understand', 3, 'The effect of nominalisation', '*The corollary of this investment would be a stronger economy.*', [['This phrase helps to:', ['link to the previous sentence without a mechanical linker', 'increase the word count of the paragraph'], 0]]);
G('g16', 'apply', 1, 'Fix the articles', 'Fill in a / an / the / x (no article).', [['___ education is important.', 'x'], ['She is ___ honest person.', 'an'], ['___ government has announced a new plan.', 'the']]);
M('g16', 'analyze', 1, 'Find the error', 'Choose the sentence with an error.', [['', ['Children needs more sleep.', 'Children need more sleep.'], 0]]);
M('g16', 'evaluate', 1, 'Error-free sentences', '', [['', ['Many student studies abroad.', 'Many students study abroad.'], 1]]);
M('g16', 'evaluate', 3, 'Which paragraph is error-free and advanced?', '', [['', [
  'Firstly, the technology is develop. Moreover, people uses phone. Furthermore, it make problem.',
  'Technology has developed rapidly in recent decades. This progress has transformed how people communicate, but it has also brought new problems, such as screen addiction.',
  'Technology developed. People use phones. There are problems.'], 1]]);
W('g16', 3, 'Edit a real paragraph', 'Edit the paragraph below into a Band 8 paragraph (90–110 words): correct the errors, replace mechanical linkers with referencing/nominalisation, and upgrade simple sentences to complex ones.\n\n*"Firstly, homework is good for student. Because it help them remember lesson. Moreover, homework teach student to manage time. Furthermore, parents can know what their child learn. In addition, homework is not too much, it is only one hour."*', 80, ['error correction', 'referencing instead of Firstly/Moreover', 'sentence upgrading']);

/* ===== g2 Danh từ, mạo từ, hoà hợp ===== */
M('g2', 'remember', 2, 'The number of / A number of', 'Choose the correct verb.', [['The number of tourists ___ risen.', ['has', 'have'], 0], ['A number of tourists ___ complained.', ['have', 'has'], 0]]);
M('g2', 'remember', 3, 'Agreement with complex subjects', 'Choose the correct verb.', [['What worries parents most ___ the cost of tuition.', ['is', 'are'], 0], ['Neither the teacher nor the students ___ satisfied.', ['were', 'was'], 0]]);
M('g2', 'understand', 2, 'Why use the?', '', [['*The proportion of women rose.*', ['the + proportion of (specific reference)', 'no article needed (general reference to proportions)'], 0], ['*Technology changes lives.*', ['a noun used in general → no article', 'the is missing'], 0]]);
M('g2', 'understand', 3, 'Articles with abstract nouns', 'Choose the correct sentence.', [['', ['Knowledge of a foreign language is valuable.', 'The knowledge of foreign language is valuable.'], 0]]);
G('g2', 'apply', 1, 'a / an', 'Fill in a or an.', [['___ university', 'a'], ['___ hour', 'an'], ['___ useful tool', 'a']]);
M('g2', 'analyze', 1, 'Countable?', '', [['advice', ['uncountable', 'countable'], 0], ['suggestion', ['countable', 'uncountable'], 0]]);
M('g2', 'analyze', 3, 'Double-error check', 'Which sentence is error-free?', [['', ['Each of the student have a laptop.', 'Each of the students has a laptop.', 'Each of the students have laptops.'], 1]]);
M('g2', 'evaluate', 1, 'Correct sentences', '', [['', ['She gave me an advice.', 'She gave me some advice.'], 1]]);
M('g2', 'evaluate', 3, 'Which paragraph is most accurate?', '', [['', ['The research show that a number of student is stressed.', 'Research shows that a number of students are stressed, and the proportion of those affected is rising.'], 1]]);
W('g2', 3, 'A fully accurate Task 1 paragraph', 'Data: *Proportion of adults who read news online: 2010 – 35%, 2020 – 72%. Number of printed newspapers sold: 2010 – 4.1 million/day, 2020 – 1.6 million/day.*\n\nWrite a 70–90-word paragraph without a single error in articles, singular/plural or agreement, using both *the proportion of* and *the number of*.', 60, ['articles', 'the number of + singular verb', 'countable/uncountable']);

/* ===== g7 Điều kiện & từ nối ===== */
M('g7', 'remember', 2, 'Second conditionals', 'Choose the correct sentence.', [['', ['If cars were banned, the air would be cleaner.', 'If cars are banned, the air would be cleaner.'], 0]]);
M('g7', 'remember', 3, 'Academic cohesive phrases', 'Choose the most advanced phrase.', [['', ['Added to this is the fact that...', 'Moreover,'], 0], ['', ['Compounding the problem is...', 'And also the problem is...'], 0]]);
M('g7', 'understand', 2, 'Types of conditional', 'Choose the meaning.', [['*If governments invest, traffic will decrease.*', ['real and possible in the future', 'hypothetical / contrary to fact'], 0], ['*If I were mayor, I would ban cars.*', ['hypothetical / contrary to fact', 'real and possible in the future'], 0]]);
M('g7', 'understand', 3, 'The meaning of "Compounding the problem is..."', '', [['', ['What makes the problem worse is...', 'The solution to the problem is...'], 0]]);
G('g7', 'apply', 1, 'Basic linking words', 'Fill in ONE linking word.', [['It is cheap. ___, it is slow.', ['however']], ['It rained heavily. As a ___, the match was cancelled.', 'result']]);
M('g7', 'analyze', 1, 'Functions of linking words', '', [['*Therefore*', ['result', 'contrast'], 0], ['*Conversely*', ['contrast', 'addition'], 0]]);
M('g7', 'analyze', 3, 'Is the linker necessary?', 'Choose the more naturally connected paragraph.', [['', ['Rents are high. Moreover, wages are low. Furthermore, jobs are scarce.', 'Rents are high. Added to this is the fact that wages have stagnated, which leaves many young workers unable to save.'], 1]]);
M('g7', 'evaluate', 1, 'Correct sentences', '', [['', ['If it will rain, we will stay home.', 'If it rains, we will stay home.'], 1]]);
M('g7', 'evaluate', 3, 'Which paragraph is Band 8?', '', [['', ['Firstly, pollution is bad. Secondly, it causes disease. Therefore, we must stop it.', 'Air pollution is a major threat to public health. Compounding the problem is the lack of green space in many cities, which leaves residents with few places to escape it.'], 1]]);
W('g7', 3, 'An argument paragraph without Firstly/Moreover', 'Prompt: *Why are young people delaying marriage?*\n\nWrite a 90–110-word paragraph that **does not use** Firstly/Secondly/Moreover/Furthermore; use *Added to this is the fact that..., Compounding this is..., This trend...* instead, plus one second conditional.', 80, ['academic cohesion', 'second conditionals', 'no mechanical linkers']);
})();
