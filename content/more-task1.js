/* Ngân hàng bổ sung Task 1: thêm bài cho mọi bậc Bloom × mọi band, kèm biểu đồ mới tự soạn số liệu. */
(function () {
const L = (title, unit, labels, series) => ({ kind: 'line', title, unit, labels, series: series.map(([name, data]) => ({ name, data })) });
const B = (title, unit, labels, series) => ({ kind: 'bar', title, unit, labels, series: series.map(([name, data]) => ({ name, data })) });
const T = (title, headers, rows) => ({ kind: 'table', title, headers, rows });
const PIE = (title, pies) => ({ kind: 'pie', unit: '%', title, pies: pies.map(([t, s]) => ({ title: t, slices: Object.entries(s).map(([name, value]) => ({ name, value })) })) });
const PR = (title, steps) => ({ kind: 'process', title, steps });
const C = {
  INTERNET: L('Percentage of households with internet access in three countries, 2005–2025', '%', ['2005', '2010', '2015', '2020', '2025'], [['South Korea', [72, 88, 96, 99, 99]], ['Brazil', [14, 27, 51, 71, 83]], ['Nigeria', [2, 6, 15, 30, 44]]]),
  MUSEUM: L('Annual visitors to three museums in a city (millions), 2012–2024', 'million', ['2012', '2015', '2018', '2020', '2022', '2024'], [['History Museum', [1.8, 2.1, 2.4, 0.6, 1.9, 2.6]], ['Science Centre', [1.2, 1.3, 1.5, 0.4, 1.6, 2.2]], ['Art Gallery', [2.5, 2.3, 2.0, 0.5, 1.4, 1.5]]]),
  RICE: L('Rice exports from four countries (million tonnes), 2000–2020', 'million t', ['2000', '2005', '2010', '2015', '2020'], [['India', [1.5, 4.7, 2.2, 10.0, 14.5]], ['Thailand', [6.1, 7.5, 9.0, 9.8, 5.7]], ['Vietnam', [3.5, 5.2, 6.9, 6.6, 6.2]], ['Pakistan', [2.0, 3.0, 4.0, 4.2, 3.9]]]),
  HOLIDAY: B('Preferred holiday types among adults in a country, by age group (%), 2023', '%', ['Beach', 'City break', 'Countryside', 'Cruise', 'Adventure'], [['18–34', [30, 28, 10, 4, 28]], ['35–54', [38, 22, 20, 8, 12]], ['55+', [25, 15, 30, 25, 5]]]),
  SCREEN: B('Average daily screen time of children by activity (minutes), 2023', 'minutes', ['Video', 'Games', 'Homework', 'Social media', 'Reading'], [['Age 8–11', [95, 70, 30, 15, 20]], ['Age 12–15', [110, 85, 55, 90, 12]]]),
  ENERGYMIX: T('Electricity generation in Country A (TWh), 2010 and 2025, with total', ['Source', '2010', '2025'], [['Coal', '180', '95'], ['Gas', '60', '110'], ['Nuclear', '40', '40'], ['Wind & Solar', '5', '120'], ['Total', '285', '365']]),
  JOBS: T('Employment by sector in Country B (% of workers) and total workforce (millions)', ['Year', 'Agriculture', 'Industry', 'Services', 'Workforce'], [['1995', '52%', '18%', '30%', '33 m'], ['2010', '40%', '24%', '36%', '45 m'], ['2025', '26%', '29%', '45%', '54 m']]),
  PHONE: PIE('How people aged 18–30 mainly used their smartphones, 2015 and 2025', [['2015', { Calls: 35, Messaging: 30, 'Social media': 20, Video: 10, Other: 5 }], ['2025', { Calls: 8, Messaging: 22, 'Social media': 35, Video: 30, Other: 5 }]]),
  BUDGET: PIE('City council spending by area, 2010 and 2024', [['2010', { Roads: 30, Education: 25, Health: 20, Parks: 5, Housing: 10, Other: 10 }], ['2024', { Roads: 18, Education: 28, Health: 26, Parks: 9, Housing: 14, Other: 5 }]]),
  CHOC: PR('How chocolate is produced from cocoa beans', ['Ripe cocoa pods are harvested', 'Beans are removed and left to ferment for 5–7 days', 'Fermented beans are dried in the sun', 'Dried beans are shipped to factories', 'Beans are roasted at 120–150°C', 'Shells are removed, leaving cocoa nibs', 'Nibs are ground into cocoa liquor', 'Sugar and milk are added and the mixture is moulded into bars']),
  WATERCYCLE: PR('The water cycle', ['Heat from the sun causes water in oceans and lakes to evaporate', 'Water vapour rises and cools', 'Vapour condenses into clouds', 'Water falls as rain or snow (precipitation)', 'Water runs off into rivers or soaks into the ground', 'Rivers and groundwater return water to the sea']),
  BRICK: PR('How bricks are manufactured', ['Clay is dug from the ground by a large digger', 'Clay is placed on a metal grid and broken up', 'Sand and water are added', 'The mixture is shaped in moulds or cut by a wire cutter', 'Bricks are dried in a drying oven for 24–48 hours', 'Bricks are heated in a kiln at 200–1,300°C', 'Bricks are cooled for 48–72 hours', 'Bricks are packaged and delivered']),
  HARBOUR: { kind: 'map', title: 'A fishing harbour, 1995 and 2025', maps: [
    { title: '1995', items: [{ name: 'Fishing boats', x: 5, y: 5, w: 45, h: 30, color: '#cfe6fb' }, { name: 'Fish market', x: 55, y: 5, w: 20, h: 20 }, { name: 'Warehouses', x: 78, y: 5, w: 18, h: 30 }, { name: 'Beach', x: 5, y: 40, w: 40, h: 15, color: '#fdf1c8' }, { name: 'Houses', x: 50, y: 40, w: 45, h: 25 }, { name: 'Coast road', x: 0, y: 70, w: 100, h: 6, color: '#ddd' }, { name: 'Fields', x: 5, y: 80, w: 90, h: 15, color: '#e9f3d6' }] },
    { title: '2025', items: [{ name: 'Marina (yachts)', x: 5, y: 5, w: 45, h: 30, color: '#cfe6fb' }, { name: 'Seafood restaurants', x: 55, y: 5, w: 20, h: 20, color: '#fde7c8' }, { name: 'Hotel', x: 78, y: 5, w: 18, h: 30 }, { name: 'Beach', x: 5, y: 40, w: 40, h: 15, color: '#fdf1c8' }, { name: 'Houses', x: 50, y: 40, w: 25, h: 25 }, { name: 'Car park', x: 77, y: 40, w: 18, h: 25, color: '#eee' }, { name: 'Coast road (widened)', x: 0, y: 68, w: 100, h: 9, color: '#ddd' }, { name: 'Holiday apartments', x: 5, y: 80, w: 55, h: 15 }, { name: 'Fields', x: 65, y: 80, w: 30, h: 15, color: '#e9f3d6' }] }] },
  LIBRARY: { kind: 'map', title: 'Ground floor of a public library, 2005 and now', maps: [
    { title: '2005', items: [{ name: 'Entrance', x: 40, y: 85, w: 20, h: 10, color: '#fde7c8' }, { name: 'Reference books', x: 5, y: 5, w: 40, h: 40 }, { name: 'Fiction shelves', x: 55, y: 5, w: 40, h: 40 }, { name: 'Reading tables', x: 5, y: 50, w: 40, h: 30 }, { name: 'Newspapers', x: 55, y: 50, w: 40, h: 30 }] },
    { title: 'Now', items: [{ name: 'Entrance (automatic doors)', x: 40, y: 85, w: 20, h: 10, color: '#fde7c8' }, { name: 'Computer room', x: 5, y: 5, w: 40, h: 40 }, { name: 'Fiction shelves', x: 55, y: 5, w: 40, h: 20 }, { name: 'Café', x: 55, y: 28, w: 40, h: 17, color: '#fde7c8' }, { name: 'Group study rooms', x: 5, y: 50, w: 40, h: 30 }, { name: 'Children\'s area', x: 55, y: 50, w: 40, h: 30, color: '#e9f3d6' }] }] },
  OBESITY: L('Adult obesity rates in four countries (%), 2000–2030 (projected from 2025)', '%', ['2000', '2010', '2020', '2025', '2030*'], [['USA', [30, 35, 42, 44, 47]], ['UK', [21, 25, 28, 30, 33]], ['Japan', [3, 4, 4, 5, 5]], ['Mexico', [24, 30, 36, 38, 41]]]),
  STUDY: B('Number of international students in five countries (thousands), 2015 and 2025', 'thousand', ['USA', 'UK', 'Canada', 'Australia', 'Japan'], [['2015', [975, 430, 270, 290, 150]], ['2025', [1100, 730, 800, 450, 280]]]),
  MEAT: T('Average weekly consumption of food per person (grams), Country C', ['Food', '1990', '2005', '2020'], [['Red meat', '650', '540', '410'], ['Poultry', '220', '330', '420'], ['Fish', '180', '170', '160'], ['Vegetables', '1,100', '1,180', '1,260'], ['Sweets', '190', '260', '240']]),
  GENDER: B('Percentage of men and women working in selected jobs in a country, 2024', '%', ['Nursing', 'Engineering', 'Teaching', 'IT', 'Law'], [['Men', [11, 82, 28, 74, 52]], ['Women', [89, 18, 72, 26, 48]]]),
  HOUSE: T('Housing in a city, 2024: average price, average size and share of residents', ['Type', 'Avg price (USD)', 'Avg size (m²)', 'Share of residents'], [['Apartment', '180,000', '70', '55%'], ['Townhouse', '320,000', '110', '25%'], ['Villa', '750,000', '250', '5%'], ['Rented room', '—', '20', '15%']]),
  SOLARPANEL: PR('How a solar panel system powers a home', ['Solar panels on the roof absorb sunlight', 'Cells convert sunlight into direct current (DC) electricity', 'An inverter changes DC into alternating current (AC)', 'AC electricity powers household appliances', 'Surplus electricity is stored in a battery', 'Any remaining surplus is sent to the national grid through a meter']),
  COMMUTE2: T('Average commuting time (minutes) and main mode in four cities, 2024', ['City', 'Avg time', 'Car', 'Public transport', 'Motorbike/Bike'], [['Bangkok', '58', '45%', '35%', '20%'], ['Hanoi', '42', '10%', '12%', '78%'], ['Singapore', '35', '20%', '70%', '10%'], ['Jakarta', '64', '35%', '25%', '40%']]),
};
const SNAP = window.KL_SNAP();
window.KL_BANK(`
@t1a
#remember 1 mcq Các dạng đề Task 1 | Chọn dạng đề.
Biểu đồ có trục thời gian và nhiều đường :: +Line graph || Process || Map
Hai bản đồ một khu vực ở hai thời điểm :: +Maps || Pie chart || Table
Sơ đồ các bước làm ra sản phẩm :: +Process || Bar chart || Line graph
#remember 2 mcq Cấu trúc bài Task 1 | Chọn cấu trúc chuẩn.
:: +Introduction → Overview → Body 1 → Body 2 || Introduction → Body → Conclusion có ý kiến || Overview → Introduction → Body
Overview nên đặt ở đâu? :: +ngay sau Introduction || cuối bài như kết luận có ý kiến cá nhân
#remember 3 mcq Paraphrase Intro sâu | Chọn câu paraphrase Mức 3.
*The table shows the number of international students in five countries in 2015 and 2025.* :: +The table compares how many overseas students five nations hosted in 2015 and a decade later. || The table shows the number of international students in five countries in 2015 and 2025. || The table is about students.
#understand 1 mcq Từ thay "shows" | Chọn từ thay thế.
:: +illustrates || make || speaks
:: +compares || compute || explains why
#understand 2 mcq Overview hay chi tiết? | Câu nào là Overview?
:: +Overall, internet access rose in all three countries, with South Korea leading throughout. || In 2005, 72% of Korean homes had internet access.
#understand 3 mcq Đánh giá Overview | Overview nào khớp INTERNET chart?
:: +Overall, while South Korea had near-universal access throughout, Brazil and Nigeria saw rapid growth, although Nigeria still lagged far behind by 2025. || Overall, Nigeria had 44% in 2025. || Overall, internet is popular.
#apply 1 gap Intro cơ bản | Điền một từ.
The bar chart ___ the number of international students in five countries. = compares / shows / illustrates
The data is given ___ thousands. = in
#apply 2 rewrite Paraphrase Intro | Viết lại câu đề thành câu Introduction.
The graph shows the percentage of households with internet access in three countries from 2005 to 2025. => The line graph illustrates the proportion of homes with internet access in three countries over a twenty-year period from 2005.
#apply 3 rewrite Viết Overview Mức 3 | Viết Overview 2 câu cho biểu đồ MUSEUM (History 1.8→2.6; Science 1.2→2.2; Art 2.5→1.5; tất cả giảm mạnh năm 2020).
Overview cho MUSEUM => Overall, all three museums saw a sharp but temporary fall in visitors in 2020. While the History Museum and Science Centre ended the period well above their starting levels, the Art Gallery, initially the most popular, experienced a long-term decline.
#analyze 1 mcq Đặc điểm nổi bật | INTERNET chart: đặc điểm nổi bật nhất?
:: +Nigeria tăng nhanh nhưng vẫn thấp nhất || Hàn Quốc luôn 99% || Brazil năm 2010 là 27%
#analyze 2 match Phần & nội dung | Nối phần bài với nội dung.
Introduction => paraphrase đề
Overview => xu hướng & đặc điểm chính
Body 1 => chi tiết nhóm số liệu thứ nhất
Body 2 => chi tiết nhóm số liệu thứ hai
#analyze 3 mcq Lỗi Overview tinh vi | *Overall, the History Museum was the most visited attraction.*
Lỗi: :: +Sai: Art Gallery đông nhất ở đầu kỳ; History chỉ dẫn đầu từ 2018 → Overview phải nêu sự thay đổi thứ hạng || Không lỗi
#evaluate 1 mcq Intro đúng | Chọn Intro đúng.
:: +The pie charts compare how young adults mainly used their smartphones in 2015 and 2025. || The pie charts shows phone.
#evaluate 2 mcq Overview tốt hơn | Biểu đồ PHONE.
:: +Overall, phones became far less of a calling device and more of a platform for social media and video. || Overall, calls were 35% in 2015 and 8% in 2025.
#evaluate 3 mcq Intro + Overview Band 8 | Biểu đồ MUSEUM.
:: +The line graph tracks annual attendance at three city museums between 2012 and 2024. Overall, despite a dramatic collapse in 2020, the History Museum and Science Centre recovered to record levels, whereas the Art Gallery never regained its former popularity. || The graph is about museums. Overall, 2020 was low.
#create 1 write Intro + Overview: internet tại gia | 45 | paraphrase; Overview 2 ý | INTERNET
Chỉ viết Introduction + Overview (50–70 từ).

The graph below shows the percentage of households with internet access in three countries between 2005 and 2025.

Khung gợi ý: *The line graph illustrates ... Overall, ... while ...*
#create 2 write Intro + Overview: khách thăm bảo tàng | 50 | paraphrase sâu; Overview không số liệu; nêu điểm bất thường 2020 | MUSEUM
Viết Introduction + Overview (60–80 từ).

The graph below shows the number of visitors to three museums in a city between 2012 and 2024.
#create 3 write Bài hoàn chỉnh: sinh viên quốc tế (Band 8) | 150 | Overview 2 ý; nhóm quốc gia theo mức tăng; so sánh gấp | STUDY
The chart below shows the number of international students in five countries in 2015 and 2025.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1b
#remember 1 mcq Động từ xu hướng | Chọn động từ nghĩa "tăng".
:: +increase || decrease || remain
:: +climb || drop || fall
:: +grow || decline || plunge
#remember 2 mcq Tính từ / trạng từ xu hướng | Chọn câu đúng.
:: +There was a gradual decline in exports. || There was a gradually decline in exports.
:: +Exports declined gradually. || Exports declined gradual.
:: +The figure rose dramatically. || The figure rose dramatic.
#remember 3 mcq Xu hướng phức | Chọn cách diễn đạt chính xác.
Tăng rồi giảm rồi phục hồi :: +rose, dipped and then recovered || rose and fell and rose
Gần như không đổi với dao động nhỏ :: +remained broadly stable, with minor fluctuations || stayed same and moved
#understand 1 mcq Xu hướng nào? | Chọn mô tả đúng.
10 → 20 :: +doubled || halved
50 → 25 :: +halved || doubled
#understand 2 mcq Mức độ | Chọn trạng từ phù hợp.
40 → 41 :: +slightly || dramatically
5 → 60 :: +dramatically || marginally
#understand 3 mcq Đọc RICE chart | Câu nào đúng?
:: +India's exports increased almost tenfold over the period. || India's exports fell steadily. || Thailand overtook India in 2020.
:: +Thailand's exports peaked in 2015 before dropping sharply. || Thailand's exports rose steadily throughout.
#apply 1 gap Chia động từ xu hướng | Chia ở quá khứ đơn.
Exports ___ (fall) to 5 million tonnes. = fell
The figure ___ (peak) in 2015. = peaked
Prices ___ (fluctuate) between 2010 and 2015. = fluctuated
#apply 2 rewrite Động từ ↔ danh từ | Viết lại dùng danh từ (There was a ...).
Exports rose sharply. => There was a sharp rise in exports.
Sales fell slightly in 2010. => There was a slight fall in sales in 2010.
#apply 3 rewrite Câu xu hướng Band 8 | Viết lại thành MỘT câu với dữ liệu RICE.
Thailand: 6.1 (2000) → 9.8 (2015) → 5.7 (2020). => Thailand's exports climbed steadily to a peak of 9.8 million tonnes in 2015, before plummeting to 5.7 million tonnes by 2020.
India: 1.5 (2000) → 14.5 (2020), dip in 2010. => Despite a brief dip in 2010, India's rice exports surged almost tenfold, from 1.5 to 14.5 million tonnes.
#analyze 1 mcq Đường nào? | RICE chart.
Đường tăng mạnh nhất: :: +India || Pakistan || Vietnam
#analyze 2 match Số liệu & mô tả | Nối.
3.5 → 6.9 => nearly doubled
9.8 → 5.7 => fell sharply
4.0 → 4.2 → 3.9 => remained relatively stable
2.0 → 3.0 => rose by half
#analyze 3 mcq Nhóm đường | Nhóm hợp lý cho 2 đoạn thân bài (RICE).
:: +Body 1: India & Thailand (biến động lớn, đổi ngôi); Body 2: Vietnam & Pakistan (ổn định hơn) || Body 1: 2000–2010; Body 2: 2010–2020, mô tả cả 4 nước mỗi năm
#evaluate 1 mcq Câu đúng | Chọn câu đúng.
:: +The number of tourists increased. || The number of tourists increasing.
#evaluate 2 mcq Câu tốt hơn | Chọn câu tốt hơn.
:: +Vietnam's exports nearly doubled to 6.9 million tonnes by 2010, before levelling off. || Vietnam was 3.5 then 5.2 then 6.9 then 6.6 then 6.2.
#evaluate 3 mcq Câu Band 8 | Chọn câu tốt nhất.
:: +India, initially a minor exporter, overtook Thailand around 2012 to become by far the largest supplier, shipping 14.5 million tonnes in 2020. || India go up and Thailand go down. || India exported more rice and became first.
#create 1 write Intro + Overview: xuất khẩu gạo | 45 | paraphrase; Overview: xu hướng chung + nước nổi bật | RICE
Chỉ viết Introduction + Overview (50–70 từ).

The graph below shows rice exports from four countries between 2000 and 2020.

Khung gợi ý: *The line graph illustrates ... Overall, ... In addition, ...*
#create 2 write Line graph: xuất khẩu gạo | 150 | đa dạng động từ/danh từ xu hướng; nhóm đường; by/to | RICE
The graph below shows rice exports from four countries between 2000 and 2020.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write Line graph có biến động (Band 8) | 150 | xử lý điểm bất thường 2020; peak/recover; Super Boosters | MUSEUM
The graph below shows the number of visitors to three museums in a city between 2012 and 2024.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1c
#remember 1 mcq Từ so sánh tĩnh | Chọn từ đúng.
Cao nhất :: +the highest || the most high
Thấp hơn :: +lower than || more low than
#remember 2 mcq Cụm số liệu | Chọn câu đúng.
:: +Beach holidays were the most popular choice among 35–54-year-olds, at 38%. || Beach holidays were most popular in 35–54, with 38 percents.
:: +Cruises appealed to only 4% of the youngest group. || Cruises appealed only 4% the youngest group.
#remember 3 mcq Cấu trúc gom | Chọn câu Mức 3.
:: +City breaks and adventure holidays were equally popular among young adults, each chosen by just under 30%. || City break 28% and adventure 28% for young.
#understand 1 mcq Đọc HOLIDAY chart | Chọn đáp án đúng.
Nhóm 55+ thích nhất: :: +Countryside || Beach || Adventure
Adventure phổ biến nhất ở nhóm: :: +18–34 || 55+
#understand 2 mcq So sánh đúng | Câu nào đúng với HOLIDAY?
:: +Cruises were over six times as popular among the over-55s as among young adults. || Cruises were equally popular in all groups.
#understand 3 mcq Chia nhóm | Cách chia thân bài tốt nhất (HOLIDAY).
:: +Body 1: lựa chọn giảm theo tuổi (City break, Adventure); Body 2: lựa chọn tăng theo tuổi (Countryside, Cruise) + Beach || Body 1: nhóm 18–34; Body 2: nhóm 35–54; Body 3: nhóm 55+
#apply 1 gap So sánh cơ bản | Điền một từ.
Beach was ___ popular than cruise. = more
Countryside was the most popular choice ___ the oldest group. = among / for
#apply 2 gap Ngôn ngữ số liệu | Điền một từ.
Adventure holidays ___ for 28% of young adults' choices. = accounted
Cruises were five times ___ popular among over-55s. = as
#apply 3 rewrite Câu so sánh Band 8 | Viết MỘT câu cho dữ liệu.
Screen time — Social media: 8–11: 15 min; 12–15: 90 min. => Teenagers aged 12–15 spent six times as long on social media as younger children, at 90 minutes compared to just 15.
#analyze 1 mcq Cao nhất/thấp nhất | SCREEN chart, nhóm 8–11.
Hoạt động nhiều thời gian nhất: :: +Video || Games || Reading
#analyze 2 match Số liệu & so sánh | Nối (SCREEN chart).
Video 95 vs 110 => slightly higher for older children
Social media 15 vs 90 => six times higher for older children
Reading 20 vs 12 => the only activity higher for younger children
Homework 30 vs 55 => nearly double for older children
#analyze 3 mcq Đặc điểm cho Overview | SCREEN chart.
:: +Trẻ lớn dùng màn hình nhiều hơn ở hầu hết hoạt động; video là hoạt động chính ở cả hai nhóm || Trẻ nhỏ đọc 20 phút
#evaluate 1 mcq Câu đúng | Chọn câu đúng.
:: +Video was the most popular activity. || Video was the more popular activity of all.
#evaluate 2 mcq Câu tốt hơn | Chọn câu tốt hơn.
:: +Reading was the least common activity for both groups, at 20 and 12 minutes respectively. || Reading was 20 and 12.
#evaluate 3 mcq Câu Band 8 | Chọn câu tốt nhất.
:: +Reading was the only activity on which younger children spent more time than their older counterparts, albeit by a modest eight minutes. || Young children read more. || Reading 20 and 12 minutes.
#create 1 write Intro + Overview: kỳ nghỉ yêu thích | 45 | paraphrase; Overview 2 khác biệt chính | HOLIDAY
Chỉ viết Introduction + Overview (50–70 từ).

The chart below shows the preferred holiday types of adults in a country in 2023, by age group.

Khung gợi ý: *The bar chart compares ... Overall, it is clear that ... whereas ...*
#create 2 write No change: thời gian màn hình | 150 | gom số liệu; so sánh gấp; respectively | SCREEN
The chart below shows the average daily screen time of children in two age groups, by activity, in 2023.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write No change 3 nhóm tuổi (Band 8) | 150 | nhóm theo xu hướng tuổi; counterparts; by far | HOLIDAY
The chart below shows the preferred holiday types of adults in a country in 2023, by age group.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1g
#remember 1 mcq Dạng Mixed | Đề Mixed là:
:: +hai (hoặc nhiều) biểu đồ khác loại về chủ đề liên quan || một biểu đồ đường
#remember 2 mcq Chuyển biểu đồ | Chọn câu chuyển tốt.
:: +As for the second chart, ... || Second chart is ...
:: +Turning to the table, ... || Next table it ...
#remember 3 mcq Intro Mixed Mức 3 | Chọn Intro tốt nhất (bảng JOBS).
:: +The table illustrates how employment in Country B was distributed across three sectors in three different years, alongside the size of the overall workforce. || The table shows jobs. || There are two tables.
#understand 1 mcq Đọc JOBS | Chọn đáp án đúng.
Ngành lớn nhất năm 2025: :: +Services || Agriculture || Industry
Lực lượng lao động 1995: :: +33 triệu || 54 triệu
#understand 2 mcq Liên hệ % và tổng | JOBS: Agriculture 52% của 33m (1995) vs 26% của 54m (2025).
Số lao động nông nghiệp tuyệt đối: :: +giảm từ ~17m xuống ~14m || tăng gấp đôi
#understand 3 mcq Overview Mixed | Overview tốt cần nêu:
:: +sự chuyển dịch từ nông nghiệp sang dịch vụ VÀ lực lượng lao động tăng || chỉ ngành có % cao nhất
#apply 1 gap Số liệu | Điền.
In 1995, agriculture employed ___ of workers. = 52% / 52 percent
The workforce grew from 33 to ___ million. = 54
#apply 2 rewrite Câu liên kết hai phần | Viết MỘT câu nối % với tổng.
Services: 30% (1995, workforce 33m) → 45% (2025, workforce 54m). => The share of workers in services rose from 30% to 45%, meaning that, as the workforce expanded, the number of service jobs more than doubled.
#apply 3 rewrite Overview Mixed Band 8 | Viết Overview cho JOBS.
Overview => Overall, Country B's economy shifted markedly away from agriculture towards services and industry, while its total workforce expanded by more than half over the thirty-year period.
#analyze 1 mcq Phần nào? | JOBS: cột "Workforce" là:
:: +số tuyệt đối || phần trăm
#analyze 2 match Xu hướng | Nối (JOBS).
Agriculture => halved in share
Industry => rose steadily
Services => became the largest sector
Workforce => grew by over 60%
#analyze 3 mcq Suy luận đúng | Câu nào suy luận ĐÚNG từ JOBS?
:: +By 2025, almost one in two workers was employed in services. || Fewer people worked in industry in 2025 than in 1995. || Agriculture employed most workers in 2025.
#evaluate 1 mcq Câu đúng | Chọn câu đúng.
:: +Services accounted for 45% of jobs in 2025. || Services accounted 45% jobs in 2025.
#evaluate 2 mcq Câu tốt hơn | Chọn câu tốt hơn.
:: +While agriculture's share halved, industry and services both expanded. || Agriculture 52 40 26. Industry 18 24 29.
#evaluate 3 mcq Đoạn Band 8 | Chọn câu tốt nhất.
:: +Agriculture, which employed over half the workforce in 1995, saw its share fall steadily to just 26%, being overtaken by services as early as 2010. || Agriculture fell and services rose and industry rose.
#create 1 write Intro + Overview: việc làm theo ngành | 45 | paraphrase; Overview cả % và tổng | JOBS
Chỉ viết Introduction + Overview (50–70 từ).

The table below shows the share of employment by sector in Country B and the total workforce in 1995, 2010 and 2025.

Khung gợi ý: *The table illustrates ... Overall, ... while the total workforce ...*
#create 2 write Mixed: việc làm theo ngành | 150 | liên hệ % và số tuyệt đối; chuyển đoạn | JOBS
The table below shows the share of employment by sector in Country B and the total workforce in 1995, 2010 and 2025.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write Mixed: thời gian đi làm & phương tiện (Band 8) | 150 | liên hệ thời gian với phương tiện; nhóm thành phố; Overview 2 phần | COMMUTE2
The table below shows the average commuting time and the main mode of transport in four Asian cities in 2024.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1d
#remember 1 mcq Phân số | Chọn phân số đúng.
25% :: +a quarter || a third || a half
50% :: +a half || a fifth
75% :: +three quarters || two thirds
#remember 2 mcq Từ vựng pie | Chọn câu đúng.
:: +Social media made up the largest proportion in 2025. || Social media made up the largest proportion of in 2025.
:: +Calls represented roughly a third of usage in 2015. || Calls represented roughly one-third percent.
#remember 3 mcq Diễn đạt thay đổi tỷ trọng | Chọn câu Mức 3.
:: +The share devoted to calls shrank more than fourfold, from 35% to a mere 8%. || Calls went down 35 to 8.
#understand 1 mcq Đọc PHONE | Chọn đáp án.
Lớn nhất năm 2015: :: +Calls || Video
Lớn nhất năm 2025: :: +Social media || Messaging
#understand 2 mcq Phân số xấp xỉ | Chọn diễn đạt.
30% :: +just under a third || just over a half
22% :: +just over a fifth || nearly a half
#understand 3 mcq Thay đổi | PHONE: Video 10% → 30%.
:: +tripled || doubled || halved
#apply 1 gap Pie cơ bản | Điền.
In 2015, calls accounted ___ 35%. = for
Video ___ (triple) to 30%. = tripled
#apply 2 rewrite Câu so sánh 2 mốc | Viết lại thành một câu.
Messaging 2015: 30%. 2025: 22%. => The proportion of time spent messaging fell from 30% to 22%.
Social media 2015: 20%. 2025: 35%. => Social media rose from a fifth to over a third of total usage.
#apply 3 rewrite Câu Band 8 | Viết một câu kết hợp xu hướng và so sánh.
Calls 35→8, Social media 20→35. => Calls, the dominant use in 2015, were overtaken by social media, which grew to 35% while calls plummeted to just 8%.
#analyze 1 mcq Không đổi | PHONE chart: hạng mục không đổi.
:: +Other || Calls || Video
#analyze 2 match Hạng mục & xu hướng | Nối (BUDGET).
Roads 30→18 => fell considerably
Health 20→26 => rose
Parks 5→9 => almost doubled
Other 10→5 => halved
#analyze 3 mcq Chia đoạn | BUDGET: cách chia tốt nhất.
:: +Body 1: các khoản tăng (Education, Health, Parks, Housing); Body 2: các khoản giảm (Roads, Other) || Body 1: pie 2010; Body 2: pie 2024
#evaluate 1 mcq Câu đúng | Chọn câu đúng.
:: +The proportion of spending on roads fell. || The proportion of spending on roads were fell.
#evaluate 2 mcq Câu tốt hơn | Chọn câu tốt hơn.
:: +Spending on parks almost doubled, from 5% to 9%. || Parks 5% and 9%.
#evaluate 3 mcq Overview Band 8 | BUDGET.
:: +Overall, the council redirected funds away from roads towards social services, with education replacing roads as the largest area of spending. || Overall, roads were 30% and 18%. || Overall, the budget changed a lot.
#create 1 write Intro + Overview: dùng điện thoại | 45 | paraphrase; Overview: thay đổi lớn nhất | PHONE
Chỉ viết Introduction + Overview (50–70 từ).

The pie charts below show how people aged 18–30 mainly used their smartphones in 2015 and 2025.

Khung gợi ý: *The pie charts compare ... Overall, ... whereas ...*
#create 2 write Pie 2 mốc: dùng điện thoại | 150 | phân số; so sánh; chia đoạn theo xu hướng | PHONE
The pie charts below show how people aged 18–30 mainly used their smartphones in 2015 and 2025.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write Pie 6 hạng mục: ngân sách thành phố (Band 8) | 150 | nhóm tăng/giảm; overtake; phân số chính xác | BUDGET
The pie charts below show how a city council's spending was divided among different areas in 2010 and 2024.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1e
#remember 1 mcq Từ chỉ trình tự | Chọn từ đúng.
Bước đầu tiên :: +First / In the first stage || Finally
Bước cuối :: +Finally / In the final stage || Firstly
#remember 2 mcq Bị động trong process | Chọn câu đúng.
:: +The cocoa beans are left to ferment for five days. || The cocoa beans left to ferment for five days.
:: +The beans are then roasted. || The beans then roast by worker.
#remember 3 mcq Câu nối bước Mức 3 | Chọn câu Mức 3.
:: +Once roasted, the beans have their shells removed, leaving the nibs, which are subsequently ground into cocoa liquor. || The beans are roasted. Shells removed. Nibs ground.
#understand 1 mcq Đọc CHOC | Chọn đáp án.
Bước 3: :: +Fermented beans are dried in the sun || Beans are roasted
Số bước: :: +8 || 6
#understand 2 mcq Tự nhiên hay nhân tạo? | Chọn đáp án.
Water cycle :: +tự nhiên (chu trình) || nhân tạo
Brick manufacturing :: +nhân tạo (tuyến tính) || tự nhiên
#understand 3 mcq Chủ động hay bị động? | Water cycle nên viết:
:: +chủ yếu chủ động (water evaporates, vapour rises) || chỉ bị động
#apply 1 gap Bị động | Điền dạng bị động.
The clay ___ (dig) from the ground. = is dug
The bricks ___ (heat) in a kiln. = are heated
#apply 2 gap Nối bước | Điền một từ.
___ being dried, the bricks are heated in a kiln. = After
The mixture is shaped, ___ which it is dried. = after
#apply 3 rewrite Câu process Band 8 | Gộp thành MỘT câu.
Bricks are dried for 24–48 hours. Then they are heated in a kiln. Then they are cooled for 48–72 hours. => Having been dried for up to two days, the bricks are fired in a kiln and subsequently left to cool for a further 48 to 72 hours.
#analyze 1 mcq Bước đầu | WATERCYCLE bắt đầu bằng:
:: +evaporation from oceans and lakes || rain
#analyze 2 match Bước & từ nối | Nối (BRICK).
Clay is dug => First
Sand and water are added => Next
Bricks are cooled => After that
Bricks are delivered => Finally
#analyze 3 mcq Overview đúng | Overview cho WATERCYCLE.
:: +Overall, the water cycle is a continuous natural process in which water moves between the sea, the atmosphere and the land. || Overall, there are 6 stages and it starts with rain.
#evaluate 1 mcq Câu đúng | Chọn câu đúng.
:: +The beans are dried in the sun. || The beans is dried in the sun.
#evaluate 2 mcq Câu tốt hơn | Chọn câu tốt hơn.
:: +After being harvested, the pods are opened and the beans are left to ferment. || Pods harvested. Then open. Then beans ferment.
#evaluate 3 mcq Overview Band 8 | CHOC.
:: +Overall, chocolate production is an eight-stage process that begins with harvesting cocoa pods on plantations and ends with moulding the chocolate into bars in factories. || Overall, chocolate is made from cocoa.
#create 1 write Intro + Overview: sản xuất gạch | 45 | paraphrase; Overview: số bước, đầu–cuối | BRICK
Chỉ viết Introduction + Overview (50–70 từ).

The diagram below shows how bricks are manufactured.

Khung gợi ý: *The diagram illustrates how ... Overall, ... stages, beginning with ... and ending with ...*
#create 2 write Process: sản xuất sô-cô-la | 150 | bị động; từ nối đa dạng; Overview | CHOC
The diagram below shows how chocolate is produced from cocoa beans.

Summarise the information by selecting and reporting the main features. Write at least 150 words.
#create 3 write Natural process: vòng tuần hoàn nước (Band 8) | 150 | chủ động cho tự nhiên; chu trình; câu nối Mức 3 | WATERCYCLE
The diagram below shows the water cycle.

Summarise the information by selecting and reporting the main features. Write at least 150 words.

@t1f
#remember 1 mcq Phương hướng | Chọn từ đúng.
Phía bắc :: +to the north || in the up
Phía đông nam :: +in the south-east || in the down-right
#remember 2 mcq Động từ thay đổi | Chọn câu đúng.
:: +The warehouses were demolished to make way for a hotel. || The warehouses demolished to make way for a hotel.
:: +The road was widened. || The road was widen.
#remember 3 mcq Câu map Mức 3 | Chọn câu Mức 3.
:: +The harbour, once home to fishing boats, has been converted into a marina for yachts. || The fishing boats are now yachts.
#understand 1 mcq Đọc HARBOUR | Chọn đáp án.
Fish market thành: :: +seafood restaurants || car park
Không đổi: :: +Beach || Warehouses
#understand 2 mcq Xu hướng chung | HARBOUR map cho thấy:
:: +chuyển từ đánh cá sang du lịch || công nghiệp hoá nặng
#understand 3 mcq Đọc LIBRARY | Thay đổi nào ĐÚNG?
:: +Reference books replaced by a computer room || Children's area replaced by newspapers || Fiction shelves removed entirely
#apply 1 gap Giới từ vị trí | Điền.
The hotel is ___ the north-east corner. = in
The car park is next ___ the houses. = to
#apply 2 rewrite Câu map | Viết câu bị động.
Newspapers area → Children's area. => The newspaper area has been replaced by a children's area.
Coast road → wider. => The coast road has been widened.
#apply 3 rewrite Câu map Band 8 | Gộp thành MỘT câu.
Fields in the south: part became holiday apartments, part remains. => Much of the farmland to the south has given way to holiday apartments, although a small area of fields remains in the south-east.
#analyze 1 mcq Cái gì mới? | HARBOUR 2025: công trình mới hoàn toàn.
:: +Car park || Beach || Houses
#analyze 2 match Thay đổi | Nối (LIBRARY).
Reference books => replaced by a computer room
Fiction shelves => reduced in size
Reading tables => converted into group study rooms
Newspapers => replaced by a children's area
#analyze 3 mcq Nhóm thay đổi | Chia thân bài HARBOUR hợp lý nhất.
:: +Body 1: khu ven biển (bến, chợ, kho); Body 2: khu dân cư & đất liền (nhà, đường, ruộng) || Body 1: 1995; Body 2: 2025
#evaluate 1 mcq Câu đúng | Chọn câu đúng.
:: +A café was added. || A café was add.
#evaluate 2 mcq Câu tốt hơn | Chọn câu tốt hơn.
:: +The fiction section was reduced to make room for a café. || Fiction small and café.
#evaluate 3 mcq Overview Band 8 | HARBOUR.
:: +Overall, the harbour has been transformed from a working fishing port into a tourist destination, with commercial fishing facilities giving way to leisure and accommodation. || Overall, there are more buildings. || Overall, the harbour is different.
#create 1 write Intro + Overview: thư viện | 45 | paraphrase; Overview: xu hướng hiện đại hoá | LIBRARY
Chỉ viết Introduction + Overview (50–70 từ).

The maps below show the ground floor of a public library in 2005 and now.

Khung gợi ý: *The maps illustrate ... Overall, the library has been ... with ...*
#create 2 write Map: thư viện | 150 | bị động hoàn thành; vị trí; nhóm thay đổi | LIBRARY
The maps below show the ground floor of a public library in 2005 and now.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write Map: cảng cá (Band 8) | 150 | xu hướng chuyển đổi; give way to / be converted into; nhóm theo khu vực | HARBOUR
The maps below show a fishing harbour in 1995 and 2025.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1h
#remember 1 mcq 4 tiêu chí Task 1 | Chọn tiêu chí đúng.
:: +Task Achievement || Task Response
:: +Coherence and Cohesion || Creativity
#remember 2 mcq Yêu cầu TA | Chọn yêu cầu đúng.
:: +Overview rõ ràng, chọn đặc điểm chính, số liệu chính xác || Đưa ý kiến cá nhân và nguyên nhân
#remember 3 mcq TA Band 8 | Chọn mô tả Band 8.
:: +covers all requirements; clearly presents and highlights key features || describes all numbers in order
#understand 1 mcq Vì sao bị trừ TA? | Chọn lý do.
*This is because people like coffee.* :: +đưa nguyên nhân/ý kiến không có trong biểu đồ || sai ngữ pháp
#understand 2 mcq Chọn số liệu | OBESITY chart: số liệu nên dùng?
:: +đầu kỳ, cuối kỳ thực tế (2025), dự báo 2030 và khoảng cách giữa các nước || mọi số liệu từng năm
#understand 3 mcq Đặc điểm chính | OBESITY: đặc điểm chính nhất?
:: +Tỷ lệ tăng ở 3 nước, Nhật Bản rất thấp và gần như ổn định; Mỹ cao nhất || Anh năm 2010 là 25%
#apply 1 gap Số liệu chính xác | Điền (OBESITY).
In 2000, the USA's rate was ___%. = 30
Japan's rate is projected to be ___% in 2030. = 5
#apply 2 rewrite Câu chọn lọc | Viết một câu chọn lọc số liệu.
Mexico: 24, 30, 36, 38, 41. => Mexico's obesity rate rose steadily from 24% to 38% by 2025 and is projected to reach 41% by 2030.
#apply 3 rewrite Câu TA Band 8 | Viết câu so sánh nổi bật.
USA 30→44 (47 in 2030); Japan 3→5. => The USA had by far the highest rate, which is projected to reach almost half the adult population by 2030, nearly ten times the figure for Japan.
#analyze 1 mcq Cao nhất | OBESITY: cao nhất suốt kỳ.
:: +USA || Mexico || UK
#analyze 2 match Nước & xu hướng | Nối (OBESITY).
USA => highest and rising
Japan => lowest and almost stable
Mexico => rising steadily, second highest
UK => rising, third
#analyze 3 mcq Lỗi TA | Bài thiếu điểm nào?
Bài chỉ mô tả 2000–2025, bỏ qua 2030*. :: +Thiếu dữ liệu dự báo → TA bị trừ || Không sao
#evaluate 1 mcq Câu đúng | Chọn câu đúng.
:: +The USA had the highest obesity rate. || The USA had the most high obesity rate.
#evaluate 2 mcq Câu tốt hơn | Chọn câu tốt hơn.
:: +Obesity rates rose in all countries except Japan, where they remained very low. || USA 30, UK 21, Japan 3, Mexico 24 in 2000.
#evaluate 3 mcq Overview Band 8 | OBESITY.
:: +Overall, obesity rates rose in all four countries and are expected to continue climbing, with the USA consistently recording the highest figures and Japan remaining an outlier with exceptionally low levels. || Overall, obesity is a big problem because of fast food.
#create 1 write Intro + Overview: béo phì | 45 | paraphrase; Overview gồm xu hướng + dự báo | OBESITY
Chỉ viết Introduction + Overview (50–70 từ).

The graph below shows adult obesity rates in four countries from 2000 to 2025, with projections for 2030.

Khung gợi ý: *The line graph illustrates ... Overall, ... and this trend is expected to ...*
#create 2 write Change over time: béo phì | 150 | chọn lọc số liệu; dự báo; không nêu nguyên nhân | OBESITY
The graph below shows adult obesity rates in four countries from 2000 to 2025, with projections for 2030.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write Change over time: internet (Band 8) | 150 | highlight key features; khoảng cách giữa các nước; Super Boosters | INTERNET
The graph below shows the percentage of households with internet access in three countries between 2005 and 2025.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1i
#remember 1 mcq Booster cơ bản | Chọn câu đúng.
:: +Video was the most popular, followed by games. || Video was the most popular, following games.
:: +Sales rose, while profits fell. || Sales rose, while profits fall.
#remember 2 mcq Booster: which / reaching | Chọn câu đúng.
:: +Poultry rose to 420g, overtaking red meat. || Poultry rose to 420g, overtake red meat.
:: +Sweets peaked at 260g in 2005, which was the highest level. || Sweets peaked at 260g in 2005, it was the highest.
#remember 3 mcq Booster Mức 3 | Chọn câu Mức 3.
:: +Red meat consumption fell steadily to 410g, a drop of almost 40%, while poultry nearly doubled, eventually overtaking it. || Red meat 650 to 410 and poultry 220 to 420.
#understand 1 mcq Chức năng booster | Chọn chức năng.
*followed by* :: +nêu thứ hạng tiếp theo || nêu nguyên nhân
*a rise of 20%* :: +bổ sung mức thay đổi || kết luận
#understand 2 mcq Đọc MEAT | Câu nào đúng?
:: +Poultry consumption almost doubled. || Fish consumption doubled. || Sweets fell steadily.
#understand 3 mcq Booster nào? | *Vegetables, already the most consumed food, rose further to 1,260g.*
:: +đồng vị ngữ (appositive) || đảo ngữ
#apply 1 gap Booster | Điền một từ.
Red meat fell, ___ poultry rose. = while / whereas
Vegetables were the most consumed, ___ by red meat. = followed
#apply 2 rewrite Dùng booster | Gộp câu bằng booster trong ngoặc.
Sweets rose to 260g in 2005. Then they fell to 240g. (before + V-ing) => Sweets rose to 260g in 2005, before falling slightly to 240g.
Poultry rose to 420g. It overtook red meat. (V-ing) => Poultry rose to 420g, overtaking red meat.
#apply 3 rewrite Body có 3 boosters | Viết 2 câu dùng ≥3 boosters (MEAT: Fish 180→170→160).
Fish => Fish was the only category to decline gradually throughout, falling by 20g to 160g, which made it the least consumed food in 2020 apart from sweets.
#analyze 1 mcq Có booster? | Chọn câu có booster.
:: +Fish fell to 160g, the lowest level. || Fish fell. It was 160g.
#analyze 2 match Booster & loại | Nối.
followed by => xếp hạng
overtaking => V-ing kết quả
a rise of => mức thay đổi
which was => mệnh đề quan hệ bổ sung
#analyze 3 mcq Booster sai số liệu | MEAT: Red meat 650 → 410.
:: +Red meat fell by 240g, a drop of over a third. || Red meat fell by 240g, a drop of over a half.
#evaluate 1 mcq Câu đúng | Chọn câu đúng.
:: +Vegetables rose, reaching 1,260g. || Vegetables rose, reached 1,260g.
#evaluate 2 mcq Câu tốt hơn | Chọn câu tốt hơn.
:: +Poultry nearly doubled to 420g, overtaking red meat for the first time. || Poultry was 220, 330, 420.
#evaluate 3 mcq Câu Band 8 | Chọn câu tốt nhất.
:: +Vegetables, consistently the most consumed food, rose steadily to 1,260g, while red meat followed the opposite trajectory, falling by over a third. || Vegetables are most and red meat less.
#create 1 write Body ngắn dùng 3 boosters | 60 | followed by; while; V-ing kết quả | MEAT
Viết MỘT đoạn thân bài (60–80 từ) về Red meat, Poultry và Fish, dùng ít nhất 3 boosters.

The table below shows average weekly consumption of five foods per person in Country C in 1990, 2005 and 2020.
#create 2 write Bài hoàn chỉnh dùng boosters | 150 | ≥5 boosters; nhóm hạng mục | MEAT
The table below shows average weekly consumption of five foods per person in Country C in 1990, 2005 and 2020.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write Line graph dày số liệu (Band 8) | 150 | ≥7 boosters; xử lý điểm đổi ngôi; không liệt kê | RICE
The graph below shows rice exports from four countries between 2000 and 2020.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1j
#remember 1 mcq Đếm hạng mục | Đếm hạng mục.
MEAT table :: +5 || 3 || 4
BUDGET pie :: +6 || 5
#remember 2 mcq Quy tắc 4 hạng mục | 4 hạng mục nên chia:
:: +2 + 2 theo đặc điểm chung || 1 + 3 ngẫu nhiên
#remember 3 mcq Quy tắc 5+ hạng mục | 5+ hạng mục nên:
:: +nhóm theo xu hướng hoặc mức độ, không mô tả từng cái tách rời || mỗi hạng mục một đoạn
#understand 1 mcq Hạng mục là gì? | STUDY chart có hạng mục:
:: +5 quốc gia || 2 năm
#understand 2 mcq Nhóm STUDY | Nước tăng mạnh nhất:
:: +Canada (gần gấp 3) || USA
#understand 3 mcq Chia STUDY | Cách chia tốt nhất:
:: +Body 1: tăng mạnh (Canada, UK, Japan, Australia); Body 2: USA (lớn nhất, tăng ít) || Body 1: USA, UK; Body 2: Canada; Body 3: Australia, Japan
#apply 1 gap Đếm | Điền số.
STUDY chart có ___ quốc gia. = 5 / five
#apply 2 rewrite Câu chủ đề đoạn nhóm | Viết câu mở đoạn cho nhóm.
Canada, UK, Japan, Australia: tăng mạnh. => Canada, the UK, Japan and Australia all experienced significant growth in international student numbers.
#apply 3 rewrite Câu nhóm Band 8 | Viết câu nhóm + nổi bật.
Canada 270→800; UK 430→730. => Canada saw the most dramatic growth, almost tripling to 800,000 and overtaking the UK, which itself rose considerably to 730,000.
#analyze 1 mcq Hạng mục cao nhất | STUDY 2025.
:: +USA || Canada
#analyze 2 match Nhóm | Nối (MEAT).
Red meat => giảm
Poultry => tăng mạnh
Vegetables => tăng nhẹ, cao nhất
Fish => giảm nhẹ
#analyze 3 mcq Cách nhóm MEAT | Chọn cách tốt nhất.
:: +Body 1: tăng (Poultry, Vegetables, Sweets); Body 2: giảm (Red meat, Fish) || Body 1: 1990; Body 2: 2005; Body 3: 2020
#evaluate 1 mcq Câu đúng | Chọn câu đúng.
:: +Canada had more students in 2025. || Canada have more students in 2025.
#evaluate 2 mcq Câu nhóm tốt hơn | Chọn câu tốt hơn.
:: +Both Australia and Japan saw substantial increases, of 160,000 and 130,000 respectively. || Australia 290 450. Japan 150 280.
#evaluate 3 mcq Overview 5 hạng mục Band 8 | STUDY.
:: +Overall, all five countries attracted more international students over the decade, with the USA remaining the top destination, although Canada recorded by far the fastest growth. || Overall, USA 1,100.
#create 1 write Intro + Overview: 5 hạng mục | 45 | paraphrase; Overview nhóm hạng mục | STUDY
Chỉ viết Introduction + Overview (50–70 từ).

The chart below shows the number of international students in five countries in 2015 and 2025.
#create 2 write 5 hạng mục: thực phẩm | 150 | nhóm theo xu hướng; Overview 2 ý | MEAT
The table below shows average weekly consumption of five foods per person in Country C in 1990, 2005 and 2020.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write 6 hạng mục ngân sách (Band 8) | 150 | nhóm hợp lý; overtake; phân số | BUDGET
The pie charts below show how a city council's spending was divided among different areas in 2010 and 2024.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1k
#remember 1 mcq Dự đoán | Chọn câu đúng.
:: +The figure is expected to rise. || The figure expected to rise.
:: +It is predicted to reach 50%. || It is predicted reaching 50%.
#remember 2 mcq Ngôn ngữ dự đoán | Chọn cụm đúng.
:: +is projected to || is projecting to
:: +is forecast to || forecasts to
#remember 3 mcq Hàng Total | Chọn câu Mức 3.
:: +Total electricity generation rose by almost 30%, driven largely by the expansion of wind and solar. || Total is 285 and 365.
#understand 1 mcq Năm có dấu * | *2030** nghĩa là:
:: +số liệu dự báo || số liệu sai
#understand 2 mcq Đọc ENERGYMIX | Chọn đáp án.
Total tăng: :: +từ 285 lên 365 TWh || từ 285 xuống 95
Nguồn không đổi: :: +Nuclear || Gas
#understand 3 mcq Xử lý Total | Total trong ENERGYMIX nên:
:: +nêu ở Overview hoặc câu riêng, liên hệ với nguồn tăng mạnh || bỏ qua
#apply 1 gap Dự đoán | Điền.
The rate is expected ___ reach 47%. = to
By 2030, it ___ rise to 41%. = will / is expected to
#apply 2 rewrite Câu dự đoán | Viết câu dự đoán.
UK obesity 2030*: 33%. => The UK's obesity rate is projected to reach 33% by 2030.
#apply 3 rewrite Câu Total Band 8 | Viết câu về Total + nguồn chính.
Total 285→365; Wind & Solar 5→120. => Total output grew by 80 TWh, a rise driven almost entirely by wind and solar, which surged from a negligible 5 TWh to 120 TWh.
#analyze 1 mcq Tăng mạnh nhất | ENERGYMIX.
:: +Wind & Solar || Gas || Coal
#analyze 2 match Nguồn & xu hướng | Nối (ENERGYMIX).
Coal => almost halved
Gas => nearly doubled
Nuclear => unchanged
Wind & Solar => rose 24-fold
#analyze 3 mcq Overview có Total | Chọn Overview đúng.
:: +Overall, total generation rose, with renewables replacing coal as the leading source, while nuclear output remained constant. || Overall, coal was 180.
#evaluate 1 mcq Câu đúng | Chọn câu đúng.
:: +Coal is expected to fall. || Coal is expected falling.
#evaluate 2 mcq Câu tốt hơn | Chọn câu tốt hơn.
:: +Gas generation nearly doubled, from 60 to 110 TWh. || Gas 60 and 110.
#evaluate 3 mcq Câu Band 8 | Chọn câu tốt nhất.
:: +Coal, the dominant source in 2010, saw its output almost halve to 95 TWh, being overtaken by both gas and renewables. || Coal fell and others rose.
#create 1 write Intro + Overview có Total | 45 | paraphrase; Overview gồm Total | ENERGYMIX
Chỉ viết Introduction + Overview (50–70 từ).

The table below shows electricity generation by source in Country A in 2010 and 2025.
#create 2 write Bảng có hàng Total | 150 | xử lý Total; nhóm nguồn | ENERGYMIX
The table below shows electricity generation by source in Country A in 2010 and 2025.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write Dự đoán: béo phì (Band 8) | 150 | quá khứ + dự đoán; outlier; Super Boosters | OBESITY
The graph below shows adult obesity rates in four countries from 2000 to 2025, with projections for 2030.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1l
#remember 1 mcq So sánh 2 nhóm | Chọn câu đúng.
:: +More women than men worked in nursing. || More women than men works in nursing.
#remember 2 mcq counterparts | Chọn câu đúng.
:: +Male engineers far outnumbered their female counterparts. || Male engineers far outnumbered their female counterpart.
#remember 3 mcq Bảng nhiều thông tin | Chọn câu Mức 3 (HOUSE).
:: +Villas, the most expensive type at $750,000, were also by far the largest, yet were home to only 5% of residents. || Villa 750,000 and 250 m2 and 5%.
#understand 1 mcq Đọc GENDER | Chọn đáp án.
Nghề nữ chiếm đa số nhất: :: +Nursing || Teaching
Nghề cân bằng nhất: :: +Law || IT
#understand 2 mcq So sánh | GENDER: Engineering.
:: +Men outnumbered women by more than four to one. || Women outnumbered men.
#understand 3 mcq Chia đoạn GENDER | Cách chia tốt nhất:
:: +Body 1: nghề nam chiếm đa số (Engineering, IT, Law); Body 2: nghề nữ chiếm đa số (Nursing, Teaching) || Body 1: Men; Body 2: Women
#apply 1 gap So sánh | Điền.
Women made ___ 89% of nurses. = up
Law was almost evenly split ___ men and women. = between
#apply 2 rewrite Câu 2 items | Viết một câu.
IT: Men 74%, Women 26%. => Men accounted for almost three quarters of IT workers, nearly three times the proportion of women.
#apply 3 rewrite Câu bảng Band 8 | Viết một câu (HOUSE: Apartment 55%, 180,000, 70m²).
Apartment => Apartments were the most common form of housing, accommodating over half of residents, and were also relatively affordable at an average of $180,000 for 70 m².
#analyze 1 mcq Nhóm cao hơn | GENDER, Teaching.
:: +Women || Men
#analyze 2 match Nghề & mô tả | Nối (GENDER).
Nursing => female-dominated
Engineering => male-dominated
Law => almost equal
Teaching => mostly female
#analyze 3 mcq Overview HOUSE | Chọn Overview tốt nhất.
:: +Overall, larger homes were considerably more expensive and less common, with apartments housing the majority of residents. || Overall, villa is expensive.
#evaluate 1 mcq Câu đúng | Chọn câu đúng.
:: +Women were more likely to work in teaching. || Women were more likely work in teaching.
#evaluate 2 mcq Câu tốt hơn | Chọn câu tốt hơn.
:: +In law, the gender split was nearly even, at 52% men and 48% women. || Law 52 48.
#evaluate 3 mcq Câu Band 8 | Chọn câu tốt nhất.
:: +Engineering and nursing were the most gender-imbalanced professions, but in opposite directions, with men and women respectively making up over four-fifths of the workforce. || Engineering men and nursing women.
#create 1 write Intro + Overview: giới tính & nghề | 45 | paraphrase; Overview 2 xu hướng | GENDER
Chỉ viết Introduction + Overview (50–70 từ).

The chart below shows the percentage of men and women working in five jobs in a country in 2024.
#create 2 write 2 items: giới tính & nghề | 150 | so sánh 2 nhóm; counterparts; nhóm nghề | GENDER
The chart below shows the percentage of men and women working in five jobs in a country in 2024.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.
#create 3 write Bảng nhiều thông tin: nhà ở (Band 8) | 150 | liên hệ giá–diện tích–tỷ lệ; Overview; nhóm hợp lý | HOUSE
The table below shows the average price, average size and share of residents for four types of housing in a city in 2024.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.

@t1m
#remember 1 mcq Từ vựng cơ chế | Chọn từ đúng.
Bộ biến tần :: +inverter || panel
Lưới điện quốc gia :: +national grid || house grid
#remember 2 mcq Câu cơ chế | Chọn câu đúng.
:: +The inverter converts DC into AC. || The inverter is convert DC into AC.
:: +Surplus electricity is stored in a battery. || Surplus electricity stores in a battery.
#remember 3 mcq Câu cơ chế Mức 3 | Chọn câu Mức 3.
:: +Any electricity not consumed by the household is stored in a battery, with the remainder fed into the national grid. || Electricity goes to battery and grid.
#understand 1 mcq Đọc SOLARPANEL | Chọn đáp án.
Bước đầu: :: +Panels absorb sunlight || Battery stores power
Bước cuối: :: +Surplus sent to the grid || Inverter converts
#understand 2 mcq Loại sơ đồ | SOLARPANEL là:
:: +how something works (cơ chế) || natural cycle
#understand 3 mcq Chủ động/bị động | Câu nào phù hợp nhất?
:: +Solar cells convert sunlight into electricity. || Sunlight is converted by solar cells into electricity by them.
#apply 1 gap Động từ | Điền.
The panels ___ sunlight. = absorb
The inverter ___ DC into AC. = converts / changes
#apply 2 rewrite Câu nối bước | Gộp thành một câu.
Panels absorb sunlight. Cells convert it into DC. => Once the panels absorb sunlight, the cells convert it into DC electricity.
#apply 3 rewrite Câu Band 8 | Gộp thành một câu.
AC powers appliances. Surplus goes to a battery. The rest goes to the grid. => The AC electricity powers household appliances, with any surplus stored in a battery and the remainder exported to the national grid.
#analyze 1 mcq Thứ tự | Bước nào trước?
:: +DC → AC conversion || powering appliances
#analyze 2 match Bộ phận & chức năng | Nối.
solar panel => absorbs sunlight
inverter => converts DC to AC
battery => stores surplus
meter => records exports to grid
#analyze 3 mcq Overview | Chọn Overview đúng.
:: +Overall, the system converts sunlight into usable electricity in a series of stages, with excess power either stored or exported to the grid. || Overall, there are panels on the roof.
#evaluate 1 mcq Câu đúng | Chọn câu đúng.
:: +Electricity is sent to the grid. || Electricity is send to the grid.
#evaluate 2 mcq Câu tốt hơn | Chọn câu tốt hơn.
:: +The DC electricity is then converted into AC by an inverter. || Then inverter. DC AC.
#evaluate 3 mcq Câu Band 8 | Chọn câu tốt nhất.
:: +Having been converted into alternating current, the electricity is used to power household appliances. || Electricity converted and power.
#create 1 write Intro + Overview: pin mặt trời | 45 | paraphrase; Overview: đầu vào – đầu ra | SOLARPANEL
Chỉ viết Introduction + Overview (50–70 từ).

The diagram below shows how a solar panel system provides electricity for a home.
#create 2 write How it works: pin mặt trời | 150 | chủ động/bị động hợp lý; từ nối; Overview | SOLARPANEL
The diagram below shows how a solar panel system provides electricity for a home.

Summarise the information by selecting and reporting the main features. Write at least 150 words.
#create 3 write Process 8 bước: sô-cô-la (Band 8) | 150 | bị động + chủ động; câu nối Mức 3; Overview đầu–cuối | CHOC
The diagram below shows how chocolate is produced from cocoa beans.

Summarise the information by selecting and reporting the main features. Write at least 150 words.
`, C);
window.KL_ATTACH(C, SNAP);
})();
