/* Chặng 2 (bổ sung) — bám theo danh sách 21 bài Writing Task 1. Nội dung & số liệu tự soạn. */
(function () {
const U = id => window.UNITS.find(u => u.id === id);

const LINE_COFFEE = { kind: 'line', title: 'Coffee consumption per person in four countries (kg), 2000–2020', unit: 'kg', labels: ['2000', '2005', '2010', '2015', '2020'],
  series: [{ name: 'Finland', data: [10.5, 10.2, 9.8, 9.9, 9.6] }, { name: 'Vietnam', data: [0.6, 0.9, 1.4, 1.9, 2.7] }, { name: 'Japan', data: [3.2, 3.4, 3.4, 3.6, 3.7] }, { name: 'Brazil', data: [4.8, 5.3, 5.9, 6.1, 6.0] }] };
const BAR_FUTURE = { kind: 'bar', title: 'Share of electric cars in new car sales (%), 2015–2035 (2025 onwards projected)', unit: '%', labels: ['2015', '2020', '2025*', '2030*', '2035*'],
  series: [{ name: 'Norway', data: [22, 54, 90, 98, 100] }, { name: 'China', data: [1, 6, 35, 55, 70] }, { name: 'USA', data: [1, 2, 12, 30, 50] }] };
const TABLE_TOTAL = { kind: 'table', title: 'Waste collected in a city by type (thousand tonnes)', headers: ['Type', '2010', '2015', '2020'], rows: [['Food', '120', '135', '150'], ['Plastic', '60', '85', '95'], ['Paper', '90', '70', '55'], ['Glass', '30', '28', '25'], ['Total', '300', '318', '325']] };
const TABLE_SIX = { kind: 'table', title: 'Average hours per week spent on household chores, by country (2005 and 2020)', headers: ['Country', '2005', '2020'], rows: [['Sweden', '14', '12'], ['Japan', '19', '16'], ['Italy', '22', '20'], ['India', '28', '27'], ['Mexico', '25', '21'], ['Canada', '15', '13']] };
const BAR_TWO = { kind: 'bar', title: 'Proportion of students who walk or cycle to school (%), 2023', unit: '%', labels: ['Primary', 'Lower secondary', 'Upper secondary'], series: [{ name: 'Walk', data: [41, 28, 19] }, { name: 'Cycle', data: [9, 22, 30] }] };
const TABLE_INFO = { kind: 'table', title: 'Facilities in five public libraries (2024)', headers: ['Library', 'Books (000s)', 'Computers', 'Study seats', 'Opening hours/week', 'Monthly visitors (000s)'], rows: [['Central', '420', '120', '600', '84', '95'], ['North', '150', '40', '180', '60', '28'], ['East', '95', '55', '220', '72', '34'], ['South', '160', '20', '90', '48', '15'], ['West', '80', '60', '260', '70', '40']] };
const PROCESS_SILK = { kind: 'process', title: 'The life cycle of the silkworm and silk production', steps: ['Moth lays eggs on mulberry leaves', 'Eggs hatch into larvae (10 days)', 'Larvae feed on mulberry leaves (4–6 weeks)', 'Larvae spin cocoons (3–8 days)', 'Cocoons are boiled', 'Threads are unwound', 'Silk is dyed and woven into fabric'] };
const PROCESS_WORKS = { kind: 'process', title: 'How a solar water heater works', steps: ['Sunlight strikes the dark collector panel on the roof', 'Water in thin pipes inside the panel heats up', 'Hot water rises naturally into the storage tank', 'Cold water from the bottom of the tank flows back to the panel', 'Hot water is drawn from the top of the tank for household use', 'A backup electric heater operates on cloudy days'] };

/* --- cập nhật unit có sẵn --- */
const a = U('t1a');
a.theory.unshift({ h: 'Các dạng câu hỏi Task 1 (theo khoá học)', p: ['**1. Change over time**: có trục thời gian, nhiều mốc (line, bar, table nhiều năm).', '**2. No change over time**: một mốc thời gian hoặc không có năm, chỉ so sánh.', '**3. Mixed**: hai biểu đồ kết hợp.', '**4. Maps**: một hoặc hai bản đồ (thay đổi theo thời gian / đề xuất).', '**5. Process**: quy trình sản xuất hoặc tự nhiên.', '**6. Describe how something works**: mô tả cách một thiết bị hoạt động.', '**7. Odd questions**: các dạng lạ (sơ đồ phân loại, hình kết hợp...).'] });
a.exercises.splice(1, 0, { bloom: 'remember', type: 'match', title: 'Nhận dạng câu hỏi', instr: 'Chọn dạng câu hỏi cho mỗi đề.', options: ['Change over time', 'No change', 'Mixed', 'Maps', 'Process', 'How something works'],
  pairs: [
    { l: 'The graph shows sales of three phone brands from 2010 to 2022.', r: 'Change over time' },
    { l: 'The chart shows the average salary of six professions in 2021.', r: 'No change' },
    { l: 'The table shows car ownership in 2020 and the pie chart shows how people travel to work.', r: 'Mixed' },
    { l: 'The plans show a proposed redesign of a city park.', r: 'Maps' },
    { l: 'The diagram shows how instant noodles are manufactured.', r: 'Process' },
    { l: 'The diagram shows how a wind turbine generates electricity.', r: 'How something works' },
  ] });
a.exercises.push({ bloom: 'evaluate', type: 'match', title: 'Check-list Task 1 (Lesson 21)', instr: 'Đọc nhanh bài viết dưới đây và đánh dấu từng mục check-list.', options: ['Đạt', 'Chưa đạt'],
  passage: 'The graph shows the number of people commuting by car, bus and bicycle in Riverton between 2000 and 2020.\n\nCars were very popular. In 2000 there was 52,000 car users and in 2005 there was 60,000 and in 2010 there was 65,000. Bus was 30,000, 28,000 and 25,000. Bicycle went up a lot from 8,000 to 40,000 because people care more about health now.',
  pairs: [
    { l: 'Intro đã paraphrase chưa?', r: 'Chưa đạt' },
    { l: 'Overview đã rõ ràng chưa?', r: 'Chưa đạt' },
    { l: 'Thông tin đã được nhóm hợp lý chưa?', r: 'Chưa đạt' },
    { l: 'Không có ý kiến / giải thích nguyên nhân?', r: 'Chưa đạt' },
    { l: 'Không có lỗi ngữ pháp cơ bản (there was 52,000...)?', r: 'Chưa đạt' },
  ], ex: 'Intro chép đề, không có overview, liệt kê từng năm, có lý do "because people care...", và "there was 52,000 car users" sai hòa hợp.' });

const e = U('t1e');
e.exercises.splice(5, 0, { bloom: 'analyze', type: 'mcq', title: 'Natural process: vòng đời con tằm', instr: 'Quy trình tự nhiên khác quy trình nhân tạo ở đâu?', chart: PROCESS_SILK,
  items: [
    { q: 'Các bước tự nhiên (đẻ trứng, nở, ăn lá) nên dùng:', options: ['Chủ động hiện tại đơn: The moth lays eggs...', 'Bị động: Eggs are laid by... (bắt buộc)', 'Quá khứ đơn'], a: 0, ex: 'Quá trình tự nhiên thường dùng chủ động; các bước do con người làm (boiled, unwound) dùng bị động.' },
    { q: 'Overview phù hợp:', options: ['There are seven stages, beginning with the moth laying eggs and ending with silk fabric; the first four are natural and the last three are man-made.', 'Silk is very expensive.', 'First the moth lays eggs.'], a: 0 },
    { q: 'Từ vựng chu trình:', options: ['hatch into, feed on, spin a cocoon', 'surge, plummet, fluctuate', 'account for, make up'], a: 0 },
  ] });
e.exercises.push({ bloom: 'create', type: 'write', kind: 'task1', title: 'Viết bài Natural process', prompt: 'The diagram below shows the life cycle of the silkworm and the stages in the production of silk cloth.\n\nSummarise the information by selecting and reporting the main features. Write at least 150 words.', chart: PROCESS_SILK, minWords: 150, focus: ['chủ động cho giai đoạn tự nhiên', 'bị động cho giai đoạn nhân tạo', 'từ nối trình tự'] });

/* --- unit mới --- */
window.UNITS = window.UNITS.concat([
{
  id: 't1h', n: 2, stage: 'task1', lessons: 'Lesson 2 · Change over time – Task achievement', title: 'Change over time: Task Achievement',
  desc: 'Điểm Task Achievement đến từ việc chọn đúng đặc điểm chính, có overview rõ, số liệu chính xác và so sánh — không phải liệt kê hết.',
  theory: [
    { h: 'Band 7 TA cần gì?', p: ['Overview **rõ ràng** về xu hướng chính và điểm nổi bật.', '**Chọn lọc** số liệu: điểm đầu, điểm cuối, đỉnh/đáy, điểm giao nhau.', 'Số liệu **chính xác**, có đơn vị.', 'Không ý kiến, không giải thích lý do, không thông tin ngoài biểu đồ.'] },
    { h: 'Câu hỏi tự kiểm', p: ['Hạng mục nào tăng / giảm / ổn định?', 'Hạng mục nào cao nhất đầu và cuối giai đoạn? Có thay đổi thứ hạng không?', 'Thay đổi nào lớn nhất?'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'mcq', title: 'Đặc điểm "chính" là gì?', instr: 'Chọn thông tin ĐÁNG đưa vào bài.', chart: LINE_COFFEE,
      items: [
        { q: 'Thông tin chính:', options: ['Finland consumed by far the most coffee throughout.', 'Japan was 3.4 kg in 2005 and 3.4 kg in 2010.', 'Brazil was 5.3 kg in 2005.'], a: 0 },
        { q: 'Thông tin chính:', options: ['Vietnam showed the fastest growth, more than quadrupling.', 'Finland was 9.9 kg in 2015.', 'The chart has four lines.'], a: 0 },
        { q: 'Thông tin KHÔNG nên viết:', options: ['Finland\'s figure fell slightly to 9.6 kg.', 'Vietnam\'s rise is due to its growing café culture.', 'Brazil peaked at 6.1 kg in 2015.'], a: 1, ex: 'Giải thích nguyên nhân = thông tin ngoài biểu đồ.' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Overview đúng hay sai?', instr: 'Đánh giá mỗi overview cho biểu đồ cà phê.', chart: LINE_COFFEE,
      items: [
        { q: '"Overall, coffee consumption increased in all four countries."', options: ['Đúng', 'Sai: Finland giảm nhẹ'], a: 1 },
        { q: '"Overall, Finland remained the largest consumer despite a slight decline, while Vietnam saw the most significant growth."', options: ['Tốt', 'Thiếu ý'], a: 0 },
        { q: '"Overall, coffee is popular."', options: ['Quá chung chung, không có đặc điểm', 'Tốt'], a: 0 },
      ] },
    { bloom: 'apply', type: 'gap', title: 'Số liệu chính xác', instr: 'Điền số hoặc từ đúng theo biểu đồ.', chart: LINE_COFFEE,
      items: [
        { q: 'Vietnamese consumption rose from 0.6 kg to ___ kg over the period.', a: ['2.7'] },
        { q: 'Brazil reached a peak of ___ kg in 2015.', a: ['6.1'] },
        { q: 'Japan\'s figure increased ___ from 3.2 kg to 3.7 kg.', a: ['slightly', 'gradually', 'marginally', 'steadily'] },
        { q: 'Finland remained the ___ consumer throughout the period.', a: ['largest', 'biggest'] },
      ] },
    { bloom: 'analyze', type: 'match', title: 'Nhóm hạng mục cho 2 đoạn body', instr: 'Chọn đoạn body phù hợp.', chart: LINE_COFFEE, options: ['Body 1: nhóm tiêu thụ cao (ổn định/giảm nhẹ)', 'Body 2: nhóm tiêu thụ thấp hơn (tăng)'],
      pairs: [{ l: 'Finland', r: 'Body 1: nhóm tiêu thụ cao (ổn định/giảm nhẹ)' }, { l: 'Brazil', r: 'Body 1: nhóm tiêu thụ cao (ổn định/giảm nhẹ)' }, { l: 'Japan', r: 'Body 2: nhóm tiêu thụ thấp hơn (tăng)' }, { l: 'Vietnam', r: 'Body 2: nhóm tiêu thụ thấp hơn (tăng)' }],
      ex: 'Brazil tăng rồi chững lại ở mức cao, nên đi cùng Finland theo mức tiêu thụ; Japan và Vietnam ở mức thấp và tăng.' },
    { bloom: 'evaluate', type: 'mcq', title: 'Bài nào đạt TA cao hơn?', instr: 'So sánh hai đoạn body.', chart: LINE_COFFEE,
      items: [{ q: '', options: [
        'Finland was 10.5, 10.2, 9.8, 9.9 and 9.6 kg. Brazil was 4.8, 5.3, 5.9, 6.1 and 6.0 kg.',
        'Finland consumed the most coffee, although its figure dipped gradually from 10.5 kg to 9.6 kg. Brazil, the second-largest consumer, saw its consumption climb to a peak of 6.1 kg in 2015 before levelling off at 6 kg.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Viết bài Change over time', prompt: 'The graph below shows coffee consumption per person in four countries between 2000 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: LINE_COFFEE, minWords: 150, focus: ['task achievement', 'chọn lọc số liệu', 'overview'] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Luyện thêm: bảng du lịch Đông Nam Á', prompt: 'The table below shows the number of international tourist arrivals in four Southeast Asian countries in 2010, 2015, 2020 and 2023.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: { kind: 'table', title: 'International tourist arrivals (millions)', headers: ['Country', '2010', '2015', '2020', '2023'], rows: [['Thailand', '15.9', '29.9', '6.7', '28.2'], ['Vietnam', '5.0', '7.9', '3.8', '12.6'], ['Malaysia', '24.6', '25.7', '4.3', '20.1'], ['Singapore', '11.6', '15.2', '2.7', '13.6']] }, minWords: 150, focus: ['task achievement'] },
  ],
},
{
  id: 't1i', n: 3, stage: 'task1', lessons: 'Lesson 3 · Grammar + Coherence and Cohesion – Super boosters', title: 'Change: cấu trúc "super boosters" nối số liệu',
  desc: 'Bộ cấu trúc giúp nối nhiều mốc số liệu trong một câu mượt mà: started at... after which, followed by, before ending at, with a subsequent..., similar/opposite changes...',
  theory: [
    { h: 'Cấu trúc nối số liệu', p: [
      '**There was an increase in A (from X to Y), while B ...**',
      '**The figure for A started at X, after which it rose to Y.**',
      '**A rose to X in 2010, followed by a slight decline to Y.**',
      '**A climbed steadily, before ending the period at X.**',
      '**A stood at X, with a subsequent increase to Y.**',
      '**The figure for A + V..., and/but + V...** (một chủ ngữ, hai động từ)',
      '**Similar/Opposite changes can be seen in the figure for B, which ...**',
      '**The figure for B saw similar changes, rising/falling to ...**'] },
    { h: 'Cohesion', p: ['Dùng *the figure for / that of / this number / the former – the latter* để tránh lặp.', 'Từ nối có chủ đích: *Meanwhile, By contrast, Similarly, In the same period*.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'gap', title: 'Hoàn thành cấu trúc', instr: 'Điền MỘT từ.', chart: LINE_COFFEE,
      items: [
        { q: 'Vietnam\'s consumption started at 0.6 kg, after ___ it rose steadily to 2.7 kg.', a: ['which'] },
        { q: 'Brazil\'s figure climbed to 6.1 kg in 2015, ___ by a marginal drop to 6 kg.', a: ['followed'] },
        { q: 'Japan\'s consumption grew slowly, ___ ending the period at 3.7 kg.', a: ['before'] },
        { q: 'Finland stood at 10.5 kg in 2000, with a ___ decline to 9.6 kg.', a: ['subsequent', 'gradual', 'slight'] },
        { q: '___ changes can be seen in the figure for Japan, which also increased.', a: ['similar'] },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Nghĩa của cấu trúc', instr: 'Chọn cách hiểu đúng.',
      items: [
        { q: '"A rose to 50, followed by a fall to 40" nghĩa là:', options: ['Tăng lên 50 rồi giảm xuống 40', 'Giảm rồi tăng', 'Tăng 50 và giảm 40 cùng lúc'], a: 0 },
        { q: '"Opposite changes can be seen in B" nghĩa là:', options: ['B thay đổi giống A', 'B thay đổi ngược chiều A', 'B không đổi'], a: 1 },
        { q: '"the former / the latter" chỉ:', options: ['cái được nhắc trước / cái được nhắc sau', 'năm đầu / năm cuối'], a: 0 },
      ] },
    { bloom: 'apply', type: 'rewrite', title: 'Gộp 3 câu thành 1', instr: 'Gộp các ý thành MỘT câu dùng super boosters.', chart: LINE_COFFEE,
      items: [
        { q: 'Brazil was 4.8 kg in 2000. It rose to 6.1 kg in 2015. It fell slightly to 6 kg in 2020.', a: ['Brazil\'s consumption started at 4.8 kg in 2000, after which it rose to a peak of 6.1 kg in 2015, before ending the period at 6 kg.', 'Brazil\'s figure rose from 4.8 kg in 2000 to 6.1 kg in 2015, followed by a slight fall to 6 kg in 2020.'] },
        { q: 'Vietnam rose from 0.6 kg to 2.7 kg. Japan also rose, from 3.2 kg to 3.7 kg.', a: ['Vietnam\'s consumption rose from 0.6 kg to 2.7 kg, and similar changes can be seen in the figure for Japan, which increased from 3.2 kg to 3.7 kg.'] },
        { q: 'Finland fell from 10.5 kg to 9.8 kg in 2010. Then it stayed around 9.6–9.9 kg.', a: ['Finland\'s figure fell from 10.5 kg to 9.8 kg in 2010, after which it remained relatively stable at around 9.6 to 9.9 kg.'] },
      ] },
    { bloom: 'analyze', type: 'order', title: 'Sắp xếp câu dài', instr: 'Sắp xếp thành câu đúng.',
      items: [
        { words: 'The figure for Brazil / started at 4.8 kg, / after which it climbed / to a peak of 6.1 kg in 2015, / before ending the period at 6 kg' },
        { words: 'Finland, by contrast, / saw opposite changes, / with its consumption / falling gradually / to 9.6 kg' },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Đoạn nào mạch lạc hơn?', instr: 'Chọn đoạn tốt hơn về Coherence & Cohesion.', chart: LINE_COFFEE,
      items: [{ q: '', options: [
        'Vietnam rose. Vietnam was 0.6 kg. Vietnam was 2.7 kg. Japan rose. Japan was 3.2 kg. Japan was 3.7 kg.',
        'Vietnam saw the most rapid growth, with consumption rising from just 0.6 kg to 2.7 kg. Similar, though much smaller, changes can be seen in the figure for Japan, which edged up from 3.2 kg to 3.7 kg.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Viết body dùng ≥5 super boosters', prompt: 'The graph below shows coffee consumption per person in four countries between 2000 and 2020.\n\nViết **hai đoạn body** (khoảng 120–150 từ), dùng ít nhất 5 cấu trúc super boosters khác nhau.', chart: LINE_COFFEE, minWords: 110, focus: ['super boosters', 'coherence & cohesion'] },
  ],
},
{
  id: 't1j', n: 5, stage: 'task1', lessons: 'Lesson 5 · 1–4 categories · Lesson 6 · 5+ categories · Lesson 7 · <4 categories', title: 'Change: chia đoạn theo số hạng mục',
  desc: 'Cách nhóm thông tin vào 2 đoạn body tùy số hạng mục: 1–4 hạng mục, 5 hạng mục trở lên, hoặc rất ít hạng mục nhưng nhiều mốc thời gian.',
  theory: [
    { h: 'Nguyên tắc', p: ['**2–4 hạng mục**: nhóm theo xu hướng (tăng vs giảm) hoặc theo mức (cao vs thấp).', '**5+ hạng mục**: không tả từng cái; chọn hạng mục nổi bật, gộp nhóm giống nhau, dùng "the remaining categories".', '**Ít hạng mục (1–2), nhiều mốc**: chia theo **giai đoạn thời gian** (ví dụ 2000–2010 và 2010–2020).'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Cách chia phù hợp', instr: 'Chọn cách chia body.', options: ['Theo xu hướng / mức', 'Gộp nhóm, chọn nổi bật', 'Theo giai đoạn thời gian'],
      pairs: [
        { l: 'Line graph 3 đường: 2 tăng, 1 giảm', r: 'Theo xu hướng / mức' },
        { l: 'Bảng 8 quốc gia × 3 năm', r: 'Gộp nhóm, chọn nổi bật' },
        { l: 'Line graph 1 đường, 1990–2020, nhiều biến động', r: 'Theo giai đoạn thời gian' },
        { l: 'Bar chart 4 sản phẩm: 2 cao, 2 thấp', r: 'Theo xu hướng / mức' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Đọc bảng 6 quốc gia', instr: 'Bảng giờ làm việc nhà/tuần.', chart: TABLE_SIX,
      items: [
        { q: 'Xu hướng chung:', options: ['Tất cả đều giảm', 'Tất cả đều tăng', 'Nửa tăng nửa giảm'], a: 0 },
        { q: 'Nhóm cao nhất:', options: ['India, Mexico, Italy', 'Sweden, Canada', 'Japan, Sweden'], a: 0 },
        { q: 'Giảm nhiều nhất:', options: ['Mexico (4 giờ)', 'India (1 giờ)', 'Sweden (2 giờ)'], a: 0 },
      ] },
    { bloom: 'apply', type: 'match', title: 'Phân nhóm 6 quốc gia', instr: 'Đặt mỗi nước vào body phù hợp.', chart: TABLE_SIX, options: ['Body 1: nhóm nhiều giờ (≥20)', 'Body 2: nhóm ít giờ (<20)'],
      pairs: [{ l: 'India', r: 'Body 1: nhóm nhiều giờ (≥20)' }, { l: 'Mexico', r: 'Body 1: nhóm nhiều giờ (≥20)' }, { l: 'Italy', r: 'Body 1: nhóm nhiều giờ (≥20)' }, { l: 'Japan', r: 'Body 2: nhóm ít giờ (<20)' }, { l: 'Canada', r: 'Body 2: nhóm ít giờ (<20)' }, { l: 'Sweden', r: 'Body 2: nhóm ít giờ (<20)' }] },
    { bloom: 'analyze', type: 'rewrite', title: 'Viết câu gộp nhóm', instr: 'Viết MỘT câu mô tả cả nhóm.', chart: TABLE_SIX,
      items: [
        { q: 'Mô tả Sweden và Canada cùng lúc', a: ['Sweden and Canada recorded the lowest figures, with their respective times falling slightly from 14 and 15 hours to 12 and 13 hours.'] },
        { q: 'Mô tả India, Mexico, Italy cùng lúc', a: ['People in India, Mexico and Italy spent the most time on chores, at between 20 and 28 hours in both years, although all three saw slight decreases.'] },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Cách chia nào tốt hơn?', instr: 'Line graph: 1 đường, giá nhà 1990–2020: tăng chậm 1990–2005, giảm 2008, tăng mạnh 2010–2020.',
      items: [{ q: '', options: ['Body 1: 1990–2008 (tăng chậm rồi giảm); Body 2: 2008–2020 (phục hồi và tăng mạnh)', 'Body 1: số liệu chẵn; Body 2: số liệu lẻ', 'Chỉ một đoạn body dài'], a: 0 }] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Viết bài 6 hạng mục', prompt: 'The table below shows the average number of hours per week spent on household chores in six countries in 2005 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: TABLE_SIX, minWords: 150, focus: ['gộp nhóm', 'chọn nổi bật', 'tránh liệt kê'] },
  ],
},
{
  id: 't1k', n: 9, stage: 'task1', lessons: 'Lesson 9 · Future · Lesson 10 · Total', title: 'Change: dự đoán tương lai & hạng mục "Total"',
  desc: 'Ngôn ngữ dự đoán (is expected/projected to, will have + V3) và cách xử lý cột/hàng Total trong overview và body.',
  theory: [
    { h: 'Tương lai', p: ['*is expected / predicted / projected / forecast to + V*', '*is likely to + V*, *will + V*, *will have + V3 by...*', 'Tách rõ dữ liệu thật và dự đoán: *Between 2015 and 2020, ... It is projected that by 2035, ...*'] },
    { h: 'Total', p: ['Total thường đưa vào **overview** (xu hướng tổng) hoặc mở đầu body.', 'Có thể dùng để tính tỉ lệ: *food accounted for almost half of the total*.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'gap', title: 'Cấu trúc dự đoán', instr: 'Điền MỘT từ.', chart: BAR_FUTURE,
      items: [
        { q: 'Electric cars are ___ to account for all new sales in Norway by 2035.', a: ['expected', 'projected', 'predicted', 'forecast'] },
        { q: 'By 2035, the share in the USA ___ have reached 50%.', a: ['will'] },
        { q: 'China\'s figure is ___ to double between 2025 and 2035.', a: ['expected', 'projected', 'predicted', 'likely', 'forecast'] },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Thật hay dự đoán?', instr: 'Biểu đồ: 2015, 2020 là số liệu thật; 2025* trở đi là dự đoán.', chart: BAR_FUTURE,
      items: [
        { q: 'Câu đúng thì:', options: ['In 2020, 54% of new cars sold in Norway were electric.', 'In 2020, 54% of new cars will be electric in Norway.'], a: 0 },
        { q: 'Câu đúng thì:', options: ['In 2030, the USA reached 30%.', 'The USA is projected to reach 30% in 2030.'], a: 1 },
      ] },
    { bloom: 'apply', type: 'mcq', title: 'Xử lý Total', instr: 'Dựa vào bảng rác thải.', chart: TABLE_TOTAL,
      items: [
        { q: 'Overview nên có:', options: ['Total waste rose slightly over the period, and food was the largest category throughout.', 'Glass was 30 in 2010.', 'Paper fell by 35.'], a: 0 },
        { q: 'Food chiếm bao nhiêu phần tổng năm 2020?', options: ['Gần một nửa (150/325)', 'Một phần tư', 'Hai phần ba'], a: 0 },
        { q: 'Hai hạng mục giảm:', options: ['Paper và Glass', 'Food và Plastic', 'Plastic và Glass'], a: 0 },
      ] },
    { bloom: 'analyze', type: 'rewrite', title: 'Viết câu có Total', instr: 'Viết một câu theo yêu cầu.', chart: TABLE_TOTAL,
      items: [
        { q: 'Mô tả tổng rác thải và tỉ lệ của food năm 2020', a: ['The total amount of waste rose from 300,000 to 325,000 tonnes, with food accounting for almost half of this in 2020.'] },
        { q: 'Mô tả plastic tăng, so với tổng', a: ['Plastic waste rose from 60,000 to 95,000 tonnes, making it the fastest-growing category, while the total increased only modestly.'] },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Overview tương lai', instr: 'Chọn overview tốt nhất.', chart: BAR_FUTURE,
      items: [{ q: '', options: ['Overall, the share of electric cars rose in all three countries and is expected to keep growing, with Norway leading throughout and projected to reach 100% by 2035.', 'Overall, electric cars are good for the environment.', 'Overall, Norway was 22% in 2015.'], a: 0 }] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Viết bài có dự đoán', prompt: 'The chart below shows the share of electric cars in new car sales in three countries from 2015 to 2020, with projections to 2035.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: BAR_FUTURE, minWords: 150, focus: ['thì quá khứ vs dự đoán', 'overview'] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Viết bài có hàng Total', prompt: 'The table below shows the amount of waste collected in a city by type in 2010, 2015 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: TABLE_TOTAL, minWords: 150, focus: ['xử lý Total', 'tỉ lệ'] },
  ],
},
{
  id: 't1l', n: 13, stage: 'task1', lessons: 'Lesson 13 · No change – 2 items · Lesson 14 · No change – a lot of information', title: 'No change: 2 hạng mục & bảng nhiều thông tin',
  desc: 'Hai biến thể khó của No change: chỉ 2 nhóm (so sánh song song từng mục) và bảng nhiều cột (chọn lọc, không liệt kê).',
  theory: [
    { h: '2 items', p: ['Overview: nhóm nào cao hơn ở đa số mục + điểm ngược lại (nếu có).', 'Body: chia theo **mục** (không chia theo 2 nhóm), mỗi câu so sánh 2 nhóm.'] },
    { h: 'A lot of information', p: ['Chọn 2–3 cột quan trọng; tìm **cao nhất/thấp nhất** và **ngoại lệ**.', 'Overview: hạng mục vượt trội nhất về hầu hết chỉ số.', 'Body 1: hạng mục nổi bật nhất; Body 2: so sánh phần còn lại.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'mcq', title: 'Đọc biểu đồ 2 items', instr: 'Đi bộ vs đạp xe đến trường.', chart: BAR_TWO,
      items: [
        { q: 'Xu hướng của "Walk" theo cấp học:', options: ['Giảm dần', 'Tăng dần', 'Không đổi'], a: 0 },
        { q: 'Điểm đảo chiều:', options: ['Ở cấp Upper secondary, cycle vượt walk', 'Không có', 'Ở Primary'], a: 0 },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Overview 2 items', instr: 'Chọn overview tốt nhất.', chart: BAR_TWO,
      items: [{ q: '', options: ['Overall, walking became less common and cycling more common as students got older, with cycling overtaking walking at upper secondary level.', 'Overall, walk was 41% and cycle was 9%.', 'Overall, students like walking.'], a: 0, ex: 'Biểu đồ là một năm (2023) nhưng có trục cấp học, nên dùng "as students got older" thay vì từ thời gian.' }] },
    { bloom: 'apply', type: 'rewrite', title: 'So sánh song song', instr: 'Viết MỘT câu so sánh hai nhóm tại mỗi cấp.', chart: BAR_TWO,
      items: [
        { q: 'Primary', a: ['At primary level, 41% of students walked to school, compared to only 9% who cycled.'] },
        { q: 'Upper secondary', a: ['By upper secondary level, cycling had overtaken walking, at 30% and 19% respectively.', 'At upper secondary level, 30% of students cycled, whereas only 19% walked.'] },
      ] },
    { bloom: 'analyze', type: 'mcq', title: 'Chọn lọc bảng nhiều cột', instr: 'Bảng 5 thư viện, 5 chỉ số.', chart: TABLE_INFO,
      items: [
        { q: 'Đặc điểm nổi bật nhất:', options: ['Central dẫn đầu gần như mọi chỉ số', 'South có 160 nghìn sách', 'West mở 70 giờ'], a: 0 },
        { q: 'Ngoại lệ đáng nêu:', options: ['West có nhiều chỗ ngồi học và máy tính dù ít sách nhất', 'North có 40 máy tính', 'East mở 72 giờ'], a: 0 },
        { q: 'Thư viện yếu nhất:', options: ['South (ít máy tính, ít chỗ ngồi, ít giờ mở, ít khách nhất)', 'East', 'North'], a: 0 },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Body nào chọn lọc tốt hơn?', instr: 'Bảng thư viện.', chart: TABLE_INFO,
      items: [{ q: '', options: [
        'North has 150, 40, 180, 60 and 28. East has 95, 55, 220, 72 and 34. South has 160, 20, 90, 48 and 15.',
        'Among the smaller branches, West and East offered relatively generous study facilities, with 260 and 220 seats respectively, and attracted the most visitors after Central. South, despite holding the second-largest collection, had the fewest computers, seats and opening hours, and drew only 15,000 visitors a month.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Viết bài 2 items', prompt: 'The chart below shows the proportion of students at three school levels who walk or cycle to school in 2023.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: BAR_TWO, minWords: 150, focus: ['so sánh song song', 'overview 2 items'] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Viết bài bảng nhiều thông tin', prompt: 'The table below gives information about the facilities and usage of five public libraries in a city in 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: TABLE_INFO, minWords: 150, focus: ['chọn lọc', 'ngoại lệ', 'không liệt kê'] },
  ],
},
{
  id: 't1m', n: 19, stage: 'task1', lessons: 'Lesson 19 · Describe how something works · Lesson 20 · Odd questions', title: 'How something works & dạng đề lạ',
  desc: 'Mô tả cách một thiết bị vận hành (nguyên lý, bộ phận, chu trình) và chiến lược cho các dạng đề "lạ".',
  theory: [
    { h: 'How something works', p: ['Overview: thiết bị gồm mấy bộ phận chính, hoạt động theo chu trình hay tuyến tính, nguồn năng lượng gì.', 'Dùng **hiện tại đơn chủ động** cho bộ phận hoạt động (*the panel absorbs*), bị động cho tác động (*water is heated*).', 'Từ vựng: *absorb, convert into, flow through, circulate, be connected to, be stored in*.'] },
    { h: 'Odd questions', p: ['Bình tĩnh xác định: có thời gian không? có so sánh không? có trình tự không?', 'Áp dụng khung chung: Intro – Overview (2 ý lớn) – 2 body chia hợp lý.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'order', title: 'Thứ tự hoạt động', instr: 'Sắp xếp các bước của bình nước nóng năng lượng mặt trời.',
      items: [{ words: 'sunlight strikes the panel / water in the pipes heats up / hot water rises into the tank / cold water returns to the panel / hot water is drawn for use' }] },
    { bloom: 'understand', type: 'mcq', title: 'Hiểu sơ đồ', instr: 'Dựa vào sơ đồ.', chart: PROCESS_WORKS,
      items: [
        { q: 'Đây là:', options: ['Một chu trình tuần hoàn', 'Một quy trình sản xuất tuyến tính'], a: 0 },
        { q: 'Bộ phận dự phòng:', options: ['Electric heater', 'Storage tank', 'Collector panel'], a: 0 },
      ] },
    { bloom: 'apply', type: 'gap', title: 'Động từ mô tả hoạt động', instr: 'Điền MỘT động từ đúng dạng.', chart: PROCESS_WORKS,
      items: [
        { q: 'The dark panel ___ heat from the sun.', a: ['absorbs', 'collects'] },
        { q: 'The heated water ___ naturally into the storage tank.', a: ['rises', 'flows'] },
        { q: 'Cold water then ___ back to the panel to be reheated.', a: ['flows', 'returns', 'circulates'] },
        { q: 'On cloudy days, a backup heater is ___ on.', a: ['switched', 'turned'] },
      ] },
    { bloom: 'analyze', type: 'mcq', title: 'Chia body', instr: 'Chọn cách chia hợp lý nhất.', chart: PROCESS_WORKS,
      items: [{ q: '', options: ['Body 1: thu nhiệt và tuần hoàn nước; Body 2: lưu trữ, sử dụng và hệ thống dự phòng', 'Mỗi bước một đoạn', 'Body 1: bước lẻ; Body 2: bước chẵn'], a: 0 }] },
    { bloom: 'evaluate', type: 'mcq', title: 'Overview tốt nhất', instr: 'Chọn overview.', chart: PROCESS_WORKS,
      items: [{ q: '', options: ['Overall, the system uses solar energy to heat water in a continuous cycle between a roof panel and a storage tank, with an electric heater as a backup.', 'Overall, solar energy is clean and cheap.', 'Overall, first sunlight strikes the panel.'], a: 0 }] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Viết bài How something works', prompt: 'The diagram below shows how a solar water heater works.\n\nSummarise the information by selecting and reporting the main features. Write at least 150 words.', chart: PROCESS_WORKS, minWords: 150, focus: ['mô tả nguyên lý', 'chủ động/bị động', 'từ nối'] },
  ],
},
]);
})();
