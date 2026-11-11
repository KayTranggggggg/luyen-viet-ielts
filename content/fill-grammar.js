/* Lấp đủ mọi ô Bloom × độ khó cho Chặng 1 (Grammar). Ví dụ tự soạn, khung theo khoá học. */
(function () {
const U = id => window.UNITS.find(u => u.id === id);
const add = (id, ex) => U(id).exercises.push(ex);
const M = (id, bloom, lv, title, instr, items) => add(id, { bloom, lv, type: 'mcq', title, instr, items: items.map(([q, options, a, ex], i) => { const k = [...(title + q + i)].reduce((s, c) => s + c.charCodeAt(0), 0) % options.length; const o = options.slice(k).concat(options.slice(0, k)); return { q, options: o, a: (a - k + o.length) % o.length, ex }; }) });
const G = (id, bloom, lv, title, instr, items) => add(id, { bloom, lv, type: 'gap', title, instr, items: items.map(([q, a]) => ({ q, a: [].concat(a) })) });
const R = (id, bloom, lv, title, instr, items) => add(id, { bloom, lv, type: 'rewrite', title, instr, items: items.map(([q, a]) => ({ q, a: [].concat(a) })) });
const X = (id, bloom, lv, title, instr, options, pairs, ex) => add(id, { bloom, lv, type: 'match', title, instr, options, pairs: pairs.map(([l, r]) => ({ l, r })), ex });
const W = (id, lv, title, prompt, minWords, focus) => add(id, { bloom: 'create', lv, type: 'write', kind: 'grammar', title, prompt, minWords, focus });

/* ===== g1 Cấu trúc câu & loại câu ===== */
M('g1', 'remember', 2, 'Nhận diện cụm danh từ mở rộng', 'Chọn chủ ngữ là cụm danh từ mở rộng (Mức 2).', [
  ['', ['People complain.', 'The excessive use of plastic packaging in supermarkets worries many shoppers.', 'It is bad.'], 1],
  ['', ['Noise annoys residents.', 'The constant noise from construction sites near schools disrupts lessons.', 'They are loud.'], 1],
  ['', ['Rents rose.', 'The rapid rise in rents for small apartments has pushed students out of the city centre.', 'Students left.'], 1]]);
M('g1', 'remember', 3, 'Nhận diện câu Mức 3', 'Chọn câu có cụm danh từ học thuật (danh hoá + bổ ngữ) ở Mức 3.', [
  ['', ['Cheap phones are everywhere, so people work from home.', 'The increasing affordability of mobile devices has facilitated remote working.', 'Phones are cheap and people like working at home.'], 1],
  ['', ['The widespread adoption of contactless payment has reduced the use of cash in many cities.', 'People pay with cards a lot now.', 'Cards are popular. Cash is less popular.'], 0]]);
M('g1', 'understand', 2, 'Câu ghép hay câu phức?', 'Chọn loại câu đúng.', [
  ['*The old cinema was demolished, and a car park was built in its place.*', ['Câu ghép', 'Câu phức', 'Câu đơn'], 0],
  ['*Although the town has grown, its centre has kept its traditional character.*', ['Câu ghép', 'Câu phức', 'Câu đơn'], 1],
  ['*Prices rose sharply in 2020, but demand remained stable, which surprised economists.*', ['Câu phức tổng hợp (compound-complex)', 'Câu đơn', 'Câu ghép'], 0]]);
M('g1', 'understand', 3, 'Hiểu câu phức đa mệnh đề', 'Câu: *While I agree that homes in historic districts should look uniform, the style of houses elsewhere should reflect the owner\'s taste.*', [
  ['Mệnh đề chính là:', ['the style of houses elsewhere should reflect the owner\'s taste', 'While I agree...', 'that homes in historic districts should look uniform'], 0],
  ['*that homes ... uniform* là loại mệnh đề gì?', ['Mệnh đề danh từ (tân ngữ của agree)', 'Mệnh đề tính từ', 'Mệnh đề trạng ngữ'], 0],
  ['*While* ở đây mang nghĩa:', ['nhượng bộ (mặc dù)', 'thời gian (trong khi)', 'nguyên nhân'], 0]]);
G('g1', 'apply', 1, 'Chia động từ cơ bản', 'Chia động từ trong ngoặc ở hiện tại đơn.', [
  ['Many students ___ (live) far from campus.', 'live'], ['Online learning ___ (save) time.', 'saves'], ['My city ___ (have) two universities.', 'has']]);
M('g1', 'analyze', 1, 'Tìm động từ chính', 'Chọn động từ chính của câu.', [
  ['*Young people in big cities often rent small flats.*', ['rent', 'big', 'often'], 0],
  ['*The price of fresh vegetables rose last year.*', ['rose', 'price', 'fresh'], 0],
  ['*Many workers now travel to work by bus.*', ['travel', 'work', 'bus'], 0]]);
M('g1', 'evaluate', 1, 'Câu nào đúng?', 'Chọn câu đúng cấu trúc.', [
  ['', ['Many people use public transport every day.', 'Many people using public transport every day.', 'Many people public transport every day.'], 0],
  ['', ['The quality of the roads are poor.', 'The quality of the roads is poor.'], 1]]);
M('g1', 'evaluate', 3, 'Câu nào đạt Mức 3?', 'Chọn câu mở bài học thuật nhất.', [
  ['', ['Many people use cars, and cars cause pollution, so cities are dirty.', 'The growing reliance on private cars in rapidly expanding cities has become a major source of air pollution.', 'Cars are a big problem in cities today.'], 1]]);
W('g1', 3, 'Đoạn văn với cụm danh từ Mức 3', 'Chủ đề: *The rise of food delivery apps.*\n\nViết đoạn 80–100 từ, mở đầu bằng một **cụm danh từ học thuật** làm chủ ngữ (ví dụ *The rapid growth of...*), dùng ít nhất một câu phức và một câu phức tổng hợp.', 70, ['cụm danh từ học thuật', 'câu phức', 'câu phức tổng hợp']);

/* ===== g3 Thì ===== */
M('g3', 'remember', 2, 'Hiện tại hoàn thành trong Task 2', 'Chọn câu dùng thì đúng.', [
  ['', ['Over the past decade, online shopping has grown rapidly.', 'Over the past decade, online shopping grows rapidly.'], 0],
  ['', ['In recent years, many cities have introduced bike lanes.', 'In recent years, many cities introduce bike lanes.'], 0]]);
M('g3', 'remember', 3, 'Tương lai hoàn thành', 'Chọn câu đúng.', [
  ['', ['By 2030, the city will have completed its new metro line.', 'By 2030, the city will complete its new metro line yesterday.', 'By 2030, the city has completed its new metro line.'], 0],
  ['', ['Experts predict that by 2040 most cars will have become electric.', 'Experts predict that by 2040 most cars became electric.'], 0]]);
M('g3', 'understand', 2, 'Vì sao dùng hiện tại hoàn thành?', 'Chọn lý do.', [
  ['*Smartphones have changed the way people read news.*', ['Thay đổi bắt đầu trong quá khứ, còn ảnh hưởng đến hiện tại', 'Hành động đã kết thúc ở mốc rõ ràng', 'Dự đoán'], 0],
  ['*In 2010, sales fell to 20,000.*', ['Mốc quá khứ xác định → quá khứ đơn', 'Kéo dài đến nay'], 0]]);
M('g3', 'understand', 3, 'Nghĩa của tương lai hoàn thành', 'Câu: *By 2035, half of all new cars will have been electric for several years.*', [
  ['Câu này nói rằng:', ['Trước năm 2035, xe điện đã chiếm một nửa xe mới từ vài năm', 'Năm 2035 xe điện mới bắt đầu chiếm một nửa', 'Xe điện sẽ biến mất năm 2035'], 0]]);
G('g3', 'apply', 1, 'Quá khứ đơn cho Task 1', 'Chia động từ ở quá khứ đơn.', [
  ['In 2005, car sales ___ (rise) to 2 million.', 'rose'], ['The figure ___ (fall) slightly in 2010.', 'fell'], ['Exports ___ (reach) a peak in 2015.', 'reached']]);
M('g3', 'analyze', 1, 'Dấu hiệu thời gian', 'Chọn thì phù hợp với dấu hiệu.', [
  ['*in 1998*', ['quá khứ đơn', 'hiện tại hoàn thành', 'tương lai'], 0], ['*since 2015*', ['hiện tại hoàn thành', 'quá khứ đơn'], 0], ['*in 2040 (projected)*', ['is expected to + V', 'quá khứ đơn'], 0]]);
M('g3', 'analyze', 3, 'Lỗi thì tinh vi', 'Chọn câu có lỗi thì.', [
  ['', ['Between 2000 and 2010, the figure has doubled.', 'Since 2000, the figure has doubled.', 'Between 2000 and 2010, the figure doubled.'], 0, 'Khoảng thời gian đã kết thúc trong quá khứ → quá khứ đơn.'],
  ['', ['By 2010, prices had risen by 40%.', 'By 2010, prices have risen by 40%.'], 1]]);
M('g3', 'evaluate', 1, 'Chọn câu đúng thì', 'Biểu đồ 1990–2000.', [
  ['', ['Coal use fell from 60% to 40%.', 'Coal use falls from 60% to 40%.', 'Coal use has fallen from 60% to 40% between 1990 and 2000.'], 0]]);
W('g3', 3, 'Đoạn văn kết hợp 4 thì', 'Chủ đề: *Electric scooters in Asian cities.*\n\nViết đoạn 90–110 từ: một câu quá khứ đơn (mốc cụ thể), một câu hiện tại hoàn thành (xu hướng đến nay), một câu hiện tại đơn (nhận định), và một câu **tương lai hoàn thành** hoặc dự đoán bằng *is expected to*.', 80, ['quá khứ đơn', 'hiện tại hoàn thành', 'tương lai hoàn thành', 'dự đoán']);

/* ===== g8 Modal ===== */
M('g8', 'remember', 2, 'Modal giảm nhẹ', 'Chọn câu đã được hedging.', [
  ['', ['Fast food causes obesity.', 'Fast food may contribute to obesity.'], 1], ['', ['Video games can make some children more aggressive.', 'Video games make children violent.'], 0]]);
M('g8', 'remember', 3, 'Hedging Mức 3', 'Chọn câu Mức 3.', [
  ['', ['Online learning is bad.', 'Online learning might be bad.', 'Students learning entirely online could be far more likely to feel isolated if left without regular contact with teachers.'], 2]]);
M('g8', 'understand', 2, 'Sắc thái modal', 'Chọn nghĩa đúng.', [
  ['*Governments should invest in rail.*', ['khuyên / đề xuất', 'bắt buộc theo luật', 'khả năng'], 0],
  ['*This might reduce traffic.*', ['khả năng thấp, không chắc chắn', 'chắc chắn'], 0], ['*Drivers must wear seatbelts.*', ['bắt buộc', 'gợi ý'], 0]]);
M('g8', 'understand', 3, 'Modal hoàn thành', 'Chọn nghĩa đúng.', [
  ['*The accident could have been avoided.*', ['Có thể đã tránh được nhưng đã không tránh', 'Đã tránh được', 'Sẽ tránh được'], 0],
  ['*The city should have built more parks.*', ['Lẽ ra nên xây nhưng đã không xây', 'Đã xây đủ'], 0]]);
G('g8', 'apply', 1, 'Modal + V nguyên mẫu', 'Điền dạng đúng của động từ.', [
  ['Schools should ___ (teach) cooking.', 'teach'], ['This policy can ___ (help) poor families.', 'help'], ['Plastic bags must ___ (be) banned.', 'be']]);
M('g8', 'analyze', 1, 'Tìm lỗi modal', 'Chọn câu SAI.', [
  ['', ['The government should invests more.', 'The government should invest more.'], 0], ['', ['People can to save money.', 'People can save money.'], 0]]);
M('g8', 'analyze', 3, 'Mức độ chắc chắn', 'Xếp từ chắc chắn nhất → ít nhất: chọn thứ tự đúng.', [
  ['', ['will → is likely to → may → might', 'might → will → may → is likely to', 'may → will → might → is likely to'], 0]]);
M('g8', 'evaluate', 1, 'Câu giải pháp nào hợp lý?', 'Chọn câu dùng modal phù hợp.', [
  ['', ['The government should build more bus lanes.', 'The government should building more bus lanes.', 'The government must to build more bus lanes.'], 0]]);
W('g8', 3, 'Đoạn lập luận có hedging Mức 3', 'Đề: *Social media is the main cause of unhappiness among teenagers.*\n\nViết đoạn 100–120 từ phản bác nhận định trên, dùng ít nhất 3 kỹ thuật hedging Mức 3 (*could be far more likely to, tend to, if left unchecked, in many cases...*), tránh khẳng định tuyệt đối.', 90, ['hedging Mức 3', 'không khẳng định tuyệt đối', 'modal + bị động/điều kiện']);

/* ===== g6 So sánh ===== */
M('g6', 'remember', 2, 'Trạng từ mức độ', 'Chọn câu dùng đúng trạng từ nhấn mạnh.', [
  ['', ['The figure for girls was significantly lower, at 12%.', 'The figure for girls was significant lower, at 12%.'], 0], ['', ['Sales were slightly higher in 2020.', 'Sales were slight higher in 2020.'], 0]]);
M('g6', 'remember', 3, 'So sánh kép', 'Chọn câu đúng.', [
  ['', ['The more people drive, the worse the air becomes.', 'The more people drive, the more worse the air becomes.', 'More people drive, worse the air.'], 0]]);
M('g6', 'understand', 2, 'Hiểu so sánh gấp', 'Chọn nghĩa đúng.', [
  ['*Exports were three times as high as imports.*', ['xuất khẩu gấp 3 nhập khẩu', 'nhập khẩu gấp 3 xuất khẩu'], 0], ['*The figure doubled.*', ['tăng gấp đôi', 'giảm một nửa'], 0]]);
M('g6', 'understand', 3, '"pale in comparison with"', 'Câu: *The benefits of recycling pale in comparison with those of reducing consumption.*', [
  ['Nghĩa là:', ['Lợi ích tái chế nhỏ hơn nhiều so với giảm tiêu dùng', 'Tái chế quan trọng hơn', 'Hai cái như nhau'], 0], ['*those* thay cho:', ['the benefits', 'recycling', 'consumption'], 0]]);
G('g6', 'apply', 1, 'So sánh cơ bản', 'Điền dạng so sánh.', [
  ['Bikes are ___ (cheap) than cars.', 'cheaper'], ['This is the ___ (expensive) city in Asia.', 'most expensive'], ['My job is as ___ (interesting) as yours.', 'interesting']]);
M('g6', 'analyze', 1, 'So sánh nào đúng với số liệu?', 'A = 40%, B = 20%.', [
  ['', ['A was twice as high as B.', 'B was twice as high as A.', 'A was as high as B.'], 0], ['', ['B was half that of A.', 'B was double that of A.'], 0]]);
M('g6', 'evaluate', 1, 'Chọn câu so sánh đúng', '', [
  ['', ['Trains are more faster than buses.', 'Trains are faster than buses.'], 1], ['', ['Tokyo is the largest city in Japan.', 'Tokyo is the most large city in Japan.'], 0]]);
M('g6', 'evaluate', 3, 'Câu so sánh nào Band 8?', 'Chọn câu so sánh học thuật nhất.', [
  ['', ['Boys do more sport than girls.', 'Boys were far more likely than their female counterparts to play team sports, at 34% compared to only 13%.', 'Boys sport 34%, girls 13%.'], 1]]);
W('g6', 3, 'Đoạn so sánh Band 8', 'Dữ liệu: *Average monthly rent for a one-bedroom flat — Hong Kong $2,400, Singapore $2,100, Bangkok $600, Hanoi $450.*\n\nViết đoạn 80–100 từ dùng: so sánh gấp, trạng từ mức độ, *counterparts*, và một câu so sánh kép hoặc *pale in comparison with*.', 70, ['so sánh gấp', 'trạng từ mức độ', 'so sánh kép']);

/* ===== g5 Bị động ===== */
M('g5', 'remember', 2, 'Bị động trong Process/Map', 'Chọn câu đúng.', [
  ['', ['After being washed, the bottles are crushed.', 'After washed, the bottles crushed.'], 0], ['', ['The trees were cleared to make way for a car park.', 'The trees cleared to make way for a car park.'], 0]]);
M('g5', 'remember', 3, 'Bị động khách quan', 'Chọn câu bị động khách quan đúng.', [
  ['', ['It is widely argued that exams cause stress.', 'It widely argues that exams cause stress.'], 0], ['', ['It is essential that the law be enforced.', 'It is essential that the law enforced.'], 0]]);
M('g5', 'understand', 2, 'Vì sao dùng bị động?', 'Chọn lý do.', [
  ['*The clay is dug up and transported to the factory.*', ['Người làm không quan trọng, nhấn vào quy trình', 'Muốn nhấn người làm'], 0], ['*A new school was built in 2010.*', ['Nhấn vào công trình, không cần biết ai xây', 'Sai ngữ pháp'], 0]]);
M('g5', 'understand', 3, 'Hiểu danh hoá', 'Chọn câu cùng nghĩa.', [
  ['*There was a sharp increase in prices.*', ['Prices increased sharply.', 'Prices decreased sharply.'], 0], ['*The growing use of cars has worsened air quality.*', ['People use cars more, and this has made the air worse.', 'People use fewer cars.'], 0]]);
G('g5', 'apply', 1, 'be + V3', 'Chuyển sang bị động (hiện tại đơn).', [
  ['Workers pick the tea leaves. → The tea leaves ___ by workers.', 'are picked'], ['The machine dries the rice. → The rice ___ by the machine.', 'is dried'], ['They pack the boxes. → The boxes ___.', 'are packed']]);
M('g5', 'analyze', 1, 'Chủ động hay bị động?', 'Chọn dạng của câu.', [
  ['*The bridge was opened in 1999.*', ['bị động', 'chủ động'], 0], ['*Farmers grow coffee in the highlands.*', ['chủ động', 'bị động'], 0]]);
M('g5', 'analyze', 3, 'Phân tích bị động phức', 'Câu: *After being sorted by hand, the cocoons are boiled so that the silk can be unwound.*', [
  ['Có bao nhiêu cấu trúc bị động?', ['3', '1', '2'], 0], ['*After being sorted* là:', ['cụm phân từ bị động', 'mệnh đề chính'], 0]]);
M('g5', 'evaluate', 1, 'Câu bị động đúng', '', [
  ['', ['The letters are deliver every day.', 'The letters are delivered every day.'], 1]]);
W('g5', 3, 'Đoạn Task 2 dùng bị động khách quan', 'Đề: *Should animal testing for medicine be banned?*\n\nViết đoạn 90–110 từ dùng: *It is widely argued that...*, một câu **bị động giả định** (*It is essential that ... be ...*), và danh hoá ít nhất 2 lần.', 80, ['bị động khách quan', 'bị động giả định', 'danh hoá']);

/* ===== g9 Đảo ngữ ===== */
M('g9', 'remember', 2, 'Đảo ngữ Not until / Only by', 'Chọn câu đúng.', [
  ['', ['Only by investing in research can we cure the disease.', 'Only by investing in research we can cure the disease.'], 0], ['', ['Not until 2020 did the city ban plastic bags.', 'Not until 2020 the city banned plastic bags.'], 0]]);
M('g9', 'remember', 3, 'Đảo ngữ điều kiện', 'Chọn câu đúng.', [
  ['', ['Were the government to ban cars, traffic would fall.', 'If were the government ban cars, traffic would fall.'], 0], ['', ['Should you need help, please call.', 'Should you needed help, please call.'], 0]]);
M('g9', 'understand', 2, 'Câu thường tương ứng', 'Chọn câu cùng nghĩa.', [
  ['*Rarely do students read for pleasure.*', ['Students rarely read for pleasure.', 'Students often read for pleasure.'], 0], ['*Not only is cycling cheap, but it is also healthy.*', ['Cycling is both cheap and healthy.', 'Cycling is cheap but unhealthy.'], 0]]);
M('g9', 'understand', 3, 'Nghĩa đảo ngữ loại 3', '*Had it not been for the internet, remote work would have been impossible.*', [
  ['Nghĩa là:', ['Nhờ có internet nên làm việc từ xa mới khả thi', 'Internet làm việc từ xa bất khả thi', 'Trong tương lai sẽ không có internet'], 0]]);
G('g9', 'apply', 1, 'Trợ động từ trong đảo ngữ', 'Điền trợ động từ.', [
  ['Never ___ I seen such heavy traffic.', 'have'], ['Rarely ___ people walk to work here.', 'do'], ['Not only ___ it cheap, but it is also fast.', 'is']]);
M('g9', 'analyze', 1, 'Câu nào là đảo ngữ?', '', [
  ['', ['Seldom do tourists visit this area.', 'Tourists seldom visit this area.'], 0], ['', ['Only then did we understand.', 'We only then understood.'], 0]]);
M('g9', 'analyze', 3, 'Đảo ngữ dùng có hợp lý?', 'Chọn đoạn dùng đảo ngữ tự nhiên nhất.', [
  ['', ['Never do people walk. Rarely do they cycle. Seldom do they use buses.', 'Many residents rely on motorbikes. Only when public transport becomes reliable will they consider leaving them at home.'], 1, 'Lạm dụng đảo ngữ liên tiếp bị trừ điểm; dùng 1 câu đúng chỗ.']]);
M('g9', 'evaluate', 1, 'Chọn câu đúng', '', [['', ['Never I have seen it.', 'Never have I seen it.'], 1]]);
W('g9', 3, 'Kết luận có đảo ngữ Mức 3', 'Đề: *Governments should invest more in renewable energy.*\n\nViết đoạn kết luận 70–90 từ dùng **hai** cấu trúc đảo ngữ khác nhau (ví dụ *Only by..., can...* và *Were we to..., we would...*), đúng chỗ và tự nhiên.', 60, ['đảo ngữ Only by', 'đảo ngữ điều kiện', 'không lạm dụng']);

/* ===== g10 Noun clause ===== */
M('g10', 'remember', 2, 'whether / wh-clause', 'Chọn câu đúng.', [
  ['', ['Opinions are divided on whether phones should be banned.', 'Opinions are divided on if phones should be banned.'], 0], ['', ['The chart shows how much water was used.', 'The chart shows how much water was it used.'], 0]]);
M('g10', 'remember', 3, 'Noun clause làm chủ ngữ', 'Chọn câu Mức 3 đúng.', [
  ['', ['What matters most is how students apply their knowledge.', 'What matters most are how students apply their knowledge.'], 0], ['', ['That cities are overcrowded is undeniable.', 'That cities are overcrowded are undeniable.'], 0]]);
M('g10', 'understand', 2, 'Vai trò của mệnh đề', 'Xác định vai trò của phần in nghiêng.', [
  ['*Many believe **that exams are unfair**.*', ['tân ngữ', 'chủ ngữ'], 0], ['*The question is **whether the plan will work**.*', ['bổ ngữ', 'tân ngữ của giới từ'], 0]]);
M('g10', 'understand', 3, 'Hiểu câu Mức 3', '*What can be inferred from this gap is that politics is not an attractive career.*', [
  ['Chủ ngữ của động từ *is* (thứ hai) là:', ['What can be inferred from this gap', 'this gap', 'politics'], 0]]);
G('g10', 'apply', 1, 'that / whether / what', 'Điền MỘT từ.', [
  ['I think ___ homework is useful.', 'that'], ['I do not know ___ the bus is late.', ['whether', 'if']], ['___ he said was surprising.', 'what']]);
M('g10', 'analyze', 1, 'Trật tự từ', 'Chọn câu đúng.', [['', ['I wonder why prices are rising.', 'I wonder why are prices rising.'], 0]]);
M('g10', 'analyze', 3, 'Phân tích câu nhiều tầng', '*That access to education should be free is a belief shared by many educators who work in rural areas.*', [
  ['Câu có mấy mệnh đề phụ?', ['2 (mệnh đề danh từ + mệnh đề quan hệ)', '1', '3'], 0], ['Động từ chính:', ['is', 'should be', 'work'], 0]]);
M('g10', 'evaluate', 1, 'Câu nào đúng?', '', [['', ['It is clear that cities are growing.', 'It is clear cities growing.'], 0]]);
W('g10', 3, 'Mở bài với noun clause Mức 3', 'Đề: *Some people think that university should be free for everyone.*\n\nViết mở bài + 2 câu thân bài (80–100 từ) có: một câu bắt đầu bằng *What lies at the core of...* hoặc *What can be inferred...*, một câu *That... is a belief shared by...*, và *Opinions are divided on whether...*', 70, ['noun clause làm chủ ngữ', 'whether-clause', 'động từ số ít sau mệnh đề danh từ']);

/* ===== g4 Adjective clause ===== */
M('g4', 'remember', 2, 'whose / in which', 'Chọn câu đúng.', [
  ['', ['Singapore, whose transport is efficient, has little traffic.', 'Singapore, which transport is efficient, has little traffic.'], 0], ['', ['matches in which women compete', 'matches which women compete'], 0]]);
M('g4', 'remember', 3, 'all of which / most of which', 'Chọn câu đúng.', [
  ['', ['Students face debt, stress and long hours, all of which harm their health.', 'Students face debt, stress and long hours, all of them harm their health.'], 0]]);
M('g4', 'understand', 2, 'Xác định vs không xác định', 'Chọn nghĩa đúng.', [
  ['*My brother who lives in Hue is a teacher.* (không dấu phẩy)', ['Tôi có nhiều anh trai', 'Tôi chỉ có một anh trai'], 0], ['*Sales doubled, which surprised everyone.*', ['which thay cho cả mệnh đề trước', 'which thay cho "sales"'], 0]]);
M('g4', 'understand', 3, '"most of which"', '*Newspapers provide knowledge, most of which proves useful later.*', [
  ['*most of which* chỉ:', ['phần lớn kiến thức', 'phần lớn báo chí'], 0]]);
G('g4', 'apply', 1, 'who / which / where', 'Điền đại từ quan hệ.', [
  ['Students ___ work part-time have less free time.', ['who', 'that']], ['The city ___ I grew up has changed.', 'where'], ['The bus ___ goes to the airport is cheap.', ['which', 'that']]]);
M('g4', 'analyze', 1, 'Chọn đại từ quan hệ', '', [['A teacher ___ students like', ['who', 'which', 'where'], 0], ['a market ___ farmers sell fruit', ['where', 'who'], 0]]);
M('g4', 'analyze', 3, 'Lỗi mệnh đề quan hệ', 'Chọn câu SAI.', [
  ['', ['Hanoi, that is the capital, is crowded.', 'Hanoi, which is the capital, is crowded.'], 0, 'Mệnh đề không xác định không dùng that.'], ['', ['This is the town which I grew up.', 'This is the town where I grew up.'], 0]]);
M('g4', 'evaluate', 1, 'Câu nào đúng?', '', [['', ['People who they smoke have more health problems.', 'People who smoke have more health problems.'], 1]]);
W('g4', 3, 'Đoạn văn với mệnh đề quan hệ Mức 3', 'Chủ đề: *Home schooling.*\n\nViết đoạn 90–110 từ dùng: *whose*, giới từ + *which* (*in which / through which*), *, which* thay cho cả mệnh đề, và *all of which / most of which*.', 80, ['whose', 'in which', ', which', 'all of which']);

/* ===== g11 Adverb clause ===== */
M('g11', 'remember', 2, 'Điều kiện & nhượng bộ', 'Chọn liên từ đúng.', [
  ['People can do extreme sports ___ they receive training.', ['provided that', 'although', 'because'], 0], ['___ the plan is expensive, it is worth it.', ['Although', 'Because', 'Unless'], 0]]);
M('g11', 'remember', 3, 'As + adj + as + S + may', 'Chọn câu đúng.', [
  ['', ['As attractive as the idea may seem, it is impractical.', 'As attractive the idea may seem, it is impractical.'], 0]]);
M('g11', 'understand', 2, 'Nghĩa liên từ', 'Chọn nghĩa.', [['*unless*', ['nếu không', 'mặc dù'], 0], ['*whereas*', ['trong khi (đối lập)', 'bởi vì'], 0], ['*as long as*', ['miễn là', 'ngay khi'], 0]]);
M('g11', 'understand', 3, '"insomuch as"', '*Past empires fought each other, insomuch as they saw trade as a zero-sum game.*', [['*insomuch as* nghĩa là:', ['vì lẽ rằng / ở chỗ', 'mặc dù', 'trừ khi'], 0]]);
G('g11', 'apply', 1, 'because / when / although', 'Điền liên từ.', [
  ['___ it rained, we stayed home.', ['because', 'as', 'since']], ['Call me ___ you arrive.', ['when', 'once']], ['___ it is cheap, few people use it.', ['although', 'though']]]);
M('g11', 'analyze', 1, 'Chức năng mệnh đề', 'Xác định chức năng.', [['*because prices rose*', ['nguyên nhân', 'thời gian'], 0], ['*while I was studying*', ['thời gian', 'điều kiện'], 0]]);
M('g11', 'analyze', 3, 'Liên từ phù hợp ngữ cảnh', 'Chọn liên từ tốt nhất.', [
  ['Remote work saves commuting time, ___ it can blur the line between work and home.', ['whereas', 'yet', 'so'], 1], ['Plastic taxes work well ___ affordable alternatives exist.', ['provided that', 'even though', 'whereas'], 0]]);
M('g11', 'evaluate', 1, 'Câu đúng dấu phẩy', '', [['', ['Although it is cheap, it is slow.', 'Although it is cheap it, is slow.'], 0]]);
M('g11', 'evaluate', 3, 'Câu nào thuyết phục nhất?', '', [
  ['', ['Although free public transport is good, it costs money.', 'As appealing as free public transport may appear, it would place a heavy burden on taxpayers unless costs were shared with businesses.', 'Free transport is good but expensive.'], 1]]);
W('g11', 3, 'Đoạn nhượng bộ Mức 3', 'Đề: *A four-day working week should be introduced for all employees.*\n\nViết đoạn 90–110 từ dùng *As + adj + as + S + may + V*, *provided that*, và *whereas*.', 80, ['As adj as', 'provided that', 'whereas']);

/* ===== g12 Participle ===== */
M('g12', 'remember', 2, 'Given / thereby', 'Chọn câu đúng.', [
  ['', ['Given the high cost, many people rent.', 'Giving the high cost, many people rent.'], 0], ['', ['Prices fell, thereby boosting demand.', 'Prices fell, thereby boosted demand.'], 0]]);
M('g12', 'remember', 3, 'with + N + V-ing / albeit', 'Chọn câu đúng.', [
  ['', ['Waste is rising, with plastic bags being used only once.', 'Waste is rising, with plastic bags are used only once.'], 0], ['', ['The plan, albeit costly, is effective.', 'The plan, albeit it is costly, is effective.'], 0]]);
M('g12', 'understand', 2, 'Mệnh đề đầy đủ tương ứng', 'Chọn câu cùng nghĩa.', [
  ['*People living near the airport suffer from noise.*', ['People who live near the airport...', 'People lived near the airport...'], 0], ['*Built in 1900, the bridge is unsafe.*', ['The bridge, which was built in 1900, is unsafe.', 'The bridge built the year 1900.'], 0]]);
M('g12', 'understand', 3, 'Nghĩa của thereby', '*Medicine has improved, thereby allowing people to live longer.*', [['*thereby allowing* chỉ:', ['kết quả của vế trước', 'nguyên nhân', 'đối lập'], 0]]);
G('g12', 'apply', 1, 'V-ing hay V3?', 'Điền dạng đúng.', [
  ['Students ___ (study) abroad gain independence.', 'studying'], ['The money ___ (spend) on health rose.', 'spent'], ['Cars ___ (make) in Japan are reliable.', 'made']]);
M('g12', 'analyze', 1, 'Chủ động hay bị động?', 'Cụm phân từ mang nghĩa nào?', [['*people working at night*', ['chủ động', 'bị động'], 0], ['*food imported from abroad*', ['bị động', 'chủ động'], 0]]);
M('g12', 'analyze', 3, 'Phát hiện lỗi phân từ', 'Chọn câu đúng.', [
  ['', ['Having finished the course, a job was found quickly.', 'Having finished the course, she found a job quickly.'], 1], ['', ['Given its low cost, the scheme attracted many users.', 'Given its low cost, many users the scheme attracted.'], 0]]);
M('g12', 'evaluate', 1, 'Câu nào ngắn gọn & đúng?', '', [['', ['People who are living in cities pay more.', 'People living in cities pay more.'], 1]]);
M('g12', 'evaluate', 3, 'Câu Band 8 nhất', '', [['', ['Many people buy plastic. Plastic is used once. Waste increases.', 'Our society has become a throw-away one, with single-use plastics being discarded daily and landfill sites filling up fast.', 'Plastic is bad because people use it once.'], 1]]);
W('g12', 3, 'Kết luận dùng rút gọn Mức 3', 'Chủ đề: *Tourism in remote natural areas.*\n\nViết đoạn 80–100 từ dùng: *Given + N*, *thereby + V-ing*, *with + N + V-ing/V3*, và *albeit*.', 70, ['Given', 'thereby', 'with + N + V-ing', 'albeit']);

/* ===== g13 Parallel ===== */
M('g13', 'remember', 2, 'Song song V-ing', 'Chọn câu đúng.', [
  ['', ['Mounting campaigns and having healthier menus would help.', 'Mounting campaigns and have healthier menus would help.'], 0]]);
M('g13', 'remember', 3, 'Song song mệnh đề danh từ', 'Chọn câu đúng.', [
  ['', ['It depends on what you study and what job you want.', 'It depends on what you study and your job wanted.'], 0]]);
M('g13', 'understand', 2, 'Vì sao không song song?', '*Modern problems include obesity, stress and they are lonely.*', [['Lỗi:', ['phần cuối là mệnh đề, hai phần trước là danh từ', 'thiếu dấu phẩy'], 0]]);
M('g13', 'understand', 3, 'Tác dụng điệp cấu trúc', '*Instead of littering, they can carry bags; instead of picking flowers, they can take photos.*', [['Điệp cấu trúc giúp:', ['tạo nhịp và nhấn mạnh lập luận', 'tăng số từ vô ích'], 0]]);
G('g13', 'apply', 1, 'Hoàn thành song song', 'Điền dạng đúng.', [
  ['Cycling is cheap, healthy and ___ (environment).', 'environmentally friendly'], ['She likes reading, swimming and ___ (cook).', 'cooking'], ['Both teachers and ___ (parent) agree.', 'parents']]);
M('g13', 'analyze', 1, 'Tìm phần lệch', '', [['*to save money, reducing waste and to help others*', ['reducing waste', 'to save money'], 0]]);
M('g13', 'analyze', 3, 'Lỗi song song tinh vi', 'Chọn câu đúng.', [
  ['', ['Not only does it save time but also money.', 'It not only saves time but also reduces costs.'], 1], ['', ['Either we act now or we will pay later.', 'Either act now or we will pay later.'], 0]]);
M('g13', 'evaluate', 1, 'Câu song song đúng', '', [['', ['I enjoy hiking, swimming and to cycle.', 'I enjoy hiking, swimming and cycling.'], 1]]);
M('g13', 'evaluate', 3, 'Câu nào có nhịp tốt nhất?', '', [['', ['Governments should tax sugar, they should build parks, and schools must teach cooking too.', 'Governments should tax sugar, build parks and require schools to teach cooking.', 'Tax sugar, parks, and cooking in schools.'], 1]]);
W('g13', 3, 'Đoạn giải pháp dùng điệp cấu trúc', 'Đề: *How can tourists reduce their impact on historic sites?*\n\nViết đoạn 90–110 từ có một câu điệp cấu trúc 3 vế (*Instead of..., they can...; instead of..., ...; and instead of..., ...*) và ít nhất một liệt kê song song khác.', 80, ['điệp cấu trúc', 'song song']);

/* ===== g14 Sentence problems ===== */
M('g14', 'remember', 2, 'Gọi tên lỗi Mức 2', 'Chọn tên lỗi.', [
  ['*Many students attend class, and they work, and they study, so they are tired.*', ['stringy sentence', 'fragment', 'comma splice'], 0], ['*Rents are high. Salaries are low. Life is hard.*', ['choppy sentences', 'run-on'], 0]]);
M('g14', 'remember', 3, 'Dangling modifier', 'Chọn câu có lỗi phân từ treo.', [['', ['Arriving late, the meeting had started.', 'Arriving late, I missed the start of the meeting.'], 0]]);
M('g14', 'understand', 2, 'Cách sửa comma splice', '*My family moved to Hue, then they moved to Da Nang.*', [['Cách sửa đúng:', ['My family moved to Hue, and then they moved to Da Nang.', 'My family moved to Hue then, they moved to Da Nang.'], 0]]);
M('g14', 'understand', 3, 'Vì sao stringy làm tụt điểm?', '', [['', ['Ý bị nối dài bằng and/so, không thể hiện quan hệ logic', 'Câu quá ngắn'], 0]]);
G('g14', 'apply', 1, 'Thêm liên từ', 'Điền một liên từ để sửa comma splice.', [
  ['It was late, ___ we went home.', ['so']], ['The bus is cheap, ___ it is slow.', ['but', 'yet']]]);
M('g14', 'analyze', 1, 'Câu cụt?', 'Đây có phải câu hoàn chỉnh?', [['*Because many people work at home.*', ['Không, là fragment', 'Có'], 0], ['*Many people work at home.*', ['Có', 'Không'], 0]]);
M('g14', 'analyze', 3, 'Đếm lỗi', '*Because rents are rising. Many young people live with parents, this delays their independence and they marry later and they have fewer children.*', [
  ['Đoạn có những lỗi nào?', ['fragment + comma splice + stringy', 'chỉ fragment', 'không lỗi'], 0]]);
M('g14', 'evaluate', 1, 'Câu nào đúng?', '', [['', ['Prices rose, people bought less.', 'Prices rose, so people bought less.'], 1]]);
M('g14', 'evaluate', 3, 'Bản sửa tốt nhất', '*Students attend lectures, then they work in cafés, and they study at night, so they are exhausted.*', [
  ['', ['Because students attend lectures, work in cafés and study at night, they are often exhausted.', 'Students attend lectures. They work in cafés. They study at night. They are exhausted.', 'Students attend lectures, they work in cafés, they study at night.'], 0]]);
W('g14', 3, 'Viết lại đoạn văn nhiều lỗi (Mức 3)', 'Sửa và viết lại đoạn sau thành đoạn Band 8 (80–100 từ), không còn fragment, comma splice, choppy, stringy hay dangling:\n\n*"Because cities are crowded. Young people still move there, they want jobs. Rents are high. Food is expensive. Living far from the centre, commuting takes hours and they get tired and they cannot study and so their careers suffer."*', 70, ['không fragment', 'không comma splice', 'không choppy/stringy', 'không dangling']);

/* ===== g15 Wrap-up ===== */
M('g15', 'remember', 2, 'Nhận diện cấu trúc trong câu', '*Due largely to rising costs, many families now cook at home.*', [['*Due largely to rising costs* là:', ['cụm giới từ chỉ nguyên nhân', 'mệnh đề quan hệ'], 0]]);
M('g15', 'remember', 3, 'Nhận diện cấu trúc Mức 3', '*Children now spend less time outdoors than their parents did, which has profound consequences, including poorer health.*', [
  ['*than their parents did*:', ['so sánh mở rộng có trợ động từ', 'mệnh đề danh từ'], 0], ['*including poorer health*:', ['cụm phân từ rút gọn', 'mệnh đề chính'], 0]]);
M('g15', 'understand', 2, 'Vai trò thành phần', '*Many experts believe that homework improves discipline.*', [['*that homework improves discipline*:', ['tân ngữ (mệnh đề danh từ)', 'trạng ngữ'], 0]]);
M('g15', 'understand', 3, 'Hiểu câu ghép nhiều tầng', '*I believe these changes yield few benefits but cause serious problems, including weaker social skills.*', [['Hai động từ song song là:', ['yield / cause', 'believe / including'], 0]]);
G('g15', 'apply', 1, 'Điền thành phần còn thiếu', 'Điền MỘT từ.', [['Many students ___ part-time jobs. (động từ)', ['have', 'take', 'do']], ['___ teachers agree with the plan. (lượng từ)', ['most', 'many', 'some']]]);
R('g15', 'apply', 3, 'Viết câu Band 8 từ câu đơn', 'Gộp thành MỘT câu Band 8 dùng ít nhất 3 cấu trúc.', [
  ['Teenagers today read less than their parents. This is because of smartphones. This causes problems. Their vocabulary is weaker. Their concentration is worse.', 'Teenagers today read far less than their parents did, due largely to smartphones, which has caused problems including weaker vocabulary and poorer concentration.']]);
M('g15', 'analyze', 1, 'Tìm chủ ngữ', '', [['*The cost of living in big cities is high.*', ['The cost of living in big cities', 'big cities'], 0]]);
M('g15', 'evaluate', 1, 'Câu nào đúng?', '', [['', ['Due to rising costs, many families cook at home.', 'Due to costs rise, many families cook at home.'], 0]]);
M('g15', 'evaluate', 3, 'Câu đa tầng nào chuẩn nhất?', '', [['', ['It is true that people travel more than before because of cheap flights, and this is good and bad.', 'It is undeniable that people travel far more than previous generations did, due primarily to cheap flights, a trend that brings both opportunities and serious environmental costs.'], 1]]);

/* ===== g16 Grammar Nazi ===== */
M('g16', 'remember', 2, 'Lỗi vòng Nazi 2', 'Chọn câu đúng.', [['', ['Despite being expensive, it sells well.', 'Despite it is expensive, it sells well.'], 0], ['', ['Because of the high price, people buy less.', 'Because of the price is high, people buy less.'], 0]]);
M('g16', 'remember', 3, 'Referencing thay từ nối', 'Chọn câu thứ hai Mức 3.', [['Câu 1: *Many cities have introduced congestion charges.*', ['Moreover, congestion charges reduce traffic.', 'Such measures have cut traffic noticeably.'], 1]]);
M('g16', 'understand', 2, 'Vì sao sai?', '', [['*Government should spend more.*', ['danh từ đếm được số ít thiếu mạo từ', 'sai thì'], 0], ['*There are many informations.*', ['information không đếm được', 'thiếu động từ'], 0]]);
M('g16', 'understand', 3, 'Tác dụng của nominalisation', '*The corollary of this investment would be a stronger economy.*', [['Cụm này giúp:', ['nối với câu trước mà không cần từ nối máy móc', 'tăng số từ'], 0]]);
G('g16', 'apply', 1, 'Sửa mạo từ', 'Điền a / an / the / x (không mạo từ).', [['___ education is important.', 'x'], ['She is ___ honest person.', 'an'], ['___ government has announced a new plan.', 'the']]);
M('g16', 'analyze', 1, 'Tìm lỗi', 'Chọn câu có lỗi.', [['', ['Children needs more sleep.', 'Children need more sleep.'], 0]]);
M('g16', 'evaluate', 1, 'Câu sạch lỗi', '', [['', ['Many student studies abroad.', 'Many students study abroad.'], 1]]);
M('g16', 'evaluate', 3, 'Đoạn nào sạch lỗi và Mức 3?', '', [['', [
  'Firstly, the technology is develop. Moreover, people uses phone. Furthermore, it make problem.',
  'Technology has developed rapidly in recent decades. This progress has transformed how people communicate, but it has also brought new problems, such as screen addiction.',
  'Technology developed. People use phones. There are problems.'], 1]]);
W('g16', 3, 'Biên tập đoạn văn thật (Mức 3)', 'Biên tập đoạn sau thành Band 8 (90–110 từ): sửa lỗi, thay từ nối máy móc bằng referencing/nominalisation, nâng câu đơn thành câu phức.\n\n*"Firstly, homework is good for student. Because it help them remember lesson. Moreover, homework teach student to manage time. Furthermore, parents can know what their child learn. In addition, homework is not too much, it is only one hour."*', 80, ['sửa lỗi', 'referencing thay Firstly/Moreover', 'nâng câu']);

/* ===== g2 Danh từ, mạo từ, hoà hợp ===== */
M('g2', 'remember', 2, 'The number of / A number of', 'Chọn động từ đúng.', [['The number of tourists ___ risen.', ['has', 'have'], 0], ['A number of tourists ___ complained.', ['have', 'has'], 0]]);
M('g2', 'remember', 3, 'Hoà hợp với chủ ngữ phức', 'Chọn động từ đúng.', [['What worries parents most ___ the cost of tuition.', ['is', 'are'], 0], ['Neither the teacher nor the students ___ satisfied.', ['were', 'was'], 0]]);
M('g2', 'understand', 2, 'Vì sao dùng the?', '', [['*The proportion of women rose.*', ['the + proportion of (đã xác định)', 'nói chung'], 0], ['*Technology changes lives.*', ['danh từ chung chung → không mạo từ', 'thiếu the'], 0]]);
M('g2', 'understand', 3, 'Mạo từ với danh từ trừu tượng', 'Chọn câu đúng.', [['', ['Knowledge of a foreign language is valuable.', 'The knowledge of foreign language is valuable.'], 0]]);
G('g2', 'apply', 1, 'a / an', 'Điền a hoặc an.', [['___ university', 'a'], ['___ hour', 'an'], ['___ useful tool', 'a']]);
M('g2', 'analyze', 1, 'Đếm được?', '', [['advice', ['không đếm được', 'đếm được'], 0], ['suggestion', ['đếm được', 'không đếm được'], 0]]);
M('g2', 'analyze', 3, 'Soát lỗi kép', 'Câu nào sạch lỗi?', [['', ['Each of the student have a laptop.', 'Each of the students has a laptop.', 'Each of the students have laptops.'], 1]]);
M('g2', 'evaluate', 1, 'Câu đúng', '', [['', ['She gave me an advice.', 'She gave me some advice.'], 1]]);
M('g2', 'evaluate', 3, 'Đoạn nào chính xác nhất?', '', [['', ['The research show that a number of student is stressed.', 'Research shows that a number of students are stressed, and the proportion of those affected is rising.'], 1]]);
W('g2', 3, 'Đoạn Task 1 chính xác tuyệt đối', 'Dữ liệu: *Proportion of adults who read news online: 2010 – 35%, 2020 – 72%. Number of printed newspapers sold: 2010 – 4.1 million/day, 2020 – 1.6 million/day.*\n\nViết đoạn 70–90 từ không một lỗi mạo từ, số ít/số nhiều hay hoà hợp, dùng cả *the proportion of* và *the number of*.', 60, ['mạo từ', 'the number of + V số ít', 'đếm được/không đếm được']);

/* ===== g7 Điều kiện & từ nối ===== */
M('g7', 'remember', 2, 'Điều kiện loại 2', 'Chọn câu đúng.', [['', ['If cars were banned, the air would be cleaner.', 'If cars are banned, the air would be cleaner.'], 0]]);
M('g7', 'remember', 3, 'Cụm liên kết học thuật', 'Chọn cụm Mức 3.', [['', ['Added to this is the fact that...', 'Moreover,'], 0], ['', ['Compounding the problem is...', 'Also,'], 0]]);
M('g7', 'understand', 2, 'Loại điều kiện', 'Chọn nghĩa.', [['*If governments invest, traffic will decrease.*', ['có thể xảy ra', 'giả định trái thực tế'], 0], ['*If I were mayor, I would ban cars.*', ['giả định trái thực tế', 'có thể xảy ra'], 0]]);
M('g7', 'understand', 3, 'Nghĩa của "Compounding the problem is..."', '', [['', ['Làm vấn đề trầm trọng hơn là...', 'Giải pháp cho vấn đề là...'], 0]]);
G('g7', 'apply', 1, 'Từ nối cơ bản', 'Điền MỘT từ nối.', [['It is cheap. ___, it is slow.', ['however']], ['It rained heavily. As a ___, the match was cancelled.', 'result']]);
M('g7', 'analyze', 1, 'Chức năng từ nối', '', [['*Therefore*', ['kết quả', 'đối lập'], 0], ['*In contrast*', ['đối lập', 'thêm ý'], 0]]);
M('g7', 'analyze', 3, 'Từ nối có cần thiết?', 'Chọn đoạn liên kết tự nhiên hơn.', [['', ['Rents are high. Moreover, wages are low. Furthermore, jobs are scarce.', 'Rents are high. Added to this is the fact that wages have stagnated, which leaves many young workers unable to save.'], 1]]);
M('g7', 'evaluate', 1, 'Câu đúng', '', [['', ['If it will rain, we will stay home.', 'If it rains, we will stay home.'], 1]]);
M('g7', 'evaluate', 3, 'Đoạn nào Band 8?', '', [['', ['Firstly, pollution is bad. Secondly, it causes disease. Therefore, we must stop it.', 'Air pollution is a major threat to public health. Compounding the problem is the lack of green space in many cities, which leaves residents with few places to escape it.'], 1]]);
W('g7', 3, 'Đoạn lập luận không dùng Firstly/Moreover', 'Đề: *Why are young people delaying marriage?*\n\nViết đoạn 90–110 từ, **không dùng** Firstly/Secondly/Moreover/Furthermore; thay bằng *Added to this is the fact that..., Compounding this is..., This trend...*, và một câu điều kiện loại 2.', 80, ['liên kết học thuật', 'điều kiện loại 2', 'không từ nối máy móc']);
})();
