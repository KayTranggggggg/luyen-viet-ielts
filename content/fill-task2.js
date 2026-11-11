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
M('t2a', 'remember', 2, 'Tìm topic & task', 'Đề: *Some people think that children should start school at the age of four. To what extent do you agree or disagree?*', [
  ['Topic:', ['độ tuổi bắt đầu đi học (4 tuổi)', 'trẻ em nói chung'], 0], ['Task:', ['nêu mức độ đồng ý', 'thảo luận hai quan điểm'], 0]]);
M('t2a', 'remember', 3, 'Paraphrase sâu', 'Chọn paraphrase Mức 3.', [['*Children should start school at the age of four.*', ['Formal education ought to begin as early as four years old.', 'Children should start school at four years.', 'Kids must go to school at four.'], 0]]);
M('t2a', 'understand', 2, 'Dạng đề', 'Xác định dạng.', [['*Discuss both views and give your own opinion.*', ['Discussion', 'Opinion', 'Problem–Solution'], 0], ['*Do the advantages outweigh the disadvantages?*', ['Advantages outweigh', 'Causes–Effects'], 0]]);
M('t2a', 'understand', 3, 'Bẫy phạm vi', 'Đề: *Governments should spend more on public transport **than on roads**.*', [['Bài lạc đề nếu:', ['Chỉ nói lợi ích của giao thông công cộng mà không so sánh với đường sá', 'Có so sánh hai khoản chi'], 0]]);
G('t2a', 'apply', 1, 'Thesis cơ bản', 'Điền từ còn thiếu.', [['I completely ___ with this view.', 'agree'], ['This essay will ___ both sides.', ['discuss', 'examine']]]);
M('t2a', 'analyze', 1, 'Từ khoá trong đề', 'Đề: *Many young people now work from home.*', [['Từ khoá chính:', ['young people / work from home', 'many / now'], 0]]);
M('t2a', 'analyze', 3, 'Intro nào sai task?', 'Đề hỏi *To what extent do you agree?*', [['', ['This essay will discuss both views.', 'I largely agree that..., although...'], 0, 'Câu 1 không trả lời mức độ đồng ý.']]);
M('t2a', 'evaluate', 1, 'Intro đúng', '', [['', ['In this essay I will talk about it.', 'Some argue that four-year-olds should begin school, and I agree with this view.'], 1]]);
M('t2a', 'evaluate', 3, 'Introduction Band 8', 'Đề: early schooling at four.', [['', [
  'Nowadays, education is very important. Some people think children should start school at four. I agree.',
  'Whether formal schooling should begin as early as four is a matter of some debate. While early classroom exposure can build basic skills, I believe its potential to deprive children of play-based development outweighs these gains.',
  'Children should start school at four. This is a good idea.'], 1]]);
W('t2a', 3, 'Introduction cho 3 đề khó (Band 8)', 'Viết Introduction (2–3 câu mỗi đề) cho:\n\n1. *Some people believe that university education should focus on job skills rather than knowledge for its own sake. To what extent do you agree?*\n2. *In many cities, the number of people living alone is increasing. Is this a positive or negative development?*\n3. *Some say that international tourism brings more problems than benefits to local communities. Discuss both views and give your opinion.*', ['paraphrase sâu', 'thesis rõ mức độ', 'đúng dạng đề'], 120);

