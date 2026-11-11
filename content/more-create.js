/* Bổ sung bậc Create cho đủ 3 bài mỗi band. Đề, số liệu tự soạn. */
(function () {
const L = (title, unit, labels, series) => ({ kind: 'line', title, unit, labels, series: series.map(([name, data]) => ({ name, data })) });
const B = (title, unit, labels, series) => ({ kind: 'bar', title, unit, labels, series: series.map(([name, data]) => ({ name, data })) });
const T = (title, headers, rows) => ({ kind: 'table', title, headers, rows });
const PIE = (title, pies) => ({ kind: 'pie', unit: '%', title, pies: pies.map(([t, s]) => ({ title: t, slices: Object.entries(s).map(([name, value]) => ({ name, value })) })) });
const PR = (title, steps) => ({ kind: 'process', title, steps });
const MAP = (title, a, b) => ({ kind: 'map', title, maps: [a, b].map(([t, items]) => ({ title: t, items: items.map(([name, x, y, w, h, color]) => ({ name, x, y, w, h, color })) })) });
const C = {
  CINEMA: L('Cinema attendance in four age groups in a country (% who went at least once a month), 2000–2024', '%', ['2000', '2006', '2012', '2018', '2024'], [['15–24', [62, 58, 51, 40, 33]], ['25–34', [41, 44, 46, 42, 38]], ['35–49', [22, 25, 28, 31, 30]], ['50+', [9, 11, 14, 18, 21]]]),
  BOOKS: B('Sales of books by format in a country (million copies), 2014 and 2024', 'million', ['Printed fiction', 'Printed non-fiction', 'E-books', 'Audiobooks', 'Children\'s books'], [['2014', [120, 95, 40, 6, 80]], ['2024', [98, 101, 52, 38, 104]]]),
  TRANSIT: L('Average daily passengers on three transport systems in a city (thousands), 2010–2025', 'thousand', ['2010', '2013', '2016', '2019', '2022', '2025'], [['Bus', [820, 790, 760, 700, 610, 590]], ['Metro', [0, 0, 150, 420, 560, 780]], ['Ferry', [60, 62, 65, 63, 48, 55]]]),
  FOREST: L('Forest cover in four countries (% of land area), 1990–2030 (projected from 2025)', '%', ['1990', '2000', '2010', '2020', '2025', '2030*'], [['Brazil', [70, 66, 62, 59, 58, 57]], ['Vietnam', [28, 37, 42, 46, 47, 48]], ['Indonesia', [65, 58, 53, 49, 48, 47]], ['Costa Rica', [50, 53, 57, 59, 60, 61]]]),
  SLEEP: B('Average hours of sleep per night by age group and gender, 2023', 'hours', ['13–17', '18–29', '30–44', '45–64', '65+'], [['Male', [7.1, 7.0, 6.8, 6.7, 7.2]], ['Female', [7.4, 7.3, 6.9, 6.6, 6.9]]]),
  WASTE2: T('Household waste per person (kg/year) and recycling rate in five cities, 2024', ['City', 'Waste per person', 'Recycling rate'], [['Seoul', '310', '61%'], ['Tokyo', '290', '20%'], ['Singapore', '360', '18%'], ['Taipei', '280', '55%'], ['Bangkok', '420', '14%']]),
  UNI: T('Students at a university by faculty and gender, 2024', ['Faculty', 'Male', 'Female', 'Total'], [['Engineering', '3,200', '900', '4,100'], ['Business', '2,100', '2,600', '4,700'], ['Medicine', '1,100', '1,700', '2,800'], ['Arts', '600', '1,500', '2,100'], ['Total', '7,000', '6,700', '13,700']]),
  TOURISM: T('International tourist arrivals (millions) and average spending per visitor (USD) in four countries, 2015 and 2024', ['Country', 'Arrivals 2015', 'Arrivals 2024', 'Spending 2015', 'Spending 2024'], [['Japan', '19.7', '36.9', '1,560', '1,640'], ['Vietnam', '7.9', '17.6', '950', '1,120'], ['Thailand', '29.9', '35.5', '1,480', '1,350'], ['South Korea', '13.2', '16.4', '1,210', '1,300']]),
  ENERGYHOME: PIE('Household energy use by purpose in Country D, 2005 and 2025', [['2005', { Heating: 52, 'Hot water': 18, Cooking: 8, Appliances: 14, Lighting: 8 }], ['2025', { Heating: 38, 'Hot water': 16, Cooking: 7, Appliances: 31, Lighting: 8 }]]),
  TRAVELPIE: PIE('Main purpose of international trips made by residents of a country, 2012 and 2024', [['2012', { Holiday: 48, Business: 27, 'Visiting family': 15, Study: 6, Other: 4 }], ['2024', { Holiday: 58, Business: 14, 'Visiting family': 16, Study: 9, Other: 3 }]]),
  CHEESE: PR('How cheese is made', ['Fresh milk is collected from farms and tested', 'Milk is pasteurised at 72°C for 15 seconds', 'Starter bacteria and rennet are added', 'Milk thickens into curd and liquid whey', 'Curd is cut and whey is drained off', 'Curd is salted and pressed into moulds', 'Cheese is aged for 2–24 months', 'Cheese is cut, packaged and sold']),
  SALMON: PR('The life cycle of the salmon', ['Eggs are laid in gravel on the bed of an upper river', 'Eggs hatch into alevins, which stay hidden for 4–6 weeks', 'Young fish (fry) feed in the river for 1–3 years', 'Smolts swim downstream to the sea', 'Adult salmon live in the ocean for 1–4 years', 'Adults return upriver to the place they were born', 'Salmon spawn and the cycle begins again']),
  PAPER: PR('How paper is recycled', ['Used paper is collected from homes and offices', 'Paper is sorted by grade at a recycling centre', 'Paper is mixed with water and chemicals to make pulp', 'Pulp is screened and cleaned to remove plastic and staples', 'Ink is removed in a de-inking process', 'Clean pulp is pressed and dried on heated rollers', 'Paper is wound onto large rolls and sent to manufacturers']),
  PARK: MAP('A city park, 2000 and today', ['2000', [['Lake', 5, 5, 40, 30, '#cfe6fb'], ['Grassland', 50, 5, 45, 40, '#e9f3d6'], ['Tennis courts', 5, 40, 25, 20], ['Café', 35, 40, 12, 12, '#fde7c8'], ['Woodland', 5, 65, 90, 30, '#cfe9c9']]], ['Today', [['Lake (smaller)', 5, 5, 30, 25, '#cfe6fb'], ['Children\'s playground', 38, 5, 15, 15, '#fde7c8'], ['Outdoor gym', 56, 5, 15, 15], ['Grassland', 74, 5, 21, 40, '#e9f3d6'], ['Tennis courts', 5, 40, 25, 20], ['Restaurant', 35, 40, 20, 12, '#fde7c8'], ['Cycle path', 0, 58, 100, 5, '#ddd'], ['Woodland (reduced)', 5, 66, 55, 29, '#cfe9c9'], ['Car park', 64, 66, 31, 29, '#eee']]]),
  STATION: MAP('A town railway station area, 1990 and 2025', ['1990', [['Railway line', 0, 45, 100, 6, '#ddd'], ['Station', 40, 30, 20, 14], ['Goods yard', 65, 25, 30, 18, '#eee'], ['Shops', 5, 25, 30, 18], ['Houses', 5, 60, 40, 30], ['Factory', 55, 60, 40, 30]]], ['2025', [['Railway line', 0, 45, 100, 6, '#ddd'], ['Station (extended)', 35, 28, 30, 16], ['Bus interchange', 68, 25, 27, 18, '#cfe6fb'], ['Shops', 5, 25, 28, 18], ['Houses', 5, 60, 40, 30], ['Apartments', 55, 60, 22, 30], ['Park', 79, 60, 16, 30, '#e9f3d6']]]),
  SPEND: B('Average monthly spending of university students in two countries (USD), 2024', 'USD', ['Rent', 'Food', 'Transport', 'Books', 'Entertainment', 'Phone/Internet'], [['Country A', [520, 310, 80, 45, 120, 35]], ['Country B', [210, 180, 40, 30, 60, 15]]]),
  FUTUREJOBS: L('Employment in three sectors in Country E (millions), 2000–2040 (projected from 2025)', 'million', ['2000', '2010', '2020', '2025', '2030*', '2040*'], [['Manufacturing', [6.2, 5.8, 5.1, 4.8, 4.4, 3.9]], ['Healthcare', [2.1, 2.9, 3.8, 4.4, 5.0, 6.1]], ['Digital services', [0.4, 1.1, 2.3, 3.0, 3.9, 5.2]], ['Total (all sectors)', [31, 33, 35, 36, 36.5, 37]]]),
  DIET: T('Percentage of adults meeting daily recommendations in a country, by age group, 2024', ['Age', '5 portions of fruit/veg', 'Physical activity', '7+ hours sleep'], [['18–29', '21%', '58%', '61%'], ['30–44', '27%', '44%', '49%'], ['45–64', '34%', '39%', '55%'], ['65+', '41%', '28%', '66%']]),
  PHONES2: B('Smartphone ownership by age group in two countries (%), 2024', '%', ['16–24', '25–34', '35–54', '55–64', '65+'], [['Country X', [99, 98, 94, 82, 61]], ['Country Y', [91, 88, 71, 45, 18]]]),
  WINDMILL: PR('How a wind turbine generates electricity', ['Wind turns the three large blades', 'The blades spin a shaft inside the nacelle', 'A gearbox increases the speed of rotation', 'The generator converts movement into electricity', 'A transformer increases the voltage', 'Electricity travels through underground cables to a substation', 'The substation sends power to the national grid']),
};
const SNAP = window.KL_SNAP();
const S1 = 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.';
const S2 = 'Summarise the information by selecting and reporting the main features. Write at least 150 words.';
const E = 'Give reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.';
window.KL_BANK(`
@g1
#create 1 write Câu đơn – ghép – phức về trường học | 40 | 1 câu đơn; 1 câu ghép; 1 câu phức
Viết 4 câu (40–60 từ) về ngôi trường cũ của bạn: ít nhất một câu đơn, một câu ghép (and/but/so) và một câu phức (because/although/when).
#create 2 write Đoạn văn về giao thông thành phố | 90 | cụm danh từ mở rộng; câu phức; không lặp chủ ngữ
Viết đoạn 90–110 từ về giao thông ở thành phố bạn sống, mỗi câu một cấu trúc khác nhau.
#create 3 write Đoạn văn học thuật về thói quen đọc | 110 | danh hoá làm chủ ngữ; câu phức tổng hợp; mệnh đề danh từ
Chủ đề: *The decline in reading for pleasure among teenagers.* Viết đoạn 110–130 từ, mở đầu bằng cụm danh từ học thuật, có ít nhất hai câu phức tổng hợp.

@g2
#create 1 write Mô tả căn phòng | 40 | a/an/the; số ít/số nhiều; hoà hợp
Viết 4–5 câu (40–60 từ) mô tả phòng ngủ của bạn. Dùng *a/an/the* đúng và ít nhất một danh từ không đếm được (*furniture, equipment*).
#create 2 write Đoạn số liệu về sinh viên | 80 | the number of; the proportion of; hoà hợp chủ–vị
Dữ liệu: *Survey of 800 students — 55% live with family, 30% rent a room, 15% live in dormitories. The number of students renting rooms has doubled since 2015.* Viết đoạn 80–100 từ, không lỗi mạo từ/hoà hợp.
#create 3 write Đoạn Task 2 chính xác tuyệt đối | 110 | each/every/neither; danh từ trừu tượng; chủ ngữ phức
Đề: *Is it better for children to grow up in the countryside?* Viết đoạn 110–130 từ, dùng chính xác *each of, neither... nor, the number of, information, evidence*.

@g3
#create 1 write Kể về việc học tiếng Anh | 40 | quá khứ đơn; hiện tại hoàn thành; hiện tại đơn
Viết 4–5 câu (40–60 từ): bạn bắt đầu học tiếng Anh khi nào (quá khứ đơn), đã học được gì đến nay (hiện tại hoàn thành), thường học thế nào (hiện tại đơn).
#create 2 write Mô tả xu hướng giá nhà | 90 | quá khứ đơn; quá khứ hoàn thành; hiện tại hoàn thành
Dữ liệu: *Average house price in a city (USD thousand): 2005 – 80, 2010 – 95, 2015 – 140, 2020 – 210, 2025 – 230.* Viết đoạn 90–110 từ, có *By + năm, ... had ...*.
#create 3 write Đoạn kết hợp thực tế và dự đoán | 110 | thì chính xác; tương lai hoàn thành; is projected to
Dữ liệu: *Population aged 65+ (% of total): 2000 – 6%, 2020 – 12%, 2040 (dự báo) – 21%, 2050 (dự báo) – 26%.* Viết đoạn 110–130 từ, ít nhất hai cách diễn đạt dự đoán.

@g4
#create 1 write Giới thiệu một món ăn quê hương | 40 | who; which; where
Viết 4–5 câu (40–60 từ) giới thiệu một món ăn đặc sản, dùng *who, which, where*.
#create 2 write Giới thiệu một người truyền cảm hứng | 90 | whose; , which; when
Viết đoạn 90–110 từ về một người truyền cảm hứng cho bạn, dùng *whose*, *, which* (thay cả mệnh đề) và *when*.
#create 3 write Đoạn Task 2 với mệnh đề quan hệ nâng cao | 110 | giới từ + which; most of whom; the extent to which
Đề: *Should governments fund the arts?* Viết đoạn 110–130 từ có *the extent to which, by which/through which, most of whom/many of which*.

@g5
#create 1 write Mô tả cách pha trà | 40 | bị động hiện tại; First/Then/Finally
Viết 4–6 câu (40–60 từ) mô tả cách pha một tách trà, dùng câu bị động.
#create 2 write Mô tả quy trình làm bánh mì | 90 | bị động; after being V3; once
Quy trình: *mix flour, water, yeast → knead → leave to rise 1 hour → shape → bake 220°C → cool → slice and pack.* Viết đoạn 90–110 từ.
#create 3 write Đoạn Task 2 khách quan | 110 | It is widely believed that; danh hoá; bị động + modal
Đề: *Should fast food advertising be banned?* Viết đoạn 110–130 từ, ít nhất 2 câu bị động khách quan, 2 cụm danh hoá và 1 câu *should be + V3*.

@g6
#create 1 write So sánh hai mùa | 40 | so sánh hơn; so sánh nhất; as ... as
Viết 4–5 câu (40–60 từ) so sánh mùa hè và mùa đông ở nơi bạn sống.
#create 2 write So sánh giá vé tàu xe | 90 | twice as...as; considerably; that of
Dữ liệu: *Hanoi–HCMC: plane 2,000,000 VND (2h), train 1,100,000 VND (33h), coach 800,000 VND (30h).* Viết đoạn 90–110 từ so sánh giá và thời gian.
#create 3 write So sánh đa chiều (Band 8) | 110 | by far; counterparts; whereas; the + -er, the + -er
Dữ liệu: *Daily social media use (minutes) — Teens: 190 (girls 210, boys 170); Adults 25–44: 95; Adults 45+: 40.* Viết đoạn 110–130 từ.

@g7
#create 1 write Lý do bạn thích một môn học | 40 | because; so; however
Viết 4–5 câu (40–60 từ) về môn học bạn thích, dùng *because, so, however*.
#create 2 write Đoạn lập luận có điều kiện | 90 | điều kiện loại 1 và 2; as a result; in addition
Đề: *What would happen if every family stopped using plastic bags?* Viết đoạn 90–110 từ.
#create 3 write Đoạn lập luận liên kết học thuật | 110 | đảo ngữ điều kiện; Added to this; This is not to say that
Đề: *Should the working week be reduced to four days?* Viết đoạn 110–130 từ, không dùng Firstly/Moreover/Furthermore.

@g8
#create 1 write Nội quy lớp học | 40 | must; should; can
Viết 4–5 câu (40–60 từ) đề xuất nội quy lớp học, dùng *must, should, can*.
#create 2 write Đoạn giải pháp có hedging | 90 | could; might; may well
Đề: *How can schools reduce bullying?* Viết đoạn 90–110 từ đề xuất 2 giải pháp, tránh khẳng định tuyệt đối.
#create 3 write Đoạn đánh giá có modal hoàn thành | 110 | could have; should have; would
Đề: *What lessons can be learnt from the way cities handled rapid growth in the past?* Viết đoạn 110–130 từ dùng modal hoàn thành và hedging Mức 3.

@g9
#create 1 write Câu nhấn mạnh về du lịch | 30 | Never have I; Not only... but also
Viết 3–4 câu (30–50 từ) về một chuyến đi, có 2 câu đảo ngữ.
#create 2 write Đoạn có đảo ngữ đúng chỗ | 90 | Only by; Rarely do; không lạm dụng
Đề: *Why is it important to protect endangered languages?* Viết đoạn 90–110 từ có 2 câu đảo ngữ.
#create 3 write Kết luận mạnh với đảo ngữ | 90 | Only when; So + adj + that; Under no circumstances
Đề: *Governments must act now to reduce air pollution.* Viết đoạn kết luận 90–110 từ với 2–3 cấu trúc đảo ngữ khác nhau.

@g10
#create 1 write Điều bạn tin tưởng | 40 | I believe that; What I like is; I wonder if
Viết 4–5 câu (40–60 từ) về nghề nghiệp mơ ước, dùng ít nhất 3 mệnh đề danh từ.
#create 2 write Mở bài + luận điểm | 90 | It is often claimed that; whether; what
Đề: *Should schools teach financial skills?* Viết mở bài và một câu luận điểm (90–110 từ) với ít nhất 3 mệnh đề danh từ.
#create 3 write Đoạn phân tích với mệnh đề danh từ | 110 | What... is that; Whether...; The fact that
Đề: *Why are fewer young people interested in farming?* Viết đoạn 110–130 từ, mệnh đề danh từ làm chủ ngữ ít nhất 2 lần.

@g11
#create 1 write Kể chuyện đi học muộn | 40 | because; although; when
Viết 4–5 câu (40–60 từ) kể lần bạn đi học muộn, dùng *because, although, when*.
#create 2 write Đoạn nguyên nhân – mục đích | 90 | so that; as; whereas
Đề: *Why do many people choose to study abroad?* Viết đoạn 90–110 từ dùng ít nhất 4 liên từ trạng ngữ khác nhau.
#create 3 write Đoạn nhượng bộ tinh tế | 110 | Much as; However + adj; provided that
Đề: *Should children be allowed to use social media?* Viết đoạn 110–130 từ có 2 cấu trúc nhượng bộ nâng cao và 1 câu *provided that*.

@g12
#create 1 write Mô tả một bức ảnh gia đình | 40 | V-ing; V3 rút gọn
Viết 4–5 câu (40–60 từ) mô tả một bức ảnh gia đình, dùng cụm phân từ (*my father standing..., a cake made by...*).
#create 2 write Đoạn ngắn gọn bằng phân từ | 90 | Having + V3; V-ing; V3
Đề: *The advantages of learning online.* Viết đoạn 90–110 từ có ít nhất 3 cụm phân từ khác loại.
#create 3 write Đoạn Band 8 với phân từ | 110 | Faced with; thereby; with + N + V-ing; Given
Đề: *The impact of automation on factory workers.* Viết đoạn 110–130 từ.

@g13
#create 1 write Liệt kê việc nhà | 40 | liệt kê song song; both...and
Viết 4–5 câu (40–60 từ) về việc nhà bạn làm, có 2 liệt kê song song và một câu *both... and*.
#create 2 write Đoạn liệt kê lợi ích | 90 | not only...but also; liệt kê 3 vế; song song mệnh đề
Đề: *The benefits of volunteering.* Viết đoạn 90–110 từ, mọi liệt kê đều song song.
#create 3 write Đoạn thuyết phục có nhịp | 110 | điệp cấu trúc; whether by...; song song mệnh đề
Đề: *How can cities become more liveable?* Viết đoạn 110–130 từ có một câu điệp cấu trúc 3 vế.

@g14
#create 1 write Sửa đoạn văn ngắn | 30 | không fragment; không comma splice
Sửa và viết lại (30–50 từ): *"Because I like football. I play every weekend, my team is good. Very fun."*
#create 2 write Viết lại đoạn choppy | 80 | gộp câu; liên từ; không lỗi câu
Viết lại (80–100 từ): *"Da Lat is a city. It is in the highlands. It is cool. Many couples go there. They take photos. The flowers are beautiful. The coffee is good."*
#create 3 write Biên tập đoạn nhiều lỗi (Band 8) | 100 | không fragment/run-on; không dangling; câu đa dạng
Biên tập (100–120 từ): *"Being a crowded city, traffic jams happen every day. People are late, they are stressed and they are angry and they honk. A serious problem. The government should do something it is urgent."*

@g15
#create 1 write 4 câu, 4 cấu trúc | 40 | câu đơn; câu ghép; mệnh đề quan hệ; mệnh đề trạng ngữ
Chủ đề: *Your best friend.* Viết 4 câu (40–60 từ), mỗi câu một cấu trúc khác nhau.
#create 2 write Đoạn văn tự bóc tách | 90 | ≥4 cấu trúc khác nhau
Chủ đề: *The importance of sleep for students.* Viết đoạn 90–110 từ có ít nhất 4 cấu trúc khác nhau.
#create 3 write Đoạn Band 8 đủ 6 cấu trúc | 120 | danh hoá; mệnh đề danh từ; phân từ; đảo ngữ; mệnh đề quan hệ có lượng từ; nhượng bộ
Chủ đề: *The rise of electric motorbikes in Vietnam.* Viết đoạn 120–140 từ dùng đủ 6 cấu trúc.

@g16
#create 1 write Tự viết và tự soát | 40 | không lỗi hoà hợp; mạo từ; giới từ
Viết 4–5 câu (40–60 từ) về món ăn yêu thích, sau đó tự soát lỗi hoà hợp, mạo từ và giới từ.
#create 2 write Biên tập đoạn Band 6 | 90 | sửa lỗi; referencing; đa dạng câu
Biên tập (90–110 từ): *"Nowadays, the people is very busy. Firstly, they works a lot. Secondly, they don't have time for cook. Thirdly, they eat fast food. So the health is bad."*
#create 3 write Tự viết – tự biên tập (Band 8) | 110 | 0 lỗi; nominalisation; referencing
Đề: *Should homework be banned in primary schools?* Viết đoạn 110–130 từ, rồi tự soát theo check-list Grammar Nazi trước khi gửi chấm.

@t1a
#create 1 write Intro + Overview có hướng dẫn | 45 | paraphrase; Overview 2 ý | CINEMA
Chỉ viết Introduction + Overview (50–70 từ).

The graph below shows the percentage of people in four age groups who went to the cinema at least once a month between 2000 and 2024.

Khung gợi ý: *The line graph illustrates ... Overall, while ..., ...*
#create 2 write Intro + Overview: bán sách | 50 | paraphrase sâu; Overview không số liệu | BOOKS
Viết Introduction + Overview (60–80 từ).

The chart below shows sales of books by format in a country in 2014 and 2024.
#create 3 write Bài hoàn chỉnh: rạp chiếu phim (Band 8) | 150 | Overview 2 ý; điểm giao cắt; nhóm tuổi | CINEMA
The graph below shows the percentage of people in four age groups who went to the cinema at least once a month between 2000 and 2024.

${S1}

@t1b
#create 1 write Intro + Overview: hành khách giao thông | 45 | paraphrase; xu hướng chính | TRANSIT
Chỉ viết Introduction + Overview (50–70 từ).

The graph below shows the average number of daily passengers on three transport systems in a city between 2010 and 2025.

Khung gợi ý: *The line graph compares ... Overall, ... whereas ...*
#create 2 write Line graph: hành khách giao thông | 150 | động từ + danh từ xu hướng; mốc xuất hiện Metro | TRANSIT
The graph below shows the average number of daily passengers on three transport systems in a city between 2010 and 2025.

${S1}
#create 3 write Line graph: rạp chiếu phim (Band 8) | 150 | xu hướng đối lập; điểm giao cắt; Super Boosters | CINEMA
The graph below shows the percentage of people in four age groups who went to the cinema at least once a month between 2000 and 2024.

${S1}

@t1c
#create 1 write Intro + Overview: giấc ngủ | 45 | paraphrase; Overview khác biệt chính | SLEEP
Chỉ viết Introduction + Overview (50–70 từ).

The chart below shows the average hours of sleep per night by age group and gender in 2023.

Khung gợi ý: *The bar chart compares ... Overall, ...*
#create 3 write No change: chi tiêu sinh viên (Band 8) | 150 | so sánh gấp; respectively; nhóm hạng mục | SPEND
The chart below shows the average monthly spending of university students in two countries in 2024.

${S1}

@t1g
#create 1 write Intro + Overview: du lịch quốc tế | 45 | paraphrase; Overview cả lượng khách và chi tiêu | TOURISM
Chỉ viết Introduction + Overview (50–70 từ).

The table below shows international tourist arrivals and average spending per visitor in four countries in 2015 and 2024.
#create 2 write Mixed: du lịch quốc tế | 150 | liên hệ hai chỉ số; chuyển đoạn | TOURISM
The table below shows international tourist arrivals and average spending per visitor in four countries in 2015 and 2024.

${S1}
#create 3 write Mixed: rác thải & tái chế (Band 8) | 150 | liên hệ lượng rác và tỷ lệ tái chế; nhóm thành phố | WASTE2
The table below shows the amount of household waste produced per person and the recycling rate in five Asian cities in 2024.

${S1}

@t1d
#create 1 write Intro + Overview: năng lượng gia đình | 45 | paraphrase; thay đổi lớn nhất | ENERGYHOME
Chỉ viết Introduction + Overview (50–70 từ).

The pie charts below show how households in Country D used energy in 2005 and 2025.
#create 2 write Pie 2 mốc: năng lượng gia đình | 150 | phân số; chia đoạn theo xu hướng | ENERGYHOME
The pie charts below show how households in Country D used energy in 2005 and 2025.

${S1}
#create 3 write Pie 2 mốc: mục đích chuyến đi (Band 8) | 150 | phân số chính xác; overtake; nhóm hạng mục | TRAVELPIE
The pie charts below show the main purposes of international trips made by residents of a country in 2012 and 2024.

${S1}

@t1e
#create 1 write Intro + Overview: làm phô mai | 45 | paraphrase; số bước, đầu–cuối | CHEESE
Chỉ viết Introduction + Overview (50–70 từ).

The diagram below shows how cheese is made.
#create 3 write Natural process: vòng đời cá hồi (Band 8) | 150 | chủ động cho tự nhiên; chu trình; câu nối Mức 3 | SALMON
The diagram below shows the life cycle of the salmon.

${S2}

@t1f
#create 1 write Intro + Overview: công viên | 45 | paraphrase; xu hướng chung | PARK
Chỉ viết Introduction + Overview (50–70 từ).

The maps below show a city park in 2000 and today.
#create 2 write Map: công viên | 150 | bị động; vị trí; nhóm thay đổi | PARK
The maps below show a city park in 2000 and today.

${S1}
#create 3 write Map: khu ga tàu (Band 8) | 150 | xu hướng chuyển đổi; give way to; nhóm theo khu vực | STATION
The maps below show the area around a town railway station in 1990 and 2025.

${S1}

@t1h
#create 1 write Intro + Overview: rừng che phủ | 45 | paraphrase; xu hướng + dự báo | FOREST
Chỉ viết Introduction + Overview (50–70 từ).

The graph below shows forest cover in four countries from 1990 to 2025, with projections for 2030.
#create 3 write Change over time: rừng che phủ (Band 8) | 150 | chọn lọc số liệu; hai xu hướng đối lập; dự báo | FOREST
The graph below shows forest cover in four countries from 1990 to 2025, with projections for 2030.

${S1}

@t1i
#create 1 write Body ngắn dùng 3 boosters | 60 | followed by; while; V-ing kết quả | BOOKS
Viết MỘT đoạn thân bài (60–80 từ) về Printed fiction, E-books và Audiobooks, dùng ít nhất 3 boosters.

The chart below shows sales of books by format in a country in 2014 and 2024.
#create 2 write Bài dùng boosters: bán sách | 150 | ≥5 boosters; nhóm hạng mục | BOOKS
The chart below shows sales of books by format in a country in 2014 and 2024.

${S1}
#create 3 write Bài dùng 7 boosters: du lịch (Band 8) | 150 | ≥7 boosters; liên hệ hai chỉ số | TOURISM
The table below shows international tourist arrivals and average spending per visitor in four countries in 2015 and 2024.

${S1}

@t1j
#create 1 write Intro + Overview: 6 khoản chi | 45 | paraphrase; Overview nhóm hạng mục | SPEND
Chỉ viết Introduction + Overview (50–70 từ).

The chart below shows the average monthly spending of university students in two countries in 2024.
#create 2 write 6 hạng mục: chi tiêu sinh viên | 150 | nhóm hạng mục; so sánh hai nước | SPEND
The chart below shows the average monthly spending of university students in two countries in 2024.

${S1}
#create 3 write 5 hạng mục × 2 nước: điện thoại (Band 8) | 150 | nhóm tuổi theo khoảng cách; so sánh gấp | PHONES2
The chart below shows smartphone ownership by age group in two countries in 2024.

${S1}

@t1k
#create 1 write Intro + Overview có dự báo & Total | 45 | paraphrase; Overview gồm Total | FUTUREJOBS
Chỉ viết Introduction + Overview (50–70 từ).

The graph below shows employment in three sectors and in total in Country E from 2000 to 2025, with projections to 2040.
#create 3 write Dự báo + Total: việc làm (Band 8) | 150 | quá khứ + dự đoán; Total; điểm giao cắt | FUTUREJOBS
The graph below shows employment in three sectors and in total in Country E from 2000 to 2025, with projections to 2040.

${S1}

@t1l
#create 1 write Intro + Overview: bảng sinh viên | 45 | paraphrase; Overview 2 ý | UNI
Chỉ viết Introduction + Overview (50–70 từ).

The table below shows the number of male and female students in four faculties of a university in 2024.

@t1m
#create 1 write Intro + Overview: tuabin gió | 45 | paraphrase; đầu vào – đầu ra | WINDMILL
Chỉ viết Introduction + Overview (50–70 từ).

The diagram below shows how a wind turbine generates electricity.
#create 2 write How it works: tuabin gió | 150 | chủ động/bị động hợp lý; từ nối | WINDMILL
The diagram below shows how a wind turbine generates electricity.

${S2}
#create 3 write Process: tái chế giấy (Band 8) | 150 | bị động + rút gọn; Overview đầu–cuối; câu nối Mức 3 | PAPER
The diagram below shows how paper is recycled.

${S2}

@t2a
#create 1 write Phân tích đề + mở bài có hướng dẫn | 60 | topic/task; paraphrase; thesis
Đề: *Some people believe that every child should learn to play a musical instrument. Do you agree?*

Ghi topic, task, scope rồi viết Introduction (2 câu).

Khung gợi ý: *It is sometimes argued that ... I (partly) agree because ...*
#create 2 write Introduction cho 4 đề | 100 | paraphrase; thesis đúng dạng
Viết Introduction (2 câu mỗi đề):
1. *Should old buildings be protected even if this stops a city from growing?*
2. *More people are working from cafés and shared offices. Positive or negative?*
3. *Why do many people not exercise enough? What can be done?*
4. *Some think news should be free; others think people should pay for it. Discuss both views.*
#create 3 write Phân tích đề lắt léo (Band 8) | 120 | scope; thesis tinh tế; tránh bẫy
Đề: *The best way to improve road safety is to give much harsher punishments to dangerous drivers. To what extent do you agree?*

Viết Introduction + dàn ý 2 thân bài (120–150 từ), chỉ rõ cách xử lý "the best way".

@t2b
#create 1 write Đoạn 1 ý có hướng dẫn | 60 | topic sentence; because; for example
Đề: *Should students wear school uniforms?* Viết MỘT đoạn 1 ý (60–80 từ).

Khung gợi ý: *One clear benefit of ... is that ... This is because ... For example, ...*
#create 3 write Đoạn 2 ý chặt chẽ (Band 8) | 130 | 2 ý ngang hàng; chain of consequences; ví dụ khái quát
Đề: *What are the benefits of cities investing in cycle lanes?* Viết MỘT đoạn 2 ý (130–150 từ).

@t2c
#create 1 write Opinion có hướng dẫn | 110 | thesis rõ; topic sentence; ví dụ
Đề: *Some people think that students should study only subjects they enjoy. To what extent do you agree?*

Viết Introduction + MỘT đoạn thân bài (110–140 từ).

Khung gợi ý: *It is sometimes suggested that ... I disagree because ... The main reason is that ...*
#create 3 write Opinion "the only way" (Band 8) | 250 | thesis No có nhượng bộ; giải pháp thay thế; hedging
Some people say that the only way to reduce plastic pollution is to ban single-use plastics completely. To what extent do you agree or disagree?

${E}

@t2d
#create 1 write Discussion có hướng dẫn | 110 | Intro nêu 2 phía; một đoạn thân bài
Đề: *Some think young people should save money for the future; others think they should enjoy it now. Discuss both views and give your opinion.*

Viết Introduction + Body 1 (110–140 từ).
#create 2 write Discussion: thành phố hay nông thôn | 250 | cân bằng 2 phía; ý kiến rõ
Some people prefer to raise children in big cities, while others believe the countryside is a better environment. Discuss both views and give your own opinion.

${E}
#create 3 write Advantages outweigh (Band 8) | 250 | cân nhắc trọng số; thesis tinh tế
More and more people are using artificial intelligence tools at work. Do the advantages of this development outweigh the disadvantages?

${E}

@t2e
#create 1 write Problem–Solution có hướng dẫn | 110 | Intro; 1 đoạn vấn đề + giải pháp
Đề: *Many young people spend too much time on their phones. What problems does this cause and what can be done?*

Viết Introduction + MỘT đoạn thân bài (110–140 từ).
#create 2 write Problem–Solution: ngập lụt đô thị | 250 | vấn đề cụ thể; giải pháp khớp
Many cities suffer from flooding during the rainy season. What problems does this cause, and what measures could be taken?

${E}
#create 3 write Problem–Solution 2 phần (Band 8) | 250 | vấn đề sâu; giải pháp khả thi; chuỗi hệ quả
In many countries, there is a shortage of teachers. What are the consequences of this problem, and how could it be solved?

${E}

@t2f
#create 1 write Đoạn chú trọng collocation | 60 | collocation; không lặp từ
Đề: *Why do people keep pets?* Viết đoạn 60–80 từ, dùng 3 collocation và không lặp danh từ chính quá 2 lần.
#create 2 write Đoạn CC – LR – GRA | 120 | referencing; collocation; câu phức
Đề: *Should museums be free for everyone?* Viết MỘT đoạn thân bài (120–140 từ).
#create 3 write Bài hoàn chỉnh chú trọng LR & GRA (Band 8) | 250 | collocation chính xác; câu đa dạng; referencing
Some people believe that technology has made people less creative. To what extent do you agree or disagree?

${E}

@t2g
#create 1 write Đoạn counter có hướng dẫn | 60 | It is true that; However; khẳng định lại
Đề: *Should junk food be banned in schools?* (bạn chọn: Yes) Viết đoạn counter-argument (60–80 từ).
#create 2 write Bài Opinion có counter-argument | 250 | đoạn counter đầy đủ; phản bác trực tiếp
Some people believe that university students should pay the full cost of their studies. To what extent do you agree or disagree?

${E}
#create 3 write Bài Opinion có counter Band 8 | 250 | nhượng bộ công bằng; phản bác có bằng chứng; liên kết học thuật
Some people think that zoos have no place in the modern world. To what extent do you agree or disagree?

${E}

@t2h
#create 1 write Viết lại đoạn đầy no-no | 60 | 0 viết tắt; 0 etc.; 0 câu hỏi tu từ
Viết lại (60–80 từ): *"Kids nowadays don't wanna go outside!!! They just stay home, play games, watch YouTube, etc. Isn't that sad?"*
#create 2 write Đoạn thân bài không no-no | 120 | giọng học thuật; ví dụ khái quát
Đề: *Should the government limit the number of cars each family can own?* Viết MỘT đoạn thân bài (120–140 từ) không vi phạm no-no.
#create 3 write Bài hoàn chỉnh 0 no-no (Band 8) | 250 | 0 no-no; kết luận không thêm ý mới
Some people think that it is a waste of time for students to study history. To what extent do you agree or disagree?

${E}

@t2i
#create 1 write Should có hướng dẫn | 110 | thesis Should; một đoạn lý do
Đề: *Should public transport be free for students?*

Viết Introduction + MỘT đoạn thân bài (110–140 từ).
#create 3 write Each is better for a group (Band 8) | 250 | thesis chia nhóm; so sánh trực tiếp
Some people think it is better to work for a large company, while others prefer a small business. Which do you think is better?

${E}

@t2j
#create 1 write Positive/negative có hướng dẫn | 110 | thesis rõ; một đoạn lý do
Đề: *More people are buying second-hand clothes. Is this a positive or negative development?*

Viết Introduction + MỘT đoạn thân bài (110–140 từ).
#create 2 write Positive or negative | 250 | thesis rõ; nhượng bộ; kết luận khớp
In many countries, more people are moving from cities to small towns. Is this a positive or negative development?

${E}
#create 3 write Positive/negative chia nhóm (Band 8) | 250 | thesis chia nhóm; lập luận cân bằng; hedging
Many children now learn to use computers before they learn to read. Is this a positive or negative development?

${E}

@t2k
#create 1 write Causes có hướng dẫn | 110 | Intro; một đoạn nguyên nhân
Đề: *Fewer young people are choosing to become teachers. Why? What effects does this have?*

Viết Introduction + đoạn Nguyên nhân (110–140 từ).
#create 2 write Causes – Effects | 250 | nguyên nhân cụ thể; hệ quả; ví dụ
In many cities, the number of small family-run shops is falling. What are the causes of this, and what effects does it have on communities?

${E}
#create 3 write Causes – Solutions (Band 8) | 250 | nguyên nhân sâu xa; giải pháp khớp
Many people today feel lonely despite being more connected than ever. What are the causes of this, and what can be done?

${E}

@t2l
#create 1 write Tự soát theo check-list | 110 | Intro có thesis; topic sentence; không no-no
Đề: *Should children be taught to grow their own food at school?*

Viết Introduction + MỘT đoạn thân bài (110–140 từ), rồi tự đánh dấu theo check-list.
#create 2 write Bài hoàn chỉnh + check-list | 250 | đủ 4 phần; thesis khớp kết luận
Some people think that the government should spend more money on public libraries, while others think the money is better spent on the internet. Discuss both views and give your opinion.

${E}
#create 3 write Bài tự chấm check-list (Band 8) | 250 | đủ check-list TR/CC/LR/GRA; phát triển sâu
Some people believe that international sporting events, such as the Olympics, bring more benefits than costs to the host country. To what extent do you agree or disagree?

${E}

@t2m
#create 1 write "The best" có hướng dẫn | 110 | thesis No; một đoạn thừa nhận
Đề: *The best way to make friends is through social media.*

Viết Introduction + Body 1 (110–140 từ).
#create 2 write "The most important" | 250 | thesis rõ; so sánh với yếu tố khác
Some people say that the most important factor for success at university is intelligence. To what extent do you agree or disagree?

${E}
#create 3 write "The best way" hướng Yes (Band 8) | 250 | thesis Yes; chứng minh vượt trội so với cách khác
Some people say that the best way to learn about a country's culture is to live with a local family. To what extent do you agree or disagree?

${E}
`, C);
window.KL_ATTACH(C, SNAP);
})();
