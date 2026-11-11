/* Lấp đủ mọi ô Bloom × độ khó cho Chặng 2 (Task 1). Số liệu, câu mẫu, đề bài tự soạn. */
(function () {
const U = id => window.UNITS.find(u => u.id === id);
const add = (id, ex) => U(id).exercises.push(ex);
const M = (id, bloom, lv, title, instr, items) => add(id, { bloom, lv, type: 'mcq', title, instr, items: items.map(([q, options, a, ex], i) => { const k = [...(title + q + i)].reduce((s, c) => s + c.charCodeAt(0), 0) % options.length; const o = options.slice(k).concat(options.slice(0, k)); return { q, options: o, a: (a - k + o.length) % o.length, ex }; }) });
const G = (id, bloom, lv, title, instr, items) => add(id, { bloom, lv, type: 'gap', title, instr, items: items.map(([q, a]) => ({ q, a: [].concat(a) })) });
const R = (id, bloom, lv, title, instr, items) => add(id, { bloom, lv, type: 'rewrite', title, instr, items: items.map(([q, a]) => ({ q, a: [].concat(a) })) });
const W = (id, lv, title, prompt, chart, focus, minWords = 150) => add(id, { bloom: 'create', lv, type: 'write', kind: 'task1', title, prompt, chart, minWords, focus });
const SNAP = window.KL_SNAP();
const P = s => `${s}\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.`;

/* ---------- dữ liệu mới ---------- */
const LINE_COFFEE = { kind: 'line', title: 'Average coffee consumption per person in four countries (kg/year), 2000–2020', unit: 'kg', labels: ['2000', '2005', '2010', '2015', '2020'],
  series: [{ name: 'Finland', data: [11.0, 11.5, 12.0, 12.1, 12.0] }, { name: 'Brazil', data: [4.2, 4.8, 5.5, 6.0, 6.3] }, { name: 'Japan', data: [3.0, 3.3, 3.4, 3.6, 3.7] }, { name: 'Vietnam', data: [0.4, 0.7, 1.1, 1.6, 2.2] }] };
const BAR_COMMUTE = { kind: 'bar', title: 'How workers in a city travelled to work (%), 2022', unit: '%', labels: ['Car', 'Bus', 'Metro', 'Bicycle', 'Walking'],
  series: [{ name: 'Under 30', data: [18, 27, 31, 15, 9] }, { name: '30 and over', data: [46, 21, 19, 5, 9] }] };
const MIX_WATER = { kind: 'table', title: 'Water use in Country Y: total (billion m³) and share by sector (%), 1990 vs 2020', headers: ['', 'Total use', 'Agriculture', 'Industry', 'Households'],
  rows: [['1990', '42', '71%', '19%', '10%'], ['2020', '58', '55%', '26%', '19%']] };
const PIE_WASTE = { kind: 'pie', unit: '%', title: 'How household waste was treated in a city, 2005 and 2025', pies: [
  { title: '2005', slices: [{ name: 'Landfill', value: 68 }, { name: 'Recycling', value: 12 }, { name: 'Incineration', value: 15 }, { name: 'Composting', value: 5 }] },
  { title: '2025', slices: [{ name: 'Landfill', value: 24 }, { name: 'Recycling', value: 38 }, { name: 'Incineration', value: 22 }, { name: 'Composting', value: 16 }] }] };
const PROCESS_TEA = { kind: 'process', title: 'How black tea is produced', steps: ['Tea leaves are picked by hand', 'Leaves are spread out to wither (12–18 hours)', 'Withered leaves are rolled to break the cells', 'Leaves are left to oxidise and turn dark', 'Leaves are dried in hot air at 120°C', 'Dried tea is sorted by size', 'Tea is packed and shipped'] };
const PROCESS_RAIN = { kind: 'process', title: 'The formation of acid rain', steps: ['Factories and vehicles release sulphur dioxide and nitrogen oxides', 'Gases rise into the atmosphere', 'Gases mix with water vapour in clouds', 'Sulphuric and nitric acids form', 'Acid falls as rain, snow or fog', 'Acid damages forests, lakes and buildings'] };
const MAP_CAMPUS = { kind: 'map', title: 'A university campus, 2010 and 2025', maps: [
  { title: '2010', items: [{ name: 'Library', x: 5, y: 5, w: 30, h: 25 }, { name: 'Car park', x: 40, y: 5, w: 30, h: 25, color: '#eee' }, { name: 'Lecture halls', x: 5, y: 40, w: 40, h: 25 }, { name: 'Sports field', x: 55, y: 40, w: 40, h: 50, color: '#e9f3d6' }, { name: 'Bus stop', x: 5, y: 75, w: 15, h: 10, color: '#fde7c8' }] },
  { title: '2025', items: [{ name: 'Library + study centre', x: 5, y: 5, w: 30, h: 25 }, { name: 'Student housing', x: 40, y: 5, w: 30, h: 25 }, { name: 'Lecture halls', x: 5, y: 40, w: 40, h: 25 }, { name: 'Indoor sports hall', x: 55, y: 40, w: 40, h: 22, color: '#fde7c8' }, { name: 'Underground car park', x: 55, y: 66, w: 40, h: 24, color: '#eee' }, { name: 'Tram station', x: 5, y: 75, w: 20, h: 12, color: '#cfe6fb' }] }] };
const BAR_SPEND6 = { kind: 'bar', title: 'Average monthly household spending in a city (USD), 2012 vs 2022', unit: 'USD', labels: ['Housing', 'Food', 'Transport', 'Education', 'Health', 'Leisure'],
  series: [{ name: '2012', data: [420, 310, 140, 90, 60, 110] }, { name: '2022', data: [690, 360, 150, 170, 120, 95] }] };
const LINE_EV = { kind: 'line', title: 'New car sales by fuel type in Country Z (thousands), 2015–2035 (projected from 2025)', unit: 'thousand', labels: ['2015', '2020', '2025', '2030*', '2035*'],
  series: [{ name: 'Petrol', data: [900, 780, 560, 300, 120] }, { name: 'Diesel', data: [400, 250, 110, 40, 10] }, { name: 'Electric', data: [10, 90, 330, 650, 900] }, { name: 'Total', data: [1310, 1120, 1000, 990, 1030] }] };
const PROCESS_DESAL = { kind: 'process', title: 'How a reverse-osmosis desalination plant works', steps: ['Seawater is pumped in through an intake pipe', 'Large debris is removed by screens', 'Fine filters remove sand and particles', 'High-pressure pumps push water through membranes', 'Salt stays behind; fresh water passes through', 'Minerals are added and the water is stored', 'Concentrated brine is returned to the sea'] };

/* ===== t1a Tổng quan, Intro & Overview ===== */
M('t1a', 'remember', 2, 'Paraphrase phần đề', 'Chọn cách paraphrase tốt nhất cho Introduction.', [
  ['*The graph shows the number of visitors to three museums from 2010 to 2020.*', ['The line graph illustrates how many people visited three museums over a ten-year period starting in 2010.', 'The graph shows the number of visitors to three museums from 2010 to 2020.', 'Museums had visitors.'], 0],
  ['*The chart shows the percentage of people who own a smartphone.*', ['The bar chart compares the proportion of people owning a smartphone.', 'The chart is about phones.'], 0]]);
M('t1a', 'remember', 3, 'Overview Mức 3', 'Chọn Overview đạt Mức 3 (xu hướng chính + nổi bật + so sánh, không số liệu).', [
  ['', ['Overall, museum A had 3 million visitors in 2020.', 'Overall, while visitor numbers at the two city-centre museums rose steadily, the suburban museum saw a gradual decline, with Museum A remaining the most popular throughout.', 'Overall, there were changes.'], 1]]);
M('t1a', 'understand', 2, 'Static hay change?', 'Xác định dạng đề.', [
  ['Bar chart: ownership of pets in 5 countries in 2023', ['No change (1 mốc)', 'Change over time'], 0], ['Line graph: rainfall 2000–2020', ['Change over time', 'No change'], 0], ['Two maps: 1990 and now', ['Map (thay đổi)', 'Process'], 0]]);
M('t1a', 'understand', 3, 'Vì sao Overview này bị trừ điểm?', '*Overall, in 2020, the figure for car was 45% and bus was 20%.*', [['', ['Có số liệu chi tiết, không nêu đặc điểm chính', 'Quá ngắn nhưng vẫn đúng', 'Thiếu từ nối'], 0]]);
G('t1a', 'apply', 1, 'Từ thay thế cơ bản', 'Điền một động từ thay cho *shows*.', [['The line graph ___ the number of tourists.', ['illustrates', 'depicts', 'presents', 'gives']], ['The table ___ data on rice exports.', ['provides', 'gives', 'presents']]]);
M('t1a', 'analyze', 1, 'Câu nào là Overview?', '', [['', ['Overall, most people preferred travelling by car.', 'In 2010, 40% of people travelled by car.'], 0]]);
M('t1a', 'analyze', 3, 'Overview thiếu gì?', '*Overall, the number of visitors to all three museums increased.*', [['Còn thiếu:', ['Đặc điểm nổi bật/so sánh (cái nào cao nhất, thay đổi lớn nhất)', 'Số liệu cụ thể', 'Mốc thời gian'], 0]]);
M('t1a', 'evaluate', 1, 'Intro nào đúng?', '', [['', ['The chart shows the information about some things.', 'The bar chart compares the number of students studying abroad in four countries in 2022.'], 1]]);
M('t1a', 'evaluate', 3, 'Cặp Intro + Overview tốt nhất', 'Đề: line graph – average coffee consumption per person in 4 countries, 2000–2020.', [['', [
  'The graph shows coffee in four countries. Overall, Finland is 12 kg.',
  'The line graph illustrates how much coffee an average person drank annually in four countries over two decades from 2000. Overall, consumption rose in all four nations, most dramatically in Vietnam, although Finland remained by far the heaviest consumer throughout.',
  'The line graph shows coffee consumption per person in four countries from 2000 to 2020. Overall, it changed.'], 1]]);
W('t1a', 3, 'Intro + Overview Band 8', P('The graph below shows the average amount of coffee consumed per person in four countries between 2000 and 2020.'), LINE_COFFEE, ['paraphrase sâu', 'Overview 2 ý: xu hướng + so sánh', 'không số liệu trong Overview'], 50);

/* ===== t1b Change: từ vựng xu hướng ===== */
M('t1b', 'remember', 2, 'Danh từ xu hướng', 'Chọn câu đúng.', [['', ['There was a steady rise in sales.', 'There was a steadily rise in sales.'], 0], ['', ['Sales experienced a dramatic fall.', 'Sales experienced a dramatically fall.'], 0]]);
M('t1b', 'remember', 3, 'Từ vựng xu hướng Mức 3', 'Chọn cách diễn đạt chính xác cho: *đạt đỉnh rồi giữ ổn định*.', [['', ['peaked at 70 before levelling off', 'went up and stopped', 'reached top and same'], 0], ['dao động', ['fluctuated around 40', 'went up and down a lot of'], 0]]);
M('t1b', 'understand', 2, 'Mức độ của từ', 'Chọn từ diễn tả đúng: từ 50 lên 52.', [['', ['rose slightly', 'soared', 'rocketed'], 0], ['từ 20 lên 80', ['surged', 'rose marginally'], 0]]);
M('t1b', 'understand', 3, 'Phân biệt by / to', '*Coffee consumption in Vietnam rose by 1.8 kg to 2.2 kg.*', [['*by 1.8 kg* chỉ:', ['mức thay đổi', 'mức cuối'], 0], ['*to 2.2 kg* chỉ:', ['mức cuối', 'mức thay đổi'], 0]]);
G('t1b', 'apply', 1, 'Động từ xu hướng', 'Chia động từ ở quá khứ đơn.', [['Sales ___ (rise) to 500 units.', 'rose'], ['The price ___ (drop) in 2010.', 'dropped'], ['The number ___ (remain) stable.', 'remained']]);
M('t1b', 'analyze', 1, 'Xu hướng gì?', 'Số liệu: 30 → 30 → 31 → 30.', [['', ['remained stable', 'rose sharply', 'fell dramatically'], 0]]);
M('t1b', 'evaluate', 1, 'Câu xu hướng đúng', '', [['', ['The number of tourists increased sharply.', 'The number of tourists increased sharp.'], 0]]);
W('t1b', 3, 'Line graph 4 đường (Band 8)', P('The graph below shows the average amount of coffee consumed per person in four countries between 2000 and 2020.'), LINE_COFFEE, ['đa dạng động từ + danh từ xu hướng', 'by/to chính xác', 'nhóm đường theo xu hướng']);

/* ===== t1c No change ===== */
M('t1c', 'remember', 2, 'Từ so sánh tĩnh', 'Chọn câu đúng.', [['', ['Car was the most popular mode of transport among older workers, at 46%.', 'Car was the most popular among older workers with 46% percent.'], 0]]);
M('t1c', 'remember', 3, 'Cấu trúc gom số liệu', 'Chọn câu Mức 3.', [['', ['Walking accounted for 9% for both groups.', 'Walking was 9%. Walking was 9% too.'], 0], ['', ['Bus and metro were chosen by 27% and 31% of younger workers respectively.', 'Bus was 27% and metro was 31%.'], 0]]);
M('t1c', 'understand', 2, 'Đọc biểu đồ đúng', 'BAR_COMMUTE: Car — Under 30: 18%, 30+: 46%.', [['', ['Older workers were more than twice as likely to drive as younger ones.', 'Younger workers drove more.'], 0]]);
M('t1c', 'understand', 3, 'Nhóm số liệu', 'Muốn chia 2 đoạn thân bài hợp lý nhất cho BAR_COMMUTE:', [['', ['Đoạn 1: hạng mục người dưới 30 dùng nhiều hơn (Bus, Metro, Bicycle); Đoạn 2: Car + Walking', 'Đoạn 1: Car; Đoạn 2: tất cả còn lại theo thứ tự chữ cái'], 0]]);
G('t1c', 'apply', 1, 'Giới từ số liệu', 'Điền giới từ.', [['Car was the most popular option, ___ 46%.', 'at'], ['The figure for walking was the same ___ both groups.', 'for']]);
M('t1c', 'analyze', 1, 'Cao nhất là gì?', 'Under 30: Car 18, Bus 27, Metro 31, Bicycle 15, Walking 9.', [['Phổ biến nhất với người dưới 30:', ['Metro', 'Bus', 'Car'], 0]]);
M('t1c', 'evaluate', 1, 'Câu nào đúng?', '', [['', ['Metro was more popular than bus among younger workers.', 'Metro was popular than bus among younger workers.'], 0]]);
M('t1c', 'evaluate', 3, 'Câu so sánh nào Band 8?', '', [['', ['Car 46% and 18%. Big difference.', 'Driving was by far the preferred option among those aged 30 and over, at 46%, more than double the figure for their younger counterparts.', 'Older people drive more than young people.'], 1]]);
W('t1c', 3, 'No change: phương tiện đi làm (Band 8)', P('The chart below shows how workers in a city travelled to work in 2022, by age group.'), BAR_COMMUTE, ['Overview: khác biệt chính giữa 2 nhóm', 'gom số liệu: respectively, both at', 'so sánh gấp']);

/* ===== t1g Mixed ===== */
M('t1g', 'remember', 2, 'Câu nối hai biểu đồ', 'Chọn câu chuyển tiếp tốt.', [['', ['Turning to the table, agriculture\'s share fell from 71% to 55%.', 'Second chart. Agriculture 71% 55%.'], 0]]);
M('t1g', 'remember', 3, 'Introduction cho Mixed', 'Chọn Intro Mức 3.', [['', ['The table gives information about the total volume of water used in Country Y in 1990 and 2020, together with how this was divided among three sectors.', 'There are two charts about water.'], 0]]);
M('t1g', 'understand', 2, 'Hiểu mối liên hệ', 'MIX_WATER: tổng 42 → 58 tỷ m³; nông nghiệp 71% → 55%.', [['Lượng nước nông nghiệp tuyệt đối:', ['gần như không đổi (~30 → ~32 tỷ m³)', 'giảm mạnh một nửa'], 0]]);
M('t1g', 'understand', 3, 'Overview cho Mixed', 'Overview tốt cần:', [['', ['Một ý cho mỗi biểu đồ, và (nếu có) mối liên hệ', 'Chỉ nói biểu đồ có số lớn hơn'], 0]]);
G('t1g', 'apply', 1, 'Hoàn thành câu', 'Điền một từ.', [['Total water use ___ from 42 to 58 billion m³.', ['rose', 'increased', 'grew']], ['Households ___ for 19% in 2020.', 'accounted']]);
M('t1g', 'analyze', 1, 'Biểu đồ nào cho thông tin gì?', '', [['Cột "Total use" là:', ['số tuyệt đối', 'tỷ lệ phần trăm'], 0]]);
M('t1g', 'analyze', 3, 'Suy luận hợp lệ', 'Từ MIX_WATER, câu nào là suy luận ĐÚNG?', [['', ['Household water use almost tripled in absolute terms (≈4.2 → ≈11 billion m³).', 'Farmers used less water in 2020 than in 1990.', 'Industry used less water in 2020.'], 0]]);
M('t1g', 'evaluate', 1, 'Câu nào đúng?', '', [['', ['Agriculture used the most water in both years.', 'Agriculture used the less water in both years.'], 0]]);
M('t1g', 'evaluate', 3, 'Overview nào tốt nhất?', '', [['', ['Overall, water 58 and agriculture 55%.', 'Overall, total water consumption rose considerably, and although agriculture remained the dominant user, its share shrank as industry and households took up a greater proportion.', 'Overall, things changed between 1990 and 2020.'], 1]]);
W('t1g', 3, 'Mixed: tổng & cơ cấu dùng nước (Band 8)', P('The table below shows total water use in Country Y in 1990 and 2020 and the share of this water used by three sectors.'), MIX_WATER, ['liên hệ số tuyệt đối và phần trăm', 'Overview cho cả hai phần', 'chuyển đoạn mượt']);

/* ===== t1d Pie 2 mốc ===== */
M('t1d', 'remember', 2, 'Từ vựng tỷ lệ', 'Chọn câu đúng.', [['', ['Landfill made up over two-thirds of waste treatment in 2005.', 'Landfill made up over two-third of waste treatment in 2005.'], 0], ['', ['Recycling accounted for 38%.', 'Recycling accounted 38%.'], 0]]);
M('t1d', 'remember', 3, 'Diễn đạt thay đổi tỷ trọng', 'Chọn câu Mức 3.', [['', ['The share of waste sent to landfill plummeted from 68% to just under a quarter.', 'Landfill was 68% then 24%.'], 0]]);
M('t1d', 'understand', 2, 'Phân số ↔ phần trăm', '', [['24% ≈', ['just under a quarter', 'nearly a half'], 0], ['38% ≈', ['nearly two-fifths', 'over a half'], 0]]);
M('t1d', 'understand', 3, 'Đọc thay đổi', 'PIE_WASTE: Composting 5% → 16%.', [['', ['Tăng hơn ba lần', 'Tăng gấp đôi', 'Giảm'], 0]]);
G('t1d', 'apply', 1, 'Điền số liệu', 'Điền phần trăm.', [['In 2005, recycling accounted for ___ of waste.', ['12%', '12 percent']], ['By 2025, landfill had fallen to ___.', ['24%', '24 percent']]]);
M('t1d', 'analyze', 1, 'Cái nào tăng?', '', [['Hạng mục nào giảm từ 2005 đến 2025?', ['Landfill', 'Recycling', 'Composting'], 0]]);
M('t1d', 'analyze', 3, 'Chia đoạn hợp lý', '', [['', ['Body 1: Landfill (giảm mạnh) ; Body 2: 3 hạng mục tăng', 'Body 1: 2005 ; Body 2: 2025 (mô tả từng biểu đồ riêng)'], 0, 'So sánh theo hạng mục giúp làm rõ thay đổi thay vì liệt kê từng pie.']]);
M('t1d', 'evaluate', 1, 'Câu đúng', '', [['', ['The proportion of waste recycled increased.', 'The proportion of waste recycled increase.'], 0]]);
M('t1d', 'evaluate', 3, 'Câu Band 8 nhất', '', [['', ['Recycling rose from 12% to 38%.', 'Recycling more than tripled its share, climbing from a modest 12% to 38% and overtaking landfill as the main method of disposal.', 'Recycling was more.'], 1]]);
W('t1d', 3, 'Pie chart xử lý rác 2005 vs 2025 (Band 8)', P('The pie charts below show how household waste was treated in a city in 2005 and 2025.'), PIE_WASTE, ['phân số + phần trăm', 'overtake / tripled', 'chia đoạn theo xu hướng']);

/* ===== t1e Process ===== */
M('t1e', 'remember', 2, 'Từ chỉ trình tự', 'Chọn câu đúng.', [['', ['Once withered, the leaves are rolled.', 'Once wither, the leaves rolled.'], 0], ['', ['The leaves are then dried in hot air.', 'The leaves then dry in hot air by people.'], 0]]);
M('t1e', 'remember', 3, 'Câu ghép bước Mức 3', 'Chọn câu Mức 3.', [['', ['After being rolled to break their cells, the leaves are left to oxidise, during which they gradually turn dark.', 'The leaves are rolled. Then they oxidise. They turn dark.'], 0]]);
M('t1e', 'understand', 2, 'Đếm giai đoạn', 'PROCESS_TEA có bao nhiêu bước?', [['', ['7', '5', '9'], 0]]);
M('t1e', 'understand', 3, 'Process tự nhiên hay nhân tạo?', '', [['PROCESS_RAIN (acid rain)', ['tự nhiên (có tác động con người) – dùng cả chủ động', 'nhân tạo hoàn toàn – chỉ bị động'], 0]]);
G('t1e', 'apply', 1, 'Bị động trong process', 'Chia động từ ở bị động hiện tại.', [['The leaves ___ (pick) by hand.', 'are picked'], ['The tea ___ (pack) and shipped.', 'is packed']]);
M('t1e', 'analyze', 1, 'Bước đầu – cuối', '', [['Bước cuối của PROCESS_TEA:', ['Tea is packed and shipped', 'Leaves are picked'], 0]]);
M('t1e', 'evaluate', 1, 'Câu process đúng', '', [['', ['The leaves are dried at 120°C.', 'The leaves is dried at 120°C.'], 0]]);
M('t1e', 'evaluate', 3, 'Overview process tốt nhất', '', [['', ['Overall, there are 7 stages.', 'Overall, black tea production is a seven-stage linear process, beginning with hand-picking the leaves and ending with packaging, with the leaves undergoing several transformations in between.', 'Overall, tea is made.'], 1]]);
W('t1e', 3, 'Process: sản xuất trà đen (Band 8)', P('The diagram below shows how black tea is produced.'), PROCESS_TEA, ['bị động + rút gọn', 'Overview: số bước, đầu–cuối', 'liên kết bước đa dạng']);

/* ===== t1f Maps ===== */
M('t1f', 'remember', 2, 'Động từ thay đổi bản đồ', 'Chọn câu đúng.', [['', ['The car park was replaced by student housing.', 'The car park was replace student housing.'], 0], ['', ['The library was extended to include a study centre.', 'The library extended by a study centre.'], 0]]);
M('t1f', 'remember', 3, 'Cấu trúc map Mức 3', 'Chọn câu Mức 3.', [['', ['The sports field made way for an indoor sports hall, beneath which an underground car park was constructed.', 'The sports field is gone. There is a sports hall.'], 0]]);
M('t1f', 'understand', 2, 'Thay đổi gì?', 'MAP_CAMPUS 2010 → 2025.', [['Bus stop đã thành:', ['tram station', 'car park'], 0], ['Car park cũ (phía trên) thành:', ['student housing', 'library'], 0]]);
M('t1f', 'understand', 3, 'Overview map', 'Overview cần:', [['', ['Xu hướng chung: hiện đại hoá, ít không gian mở hơn, giao thông tốt hơn', 'Liệt kê mọi toà nhà'], 0]]);
G('t1f', 'apply', 1, 'Giới từ vị trí', 'Điền giới từ.', [['The library is ___ the north-west of the campus.', 'in'], ['The tram station is located next ___ the lecture halls.', 'to']]);
M('t1f', 'analyze', 1, 'Cái gì không đổi?', '', [['', ['Lecture halls', 'Sports field', 'Car park'], 0]]);
M('t1f', 'analyze', 3, 'Nhóm thay đổi', 'Nhóm hợp lý cho 2 đoạn thân bài:', [['', ['Đoạn 1: nửa trên (thư viện, nhà ở); Đoạn 2: nửa dưới (thể thao, bãi xe, giao thông)', 'Đoạn 1: 2010; Đoạn 2: 2025'], 0]]);
M('t1f', 'evaluate', 1, 'Câu map đúng', '', [['', ['A tram station was built.', 'A tram station built.'], 0]]);
M('t1f', 'evaluate', 3, 'Câu map Band 8', '', [['', ['The field was gone and a hall was there.', 'The open sports field was redeveloped into a smaller indoor sports hall, with the remaining space converted into an underground car park.'], 1]]);
W('t1f', 3, 'Map: khuôn viên đại học (Band 8)', P('The maps below show a university campus in 2010 and 2025.'), MAP_CAMPUS, ['bị động hoàn thành/quá khứ', 'nhóm theo khu vực', 'Overview: xu hướng phát triển']);

/* ===== t1h Change over time: Task Achievement ===== */
M('t1h', 'remember', 2, 'Tiêu chí TA', 'Chọn yếu tố quan trọng nhất của Task Achievement.', [['', ['Overview rõ ràng + chọn số liệu chính', 'Dùng nhiều từ khó', 'Viết dài 250 từ'], 0]]);
M('t1h', 'remember', 3, 'Lỗi TA Mức 3', 'Chọn lỗi khiến TA không lên Band 8.', [['', ['Không làm nổi bật điểm giao cắt hoặc đỉnh quan trọng', 'Dùng quá khứ đơn', 'Có Overview'], 0]]);
M('t1h', 'understand', 2, 'Chọn số liệu chính', 'LINE_COFFEE — nên nhắc số liệu nào?', [['', ['Mức đầu và cuối của mỗi nước + điểm nổi bật', 'Mọi số liệu năm 2005, 2010, 2015'], 0]]);
M('t1h', 'understand', 3, 'Vì sao bị trừ?', '*Vietnam rose from 0.4 to 0.7 to 1.1 to 1.6 to 2.2.*', [['', ['Liệt kê máy móc, không chọn lọc, không có nhận xét (tăng gấp 5 lần)', 'Sai thì'], 0]]);
G('t1h', 'apply', 1, 'Mốc đầu – cuối', 'Điền số.', [['Finland\'s consumption started at ___ kg in 2000.', ['11', '11.0']], ['Vietnam ended the period at ___ kg.', '2.2']]);
R('t1h', 'apply', 3, 'Nâng câu TA lên Band 8', 'Viết lại thành một câu chọn lọc, có nhận xét.', [
  ['Vietnam: 0.4 in 2000, 0.7 in 2005, 1.1 in 2010, 1.6 in 2015, 2.2 in 2020.', 'Vietnam saw the most dramatic growth, with consumption rising more than fivefold from just 0.4 kg to 2.2 kg per person over the period.']]);
M('t1h', 'analyze', 1, 'Đường nào cao nhất?', 'LINE_COFFEE', [['', ['Finland', 'Japan', 'Vietnam'], 0]]);
M('t1h', 'analyze', 3, 'Đặc điểm nổi bật bị bỏ sót', 'Bài viết chỉ mô tả Finland và Brazil. Sót đặc điểm gì?', [['', ['Vietnam tăng nhanh nhất (gấp 5 lần)', 'Finland cao nhất'], 0]]);
M('t1h', 'evaluate', 1, 'Câu nào có số liệu đúng?', 'LINE_COFFEE', [['', ['Japan rose from 3.0 to 3.7 kg.', 'Japan rose from 3.7 to 3.0 kg.'], 0]]);

/* ===== t1i Super boosters ===== */
M('t1i', 'remember', 2, 'Booster: followed by', 'Chọn câu đúng.', [['', ['Finland had the highest figure, at 12 kg, followed by Brazil at 6.3 kg.', 'Finland had the highest figure, followed Brazil 6.3 kg.'], 0]]);
M('t1i', 'remember', 3, 'Booster: before + V-ing', 'Chọn câu Mức 3.', [['', ['Sales rose to 80 units, before falling back to 60 by 2020.', 'Sales rose to 80, then fall to 60.'], 0], ['', ['Spending on housing climbed by 270 dollars, a rise of almost two-thirds.', 'Spending on housing climbed 270, a rise two-thirds.'], 0]]);
M('t1i', 'understand', 2, 'Nghĩa booster', '', [['*, which was more than double that of Japan*', ['bổ sung so sánh cho số liệu vừa nêu', 'mở đoạn mới'], 0]]);
M('t1i', 'understand', 3, 'Booster nào đang dùng?', '*Health spending doubled to 120 dollars, overtaking leisure, which fell slightly to 95.*', [['', ['V-ing kết quả + which-clause', 'đảo ngữ'], 0]]);
G('t1i', 'apply', 1, 'Từ nối cơ bản', 'Điền từ.', [['Finland was first, ___ by Brazil.', 'followed'], ['Japan rose slightly, ___ Vietnam rose sharply.', ['while', 'whereas']]]);
M('t1i', 'analyze', 1, 'Có booster không?', '', [['*Housing rose to 690 dollars, which was the largest increase.*', ['Có (which-clause)', 'Không'], 0]]);
M('t1i', 'analyze', 3, 'Booster có đúng số liệu?', 'BAR_SPEND6: Education 90 → 170.', [['', ['Education spending almost doubled, rising by 80 dollars.', 'Education spending tripled, rising by 80 dollars.'], 0]]);
M('t1i', 'evaluate', 1, 'Câu đúng', '', [['', ['Food rose to 360, followed by transport at 150.', 'Food rose to 360, following by transport at 150.'], 0]]);
W('t1i', 3, 'Body dùng 7 boosters (Band 8)', 'The chart below shows average monthly household spending in a city in 2012 and 2022.\n\nViết **hai đoạn thân bài** (130–160 từ), dùng ít nhất **7** super boosters khác nhau (followed by, before V-ing, which…, a rise of…, overtaking…, compared to…, with…).', BAR_SPEND6, ['≥7 boosters', 'số liệu chính xác', 'không liệt kê máy móc'], 120);

/* ===== t1j Chia đoạn theo số hạng mục ===== */
M('t1j', 'remember', 2, 'Quy tắc chia đoạn', 'Biểu đồ có 6 hạng mục, nên:', [['', ['Nhóm theo xu hướng (tăng mạnh / tăng nhẹ / giảm)', 'Mỗi hạng mục 1 đoạn'], 0]]);
M('t1j', 'remember', 3, 'Câu chủ đề đoạn nhóm', 'Chọn câu mở đoạn Mức 3.', [['', ['Housing, education and health all saw substantial growth in spending.', 'Firstly, housing.'], 0]]);
M('t1j', 'understand', 2, '<4 hạng mục', 'Biểu đồ 3 hạng mục, chia thế nào?', [['', ['Đoạn 1: hạng mục nổi bật nhất; Đoạn 2: hai hạng mục còn lại', 'Ba đoạn, mỗi hạng mục một đoạn ngắn'], 0]]);
M('t1j', 'understand', 3, 'Nhóm BAR_SPEND6', 'Hạng mục nào cùng nhóm "tăng gần gấp đôi"?', [['', ['Education, Health', 'Food, Transport', 'Leisure, Housing'], 0]]);
G('t1j', 'apply', 1, 'Đếm hạng mục', 'Điền số.', [['BAR_SPEND6 có ___ hạng mục.', ['6', 'six']]]);
M('t1j', 'analyze', 1, 'Hạng mục nào giảm?', 'BAR_SPEND6', [['', ['Leisure', 'Housing', 'Health'], 0]]);
M('t1j', 'analyze', 3, 'Cách chia nào tốt nhất?', 'BAR_SPEND6', [['', ['Body 1: Housing, Education, Health (tăng mạnh); Body 2: Food, Transport (tăng nhẹ), Leisure (giảm)', 'Body 1: Housing, Food, Transport; Body 2: Education, Health, Leisure (theo thứ tự trên trục)'], 0]]);
M('t1j', 'evaluate', 1, 'Câu đúng', '', [['', ['Spending on transport rose slightly.', 'Spending on transport rised slightly.'], 0]]);
M('t1j', 'evaluate', 3, 'Overview 6 hạng mục tốt nhất', '', [['', ['Overall, all things changed.', 'Overall, spending rose in five of the six categories, most notably housing, which remained the largest expense, while leisure was the only area to see a decline.', 'Overall, housing was 690.'], 1]]);
W('t1j', 3, '6 hạng mục chi tiêu (Band 8)', P('The chart below shows average monthly household spending on six categories in a city in 2012 and 2022.'), BAR_SPEND6, ['nhóm hạng mục theo xu hướng', 'Overview 2 ý', 'super boosters']);

/* ===== t1k Dự đoán & Total ===== */
M('t1k', 'remember', 2, 'Ngôn ngữ dự đoán', 'Chọn câu đúng.', [['', ['Electric car sales are expected to reach 900,000 by 2035.', 'Electric car sales expect to reach 900,000 by 2035.'], 0], ['', ['Diesel sales are predicted to fall to just 10,000.', 'Diesel sales are predicted falling to 10,000.'], 0]]);
M('t1k', 'remember', 3, 'Dự đoán Mức 3', 'Chọn câu Mức 3.', [['', ['Electric vehicles are projected to overtake petrol cars shortly before 2030, eventually accounting for the vast majority of new sales.', 'Electric will be more than petrol.'], 0]]);
M('t1k', 'understand', 2, 'Hàng Total', 'Hàng "Total" nên:', [['', ['Nhắc trong Overview hoặc 1 câu riêng, không gộp như hạng mục thường', 'Bỏ qua'], 0]]);
M('t1k', 'understand', 3, 'Thì cho dữ liệu dự đoán', 'LINE_EV: 2015–2025 thực tế, 2030–2035 dự đoán.', [['', ['quá khứ đơn cho 2015–2025, is expected/projected to cho 2030–2035', 'chỉ dùng quá khứ đơn'], 0]]);
G('t1k', 'apply', 1, 'will / be expected to', 'Điền một từ.', [['Petrol sales are expected ___ fall.', 'to'], ['By 2035, electric sales ___ reach 900,000.', ['will', 'could']]]);
M('t1k', 'analyze', 1, 'Xu hướng Total', 'LINE_EV Total 1310 → 1030.', [['', ['giảm nhẹ rồi gần như ổn định', 'tăng mạnh'], 0]]);
M('t1k', 'analyze', 3, 'Điểm giao cắt', 'Electric vượt Petrol khoảng năm nào?', [['', ['giữa 2025 và 2030', 'trước 2020', 'sau 2035'], 0]]);
M('t1k', 'evaluate', 1, 'Câu dự đoán đúng', '', [['', ['Diesel sales will fall to 10,000 in 2035.', 'Diesel sales fell to 10,000 in 2035.'], 0]]);
M('t1k', 'evaluate', 3, 'Overview có dự đoán + Total tốt nhất', '', [['', ['Overall, electric goes up and petrol goes down.', 'Overall, electric cars are forecast to replace petrol and diesel models as the dominant choice, while total sales are expected to remain broadly stable at around one million after an initial decline.'], 1]]);
W('t1k', 3, 'Doanh số xe theo nhiên liệu, có dự đoán (Band 8)', P('The graph below shows new car sales by fuel type in Country Z between 2015 and 2025, with projections to 2035.'), LINE_EV, ['quá khứ + dự đoán', 'xử lý hàng Total', 'điểm giao cắt']);

/* ===== t1l No change: 2 items & bảng ===== */
M('t1l', 'remember', 2, 'Từ so sánh 2 nhóm', 'Chọn câu đúng.', [['', ['Younger workers were more likely to cycle than their older counterparts.', 'Younger workers were more likely cycle than older counterpart.'], 0]]);
M('t1l', 'remember', 3, 'So sánh Mức 3', 'Chọn câu Mức 3.', [['', ['The proportion of under-30s who cycled was three times that of older workers.', 'Under-30s cycled 15%, older 5%.'], 0]]);
M('t1l', 'understand', 2, 'Đọc bảng', 'TABLE_DEGREE: 65+ — No qualification 60%.', [['', ['Phần lớn người trên 65 không có bằng cấp', 'Phần lớn người trên 65 có bằng đại học'], 0]]);
M('t1l', 'understand', 3, 'Điểm tương đồng', 'BAR_COMMUTE: điểm tương đồng giữa 2 nhóm?', [['', ['Walking bằng nhau (9%)', 'Car bằng nhau'], 0]]);
G('t1l', 'apply', 1, 'Than / as', 'Điền một từ.', [['Bus was more popular ___ cycling.', 'than'], ['Walking was as common among young workers ___ among older ones.', 'as']]);
M('t1l', 'analyze', 1, 'Nhóm nào cao hơn?', 'Metro: Under 30 31%, 30+ 19%.', [['', ['Under 30', '30 and over'], 0]]);
M('t1l', 'analyze', 3, 'Chọn cách chia bảng', 'TABLE_DEGREE (5 nhóm tuổi × 3 bằng cấp)', [['', ['Theo bằng cấp: Body 1 University degree; Body 2 High school + No qualification', 'Theo từng nhóm tuổi một câu, 5 câu liên tiếp'], 0]]);
M('t1l', 'evaluate', 1, 'Câu đúng', '', [['', ['More older workers drove than younger workers.', 'More older workers drived than younger workers.'], 0]]);

/* ===== t1m How something works & dạng lạ ===== */
M('t1m', 'remember', 2, 'Ngôn ngữ cơ chế', 'Chọn câu đúng.', [['', ['High-pressure pumps push the water through membranes.', 'High-pressure pumps are push the water through membranes.'], 0]]);
M('t1m', 'remember', 3, 'Câu cơ chế Mức 3', 'Chọn câu Mức 3.', [['', ['Having been filtered, the water is forced through membranes, which trap the salt while allowing fresh water to pass.', 'Water is filtered. Then membranes. Salt stays.'], 0]]);
M('t1m', 'understand', 2, 'Chu trình hay tuyến tính?', 'PROCESS_DESAL', [['', ['tuyến tính, có một nhánh phụ (brine trả về biển)', 'chu trình khép kín'], 0]]);
M('t1m', 'understand', 3, 'Chủ động hay bị động?', 'How something works:', [['', ['Kết hợp: chủ động cho máy móc (pumps push), bị động cho vật liệu (water is stored)', 'Chỉ bị động'], 0]]);
G('t1m', 'apply', 1, 'Động từ cơ chế', 'Điền động từ.', [['Seawater is ___ in through a pipe.', 'pumped'], ['Salt ___ behind.', ['stays', 'remains']]]);
M('t1m', 'analyze', 1, 'Bộ phận nào làm gì?', '', [['Membranes:', ['giữ muối lại', 'bơm nước vào'], 0]]);
M('t1m', 'analyze', 3, 'Dạng đề lạ', 'Đề có 1 biểu đồ cột + 1 sơ đồ quy trình. Cách tiếp cận:', [['', ['Mixed: Overview 1 ý mỗi phần, mỗi phần một đoạn thân bài', 'Bỏ qua sơ đồ'], 0]]);
M('t1m', 'evaluate', 1, 'Câu đúng', '', [['', ['The water is stored in tanks.', 'The water stores in tanks.'], 0]]);
M('t1m', 'evaluate', 3, 'Overview cơ chế tốt nhất', '', [['', ['Overall, seawater becomes water.', 'Overall, the plant converts seawater into drinkable water through a series of filtration and pressure stages, with concentrated brine produced as a by-product.'], 1]]);
W('t1m', 3, 'How it works: nhà máy khử mặn (Band 8)', P('The diagram below shows how a reverse-osmosis desalination plant produces fresh water.'), PROCESS_DESAL, ['chủ động + bị động hợp lý', 'Overview: đầu vào–đầu ra–phụ phẩm', 'liên kết bước']);

/* acid rain dùng thêm cho t1e Mức 2 */
W('t1e', 2, 'Natural process: mưa axit', P('The diagram below shows how acid rain is formed.'), PROCESS_RAIN, ['chủ động cho quá trình tự nhiên', 'nguyên nhân → hậu quả']);
window.KL_ATTACH({ LINE_COFFEE, BAR_COMMUTE, MIX_WATER, PIE_WASTE, PROCESS_TEA, PROCESS_RAIN, MAP_CAMPUS, BAR_SPEND6, LINE_EV, PROCESS_DESAL, TABLE_DEGREE: window.UNITS.find(u => u.id === 't1l').exercises.find(e => e.chart && /qualification/.test(e.chart.title || ''))?.chart, BAR_SPORT: window.UNITS.find(u => u.id === 't1l').exercises.find(e => e.chart && /teenagers/.test(e.chart.title || ''))?.chart }, SNAP);
})();
