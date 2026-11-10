/* Bổ sung theo đề cương chi tiết 60 Lesson (Kay cung cấp). Ví dụ, số liệu và đề bài tự soạn. */
(function () {
const U = id => window.UNITS.find(u => u.id === id);
const addEx = (id, ex) => { const u = U(id); const i = u.exercises.findIndex(e => e.bloom === 'create'); i < 0 ? u.exercises.push(ex) : u.exercises.splice(i, 0, ex); };
const addCreate = (id, ex) => U(id).exercises.push(ex);
const setTheory = (id, h, p) => { const u = U(id); const t = u.theory.find(x => x.h === h); t ? (t.p = p) : u.theory.push({ h, p }); };

/* ================= GRAMMAR ================= */
const g1 = U('g1');
g1.title = 'Cấu trúc câu: thành phần câu & loại câu';
g1.theory.unshift(
  { h: 'Thành phần câu (Lesson 1)', p: ['**S** – Subject (chủ ngữ): *Young people*', '**V** – Verb (động từ chính): *spend*', '**O** – Object (tân ngữ): *a lot of time*', '**C** – Complement (bổ ngữ, sau be/seem/become): *is **expensive***', '**A** – Adverbial (trạng ngữ: thời gian, nơi chốn, cách thức): *on social media every day*'] },
  { h: 'Tìm danh từ chính & hoà hợp chủ–vị', p: ['Chủ ngữ dài → tìm **danh từ chính** rồi chia động từ theo nó: *The **number** of students who study abroad **has** risen.*', 'Bỏ qua cụm giới từ và mệnh đề quan hệ khi tìm danh từ chính: *The **cost** of living in big cities **is** high.*'] });
addEx('g1', { bloom: 'remember', type: 'match', title: 'Gọi tên thành phần câu', instr: 'Câu: *Many young people in Vietnam spend most of their free time online.*', options: ['S', 'V', 'O', 'A'],
  pairs: [{ l: 'Many young people in Vietnam', r: 'S' }, { l: 'spend', r: 'V' }, { l: 'most of their free time', r: 'O' }, { l: 'online', r: 'A' }] });
addEx('g1', { bloom: 'apply', type: 'gap', title: 'Danh từ chính & chia động từ', instr: 'Chia động từ trong ngoặc ở hiện tại đơn.',
  items: [
    { q: 'The quality of public schools in rural areas ___ (be) still low.', a: ['is'] },
    { q: 'The number of people who work from home ___ (continue) to grow.', a: ['continues'] },
    { q: 'Students who live far from campus ___ (spend) more on transport.', a: ['spend'] },
    { q: 'Each of these policies ___ (have) clear drawbacks.', a: ['has'] },
  ] });

const g14 = U('g14');
g14.title = 'Lỗi câu: fragment, run-on, comma splice & phân từ treo';
g14.lessons = 'Lesson 13 · Sentence problems';
g14.theory.push({ h: 'Dangling / misplaced modifier', p: ['Cụm rút gọn đầu câu phải có **cùng chủ ngữ** với mệnh đề chính.', '✗ *Having moved to the city, the cost of living shocked her.* → ✓ *Having moved to the city, she was shocked by the cost of living.*', 'Misplaced: bổ ngữ đặt sai chỗ. ✗ *She almost spent all her savings.* → ✓ *She spent almost all her savings.*'] });
addEx('g14', { bloom: 'analyze', type: 'mcq', title: 'Phân từ treo', instr: 'Chọn câu ĐÚNG.',
  items: [
    { q: '', options: ['Built in 1890, the bridge needs urgent repairs.', 'Built in 1890, engineers say the bridge needs repairs.'], a: 0, ex: 'Câu 2: "engineers" không được xây năm 1890.' },
    { q: '', options: ['After finishing the course, a job was easy to find.', 'After finishing the course, graduates found jobs easily.'], a: 1 },
    { q: '', options: ['Walking along the beach, plastic waste was everywhere.', 'Walking along the beach, we saw plastic waste everywhere.'], a: 1 },
  ] });

const g15 = U('g15');
g15.lessons = 'Lesson 14 · Wrap-up'; g15.title = 'Wrap-up: bóc tách cấu trúc câu trong đoạn văn';

window.UNITS.push({
  id: 'g16', n: 15, stage: 'grammar', lessons: 'Lesson 15 · Grammar Nazi 1 · Lesson 16 · Grammar Nazi 2 · Lesson 17 · Grammar Nazi 3 · Lesson 18 · Grammar Nazi at its best',
  title: 'Grammar Nazi 1–4: sửa lỗi & tự biên tập',
  desc: 'Bốn vòng sửa lỗi trên đoạn văn kiểu bài học viên: (1) mạo từ, số ít/số nhiều, thì, hoà hợp chủ–vị; (2) từ nối sai ngữ pháp, mệnh đề quan hệ, câu cụt, rườm rà; (3) nâng câu đơn rời rạc thành câu phức; (4) tự soát bài.',
  theory: [
    { h: 'Grammar Nazi 1', p: ['Mạo từ: *a/an* cho danh từ đếm được số ít lần đầu; không dùng *the* với danh từ nói chung.', 'Số ít/số nhiều: *many **students***, *much **information***.', 'Thì & hoà hợp chủ–vị.'] },
    { h: 'Grammar Nazi 2', p: ['Từ nối sai ngữ pháp: ✗ *Despite it is expensive* → ✓ *Despite **being** expensive / Although it is expensive*.', '✗ *Because of people drive more* → ✓ *Because people drive more / Because of **increased driving***.', 'Mệnh đề quan hệ: ✗ *the city which I live* → ✓ *the city **where** I live / in which I live*.', 'Câu cụt và câu rườm rà: cắt từ lặp, gộp ý.'] },
    { h: 'Grammar Nazi 3', p: ['Nâng cấp: nhiều câu đơn → một câu phức hoặc rút gọn: *Cities are crowded. They attract young workers.* → *Although crowded, cities attract young workers.*'] },
    { h: 'Grammar Nazi at its best: tự biên tập', p: ['Đọc lại **từng câu**: có S + V chính chưa?', 'Soát theo vòng: động từ → danh từ/mạo từ → từ nối → dấu câu.', 'Câu nào không chắc chắn (risky) → viết lại bằng cấu trúc an toàn.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Lỗi thuộc vòng nào?', instr: 'Phân loại lỗi.', options: ['Nazi 1: mạo từ/số/thì', 'Nazi 2: từ nối/MĐQH/câu cụt', 'Nazi 3: câu đơn rời rạc'],
      pairs: [
        { l: 'The technology changes our life.', r: 'Nazi 1: mạo từ/số/thì' },
        { l: 'Despite it is cheap, few people use it.', r: 'Nazi 2: từ nối/MĐQH/câu cụt' },
        { l: 'Cars are fast. Cars are convenient. Cars pollute the air.', r: 'Nazi 3: câu đơn rời rạc' },
        { l: 'There are many informations online.', r: 'Nazi 1: mạo từ/số/thì' },
        { l: 'This is the town which I grew up.', r: 'Nazi 2: từ nối/MĐQH/câu cụt' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Vì sao sai?', instr: 'Chọn lý do.',
      items: [
        { q: '*Because of the price is high, people buy less.*', options: ['because of + danh từ, không + mệnh đề', 'Sai thì', 'Thiếu mạo từ'], a: 0 },
        { q: '*Although the city is crowded, but it is exciting.*', options: ['Dùng hai liên từ cho một ý', 'Sai hoà hợp', 'Thiếu dấu phẩy'], a: 0 },
        { q: '*The government should invests in education.*', options: ['Sau modal là V nguyên mẫu', 'Sai mạo từ', 'Câu cụt'], a: 0 },
      ] },
    { bloom: 'apply', type: 'rewrite', title: 'Nazi 1 & 2: sửa câu', instr: 'Sửa toàn bộ lỗi trong câu.',
      items: [
        { q: 'The children nowadays spends too much time on the internet.', a: ['Children nowadays spend too much time on the internet.'] },
        { q: 'Despite of it is expensive, many family buy private car.', a: ['Despite being expensive, private cars are bought by many families.', 'Although it is expensive, many families buy a private car.'] },
        { q: 'Students who they study abroad gains independence.', a: ['Students who study abroad gain independence.'] },
      ] },
    { bloom: 'analyze', type: 'rewrite', title: 'Nazi 3: nâng câu đơn', instr: 'Gộp thành MỘT câu phức hoặc rút gọn, giữ nghĩa.',
      items: [
        { q: 'Online courses are cheap. They are flexible. Many working adults choose them.', a: ['Being cheap and flexible, online courses are chosen by many working adults.', 'Because online courses are cheap and flexible, many working adults choose them.'] },
        { q: 'The factory closed in 2010. It was replaced by a shopping centre.', a: ['The factory, which closed in 2010, was replaced by a shopping centre.', 'After closing in 2010, the factory was replaced by a shopping centre.'] },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Phiên bản nào sạch lỗi?', instr: 'Chọn đoạn không còn lỗi.',
      items: [{ q: '', options: [
        'Nowadays, a number of young people prefers to living alone. Because they want freedom.',
        'Nowadays, a growing number of young people prefer to live alone because they value their independence.',
        'Nowadays, the number of young people prefer living alone, it is because freedom.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'grammar', title: 'Grammar Nazi at its best: tự soát bài', prompt: 'Sửa và viết lại đoạn văn sau cho đúng ngữ pháp và mạch lạc (giữ ý):\n\n*"Nowadays the technology is develop very fast. Many people uses smartphone everyday, it make them lazy to read the book. Despite smartphones is useful. The government should encourages people read more, for example build more library in the countryside which people can borrow book free."*', minWords: 50, focus: ['mạo từ, số, thì', 'từ nối đúng ngữ pháp', 'câu cụt, comma splice', 'mệnh đề quan hệ'] },
  ],
});

/* ================= TASK 1 ================= */
setTheory('t1a', 'Các dạng câu hỏi Task 1 (theo khoá học)', [
  '**1. Change over time**: chuẩn 4 hạng mục / nhiều thông tin (5+) / ít thông tin (<4) / 2 mốc năm / tương lai / có Total.',
  '**2. No change over time**: chuẩn / 2 đối tượng / nhiều thông tin.',
  '**3. Mixed charts**: hai biểu đồ khác loại.',
  '**4. Maps**: 1 bản đồ hoặc 2 bản đồ.',
  '**5. Process**: natural process hoặc manufacturing process.',
  '**6. Describe how something works**: cấu tạo và nguyên lý của thiết bị.',
  '**7. Super odd questions**: dạng hiếm gặp.',
  'Tổng cộng khoảng **12 dạng cụ thể**, mỗi dạng có công thức riêng trong các bài sau.']);
U('t1a').theory.push({ h: 'Check-list Task 1 (Lesson 21)', p: ['1. Intro đã paraphrase chuẩn chưa?', '2. Overview đã rõ ràng và **không chứa số liệu** chưa?', '3. Có nhầm thông tin, đơn vị, mốc thời gian không?', '4. Có cấu trúc câu nào risky không?', '5. Có từ vựng nào risky không?', '6. Có lỗi chính tả hay ngữ pháp cơ bản (chia động từ, số ít/số nhiều) không?'] });
{
  const ck = U('t1a').exercises.find(e => e.title.startsWith('Check-list Task 1'));
  ck.passage = 'The line graph show the number of commuters by car, bus and bicycle in Riverton between 2000 and 2020.\n\nOverall, car was most popular, at 65,000 people in 2020, and bicycle rose from 8,000 to 40,000.\n\nIn 2000 there was 52,000 car users, and this number skyrocketed to 65,000 in 2005. Bus users declined to 25,000 in 2020, because people care more about health now. Bicycle users were 8,000 in 2000 and reached 40 in 2020.';
  ck.pairs = [
    { l: '1. Intro đã paraphrase chuẩn chưa?', r: 'Chưa đạt' },
    { l: '2. Overview rõ ràng và không chứa số liệu?', r: 'Chưa đạt' },
    { l: '3. Không nhầm thông tin, đơn vị, mốc thời gian?', r: 'Chưa đạt' },
    { l: '4. Không có cấu trúc / từ vựng risky?', r: 'Chưa đạt' },
    { l: '5. Không có lỗi chính tả / ngữ pháp cơ bản?', r: 'Chưa đạt' },
  ];
  ck.ex = 'Intro chép đề và sai "show"; overview có số liệu; "reached 40" thiếu đơn vị (40,000) và 65,000 là năm 2010 chứ không phải 2005 theo biểu đồ; "skyrocketed" cho mức tăng nhỏ là từ risky, còn giải thích lý do là ngoài biểu đồ; "there was 52,000 car users" sai hoà hợp.';
}

setTheory('t1b', 'Paraphrase đối tượng (Lesson 4)', ['Đếm được: *the number / quantity of + N số nhiều*, hoặc *how many...*', 'Không đếm được: *the amount of + N*, hoặc *how much...*', 'Phần trăm: *the proportion / percentage / share of...*', 'Mức độ: *dramatically, substantially, steadily, marginally, progressively*.', 'Giới từ: *stand at*, *increase **by** 10* (thêm) vs *increase **to** 40* (đến), *fluctuate **between** X **and** Y*, *in the range **from** X **to** Y*.']);
addEx('t1b', { bloom: 'apply', type: 'gap', title: 'Paraphrase & giới từ số liệu', instr: 'Điền MỘT từ.',
  items: [
    { q: 'the ___ of electricity consumed (điện: không đếm được)', a: ['amount', 'quantity'] },
    { q: 'the ___ of households with internet access (%)', a: ['proportion', 'percentage', 'share'] },
    { q: 'Prices fluctuated ___ $3 and $4 throughout the decade.', a: ['between'] },
    { q: 'Sales increased ___ 20%, from 50 to 60 units. (tăng thêm)', a: ['by'] },
    { q: 'The figure stood ___ 2 million in 2010.', a: ['at'] },
    { q: '___ much water was used → the amount of water used', a: ['how'] },
  ] });

setTheory('t1i', 'Cấu trúc nối số liệu', [
  '**Mẫu 1 (Overview)**: *There was an increase in..., with X witnessing the most dramatic rise. In addition, Y generally had the highest figures.*',
  '**Mẫu 2**: *The number / proportion / amount of... started at..., after which it experienced a rise to... in..., before ending the period at...*',
  '**Mẫu 3**: *[Số liệu]..., with a subsequent increase / decrease / levelling off / fluctuation... and a final...*',
  '**Mẫu 4**: *The figure for... was at..., followed by a slow / significant increase to...*',
  '**Mẫu 5**: *The figure for... + V, and (but) + V.*',
  '**Mẫu 6**: *Similar / Opposite changes can be seen in the figure(s) for..., which...*',
  '**Mẫu 7**: *The figure for... + thay đổi, ending / reaching...*']);
addEx('t1i', { bloom: 'apply', type: 'gap', title: 'Mẫu 1 & Mẫu 7', instr: 'Điền MỘT từ.', chart: U('t1i').exercises[0].chart,
  items: [
    { q: 'There was an increase in coffee consumption in three countries, with Vietnam ___ the most dramatic rise.', a: ['witnessing', 'seeing', 'experiencing'] },
    { q: 'In ___, Finland generally had the highest figures.', a: ['addition'] },
    { q: 'The figure for Japan rose slowly, ___ 3.7 kg in 2020.', a: ['reaching', 'ending'] },
  ] });

const j = U('t1j');
j.title = 'Change: chia đoạn theo số hạng mục (4 / 5+ / <4)';
setTheory('t1j', 'Nguyên tắc', [
  '**Đúng 4 hạng mục (Lesson 5)**: chia 2–2 theo xu hướng (tăng vs giảm) hoặc theo mức (cao vs thấp); hoặc chia đôi mốc thời gian.',
  '**5+ hạng mục (Lesson 6)**: không tả từng cái; gom nhóm có chung xu hướng, gộp hạng mục nhỏ lẻ, chỉ nêu số liệu nổi bật để kịp 20 phút.',
  '**Dưới 4 hạng mục (Lesson 7)**, ví dụ 2–3 đường: chia theo **giai đoạn thời gian**, cắt ở các **năm bước ngoặt**, để khai thác sâu từng thay đổi.']);
{
  const m = j.exercises.find(e => e.title === 'Cách chia phù hợp');
  m.pairs = [
    { l: 'Line graph đúng 4 đường: 2 tăng, 2 giảm', r: 'Theo xu hướng / mức' },
    { l: 'Bảng 8 quốc gia × 3 năm', r: 'Gộp nhóm, chọn nổi bật' },
    { l: 'Line graph 2 đường, 1990–2020, cùng đổi chiều năm 2008', r: 'Theo giai đoạn thời gian' },
    { l: 'Bar chart 4 sản phẩm: 2 cao, 2 thấp', r: 'Theo xu hướng / mức' },
    { l: 'Bar chart 7 loại chi tiêu', r: 'Gộp nhóm, chọn nổi bật' },
  ];
  const ev = j.exercises.find(e => e.title === 'Cách chia nào tốt hơn?');
  ev.instr = 'Line graph 2 đường: giá nhà và giá thuê 1990–2020; cả hai tăng chậm 1990–2005, giảm năm 2008, rồi tăng mạnh 2010–2020.';
  ev.items[0].options[0] = 'Body 1: 1990–2008 (tăng chậm rồi giảm); Body 2: 2008–2020 (phục hồi và tăng mạnh), mỗi đoạn tả cả hai đường';
}

setTheory('t1d', 'Hai mốc năm (Lesson 8)', ['Kết hợp **ngôn ngữ xu hướng** (rose, halved, doubled) với **ngôn ngữ so sánh** (the largest, twice as much as) giữa các hạng mục.', 'Không có xu hướng ở giữa → không dùng *fluctuate, peak*.']);
setTheory('t1k', 'Total', ['Đưa **Total vào Overview** và **câu đầu Body 1** để làm khung tham chiếu, rồi mới đi vào từng thành phần con.', 'Có thể dùng để tính tỉ lệ: *food accounted for almost half of the total*.']);
addEx('t1k', { bloom: 'analyze', type: 'mcq', title: 'Total đặt ở đâu?', instr: 'Bảng rác thải có hàng Total.',
  items: [{ q: 'Bố cục đúng theo khoá học:', options: ['Overview nêu xu hướng Total; Body 1 mở đầu bằng Total rồi tả các loại tăng; Body 2 tả các loại giảm', 'Bỏ qua Total vì đã có từng loại', 'Viết Total ở câu cuối cùng của bài'], a: 0 }] });

setTheory('t1c', 'Bộ cấu trúc so sánh cho MỘT hạng mục', [
  '**A far exceeded B, with respective figures being X and Y.**',
  '**A was X, compared to only Y for B.**',
  '**While X of A did something, only Y of B did so.** / *whereas*',
  '**The figures for A, B and C were X, Y and Z, in that order.**',
  '**The figures for A and B were X and Y respectively.**',
  '**A was X, and the figure for B was considerably lower, at Y.**',
  '**A was double / three times that of B.**']);
setTheory('t1c', 'Bố cục No change (Lesson 11–12)', ['Intro → paraphrase.', '**Overview**: chỉ nêu **Differences** (lớn nhất/nhỏ nhất, chênh lệch lớn nhất) và **Similarities** (nhóm nào tương đồng). Không số liệu.', 'Body 1: hạng mục cao nhất / nổi bật; Body 2: phần còn lại.']);
addEx('t1c', { bloom: 'evaluate', type: 'mcq', title: 'Overview No change: khác biệt & tương đồng', instr: 'Bảng thời gian tập thể dục theo độ tuổi (ở bài trên). Chọn overview đủ cả Differences và Similarities.',
  items: [{ q: '', options: [
    'Overall, the youngest group exercised the most, while the oldest did the least; the two middle age groups recorded broadly similar figures.',
    'Overall, people aged 16–24 exercised 5 hours, and those over 65 exercised 1.5 hours.',
    'Overall, exercise is important for all ages.'], a: 0 }] });

const l = U('t1l');
setTheory('t1l', '2 items', ['Biểu đồ so sánh 2 đối tượng (ví dụ Nam vs Nữ) trên nhiều tiêu chí.', 'Overview: đối tượng nào cao hơn ở đa số tiêu chí + ngoại lệ.', '**Body 1**: các tiêu chí mà **A > B**; **Body 2**: các tiêu chí mà **B ≥ A**. Mỗi câu so sánh trực tiếp hai đối tượng.']);
const BAR_MF = { kind: 'bar', title: 'Hours per week spent on leisure activities, by gender (2023)', unit: 'hours', labels: ['Sport', 'Gaming', 'Reading', 'Socialising', 'TV'], series: [{ name: 'Men', data: [4.5, 3.8, 1.6, 4.0, 9.5] }, { name: 'Women', data: [2.4, 1.1, 3.2, 4.6, 9.4] }] };
addEx('t1l', { bloom: 'apply', type: 'match', title: 'Chia Body theo tiêu chí', instr: 'Biểu đồ Nam vs Nữ. Đặt mỗi hoạt động vào đúng đoạn body.', chart: BAR_MF, options: ['Body 1: Men > Women', 'Body 2: Women ≥ Men'],
  pairs: [{ l: 'Sport', r: 'Body 1: Men > Women' }, { l: 'Gaming', r: 'Body 1: Men > Women' }, { l: 'Reading', r: 'Body 2: Women ≥ Men' }, { l: 'Socialising', r: 'Body 2: Women ≥ Men' }, { l: 'TV', r: 'Body 2: Women ≥ Men' }],
  ex: 'TV gần như bằng nhau (9.5 và 9.4), nên đặt vào đoạn "xấp xỉ / Women ≥ Men" và viết là "almost identical".' });
addCreate('t1l', { bloom: 'create', type: 'write', kind: 'task1', title: 'Viết bài 2 items: Nam vs Nữ', prompt: 'The chart below shows the average number of hours per week men and women spent on five leisure activities in 2023.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: BAR_MF, minWords: 150, focus: ['Body 1: Men > Women', 'Body 2: Women ≥ Men', 'so sánh trực tiếp'] });

setTheory('t1g', 'Chiến lược', ['Intro: paraphrase cả hai biểu đồ trong một câu (*The line graph shows..., while the pie chart illustrates...*).', 'Overview: **một ý chính cho mỗi biểu đồ**.', 'Body 1: biểu đồ thứ nhất; Body 2: biểu đồ thứ hai. Mỗi biểu đồ dùng đúng ngôn ngữ của nó (Change hoặc No change).']);
U('t1f').theory.push({ h: 'Từ vựng thêm & cách chia đoạn (Lesson 16)', p: ['Phương hướng: *northwest, to the right of, opposite, adjacent to*.', 'Biến đổi: *expand, demolish, knock down, make way for, convert into, construct, remain unchanged*.', '**1 map** (đề xuất): chia theo khu vực. **2 maps**: chia theo khu vực địa lý hoặc theo mốc thời gian.'] });
addEx('t1f', { bloom: 'apply', type: 'gap', title: 'Phương hướng & biến đổi', instr: 'Điền MỘT từ.',
  items: [
    { q: 'The car park is ___ to the library, sharing the same wall.', a: ['adjacent', 'next'] },
    { q: 'The old houses were knocked down to make ___ for a hospital.', a: ['way'] },
    { q: 'The warehouse was ___ into apartments.', a: ['converted', 'turned'] },
    { q: 'The school, in the ___ corner of the map, remained unchanged.', a: ['northwest', 'northeast', 'southwest', 'southeast', 'north-west', 'north-east', 'south-west', 'south-east'] },
  ] });

U('t1e').theory.push({ h: 'Nhân tạo vs tự nhiên (Lesson 17–18)', p: ['**Manufacturing**: bị động + từ nối tuần tự: *At the beginning of the process, After being + V3, The process continues with, Once..., Subsequently*.', '**Natural**: **chủ động**, từ vựng sinh học (*hatch, mature, develop into, feed on*), thường là **chu trình khép kín** (cyclical process).'] });
addEx('t1e', { bloom: 'apply', type: 'gap', title: 'Từ nối quy trình', instr: 'Điền MỘT từ.',
  items: [
    { q: 'At the ___ of the process, used bottles are collected.', a: ['beginning', 'start'] },
    { q: 'After ___ washed, the bottles are crushed.', a: ['being'] },
    { q: 'The process ___ with the melting of the crushed glass.', a: ['continues'] },
    { q: '___ the glass has cooled, it is ready to be reused.', a: ['once'] },
  ] });

setTheory('t1m', 'How something works', ['Overview: thiết bị gồm mấy bộ phận chính và hoạt động thế nào (chu trình hay tuyến tính, năng lượng gì).', '**Body 1: cấu tạo / thành phần**: *consists of, is composed of, is made up of, is equipped with, is attached to*.', '**Body 2: nguyên lý vận hành**: hiện tại đơn, chủ động cho bộ phận (*the panel absorbs*), bị động cho tác động (*water is heated*).', 'Từ vựng: *absorb, convert into, flow through, circulate, be connected to, be stored in*.']);
{
  const m = U('t1m').exercises.find(e => e.title === 'Chia body');
  m.items[0].options = ['Body 1: cấu tạo (tấm thu nhiệt, ống, bồn chứa, bộ gia nhiệt dự phòng); Body 2: nguyên lý vận hành theo chu trình', 'Mỗi bước một đoạn', 'Body 1: bước lẻ; Body 2: bước chẵn'];
}
addEx('t1m', { bloom: 'apply', type: 'gap', title: 'Ngôn ngữ mô tả cấu tạo', instr: 'Điền MỘT từ.',
  items: [
    { q: 'The system ___ of four main parts.', a: ['consists'] },
    { q: 'The heater is composed ___ a panel, a set of pipes and a tank.', a: ['of'] },
    { q: 'The tank is equipped ___ a backup electric heater.', a: ['with'] },
    { q: 'The panel is ___ to the tank by two pipes.', a: ['connected', 'attached', 'linked'] },
  ] });

/* ================= TASK 2 ================= */
U('t2a').theory.push({ h: 'Task Response theo band (Lesson 1)', p: ['**Band 5**: chỉ trả lời một phần đề; quan điểm có nhưng không rõ; ý ít, phát triển yếu.', '**Band 6**: trả lời đủ các phần nhưng có phần sơ sài; quan điểm có nhưng kết luận có thể chưa rõ.', '**Band 7**: trả lời đủ mọi phần; **quan điểm rõ xuyên suốt bài**; ý chính được mở rộng nhưng đôi khi khái quát quá.', '**Band 8+**: trả lời đủ và sâu; ý được phát triển tốt, không over-generalisation.'] });
addEx('t2a', { bloom: 'understand', type: 'match', title: 'Mô tả ↔ band Task Response', instr: 'Ghép mô tả với band.', options: ['Band 5', 'Band 6', 'Band 7', 'Band 8+'],
  pairs: [
    { l: 'Chỉ trả lời một trong hai câu hỏi của đề', r: 'Band 5' },
    { l: 'Đủ các phần nhưng có phần sơ sài, kết luận chưa rõ', r: 'Band 6' },
    { l: 'Quan điểm rõ từ đầu đến cuối, đôi khi khái quát quá', r: 'Band 7' },
    { l: 'Ý phát triển sâu, ví dụ cụ thể, không khái quát quá', r: 'Band 8+' },
  ] });

setTheory('t2f', 'Grammatical Range & Accuracy', ['Kết hợp linh hoạt câu đơn và câu phức (mệnh đề quan hệ, điều kiện, bị động, phân từ).', '**Dấu câu**: phẩy sau mệnh đề phụ đứng đầu; **chấm phẩy** nối hai mệnh đề độc lập liên quan chặt (*Prices rose; demand fell.*); **hai chấm** trước liệt kê/giải thích.', 'Band 7: đa số câu **không lỗi**. Đúng quan trọng hơn dài.']);
setTheory('t2f', 'Lexical Resource', ['**Collocation** tự nhiên: *tackle a problem, pose a threat, a heavy burden*.', 'Từ theo chủ đề (topic-specific vocabulary).', 'Paraphrase để tránh lặp, nhưng **không dùng từ quá sách vở, cổ hoặc sai ngữ cảnh** (*utilise* thay mọi *use*, *myriad* sai chỗ).']);
addEx('t2f', { bloom: 'apply', type: 'mcq', title: 'Dấu câu (GRA)', instr: 'Chọn câu đúng dấu câu.',
  items: [
    { q: '', options: ['Fuel prices rose sharply; as a result, fewer people drove to work.', 'Fuel prices rose sharply, as a result fewer people drove to work.'], a: 0 },
    { q: '', options: ['Cities face two problems: congestion and pollution.', 'Cities face two problems; congestion and pollution.'], a: 0 },
    { q: '', options: ['Although online learning is flexible it can feel isolating.', 'Although online learning is flexible, it can feel isolating.'], a: 1 },
  ] });

setTheory('t2b', '3 kiểu đoạn thân bài (theo khoá học)', [
  '**1 ý (Lesson 5)**: Topic sentence (1 ý) → **Explain** (tại sao) → **Discuss / Example** (ví dụ cụ thể, hoặc ví dụ đối lập) → **Mini conclusion / Link**.',
  '**2 ý (Lesson 6)**: Topic sentence (khái quát) → **Supporting idea 1** → Discuss (Explain / Result / Example) → **Supporting idea 2** → Discuss (Explain / Result / Example).',
  '**Counter-argument (Lesson 7)**: xem bài Counter-argument.']);
addEx('t2b', { bloom: 'apply', type: 'order', title: 'Sắp xếp đoạn 2 ý', instr: 'Đề: *Newspapers should publish more positive stories.* Sắp xếp đoạn 2 ý.',
  items: [{ words: 'There are two main reasons why more good news would benefit readers. / First, uplifting stories can reduce the anxiety caused by constant reports of crime and disaster. / Readers who feel less overwhelmed are more likely to stay informed rather than avoid the news entirely. / Second, positive stories can inspire people to act. / A report on a successful local recycling scheme, for example, may encourage other communities to copy it.' }] });

setTheory('t2g', 'Cấu trúc', ['**Point**: *Granted, one might argue that* [quan điểm đối lập].', '**Explain**: *This is predicated on the assumption that...* (giải thích lý lẽ của phía đối lập).', '**Counter / Rebuttal**: *However, this line of reasoning is not sound because...*', 'Kết đoạn nối về quan điểm của bạn. Dùng tốt nhất trong dạng **Opinion** để hướng tới band 8.']);
addEx('t2g', { bloom: 'remember', type: 'gap', title: 'Khung counter-argument của khoá học', instr: 'Điền MỘT từ.',
  items: [
    { q: '___, one might argue that printed books will soon disappear.', a: ['granted'] },
    { q: 'This is ___ on the assumption that everyone prefers digital devices.', a: ['predicated', 'based'] },
    { q: 'However, this line of ___ is not sound because many readers still value physical copies.', a: ['reasoning'] },
  ] });

const h = U('t2h');
h.title = 'Big no-nos: 12 điều cấm kỵ trong Task 2';
h.theory = [{ h: '12 điều cấm kỵ (Lesson 8)', p: [
  '1. Không viết tắt (*don\'t, can\'t, won\'t*).',
  '2. Không viết câu quá dài (hơn 35–40 chữ).',
  '3. Không viết 3–4 câu đơn ngắn liền nhau.',
  '4. Không viết mở bài, kết bài quá dài (Intro 2 câu, Conclusion 1–2 câu).',
  '5. Không liệt kê ý mà không giải thích; thân bài và kết luận không được lệch nhau.',
  '6. Không viết câu thiếu động từ chính hoặc thiếu mệnh đề độc lập (fragment).',
  '7. Không thiếu mở bài hoặc kết luận.',
  '8. Không gộp 2 đoạn thân bài làm 1.',
  '9. Không sai cấu trúc song song khi liệt kê (*a, b, and/or c*).',
  '10. Không dùng *...* hay *etc.* → dùng *such as A and B*.',
  '11. Không dùng từ suồng sã, tiếng lóng, lạm dụng idioms.',
  '12. Không mở đầu câu bằng FANBOYS (*For, And, Nor, But, Or, Yet, So*) sau dấu chấm.'] },
  { h: 'Thêm: lỗi tư duy hay gặp', p: ['Câu mở học thuộc không liên quan đề; khái quát tuyệt đối (*everyone, always*); bịa số liệu nghiên cứu.'] }];
h.exercises.unshift(
  { bloom: 'remember', type: 'match', title: 'Câu này phạm điều cấm kỵ số mấy?', instr: 'Chọn điều cấm kỵ.', options: ['Viết tắt', 'Etc. / ba chấm', 'FANBOYS đầu câu', 'Câu đơn ngắn liên tiếp', 'Sai song song', 'Từ suồng sã / idiom'],
    pairs: [
      { l: 'Governments can\'t solve this alone.', r: 'Viết tắt' },
      { l: 'Cities offer jobs, hospitals, schools, etc.', r: 'Etc. / ba chấm' },
      { l: 'Cars are convenient. But they pollute the air.', r: 'FANBOYS đầu câu' },
      { l: 'Tourism is good. It brings money. It creates jobs. It helps culture.', r: 'Câu đơn ngắn liên tiếp' },
      { l: 'Cycling is cheap, healthy and it protects the environment.', r: 'Sai song song' },
      { l: 'Online classes are a piece of cake for most kids.', r: 'Từ suồng sã / idiom' },
    ] },
  { bloom: 'apply', type: 'rewrite', title: 'Sửa theo 12 điều cấm kỵ', instr: 'Viết lại cho đúng quy tắc.',
    items: [
      { q: 'People don\'t read newspapers anymore. And they get news from social media, TV, etc.', a: ['People no longer read newspapers, and they now get news from sources such as social media and television.'] },
      { q: 'Cars are fast. Cars are comfortable. Cars are expensive.', a: ['Although cars are fast and comfortable, they are expensive.'] },
      { q: 'Remote work saves time, reduces stress and it is cheaper.', a: ['Remote work saves time, reduces stress and lowers costs.'] },
    ] });

const i = U('t2i');
i.lessons = 'Lesson 9 · Dạng Should · Lesson 12 · A better than B · Each is better for a certain group';
i.title = 'Opinion: "Should", "A better than B" & "Each is better for a certain group"';
setTheory('t2i', 'Dạng Should', ['Đề: *The government / people should... To what extent do you agree or disagree?*', 'Đồng ý hoàn toàn: **2 đoạn body nêu 2 lợi ích**; hoặc bất đồng: 2 đoạn nêu 2 lý do không nên.', 'Có thể đồng ý có điều kiện: *should be required, but only for...*']);
setTheory('t2i', 'A better than B', ['So sánh **trực tiếp** A và B ở cùng tiêu chí; đừng chỉ viết về A.', 'Chọn một bên tốt hơn, hoặc dùng **counter-argument** cho bên kia.']);
setTheory('t2i', 'Better for a certain group', ['Lập luận nâng cao: **mỗi lựa chọn tốt hơn cho một nhóm người khác nhau**.', 'Ví dụ khung: *A is better for [nhóm 1] because..., whereas for most [nhóm 2], B remains the better choice because...*', 'Kết luận nói rõ nhóm nào là **đa số** để vẫn có quan điểm chung.']);
addEx('t2i', { bloom: 'analyze', type: 'mcq', title: '"Each is better for a certain group"', instr: 'Đề: *Studying online is better than attending classes in person. Agree or disagree?*',
  items: [{ q: 'Dàn ý theo hướng "mỗi bên tốt cho một nhóm":', options: [
    'Body 1: online tốt hơn cho người đi làm và người ở xa vì linh hoạt; Body 2: với đa số học sinh phổ thông, học trực tiếp vẫn tốt hơn vì cần kỷ luật và tương tác → kết luận: nhìn chung không đồng ý',
    'Body 1: online rẻ; Body 2: online nhanh',
    'Body 1: lịch sử học online; Body 2: các nền tảng học online nổi tiếng'], a: 0 }] });

const c = U('t2c');
c.lessons = 'Lesson 10 · Opinion: "The only way" – No!';
c.title = 'Opinion: Agree/Disagree & "The only way" – No!';
c.theory.push({ h: '"The only way" – No! (Lesson 10)', p: ['Đề chứa từ tuyệt đối *the only way / the only solution* → thường **phản đối chữ "only"**.', '**Body 1**: thừa nhận giải pháp trong đề có hiệu quả (hoặc chỉ ra hạn chế của nó).', '**Body 2**: chứng minh còn **giải pháp khác** hiệu quả không kém.', 'Thesis: *Although X can help, I disagree that it is the only way to..., as Y and Z can be equally effective.*'] });
addEx('t2c', { bloom: 'analyze', type: 'mcq', title: 'Dàn ý "The only way"', instr: 'Đề: *The only way to reduce obesity is to tax unhealthy food. To what extent do you agree or disagree?*',
  items: [
    { q: 'Thesis phù hợp:', options: ['While taxing unhealthy food may help, I disagree that it is the only way to tackle obesity, since education and better urban design can be equally effective.', 'I totally agree that tax is the only way.', 'Obesity is a big problem nowadays.'], a: 0 },
    { q: 'Body 2 nên viết về:', options: ['Các giải pháp khác: giáo dục dinh dưỡng ở trường, thêm công viên và làn xe đạp', 'Lịch sử của thuế', 'Nhắc lại Body 1'], a: 0 },
  ] });
addCreate('t2c', { bloom: 'create', type: 'write', kind: 'task2', title: 'Bài "The only way"', prompt: 'Some people say that the only way to reduce the number of young people leaving the countryside is to build more universities in rural areas. To what extent do you agree or disagree?\n\nWrite at least 250 words.', minWords: 250, focus: ['phản đối chữ "only"', 'Body 1 thừa nhận / hạn chế', 'Body 2 giải pháp khác'] });

window.UNITS.push({
  id: 't2m', n: 11, stage: 'task2', lessons: 'Lesson 11 · Opinion: "The best / The most" – No! / Yes!',
  title: 'Opinion: "The best / The most" – No! / Yes!',
  desc: 'Đề khẳng định một điều là "the best way" hoặc "the most important factor". Có hai hướng: phản bác (có cách tốt hơn) hoặc đồng tình (chứng minh nó vượt trội so với các cách khác).',
  theory: [
    { h: 'Hướng "No!"', p: ['Thesis: *Although X can be effective, I do not believe it is the best way to..., as Y is likely to bring more lasting results.*', 'Body 1: X có tác dụng nhưng hạn chế. Body 2: Y tốt hơn, **so sánh trực tiếp** với X.'] },
    { h: 'Hướng "Yes!"', p: ['Thesis: *I agree that X is the most effective way to..., because...*', 'Body 1 & 2: hai lý do X **vượt trội**; nên có một câu so sánh với cách khác để chứng minh "nhất".', 'Tránh chỉ chứng minh X "tốt", vì đề hỏi X "tốt nhất".'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Hướng nào?', instr: 'Ghép thesis với hướng triển khai.', options: ['No!', 'Yes!'],
      pairs: [
        { l: 'Raising fuel prices may help, but investing in public transport would be far more effective.', r: 'No!' },
        { l: 'I agree that early education is the most important factor in a child\'s success, as it shapes lifelong habits.', r: 'Yes!' },
        { l: 'Harsh punishment is not the best deterrent; rehabilitation does more to stop reoffending.', r: 'No!' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Hiểu yêu cầu đề', instr: 'Đề: *Raising the price of fuel is the best way to solve environmental problems. Agree or disagree?*',
      items: [
        { q: 'Từ khoá quyết định cách làm:', options: ['the best way', 'environmental', 'price'], a: 0 },
        { q: 'Bài chỉ chứng minh "tăng giá xăng có ích" thì:', options: ['Chưa trả lời đủ, vì phải xét nó có phải tốt NHẤT không', 'Đã đủ'], a: 0 },
      ] },
    { bloom: 'apply', type: 'rewrite', title: 'Viết thesis hai hướng', instr: 'Đề: *Talking to former prisoners is the best way to stop teenagers committing crimes.* Viết thesis theo hướng yêu cầu.',
      items: [
        { q: 'Hướng No!', a: ['Although hearing from former prisoners can be powerful, I do not believe it is the best way to prevent youth crime, as tackling poverty and providing youth programmes would have a greater impact.'] },
        { q: 'Hướng Yes!', a: ['I agree that talks by former prisoners are the most effective deterrent for teenagers, because their real experiences are far more convincing than warnings from teachers or parents.'] },
      ] },
    { bloom: 'analyze', type: 'mcq', title: 'Câu so sánh "nhất"', instr: 'Chọn câu chứng minh tốt nhất cho hướng Yes! (đề: *Reading is the best way to improve vocabulary*).',
      items: [{ q: '', options: [
        'Reading is good for vocabulary.',
        'Unlike word lists, which present words in isolation, reading shows how words are used in context, so learners remember them for longer.',
        'Many people like reading.'], a: 1 }] },
    { bloom: 'evaluate', type: 'mcq', title: 'Đoạn body nào thuyết phục hơn?', instr: 'Hướng No! cho đề tăng giá xăng.',
      items: [{ q: '', options: [
        'Fuel prices are high. People do not like it. The government should not do it.',
        'Higher fuel prices may discourage some driving, but in cities with poor public transport, people simply have no alternative and continue to drive. Investing in reliable buses and metro lines would therefore cut emissions far more, because it gives drivers a realistic choice.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task2', title: 'Bài "The best way"', prompt: 'Some people believe that the best way to improve public health is to increase the number of sports facilities. To what extent do you agree or disagree?\n\nWrite at least 250 words.', minWords: 250, focus: ['xét chữ "best"', 'so sánh với cách khác', 'quan điểm rõ'] },
  ],
});

const d = U('t2d');
setTheory('t2d', 'Discuss both views', ['Mở bài: nêu 2 luồng ý kiến và **khẳng định quan điểm của mình**.', '**Body 1**: góc nhìn mình **không ủng hộ** (hoặc ủng hộ ít hơn).', '**Body 2**: góc nhìn mình **đồng tình**.', 'Kết bài: chốt lại quan điểm.']);
setTheory('t2d', 'Advantages vs Disadvantages', ['"Do the advantages outweigh...?" → phải cho thấy **sức nặng**.', '**Body 1**: mặt **yếu hơn**, kèm phản biện làm giảm nhẹ hoặc cách khắc phục (*acknowledge + address the problems*).', '**Body 2**: mặt **mạnh hơn**, với luận điểm thuyết phục.', '"What are the advantages and disadvantages?" → trình bày cả hai, không bắt buộc kết luận.']);
addEx('t2d', { bloom: 'analyze', type: 'mcq', title: 'Dàn ý "outweigh"', instr: 'Đề: *More people now work and study from home. Do the advantages outweigh the disadvantages?* Quan điểm: lợi nhiều hơn.',
  items: [{ q: '', options: [
    'Body 1: bất lợi (cô lập, khó tập trung) + cách khắc phục (lịch làm việc cố định, gặp nhóm định kỳ); Body 2: lợi ích lớn hơn (tiết kiệm thời gian đi lại, linh hoạt)',
    'Body 1: lợi ích; Body 2: lợi ích khác; không nhắc bất lợi',
    'Body 1: bất lợi; Body 2: bất lợi khác; kết luận lợi nhiều hơn'], a: 0 }] });

setTheory('t2j', 'Cách làm', ['Thesis: *I believe this is a largely positive / negative development because...*', '**Hướng một chiều**: hoàn toàn tích cực (hoặc tiêu cực), chia 2 body theo **2 nhóm đối tượng** hưởng lợi / chịu hại.', '**Hướng cân bằng**: Body 1 mặt yếu hơn, Body 2 mặt mạnh hơn.', 'Nếu đề có 2 phần (Why + positive/negative?) thì phải trả lời cả hai.']);
addEx('t2j', { bloom: 'analyze', type: 'mcq', title: 'Chia theo nhóm hưởng lợi', instr: 'Đề: *More tourists and scientists are now visiting remote mountain regions. Is this a positive or negative development?* (hướng tích cực một chiều)',
  items: [{ q: '', options: ['Body 1: lợi cho khách du lịch (trải nghiệm, nhận thức về môi trường); Body 2: lợi cho nhà khoa học (dữ liệu khí hậu, nghiên cứu hệ sinh thái)', 'Body 1: lợi ích; Body 2: tác hại', 'Body 1: núi cao; Body 2: thời tiết'], a: 0 }] });

U('t2e').theory.push({ h: 'Làm giải pháp tốt hơn (Lesson 16) & 2-part (Lesson 19)', p: ['Mỗi giải pháp **bám trực tiếp** một vấn đề ở Body 1, nói rõ **ai làm** (chính phủ, trường học, cá nhân), **làm thế nào**, **kết quả** là gì.', '2-part: **mở bài trả lời ngắn cả 2 câu hỏi**; Body 1 trả lời câu 1; Body 2 trả lời câu 2.'] });
addEx('t2e', { bloom: 'apply', type: 'mcq', title: 'Mở bài câu hỏi 2 phần', instr: 'Đề: *Why do many people want to look younger? Is this a positive or negative development?*',
  items: [{ q: '', options: [
    'Many people today try to appear younger than they are. This is largely driven by media images and workplace pressure, and I believe it is a mostly negative trend.',
    'Nowadays, looking young is a hot topic. This essay will discuss it.',
    'Many people want to look younger. There are many reasons.'], a: 0 }] });

U('t2k').theory.push({ h: 'Theo khoá học (Lesson 17–18)', p: ['Causes – Solutions: Body 1 nêu **2 nguyên nhân** (ví dụ từ gia đình và nhà trường); Body 2 đưa **2 giải pháp tương ứng**.', 'Causes – Effects: Body 1 nguyên nhân; Body 2 tác động lên **xã hội** (kinh tế, nghề nghiệp, đời sống).'] });

setTheory('t2l', 'Check-list Task 2', [
  '1. Kết luận đã **tóm tắt ý chính** và làm rõ **lập trường** chưa?',
  '2. Có lỗi chính tả, câu risky hay lỗi ngữ pháp nào không?',
  '3. Có từ vựng chưa chắc chắn nào nên thay bằng từ an toàn, chính xác hơn?',
  '4. Có ý nào **lạc đề** hoặc **chưa được giải thích rõ** (underdeveloped)?',
  '5. Có chỗ nào **cần thêm từ nối**? Có chỗ nào **bỏ từ nối** mà câu vẫn mạch lạc, dễ đọc hơn?']);
U('t2l').theory.push({ h: 'Quy trình lên ý tưởng (Lesson 20)', p: ['Đề bài → gạch chân topic + task → chọn quan điểm → dàn ý 2 body → viết câu chủ đề → phát triển luận cứ (explain, example) → chọn từ vựng chủ đề.'] });
})();