/* ===== t2b Đoạn thân bài 1 ý & 2 ý ===== */
M('t2b', 'remember', 2, 'Cấu trúc đoạn 1 ý', 'Thứ tự đúng:', [['', ['Topic sentence → Explanation → Example → (Link)', 'Example → Topic sentence → Conclusion'], 0]]);
M('t2b', 'remember', 3, 'Topic sentence Mức 3', 'Chọn topic sentence Mức 3.', [['', ['Firstly, working from home is good.', 'The most compelling argument for remote work lies in its capacity to eliminate the hours lost to daily commuting.', 'Working from home has many benefits.'], 1]]);
M('t2b', 'understand', 2, 'Vai trò câu', '*For instance, a typical Hanoi worker spends nearly two hours a day in traffic.*', [['', ['Example', 'Topic sentence'], 0]]);
M('t2b', 'understand', 3, 'Đoạn 2 ý', 'Đoạn 2 ý cần:', [['', ['Hai ý ngang hàng, mỗi ý có giải thích ngắn; câu chuyển ý rõ', 'Hai ý, chỉ ý đầu có giải thích'], 0]]);
G('t2b', 'apply', 1, 'Từ dẫn ví dụ', 'Điền cụm.', [['___ example, many students work part-time.', 'for'], ['This is ___ it saves time.', 'because']]);
M('t2b', 'analyze', 1, 'Câu nào lạc ý?', 'Topic: remote work saves commuting time.', [['', ['Many offices have nice canteens.', 'Employees avoid long journeys in heavy traffic.'], 0]]);
M('t2b', 'analyze', 3, 'Mối liên hệ ý', 'Câu: *This saved time can then be invested in exercise or family, which in turn improves productivity.*', [['Câu này thực hiện:', ['phát triển ý theo chuỗi hệ quả (chain of consequences)', 'đưa ví dụ'], 0]]);
M('t2b', 'evaluate', 1, 'Topic sentence tốt hơn', '', [['', ['There are many reasons.', 'Remote work allows employees to avoid stressful commutes.'], 1]]);
M('t2b', 'evaluate', 3, 'Đoạn nào Band 8?', '', [['', [
  'Remote work is good. It saves time. For example, people do not drive. So it is good.',
  'Perhaps the strongest case for remote work is the time it frees up. Freed from lengthy commutes, employees can devote those hours to rest or family, which tends to make them more focused when they do work. In large cities such as Jakarta, where a round trip can exceed two hours, this gain is far from trivial.'], 1]]);

/* ===== t2c Opinion & The only way ===== */
M('t2c', 'remember', 2, 'Thesis các mức', 'Chọn thesis "partly agree".', [['', ['While I accept that..., I do not believe that...', 'I totally agree.', 'I totally disagree.'], 0]]);
M('t2c', 'remember', 3, '"The only way" – No!', 'Thesis Mức 3 cho: *Raising fuel prices is the only way to reduce traffic.*', [['', ['Although higher fuel prices may deter some drivers, I believe they are neither the sole nor the most effective way of easing congestion.', 'I agree that raising fuel prices is the only way.', 'Fuel prices are high.'], 0]]);
M('t2c', 'understand', 2, 'Cấu trúc bài The only way', '', [['Body 1 thường:', ['thừa nhận giải pháp X có hiệu quả nhất định', 'liệt kê tất cả giải pháp khác'], 0], ['Body 2:', ['đưa ra giải pháp thay thế tốt hơn/bổ sung', 'nhắc lại Body 1'], 0]]);
M('t2c', 'understand', 3, 'Vì sao tránh tuyệt đối?', '', [['Câu *Fuel prices will definitely stop everyone from driving* bị trừ vì:', ['khẳng định tuyệt đối, thiếu cơ sở (overgeneralisation)', 'sai ngữ pháp'], 0]]);
G('t2c', 'apply', 1, 'Thể hiện quan điểm', 'Điền một từ.', [['In my ___, schools should ban phones.', ['opinion', 'view']], ['I strongly ___ that cycling should be encouraged.', ['believe', 'feel']]]);
M('t2c', 'analyze', 1, 'Thesis là câu nào?', '', [['', ['I believe that this policy is unfair.', 'Many cities have this policy.'], 0]]);
M('t2c', 'analyze', 3, 'Bài có nhất quán?', 'Intro: *I completely disagree.* Kết luận: *In some cases, it may be the best way.*', [['', ['Không nhất quán — mâu thuẫn quan điểm', 'Nhất quán'], 0]]);
M('t2c', 'evaluate', 1, 'Thesis rõ ràng', '', [['', ['I think maybe it is good and bad.', 'I agree that this policy would benefit society.'], 1]]);
M('t2c', 'evaluate', 3, 'Kết luận The only way tốt nhất', '', [['', [
  'In conclusion, raising fuel prices is the only way.',
  'In conclusion, while higher fuel prices might discourage some unnecessary journeys, congestion can be tackled far more effectively by combining reliable public transport with smarter urban planning.'], 1]]);
