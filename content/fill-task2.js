/* Lấp đủ mọi ô Bloom × độ khó cho Chặng 3 (Task 2). Đề bài, câu mẫu tự soạn theo khung khoá học. */
(function () {
const U = id => window.UNITS.find(u => u.id === id);
const add = (id, ex) => U(id).exercises.push(ex);
const M = (id, bloom, lv, title, instr, items) => add(id, { bloom, lv, type: 'mcq', title, instr, items: items.map(([q, options, a, ex], i) => { const k = [...(title + q + i)].reduce((s, c) => s + c.charCodeAt(0), 0) % options.length; const o = options.slice(k).concat(options.slice(0, k)); return { q, options: o, a: (a - k + o.length) % o.length, ex }; }) });
const G = (id, bloom, lv, title, instr, items) => add(id, { bloom, lv, type: 'gap', title, instr, items: items.map(([q, a]) => ({ q, a: [].concat(a) })) });
const R = (id, bloom, lv, title, instr, items) => add(id, { bloom, lv, type: 'rewrite', title, instr, items: items.map(([q, a]) => ({ q, a: [].concat(a) })) });
const W = (id, lv, title, prompt, focus, minWords = 250) => add(id, { bloom: 'create', lv, type: 'write', kind: 'task2', title, prompt, minWords, focus });
const E = s => `${s}\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.`;

/* ===== t2a Phân tích đề & Introduction ===== */
M('t2a', 'remember', 2, 'Find the topic & task', 'Prompt: *Some people think that children should start school at the age of four. To what extent do you agree or disagree?*', [
  ['Topic:', ['the age to start school (four)', 'children in general'], 0], ['Task:', ['state your degree of agreement', 'discuss two views'], 0]]);
M('t2a', 'remember', 3, 'Thorough paraphrasing', 'Choose the most advanced paraphrase.', [['*Children should start school at the age of four.*', ['Formal education ought to begin as early as four years old.', 'Children should start school at four years.', 'Kids must go to school at four.'], 0]]);
M('t2a', 'understand', 2, 'Question types', 'Identify the type.', [['*Discuss both views and give your own opinion.*', ['Discussion', 'Opinion', 'Problem–Solution'], 0], ['*Do the advantages outweigh the disadvantages?*', ['Advantages outweigh', 'Causes–Effects'], 0]]);
M('t2a', 'understand', 3, 'Scope traps', 'Prompt: *Governments should spend more on public transport **than on roads**.*', [['The essay is off-topic if it:', ['Discusses only the benefits of public transport without comparing it with roads', 'Compares the two kinds of spending and chooses one'], 0]]);
G('t2a', 'apply', 1, 'Basic thesis statements', 'Fill in the missing word.', [['I completely ___ with this view.', 'agree'], ['This essay will ___ both sides.', ['discuss', 'examine']]]);
M('t2a', 'analyze', 1, 'Keywords in the prompt', 'Prompt: *Many young people now work from home.*', [['The main keyword:', ['young people / work from home', 'many people / now / at the moment'], 0]]);
M('t2a', 'analyze', 3, 'Which introduction misreads the task?', 'The prompt asks *To what extent do you agree?*', [['', ['This essay will discuss both views.', 'I largely agree that..., although...'], 0, 'The first sentence does not state a degree of agreement.']]);
M('t2a', 'evaluate', 1, 'A correct introduction', '', [['', ['In this essay I will talk about it and give some ideas.', 'Some argue that four-year-olds should begin school, and I agree with this view.'], 1]]);
M('t2a', 'evaluate', 3, 'Introduction Band 8', 'Prompt: early schooling at four.', [['', [
  'Nowadays, education is very important. Some people think children should start school at four. I agree.',
  'Whether formal schooling should begin as early as four is a matter of some debate. While early classroom exposure can build basic skills, I believe its potential to deprive children of play-based development outweighs these gains.',
  'Children should start school at four. This is a good idea.'], 1]]);
W('t2a', 3, 'Introductions for 3 difficult prompts (Band 8)', 'Write an introduction (2–3 sentences each) for:\n\n1. *Some people believe that university education should focus on job skills rather than knowledge for its own sake. To what extent do you agree?*\n2. *In many cities, the number of people living alone is increasing. Is this a positive or negative development?*\n3. *Some say that international tourism brings more problems than benefits to local communities. Discuss both views and give your opinion.*', ['thorough paraphrasing', 'a thesis with a clear degree of agreement', 'matching the question type'], 120);

/* ===== t2b Đoạn thân bài 1 ý & 2 ý ===== */
M('t2b', 'remember', 2, 'The structure of a one-idea paragraph', 'The correct order:', [['', ['Topic sentence → Explanation → Example → (Link)', 'Example → Topic sentence → Conclusion'], 0]]);
M('t2b', 'remember', 3, 'Advanced topic sentences', 'Choose the most advanced topic sentence.', [['', ['Firstly, working from home is good.', 'The most compelling argument for remote work lies in its capacity to eliminate the hours lost to daily commuting.', 'Working from home has many benefits.'], 1]]);
M('t2b', 'understand', 2, 'Sentence roles', '*For instance, a typical Hanoi worker spends nearly two hours a day in traffic.*', [['', ['Example', 'Topic sentence'], 0]]);
M('t2b', 'understand', 3, 'Two-idea paragraphs', 'A two-idea paragraph needs:', [['', ['Two equal ideas, each with a brief explanation, and a clear transition', 'Two ideas, with only the first one explained in detail'], 0]]);
G('t2b', 'apply', 1, 'Words introducing examples', 'Fill in the phrase.', [['___ example, many students work part-time.', 'for'], ['This is ___ it saves time.', 'because']]);
M('t2b', 'analyze', 1, 'Which sentence is off-point?', 'Topic: remote work saves commuting time.', [['', ['Many offices have nice canteens.', 'Employees avoid long journeys in heavy traffic.'], 0]]);
M('t2b', 'analyze', 3, 'Links between ideas', 'Sentence: *This saved time can then be invested in exercise or family, which in turn improves productivity.*', [['This sentence:', ['develops the idea through a chain of consequences', 'gives a specific example from one country'], 0]]);
M('t2b', 'evaluate', 1, 'The better topic sentence', '', [['', ['There are many reasons why people like this way of working.', 'Remote work allows employees to avoid stressful commutes.'], 1]]);
M('t2b', 'evaluate', 3, 'Which paragraph is Band 8?', '', [['', [
  'Remote work is good. It saves time. For example, people do not drive. So it is good.',
  'Perhaps the strongest case for remote work is the time it frees up. Freed from lengthy commutes, employees can devote those hours to rest or family, which tends to make them more focused when they do work. In large cities such as Jakarta, where a round trip can exceed two hours, this gain is far from trivial.'], 1]]);

/* ===== t2c Opinion & The only way ===== */
M('t2c', 'remember', 2, 'Thesis levels', 'Choose the "partly agree" thesis.', [['', ['While I accept that..., I do not believe that...', 'I totally agree.', 'I totally disagree.'], 0]]);
M('t2c', 'remember', 3, '"The only way" – No!', 'An advanced thesis for: *Raising fuel prices is the only way to reduce traffic.*', [['', ['Although higher fuel prices may deter some drivers, I believe they are neither the sole nor the most effective way of easing congestion.', 'I agree that raising fuel prices is the only way.', 'Fuel prices are high.'], 0]]);
M('t2c', 'understand', 2, 'The structure of a "The only way" essay', '', [['Body 1 usually:', ['acknowledges that solution X is effective to some extent', 'lists every other possible solution in turn'], 0], ['Body 2:', ['offers a better/complementary alternative', 'repeats the main idea of Body 1'], 0]]);
M('t2c', 'understand', 3, 'Why avoid absolutes?', '', [['The sentence *Fuel prices will definitely stop everyone from driving* loses marks because it:', ['makes an unsupported absolute claim (overgeneralisation)', 'has grammar errors in the verb phrase'], 0]]);
G('t2c', 'apply', 1, 'Expressing a position', 'Fill in one word.', [['In my ___, schools should ban phones.', ['opinion', 'view']], ['I strongly ___ that cycling should be encouraged.', ['believe', 'feel']]]);
M('t2c', 'analyze', 1, 'Which sentence is the thesis?', '', [['', ['I believe that this policy is unfair.', 'Many cities have this policy.'], 0]]);
M('t2c', 'analyze', 3, 'Is the essay consistent?', 'Intro: *I completely disagree.* Conclusion: *In some cases, it may be the best way.*', [['', ['Not consistent — the positions contradict each other', 'Consistent: the positions support each other'], 0]]);
M('t2c', 'evaluate', 1, 'A clear thesis', '', [['', ['I think maybe it is good and bad.', 'I agree that this policy would benefit society.'], 1]]);
M('t2c', 'evaluate', 3, 'The best "The only way" conclusion', '', [['', [
  'In conclusion, raising fuel prices is the only way.',
  'In conclusion, while higher fuel prices might discourage some unnecessary journeys, congestion can be tackled far more effectively by combining reliable public transport with smarter urban planning.'], 1]]);
W('t2c', 3, 'Opinion: "the only way" (Band 8)', E('Some people believe that the only way to improve public health is to tax unhealthy food and drinks heavily. To what extent do you agree or disagree?'), ['a "No" thesis with a concession', 'alternative solutions', 'hedging']);

/* ===== t2d Discussion & Advantages outweigh ===== */
M('t2d', 'remember', 2, 'Phrases for presenting others\' views', 'Choose the correct sentence.', [['', ['Those in favour of online learning argue that it is flexible.', 'Those in favour of online learning argues that it is flexible.'], 0]]);
M('t2d', 'remember', 3, 'Advanced sentences for switching views', 'Choose the most advanced sentence.', [['', ['Opponents, however, contend that the absence of face-to-face contact undermines motivation.', 'But other people think it is bad.'], 0]]);
M('t2d', 'understand', 2, 'Discussion essay structure', '', [['Your own opinion should appear:', ['in the introduction, (Body 2 if you agree with that view) and the conclusion', 'only in the conclusion, so that the body stays neutral'], 0]]);
M('t2d', 'understand', 3, 'Advantages outweigh', 'A *Do advantages outweigh disadvantages?* essay needs to:', [['', ['compare their weight and state clearly which side is greater', 'just list the advantages and disadvantages'], 0]]);
G('t2d', 'apply', 1, 'Linkers for two sides', 'Fill in one word.', [['On the one ___, cars are convenient.', 'hand'], ['On the ___ hand, they pollute the air.', 'other']]);
M('t2d', 'analyze', 1, 'Which side?', 'Prompt: *Some think online learning is better; others prefer classrooms.*', [['*Students can study at any time.* supports:', ['online learning', 'classrooms'], 0]]);
M('t2d', 'analyze', 3, 'Discussion errors', 'The essay develops only the view the writer agrees with; the other view gets one sentence.', [['', ['Unbalanced → Task Response no higher than 6', 'It does not matter, as long as the opinion is clear'], 0]]);
M('t2d', 'evaluate', 1, 'Correct sentences', '', [['', ['Some people believe that tourism helps the economy.', 'Some people believes that tourism help the economy.'], 0]]);
M('t2d', 'evaluate', 3, 'The best advantages-outweigh thesis', '', [['', ['There are advantages and disadvantages.', 'Although the drawbacks of living alone are real, I would argue that the independence and personal growth it offers far outweigh them.'], 1]]);

/* ===== t2e Problems – Solutions ===== */
M('t2e', 'remember', 2, 'The language of solutions', 'Choose the correct sentence.', [['', ['One effective solution would be to introduce congestion charges.', 'One effective solution would be introduce congestion charges.'], 0]]);
M('t2e', 'remember', 3, 'Advanced solution sentences', 'Choose the most advanced sentence.', [['', ['Were local authorities to subsidise rooftop solar panels, households could cut both their bills and their emissions.', 'The government should give money for solar panels.'], 0]]);
M('t2e', 'understand', 2, 'Solutions that match the problem', 'Problem: *young people cannot afford housing*.', [['A matching solution:', ['building low-cost social housing for low-income earners', 'planting more trees in city centres'], 0]]);
M('t2e', 'understand', 3, 'Two-part questions', 'Prompt: *Why is this happening? What can be done?*', [['', ['One body paragraph for each part, answering both fully', 'Answer only the first question in detail'], 0]]);
G('t2e', 'apply', 1, 'Should / could', 'Fill in the modal.', [['The government ___ build more parks.', ['should', 'could']], ['This ___ help reduce stress.', ['could', 'may', 'can', 'might']]]);
M('t2e', 'analyze', 1, 'Problem or solution?', '', [['*Traffic jams waste time.*', ['problem', 'solution'], 0], ['*Cities could expand metro lines.*', ['solution', 'problem'], 0]]);
M('t2e', 'analyze', 3, 'Is the solution feasible?', 'Problem: obesity among children.', [['The weakest solution:', ['Ban all food advertising worldwide immediately.', 'Require schools to provide daily physical education.'], 0, 'Unrealistic and too absolute.']]);
M('t2e', 'evaluate', 1, 'Correct sentences', '', [['', ['A solution is to plant more trees.', 'A solution is plant more trees.'], 0]]);
M('t2e', 'evaluate', 3, 'A Band 8 solutions paragraph', '', [['', [
  'The government should do something. For example, make laws.',
  'The most practical remedy would be for city authorities to expand affordable rental housing near major employment hubs. By doing so, they would not only ease the financial strain on young workers but also shorten commutes, as has been seen in Vienna\'s long-running social housing programme.'], 1]]);

/* ===== t2f CC, LR, GRA ===== */
M('t2f', 'remember', 2, 'Collocation', 'Choose the correct collocation.', [['', ['pose a threat', 'make a threat to the environment'], 0], ['', ['raise awareness', 'rise awareness'], 0]]);
M('t2f', 'remember', 3, 'Advanced vocabulary', 'Choose the most advanced expression for *very bad effects*.', [['', ['detrimental consequences', 'very very bad effects', 'bad thing'], 0]]);
M('t2f', 'understand', 2, 'Referencing (CC)', '*Many cities have banned cars from their centres. **This measure** has reduced pollution.*', [['*This measure* refers to:', ['the ban on cars in the city centre', 'the pollution in the city centre'], 0]]);
M('t2f', 'understand', 3, 'CC errors', 'A paragraph uses Firstly, Secondly, Thirdly, Moreover, Furthermore and In addition in 6 sentences.', [['', ['Overuse of mechanical linkers — CC no higher than 6', 'Good CC: the linkers make the logic clear'], 0]]);
G('t2f', 'apply', 1, 'Synonyms', 'Fill in a synonym for the word in brackets.', [['This is an ___ (important) issue.', ['significant', 'major', 'crucial', 'key']], ['Many people ___ (think) that...', ['believe', 'argue', 'feel']]]);
M('t2f', 'analyze', 1, 'Which criterion?', '', [['A verb-form error belongs to:', ['GRA', 'LR', 'CC'], 0], ['A collocation error belongs to:', ['LR', 'TR'], 0]]);
M('t2f', 'analyze', 3, 'Which sentence improves all 3 criteria?', '', [['', ['Moreover, pollution is very bad for people.', 'Compounding this problem is the fact that air pollution, if left unchecked, poses a serious threat to public health.'], 1]]);
M('t2f', 'evaluate', 1, 'Correct sentences', '', [['', ['Pollution has a negative impact on health.', 'Pollution has a negative impact to health.'], 0]]);
W('t2f', 3, 'A complete essay focusing on CC – LR – GRA (Band 8)', E('Some people think that cities should invest in large parks and green spaces, while others believe the money should be spent on housing. Discuss both views and give your own opinion.'), ['referencing instead of linkers', 'accurate collocations', 'a range of complex sentences']);

/* ===== t2g Counter-argument ===== */
M('t2g', 'remember', 2, 'Concession phrases', 'Choose the correct sentence.', [['', ['Admittedly, uniforms can be expensive.', 'Admittedly that uniforms can be expensive.'], 0]]);
M('t2g', 'remember', 3, 'Advanced rebuttals', 'Choose the most advanced rebuttal.', [['', ['This argument, however, overlooks the fact that most families already spend more on everyday clothing.', 'But this is wrong.'], 0]]);
M('t2g', 'understand', 2, 'Counter-argument paragraph structure', '', [['', ['Concede the opposing view → rebut it → restate your position', 'State only the opposing view, then move on'], 0]]);
M('t2g', 'understand', 3, 'Why does a counter-argument help TR?', '', [['', ['It shows several sides have been considered and makes the argument tighter', 'It increases the word count, which is important for Task Response'], 0]]);
G('t2g', 'apply', 1, 'Concession – rebuttal', 'Fill in one word.', [['It is ___ that phones can distract students. However, ...', 'true'], ['___, this view ignores...', ['however', 'nevertheless']]]);
M('t2g', 'analyze', 1, 'Which sentence is a concession?', '', [['', ['Some may argue that homework is stressful.', 'Homework should be banned in all schools.'], 0]]);
M('t2g', 'analyze', 3, 'Is the rebuttal weak?', 'Concession: *Uniforms limit self-expression.* Rebuttal: *But uniforms are nice.*', [['', ['Weak – it does not answer the point directly', 'Strong: it is short and confident'], 0]]);
M('t2g', 'evaluate', 1, 'Correct sentences', '', [['', ['Although some people disagree, I believe it is useful.', 'Although some people disagree but I believe it is useful.'], 0]]);

/* ===== t2h Big no-nos ===== */
M('t2h', 'remember', 2, 'No-nos: language', 'Choose the sentence that breaks a no-no.', [['', ['Kids wanna play games a lot.', 'Children often want to play video games.'], 0], ['', ['etc.', 'such as reading and swimming'], 0]]);
M('t2h', 'remember', 3, 'No-no tinh vi', 'Choose the sentence that breaks a rule.', [['', ['As everyone knows, all teenagers are addicted to their phones.', 'Many teenagers appear to spend excessive time on their phones.'], 0, 'Absolute generalisation.']]);
M('t2h', 'understand', 2, 'Why is it a no-no?', '*In my country, Vietnam, my uncle said that...*', [['', ['A personal example that cannot be generalised', 'It is ungrammatical in the main clause'], 0]]);
M('t2h', 'understand', 3, 'No-no: rhetorical questions', '*Who does not want a better life?*', [['', ['A rhetorical question – avoid in IELTS academic writing', 'A good sentence that should be used often'], 0]]);
G('t2h', 'apply', 1, 'Write in full', 'Write the full form (no contractions).', [['don\'t → ___', ['do not']], ['it\'s → ___', ['it is', 'it has']]]);
R('t2h', 'apply', 3, 'Turn no-nos into Band 8 sentences', 'Rewrite, removing every no-no.', [
  ['Nowadays, as we all know, everybody uses social media a lot and it\'s really really bad, right?', 'The widespread use of social media has raised serious concerns about its effects on mental health.'],
  ['In my opinion I think that kids wanna have fun and stuff.', 'I believe that children have a natural desire for play and leisure.']]);
M('t2h', 'analyze', 1, 'Count the no-nos', '*Nowadays, kids don\'t read books, etc.*', [['How many no-nos are there?', ['3 (a clichéd "nowadays" opening, don\'t, etc.)', '0 (it is a correct academic introduction)'], 0]]);
M('t2h', 'evaluate', 1, 'The more academic sentence', '', [['', ['Lots of people like it.', 'Many people enjoy it.'], 1]]);
M('t2h', 'evaluate', 3, 'A conclusion free of no-nos', '', [['', [
  'In conclusion, I think that, as I said, it\'s good and bad, etc.',
  'In conclusion, although social media can foster connection, its tendency to encourage constant comparison means its overall impact on young people is largely negative.'], 1]]);
W('t2h', 3, 'An Opinion essay with no no-nos (Band 8)', E('Some people believe that children today have too much free time and should spend more of it on structured activities. To what extent do you agree or disagree?'), ['0 no-nos (contractions, etc., rhetorical questions, absolute generalisations...)', 'generalisable examples', 'an academic tone']);

/* ===== t2i Should / A better than B / each group ===== */
M('t2i', 'remember', 2, 'Should-question theses', 'Choose the correct thesis.', [['*Should museums be free?*', ['I believe museums should be free for students and the elderly, although others may reasonably pay a small fee.', 'Museums are buildings.'], 0]]);
M('t2i', 'remember', 3, '"Each is better for a certain group"', 'Choose the most advanced thesis.', [['*Is it better to live in a city or the countryside?*', ['In my view, neither option is universally superior: city life better suits young professionals, whereas the countryside is preferable for families with young children.', 'City is better.'], 0]]);
M('t2i', 'understand', 2, 'A better than B', 'An *Is A better than B?* essay must:', [['', ['compare A with B directly', 'describe only A'], 0]]);
M('t2i', 'understand', 3, 'Grouping', 'The advantage of the "each is better for a group" approach:', [['', ['it avoids absolute claims and gives a nuanced argument', 'it avoids having to state a position'], 0]]);
G('t2i', 'apply', 1, 'Better / than', 'Fill in one word.', [['Living in a city is ___ for young people.', 'better'], ['Trains are better ___ buses for long trips.', 'than']]);
M('t2i', 'analyze', 1, 'Which type?', '*Should all schools teach coding?*', [['', ['Should', 'A better than B'], 0]]);
M('t2i', 'analyze', 3, 'Is the grouping logical?', 'Prompt: *Is it better to study alone or in a group?*', [['', ['Studying alone suits subjects that need memorisation; group study suits subjects that need discussion', 'Tall people prefer studying alone; short people prefer studying in groups'], 0]]);
M('t2i', 'evaluate', 1, 'Correct sentences', '', [['', ['Living in the countryside is more peaceful than living in a city.', 'Living in the countryside is peacefuller than a city.'], 0]]);
M('t2i', 'evaluate', 3, 'The best A-better-than-B thesis', '', [['', ['Both are good.', 'While online shopping offers unmatched convenience, I believe buying from local shops is more beneficial overall, as it sustains community businesses and reduces packaging waste.'], 1]]);

/* ===== t2j Positive or negative ===== */
M('t2j', 'remember', 2, 'Thesis Positive/negative', 'Choose the correct thesis.', [['', ['I believe this is largely a positive development.', 'This development is about people.'], 0]]);
M('t2j', 'remember', 3, 'An advanced grouping thesis', 'Choose the most advanced thesis.', [['*More people live alone.*', ['This trend is positive for young professionals seeking independence, but potentially negative for the elderly, who risk isolation.', 'It is positive and negative.'], 0]]);
M('t2j', 'understand', 2, 'Structures', 'If the thesis is "mostly positive":', [['', ['Body 1: the negative side (a short concession); Body 2: the positive side (stronger)', 'Write only about the positive side, never mentioning the negative'], 0]]);
M('t2j', 'understand', 3, 'Distinguishing it from Adv–Disadv', '', [['Positive or negative differs from Advantages outweigh in that it:', ['asks for an overall evaluation of an ongoing trend', 'does not require a position, only a description'], 0]]);
G('t2j', 'apply', 1, 'Positive / negative', 'Fill in the word.', [['This is a ___ development because it helps the environment.', 'positive'], ['It has a ___ effect on health.', ['negative', 'harmful', 'detrimental']]]);
R('t2j', 'apply', 3, 'Advanced evaluative sentences', 'Rewrite as a conditional evaluation, avoiding absolutes.', [
  ['Working from home is good.', 'Working from home is a largely positive development, provided that employees maintain clear boundaries between work and personal life.']]);
M('t2j', 'analyze', 1, 'Positive or negative?', 'Trend: *more people cycle to work*.', [['*Less air pollution*', ['positive', 'negative'], 0]]);
M('t2j', 'analyze', 3, 'Which argument is stronger?', '', [['', ['Living alone is bad because people are lonely.', 'Living alone may heighten the risk of isolation among older adults, particularly where family support networks have weakened.'], 1]]);
M('t2j', 'evaluate', 1, 'Correct sentences', '', [['', ['This trend has many positive effects.', 'This trend has many positive affect.'], 0]]);
M('t2j', 'evaluate', 3, 'The best conclusion', '', [['', ['In conclusion, it is positive.', 'In conclusion, while the rise in solo living carries social risks for vulnerable groups, it is, on balance, a positive reflection of greater personal freedom and financial independence.'], 1]]);

/* ===== t2k Causes – Solutions / Effects ===== */
M('t2k', 'remember', 2, 'The language of causes', 'Choose the correct sentence.', [['', ['This is largely due to rising living costs.', 'This is largely due to living costs rise.'], 0]]);
M('t2k', 'remember', 3, 'Advanced cause and effect', 'Choose the most advanced sentence.', [['', ['The decline in birth rates can be attributed primarily to the soaring cost of raising children in urban areas.', 'People have fewer babies because it costs money.'], 0]]);
M('t2k', 'understand', 2, 'Causes or effects?', 'Topic: *more people moving to cities*.', [['*Overcrowded housing*', ['effect', 'the cause of the problem'], 0], ['*Better job opportunities*', ['the cause of the problem', 'effect'], 0]]);
M('t2k', 'understand', 3, 'Cause–effect chains', '*Rising rents → young people live with parents → delayed marriage.*', [['Delayed marriage is:', ['an indirect (second-level) effect', 'the cause of the problem'], 0]]);
G('t2k', 'apply', 1, 'Cause–effect words', 'Fill in one word.', [['___ a result, many people moved.', 'as'], ['This leads ___ more traffic.', 'to']]);
M('t2k', 'analyze', 1, 'Which cause?', 'Problem: *obesity in children*.', [['', ['too much fast food', 'more parks'], 0]]);
M('t2k', 'analyze', 3, 'Root causes', 'Problem: *teenagers sleep less*.', [['The deepest root cause:', ['academic pressure + addictive app design', 'alarm clocks that are too quiet'], 0]]);
M('t2k', 'evaluate', 1, 'Correct sentences', '', [['', ['Pollution causes many diseases.', 'Pollution cause many diseases.'], 0]]);
M('t2k', 'evaluate', 3, 'The best causes paragraph', '', [['', [
  'There are many causes. Firstly, money. Secondly, time.',
  'The principal driver of this trend is economic. As housing and childcare costs in major cities have outpaced wage growth, many couples feel compelled to postpone parenthood until they achieve financial stability.'], 1]]);

/* ===== t2l Phân tích bài mẫu & check-list ===== */
M('t2l', 'remember', 2, 'Check-list TR', 'Which item belongs on the Task Response checklist?', [['', ['Answer every part of the prompt', 'Use difficult words'], 0]]);
M('t2l', 'remember', 3, 'The advanced checklist', 'Which item helps you reach Band 8?', [['', ['Each point is developed to a specific consequence, not left general', 'At least 250 words in the essay, with five paragraphs'], 0]]);
M('t2l', 'understand', 2, 'Paragraph functions', 'The last paragraph of the model essay summarises and restates the position. It is:', [['', ['Conclusion', 'Body 2'], 0]]);
M('t2l', 'understand', 3, 'Identify techniques in a model essay', '*Compounding this is the fact that...*', [['Technique:', ['academic cohesion instead of linkers', 'a rhetorical question'], 0]]);
G('t2l', 'apply', 1, 'Self-checking', 'Fill in the word.', [['Each body paragraph needs a ___ sentence.', 'topic'], ['A Task 2 essay needs at least ___ words.', '250']]);
R('t2l', 'apply', 3, 'Upgrade sentences using the checklist', 'Rewrite to meet the Band 8 checklist (specific, with consequences, not absolute).', [
  ['Technology is bad for children.', 'Excessive screen time may impair young children\'s concentration, particularly when it displaces physical play.']]);
M('t2l', 'analyze', 1, 'What is missing?', 'The essay has an introduction, Body 1 and Body 2.', [['', ['Conclusion', 'Topic'], 0]]);
M('t2l', 'analyze', 3, 'Where is the model essay weak?', 'Body 2 gives 3 ideas, one sentence each.', [['', ['The ideas are spread thin and not developed', 'The ideas are too deep for Task 2'], 0]]);
M('t2l', 'evaluate', 1, 'Correct sentences', '', [['', ['To sum up, I agree with this idea.', 'To sum up, I am agree with this idea.'], 0]]);

/* ===== t2m The best / The most ===== */
M('t2m', 'remember', 2, 'Thesis "The best" – No', 'Choose the correct thesis.', [['*The best way to learn a language is to live abroad.*', ['Although living abroad helps, I do not think it is the best way for most learners.', 'Living abroad is a way.'], 0]]);
M('t2m', 'remember', 3, 'An advanced "The best" – Yes thesis', 'Choose the most advanced thesis.', [['', ['I would argue that immersion abroad is indeed the most effective route to fluency, as no classroom can replicate the constant, authentic exposure it provides.', 'Yes, it is the best.'], 0]]);
M('t2m', 'understand', 2, 'The Yes structure', 'A Yes essay should:', [['', ['Compare it with other methods to prove it is "the best"', 'Only state that method\'s advantages, with examples'], 0]]);
M('t2m', 'understand', 3, 'The "the most" trap', 'Prompt: *The most important quality of a teacher is patience.*', [['', ['You must argue why it is the MOST important, above other qualities', 'You only need to say patience is important, with an example'], 0]]);
G('t2m', 'apply', 1, 'Superlatives', 'Fill in the correct form.', [['This is the ___ (good) way.', 'best'], ['Patience is the ___ (important) quality.', 'most important']]);
M('t2m', 'analyze', 1, 'Question types', '*The best way to reduce crime is longer prison sentences.*', [['', ['The best – Opinion', 'Discussion'], 0]]);
M('t2m', 'analyze', 3, 'Is the Yes argument complete?', 'The body only states the benefits of living abroad.', [['', ['Not complete — it lacks a comparison with other methods (classes, apps)', 'Complete: it gives two clear advantages with an example for each'], 0]]);
M('t2m', 'evaluate', 1, 'Correct sentences', '', [['', ['It is the most effective way.', 'It is the most effectivest way.'], 0]]);
M('t2m', 'evaluate', 3, 'The best "The best" conclusion', '', [['', [
  'In conclusion, it is the best way.',
  'In conclusion, although longer sentences may deter some offenders, early education and community programmes tackle the root causes of crime and are therefore a far more effective approach.'], 1]]);
})();
