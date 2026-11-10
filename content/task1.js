/* Chặng 2 — IELTS Writing Task 1 (Academic). Nội dung & số liệu tự soạn. */
(function () {
const LINE_BIKES = { kind: 'line', title: 'Number of people commuting by different modes in Riverton (thousands), 2000–2020', unit: 'thousands', labels: ['2000', '2005', '2010', '2015', '2020'],
  series: [{ name: 'Car', data: [52, 60, 65, 63, 55] }, { name: 'Bus', data: [30, 28, 25, 25, 25] }, { name: 'Bicycle', data: [8, 10, 16, 27, 40] }] };
const BAR_SPEND = { kind: 'bar', title: 'Average monthly household spending in three countries (USD), 2022', unit: 'USD', labels: ['Housing', 'Food', 'Transport', 'Leisure'],
  series: [{ name: 'Country A', data: [900, 400, 250, 300] }, { name: 'Country B', data: [600, 450, 150, 120] }, { name: 'Country C', data: [1200, 380, 300, 450] }] };
const PIE_ENERGY = { kind: 'pie', unit: '%', title: 'Electricity generation by source in Country X', pies: [
  { title: '2000', slices: [{ name: 'Coal', value: 55 }, { name: 'Gas', value: 20 }, { name: 'Hydro', value: 18 }, { name: 'Solar & Wind', value: 2 }, { name: 'Other', value: 5 }] },
  { title: '2020', slices: [{ name: 'Coal', value: 30 }, { name: 'Gas', value: 25 }, { name: 'Hydro', value: 17 }, { name: 'Solar & Wind', value: 23 }, { name: 'Other', value: 5 }] }] };
const PROCESS_GLASS = { kind: 'process', title: 'How glass bottles are recycled', steps: ['Used bottles collected from recycling bins', 'Transported to a sorting plant', 'Sorted by colour (clear, green, brown)', 'Washed to remove labels and dirt', 'Crushed into small pieces (cullet)', 'Melted in a furnace at 1,500°C', 'Moulded into new bottles', 'Filled, labelled and sent to shops'] };
const MAP_TOWN = { kind: 'map', title: 'Lakeside village, 2000 and today', maps: [
  { title: '2000', items: [{ name: 'Farmland', x: 5, y: 5, w: 40, h: 40, color: '#e9f3d6' }, { name: 'Lake', x: 55, y: 10, w: 35, h: 30, color: '#cfe6fb' }, { name: 'Houses', x: 5, y: 55, w: 30, h: 25 }, { name: 'Primary school', x: 40, y: 55, w: 20, h: 20 }, { name: 'Forest', x: 65, y: 55, w: 30, h: 35, color: '#cfe9c9' }, { name: 'Main road', x: 0, y: 47, w: 100, h: 5, color: '#ddd' }] },
  { title: 'Today', items: [{ name: 'Housing estate', x: 5, y: 5, w: 40, h: 40 }, { name: 'Lake', x: 55, y: 10, w: 35, h: 30, color: '#cfe6fb' }, { name: 'Lakeside café', x: 55, y: 1, w: 18, h: 8, color: '#fde7c8' }, { name: 'Houses', x: 5, y: 55, w: 30, h: 25 }, { name: 'Secondary school', x: 38, y: 55, w: 23, h: 20 }, { name: 'Car park', x: 40, y: 78, w: 20, h: 12, color: '#eee' }, { name: 'Forest', x: 75, y: 55, w: 20, h: 35, color: '#cfe9c9' }, { name: 'Sports centre', x: 63, y: 60, w: 11, h: 25, color: '#fde7c8' }, { name: 'Main road', x: 0, y: 47, w: 100, h: 5, color: '#ddd' }] }] };
const TABLE_TOURISM = { kind: 'table', title: 'International tourist arrivals (millions)', headers: ['Country', '2010', '2015', '2020', '2023'], rows: [['Thailand', '15.9', '29.9', '6.7', '28.2'], ['Vietnam', '5.0', '7.9', '3.8', '12.6'], ['Malaysia', '24.6', '25.7', '4.3', '20.1'], ['Singapore', '11.6', '15.2', '2.7', '13.6']] };

window.UNITS = (window.UNITS || []).concat([
{
  id: 't1a', n: 1, stage: 'task1', lessons: 'Lesson 1 · Tổng quan · Lesson 21 · Check-list Task 1', title: 'Tổng quan Task 1: các dạng đề, Intro & Overview',
  desc: 'Cấu trúc 4 đoạn, cách paraphrase đề bài và viết Overview — đoạn quyết định Task Achievement.',
  theory: [
    { h: 'Bố cục chuẩn (150–190 từ, ~20 phút)', p: ['**Introduction**: paraphrase đề (1 câu).', '**Overview**: 2 đặc điểm nổi bật nhất, KHÔNG số liệu chi tiết.', '**Body 1 & 2**: nhóm dữ liệu hợp lý, có số liệu và so sánh.', 'Không cần kết luận riêng; không đưa ý kiến cá nhân/lý do.'] },
    { h: 'Paraphrase', p: ['shows → *illustrates / compares / gives information about*', 'the number of people → *how many people*', 'in three countries → *in Vietnam, Thailand and Malaysia*', 'from 2000 to 2020 → *over a 20-year period starting in 2000*'] },
    { h: 'Overview tìm gì?', p: ['Xu hướng chung (tăng/giảm), hạng mục cao nhất/thấp nhất, thay đổi lớn nhất, điểm giống nhau.', 'Mở đầu: *Overall, it is clear that... / In general, ...*'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Mỗi đoạn làm gì?', instr: 'Nối thành phần bài với chức năng.', options: ['Introduction', 'Overview', 'Body paragraph', 'Không nên có'],
      pairs: [
        { l: 'Viết lại đề bằng từ khác', r: 'Introduction' }, { l: 'Nêu 2 xu hướng/đặc điểm chính, không số liệu', r: 'Overview' },
        { l: 'Số liệu cụ thể và so sánh', r: 'Body paragraph' }, { l: 'Giải thích nguyên nhân của số liệu', r: 'Không nên có' },
        { l: 'Ý kiến cá nhân về xu hướng', r: 'Không nên có' }, { l: 'Nhóm các hạng mục có đặc điểm giống nhau', r: 'Body paragraph' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Paraphrase tốt hay chưa?', instr: 'Đề: *The graph below shows the number of people using three types of transport in a city between 2000 and 2020.*',
      items: [
        { q: 'Câu Introduction nào tốt nhất?', options: ['The graph below shows the number of people using three types of transport in a city between 2000 and 2020.', 'The line graph illustrates how many commuters used cars, buses and bicycles in a city over a 20-year period from 2000.', 'The graph shows transport is very important in the city.'], a: 1, ex: 'A chép nguyên đề; C sai nội dung.' },
        { q: '"how many commuters" thay cho:', options: ['the number of people', 'three types of transport', 'in a city'], a: 0 },
        { q: 'Từ nào KHÔNG thay được "shows" trong mọi trường hợp?', options: ['illustrates', 'proves', 'compares'], a: 1, ex: '"proves" mang nghĩa chứng minh, không phù hợp mô tả.' },
      ] },
    { bloom: 'apply', type: 'rewrite', title: 'Paraphrase đề bài', instr: 'Viết câu Introduction (1 câu) cho mỗi đề.',
      items: [
        { q: 'The chart below shows the percentage of households with internet access in five countries in 2010 and 2020.', a: ['The bar chart compares the proportion of homes that had internet access in five nations in 2010 and 2020.'] },
        { q: 'The table gives information about the amount of rice exported by four countries from 2015 to 2022.', a: ['The table illustrates how much rice four countries exported over the period between 2015 and 2022.'] },
        { q: 'The diagram shows how olive oil is produced.', a: ['The diagram illustrates the process by which olive oil is made.', 'The diagram illustrates the stages in the production of olive oil.'] },
        { q: 'The maps show changes to a town centre between 1990 and the present day.', a: ['The maps illustrate how a town centre has changed from 1990 to the present.', 'The maps compare a town centre in 1990 and now.'] },
      ] },
    { bloom: 'analyze', type: 'mcq', title: 'Tìm đặc điểm chính cho Overview', instr: 'Quan sát biểu đồ.', chart: LINE_BIKES,
      items: [
        { q: 'Đặc điểm nào xứng đáng đưa vào Overview?', options: ['Bus users were 28,000 in 2005.', 'Cycling grew significantly and became more popular than the bus.', 'Car users were 63,000 in 2015.'], a: 1 },
        { q: 'Đặc điểm thứ hai cho Overview:', options: ['The car remained the most popular mode throughout the period.', 'Bus use was 25,000 in 2010.', 'Bicycles were 8,000 in 2000.'], a: 0 },
        { q: 'Cách nhóm Body hợp lý nhất:', options: ['Body 1: 2000–2010; Body 2: 2010–2020', 'Body 1: Car & Bus (giảm/ổn định); Body 2: Bicycle (tăng mạnh)', 'Mỗi năm một đoạn'], a: 1 },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Chấm điểm Overview', instr: 'Chọn Overview tốt nhất cho biểu đồ trên.', chart: LINE_BIKES,
      items: [
        { q: '', options: ['Overall, car use rose from 52,000 to 65,000 and then fell to 55,000, while bicycles rose from 8,000 to 40,000.', 'Overall, while the car remained the most common way to commute, cycling saw the most dramatic growth, overtaking the bus by the end of the period.', 'In conclusion, I think more people should cycle because it is healthy.'], a: 1, ex: 'A quá nhiều số; C có ý kiến cá nhân.' },
        { q: 'Vấn đề của Overview: "Overall, the bus was stable."', options: ['Thiếu đặc điểm quan trọng nhất (cycling tăng, car dẫn đầu)', 'Sai ngữ pháp', 'Quá dài'], a: 0 },
      ] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Viết Introduction + Overview',
      prompt: 'The graph below shows the number of people commuting by car, bus and bicycle in Riverton between 2000 and 2020.\n\nChỉ viết **Introduction + Overview** (khoảng 50–70 từ).', chart: LINE_BIKES, minWords: 45,
      focus: ['paraphrase', 'overview không số liệu'] },
  ],
},
{
  id: 't1b', n: 4, stage: 'task1', lessons: 'Lesson 4 · Vocabulary', title: 'Change: từ vựng mô tả xu hướng',
  desc: 'Từ vựng tăng/giảm/dao động/ổn định, cấu trúc "There was + adj + noun" và "S + V + adv", kèm cách nói "không thay đổi".',
  theory: [
    { h: 'Hai cấu trúc chính', p: ['**S + V + adv**: *Car use **rose steadily** to 65,000.*', '**There was + a/an + adj + N + in**: *There was **a steady rise in** car use.*', 'Danh từ làm chủ ngữ: *2010 **saw** a sharp increase in...*'] },
    { h: 'Từ vựng', p: ['Tăng: rise, increase, grow, climb, surge (mạnh). Giảm: fall, decline, drop, decrease, plummet (mạnh).', 'Ổn định/không đổi: *remain stable/unchanged, level off, plateau, stay constant at*.', 'Dao động: *fluctuate around/between*. Đỉnh/đáy: *peak at, hit a low of*.', 'Mức độ: dramatic(ally), significant(ly), sharp(ly), steady/steadily, gradual(ly), slight(ly).'] },
    { h: 'Giới từ', p: ['rise **to** 40 (đến), rise **by** 10 (thêm), **from** 8 **to** 40, **at** 25 (đứng ở mức), **with** 40%.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Từ vựng xu hướng', instr: 'Chọn loại xu hướng.', options: ['Tăng', 'Giảm', 'Không đổi', 'Dao động', 'Đỉnh'],
      pairs: [
        { l: 'surge', r: 'Tăng' }, { l: 'plummet', r: 'Giảm' }, { l: 'level off', r: 'Không đổi' }, { l: 'fluctuate', r: 'Dao động' },
        { l: 'peak at', r: 'Đỉnh' }, { l: 'remain unchanged', r: 'Không đổi' }, { l: 'decline', r: 'Giảm' }, { l: 'climb', r: 'Tăng' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Giới từ & mức độ', instr: 'Chọn đáp án đúng.',
      items: [
        { q: 'Từ 30 lên 45: "The figure rose ___ 15."', options: ['to', 'by', 'at'], a: 1 },
        { q: 'Từ 30 lên 45: "The figure rose ___ 45."', options: ['to', 'by', 'with'], a: 0 },
        { q: 'Từ 50 xuống 49: mô tả phù hợp nhất:', options: ['plummeted', 'fell slightly', 'dropped dramatically'], a: 1 },
        { q: 'Giữ ở 25 trong 10 năm:', options: ['remained stable at 25', 'remained stable in 25', 'stabled at 25'], a: 0 },
        { q: '"There was a ___ increase in sales."', options: ['sharply', 'sharp', 'sharpness'], a: 1, ex: 'Trước danh từ dùng tính từ.' },
      ] },
    { bloom: 'apply', type: 'gap', title: 'Mô tả biểu đồ Riverton', instr: 'Điền MỘT từ cho mỗi chỗ trống dựa vào biểu đồ.', chart: LINE_BIKES,
      items: [
        { q: 'The number of cyclists rose ___ 8,000 in 2000 to 40,000 in 2020.', a: ['from'] },
        { q: 'Car commuters ___ at 65,000 in 2010 before declining.', a: ['peaked'] },
        { q: 'From 2010 onwards, bus use remained ___ at 25,000.', a: ['stable', 'constant', 'unchanged', 'steady'] },
        { q: 'There was a dramatic ___ in cycling between 2010 and 2020.', a: ['increase', 'rise', 'growth'] },
        { q: 'Car use fell ___ 10,000 between 2010 and 2020.', a: ['by'] },
        { q: 'Bus use decreased ___ in the first decade, from 30,000 to 25,000.', a: ['gradually', 'slightly', 'steadily'] },
      ] },
    { bloom: 'analyze', type: 'order', title: 'Sắp xếp câu mô tả', instr: 'Tạo câu đúng.',
      items: [
        { words: 'The number of cyclists / rose dramatically / to 40,000 / by 2020' },
        { words: '2010 / saw / a peak / in the number of / car commuters' },
        { words: 'Bus use / remained unchanged / at 25,000 / from 2010 onwards' },
        { words: 'Cycling / overtook / the bus / in around 2015' },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Sửa đoạn body', instr: 'Chọn phương án cải thiện tốt nhất.', chart: LINE_BIKES,
      items: [
        { q: '"Car went up and up then down." nên sửa thành:', options: ['Car use increased to a peak of 65,000 in 2010 before falling to 55,000 in 2020.', 'Car was up and then it is down.', 'Car increased very very much.'], a: 0 },
        { q: 'Câu nào chính xác về dữ liệu?', options: ['Cycling overtook car use in 2020.', 'Cycling overtook bus use between 2010 and 2015.', 'Bus use increased steadily.'], a: 1 },
        { q: 'Câu nào thể hiện so sánh tốt nhất?', options: ['In 2020, there were 55,000 car users and 40,000 cyclists.', 'By 2020, the gap between car users and cyclists had narrowed to just 15,000.', 'Cars and bicycles are different.'], a: 1 },
      ] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Viết bài Line graph hoàn chỉnh',
      prompt: 'The graph below shows the number of people commuting by car, bus and bicycle in Riverton between 2000 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: LINE_BIKES, minWords: 150,
      focus: ['từ vựng xu hướng', 'giới từ số liệu', 'overview'],
      tips: ['Intro: paraphrase.', 'Overview: car luôn cao nhất; cycling tăng mạnh nhất, vượt bus.', 'Body 1: car (tăng → đỉnh 2010 → giảm) + bus (giảm nhẹ rồi đi ngang).', 'Body 2: bicycle tăng 5 lần, vượt bus khoảng 2015.'] },
  ],
},
{
  id: 't1c', n: 11, stage: 'task1', lessons: 'Lesson 11 · No change · Lesson 12 · No change – Overview', title: 'Dạng No change: so sánh số liệu tĩnh',
  desc: 'Biểu đồ chỉ có MỘT mốc thời gian (hoặc không có thời gian): không có xu hướng, chỉ có so sánh. Luyện 7 cấu trúc so sánh xoay vòng để không lặp câu.',
  theory: [
    { h: 'Nhận diện', p: ['Chỉ một năm (in 2022) hoặc không có năm → **No change**. Không dùng rise/fall; dùng so sánh, xếp hạng, tỉ lệ.', 'Thì: quá khứ đơn nếu có năm trong quá khứ, hiện tại đơn nếu không có năm.'] },
    { h: 'Bộ cấu trúc so sánh cho MỘT hạng mục', p: [
      '**A was X, and the figure for B was considerably lower, at Y.**',
      '**A far exceeded B, with respective figures of X and Y.**',
      '**The figures for A and B were X and Y respectively.**',
      '**While X of A did something, only Y of B did so.**',
      '**X of A did something, compared to Y of B.**',
      '**A (X) was much higher than that of B, which stood at only Y.**',
      '**A marked difference can be seen between A and B, at X and Y in that order.**'] },
    { h: 'Mẹo nhóm dữ liệu', p: ['Nhóm theo **hạng mục** (không chia từng nước một) để đoạn văn có so sánh.', 'Dùng **that of / those of** để tránh lặp danh từ: *the income of doctors was double **that of** nurses*.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Change hay No change?', instr: 'Phân loại mô tả biểu đồ.', options: ['Change', 'No change', 'Mixed'],
      pairs: [
        { l: 'Bar chart: lượng nước dùng ở 5 nước năm 2021', r: 'No change' },
        { l: 'Line graph: giá nhà 2000–2020', r: 'Change' },
        { l: 'Table: số giờ làm việc trung bình theo nghề (không ghi năm)', r: 'No change' },
        { l: 'Bar chart: doanh số 3 hãng xe năm 2010, 2015, 2020', r: 'Change' },
        { l: 'Pie chart 2019 + line graph 2010–2019', r: 'Mixed' },
        { l: 'Pie chart: cơ cấu chi tiêu một hộ gia đình năm 2023', r: 'No change' },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Hiểu đúng cấu trúc', instr: 'Dữ liệu: **cyclists — men 34%, women 18%** (2022).',
      items: [
        { q: '"Men far exceeded women, with respective figures of 34% and 18%." nghĩa là:', options: ['Nam 34%, nữ 18%', 'Nam 18%, nữ 34%', 'Nam vượt nữ 34%'], a: 0, ex: '"respective" giữ đúng thứ tự A → B.' },
        { q: '"While 34% of men cycled regularly, only 18% of women did so." — "did so" thay cho:', options: ['cycled regularly', 'were men', '34%'], a: 0 },
        { q: 'Câu nào SAI về dữ liệu?', options: ['The figure for women was roughly half that of men.', 'The proportion of female cyclists was higher than that of men.', 'Men were almost twice as likely to cycle as women.'], a: 1 },
        { q: '"...at 34% and 18% in that order." "in that order" tương đương:', options: ['respectively', 'approximately', 'in total'], a: 0 },
      ] },
    { bloom: 'apply', type: 'gap', title: 'Điền từ vào cấu trúc', instr: 'Điền MỘT từ cho mỗi chỗ trống.', chart: { kind: 'bar', title: 'Percentage of adults who exercise weekly, by age group (2023)', unit: '%', labels: ['18–29', '30–44', '45–59', '60+'], series: [{ name: 'Men', data: [62, 48, 40, 35] }, { name: 'Women', data: [55, 46, 41, 30] }] },
      items: [
        { q: '62% of men aged 18–29 exercised weekly, ___ to 55% of women in the same age group.', a: ['compared'] },
        { q: 'The figures for men and women aged 30–44 were 48% and 46% ___.', a: ['respectively'] },
        { q: 'While 35% of men over 60 exercised weekly, only 30% of women did ___.', a: ['so'] },
        { q: 'The proportion of active men aged 18–29 was much higher than ___ of men over 60.', a: ['that'] },
        { q: 'Women aged 45–59 slightly ___ their male counterparts, at 41% and 40%.', a: ['exceeded', 'outnumbered', 'outperformed'] },
        { q: 'The youngest group had the ___ participation rates for both genders.', a: ['highest'] },
      ] },
    { bloom: 'analyze', type: 'rewrite', title: 'Một số liệu, bảy cách viết', instr: 'Dữ liệu: **Doctors earn $8,200/month, nurses earn $4,100/month** (2022). Viết lại theo cấu trúc được yêu cầu.',
      items: [
        { q: 'Dùng "respective figures"', a: ['Doctors earned far more than nurses, with respective figures of $8,200 and $4,100 per month.'] },
        { q: 'Dùng "compared to"', a: ['Doctors earned $8,200 per month, compared to $4,100 for nurses.'] },
        { q: 'Dùng "While ..., only ... did so" hoặc tương tự với "while"', a: ['While doctors earned $8,200 per month, nurses earned only $4,100.'] },
        { q: 'Dùng "double that of"', a: ['The monthly income of doctors was double that of nurses, at $8,200 and $4,100 respectively.'] },
        { q: 'Dùng "A marked difference can be seen..."', a: ['A marked difference can be seen between the monthly salaries of doctors and nurses, at $8,200 and $4,100 in that order.'] },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Đoạn body nào tốt hơn?', instr: 'Dữ liệu: % hộ gia đình có ô tô — Đức 78%, Pháp 81%, Ý 79%, Tây Ban Nha 65%, Ba Lan 54% (2022).',
      items: [
        { q: '', options: [
          'Germany was 78%. France was 81%. Italy was 79%. Spain was 65%. Poland was 54%.',
          'Car ownership was similarly high in France, Italy and Germany, at 81%, 79% and 78% respectively. By contrast, the figures for Spain and Poland were noticeably lower, at 65% and just over half.',
          'France had the most cars because French people are rich, while Poland had the fewest.'], a: 1, ex: 'B nhóm các nước giống nhau, dùng respectively, so sánh nhóm khác; C giải thích nguyên nhân (không được).' },
        { q: 'Câu nào tránh lặp từ tốt nhất?', options: ['The percentage of households in Spain was lower than the percentage of households in Italy.', 'The percentage of households with a car in Spain was lower than that in Italy.', 'Spain percentage was lower than Italy percentage.'], a: 1 },
      ] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Viết bài No change hoàn chỉnh',
      prompt: 'The chart below shows the percentage of adults who exercise at least once a week, by age group and gender, in 2023.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
      chart: { kind: 'bar', title: 'Percentage of adults who exercise weekly, by age group (2023)', unit: '%', labels: ['18–29', '30–44', '45–59', '60+'], series: [{ name: 'Men', data: [62, 48, 40, 35] }, { name: 'Women', data: [55, 46, 41, 30] }] },
      minWords: 150, focus: ['cấu trúc so sánh No change', 'nhóm dữ liệu', 'không dùng từ xu hướng'],
      tips: ['Overview: tỉ lệ giảm dần theo tuổi; nam nhìn chung cao hơn nữ (trừ nhóm 45–59).', 'Body 1: hai nhóm trẻ.', 'Body 2: hai nhóm lớn tuổi + ngoại lệ 45–59.', 'Xoay vòng ít nhất 4 cấu trúc khác nhau.'] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Luyện thêm: bảng chi tiêu hộ gia đình',
      prompt: 'The bar chart below shows average monthly household spending on four categories in three countries in 2022.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: BAR_SPEND, minWords: 150,
      focus: ['nhóm theo hạng mục', 'respectively / compared to / that of'] },
  ],
},
{
  id: 't1g', n: 15, stage: 'task1', lessons: 'Lesson 15 · Mixed charts', title: 'Dạng Mixed: hai biểu đồ kết hợp',
  desc: 'Hai biểu đồ khác loại (ví dụ line + pie, table + bar). Viết overview bao cả hai, mỗi body một biểu đồ, và tìm điểm liên kết.',
  theory: [
    { h: 'Chiến lược', p: ['Intro: paraphrase cả hai biểu đồ trong một câu (*The line graph shows..., while the pie chart illustrates...*).', 'Overview: **một ý chính cho mỗi biểu đồ**.', 'Body 1: biểu đồ thứ nhất; Body 2: biểu đồ thứ hai. Mỗi biểu đồ dùng đúng ngôn ngữ của nó (Change hoặc No change).', 'Không cần nối nhân quả giữa hai biểu đồ nếu đề không cho thông tin.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'mcq', title: 'Ngôn ngữ cho từng phần', instr: 'Line graph: số khách du lịch đến Đà Nẵng 2015–2023. Pie chart: mục đích chuyến đi năm 2023.',
      items: [
        { q: 'Từ nào dùng cho line graph?', options: ['accounted for', 'surged', 'the largest share'], a: 1 },
        { q: 'Từ nào dùng cho pie chart?', options: ['made up', 'plummeted', 'fluctuated'], a: 0 },
        { q: 'Intro nên:', options: ['Chỉ nhắc line graph', 'Nhắc cả hai biểu đồ', 'Bỏ qua'], a: 1 },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Đọc hai biểu đồ', instr: 'Dựa vào số liệu.', chart: { kind: 'line', title: 'International visitors to Da Nang (millions), 2015–2023', unit: 'millions', labels: ['2015', '2017', '2019', '2021', '2023'], series: [{ name: 'Visitors', data: [1.7, 2.6, 3.5, 0.2, 3.0] }] },
      passage: 'Pie chart (2023) — Purpose of visit: Leisure 68%, Business 14%, Visiting friends/relatives 11%, Other 7%.',
      items: [
        { q: 'Ý chính của line graph:', options: ['Lượng khách tăng đều suốt giai đoạn', 'Tăng mạnh đến 2019, sụt gần như hoàn toàn năm 2021, rồi phục hồi gần mức cũ', 'Không thay đổi'], a: 1 },
        { q: 'Ý chính của pie chart:', options: ['Du lịch nghỉ dưỡng chiếm phần lớn (hơn hai phần ba)', 'Công tác chiếm đa số', 'Các mục đích ngang nhau'], a: 0 },
        { q: '"Visitor numbers in 2023 had fully recovered to the 2019 level." là:', options: ['Đúng', 'Sai'], a: 1, ex: '3.0 < 3.5.' },
      ] },
    { bloom: 'apply', type: 'rewrite', title: 'Viết câu Overview kép', instr: 'Viết MỘT câu overview bao cả hai biểu đồ (Đà Nẵng).',
      items: [{ q: 'Line graph (2015–2023) + Pie chart (2023, mục đích chuyến đi)', a: ['Overall, the number of international visitors to Da Nang grew strongly before collapsing in 2021 and then largely recovering, while leisure was by far the main purpose of visits in 2023.'] }] },
    { bloom: 'analyze', type: 'order', title: 'Sắp xếp đoạn Intro + Overview', instr: 'Sắp xếp thành đoạn mở đầu hợp lý.',
      items: [{ words: 'The line graph illustrates changes in the number of international visitors to Da Nang between 2015 and 2023, / while the pie chart shows why they visited the city in 2023. / Overall, visitor numbers rose significantly before a sharp drop in 2021, / and the vast majority of trips in 2023 were for leisure.' }] },
    { bloom: 'evaluate', type: 'mcq', title: 'Body paragraph nào hợp lệ?', instr: 'Chọn đoạn tốt nhất cho phần pie chart.',
      items: [{ q: '', options: [
        'In 2023, leisure travel accounted for just over two-thirds of all visits, at 68%. Business trips and visits to friends or relatives made up much smaller shares, at 14% and 11% respectively, while other purposes represented only 7%.',
        'Leisure rose to 68% while business fell to 14%.',
        'Because Da Nang has beautiful beaches, most tourists went there for leisure.'], a: 0, ex: 'B dùng từ xu hướng cho biểu đồ tĩnh; C giải thích nguyên nhân.' }] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Viết bài Mixed hoàn chỉnh',
      prompt: 'The line graph shows the number of international visitors to Da Nang between 2015 and 2023, and the pie chart shows the purposes of their visits in 2023.\n\nPie chart (2023): Leisure 68%, Business 14%, Visiting friends/relatives 11%, Other 7%.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
      chart: { kind: 'line', title: 'International visitors to Da Nang (millions), 2015–2023', unit: 'millions', labels: ['2015', '2017', '2019', '2021', '2023'], series: [{ name: 'Visitors', data: [1.7, 2.6, 3.5, 0.2, 3.0] }] },
      minWords: 150, focus: ['overview kép', 'ngôn ngữ Change + No change'] },
  ],
},
{
  id: 't1d', n: 8, stage: 'task1', lessons: 'Lesson 8 · 2 years (ví dụ với pie chart)', title: 'Change 2 mốc năm: pie chart 2000 vs 2020',
  desc: 'Diễn đạt phần trăm, phân số, và so sánh cơ cấu giữa hai thời điểm.',
  theory: [
    { h: 'Ngôn ngữ tỉ lệ', p: ['*account for / make up / represent / comprise* + %', '*the largest share / the smallest proportion / the majority*', 'Thay đổi: *the share of coal **halved**, falling from 55% to 30%*.'] },
    { h: 'Chiến lược hai biểu đồ tròn', p: ['Overview: thành phần lớn nhất + thay đổi lớn nhất.', 'Body 1: các phần giảm; Body 2: các phần tăng/ổn định.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'gap', title: 'Động từ chỉ tỉ lệ', instr: 'Điền MỘT động từ (dạng quá khứ).', chart: PIE_ENERGY,
      items: [
        { q: 'In 2000, coal ___ for 55% of electricity generation.', a: ['accounted'] },
        { q: 'Hydro ___ up 18% of the total in 2000.', a: ['made'] },
        { q: 'Solar and wind ___ just 2% in 2000.', a: ['represented', 'comprised', 'constituted'] },
        { q: 'By 2020, the share of coal had almost ___.', a: ['halved'] },
      ] },
    { bloom: 'understand', type: 'mcq', title: 'Hiểu thay đổi cơ cấu', instr: 'Dựa vào hai biểu đồ.', chart: PIE_ENERGY,
      items: [
        { q: 'Thay đổi lớn nhất:', options: ['Solar & Wind tăng từ 2% lên 23%', 'Hydro giảm 1%', 'Other không đổi'], a: 0 },
        { q: '"Coal remained the largest source in 2020." là:', options: ['Đúng', 'Sai'], a: 0, ex: '30% vẫn cao nhất.' },
        { q: 'Hydro nên mô tả là:', options: ['dropped dramatically', 'remained relatively stable', 'doubled'], a: 1 },
        { q: '"In 2000, coal made up more than half of electricity." là:', options: ['Đúng', 'Sai'], a: 0 },
      ] },
    { bloom: 'apply', type: 'rewrite', title: 'Viết câu với phân số', instr: 'Viết lại câu, thay % bằng phân số/cách nói xấp xỉ.',
      items: [
        { q: 'Coal accounted for 55% of the total in 2000.', a: ['Coal accounted for just over half of the total in 2000.'] },
        { q: 'Solar and wind made up 23% in 2020.', a: ['Solar and wind made up almost a quarter of the total in 2020.', 'Solar and wind made up just under a quarter in 2020.'] },
        { q: 'Coal represented 30% in 2020.', a: ['Coal represented less than a third in 2020.', 'Coal represented just under a third in 2020.'] },
        { q: 'Gas rose from 20% to 25%.', a: ['The share of gas rose from a fifth to a quarter.'] },
      ] },
    { bloom: 'analyze', type: 'match', title: 'Phân nhóm để viết Body', instr: 'Đặt mỗi nguồn vào nhóm phù hợp.', chart: PIE_ENERGY, options: ['Giảm', 'Tăng', 'Gần như không đổi'],
      pairs: [{ l: 'Coal', r: 'Giảm' }, { l: 'Gas', r: 'Tăng' }, { l: 'Hydro', r: 'Gần như không đổi' }, { l: 'Solar & Wind', r: 'Tăng' }, { l: 'Other', r: 'Gần như không đổi' }] },
    { bloom: 'evaluate', type: 'mcq', title: 'Đánh giá overview', instr: 'Chọn Overview tốt nhất.', chart: PIE_ENERGY,
      items: [{ q: '', options: ['Overall, coal fell from 55% to 30% and solar rose from 2% to 23%.', 'Overall, although coal remained the dominant source, its share fell considerably, while renewables such as solar and wind grew dramatically.', 'Overall, the country cares more about the environment.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Viết bài Pie chart hoàn chỉnh',
      prompt: 'The pie charts below show the sources of electricity generation in Country X in 2000 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: PIE_ENERGY, minWords: 150,
      focus: ['ngôn ngữ tỉ lệ', 'so sánh hai thời điểm'] },
  ],
},
{
  id: 't1e', n: 17, stage: 'task1', lessons: 'Lesson 17 · Process · Lesson 18 · Natural process', title: 'Process: quy trình nhân tạo & tự nhiên',
  desc: 'Bị động hiện tại, từ nối trình tự và cách gộp bước — áp dụng cho quy trình sản xuất lẫn vòng đời tự nhiên.',
  theory: [
    { h: 'Bố cục', p: ['Intro: paraphrase. Overview: **số bước, điểm đầu–điểm cuối**, quy trình tuyến tính hay chu trình.', 'Body 1: nửa đầu; Body 2: nửa sau.'] },
    { h: 'Ngôn ngữ', p: ['Bị động: *are collected, is heated, are then transported*.', 'Trình tự: *First / To begin with, Next, Then, After that, Once..., Following this, Finally*.', 'Gộp: *After being washed, the bottles are crushed...* / *..., where they are sorted*.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'order', title: 'Sắp xếp các bước tái chế thủy tinh', instr: 'Bấm các bước theo đúng thứ tự.', chart: null,
      items: [{ q: 'Quy trình tái chế chai thủy tinh:', words: 'collected / transported / sorted by colour / washed / crushed / melted / moulded / filled and labelled' }] },
    { bloom: 'understand', type: 'mcq', title: 'Hiểu sơ đồ', instr: 'Dựa vào sơ đồ.', chart: PROCESS_GLASS,
      items: [
        { q: 'Quy trình có bao nhiêu bước?', options: ['6', '8', '10'], a: 1 },
        { q: 'Đây là quy trình:', options: ['Tuyến tính nhưng tạo thành vòng (chai quay lại cửa hàng)', 'Hoàn toàn tự nhiên', 'Chỉ có một giai đoạn'], a: 0 },
        { q: 'Cullet là:', options: ['Chai mới', 'Thủy tinh nghiền nhỏ', 'Nhãn chai'], a: 1 },
      ] },
    { bloom: 'apply', type: 'gap', title: 'Bị động & từ nối', instr: 'Chia động từ ở bị động hiện tại.', chart: PROCESS_GLASS,
      items: [
        { q: 'First, used bottles ___ from recycling bins.', hint: 'collect', a: ['are collected'] },
        { q: 'They ___ then ___ to a sorting plant.', hint: 'transport', a: [['are'], ['transported']] },
        { q: 'At the plant, the glass ___ according to colour.', hint: 'sort', a: ['is sorted'] },
        { q: 'After being ___, the bottles are crushed into cullet.', hint: 'wash', a: ['washed'] },
        { q: 'The cullet ___ in a furnace at 1,500°C.', hint: 'melt', a: ['is melted'] },
      ] },
    { bloom: 'analyze', type: 'rewrite', title: 'Gộp hai bước thành một câu', instr: 'Nối hai câu thành một câu tự nhiên (dùng once, after being V3, where, before...).',
      items: [
        { q: 'The bottles are transported to a plant. They are sorted by colour at the plant.', a: ['The bottles are transported to a plant, where they are sorted by colour.'] },
        { q: 'The bottles are washed. Then they are crushed into small pieces.', a: ['After being washed, the bottles are crushed into small pieces.', 'Once washed, the bottles are crushed into small pieces.'] },
        { q: 'The glass is melted. Then it is moulded into new bottles.', a: ['Once the glass has been melted, it is moulded into new bottles.', 'After being melted, the glass is moulded into new bottles.'] },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Overview nào tốt nhất?', instr: 'Chọn overview phù hợp.', chart: PROCESS_GLASS,
      items: [{ q: '', options: ['Overall, glass is good for the environment.', 'Overall, there are eight stages in the process, beginning with the collection of used bottles and ending with new bottles being delivered to shops.', 'Overall, first bottles are collected and then they are transported.'], a: 1 }] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Viết bài Process hoàn chỉnh',
      prompt: 'The diagram below shows how glass bottles are recycled.\n\nSummarise the information by selecting and reporting the main features. Write at least 150 words.', chart: PROCESS_GLASS, minWords: 150,
      focus: ['bị động', 'từ nối trình tự', 'gộp bước'] },
  ],
},
{
  id: 't1f', n: 16, stage: 'task1', lessons: 'Lesson 16 · Maps', title: 'Maps: mô tả thay đổi',
  desc: 'Từ vựng xây mới, phá bỏ, mở rộng, chuyển đổi; giới từ vị trí và phương hướng.',
  theory: [
    { h: 'Động từ thay đổi (thường bị động)', p: ['xây: *was built / constructed / erected*; phá: *was demolished / removed / knocked down*', 'mở rộng/thu hẹp: *was expanded / extended / reduced*; chuyển đổi: *was converted into / replaced by / made way for*', 'Không đổi: *remained unchanged*'] },
    { h: 'Vị trí', p: ['*in the north / to the east of / next to / opposite / along the road / on the shore of the lake*', 'Overview: khu vực **đô thị hóa/hiện đại hơn**, mất gì, giữ gì.'] },
  ],
  exercises: [
    { bloom: 'remember', type: 'match', title: 'Từ vựng bản đồ', instr: 'Nối từ với nghĩa.',
      pairs: [{ l: 'demolished', r: 'bị phá bỏ' }, { l: 'converted into', r: 'chuyển đổi thành' }, { l: 'extended', r: 'được mở rộng' }, { l: 'made way for', r: 'nhường chỗ cho' }, { l: 'erected', r: 'được dựng lên' }, { l: 'remained unchanged', r: 'giữ nguyên' }] },
    { bloom: 'understand', type: 'mcq', title: 'Đọc hai bản đồ', instr: 'So sánh 2000 và hiện nay.', chart: MAP_TOWN,
      items: [
        { q: 'Farmland đã:', options: ['được giữ nguyên', 'nhường chỗ cho khu nhà ở', 'trở thành hồ'], a: 1 },
        { q: 'Primary school đã:', options: ['bị phá bỏ hoàn toàn', 'được thay bằng secondary school', 'chuyển sang phía bắc'], a: 1 },
        { q: 'Forest:', options: ['bị thu hẹp để xây sports centre', 'mở rộng', 'không đổi'], a: 0 },
        { q: 'Thứ không thay đổi:', options: ['Lake, main road, houses ở phía tây nam', 'Car park', 'Farmland'], a: 0 },
      ] },
    { bloom: 'apply', type: 'gap', title: 'Điền từ mô tả', instr: 'Điền MỘT từ.', chart: MAP_TOWN,
      items: [
        { q: 'The farmland in the north-west ___ way for a housing estate.', a: ['made'] },
        { q: 'A café has been built on the northern ___ of the lake.', a: ['shore', 'side', 'edge'] },
        { q: 'The primary school has been ___ into a secondary school.', a: ['converted', 'turned', 'transformed'] },
        { q: 'Part of the forest was cleared to make room ___ a sports centre.', a: ['for'] },
        { q: 'A car park has been constructed ___ the school.', a: ['behind', 'below', 'beside', 'near'] },
      ] },
    { bloom: 'analyze', type: 'mcq', title: 'Overview cho bản đồ', instr: 'Chọn hai ý chính.', chart: MAP_TOWN,
      items: [
        { q: 'Ý chính 1:', options: ['The village has become more residential and developed, with new leisure facilities.', 'The café is small.', 'The main road is 100 metres long.'], a: 0 },
        { q: 'Ý chính 2:', options: ['Natural areas such as farmland and forest have shrunk, while the lake has remained.', 'The houses are in the south-west.', 'There is a car park.'], a: 0 },
      ] },
    { bloom: 'evaluate', type: 'mcq', title: 'Câu nào chính xác hơn?', instr: 'Chọn câu đúng ngữ pháp và đúng bản đồ.', chart: MAP_TOWN,
      items: [
        { q: '', options: ['The forest was demolished.', 'The forest was reduced in size to make way for a sports centre.', 'The forest has built a sports centre.'], a: 1 },
        { q: '', options: ['A new café was opened on the northern shore of the lake.', 'A café builds near the lake.', 'The lake was converted into a café.'], a: 0 },
      ] },
    { bloom: 'create', type: 'write', kind: 'task1', title: 'Viết bài Map hoàn chỉnh',
      prompt: 'The maps below show the village of Lakeside in 2000 and today.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: MAP_TOWN, minWords: 150,
      focus: ['bị động', 'vị trí', 'overview thay đổi'] },
  ],
},
]);
})();