W('t2c', 3, 'Opinion: "the only way" (Band 8)', E('Some people believe that the only way to improve public health is to tax unhealthy food and drinks heavily. To what extent do you agree or disagree?'), ['thesis "No" có nhượng bộ', 'giải pháp thay thế', 'hedging']);

/* ===== t2d Discussion & Advantages outweigh ===== */
M('t2d', 'remember', 2, 'Cụm trình bày quan điểm người khác', 'Chọn câu đúng.', [['', ['Those in favour of online learning argue that it is flexible.', 'Those in favour of online learning argues that it is flexible.'], 0]]);
M('t2d', 'remember', 3, 'Câu chuyển quan điểm Mức 3', 'Chọn câu Mức 3.', [['', ['Opponents, however, contend that the absence of face-to-face contact undermines motivation.', 'But other people think it is bad.'], 0]]);
M('t2d', 'understand', 2, 'Cấu trúc Discussion', '', [['Ý kiến cá nhân nên xuất hiện:', ['ở Intro, (Body 2 nếu đồng ý) và Conclusion', 'chỉ ở Conclusion'], 0]]);
M('t2d', 'understand', 3, 'Advantages outweigh', 'Bài *Do advantages outweigh disadvantages?* cần:', [['', ['so sánh trọng số và nêu rõ bên nào nặng hơn', 'chỉ liệt kê ưu và nhược'], 0]]);
G('t2d', 'apply', 1, 'Từ nối hai phía', 'Điền một từ.', [['On the one ___, cars are convenient.', 'hand'], ['On the ___ hand, they pollute the air.', 'other']]);
M('t2d', 'analyze', 1, 'Phía nào?', 'Đề: *Some think online learning is better; others prefer classrooms.*', [['*Students can study at any time.* ủng hộ:', ['online learning', 'classrooms'], 0]]);
M('t2d', 'analyze', 3, 'Lỗi Discussion', 'Bài chỉ phát triển quan điểm mình đồng ý, quan điểm còn lại 1 câu.', [['', ['Mất cân đối → Task Response không quá 6', 'Không sao'], 0]]);
M('t2d', 'evaluate', 1, 'Câu đúng', '', [['', ['Some people believe that tourism helps the economy.', 'Some people believes that tourism help the economy.'], 0]]);
M('t2d', 'evaluate', 3, 'Thesis Advantages outweigh tốt nhất', '', [['', ['There are advantages and disadvantages.', 'Although the drawbacks of living alone are real, I would argue that the independence and personal growth it offers far outweigh them.'], 1]]);

