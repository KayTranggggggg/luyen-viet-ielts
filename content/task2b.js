/* Chặng 3 (bổ sung) — bám theo danh sách 21 bài Writing Task 2. Nội dung & đề tự soạn. */
(function () {
const U = id => window.UNITS.find(u => u.id === id);
const tag = (id, n, lessons, title) => { const u = U(id); u.n = n; u.lessons = lessons; if (title) u.title = title; return u; };

tag('t2a', 1, 'Lesson 1 · Task Response', 'Task Response: phân tích đề & Introduction');
const b = tag('t2b', 5, 'Lesson 5 · 1-idea paragraph · Lesson 6 · 2-idea paragraph', 'Đoạn thân bài 1 ý & 2 ý');
tag('t2c', 10, 'Lesson 10 · Opinion "The only way" · Lesson 11 · Opinion', 'Opinion: Agree/Disagree & "The only way"');
tag('t2d', 13, 'Lesson 13 · A and B · Lesson 14 · Advantages outweigh disadvantages', 'Discussion (A and B) & Advantages outweigh');
tag('t2e', 16, 'Lesson 16 · Problems – solutions · Lesson 19 · 2-part question', 'Problems – Solutions & câu hỏi 2 phần');

b.theory.push({ h: '3 kiểu đoạn thân bài (theo khoá học)', p: ['**1 ý**: Topic sentence → explain → example → discuss (hoặc lấy ví dụ đối lập để làm rõ).', '**2 ý**: Topic sentence (nêu cả 2 ý) → ý 1 + giải thích → ý 2 + giải thích. Hợp khi mỗi ý không cần phát triển dài.', '**Counter-argument**: nêu quan điểm đối lập + giải thích → phản bác (xem bài Counter-argument).'] });
b.exercises.splice(5, 0, { bloom: 'analyze', type: 'match', title: 'Đoạn 1 ý hay 2 ý?', instr: 'Chọn kiểu đoạn phù hợp với mỗi dàn ý.', options: ['1 ý (phát triển sâu)', '2 ý (mỗi ý ngắn)'],
  pairs: [
    { l: 'Học online tiết kiệm thời gian đi lại → giải thích → ví dụ sinh viên ở tỉnh → so sánh với học trực tiếp', r: '1 ý (phát triển sâu)' },
    { l: 'Thuế đường giúp giảm béo phì; ngoài ra tạo ngân sách cho y tế', r: '2 ý (mỗi ý ngắn)' },
    { l: 'Du lịch đại trà gây ô nhiễm và làm mất bản sắc văn hoá địa phương', r: '2 ý (mỗi ý ngắn)' },
    { l: 'Làm việc từ xa làm mờ ranh giới công việc – cuộc sống → giải thích cơ chế → ví dụ → hệ quả', r: '1 ý (phát triển sâu)' },
  ] });
b.exercises.push({ bloom: 'create', type: 'write', kind: 'task2', title: 'Viết đoạn 2 ý', prompt: 'Đề: *Some people think that public museums and galleries should be free of charge. To what extent do you agree or disagree?*\n\nViết **một đoạn thân bài 2 ý** (khoảng 120–150 từ) ủng hộ việc miễn phí: topic sentence nêu cả hai ý, sau đó phát triển từng ý.', minWords: 110, focus: ['topic sentence bao cả 2 ý', 'giải thích từng ý', 'từ nối giữa 2 ý'] });

window.UNITS = window.UNITS.concat([
{
  id: 't2f', n: 2, stage: 'task2', lessons: 'Lesson 2 · Coherence & Cohesion · Lesson 3 · Vocabulary · Lesson 4 · Grammar', title: 'CC, Vocabulary & Grammar: 3 tiêu chí còn lại',
  desc: 'Ngoài Task Response, ba tiêu chí còn lại chiếm 75% điểm: mạch lạc – liên kết, từ vựng, ngữ pháp. Học cách giám khảo nhìn vào bài của bạn.',
  theory: [
    { h: 'Coherence & Cohesion', p: ['Mỗi đoạn **một chức năng rõ**; ý sắp xếp logic.', 'Liên kết bằng **tham chiếu** (this, such a policy, the former) và **từ nối có chủ đích**, không nhồi Firstly/Secondly/Moreover mỗi câu.', 'Câu chủ đề nối ngược về đề bài.'] },
    { h: 'Lexical Resource', p: ['**Collocation** đúng hơn từ "khủng": *tackle a problem, pose a threat, a heavy burden*.', 'Paraphrase đề, tránh lặp từ khoá.', 'Từ hiếm dùng sai bị trừ điểm nhiều hơn từ đơn giản dùng đúng.'] },
    { h: 'Grammatical Range & Accuracy', p: ['Kết hợp câu phức (mệnh đề quan hệ, điều kiện, bị động, phân từ) **một cách tự nhiên**.', 'Band 7: đa số câu không lỗi. Đúng quan trọng hơn dài.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Lỗi này thuộc tiêu chí nào?', instr: 'Chọn tiêu chí bị ảnh hưởng.', options: ['Coherence & Cohesion', 'Lexical Resource', 'Grammar'],
      pairs: [
        { l: 'Dùng "Moreover" ở đầu 6 câu liên tiếp', r: 'Coherence & Cohesion' },
        { l: '"make a crime" thay vì "commit a crime"', r: 'Lexical Resource' },
        { l: '"The government should invests more"', r: 'Grammar' },
        { l: 'Đoạn thân bài chứa hai ý không liên quan nhau', r: 'Coherence & Cohesion' },
        { l: 'Lặp "pollution" 9 lần', r: 'Lexical Resource' },
        { l: 'Chỉ dùng câu đơn từ đầu đến cuối', r: 'Grammar' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Collocation đúng', instr: 'Chọn cụm tự nhiên nhất.',
      items: [
        { q: '___ a serious threat to public health', options: ['pose', 'do', 'give'], a: 0 },
        { q: '___ the problem of youth unemployment', options: ['tackle', 'solve out', 'make'], a: 0 },
        { q: 'place a heavy ___ on taxpayers', options: ['burden', 'weight load', 'trouble'], a: 0 },
        { q: '___ awareness of environmental issues', options: ['raise', 'rise', 'arise'], a: 0 },
      ] },
    { bloom: 'apply', type: 'gap', title: 'Liên kết bằng tham chiếu', instr: 'Điền MỘT từ để nối với câu trước.',
      items: [
        { q: 'Many cities have introduced congestion charges. ___ a policy discourages unnecessary car journeys.', a: ['such'] },
        { q: 'Some parents limit screen time, while others ban devices entirely. The ___ approach seems more realistic.', a: ['former'] },
        { q: 'Online courses are cheap and flexible. ___ advantages make them attractive to working adults.', a: ['these'] },
      ] },
    { bloom: 'analyze', type: 'rewrite', title: 'Nâng cấp câu', instr: 'Viết lại câu cho đa dạng ngữ pháp và từ vựng hơn, giữ nguyên nghĩa.',
      items: [
        { q: 'Many people use cars. This makes a lot of pollution. It is bad for health.', a: ['The widespread use of private cars generates significant pollution, which poses a serious threat to public health.'] },
        { q: 'If the government does not do something, the problem will be bigger.', a: ['Unless the government takes action, the problem is likely to worsen.', 'Without government intervention, the problem will only grow more severe.'] },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Đoạn nào liên kết tốt hơn?', instr: 'Chọn đoạn tốt hơn về Coherence & Cohesion.',
      items: [{ q: '', options: [
        'Firstly, tourism brings money. Moreover, tourism creates jobs. Furthermore, tourism is good. In addition, tourism helps culture.',
        'Tourism is a major source of income for many developing regions. This revenue not only creates jobs in hotels and restaurants but also funds the preservation of historic sites, which might otherwise fall into disrepair.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'Viết đoạn chú trọng CC – LR – GRA', prompt: 'Đề: *In many countries, people are moving from rural areas to cities. Why is this happening, and is it a positive or negative development?*\n\nViết **một đoạn thân bài** (130–160 từ) giải thích nguyên nhân. Mục tiêu: ít nhất 3 collocation, 2 cách tham chiếu (this/such/these...), và 3 loại câu phức khác nhau.', minWords: 120, focus: ['coherence & cohesion', 'collocation', 'câu phức'] },
  ],
},
{
  id: 't2g', n: 7, stage: 'task2', lessons: 'Lesson 7 · Counter-argument', title: 'Đoạn counter-argument: nhượng bộ & phản bác',
  desc: 'Nêu lập luận của phía đối lập một cách công bằng, rồi chỉ ra điểm yếu của nó. Đây là cách làm bài Opinion thuyết phục hơn.',
  theory: [
    { h: 'Cấu trúc', p: ['**Point + explain** (của phía đối lập): *Granted, one might argue that... This is because...*', '**Counter**: *However, this line of reasoning is flawed/not entirely convincing, since...*', 'Kết đoạn nối về quan điểm của bạn.'] },
    { h: 'Ngôn ngữ', p: ['Nhượng bộ: *Granted, ... / Admittedly, ... / It is true that... / Opponents of this view may claim that...*', 'Phản bác: *However, this argument overlooks... / This, however, fails to take into account... / Yet this concern is largely unfounded because...*'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Nhượng bộ hay phản bác?', instr: 'Phân loại các cụm.', options: ['Nhượng bộ', 'Phản bác'],
      pairs: [
        { l: 'Admittedly, ...', r: 'Nhượng bộ' }, { l: 'This argument, however, overlooks...', r: 'Phản bác' }, { l: 'Opponents may claim that...', r: 'Nhượng bộ' },
        { l: 'Yet this concern is largely unfounded because...', r: 'Phản bác' }, { l: 'It is true that...', r: 'Nhượng bộ' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Vai trò của counter-argument', instr: 'Chọn đáp án đúng.',
      items: [
        { q: 'Counter-argument giúp bài Opinion:', options: ['Thể hiện đã cân nhắc cả hai phía nhưng vẫn giữ quan điểm rõ', 'Đổi quan điểm giữa chừng', 'Tăng số từ'], a: 0 },
        { q: 'Sau phần phản bác, quan điểm của bạn:', options: ['Mạnh hơn và nhất quán với thesis', 'Trở thành trung lập', 'Không cần nhắc lại'], a: 0 },
      ] },
    { bloom: 'apply', type: 'gap', title: 'Hoàn thành đoạn', instr: 'Đề: *Homework should be banned in primary schools. Agree or disagree?* (Bạn: không đồng ý). Điền MỘT từ.',
      items: [
        { q: '___, one might argue that homework puts unnecessary pressure on young children.', a: ['granted', 'admittedly'] },
        { q: 'However, this line of reasoning is not entirely ___.', a: ['convincing', 'sound', 'persuasive'] },
        { q: 'This argument ___ the fact that short, well-designed tasks can build good study habits.', a: ['overlooks', 'ignores'] },
      ] },
    { bloom: 'analyze', type: 'order', title: 'Sắp xếp đoạn counter-argument', instr: 'Sắp xếp các phần.',
      items: [{ words: 'Granted, some argue that remote work isolates employees, / as they lose daily contact with colleagues. / However, this concern is largely unfounded, / since video calls and occasional office days / can maintain strong team relationships.' }] },
    { bloom: 'evaluate', type: 'mcq', title: 'Phản bác nào mạnh hơn?', instr: 'Lập luận đối lập: *"Public transport should not be free because it costs taxpayers too much."*',
      items: [{ q: '', options: [
        'However, I disagree because free transport is good.',
        'However, this argument overlooks the hidden costs of car dependency, such as road maintenance and pollution-related healthcare, which may well exceed the price of subsidising public transport.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'Viết đoạn counter-argument', prompt: 'Đề: *Some people think that university education should be free for everyone. To what extent do you agree or disagree?*\n\nChọn quan điểm, rồi viết **một đoạn counter-argument** (120–150 từ): nêu và giải thích lập luận của phía đối lập, sau đó phản bác.', minWords: 110, focus: ['nhượng bộ công bằng', 'phản bác có lý do', 'nhất quán quan điểm'] },
  ],
},
{
  id: 't2h', n: 8, stage: 'task2', lessons: 'Lesson 8 · Big no-nos in IELTS Writing Task 2', title: 'Big no-nos: lỗi khiến bài bị kẹp điểm',
  desc: 'Những lỗi phổ biến làm Task 2 khó vượt band 6: lạc đề, học thuộc câu mẫu, giọng văn nói, khái quát quá đà, kết bài thêm ý mới.',
  theory: [
    { h: 'Danh sách cần tránh', p: ['Không trả lời đủ các phần của câu hỏi.', 'Câu mở học thuộc không liên quan đề (*"In this day and age, ... is a hot topic"*).', 'Giọng văn nói: *kids, lots of, gonna, don\'t, I think so*.', 'Khái quát tuyệt đối: *everyone, always, never, all young people*.', 'Ví dụ bịa số liệu "nghiên cứu Harvard cho thấy 97%..."', 'Kết bài đưa ý mới; quan điểm đổi giữa chừng.', 'Viết dưới 250 từ.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'mcq', title: 'Có phải "no-no"?', instr: 'Chọn câu MẮC lỗi.',
      items: [
        { q: '', options: ['Kids these days are glued to their phones.', 'Many children now spend several hours a day on their phones.'], a: 0, ex: 'Giọng văn nói + thành ngữ thân mật.' },
        { q: '', options: ['Everyone agrees that technology is harmful.', 'There is growing concern that excessive screen time may be harmful.'], a: 0, ex: 'Khái quát tuyệt đối.' },
        { q: '', options: ['A recent Harvard study found that 97% of teenagers are addicted.', 'For instance, many teenagers check their phones within minutes of waking up.'], a: 0, ex: 'Bịa số liệu nghiên cứu.' },
      ] },
    { bloom: 'understand', type: 'match', title: 'Gọi tên lỗi', instr: 'Chọn loại lỗi.', options: ['Giọng văn nói', 'Khái quát quá đà', 'Câu học thuộc', 'Ý mới ở kết bài'],
      pairs: [
        { l: 'In this day and age, education is a hot topic that is being debated.', r: 'Câu học thuộc' },
        { l: 'Old people can\'t use technology.', r: 'Khái quát quá đà' },
        { l: 'Lots of folks reckon it\'s a good idea.', r: 'Giọng văn nói' },
        { l: 'In conclusion, ... Also, governments should build more parks.', r: 'Ý mới ở kết bài' },
      ] },
    { bloom: 'apply', type: 'rewrite', title: 'Sửa lỗi', instr: 'Viết lại câu cho học thuật và chính xác.',
      items: [
        { q: 'Kids don\'t do sports anymore cuz they play games all the time.', a: ['Many children now do less physical activity, partly because they spend a considerable amount of time playing video games.'] },
        { q: 'All politicians are corrupt, so people never trust them.', a: ['Corruption scandals involving some politicians have led many people to lose trust in their governments.'] },
      ] },
    { bloom: 'analyze', type: 'mcq', title: 'Có trả lời đủ đề không?', instr: 'Đề: *Why do many people choose to work from home? What are the drawbacks of this trend?*',
      items: [{ q: 'Dàn ý: Body 1 – lợi ích của làm việc tại nhà; Body 2 – lợi ích cho công ty. Vấn đề:', options: ['Không nói về drawbacks và không giải thích "why"', 'Không có vấn đề', 'Chỉ thiếu ví dụ'], a: 0, ex: '"Lợi ích" có thể dùng làm lý do, nhưng câu hỏi thứ hai về nhược điểm bị bỏ qua hoàn toàn.' }] },
    { bloom: 'evaluate', type: 'mcq', title: 'Mở bài nào tránh được no-no?', instr: 'Đề: *Some people think that children should start school at the age of four. Do you agree or disagree?*',
      items: [{ q: '', options: [
        'Nowadays, education is a controversial issue that has sparked a heated debate among people all around the world.',
        'There is a debate over whether children should begin formal schooling as early as four. In my view, starting at this age brings more drawbacks than benefits, since young children learn best through play.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'Sửa bài mắc no-nos', prompt: 'Đọc đoạn sau và **viết lại thành đoạn thân bài band 7** (120–150 từ), loại bỏ toàn bộ no-nos:\n\n*"Nowadays technology is a hot topic. Everybody uses social media all the time and it\'s super bad for kids. A study shows 99% of teens are depressed because of Facebook. So I think the government must ban it and also we should plant more trees."*\n\nĐề gốc: *Social media does more harm than good to young people. Agree or disagree?*', minWords: 110, focus: ['giọng học thuật', 'tránh khái quát', 'bám đề'] },
  ],
},
{
  id: 't2i', n: 9, stage: 'task2', lessons: 'Lesson 9 · Dạng Should · Lesson 12 · A better than B · Lesson 12 · Better for a certain group', title: 'Opinion: dạng Should, "A better than B" & "tốt cho nhóm nào"',
  desc: 'Ba biến thể Opinion hay gặp: đề có should/should not, đề so sánh A với B, và đề hỏi điều gì tốt hơn cho một nhóm người cụ thể.',
  theory: [
    { h: 'Dạng Should', p: ['Trả lời: **nên ở mức độ nào?** (hoàn toàn / có điều kiện / không nên).', 'Có thể đề xuất phạm vi: *should be required, but only for...*'] },
    { h: 'A better than B', p: ['So sánh **trực tiếp** A và B ở cùng tiêu chí; đừng chỉ viết về A.', 'Thesis kiểu: *A is preferable to B in terms of X, although B has the edge in Y.*'] },
    { h: 'Better for a certain group', p: ['Mọi lập luận phải gắn với **nhóm được nêu** (người già, trẻ em, sinh viên...).', 'Dùng ví dụ về đúng nhóm đó.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Nhận diện biến thể', instr: 'Chọn dạng.', options: ['Should', 'A better than B', 'Better for a group'],
      pairs: [
        { l: 'Governments should require all citizens to vote. Agree or disagree?', r: 'Should' },
        { l: 'Learning from books is better than learning from experience. Agree or disagree?', r: 'A better than B' },
        { l: 'Living in the countryside is better for elderly people than living in a city. Agree or disagree?', r: 'Better for a group' },
        { l: 'Children should not be allowed to own smartphones until the age of 14. Agree or disagree?', r: 'Should' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Thesis nào đúng yêu cầu?', instr: 'Chọn thesis phù hợp.',
      items: [
        { q: 'Đề: *Living in the countryside is better for elderly people than living in a city.*', options: ['I agree that rural areas offer elderly people a calmer and healthier lifestyle, although access to hospitals remains a concern.', 'The countryside is beautiful and peaceful for everyone.', 'Cities are developing quickly.'], a: 0 },
        { q: 'Đề: *Learning from books is better than learning from experience.*', options: ['Books are useful.', 'While books provide a structured foundation, I believe experience teaches practical skills more effectively.', 'Experience is important in life.'], a: 1 },
      ] },
    { bloom: 'apply', type: 'rewrite', title: 'Viết thesis có điều kiện', instr: 'Viết thesis cho đề Should, đồng ý có điều kiện.',
      items: [
        { q: 'Đề: *Governments should make cycling helmets compulsory.*', a: ['I believe helmets should be compulsory for children and on busy roads, but making them mandatory for all cyclists could discourage people from cycling.'] },
        { q: 'Đề: *University students should be required to do part-time work.*', a: ['While part-time work can teach valuable skills, I do not think it should be compulsory, as it may harm students\' academic performance.'] },
      ] },
    { bloom: 'analyze', type: 'match', title: 'Lập luận có gắn với nhóm không?', instr: 'Đề: *Living in the countryside is better for elderly people.* Đánh giá từng ý.', options: ['Gắn với người già', 'Quá chung chung'],
      pairs: [
        { l: 'Cleaner air reduces respiratory problems, which are common among older adults.', r: 'Gắn với người già' },
        { l: 'The countryside has beautiful scenery.', r: 'Quá chung chung' },
        { l: 'Retirees in villages often have stronger community ties, reducing loneliness.', r: 'Gắn với người già' },
        { l: 'Houses are cheaper in rural areas.', r: 'Quá chung chung' },
      ], ex: 'Ý "nhà rẻ" có thể dùng nếu liên hệ với thu nhập lương hưu cố định.' },
    { bloom: 'evaluate', type: 'mcq', title: 'Đoạn A vs B nào tốt hơn?', instr: 'Đề: *Learning from books is better than learning from experience.*',
      items: [{ q: '', options: [
        'Books are good. They have a lot of information. People can read them at home or in the library. Many famous people read books.',
        'Books allow learners to benefit from knowledge that would take a lifetime to gain first-hand. A medical student, for example, can study thousands of documented cases, whereas relying on experience alone would expose patients to unnecessary risk.'], a: 1, ex: 'Đoạn 2 so sánh trực tiếp sách và kinh nghiệm.' }] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'Bài Opinion dạng Should', prompt: 'Some people think that governments should ban cars from city centres. To what extent do you agree or disagree?\n\nWrite at least 250 words.', minWords: 250, focus: ['mức độ đồng ý rõ', 'có thể đồng ý có điều kiện', 'counter-argument'] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'Bài Opinion: better for a group', prompt: 'Some people believe that living in a big city is better for young adults than living in a small town. To what extent do you agree or disagree?\n\nWrite at least 250 words.', minWords: 250, focus: ['gắn lập luận với nhóm', 'so sánh trực tiếp'] },
  ],
},
{
  id: 't2j', n: 15, stage: 'task2', lessons: 'Lesson 15 · Positive or negative development', title: 'Positive or negative development',
  desc: 'Đề hỏi một xu hướng là tích cực hay tiêu cực. Cần nêu rõ thái độ, cân nhắc mặt kia, và giữ nhất quán.',
  theory: [
    { h: 'Cách làm', p: ['Thesis: *I believe this is a largely positive/negative development because...*', 'Cấu trúc gợi ý: Body 1 – mặt đối lập (counter), Body 2 – mặt bạn chọn (mạnh hơn); hoặc 2 đoạn đều ủng hộ quan điểm.', 'Nếu đề có 2 phần (Why + positive/negative?) thì phải trả lời cả hai.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'gap', title: 'Ngôn ngữ đánh giá xu hướng', instr: 'Điền MỘT từ.',
      items: [
        { q: 'I believe this is a largely ___ development, as it improves access to education.', a: ['positive'] },
        { q: 'The drawbacks of this trend far ___ its benefits.', a: ['outweigh'] },
        { q: 'This shift is likely to have ___ consequences for local communities.', a: ['negative', 'serious', 'harmful', 'detrimental'] },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Đọc đề', instr: 'Đề: *More and more people are buying goods online rather than in shops. Is this a positive or negative development?*',
      items: [
        { q: 'Cần làm:', options: ['Đánh giá xu hướng mua online là tích cực hay tiêu cực', 'Giải thích vì sao mọi người mua online', 'Liệt kê ưu nhược điểm không cần quan điểm'], a: 0 },
        { q: 'Thesis tốt:', options: ['Online shopping is popular.', 'Although convenient for consumers, I believe this is a largely negative development for local high streets and the environment.'], a: 1 },
      ] },
    { bloom: 'apply', type: 'match', title: 'Tích cực hay tiêu cực?', instr: 'Xu hướng: *người trẻ sống một mình ngày càng nhiều*.', options: ['Tích cực', 'Tiêu cực'],
      pairs: [
        { l: 'Develops independence and life skills', r: 'Tích cực' }, { l: 'Increases demand for housing, pushing up rents', r: 'Tiêu cực' },
        { l: 'Greater freedom to pursue careers in other cities', r: 'Tích cực' }, { l: 'Higher risk of loneliness and mental health problems', r: 'Tiêu cực' },
      ] },
    { bloom: 'analyze', type: 'mcq', title: 'Tính nhất quán', instr: 'Thesis: *"This is a largely positive development."* Kết bài nào phù hợp?',
      items: [{ q: '', options: ['In conclusion, while living alone can cause loneliness, the independence it fosters makes it a positive trend overall.', 'In conclusion, living alone is a negative trend that governments should stop.', 'In conclusion, there are both advantages and disadvantages.'], a: 0 }] },
    { bloom: 'evaluate', type: 'mcq', title: 'Dàn ý nào tốt hơn?', instr: 'Đề: *Many museums now offer virtual tours online. Is this a positive or negative development?* Quan điểm: positive.',
      items: [{ q: '', options: [
        'Body 1: lợi ích (tiếp cận toàn cầu, giáo dục); Body 2: nhượng bộ (mất trải nghiệm thật) nhưng phản bác (tour ảo khơi gợi mong muốn đến thăm thật).',
        'Body 1: lịch sử bảo tàng; Body 2: các bảo tàng nổi tiếng thế giới.'], a: 0 }] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'Bài Positive or negative', prompt: 'In many countries, the number of people working from home is increasing. Is this a positive or negative development?\n\nWrite at least 250 words.', minWords: 250, focus: ['thái độ rõ', 'counter-argument', 'nhất quán'] },
  ],
},
{
  id: 't2k', n: 17, stage: 'task2', lessons: 'Lesson 17 · Causes – solutions · Lesson 18 · Causes – effects', title: 'Causes – Solutions & Causes – Effects',
  desc: 'Phân biệt nguyên nhân với hậu quả, và đảm bảo mỗi giải pháp nhắm đúng vào một nguyên nhân đã nêu.',
  theory: [
    { h: 'Causes – Solutions', p: ['Body 1: 2 nguyên nhân chính. Body 2: giải pháp **tương ứng** với từng nguyên nhân.', 'Giải pháp cụ thể: ai làm, làm gì, vì sao hiệu quả.'] },
    { h: 'Causes – Effects', p: ['Hậu quả phải là kết quả **logic** của xu hướng, không phải nguyên nhân viết lại.', 'Từ vựng: *stem from, be attributed to, give rise to, lead to, result in, as a consequence*.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Nguyên nhân hay hậu quả?', instr: 'Hiện tượng: *ngày càng ít người trẻ đọc sách*.', options: ['Cause', 'Effect'],
      pairs: [
        { l: 'The rise of short-form video entertainment', r: 'Cause' }, { l: 'Declining attention spans', r: 'Effect' },
        { l: 'Heavy academic workloads leave little free time', r: 'Cause' }, { l: 'Weaker vocabulary and writing skills', r: 'Effect' },
        { l: 'Fewer libraries in local communities', r: 'Cause' },
      ] },
    { bloom: 'understand', type: 'gap', title: 'Từ vựng nhân – quả', instr: 'Điền MỘT từ.',
      items: [
        { q: 'Obesity among children largely ___ from poor diets and inactivity.', a: ['stems', 'results'] },
        { q: 'Rising rents have given ___ to a housing crisis.', a: ['rise'] },
        { q: 'This trend can be ___ to the growth of remote work.', a: ['attributed'] },
        { q: 'As a ___, many small shops have closed.', a: ['consequence', 'result'] },
      ] },
    { bloom: 'apply', type: 'match', title: 'Ghép nguyên nhân – giải pháp', instr: 'Vấn đề: *nhiều người trẻ thất nghiệp dù có bằng đại học*.',
      pairs: [
        { l: 'University courses do not match employer needs', r: 'Universities partner with companies to design curricula and internships' },
        { l: 'Graduates lack practical experience', r: 'Compulsory work placements during degree programmes' },
        { l: 'Too many students choose the same few majors', r: 'Career guidance in secondary schools on in-demand fields' },
      ] },
    { bloom: 'analyze', type: 'mcq', title: 'Lỗi logic', instr: 'Đề: *Why are fewer people reading books? What are the effects?*',
      items: [
        { q: 'Câu "One effect is that people prefer watching videos." có vấn đề gì?', options: ['Đó là nguyên nhân, không phải hậu quả', 'Sai ngữ pháp', 'Không có vấn đề'], a: 0 },
        { q: 'Giải pháp "Governments should build more parks" cho vấn đề đọc sách:', options: ['Không liên quan nguyên nhân nào', 'Rất phù hợp'], a: 0 },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Đoạn hậu quả nào thuyết phục hơn?', instr: 'Xu hướng: *people moving from rural areas to cities*.',
      items: [{ q: '', options: [
        'One effect is that cities are big. Another effect is that villages are small. This is bad.',
        'One major consequence is the strain placed on urban infrastructure. As cities absorb thousands of newcomers each year, public transport and housing struggle to keep pace, leading to overcrowding and rising rents.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'Bài Causes – Effects', prompt: 'Fewer young people today are choosing to read books for pleasure. What are the causes of this, and what effects might it have on society?\n\nWrite at least 250 words.', minWords: 250, focus: ['phân biệt nhân – quả', 'từ vựng nhân quả', 'ví dụ'] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'Bài Causes – Solutions', prompt: 'In many cities, traffic congestion is getting worse. What are the causes of this problem, and what measures could be taken to solve it?\n\nWrite at least 250 words.', minWords: 250, focus: ['giải pháp khớp nguyên nhân', 'cụ thể'] },
  ],
},
{
  id: 't2l', n: 20, stage: 'task2', lessons: 'Lesson 20 · Phân tích bài · Lesson 21 · Check-list Task 2', title: 'Phân tích bài mẫu & check-list Task 2',
  desc: 'Đọc bài như giám khảo, rồi tự kiểm bài của mình bằng check-list trước khi nộp.',
  theory: [
    { h: 'Check-list Task 2', p: ['Đã trả lời **đủ mọi phần** của đề chưa?', 'Quan điểm có rõ trong mở bài và **nhất quán** đến kết bài?', 'Mỗi đoạn có **một ý chính** + giải thích + ví dụ?', 'Liên kết tự nhiên, không lạm dụng từ nối?', 'Collocation đúng, không dùng từ "risky"?', 'Có lỗi ngữ pháp, chính tả nào không? Đủ 250 từ?'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'order', title: 'Thứ tự phân tích một bài', instr: 'Sắp xếp các bước kiểm bài.',
      items: [{ words: 'check the thesis answers the question / check each body has one clear idea / check explanations and examples / check linking and vocabulary / check grammar and spelling' }] },
    { bloom: 'understand', type: 'match', title: 'Check-list cho bài này', instr: 'Đề: *Some people think governments should spend money on space exploration. Others think this money should be spent on problems on Earth. Discuss both views and give your opinion.*', options: ['Đạt', 'Chưa đạt'],
      passage: 'Space exploration is a very hot topic nowadays. Many countries spend lots of money on it.\n\nFirstly, space is interesting. Moreover, we can find new planets. Furthermore, technology develops.\n\nIn conclusion, space is good, but also we should help poor people and protect animals and build schools.',
      pairs: [
        { l: 'Bàn cả hai quan điểm', r: 'Chưa đạt' }, { l: 'Có quan điểm cá nhân rõ', r: 'Chưa đạt' },
        { l: 'Mỗi ý có giải thích + ví dụ', r: 'Chưa đạt' }, { l: 'Giọng văn học thuật', r: 'Chưa đạt' }, { l: 'Đủ 250 từ', r: 'Chưa đạt' },
      ] },
    { bloom: 'apply', type: 'rewrite', title: 'Sửa theo check-list', instr: 'Viết lại mở bài của bài trên để đạt check-list.',
      items: [{ q: 'Space exploration is a very hot topic nowadays. Many countries spend lots of money on it.', a: ['While some argue that public funds should support space exploration, others believe they should be used to tackle pressing problems on Earth. In my view, although space research brings long-term benefits, urgent issues at home deserve priority.'] }] },
    { bloom: 'analyze', type: 'mcq', title: 'Phân tích bài mẫu', instr: 'Đoạn: *"Granted, space research is costly. However, it has produced technologies we now rely on daily, such as satellite navigation and weather forecasting. Without such investment, these innovations might have taken decades longer to emerge."*',
      items: [
        { q: 'Chức năng của "Granted, space research is costly":', options: ['Nhượng bộ', 'Thesis', 'Ví dụ'], a: 0 },
        { q: '"satellite navigation and weather forecasting" là:', options: ['Ví dụ cụ thể', 'Kết luận'], a: 0 },
        { q: 'Câu cuối có vai trò:', options: ['Nêu hệ quả, củng cố lập luận', 'Giới thiệu ý mới không liên quan'], a: 0 },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Giám khảo cho band nào?', instr: 'Đánh giá Task Response của bài ở bài tập "Check-list cho bài này".',
      items: [{ q: '', options: ['Khoảng band 4–5: chỉ bàn một phía, ý không phát triển, kết bài thêm ý mới', 'Band 7: đủ ý', 'Band 8: rất tốt'], a: 0 }] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'Bài hoàn chỉnh + tự check-list', prompt: 'Some people think governments should spend money on space exploration. Others believe this money should be spent on solving problems on Earth. Discuss both views and give your own opinion.\n\nWrite at least 250 words. Sau khi viết, tự rà lại theo check-list trước khi bấm chấm.', minWords: 250, focus: ['check-list Task 2', 'discussion', 'quan điểm rõ'] },
  ],
},
]);
})();
