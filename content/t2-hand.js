/* Task 2 viết tay: đoạn thân bài 1 ý / 2 ý (t2b) và counter-argument (t2g). Tự soạn. */
KL_BANK(`
@t2b
#remember 2 gap Recall: one-idea paragraph structure | Fill in 1–2 words.
The first element of a body paragraph is the topic ___. = sentence
After the topic sentence comes the ___ (explaining why). = explanation / explanation / explain
The last sentence of the paragraph is a mini-___. = conclusion
#remember 2 gap Recall: two-idea paragraphs | Fill in 1–2 words.
The topic sentence of a two-idea paragraph must cover ___ ideas. = both / hai / both / 2
In a two-idea paragraph, each idea is explained more ___ than in a one-idea paragraph. = briefly / concisely / briefly
Examples in Task 2 should be ___ and verifiable. = generalisable / chung / general
#remember 3 mcq Recall: developing ideas | Choose the correct answer.
How does the Band 7 Task Response descriptor describe main ideas? :: +Extended and supported, though there may be a tendency to over-generalise || They must include real statistics from official sources || There must be at least 3 ideas in each body paragraph ## Band 8: "well extended and supported".
"Some main ideas are underdeveloped" is a feature of: :: +Band 6 || Band 8 || Band 9
How to develop an idea more deeply: :: +Explain the mechanism (why/how) and the consequences, then give a matching example || Add more ideas to the same paragraph to show a wide range || Repeat the idea with synonyms so it sounds more academic
#apply 1 rewrite Write a topic sentence using the frame | Write a topic sentence for the paragraph using the frame "One major benefit of ... is that ...".
The paragraph's idea: remote work saves employees commuting time. => One major benefit of remote working is that employees save time on commuting.
The paragraph's idea: online learning gives people in remote areas access to good courses. => One major benefit of online learning is that people in remote areas can access high-quality courses.
#apply 3 rewrite Turn a claim into an explanation chain | Rewrite as 2 sentences: a claim + an explanation of the mechanism/consequence. It does not have to match the model.
Cycle lanes are good for cities. => Dedicated cycle lanes make cycling safer, which encourages more people to leave their cars at home. This, in turn, reduces both congestion and air pollution in city centres.
Free museums help society. => Free admission removes a financial barrier for low-income families. As a result, more children are exposed to art and history, which can broaden their education beyond the classroom.
`);
(function () {
const U = id => window.UNITS.find(u => u.id === id);
const I = (q, o, w, ex) => ({ q, options: o, a: 0, why: { q: 'Why?', options: w, a: 0 }, ex: ex || '' });
const S = (id, bloom, lv, title, items) => U(id).exercises.push({ bloom, lv, type: 'mcq2', title, instr: 'Tier 1: choose an option. Tier 2: choose the reason. You get full marks only if both tiers are correct.', items });

S('t2b', 'understand', 2, 'A topic sentence that covers the whole paragraph', [
  I('The paragraph argues: school uniforms → less fashion pressure AND more team spirit. Which topic sentence fits?',
    ['School uniforms reduce pressure to follow fashion and strengthen a sense of belonging.', 'School uniforms reduce the pressure on students to follow fashion.'],
    ['A topic sentence must preview both ideas in the paragraph', 'The shorter the topic sentence, the better', 'A topic sentence must contain an example'], 'A topic sentence that states only 1 idea when the paragraph has 2 surprises the reader in the second half.'),
  I('A one-idea paragraph on: flexible working hours help parents care for their children. Which is the better topic sentence?',
    ['Flexible working hours allow parents to balance their jobs with childcare.', 'There are many advantages of flexible working hours for many people.'],
    ['The chosen sentence specifies the one idea that will be developed', 'The chosen sentence is longer and uses more vocabulary', 'A general sentence is safer because it covers more'], 'A general topic sentence leaves the paragraph without direction.'),
]);
S('t2b', 'understand', 3, 'Explanation or just a claim?', [
  I('Which sentence develops the idea better after "Online learning gives students more flexibility."?',
    ['This allows those with part-time jobs to study at times that suit them, so they are less likely to drop out.', 'This is very good for students, and it is a great advantage for all of them.'],
    ['The chosen sentence explains the mechanism and the consequence; the other only repeats the judgement', 'The chosen sentence contains the word "so", which shows logic', 'The other sentence is shorter, so it must be the weaker one'], 'Band 6 TR: "some main ideas are underdeveloped" — usually because claims are made without explanation.'),
  I('Which example better supports the idea "Taxing sugary drinks can reduce consumption"?',
    ['In several countries that introduced such taxes, sales of sugary drinks fell noticeably within a few years.', 'My uncle stopped drinking cola last year because he wanted to lose weight.'],
    ['A generalisable example directly related to the tax policy', 'Personal examples are always forbidden', 'Examples must have figures accurate to the last digit'], 'Personal examples are not forbidden, but this one has nothing to do with tax.'),
]);
S('t2b', 'understand', 3, 'Two-idea paragraphs: balance and cohesion', [
  I('A two-idea paragraph on the benefits of urban parks (health + community ties). Which transition to idea 2 is better?',
    ['Beyond these health benefits, parks also bring neighbours together through shared spaces and events.', 'Secondly, there is another benefit of parks, which is community.'],
    ['A transition that refers back to the previous idea (these health benefits) and states the new idea clearly', 'A transition that starts with Secondly, which is always the clearest way to begin idea 2', 'A very short transition, because the shorter it is, the more coherent the paragraph'], 'Band 7 CC: flexible use of referencing and substitution.'),
  I('A two-idea paragraph: idea 1 has 5 sentences, idea 2 only 1. What is the problem?',
    ['It is unbalanced: idea 2 is barely developed.', 'There is no problem because both ideas are mentioned.'],
    ['Each idea needs at least a brief explanation; an idea that is merely named is undeveloped', 'Two-idea paragraphs need no explanation, only a clear list', 'Only the more important of the two ideas needs explaining'], ''),
]);
S('t2b', 'analyze', 2, 'Diagnose a body paragraph', [
  I('Paragraph: "Public transport should be free. Firstly, it is cheap. Secondly, it is good. Thirdly, people like it."',
    ['It lists several ideas without explaining any of them.', 'It has serious grammar errors in almost every sentence.'],
    ['A body paragraph must develop ideas, not just list them', 'Firstly must not be used', 'The paragraph is too short in word count'], 'Band 5 TR: ideas are limited, undeveloped and repetitive.'),
  I('The paragraph\'s topic sentence is about education, but the example is about transport.',
    ['The example does not match the main idea (relevance).', 'It lacks linkers between the example and the main idea.'],
    ['An example must directly illustrate the point', 'Examples should cover a variety of topics', 'You only need to add "For example"'], ''),
]);
S('t2b', 'analyze', 3, 'Diagnose a paragraph', [
  I('The paragraph ends with: "Therefore, governments should also invest in space exploration." (the paragraph is about public health)',
    ['The concluding sentence goes off-point, adding an unrelated new idea.', 'The concluding sentence does its job and sums up the paragraph.'],
    ['A mini-conclusion must return to the paragraph\'s point', 'The concluding sentence should open a new direction', 'The concluding sentence must contain figures'], ''),
  I('Paragraph: "Technology improves education. For example, many schools use tablets. Technology improves education."',
    ['Circular reasoning: there is no explanation, and the concluding sentence repeats the topic sentence.', 'The paragraph is complete because it has a point and an example.'],
    ['It is missing the "why/how" explanation', 'The tablet example is wrong', 'The word "technology" must not be repeated'], 'The example does not show how tablets improve learning.'),
]);
S('t2b', 'analyze', 3, 'Does the example support the idea?', [
  I('Idea: "Working from home can reduce traffic congestion." Example: "Many people enjoy working in pyjamas."',
    ['The example does not prove the idea (it has nothing to do with traffic).', 'The example fits because it is about working from home.'],
    ['An example must prove the exact claim of the point', 'An example only needs to share the broad topic', 'Humorous examples make essays better'], ''),
  I('Idea: "Banning cars from city centres may hurt small shops." Which is the best development?',
    ['Customers who rely on driving may shop elsewhere, so businesses near the centre could lose regular income.', 'Cars are very important for many people in modern life, especially in cities.'],
    ['An explanation of the cause → effect chain for the right group (small shops)', 'A general sentence about cars, which is safer than a specific claim', 'A development that includes figures, which are always required'], ''),
]);
S('t2b', 'evaluate', 2, 'Which paragraph is better developed?', [
  I('Prompt: Should children learn a second language at primary school?',
    ['Learning a language early is easier because young children imitate sounds naturally. As a result, they often develop better pronunciation than those who start as teenagers.', 'Learning a language is good. It is useful for children. Children like it very much. It helps them in the future.'],
    ['It has a point, an explanation of the mechanism and a consequence', 'It has more sentences, so it is better developed', 'Short sentences are easy to understand, so it is better'], ''),
  I('Prompt: Is it a good idea for teenagers to have part-time jobs?',
    ['A part-time job can teach teenagers to manage money, since they experience how long it takes to earn what they spend.', 'Part-time jobs have many good points and many bad points for teenagers in the world today.'],
    ['The chosen sentence states a specific idea and explains why', 'The other sentence is more balanced, so it is better', 'The other sentence is longer'], ''),
]);
S('t2b', 'evaluate', 3, 'Rank paragraphs by Task Response', [
  I('Prompt: Do the benefits of tourism outweigh the drawbacks for local communities? Which paragraph is best?',
    ['Tourism brings income, but much of it may leave the area through foreign-owned hotels; the benefits therefore depend on how far profits stay local.', 'Tourism brings a lot of money and jobs, so it is always beneficial for everyone in every local community.', 'Tourism has benefits and drawbacks, such as money, jobs, pollution and crowds, for most communities.'],
    ['It explains and weighs conditions, without absolute claims', 'It lists the most examples of benefits and drawbacks', 'It has the strongest and most confident position'], 'Band 8 TR: ideas are well extended and supported; absolute claims tend to be inaccurate.'),
  I('Paragraph A: 2 ideas, each with 3 sentences of explanation + an example. Paragraph B: 5 ideas, one sentence each. According to the band descriptors, which usually scores higher for TR?',
    ['Paragraph A', 'Paragraph B'],
    ['Developed, supported ideas matter more than the number of ideas', 'More ideas show a broader understanding of the topic', 'The two paragraphs are equal, as both answer the prompt'], ''),
]);

S('t2g', 'understand', 2, 'Identify counter-arguments', [
  I('Which paragraph is a complete counter-argument?',
    ['Some argue that homework teaches discipline. However, research suggests that for young children, too much homework mainly causes stress rather than better habits.', 'Homework is bad. It causes a lot of stress. Children should play instead of doing homework after school.'],
    ['It acknowledges the other side\'s point and rebuts it with a reason', 'It is the shorter paragraph, so it is clearer', 'It contains the word "should", which signals an argument'], ''),
  I('Which concession sentence is suitable for opening a counter-argument paragraph?',
    ['Admittedly, banning cars could make it harder for some people to reach the city centre.', 'Banning cars is the best idea and nobody can disagree with it.'],
    ['It fairly acknowledges one of the other side\'s points before rebutting it', 'Open with an absolute claim to sound strong and confident', 'No concession is needed before a rebuttal'], ''),
]);
S('t2g', 'understand', 2, 'Reasoned rebuttals', [
  I('Which rebuttal is tighter for the idea "Zoos educate children"?',
    ['However, documentaries and wildlife reserves can offer the same education without keeping animals in captivity.', 'However, this is not true at all, because zoos do not really educate anyone who visits them.'],
    ['The rebuttal points to an alternative/a specific reason', 'The shorter the rebuttal, the stronger', '"Not true at all" is stronger'], ''),
  I('After the rebuttal, which sentence should end the counter-argument paragraph?',
    ['Therefore, the educational value of zoos does not justify keeping wild animals in confined spaces.', 'Therefore, zoos are good for education, and children can learn a lot there.'],
    ['The last sentence returns to the writer\'s position', 'The last sentence should agree with the other side', 'The last sentence must contain a new example'], 'If the position is against zoos, the final sentence must reflect that.'),
]);
S('t2g', 'understand', 3, 'The assumption behind an argument', [
  I('The other side\'s argument: "Harsher punishments will stop dangerous driving." What is the hidden assumption?',
    ['Dangerous drivers consider the punishment before they act.', 'All drivers are dangerous, whatever the punishment is.'],
    ['The sentence "This is predicated on the assumption that..." exposes the assumption so it can be rebutted', 'The assumption is something the writer already agrees with', 'The assumption has nothing to do with the rebuttal that follows'], 'Rebutting an assumption is often more persuasive than rebutting a conclusion.'),
  I('Which rebuttal targets the assumption above?',
    ['However, many reckless drivers act on impulse and rarely think about penalties, so harsher fines may have limited effect.', 'However, punishments are expensive for the government to enforce on the roads.'],
    ['It directly rebuts the assumption (that drivers consider the punishment)', 'Rebutting with a different issue is equally valuable', 'The shorter sentence is tighter'], 'The other sentence is true but shifts to cost, so it does not hit the main argument.'),
]);
S('t2g', 'understand', 3, 'The degree of concession', [
  I('Position: "Exams should not be the main way to assess students." Which concession does not weaken the position?',
    ['Granted, exams are efficient for assessing large numbers of students at once.', 'Granted, exams are clearly the fairest and most accurate way to assess students.'],
    ['It admits a narrow advantage without conceding the very point being opposed', 'The stronger the concession, the fairer the paragraph becomes', 'Granted should not be used in an academic essay'], 'The other sentence concedes exactly what the position opposes → a contradiction.'),
  I('A counter-argument paragraph uses: "This line of reasoning is flawed because it fails to factor in..." What is this sentence\'s function?',
    ['It moves from concession to rebuttal, pointing out what the other argument misses.', 'It opens a new paragraph about a different topic.'],
    ['It is the transition sentence in the 3-step rebuttal frame', 'It is the essay\'s conclusion, summing up the position', 'It is purely decorative and has no real function'], ''),
]);
S('t2g', 'analyze', 2, 'Diagnose a counter-argument paragraph', [
  I('Paragraph: "Some say that fast food is convenient. It is true that fast food is convenient. Fast food is very convenient."',
    ['It only concedes and repeats the idea, with no rebuttal.', 'It is a complete counter-argument paragraph.'],
    ['It is missing the rebuttal and the return to the writer\'s position', 'It lacks academic vocabulary in most of its sentences', 'The paragraph is too long for a counter-argument'], ''),
  I('The counter-argument is placed in the introduction, before the thesis.',
    ['The reader does not yet know the position, so the rebuttal is confusing.', 'There is no problem; a counter-argument should always come first.'],
    ['It should usually come after the main arguments or be embedded in the body', 'A counter-argument must always go in the conclusion', 'A counter-argument must be the first body paragraph'], 'There is no fixed position, but the introduction needs a clear thesis first.'),
]);
S('t2g', 'analyze', 3, 'Diagnose rebuttals', [
  I('Rebuttal: "However, people who say this are clearly uneducated."',
    ['It attacks the speakers instead of their argument.', 'It is a valid rebuttal because it contains However.'],
    ['A rebuttal must target the reasoning/evidence', 'A rebuttal must be longer', 'A rebuttal must contain figures'], ''),
  I('Rebuttal: "However, this is wrong because it is incorrect."',
    ['Circular reasoning: the reason just repeats the conclusion.', 'The rebuttal is correct but a little short.'],
    ['"Because it is wrong" is not a reason', 'It lacks linking words', 'The tense is wrong'], ''),
]);
S('t2g', 'analyze', 3, 'Is the rebuttal on target?', [
  I('The other side\'s argument: "Remote work reduces productivity because of distractions at home." Which rebuttal is on target?',
    ['However, studies of some firms show stable or higher output when staff can choose quieter hours, suggesting distractions can be managed.', 'However, remote work is good for the environment, because there is much less commuting and so less air pollution.'],
    ['The rebuttal addresses the productivity issue directly', 'Environmental benefits also rebut the productivity point', 'The shorter sentence is more on target'], 'The other sentence gives a different benefit and does not answer the productivity argument.'),
  I('A rebuttal paragraph uses a personal example: "My friend works from home and he is lazy."',
    ['A single case is not general enough to support a rebuttal.', 'Personal examples are always the strongest evidence.'],
    ['Evidence should be more general than one individual', 'Personal examples are strictly forbidden', 'You only need to add the friend\'s name'], ''),
]);
S('t2g', 'evaluate', 2, 'Which counter-argument paragraph is more persuasive?', [
  I('Position: in favour of a tax on sugary drinks.',
    ['Critics claim that such taxes hurt poorer families. However, the revenue can fund free water stations and health programmes in low-income areas, offsetting much of this cost.', 'Critics claim that such taxes hurt poorer families. However, health is more important than money, so the tax is still right.'],
    ['A specific rebuttal that answers the concern about poorer people', 'A shorter rebuttal, because short rebuttals are stronger', 'A rebuttal based on general values, which is enough'], ''),
  I('Position: against a total ban on phones in schools.',
    ['It is true that phones can distract students. Nevertheless, clear rules on when phones may be used can limit this while keeping their value as learning tools.', 'It is true that phones can distract students. Nevertheless, phones are modern and everyone uses them nowadays.'],
    ['The rebuttal offers a solution that addresses the exact point raised', 'The two paragraphs are equal', 'The other paragraph uses simpler vocabulary, so it is better'], ''),
]);
S('t2g', 'evaluate', 3, 'Rank rebuttal paragraphs', [
  I('Position: cities should restrict cars in their centres. Which paragraph is best?',
    ['Granted, some businesses fear losing customers. This concern, however, assumes that most shoppers arrive by car, whereas in many dense centres the majority walk or use public transport.', 'Businesses are wrong to worry. Cars are bad for city centres, so shops will be fine without them.', 'Businesses are simply wrong. Cars are bad for everyone, and city centres would be better places without any of them.'],
    ['A fair concession that exposes the assumption and rebuts it with evidence', 'The strongest concession is always the fairest one', 'The most concise paragraph is the most persuasive'], 'The second paragraph concedes but does not rebut, which weakens the position.'),
  I('Which counter-argument paragraph has better CC?',
    ['Admittedly, the policy has costs. These, however, are likely to be temporary, whereas the health benefits would accumulate over decades.', 'Admittedly, the policy has costs. Moreover, the costs are temporary. Furthermore, health benefits are long-term.'],
    ['Referencing (These) and contrast (whereas) show the true relationship between ideas', '"Moreover/Furthermore" is always the better choice for linking', 'Shorter sentences are always more coherent than long ones'], '"Moreover" in sentence 2 shows the wrong relationship: the next sentence rebuts rather than adds.'),
]);
})();
KL_BANK(`
@t2g
#remember 2 gap Recall: the 3-step rebuttal frame | Fill in 1 word.
___, one might argue that ... (a concession, beginning with Gr-) = Granted
This is ___ on the assumption that ... (based) = predicated / based
However, this line of ___ is not sound. = reasoning
#remember 2 gap Recall: concession – rebuttal words | Fill in 1 word.
It is ___ that zoos protect some species. (admittedly so) = true
___, banning cars could inconvenience some residents. (It must be admitted; beginning with Adm-) = Admittedly
___, this argument overlooks ... (However; beginning with Nev-) = Nevertheless / Nonetheless
#remember 3 mcq Recall: the role of counter-arguments | Choose the correct answer.
How does a counter-argument help an essay? :: +It shows the writer has considered the other side, making the position more persuasive || It makes the essay more neutral, so the reader cannot tell the writer's view || It mainly increases the word count, which helps the essay reach 250 words
The most effective rebuttals usually target: :: +The assumptions or evidence of the other side's argument || The person making the argument || The vocabulary of the other side's argument
After the rebuttal, the last sentence of the paragraph should: :: +Restate the writer's position || Agree with the other side || Raise a new issue
#apply 1 rewrite Write a concession sentence using the frame | Write a sentence conceding the other side's point, using "It is true that ...".
The other side's point: exams allow many students to be assessed quickly. => It is true that exams allow large numbers of students to be assessed quickly.
The other side's point: tourism creates jobs for local people. => It is true that tourism creates jobs for local people.
#apply 2 rewrite Write a reasoned rebuttal | Write a sentence beginning with "However," that rebuts the given point with a specific reason. It does not have to match the model.
The other side's point: social media helps young people connect. (Position: social media causes loneliness) => However, online contact often replaces rather than supports face-to-face friendship, which can leave young people feeling more isolated.
The other side's point: electric cars will solve pollution. (Position: public transport is needed) => However, electric cars still cause congestion and their electricity may come from fossil fuels, so public transport remains essential.
#apply 3 rewrite Write a 3-step counter-argument paragraph | Write 3 sentences: concession → assumption → rebuttal. They do not have to match the model.
Position: university tuition should not be free for everyone. The other side's point: free tuition helps poorer students go to university. => Granted, free tuition could help some low-income students enter university. This argument, however, assumes that fees are the main barrier, whereas living costs often deter poorer students more. Targeted grants for living expenses would therefore help them more effectively than free tuition for all.
`);