/* ===== t2e Problems – Solutions ===== */
M('t2e', 'remember', 2, 'Ngôn ngữ giải pháp', 'Chọn câu đúng.', [['', ['One effective solution would be to introduce congestion charges.', 'One effective solution would be introduce congestion charges.'], 0]]);
M('t2e', 'remember', 3, 'Câu giải pháp Mức 3', 'Chọn câu Mức 3.', [['', ['Were local authorities to subsidise rooftop solar panels, households could cut both their bills and their emissions.', 'The government should give money for solar panels.'], 0]]);
M('t2e', 'understand', 2, 'Giải pháp khớp vấn đề', 'Vấn đề: *young people cannot afford housing*.', [['Giải pháp khớp:', ['xây nhà ở xã hội giá thấp cho người thu nhập thấp', 'trồng thêm cây xanh'], 0]]);
M('t2e', 'understand', 3, 'Câu hỏi 2 phần', 'Đề: *Why is this happening? What can be done?*', [['', ['Mỗi phần một đoạn thân bài, trả lời đủ cả hai', 'Chỉ trả lời câu hỏi đầu chi tiết'], 0]]);
G('t2e', 'apply', 1, 'Should / could', 'Điền modal.', [['The government ___ build more parks.', ['should', 'could']], ['This ___ help reduce stress.', ['could', 'may', 'can', 'might']]]);
M('t2e', 'analyze', 1, 'Vấn đề hay giải pháp?', '', [['*Traffic jams waste time.*', ['vấn đề', 'giải pháp'], 0], ['*Cities could expand metro lines.*', ['giải pháp', 'vấn đề'], 0]]);
M('t2e', 'analyze', 3, 'Giải pháp có khả thi?', 'Vấn đề: obesity among children.', [['Giải pháp yếu nhất:', ['Ban all food advertising worldwide immediately.', 'Require schools to provide daily physical education.'], 0, 'Phi thực tế, quá tuyệt đối.']]);
M('t2e', 'evaluate', 1, 'Câu đúng', '', [['', ['A solution is to plant more trees.', 'A solution is plant more trees.'], 0]]);
M('t2e', 'evaluate', 3, 'Đoạn giải pháp Band 8', '', [['', [
  'The government should do something. For example, make laws.',
  'The most practical remedy would be for city authorities to expand affordable rental housing near major employment hubs. By doing so, they would not only ease the financial strain on young workers but also shorten commutes, as has been seen in Vienna\'s long-running social housing programme.'], 1]]);

/* ===== t2f CC, LR, GRA ===== */
M('t2f', 'remember', 2, 'Collocation', 'Chọn collocation đúng.', [['', ['pose a threat', 'make a threat to the environment'], 0], ['', ['raise awareness', 'rise awareness'], 0]]);
M('t2f', 'remember', 3, 'Từ vựng Mức 3', 'Chọn cách diễn đạt Mức 3 cho *very bad effects*.', [['', ['detrimental consequences', 'very very bad effects', 'bad thing'], 0]]);
M('t2f', 'understand', 2, 'Referencing (CC)', '*Many cities have banned cars from their centres. **This measure** has reduced pollution.*', [['*This measure* thay cho:', ['việc cấm ô tô vào trung tâm', 'ô nhiễm'], 0]]);
M('t2f', 'understand', 3, 'Lỗi CC', 'Đoạn có Firstly, Secondly, Thirdly, Moreover, Furthermore, In addition trong 6 câu.', [['', ['Lạm dụng từ nối máy móc — CC không quá 6', 'CC tốt'], 0]]);
G('t2f', 'apply', 1, 'Từ đồng nghĩa', 'Điền từ đồng nghĩa với từ trong ngoặc.', [['This is an ___ (important) issue.', ['significant', 'major', 'crucial', 'key']], ['Many people ___ (think) that...', ['believe', 'argue', 'feel']]]);
M('t2f', 'analyze', 1, 'Tiêu chí nào?', '', [['Lỗi chia động từ thuộc:', ['GRA', 'LR', 'CC'], 0], ['Sai collocation thuộc:', ['LR', 'TR'], 0]]);
M('t2f', 'analyze', 3, 'Câu nào nâng được cả 3 tiêu chí?', '', [['', ['Moreover, pollution is very bad for people.', 'Compounding this problem is the fact that air pollution, if left unchecked, poses a serious threat to public health.'], 1]]);
M('t2f', 'evaluate', 1, 'Câu đúng', '', [['', ['Pollution has a negative impact on health.', 'Pollution has a negative impact to health.'], 0]]);
W('t2f', 3, 'Bài hoàn chỉnh tập trung CC – LR – GRA (Band 8)', E('Some people think that cities should invest in large parks and green spaces, while others believe the money should be spent on housing. Discuss both views and give your own opinion.'), ['referencing thay từ nối', 'collocation chính xác', 'đa dạng câu phức']);

