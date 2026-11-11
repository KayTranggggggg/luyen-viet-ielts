/* Task 2 viết tay: đoạn thân bài 1 ý / 2 ý (t2b) và counter-argument (t2g). Tự soạn. */
KL_BANK(`
@t2b
#remember 2 gap Nhớ lại: cấu trúc đoạn 1 ý | Điền 1–2 từ (tiếng Anh hoặc tiếng Việt).
Thành phần đầu tiên của đoạn thân bài là topic ___. = sentence
Sau topic sentence là phần ___ (giải thích vì sao). = explanation / giải thích / explain
Câu cuối đoạn là mini-___. = conclusion
#remember 2 gap Nhớ lại: đoạn 2 ý | Điền 1–2 từ.
Topic sentence của đoạn 2 ý phải bao quát ___ ý. = cả hai / hai / both / 2
Trong đoạn 2 ý, mỗi ý được giải thích ___ hơn so với đoạn 1 ý. = ngắn / ngắn gọn / briefly
Ví dụ trong Task 2 nên mang tính ___, có thể kiểm chứng. = khái quát / chung / general
#remember 3 mcq Nhớ lại: phát triển ý (Mức 3) | Chọn đáp án đúng.
Band 7 Task Response mô tả ý chính thế nào? :: +Được mở rộng và hỗ trợ, dù có thể hơi khái quát hoá || Phải có số liệu thống kê thật || Phải có ít nhất 3 ý mỗi đoạn ## Band 8: "well extended and supported".
"Some main ideas are underdeveloped" là đặc điểm của: :: +Band 6 || Band 8 || Band 9
Cách phát triển một ý sâu hơn: :: +Giải thích cơ chế (vì sao/như thế nào) và hệ quả, rồi đưa ví dụ khớp || Thêm nhiều ý khác vào cùng đoạn || Lặp lại ý bằng từ đồng nghĩa
#apply 1 rewrite Viết topic sentence theo khung | Viết topic sentence cho đoạn, dùng khung "One major benefit of ... is that ...".
Ý của đoạn: làm việc từ xa giúp nhân viên tiết kiệm thời gian đi lại. => One major benefit of remote working is that employees save time on commuting.
Ý của đoạn: học online giúp người ở vùng xa tiếp cận khoá học tốt. => One major benefit of online learning is that people in remote areas can access high-quality courses.
#apply 3 rewrite Biến câu khẳng định thành chuỗi giải thích (Mức 3) | Viết lại thành 2 câu: luận điểm + giải thích cơ chế/hệ quả. Không bắt buộc giống mẫu.
Cycle lanes are good for cities. => Dedicated cycle lanes make cycling safer, which encourages more people to leave their cars at home. This, in turn, reduces both congestion and air pollution in city centres.
Free museums help society. => Free admission removes a financial barrier for low-income families. As a result, more children are exposed to art and history, which can broaden their education beyond the classroom.
`);
(function () {
const U = id => window.UNITS.find(u => u.id === id);
const I = (q, o, w, ex) => ({ q, options: o, a: 0, why: { q: 'Vì sao?', options: w, a: 0 }, ex: ex || '' });
const S = (id, bloom, lv, title, items) => U(id).exercises.push({ bloom, lv, type: 'mcq2', title, instr: 'Tầng 1: chọn phương án. Tầng 2: chọn lý do. Đúng cả hai tầng mới được điểm đủ.', items });

S('t2b', 'understand', 2, 'Topic sentence bao quát đoạn', [
  I('Đoạn bàn về: học sinh mặc đồng phục → giảm áp lực thời trang VÀ tăng tinh thần tập thể. Topic sentence nào phù hợp?',
    ['School uniforms reduce pressure to follow fashion and strengthen a sense of belonging.', 'School uniforms reduce pressure to follow fashion.'],
    ['Topic sentence phải báo trước cả hai ý của đoạn', 'Topic sentence càng ngắn càng tốt', 'Topic sentence phải có ví dụ'], 'Topic sentence chỉ nêu 1 ý trong khi đoạn có 2 ý khiến người đọc bất ngờ ở nửa sau.'),
  I('Đoạn 1 ý về: giờ làm linh hoạt giúp cha mẹ chăm con. Câu nào là topic sentence tốt hơn?',
    ['Flexible working hours allow parents to balance their jobs with childcare.', 'There are many advantages of flexible working hours for many people.'],
    ['Câu được chọn nêu cụ thể một ý sẽ được phát triển', 'Câu được chọn dài hơn', 'Câu chung chung an toàn hơn'], 'Topic sentence chung chung khiến đoạn thiếu định hướng.'),
]);
S('t2b', 'understand', 3, 'Giải thích hay chỉ khẳng định? (Mức 3)', [
  I('Câu tiếp theo sau "Online learning gives students more flexibility." — câu nào phát triển ý tốt hơn?',
    ['This allows those with part-time jobs to study at times that suit them, so they are less likely to drop out.', 'This is very good for students and it is a great advantage.'],
    ['Câu được chọn giải thích cơ chế và hệ quả; câu kia chỉ nhắc lại đánh giá', 'Câu được chọn có từ "so"', 'Câu kia ngắn hơn nên kém hơn'], 'Band 6 TR: "some main ideas are underdeveloped" — thường do chỉ khẳng định mà không giải thích.'),
  I('Ví dụ nào phù hợp hơn cho ý "Taxing sugary drinks can reduce consumption"?',
    ['In several countries that introduced such taxes, sales of sugary drinks fell noticeably within a few years.', 'My uncle stopped drinking cola last year because he wanted to lose weight.'],
    ['Ví dụ khái quát, liên quan trực tiếp đến chính sách thuế', 'Ví dụ cá nhân luôn bị cấm', 'Ví dụ phải có số liệu chính xác đến hàng đơn vị'], 'Ví dụ cá nhân không bị cấm, nhưng ví dụ này không liên quan đến thuế.'),
]);
S('t2b', 'understand', 3, 'Đoạn 2 ý: cân đối và liên kết (Mức 3)', [
  I('Đoạn 2 ý về lợi ích của công viên đô thị (sức khoẻ + gắn kết cộng đồng). Cách chuyển sang ý 2 nào tốt hơn?',
    ['Beyond these health benefits, parks also bring neighbours together through shared spaces and events.', 'Secondly, community.'],
    ['Câu chuyển ý có tham chiếu ý trước (these health benefits) và nêu rõ ý mới', 'Phải dùng Secondly để rõ ràng', 'Câu chuyển ý càng ngắn càng mạch lạc'], 'Band 7 CC: dùng tham chiếu và thay thế linh hoạt.'),
  I('Đoạn 2 ý: ý 1 có 5 câu, ý 2 chỉ có 1 câu. Vấn đề là gì?',
    ['Mất cân đối: ý 2 gần như không được phát triển.', 'Không có vấn đề vì đã nêu đủ 2 ý.'],
    ['Mỗi ý cần ít nhất giải thích ngắn; ý chỉ được nêu tên là chưa phát triển', 'Đoạn 2 ý không cần giải thích', 'Ý quan trọng hơn mới cần giải thích'], ''),
]);
S('t2b', 'analyze', 2, 'Chẩn đoán đoạn thân bài', [
  I('Đoạn: "Public transport should be free. Firstly, it is cheap. Secondly, it is good. Thirdly, people like it."',
    ['Liệt kê nhiều ý mà không giải thích ý nào.', 'Sai ngữ pháp nghiêm trọng.'],
    ['Đoạn thân bài cần phát triển ý, không chỉ liệt kê', 'Không được dùng Firstly', 'Đoạn quá ngắn về số từ'], 'Band 5 TR: ý hạn chế, chưa phát triển, có lặp.'),
  I('Đoạn có topic sentence về giáo dục nhưng ví dụ lại nói về giao thông.',
    ['Ví dụ không khớp ý chính (relevance).', 'Thiếu từ nối.'],
    ['Ví dụ phải minh hoạ trực tiếp cho luận điểm', 'Ví dụ nên đa dạng chủ đề', 'Chỉ cần thêm "For example"'], ''),
]);
S('t2b', 'analyze', 3, 'Chẩn đoán đoạn (Mức 3)', [
  I('Đoạn kết thúc bằng: "Therefore, governments should also invest in space exploration." (đoạn đang bàn về y tế công cộng)',
    ['Câu chốt lạc ý, đưa ý mới không liên quan.', 'Câu chốt đúng chức năng.'],
    ['Mini-conclusion phải quay về luận điểm của đoạn', 'Câu chốt nên mở hướng mới', 'Câu chốt phải có số liệu'], ''),
  I('Đoạn: "Technology improves education. For example, many schools use tablets. Technology improves education."',
    ['Lập luận vòng tròn: thiếu giải thích, câu chốt lặp nguyên topic sentence.', 'Đoạn hoàn chỉnh vì có ví dụ.'],
    ['Thiếu khâu giải thích "vì sao/như thế nào"', 'Ví dụ về tablet là sai', 'Không được lặp từ "technology"'], 'Ví dụ chưa cho thấy tablet cải thiện việc học như thế nào.'),
]);
S('t2b', 'analyze', 3, 'Ví dụ có hỗ trợ ý không? (Mức 3)', [
  I('Ý: "Working from home can reduce traffic congestion." Ví dụ: "Many people enjoy working in pyjamas."',
    ['Ví dụ không chứng minh ý (không liên quan đến giao thông).', 'Ví dụ phù hợp vì nói về làm việc ở nhà.'],
    ['Ví dụ phải chứng minh đúng mệnh đề của luận điểm', 'Ví dụ chỉ cần cùng chủ đề rộng', 'Ví dụ hài hước làm bài hay hơn'], ''),
  I('Ý: "Banning cars from city centres may hurt small shops." Đâu là phần phát triển tốt nhất?',
    ['Customers who rely on driving may shop elsewhere, so businesses near the centre could lose regular income.', 'Cars are very important for many people in modern life.'],
    ['Giải thích chuỗi nguyên nhân → hệ quả cho đúng đối tượng (cửa hàng nhỏ)', 'Câu chung chung an toàn hơn', 'Phần phát triển phải có số liệu'], ''),
]);
S('t2b', 'evaluate', 2, 'Đoạn nào phát triển tốt hơn?', [
  I('Đề: Should children learn a second language at primary school?',
    ['Learning a language early is easier because young children imitate sounds naturally. As a result, they often develop better pronunciation than those who start as teenagers.', 'Learning a language is good. It is useful. Children like it. It helps them in the future.'],
    ['Có luận điểm, giải thích cơ chế và hệ quả', 'Nhiều câu hơn nên phát triển hơn', 'Câu ngắn dễ hiểu nên tốt hơn'], ''),
  I('Đề: Is it a good idea for teenagers to have part-time jobs?',
    ['A part-time job can teach teenagers to manage money, since they experience how long it takes to earn what they spend.', 'Part-time jobs have many good points and many bad points for teenagers in the world today.'],
    ['Câu được chọn nêu một ý cụ thể và giải thích vì sao', 'Câu kia cân bằng hơn nên tốt hơn', 'Câu kia dài hơn'], ''),
]);
S('t2b', 'evaluate', 3, 'Xếp hạng đoạn theo Task Response (Mức 3)', [
  I('Đề: Do the benefits of tourism outweigh the drawbacks for local communities? Đoạn nào tốt nhất?',
    ['Tourism brings income, but much of it may leave the area through foreign-owned hotels; the benefits therefore depend on how far profits stay local.', 'Tourism brings a lot of money, so it is always beneficial for everyone in every community.', 'Tourism has benefits and drawbacks, such as money, jobs, pollution and crowds.'],
    ['Có giải thích và cân nhắc điều kiện, không khẳng định tuyệt đối', 'Có nhiều ví dụ liệt kê nhất', 'Có lập trường mạnh nhất'], 'Band 8 TR: ý được mở rộng và hỗ trợ tốt; khẳng định tuyệt đối dễ thiếu chính xác.'),
  I('Đoạn A: 2 ý, mỗi ý 3 câu giải thích + ví dụ. Đoạn B: 5 ý, mỗi ý 1 câu. Theo band descriptors, đoạn nào thường được TR cao hơn?',
    ['Đoạn A', 'Đoạn B'],
    ['Ý được phát triển và hỗ trợ quan trọng hơn số lượng ý', 'Nhiều ý hơn chứng tỏ hiểu rộng hơn', 'Hai đoạn bằng nhau'], ''),
]);

S('t2g', 'understand', 2, 'Nhận diện counter-argument', [
  I('Đoạn nào là counter-argument hoàn chỉnh?',
    ['Some argue that homework teaches discipline. However, research suggests that for young children, too much homework mainly causes stress rather than better habits.', 'Homework is bad. It causes stress. Children should play instead.'],
    ['Có thừa nhận ý phía kia và phản bác bằng lý do', 'Đoạn ngắn gọn hơn', 'Có từ "should"'], ''),
  I('Câu thừa nhận nào phù hợp để mở đoạn counter?',
    ['Admittedly, banning cars could make it harder for some people to reach the city centre.', 'Banning cars is the best idea and nobody can disagree with it.'],
    ['Thừa nhận công bằng một điểm của phía kia trước khi phản bác', 'Mở đoạn bằng khẳng định tuyệt đối để mạnh mẽ', 'Không cần thừa nhận'], ''),
]);
S('t2g', 'understand', 2, 'Phản bác có lý do', [
  I('Câu phản bác nào chặt hơn cho ý "Zoos educate children"?',
    ['However, documentaries and wildlife reserves can offer the same education without keeping animals in captivity.', 'However, this is not true at all.'],
    ['Phản bác chỉ ra giải pháp thay thế/lý do cụ thể', 'Phản bác càng ngắn càng mạnh', '"Not true at all" mạnh mẽ hơn'], ''),
  I('Sau phần phản bác, câu nào nên kết thúc đoạn counter?',
    ['Therefore, the educational value of zoos does not justify keeping wild animals in confined spaces.', 'Therefore, zoos are good for education.'],
    ['Câu cuối quay về lập trường của người viết', 'Câu cuối nên đồng ý với phía kia', 'Câu cuối phải có ví dụ mới'], 'Nếu lập trường là phản đối zoo, câu kết phải phản ánh điều đó.'),
]);
S('t2g', 'understand', 3, 'Giả định đằng sau lập luận (Mức 3)', [
  I('Lập luận phía kia: "Harsher punishments will stop dangerous driving." Giả định ngầm là gì?',
    ['Người lái xe nguy hiểm cân nhắc hình phạt trước khi hành động.', 'Mọi người lái xe đều nguy hiểm.'],
    ['Câu "This is predicated on the assumption that..." chỉ ra giả định để phản bác', 'Giả định là điều người viết đồng ý', 'Giả định không liên quan đến phản bác'], 'Phản bác giả định thường thuyết phục hơn phản bác kết luận.'),
  I('Câu phản bác nào nhắm đúng giả định trên?',
    ['However, many reckless drivers act on impulse and rarely think about penalties, so harsher fines may have limited effect.', 'However, punishments are expensive for the government.'],
    ['Phản bác trực tiếp giả định (người lái có cân nhắc hình phạt)', 'Phản bác bằng một vấn đề khác cũng có giá trị như nhau', 'Câu ngắn hơn chặt hơn'], 'Câu kia đúng nhưng chuyển sang chi phí, không đánh vào lập luận chính.'),
]);
S('t2g', 'understand', 3, 'Mức độ nhượng bộ (Mức 3)', [
  I('Lập trường: "Exams should not be the main way to assess students." Câu nhượng bộ nào không làm yếu lập trường?',
    ['Granted, exams are efficient for assessing large numbers of students at once.', 'Granted, exams are clearly the fairest and most accurate way to assess students.'],
    ['Thừa nhận một ưu điểm hẹp, không thừa nhận đúng điều mình phản đối', 'Nhượng bộ càng mạnh càng công bằng', 'Không nên dùng Granted'], 'Câu kia thừa nhận chính điều mà lập trường phản đối → mâu thuẫn.'),
  I('Đoạn counter dùng: "This line of reasoning is flawed because it fails to factor in..." Chức năng của câu này?',
    ['Chuyển từ thừa nhận sang phản bác, chỉ ra điểm lập luận kia bỏ sót.', 'Mở đầu đoạn văn mới.'],
    ['Đây là câu chuyển ý trong khung phản biện 3 bước', 'Đây là câu kết luận của bài', 'Câu này chỉ để trang trí'], ''),
]);
S('t2g', 'analyze', 2, 'Chẩn đoán đoạn counter', [
  I('Đoạn: "Some say that fast food is convenient. It is true that fast food is convenient. Fast food is very convenient."',
    ['Chỉ thừa nhận và lặp ý, không có phản bác.', 'Đoạn counter hoàn chỉnh.'],
    ['Thiếu bước phản bác và quay về lập trường', 'Thiếu từ vựng học thuật', 'Đoạn quá dài'], ''),
  I('Đoạn counter đặt ngay trong mở bài, trước thesis.',
    ['Người đọc chưa biết lập trường, đoạn phản biện dễ gây khó hiểu.', 'Không có vấn đề.'],
    ['Thường nên đặt sau các lập luận chính hoặc lồng trong thân bài', 'Counter bắt buộc ở kết luận', 'Counter phải là đoạn đầu tiên'], 'Không có vị trí bắt buộc, nhưng mở bài cần thesis rõ trước.'),
]);
S('t2g', 'analyze', 3, 'Chẩn đoán phản bác (Mức 3)', [
  I('Phản bác: "However, people who say this are clearly uneducated."',
    ['Công kích người nói thay vì lập luận của họ.', 'Phản bác hợp lệ vì có từ However.'],
    ['Phản bác cần nhắm vào lý lẽ/bằng chứng', 'Phản bác cần dài hơn', 'Phản bác cần số liệu'], ''),
  I('Phản bác: "However, this is wrong because it is incorrect."',
    ['Lập luận vòng tròn: lý do chỉ nhắc lại kết luận.', 'Phản bác đúng nhưng hơi ngắn.'],
    ['"Vì nó sai" không phải lý do', 'Thiếu từ nối', 'Sai thì'], ''),
]);
S('t2g', 'analyze', 3, 'Phản bác có đúng trọng tâm? (Mức 3)', [
  I('Lập luận phía kia: "Remote work reduces productivity because of distractions at home." Phản bác nào đúng trọng tâm?',
    ['However, studies of some firms show stable or higher output when staff can choose quieter hours, suggesting distractions can be managed.', 'However, remote work is good for the environment because there is less commuting.'],
    ['Phản bác trả lời đúng vấn đề năng suất', 'Lợi ích môi trường cũng phản bác được năng suất', 'Câu ngắn hơn đúng trọng tâm hơn'], 'Câu kia nêu một lợi ích khác, không trả lời lập luận về năng suất.'),
  I('Đoạn phản bác dùng ví dụ cá nhân: "My friend works from home and he is lazy."',
    ['Một trường hợp đơn lẻ không đủ khái quát để phản bác.', 'Ví dụ cá nhân luôn là bằng chứng mạnh nhất.'],
    ['Bằng chứng nên khái quát hơn một cá nhân', 'Ví dụ cá nhân bị cấm tuyệt đối', 'Chỉ cần thêm tên người bạn'], ''),
]);
S('t2g', 'evaluate', 2, 'Đoạn counter nào thuyết phục hơn?', [
  I('Lập trường: ủng hộ thuế đồ uống có đường.',
    ['Critics claim that such taxes hurt poorer families. However, the revenue can fund free water stations and health programmes in low-income areas, offsetting much of this cost.', 'Critics claim that such taxes hurt poorer families. However, health is more important than money.'],
    ['Phản bác cụ thể, trả lời đúng mối lo về người nghèo', 'Phản bác ngắn hơn thì mạnh hơn', 'Phản bác bằng giá trị chung là đủ'], ''),
  I('Lập trường: phản đối cấm điện thoại hoàn toàn trong trường.',
    ['It is true that phones can distract students. Nevertheless, clear rules on when phones may be used can limit this while keeping their value as learning tools.', 'It is true that phones can distract students. Nevertheless, phones are modern.'],
    ['Phản bác đưa giải pháp giải quyết đúng điểm bị nêu', 'Hai đoạn ngang nhau', 'Đoạn kia có từ vựng đơn giản hơn nên tốt hơn'], ''),
]);
S('t2g', 'evaluate', 3, 'Xếp hạng đoạn phản biện (Mức 3)', [
  I('Lập trường: các thành phố nên hạn chế ô tô ở trung tâm. Đoạn nào tốt nhất?',
    ['Granted, some businesses fear losing customers. This concern, however, assumes that most shoppers arrive by car, whereas in many dense centres the majority walk or use public transport.', 'Some businesses fear losing customers, and this is a very serious problem that cannot be solved.', 'Businesses are wrong. Cars are bad.'],
    ['Thừa nhận công bằng, chỉ ra giả định và phản bác bằng dữ kiện', 'Thừa nhận mạnh nhất là công bằng nhất', 'Ngắn gọn là thuyết phục nhất'], 'Đoạn thứ hai thừa nhận nhưng không phản bác, làm yếu lập trường.'),
  I('Đoạn counter nào tốt hơn về CC?',
    ['Admittedly, the policy has costs. These, however, are likely to be temporary, whereas the health benefits would accumulate over decades.', 'Admittedly, the policy has costs. Moreover, the costs are temporary. Furthermore, health benefits are long-term.'],
    ['Tham chiếu (These) và đối chiếu (whereas) thể hiện đúng quan hệ ý', '"Moreover/Furthermore" luôn tốt hơn', 'Câu ngắn hơn mạch lạc hơn'], '"Moreover" ở câu 2 sai quan hệ: câu sau phản bác chứ không bổ sung.'),
]);
})();
KL_BANK(`
@t2g
#remember 2 gap Nhớ lại: khung phản biện 3 bước | Điền 1 từ.
___, one might argue that ... (Thừa nhận, bắt đầu bằng Gr-) = Granted
This is ___ on the assumption that ... (dựa trên) = predicated / based
However, this line of ___ is not sound. = reasoning
#remember 2 gap Nhớ lại: từ nhượng bộ – phản bác | Điền 1 từ.
It is ___ that zoos protect some species. (đúng là) = true
___, banning cars could inconvenience some residents. (Phải thừa nhận, bắt đầu bằng Adm-) = Admittedly
___, this argument overlooks ... (Tuy nhiên, bắt đầu bằng Nev-) = Nevertheless / Nonetheless
#remember 3 mcq Nhớ lại: vai trò counter-argument (Mức 3) | Chọn đáp án đúng.
Counter-argument giúp bài viết thế nào? :: +Cho thấy người viết đã cân nhắc phía kia, làm lập trường thuyết phục hơn || Làm bài trung lập hơn || Tăng số từ là chính
Phản bác hiệu quả nhất thường nhắm vào: :: +Giả định hoặc bằng chứng của lập luận phía kia || Người đưa ra lập luận || Từ vựng của lập luận phía kia
Sau khi phản bác, câu cuối đoạn nên: :: +Khẳng định lại lập trường của người viết || Đồng ý với phía kia || Đưa ra một vấn đề mới
#apply 1 rewrite Viết câu thừa nhận theo khung | Viết câu thừa nhận ý phía kia, dùng "It is true that ...".
Ý phía kia: thi cử giúp đánh giá nhiều học sinh nhanh. => It is true that exams allow large numbers of students to be assessed quickly.
Ý phía kia: du lịch mang lại việc làm cho người dân địa phương. => It is true that tourism creates jobs for local people.
#apply 2 rewrite Viết câu phản bác có lý do | Viết câu bắt đầu bằng "However," phản bác ý đã cho, có lý do cụ thể. Không bắt buộc giống mẫu.
Ý phía kia: mạng xã hội giúp người trẻ kết nối. (lập trường: mạng xã hội gây cô đơn) => However, online contact often replaces rather than supports face-to-face friendship, which can leave young people feeling more isolated.
Ý phía kia: ô tô điện sẽ giải quyết ô nhiễm. (lập trường: cần giao thông công cộng) => However, electric cars still cause congestion and their electricity may come from fossil fuels, so public transport remains essential.
#apply 3 rewrite Viết đoạn phản biện 3 bước (Mức 3) | Viết 3 câu: thừa nhận → giả định → phản bác. Không bắt buộc giống mẫu.
Lập trường: không nên miễn học phí đại học cho tất cả. Ý phía kia: miễn học phí giúp người nghèo đi học. => Granted, free tuition could help some low-income students enter university. This argument, however, assumes that fees are the main barrier, whereas living costs often deter poorer students more. Targeted grants for living expenses would therefore help them more effectively than free tuition for all.
`);
