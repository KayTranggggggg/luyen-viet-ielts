/* Câu hỏi CHIẾN THUẬT cho Task 1 / Task 2 (trắc nghiệm 2 tầng: chọn phương án + chọn lý do).
   Phương án nhiễu là lỗi tư duy/chiến thuật thật (overview có số liệu, topic sentence chỉ bao 1 ý, giải pháp chung chung...),
   không phải lỗi ngữ pháp cài máy. Tự soạn. */
(function () {
const U = id => window.UNITS.find(u => u.id === id);
const I = (q, o, a, w, wa, ex) => ({ q, options: o, a, why: { options: w, a: wa }, ex });
function S(id, bloom, lv, title, instr, items) { U(id).exercises.push({ bloom, lv, type: 'mcq2', title, instr, items, strategy: true }); }
function M(id, bloom, lv, title, instr, items) { U(id).exercises.push({ bloom, lv, type: 'mcq', title, instr, items: items.map(([q, o, a, ex]) => ({ q, options: o, a, ex })), strategy: true }); }
const T1 = 'Tầng 1: chọn phương án tốt hơn. Tầng 2: chọn lý do đúng. Chỉ được điểm đủ khi đúng cả hai tầng.';

S('t1a', 'analyze', 3, 'Chẩn đoán Overview', T1, [
  I('Biểu đồ: số du khách tới 3 bảo tàng 2010–2020. Bảo tàng A tăng mạnh, B và C giảm nhẹ; A luôn cao nhất.',
    ['Overall, Museum A saw a sharp rise in visitors and remained the most popular throughout, whereas the other two attracted slightly fewer people over the period.', 'Overall, Museum A rose from 2 million to 5 million visitors, while B fell from 1.5 million to 1.2 million and C from 1 million to 0.8 million.'], 0,
    ['Phương án kia đưa số liệu chi tiết vào overview thay vì khái quát đặc điểm chính', 'Phương án kia sai thì động từ', 'Phương án kia quá ngắn so với yêu cầu'], 0,
    'Overview tóm tắt xu hướng/đặc điểm chính; số liệu cụ thể để dành cho thân bài.'),
  I('Bảng: tỷ lệ hộ có ô tô ở 5 thành phố, 2000 và 2020 — tất cả đều tăng; thành phố E luôn thấp nhất.',
    ['Overall, car ownership was highest in City A in 2000, which is probably because people there were richer.', 'Overall, every city recorded higher car ownership in 2020 than in 2000, with City E consistently having the lowest rate.'], 1,
    ['Phương án kia chỉ nêu một mốc và thêm lý giải không có trong dữ liệu', 'Phương án kia dùng sai mạo từ', 'Phương án kia không paraphrase đề'], 0,
    'Task 1 không suy đoán nguyên nhân; overview cần bao quát xu hướng chung của cả giai đoạn.'),
]);
S('t1c', 'understand', 3, 'Vì sao cách so sánh này tốt hơn?', T1, [
  I('Bar chart một năm: lương trung bình 4 ngành (Y tế 52k, CNTT 61k, Giáo dục 38k, Bán lẻ 27k).',
    ['IT workers earned the most, at $61,000, followed by healthcare staff ($52,000), while those in retail took home just $27,000, less than half the IT figure.', 'Salaries in IT increased to $61,000, and healthcare salaries grew to $52,000, but retail salaries dropped to $27,000.'], 0,
    ['Biểu đồ chỉ có một năm nên không thể mô tả tăng/giảm; cần so sánh và xếp hạng', 'Phương án kia không có số liệu', 'Phương án kia dùng câu bị động'], 0,
    'Dữ liệu tĩnh (No change): dùng so sánh, xếp hạng, gấp/bằng bao nhiêu lần — không dùng từ xu hướng.'),
  I('Cùng biểu đồ trên. Cách nhóm thân bài nào hợp lý hơn?',
    ['Đoạn 1: Y tế. Đoạn 2: CNTT. Đoạn 3: Giáo dục. Đoạn 4: Bán lẻ.', 'Đoạn 1: hai ngành lương cao (CNTT, Y tế). Đoạn 2: hai ngành lương thấp (Giáo dục, Bán lẻ).'], 1,
    ['Nhóm theo đặc điểm chung giúp so sánh trong nhóm và tránh mô tả rời rạc', 'Bốn đoạn thân bài giúp bài dài hơn nên điểm cao hơn', 'Phải mô tả theo đúng thứ tự trong biểu đồ'], 0,
    'Band 7 TA: "data categorised" — dữ liệu được phân nhóm, không đọc từng cột.'),
]);
S('t1g', 'understand', 2, 'Overview cho bài Mixed', T1, [
  I('Đề: line graph (số khách du lịch 2010–2020, tăng đều) + pie chart (mục đích chuyến đi năm 2020, du lịch nghỉ dưỡng chiếm phần lớn).',
    ['Overall, visitor numbers rose steadily over the decade, and in 2020 most trips were made for leisure.', 'Overall, visitor numbers rose steadily over the decade, reaching their highest point in 2020.'], 0,
    ['Overview bài Mixed phải nêu ý chính của CẢ HAI biểu đồ', 'Overview phải có số liệu năm cao nhất', 'Overview chỉ cần một câu thật ngắn'], 0,
    'Bỏ một biểu đồ khỏi overview là bỏ một đặc điểm chính → ảnh hưởng Task Achievement.'),
  I('Cùng đề. Câu nào liên hệ hai biểu đồ hợp lý hơn?',
    ['The rise in tourists was caused by people taking more holidays, as the pie chart proves.', 'This growth coincided with a year in which leisure was by far the most common purpose of travel.'], 1,
    ['Phương án kia khẳng định quan hệ nhân quả mà dữ liệu không chứng minh', 'Phương án kia dùng từ vựng quá đơn giản', 'Phương án kia không có số liệu'], 0,
    'Có thể nêu hai dữ kiện đi cùng nhau, nhưng không suy ra nguyên nhân khi biểu đồ không cho thông tin đó.'),
]);
S('t1g', 'understand', 3, 'Chuyển đoạn trong bài Mixed', T1, [
  I('Bài có bảng (dân số 4 thành phố) và bar chart (giá nhà 4 thành phố). Câu mở đoạn 2 nào tốt hơn?',
    ['Secondly, the bar chart.', 'Turning to housing costs, the picture is somewhat different, with the most populous city not the most expensive.'], 1,
    ['Câu mở đoạn tốt vừa chuyển chủ đề vừa báo trước điểm chính của đoạn', 'Câu mở đoạn càng ngắn càng tốt', 'Phải nhắc lại tên loại biểu đồ'], 0,
    'Band 7–8 CC: tiến triển rõ ràng; câu chuyển đoạn có nội dung giúp người đọc theo dõi.'),
  I('Câu nào xử lý hai đơn vị khác nhau (người và USD) chính xác hơn?',
    ['City A had the largest population (8 million) and the highest average house price ($420,000).', 'City A was the biggest, at 8 million and $420,000, respectively higher than the others.'], 0,
    ['Phương án kia gộp hai đơn vị vào một cụm khiến số liệu mơ hồ', 'Phương án kia dùng sai thì', 'Phương án kia có câu bị động'], 0,
    'Mỗi số liệu cần gắn rõ với đại lượng của nó; "respectively" chỉ dùng khi liệt kê song song rõ ràng.'),
]);
S('t1d', 'analyze', 3, 'Câu mô tả pie chart này sai ở đâu?', T1, [
  I('Dữ liệu: Năng lượng than 2000: 48% → 2020: 25%. Câu viết: "Coal fell by 25% between 2000 and 2020."',
    ['Lỗi số liệu/giới từ: than giảm 23 điểm phần trăm, xuống còn 25% — phải là "fell to 25%".', 'Lỗi thì: phải dùng hiện tại hoàn thành.'], 0,
    ['"by" chỉ mức chênh, "to" chỉ mức đạt được; câu gốc nhầm hai thứ', 'Giai đoạn đã kết thúc nhưng vẫn kéo dài tới nay', 'Pie chart không được dùng động từ fall'], 0,
    'Đúng số liệu là nền của Task Achievement. Giai đoạn 2000–2020 đã xong → quá khứ đơn là đúng.'),
  I('Dữ liệu: Gió 2000: 5% → 2020: 20%. Câu viết: "Wind power quadrupled, accounting for a fifth of energy in 2020."',
    ['Câu đúng.', 'Lỗi: "quadrupled" sai vì 5 → 20 chỉ tăng 15 điểm.'], 0,
    ['5% × 4 = 20% và 20% = một phần năm, nên cả hai thông tin đều chính xác', 'Không được dùng phân số khi có phần trăm', 'Tăng gấp 4 phải viết "increased fourfold to"'], 0,
    'Gấp 4 lần (quadrupled) là mô tả tỷ lệ; "tăng 15 điểm phần trăm" là mô tả mức chênh — cả hai đều có thể đúng.'),
]);
S('t1e', 'understand', 3, 'Chọn cách mô tả quy trình', T1, [
  I('Quy trình tự nhiên: vòng đời loài ếch.',
    ['Eggs are laid by the female, after which tadpoles are hatched and legs are grown.', 'The female lays eggs, which hatch into tadpoles that gradually grow legs.'], 1,
    ['Quá trình tự nhiên thường mô tả bằng chủ động; "are hatched", "are grown" sai nghĩa', 'Bị động luôn tốt hơn trong Task 1', 'Câu đúng phải có số bước'], 0,
    'Bị động dùng khi có tác nhân tác động lên vật (quy trình nhân tạo). Trứng tự nở, chân tự mọc → chủ động.'),
  I('Overview cho quy trình sản xuất giấy tái chế (7 bước).',
    ['Overall, there are seven stages, beginning with the collection of used paper and ending with rolls of new paper being sent to manufacturers.', 'Overall, paper is recycled in a factory, which is very good for the environment because it saves trees.'], 0,
    ['Overview cần số bước, bước đầu và bước cuối; không nêu ý kiến', 'Overview phải nói về môi trường', 'Overview nên mô tả bước quan trọng nhất'], 0,
    'Ý kiến ("very good for the environment") không thuộc Task 1.'),
]);
S('t1f', 'analyze', 3, 'Chẩn đoán câu mô tả bản đồ', T1, [
  I('Câu: "In 2020, the trees in the north were demolished to make way for a car park."',
    ['Lỗi collocation: cây cối không "demolished"; dùng "cut down/cleared".', 'Lỗi thì: phải là "have been demolished".'], 0,
    ['"demolish" dùng cho công trình xây dựng', 'Bản đồ hai mốc quá khứ dùng hiện tại hoàn thành', 'Không được dùng bị động cho bản đồ'], 0,
    'Lexical Resource: collocation chính xác (demolish buildings, clear/cut down trees).'),
  I('Overview nào cho bản đồ (khu làng 2000 → 2020: nhiều nhà và đường mới, đất nông nghiệp thu hẹp) tốt hơn?',
    ['Overall, the village became considerably more residential, with farmland giving way to housing and new roads.', 'Overall, in 2000 there was a farm in the east and a school in the west, and in 2020 there were houses.'], 0,
    ['Overview nêu xu hướng thay đổi chung, không liệt kê vị trí từng chi tiết', 'Overview phải nêu vị trí theo hướng la bàn', 'Overview phải bắt đầu bằng năm 2000'], 0,
    'Map overview = xu hướng chung (đô thị hoá, mất cây xanh...) + thay đổi lớn nhất.'),
]);
M('t1h', 'remember', 2, 'Nhớ lại: Task Achievement Task 1', 'Chọn đáp án đúng theo band descriptors công khai.', [
  ['Theo band descriptors, đặc điểm nào thuộc Band 7 Task Achievement (Academic)?', ['Overview rõ ràng, dữ liệu được phân nhóm, xu hướng/khác biệt chính được nêu', 'Bài dài hơn 200 từ và có nhiều từ vựng hiếm', 'Mô tả đủ mọi số liệu theo thứ tự năm'], 0, 'Độ dài và từ hiếm không phải là tiêu chí TA.'],
  ['"Kể lại chi tiết một cách máy móc, thiếu bức tranh chung" là dấu hiệu của band nào?', ['Band 7', 'Band 5', 'Band 8'], 1, 'Band 5 TA: tập trung vào chi tiết, thiếu cái nhìn tổng quát.'],
  ['Bài Task 1 có từ 20 từ trở xuống được chấm thế nào?', ['Band 1', 'Band 4', 'Trừ 1 band'], 0, 'Band descriptors ghi rõ: bài từ 20 từ trở xuống được chấm Band 1.'],
]);
S('t1h', 'understand', 2, 'Chọn lọc số liệu', T1, [
  I('Line graph 6 mốc năm, 3 đường. Câu nào chọn số liệu tốt hơn cho thân bài?',
    ['Bus use fell from 820,000 to 590,000 daily passengers over the period, while the metro, opened in 2016, climbed rapidly to 780,000.', 'In 2010 bus was 820,000, in 2013 790,000, in 2016 760,000, in 2019 700,000, in 2022 610,000 and in 2025 590,000.'], 0,
    ['Chọn điểm đầu – cuối – mốc đặc biệt giúp thấy xu hướng; liệt kê mọi năm là "mechanical"', 'Phải nêu đủ mọi mốc mới đạt TA', 'Phương án kia không so sánh hai năm'], 0,
    'Chọn lọc số liệu là kỹ năng chính của Task Achievement.'),
  I('Câu nào mô tả đúng hơn: metro bắt đầu từ 0 năm 2016 (không có dữ liệu trước đó).',
    ['The metro increased from 0 in 2010 to 780,000 in 2025.', 'The metro, which only began operating in 2016, carried 780,000 passengers a day by 2025.'], 1,
    ['Phương án kia ngụ ý metro đã tồn tại từ 2010 — sai thực tế dữ liệu', 'Phương án kia không dùng mệnh đề quan hệ', 'Phương án kia sai thì'], 0,
    'Đọc kỹ dữ liệu: điểm bắt đầu của một hạng mục mới cần được mô tả đúng.'),
]);
S('t1h', 'understand', 3, 'Mức độ chính xác của mô tả', T1, [
  I('Dữ liệu: 2010: 40%, 2015: 41%, 2020: 39%. Câu nào chính xác hơn?',
    ['The figure fluctuated dramatically between 2010 and 2020.', 'The figure remained relatively stable at around 40% throughout the decade.'], 1,
    ['Dao động 1–2 điểm là gần như ổn định; "dramatically" phóng đại dữ liệu', 'Phải dùng "fluctuate" khi số liệu lên xuống', 'Phương án kia không có số liệu'], 0,
    'Mức độ từ vựng (dramatically/slightly) phải khớp với độ lớn thay đổi.'),
  I('Overview nào tốt hơn cho biểu đồ 4 nước (2 tăng, 2 giảm; Vietnam tăng nhanh nhất)?',
    ['Overall, while forest cover expanded in two countries, most notably Vietnam, it contracted in the other two.', 'Overall, the forest cover of the four countries changed in different ways during the period shown.'], 0,
    ['Overview tốt phải nêu cụ thể xu hướng chính, không chỉ nói "thay đổi khác nhau"', 'Overview phải có số liệu của Vietnam', 'Overview phải nhắc đến năm dự báo'], 0,
    'Overview mơ hồ ("changed in different ways") không cho người đọc biết đặc điểm chính → Band 6 trở xuống.'),
]);
S('t1h', 'analyze', 3, 'Chẩn đoán bài Change over time', T1, [
  I('Thân bài chỉ có: "In 1990, Brazil was 70%. In 2000, it was 66%. In 2010, it was 62%. In 2020, it was 59%."',
    ['Vấn đề chính: liệt kê máy móc, thiếu khái quát và so sánh (TA/CC).', 'Vấn đề chính: sai ngữ pháp nghiêm trọng (GRA).'], 0,
    ['Các câu đúng ngữ pháp nhưng chỉ đọc số, không có xu hướng hay so sánh', 'Câu nào cũng thiếu động từ', 'Năm phải viết bằng chữ'], 0,
    'Một bài có thể đúng ngữ pháp nhưng vẫn yếu TA vì "mechanically recounted".'),
  I('Câu: "Indonesia\'s forest cover will drop to 47% in 2030 because of illegal logging."',
    ['Vấn đề: thêm nguyên nhân không có trong dữ liệu.', 'Vấn đề: không được dùng "will" cho số liệu dự báo.'], 0,
    ['Task 1 chỉ mô tả dữ liệu đã cho', '"will" luôn sai trong Task 1', 'Phải viết 47 percent'], 0,
    '"will" vẫn dùng được cho dự báo; lỗi là thông tin ngoài dữ liệu.'),
]);
M('t1j', 'remember', 2, 'Nhớ lại: chia đoạn theo số hạng mục', 'Chọn đáp án đúng.', [
  ['Biểu đồ có 4 hạng mục: cách chia thân bài thường gặp?', ['2 đoạn, mỗi đoạn 2 hạng mục có điểm chung', '4 đoạn, mỗi hạng mục 1 đoạn', '1 đoạn duy nhất'], 0, 'Nhóm theo điểm chung để so sánh trong nhóm.'],
  ['Biểu đồ có 6 hạng mục: nên làm gì?', ['Mô tả lần lượt từng hạng mục', 'Nhóm theo đặc điểm (cao/thấp, tăng/giảm)', 'Chỉ mô tả 2 hạng mục lớn nhất'], 1, 'Nhóm giúp bài mạch lạc; vẫn cần nhắc các hạng mục quan trọng.'],
  ['Tiêu chí nhóm nào KHÔNG hợp lý?', ['Theo thứ tự chữ cái tên hạng mục', 'Theo cùng xu hướng', 'Theo mức cao/thấp'], 0, 'Nhóm phải dựa trên đặc điểm dữ liệu.'],
]);
S('t1k', 'understand', 3, 'Xử lý dự báo và Total', T1, [
  I('Biểu đồ việc làm có đường "Total". Cách nào hợp lý hơn?',
    ['Nêu Total trong overview (tổng gần như ổn định), rồi mô tả các ngành ở thân bài.', 'Mô tả Total như một ngành thứ tư, xen giữa các ngành khác.'], 0,
    ['Total là bức tranh chung, không phải một hạng mục ngang hàng', 'Total luôn phải để ở cuối bài', 'Total không cần nhắc'], 0,
    'Đặt Total đúng chỗ giúp người đọc hiểu cấu trúc dữ liệu.'),
  I('Câu nào phân biệt rõ dữ liệu thật và dự báo?',
    ['Healthcare employment rose to 4.4 million in 2025 and is projected to reach 6.1 million by 2040.', 'Healthcare employment rose to 4.4 million in 2025 and reached 6.1 million in 2040.'], 0,
    ['Phương án kia mô tả số liệu dự báo như điều đã xảy ra', 'Phương án kia không dùng bị động', 'Phương án kia không có giới từ "by"'], 0,
    'Năm có dấu * là dự báo → dùng is projected/expected to.'),
]);
S('t2a', 'understand', 3, 'Thesis nào trả lời đúng đề?', T1, [
  I('Đề: "Some people think that the government should pay for university education. To what extent do you agree or disagree?"',
    ['This essay will discuss the advantages and disadvantages of free university education.', 'I largely agree, as public funding widens access to higher education, although students who benefit financially could contribute later through taxes.'], 1,
    ['Đề hỏi mức độ đồng ý; thesis phải nêu lập trường', 'Thesis phải liệt kê 3 lý do', 'Thesis phải có câu bị động'], 0,
    'Đề Opinion mà viết thesis kiểu Advantages/Disadvantages là trả lời sai dạng → TR bị giới hạn.'),
  I('Đề: "Why do many young people leave rural areas? What can be done to encourage them to stay?"',
    ['Young people leave mainly because of limited jobs and services, and better local employment and transport could persuade more of them to stay.', 'Rural life has many advantages, but city life is more exciting for young people.'], 0,
    ['Đề hai phần cần thesis trả lời cả nguyên nhân lẫn giải pháp', 'Thesis phải có ý kiến đồng ý/không đồng ý', 'Thesis càng ngắn càng tốt'], 0,
    'Band descriptors TR: "main parts of the prompt are addressed" là ngưỡng Band 6–7.'),
]);
S('t2b', 'analyze', 3, 'Chẩn đoán đoạn thân bài', T1, [
  I('Topic sentence: "Cycle lanes improve public health." Đoạn sau đó bàn về sức khoẻ VÀ giảm tắc đường.',
    ['Lỗi: topic sentence chỉ bao 1 ý trong khi đoạn có 2 ý.', 'Lỗi: đoạn quá ngắn.'], 0,
    ['Topic sentence phải báo trước toàn bộ nội dung đoạn', 'Mỗi đoạn chỉ được có một ý', 'Đoạn 2 ý phải dài hơn 200 từ'], 0,
    'Sửa: "Cycle lanes benefit both public health and traffic flow."'),
  I('Đoạn: "Online learning is flexible. For example, my cousin studies at night. So online learning is good."',
    ['Vấn đề chính: thiếu giải thích vì sao linh hoạt lại có lợi; ví dụ quá cá nhân.', 'Vấn đề chính: sai thì.'], 0,
    ['Đoạn 1 ý cần khâu giải thích giữa luận điểm và ví dụ', 'Ví dụ cá nhân luôn bị trừ band', 'Không được dùng "So" trong Task 2'], 0,
    'Band 6 TR: "some main ideas are underdeveloped". Ví dụ cá nhân có thể dùng nhưng nên khái quát hơn.'),
]);
S('t2c', 'understand', 2, 'Lập luận cho đề "the only way"', T1, [
  I('Đề: "The only way to reduce traffic congestion is to build more roads." Thesis nào an toàn và chặt chẽ hơn?',
    ['I disagree, because while new roads may ease congestion briefly, better public transport and flexible working hours offer longer-term relief.', 'I agree, because building roads is the only solution and nothing else can work.'], 0,
    ['"Only" là khẳng định tuyệt đối; dễ phản bác bằng giải pháp khác', 'Đồng ý luôn bị chấm thấp hơn', 'Thesis phải có hai lý do giống nhau'], 0,
    'Không có quy tắc cấm đồng ý, nhưng phải chứng minh không còn cách nào khác — rất khó.'),
  I('Đoạn thân bài nào hỗ trợ thesis "No" tốt hơn?',
    ['Roads are expensive. Also, they take a long time. Moreover, people do not like them.', 'Expanding roads often attracts more drivers, so congestion returns within a few years; investment in rail tends to remove cars from the road altogether.'], 1,
    ['Phương án được chọn có cơ chế giải thích và so sánh với cách khác', 'Phương án được chọn dài hơn', 'Phương án được chọn có từ nối nhiều hơn'], 0,
    'Lập luận cần cơ chế (vì sao), không chỉ liệt kê nhận xét.'),
]);
S('t2c', 'understand', 3, 'Giữ lập trường nhất quán', T1, [
  I('Mở bài: "I completely disagree." Kết luận nào nhất quán?',
    ['In conclusion, I partly agree that exams are useful in some cases.', 'In conclusion, although exams offer a convenient snapshot of ability, they are too narrow to be the fairest measure.'], 1,
    ['Lập trường ở kết luận phải khớp với mở bài', 'Kết luận phải có ý mới', 'Kết luận nên trung lập'], 0,
    'Band 6 TR: "conclusions may be unclear, unjustified or repetitive"; lập trường đổi giữa chừng làm giảm TR.'),
  I('Câu thừa nhận nào phù hợp với lập trường "disagree"?',
    ['Admittedly, exams are easy to administer on a large scale; however, this convenience does not make them fair.', 'Exams are definitely the fairest method, and everyone knows this.'], 0,
    ['Thừa nhận một điểm của phía kia rồi quay về lập trường của mình', 'Câu thừa nhận phải đồng ý hoàn toàn với phía kia', 'Không được thừa nhận gì trong bài Opinion'], 0,
    'Nhượng bộ có kiểm soát làm lập luận thuyết phục hơn.'),
]);
S('t2d', 'understand', 2, 'Discussion: cân bằng hai phía', T1, [
  I('Đề Discuss both views. Bố cục nào đúng hơn?',
    ['Body 1: quan điểm A. Body 2: quan điểm B + ý kiến của tôi (hoặc ý kiến ở thesis và kết luận).', 'Body 1: ý kiến của tôi. Body 2: thêm lý do cho ý kiến của tôi.'], 0,
    ['Đề yêu cầu bàn cả hai quan điểm VÀ nêu ý kiến', 'Bài Discussion không cần ý kiến cá nhân', 'Ý kiến phải để riêng một đoạn thứ ba'], 0,
    'Bỏ một quan điểm là bỏ một phần chính của đề.'),
  I('Câu trình bày quan điểm đối lập nào khách quan hơn?',
    ['Some people foolishly believe that children should stay in the countryside.', 'Those who favour a rural upbringing point to cleaner air and closer-knit communities.'], 1,
    ['Trình bày quan điểm đối lập cần công bằng, không chê bai', 'Phải dùng "Some people believe"', 'Phải có số liệu'], 0,
    'Giọng điệu học thuật, công bằng giúp lập luận đáng tin hơn.'),
]);
S('t2d', 'understand', 3, 'Advantages outweigh: cân nhắc trọng số', T1, [
  I('Đề: "Do the advantages of AI at work outweigh the disadvantages?" Thesis nào tốt hơn?',
    ['There are both advantages and disadvantages of using AI at work.', 'I believe the gains in productivity outweigh the risks, provided that workers are retrained for the tasks AI cannot do.'], 1,
    ['Đề hỏi bên nào lớn hơn; thesis phải cân và kết luận', 'Thesis phải liệt kê 2 ưu và 2 nhược', 'Thesis không được có điều kiện'], 0,
    'Chỉ nói "có cả ưu và nhược" là chưa trả lời câu hỏi.'),
  I('Đoạn nào thể hiện việc "cân" rõ hơn?',
    ['Advantages: faster work, fewer errors. Disadvantages: job loss, cost.', 'Although some routine jobs may disappear, this loss is likely to be smaller and more temporary than the long-term productivity gains, which can fund new roles.'], 1,
    ['Phương án được chọn so sánh độ lớn và thời hạn của hai bên', 'Phương án được chọn có nhiều từ nối hơn', 'Phương án được chọn không có số liệu'], 0,
    '"Outweigh" đòi hỏi so sánh trực tiếp, không chỉ liệt kê.'),
]);
S('t2d', 'analyze', 3, 'Chẩn đoán bài Discussion', T1, [
  I('Bài nêu đủ hai quan điểm nhưng không có ý kiến riêng ở bất kỳ đâu.',
    ['Ảnh hưởng chính: Task Response (thiếu một phần đề yêu cầu).', 'Ảnh hưởng chính: Lexical Resource.'], 0,
    ['"Give your own opinion" là một phần chính của đề', 'Thiếu ý kiến làm từ vựng nghèo', 'Thiếu ý kiến là lỗi ngữ pháp'], 0,
    'Band 5 TR: "main parts of the prompt are incompletely addressed".'),
  I('Mở bài nói ủng hộ A, kết luận nói ủng hộ B.',
    ['Vấn đề: lập trường không nhất quán (TR) và mạch lập luận đứt (CC).', 'Không có vấn đề vì đã bàn cả hai phía.'], 0,
    ['Người đọc không biết người viết thực sự nghĩ gì', 'Kết luận được phép đổi ý kiến', 'Chỉ là lỗi chính tả'], 0,
    'Lập trường cần rõ và nhất quán từ đầu đến cuối.'),
]);
S('t2e', 'understand', 2, 'Giải pháp có khớp vấn đề không?', T1, [
  I('Vấn đề: thanh niên khó mua nhà vì giá cao so với thu nhập. Giải pháp nào khớp hơn?',
    ['Governments could build affordable rental housing and offer first-time buyers low-interest loans.', 'People should work harder and save more money.'], 0,
    ['Giải pháp được chọn tác động trực tiếp vào giá/khả năng chi trả và có tác nhân rõ', 'Giải pháp được chọn dài hơn', 'Giải pháp kia sai ngữ pháp'], 0,
    'Giải pháp chung chung, đổ trách nhiệm cho cá nhân không giải quyết được rào cản cấu trúc.'),
  I('Câu giải pháp nào phát triển tốt hơn?',
    ['The government should solve this problem.', 'Local councils could require developers to include a share of low-cost flats in new projects, which would increase supply without large public spending.'], 1,
    ['Có tác nhân, hành động cụ thể và cơ chế tác động', 'Có từ "could" thay vì "should"', 'Câu dài hơn luôn tốt hơn'], 0,
    'Giải pháp tốt: ai làm – làm gì – vì sao hiệu quả.'),
]);
S('t2f', 'understand', 3, 'Tham chiếu thay vì lặp từ', T1, [
  I('Câu tiếp theo nào liên kết tốt hơn với câu trước: "Many cities have introduced congestion charges."',
    ['This policy has reduced traffic in central areas, although its impact on poorer drivers remains controversial.', 'Moreover, congestion charges have reduced traffic, and congestion charges are controversial.'], 0,
    ['Tham chiếu "This policy" nối ý tự nhiên, tránh lặp và từ nối máy móc', 'Moreover luôn sai', 'Câu được chọn có từ vựng hiếm hơn'], 0,
    'Band 7 CC: dùng tham chiếu và thay thế linh hoạt.'),
  I('Câu nào thể hiện Lexical Resource tốt hơn mà vẫn tự nhiên?',
    ['Technology has a big effect on people\'s creativity in a bad way.', 'Technology may stifle creativity when it replaces, rather than supports, hands-on problem solving.'], 1,
    ['Từ vựng chính xác (stifle, hands-on) và collocation tự nhiên', 'Câu càng nhiều từ hiếm càng điểm cao', 'Câu có "may" luôn được điểm cao'], 0,
    'Band descriptors không thưởng từ hiếm tự thân; thưởng sự chính xác và linh hoạt.'),
]);
S('t2g', 'understand', 2, 'Cấu trúc đoạn counter-argument', T1, [
  I('Đoạn nào là counter-argument đúng nghĩa?',
    ['It is true that zoos protect some endangered species. However, most animals in zoos are not endangered, and conservation can be done more effectively in the wild.', 'Zoos are bad. Animals are sad. Therefore zoos should close.'], 0,
    ['Thừa nhận ý của phía kia rồi phản bác bằng lý do', 'Counter-argument là nhắc lại ý mình mạnh hơn', 'Counter-argument phải có số liệu'], 0,
    'Không có bước thừa nhận thì không phải counter-argument.'),
  I('Câu phản bác nào chặt hơn?',
    ['However, this is wrong.', 'However, this reasoning overlooks the fact that most zoo species are not threatened at all.'], 1,
    ['Phản bác cần chỉ ra lập luận kia sai ở điểm nào', 'Phản bác càng ngắn càng mạnh', '"This is wrong" là học thuật hơn'], 0,
    'Phản bác hiệu quả nhắm vào giả định hoặc bằng chứng của phía kia.'),
]);
S('t2g', 'understand', 3, 'Nhượng bộ công bằng', T1, [
  I('Câu thừa nhận nào công bằng hơn?',
    ['Granted, tuition fees can encourage students to take their studies seriously.', 'Some silly people think students should pay everything.'], 0,
    ['Trình bày ý phía kia ở dạng mạnh nhất thì phản bác mới thuyết phục', 'Chê phía kia làm bài mạnh hơn', 'Granted là từ cấm'], 0,
    'Giọng điệu học thuật và lập luận công bằng.'),
  I('Đoạn counter đặt ở đâu thì hợp lý?',
    ['Sau các đoạn lập luận chính, trước kết luận (hoặc lồng trong một thân bài).', 'Ngay sau câu thesis, trong mở bài.'], 0,
    ['Người đọc cần thấy lập luận chính trước khi thấy phản biện', 'Mở bài phải dài', 'Counter luôn là đoạn đầu tiên'], 0,
    'Không có vị trí bắt buộc, nhưng thứ tự này thường mạch lạc nhất.'),
]);
S('t2g', 'analyze', 3, 'Chẩn đoán đoạn phản biện', T1, [
  I('Đoạn: "It is true that X. It is true that Y. It is true that Z." (không có phản bác)',
    ['Vấn đề: chỉ thừa nhận mà không phản bác → làm yếu lập trường.', 'Vấn đề: lặp từ nối.'], 0,
    ['Thiếu bước phản bác khiến đoạn ủng hộ phía kia', 'Chỉ cần đổi từ nối là đủ', 'Đoạn quá dài'], 0,
    'Lặp từ nối cũng là vấn đề, nhưng lỗi lập luận nghiêm trọng hơn.'),
  I('Đoạn phản bác bằng: "However, I think this is not right because it is not right."',
    ['Vấn đề: lập luận vòng tròn, không có lý do thực.', 'Vấn đề: dùng "I think" trong Task 2.'], 0,
    ['Lý do chỉ nhắc lại kết luận', '"I think" bị cấm', 'Thiếu số liệu'], 0,
    '"I think" dùng được; lỗi là không có lý do.'),
]);
S('t2h', 'understand', 2, 'Vì sao đây là no-no?', T1, [
  I('Câu nào phù hợp giọng văn Task 2?',
    ['Kids can\'t live without phones, can they?', 'Many children have become heavily dependent on their phones.'], 1,
    ['Phương án kia viết tắt và dùng câu hỏi tu từ', 'Phương án kia quá ngắn', 'Phương án kia sai thì'], 0,
    'Văn học thuật tránh viết tắt và câu hỏi tu từ.'),
  I('Câu nào an toàn hơn về mặt lập luận?',
    ['Everyone knows that social media is harmful.', 'Excessive use of social media may harm young people\'s concentration.'], 1,
    ['Phương án kia khẳng định tuyệt đối, không có căn cứ', 'Phương án kia không có từ nối', 'Phương án kia sai mạo từ'], 0,
    'Khẳng định tuyệt đối dễ bị phản bác và làm giảm độ chính xác của lập luận.'),
]);
S('t2h', 'understand', 3, 'Kết luận không thêm ý mới', T1, [
  I('Kết luận nào đúng chức năng?',
    ['In conclusion, studying history helps students understand the present, which is why it remains worthwhile.', 'In conclusion, history is useful, and also schools should teach coding because it is the future.'], 0,
    ['Kết luận tóm lại lập trường, không thêm luận điểm mới', 'Kết luận phải có ý mới để gây ấn tượng', 'Kết luận phải nhắc lại đề nguyên văn'], 0,
    'Ý mới ở kết luận không được phát triển → ảnh hưởng TR và CC.'),
  I('Câu nào thay "etc." tốt hơn?',
    ['People use phones for many things, etc.', 'People use phones for communication, entertainment and even banking.'], 1,
    ['Liệt kê cụ thể thay vì bỏ lửng', '"etc." là học thuật', 'Phải liệt kê ít nhất 5 thứ'], 0,
    'Ví dụ cụ thể giúp ý rõ ràng hơn.'),
]);
S('t2i', 'understand', 2, 'Trả lời đúng dạng "A better than B"', T1, [
  I('Đề: "Is it better to work for a large company or a small business?" Thân bài nào trả lời đúng dạng?',
    ['Large companies offer stable salaries. Small businesses are often family-run.', 'Large companies usually offer clearer career paths than small firms, whose limited budgets often restrict training.'], 1,
    ['Đề hỏi bên nào tốt hơn → cần so sánh trực tiếp hai bên', 'Phải mô tả từng bên riêng rẽ', 'Phải có số liệu'], 0,
    'Mô tả rời rạc hai bên mà không so sánh là chưa trả lời câu hỏi.'),
  I('Đề "Should...?" — thesis nào đúng?',
    ['Public transport should be free for students, as this would reduce costs for low-income families and ease traffic.', 'There are many opinions about public transport.'], 0,
    ['Đề "Should" cần câu trả lời rõ có/không', 'Thesis phải trung lập', 'Thesis không cần lý do'], 0,
    'Lập trường rõ là điều kiện cho TR Band 7+.'),
]);
S('t2i', 'understand', 3, 'Thesis chia nhóm', T1, [
  I('Thesis chia nhóm nào cụ thể hơn?',
    ['Each option is better for different people.', 'Large companies tend to suit graduates seeking structured training, while small businesses suit those who want broader responsibility early on.'], 1,
    ['Thesis chia nhóm phải nêu rõ nhóm nào hợp với lựa chọn nào', 'Thesis chia nhóm là thesis trung lập', 'Thesis phải ngắn hơn 15 từ'], 0,
    'Nêu nhóm cụ thể giúp thân bài có định hướng rõ.'),
  I('Khi nào KHÔNG nên dùng thesis chia nhóm?',
    ['Khi một lựa chọn rõ ràng vượt trội với hầu hết mọi người.', 'Khi đề hỏi "Which is better?"'], 0,
    ['Chia nhóm chỉ hợp lý khi mỗi bên thực sự phù hợp hơn với một nhóm', 'Đề "Which is better" cấm chia nhóm', 'Chia nhóm luôn được điểm cao hơn'], 0,
    'Chọn hướng theo lập luận, không theo "mẹo".'),
]);
S('t2j', 'understand', 2, 'Đánh giá positive/negative', T1, [
  I('Đề: "More people are buying second-hand clothes. Positive or negative?" Thesis nào đúng?',
    ['This is a largely positive development, as it reduces textile waste and lowers living costs.', 'Second-hand clothes are clothes that were worn by other people before.'], 0,
    ['Thesis phải đưa ra đánh giá', 'Thesis phải định nghĩa khái niệm', 'Thesis phải trung lập'], 0,
    'Đề yêu cầu đánh giá; định nghĩa không phải câu trả lời.'),
  I('Đoạn nào ủng hộ đánh giá "positive" tốt hơn?',
    ['Second-hand clothing extends the life of garments, so fewer new items need to be produced, reducing water use and waste.', 'Second-hand clothes are cheap and nice and good.'], 0,
    ['Có cơ chế giải thích (vì sao tích cực)', 'Câu ngắn dễ hiểu hơn', 'Có nhiều tính từ hơn'], 0,
    'Lý lẽ cần chỉ ra tác động, không chỉ gắn nhãn tốt/xấu.'),
]);
S('t2j', 'understand', 3, 'Đánh giá có điều kiện', T1, [
  I('Đề: "Children now use computers before they can read." Thesis nào tinh tế hơn mà vẫn rõ ràng?',
    ['It is both positive and negative.', 'This is mostly negative if screens replace reading with adults, but it can be beneficial when parents use educational apps alongside books.'], 1,
    ['Đánh giá có điều kiện cụ thể vẫn là câu trả lời rõ', '"Both" là lập trường rõ ràng nhất', 'Không được dùng "if" trong thesis'], 0,
    '"Both" không điều kiện là né câu hỏi.'),
  I('Kết luận nào nhất quán với thesis "mostly negative"?',
    ['Overall, early screen use carries more risks than benefits, unless it is carefully guided by parents.', 'Overall, computers are the future, so children must use them as early as possible.'], 0,
    ['Kết luận lặp lại đánh giá đã nêu', 'Kết luận nên đổi ý để cân bằng', 'Kết luận phải có ý mới'], 0,
    'Nhất quán lập trường → TR và CC.'),
]);
S('t2k', 'understand', 3, 'Nguyên nhân sâu và hệ quả theo chuỗi', T1, [
  I('Câu nguyên nhân nào sâu hơn cho "small family shops are closing"?',
    ['Large supermarkets can buy in bulk and sell at lower prices, so small shops lose customers who are sensitive to price.', 'Small shops are closing because there are supermarkets.'], 0,
    ['Phương án được chọn giải thích cơ chế dẫn tới hiện tượng', 'Phương án được chọn có nhiều từ hơn', 'Phương án kia sai ngữ pháp'], 0,
    'Nêu tên yếu tố ≠ giải thích nguyên nhân.'),
  I('Câu nào là chuỗi hệ quả?',
    ['When local shops close, residents must travel further for basic goods, which particularly disadvantages elderly people without cars.', 'The effect is bad for communities.'], 0,
    ['Hệ quả được triển khai từng bước: A → B → nhóm bị ảnh hưởng', 'Hệ quả phải có số liệu', 'Hệ quả phải dùng "Firstly"'], 0,
    'Chuỗi hệ quả giúp ý được phát triển sâu (TR Band 7+).'),
]);
S('t2k', 'analyze', 3, 'Giải pháp có khớp nguyên nhân?', T1, [
  I('Nguyên nhân nêu: cô đơn do làm việc từ xa và ít giao tiếp trực tiếp. Giải pháp: "People should use social media more."',
    ['Không khớp: giải pháp có thể làm trầm trọng thêm việc thiếu giao tiếp trực tiếp.', 'Khớp hoàn toàn.'], 0,
    ['Giải pháp phải tác động đúng vào nguyên nhân đã phân tích', 'Mọi giải pháp công nghệ đều sai', 'Giải pháp phải do chính phủ thực hiện'], 0,
    'Ví dụ giải pháp khớp: không gian làm việc chung, hoạt động cộng đồng định kỳ.'),
  I('Đoạn giải pháp: "Firstly, government. Secondly, schools. Thirdly, families."',
    ['Vấn đề: chỉ liệt kê tác nhân, không nói làm gì và vì sao hiệu quả.', 'Vấn đề: dùng sai thì.'], 0,
    ['Thiếu nội dung hành động và cơ chế', 'Phải có 4 tác nhân', 'Phải bắt đầu bằng "In my opinion"'], 0,
    'Band 5 TR: ý tưởng hạn chế, chưa phát triển.'),
]);
M('t2l', 'remember', 2, 'Nhớ lại: check-list Task 2', 'Chọn đáp án đúng.', [
  ['Bốn tiêu chí chấm Task 2 là gì?', ['Task Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy', 'Task Response, Vocabulary, Grammar, Length', 'Ideas, Structure, Spelling, Handwriting'], 0, 'Bốn tiêu chí chính thức.'],
  ['Câu hỏi soát CC nào hữu ích?', ['Có chỗ nào bỏ từ nối mà câu vẫn mạch lạc không?', 'Bài có đủ 10 từ nối không?', 'Mỗi đoạn có đúng 5 câu không?'], 0, 'Từ nối máy móc là dấu hiệu Band 6 CC ("faulty or mechanical").'],
]);
M('t2l', 'remember', 3, 'Nhớ lại: đặc điểm band descriptors', 'Chọn đáp án đúng theo band descriptors công khai.', [
  ['GRA Band 8 mô tả lỗi thế nào?', ['Phần lớn câu không lỗi; lỗi thỉnh thoảng, không hệ thống', 'Hoàn toàn không có lỗi', 'Lỗi thường xuyên nhưng không cản trở giao tiếp'], 0, 'Band 9 mới là "lỗi cực hiếm".'],
  ['TR Band 7 khác Band 6 ở điểm nào?', ['Lập trường rõ, được phát triển; ý chính được mở rộng và hỗ trợ', 'Bài dài hơn', 'Có nhiều từ vựng hiếm hơn'], 0, 'Band 6: một số ý chính chưa phát triển đủ; kết luận có thể chưa rõ.'],
  ['LR Band 7 có đặc điểm nào?', ['Có từ vựng ít phổ biến, ý thức về collocation và văn phong, dù còn chỗ chưa phù hợp', 'Không có lỗi chính tả nào', 'Dùng nhiều thành ngữ'], 0, 'Band descriptors thưởng sự linh hoạt và chính xác, không đếm thành ngữ.'],
]);
S('t2l', 'understand', 3, 'Đọc bài mẫu theo tiêu chí', T1, [
  I('Đoạn A: nhiều từ hiếm nhưng ý mơ hồ. Đoạn B: từ vựng phổ thông, chính xác, ý phát triển rõ. Theo band descriptors, đoạn nào thường được TR + LR cao hơn?',
    ['Đoạn A', 'Đoạn B'], 1,
    ['Descriptors thưởng độ chính xác và phát triển ý; từ hiếm dùng sai không được thưởng', 'Từ hiếm luôn được LR cao', 'Hai đoạn bằng nhau'], 0,
    'Từ hiếm dùng sai làm giảm LR; ý mơ hồ làm giảm TR.'),
  I('Bài nào phù hợp Band 7 CC hơn?',
    ['Mỗi đoạn có một ý trung tâm, tham chiếu rõ, từ nối dùng vừa đủ.', 'Mỗi câu đều bắt đầu bằng một từ nối khác nhau.'], 0,
    ['Band 7 CC: tiến triển rõ, phương tiện liên kết linh hoạt (cả tham chiếu)', 'Càng nhiều từ nối càng mạch lạc', 'Không được dùng từ nối'], 0,
    'Lạm dụng từ nối là "overuse".'),
]);
S('t2l', 'analyze', 3, 'Chẩn đoán bản nháp theo check-list', T1, [
  I('Bản nháp: thesis "I agree", thân bài 1 và 2 đều ủng hộ, kết luận "In conclusion, it depends on the situation".',
    ['Vấn đề chính: kết luận không khớp thesis (TR, CC).', 'Vấn đề chính: thiếu từ vựng (LR).'], 0,
    ['Check-list: thesis khớp kết luận', 'Check-list: đủ 10 collocation', 'Check-list: mỗi đoạn 5 câu'], 0,
    'Sửa: kết luận nhắc lại lập trường đồng ý và lý do chính.'),
  I('Bản nháp có câu: "Being a crowded city, the traffic is terrible."',
    ['Lỗi phân từ treo (GRA).', 'Lỗi lập luận (TR).'], 0,
    ['Chủ ngữ "the traffic" không phải là "a crowded city"', 'Câu quá ngắn', 'Không được dùng "Being"'], 0,
    'Sửa: "Because the city is crowded, traffic is terrible." hoặc "Being a crowded city, Hanoi suffers from..."'),
]);
S('t2m', 'understand', 2, 'Đề "The best way"', T1, [
  I('Đề: "The best way to make friends is through social media." Thân bài nào phù hợp hướng No?',
    ['Social media makes it easy to start conversations, but shared activities such as clubs or sports usually build deeper friendships because people meet regularly in person.', 'Social media is bad and dangerous.'], 0,
    ['Hướng No cần thừa nhận rồi chỉ ra cách khác hiệu quả hơn', 'Hướng No cần chê social media càng mạnh càng tốt', 'Hướng No không cần ví dụ'], 0,
    '"The best" là so sánh; phải có đối tượng so sánh.'),
  I('Hướng Yes cho đề "the best way" cần chứng minh điều gì?',
    ['Cách đó vượt trội so với các cách khác.', 'Cách đó có ích.'], 0,
    ['"Có ích" chưa đủ; "best" đòi hỏi so sánh', 'Chỉ cần ví dụ cá nhân', 'Chỉ cần định nghĩa'], 0,
    'Lỗi hay gặp: chỉ chứng minh "tốt" mà không chứng minh "tốt nhất".'),
]);
S('t2m', 'understand', 3, '"The most important factor"', T1, [
  I('Đề: "Intelligence is the most important factor for success at university." Thesis nào chặt hơn?',
    ['Intelligence is important for university.', 'While intelligence helps, I would argue that consistent study habits matter more, since they determine how effectively ability is used.'], 1,
    ['Thesis phải đặt yếu tố trong quan hệ so sánh với yếu tố khác', 'Thesis nên đồng ý', 'Thesis phải có số liệu'], 0,
    '"The most" đòi hỏi xếp hạng các yếu tố.'),
  I('Đoạn nào hỗ trợ thesis trên tốt hơn?',
    ['Many highly able students underperform because they study irregularly, whereas students of average ability who revise consistently often achieve higher grades.', 'Study habits are good. Intelligence is also good.'], 0,
    ['Có so sánh trực tiếp hai yếu tố và giải thích', 'Câu ngắn rõ ràng hơn', 'Không cần so sánh'], 0,
    'Lập luận so sánh là trọng tâm của dạng đề này.'),
]);
S('t2m', 'analyze', 3, 'Chẩn đoán bài "The best"', T1, [
  I('Bài hướng Yes nhưng cả 2 thân bài chỉ nêu lợi ích của sống với gia đình bản xứ, không nhắc cách học văn hoá nào khác.',
    ['Vấn đề: chưa chứng minh "best" vì thiếu so sánh (TR).', 'Không có vấn đề gì.'], 0,
    ['"Best" cần so sánh với cách khác (sách, phim, du lịch ngắn ngày...)', 'Hướng Yes không cần so sánh', 'Chỉ cần thêm từ nối'], 0,
    'Thêm một đoạn so sánh với 1–2 cách khác giúp trả lời đầy đủ.'),
  I('Câu thesis: "Living with a local family is the best and only way and there is no other way."',
    ['Vấn đề: khẳng định tuyệt đối, lặp ý, khó bảo vệ.', 'Vấn đề: thiếu dấu phẩy.'], 0,
    ['Lặp "best/only/no other" không tăng thuyết phục mà làm lập luận cứng nhắc', 'Thesis phải có 3 mệnh đề', 'Thesis không được có "and"'], 0,
    'Lập trường mạnh vẫn có thể diễn đạt có kiểm soát.'),
]);
})();