/* ===== t2g Counter-argument ===== */
M('t2g', 'remember', 2, 'Cụm nhượng bộ', 'Chọn câu đúng.', [['', ['Admittedly, uniforms can be expensive.', 'Admittedly that uniforms can be expensive.'], 0]]);
M('t2g', 'remember', 3, 'Phản bác Mức 3', 'Chọn câu phản bác Mức 3.', [['', ['This argument, however, overlooks the fact that most families already spend more on everyday clothing.', 'But this is wrong.'], 0]]);
M('t2g', 'understand', 2, 'Cấu trúc đoạn counter', '', [['', ['Nhượng bộ quan điểm đối lập → phản bác → khẳng định lại quan điểm', 'Chỉ nêu quan điểm đối lập'], 0]]);
M('t2g', 'understand', 3, 'Vì sao counter giúp TR?', '', [['', ['Chứng tỏ xem xét nhiều phía, lập luận chặt hơn', 'Tăng số từ'], 0]]);
G('t2g', 'apply', 1, 'Nhượng bộ – phản bác', 'Điền một từ.', [['It is ___ that phones can distract students. However, ...', 'true'], ['___, this view ignores...', ['however', 'nevertheless']]]);
M('t2g', 'analyze', 1, 'Câu nào nhượng bộ?', '', [['', ['Some may argue that homework is stressful.', 'Homework should be banned.'], 0]]);
M('t2g', 'analyze', 3, 'Phản bác có yếu không?', 'Nhượng bộ: *Uniforms limit self-expression.* Phản bác: *But uniforms are nice.*', [['', ['Yếu – không trả lời trực tiếp luận điểm', 'Mạnh'], 0]]);
M('t2g', 'evaluate', 1, 'Câu đúng', '', [['', ['Although some people disagree, I believe it is useful.', 'Although some people disagree but I believe it is useful.'], 0]]);

/* ===== t2h Big no-nos ===== */
M('t2h', 'remember', 2, 'No-no: ngôn ngữ', 'Chọn câu vi phạm no-no.', [['', ['Kids wanna play games a lot.', 'Children often want to play video games.'], 0], ['', ['etc.', 'such as reading and swimming'], 0]]);
M('t2h', 'remember', 3, 'No-no tinh vi', 'Chọn câu vi phạm.', [['', ['As everyone knows, all teenagers are addicted to their phones.', 'Many teenagers appear to spend excessive time on their phones.'], 0, 'Khái quát hoá tuyệt đối.']]);
M('t2h', 'understand', 2, 'Vì sao là no-no?', '*In my country, Vietnam, my uncle said that...*', [['', ['Ví dụ cá nhân thiếu tính khái quát', 'Sai ngữ pháp'], 0]]);
M('t2h', 'understand', 3, 'No-no: câu hỏi tu từ', '*Who does not want a better life?*', [['', ['Câu hỏi tu từ – tránh trong văn học thuật IELTS', 'Câu hay, nên dùng nhiều'], 0]]);
G('t2h', 'apply', 1, 'Viết đầy đủ', 'Viết dạng đầy đủ (không viết tắt).', [['don\'t → ___', ['do not']], ['it\'s → ___', ['it is', 'it has']]]);
R('t2h', 'apply', 3, 'Sửa no-nos thành câu Band 8', 'Viết lại, loại bỏ mọi no-no.', [
  ['Nowadays, as we all know, everybody uses social media a lot and it\'s really really bad, right?', 'The widespread use of social media has raised serious concerns about its effects on mental health.'],
  ['In my opinion I think that kids wanna have fun and stuff.', 'I believe that children have a natural desire for play and leisure.']]);
M('t2h', 'analyze', 1, 'Đếm no-no', '*Nowadays, kids don\'t read books, etc.*', [['Có bao nhiêu no-no?', ['3 (nowadays mở bài sáo rỗng, don\'t, etc.)', '0'], 0]]);
M('t2h', 'evaluate', 1, 'Câu học thuật hơn', '', [['', ['Lots of people like it.', 'Many people enjoy it.'], 1]]);
M('t2h', 'evaluate', 3, 'Kết luận sạch no-no', '', [['', [
  'In conclusion, I think that, as I said, it\'s good and bad, etc.',
  'In conclusion, although social media can foster connection, its tendency to encourage constant comparison means its overall impact on young people is largely negative.'], 1]]);
W('t2h', 3, 'Bài Opinion không một no-no (Band 8)', E('Some people believe that children today have too much free time and should spend more of it on structured activities. To what extent do you agree or disagree?'), ['0 no-no (viết tắt, etc., câu hỏi tu từ, khái quát tuyệt đối...)', 'ví dụ khái quát', 'giọng học thuật']);

/* ===== t2i Should / A better than B / each group ===== */
M('t2i', 'remember', 2, 'Thesis dạng Should', 'Chọn thesis đúng.', [['*Should museums be free?*', ['I believe museums should be free for students and the elderly, although others may reasonably pay a small fee.', 'Museums are buildings.'], 0]]);
M('t2i', 'remember', 3, '"Each is better for a certain group"', 'Chọn thesis Mức 3.', [['*Is it better to live in a city or the countryside?*', ['In my view, neither option is universally superior: city life better suits young professionals, whereas the countryside is preferable for families with young children.', 'City is better.'], 0]]);
M('t2i', 'understand', 2, 'A better than B', 'Bài *Is A better than B?* phải:', [['', ['so sánh trực tiếp A với B', 'chỉ mô tả A'], 0]]);
M('t2i', 'understand', 3, 'Chia nhóm', 'Lợi thế của cách "each is better for a group":', [['', ['tránh khẳng định tuyệt đối, lập luận tinh tế', 'tránh phải nêu quan điểm'], 0]]);
G('t2i', 'apply', 1, 'Better / than', 'Điền một từ.', [['Living in a city is ___ for young people.', 'better'], ['Trains are better ___ buses for long trips.', 'than']]);
M('t2i', 'analyze', 1, 'Dạng nào?', '*Should all schools teach coding?*', [['', ['Should', 'A better than B'], 0]]);
M('t2i', 'analyze', 3, 'Chia nhóm có hợp lý?', 'Đề: *Is it better to study alone or in a group?*', [['', ['Học một mình phù hợp môn cần ghi nhớ; học nhóm phù hợp môn cần thảo luận', 'Người cao vs người thấp'], 0]]);
M('t2i', 'evaluate', 1, 'Câu đúng', '', [['', ['Living in the countryside is more peaceful than living in a city.', 'Living in the countryside is peacefuller than a city.'], 0]]);
M('t2i', 'evaluate', 3, 'Thesis A better than B tốt nhất', '', [['', ['Both are good.', 'While online shopping offers unmatched convenience, I believe buying from local shops is more beneficial overall, as it sustains community businesses and reduces packaging waste.'], 1]]);

/* ===== t2j Positive or negative ===== */
M('t2j', 'remember', 2, 'Thesis Positive/negative', 'Chọn thesis đúng.', [['', ['I believe this is largely a positive development.', 'This development is about people.'], 0]]);
M('t2j', 'remember', 3, 'Thesis chia nhóm Mức 3', 'Chọn thesis Mức 3.', [['*More people live alone.*', ['This trend is positive for young professionals seeking independence, but potentially negative for the elderly, who risk isolation.', 'It is positive and negative.'], 0]]);
M('t2j', 'understand', 2, 'Cấu trúc', 'Nếu thesis là "mostly positive":', [['', ['Body 1: mặt tiêu cực (nhượng bộ ngắn); Body 2: mặt tích cực (mạnh hơn)', 'Chỉ viết mặt tích cực, không nhắc tiêu cực'], 0]]);
M('t2j', 'understand', 3, 'Phân biệt với Adv–Disadv', '', [['Positive or negative khác Advantages outweigh ở chỗ:', ['hỏi đánh giá tổng thể một xu hướng đang diễn ra', 'không cần nêu quan điểm'], 0]]);
G('t2j', 'apply', 1, 'Positive / negative', 'Điền từ.', [['This is a ___ development because it helps the environment.', 'positive'], ['It has a ___ effect on health.', ['negative', 'harmful', 'detrimental']]]);
R('t2j', 'apply', 3, 'Câu đánh giá Mức 3', 'Viết lại thành câu đánh giá có điều kiện, tránh tuyệt đối.', [
  ['Working from home is good.', 'Working from home is a largely positive development, provided that employees maintain clear boundaries between work and personal life.']]);
M('t2j', 'analyze', 1, 'Positive hay negative?', 'Xu hướng: *more people cycle to work*.', [['*Less air pollution*', ['positive', 'negative'], 0]]);
M('t2j', 'analyze', 3, 'Lập luận nào mạnh hơn?', '', [['', ['Living alone is bad because people are lonely.', 'Living alone may heighten the risk of isolation among older adults, particularly where family support networks have weakened.'], 1]]);
M('t2j', 'evaluate', 1, 'Câu đúng', '', [['', ['This trend has many positive effects.', 'This trend has many positive affect.'], 0]]);
M('t2j', 'evaluate', 3, 'Kết luận tốt nhất', '', [['', ['In conclusion, it is positive.', 'In conclusion, while the rise in solo living carries social risks for vulnerable groups, it is, on balance, a positive reflection of greater personal freedom and financial independence.'], 1]]);

/* ===== t2k Causes – Solutions / Effects ===== */
M('t2k', 'remember', 2, 'Ngôn ngữ nguyên nhân', 'Chọn câu đúng.', [['', ['This is largely due to rising living costs.', 'This is largely due to living costs rise.'], 0]]);
M('t2k', 'remember', 3, 'Nhân quả Mức 3', 'Chọn câu Mức 3.', [['', ['The decline in birth rates can be attributed primarily to the soaring cost of raising children in urban areas.', 'People have fewer babies because it costs money.'], 0]]);
M('t2k', 'understand', 2, 'Causes hay effects?', 'Chủ đề: *more people moving to cities*.', [['*Overcrowded housing*', ['effect', 'cause'], 0], ['*Better job opportunities*', ['cause', 'effect'], 0]]);
M('t2k', 'understand', 3, 'Chuỗi nhân quả', '*Rising rents → young people live with parents → delayed marriage.*', [['Delayed marriage là:', ['hệ quả gián tiếp (cấp 2)', 'nguyên nhân'], 0]]);
G('t2k', 'apply', 1, 'Từ nhân quả', 'Điền một từ.', [['___ a result, many people moved.', 'as'], ['This leads ___ more traffic.', 'to']]);
M('t2k', 'analyze', 1, 'Nguyên nhân nào?', 'Vấn đề: *obesity in children*.', [['', ['too much fast food', 'more parks'], 0]]);
M('t2k', 'analyze', 3, 'Nguyên nhân sâu xa', 'Vấn đề: *teenagers sleep less*.', [['Nguyên nhân sâu xa nhất:', ['áp lực học tập + thiết kế ứng dụng gây nghiện', 'đồng hồ báo thức'], 0]]);
M('t2k', 'evaluate', 1, 'Câu đúng', '', [['', ['Pollution causes many diseases.', 'Pollution cause many diseases.'], 0]]);
M('t2k', 'evaluate', 3, 'Đoạn Causes tốt nhất', '', [['', [
  'There are many causes. Firstly, money. Secondly, time.',
  'The principal driver of this trend is economic. As housing and childcare costs in major cities have outpaced wage growth, many couples feel compelled to postpone parenthood until they achieve financial stability.'], 1]]);

/* ===== t2l Phân tích bài mẫu & check-list ===== */
M('t2l', 'remember', 2, 'Check-list TR', 'Mục nào thuộc check-list Task Response?', [['', ['Trả lời đủ mọi phần của đề', 'Dùng từ khó'], 0]]);
M('t2l', 'remember', 3, 'Check-list Mức 3', 'Mục nào giúp lên Band 8?', [['', ['Mỗi luận điểm được phát triển đến hệ quả cụ thể, không chung chung', 'Đủ 250 từ'], 0]]);
M('t2l', 'understand', 2, 'Chức năng đoạn', 'Đoạn cuối bài mẫu tóm tắt và nhắc lại quan điểm. Đó là:', [['', ['Conclusion', 'Body 2'], 0]]);
M('t2l', 'understand', 3, 'Nhận diện kỹ thuật bài mẫu', '*Compounding this is the fact that...*', [['Kỹ thuật:', ['liên kết học thuật thay từ nối', 'câu hỏi tu từ'], 0]]);
G('t2l', 'apply', 1, 'Tự soát', 'Điền từ.', [['Mỗi đoạn thân bài cần một ___ sentence.', 'topic'], ['Bài Task 2 tối thiểu ___ từ.', '250']]);
R('t2l', 'apply', 3, 'Nâng câu theo check-list', 'Viết lại cho đạt check-list Band 8 (cụ thể, có hệ quả, không tuyệt đối).', [
  ['Technology is bad for children.', 'Excessive screen time may impair young children\'s concentration, particularly when it displaces physical play.']]);
M('t2l', 'analyze', 1, 'Thiếu phần nào?', 'Bài có Intro, Body 1, Body 2.', [['', ['Conclusion', 'Topic'], 0]]);
M('t2l', 'analyze', 3, 'Bài mẫu yếu ở đâu?', 'Body 2 nêu 3 ý, mỗi ý 1 câu.', [['', ['Ý dàn trải, không phát triển sâu', 'Quá sâu'], 0]]);
M('t2l', 'evaluate', 1, 'Câu đúng', '', [['', ['To sum up, I agree with this idea.', 'To sum up, I am agree with this idea.'], 0]]);

/* ===== t2m The best / The most ===== */
M('t2m', 'remember', 2, 'Thesis "The best" – No', 'Chọn thesis đúng.', [['*The best way to learn a language is to live abroad.*', ['Although living abroad helps, I do not think it is the best way for most learners.', 'Living abroad is a way.'], 0]]);
M('t2m', 'remember', 3, 'Thesis "The best" – Yes Mức 3', 'Chọn thesis Mức 3.', [['', ['I would argue that immersion abroad is indeed the most effective route to fluency, as no classroom can replicate the constant, authentic exposure it provides.', 'Yes, it is the best.'], 0]]);
M('t2m', 'understand', 2, 'Cấu trúc Yes', 'Bài hướng Yes nên:', [['', ['So sánh với các cách khác để chứng minh là "tốt nhất"', 'Chỉ nêu ưu điểm của cách đó'], 0]]);
M('t2m', 'understand', 3, 'Bẫy "the most"', 'Đề: *The most important quality of a teacher is patience.*', [['', ['Phải lập luận vì sao nó quan trọng NHẤT, hơn các phẩm chất khác', 'Chỉ cần nói patience quan trọng'], 0]]);
G('t2m', 'apply', 1, 'So sánh nhất', 'Điền dạng đúng.', [['This is the ___ (good) way.', 'best'], ['Patience is the ___ (important) quality.', 'most important']]);
M('t2m', 'analyze', 1, 'Dạng đề', '*The best way to reduce crime is longer prison sentences.*', [['', ['The best – Opinion', 'Discussion'], 0]]);
M('t2m', 'analyze', 3, 'Lập luận Yes có đủ?', 'Body chỉ nêu lợi ích của sống ở nước ngoài.', [['', ['Chưa đủ — thiếu so sánh với cách khác (lớp học, app)', 'Đủ'], 0]]);
M('t2m', 'evaluate', 1, 'Câu đúng', '', [['', ['It is the most effective way.', 'It is the most effectivest way.'], 0]]);
M('t2m', 'evaluate', 3, 'Kết luận "The best" tốt nhất', '', [['', [
  'In conclusion, it is the best way.',
  'In conclusion, although longer sentences may deter some offenders, early education and community programmes tackle the root causes of crime and are therefore a far more effective approach.'], 1]]);
})();
