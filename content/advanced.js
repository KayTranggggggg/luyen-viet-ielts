/* Bậc nâng cao (Mức 3 – Band 8.0+) theo ma trận độ khó của khoá học. Khung câu theo khoá; câu ví dụ, số liệu, đề bài tự soạn. */
(function () {
const U = id => window.UNITS.find(u => u.id === id);
const A = (id, ex) => U(id).exercises.push(Object.assign({ lv: 3 }, ex));
const T = (id, p, h = '🚀 Nâng lên Band 8+ (Mức 3)') => U(id).theory.push({ h, p });

/* ---------- dữ liệu biểu đồ nâng cao ---------- */
const LINE_WIND = { kind: 'line', title: 'Electricity generated from wind power in four countries (TWh), 2010–2020', unit: 'TWh', labels: ['2010', '2012', '2014', '2016', '2018', '2020'],
  series: [{ name: 'Germany', data: [38, 51, 57, 79, 110, 131] }, { name: 'Spain', data: [44, 49, 52, 49, 50, 56] }, { name: 'UK', data: [10, 20, 32, 37, 57, 75] }, { name: 'Denmark', data: [8, 10, 13, 13, 14, 16] }] };
const BAR_SPORT = { kind: 'bar', title: 'Percentage of teenagers who regularly do selected activities, by gender (2022)', unit: '%', labels: ['Team sports', 'Gym', 'Dance', 'Cycling', 'Swimming'],
  series: [{ name: 'Boys', data: [34, 21, 4, 18, 15] }, { name: 'Girls', data: [13, 19, 22, 9, 16] }] };
const TABLE_DEGREE = { kind: 'table', title: 'Highest qualification held by residents of a city, by age group (%), 2021', headers: ['Age', 'University degree', 'High school', 'No qualification'],
  rows: [['18–24', '58', '38', '4'], ['25–34', '64', '31', '5'], ['35–49', '57', '33', '10'], ['50–64', '39', '35', '26'], ['65+', '18', '22', '60']] };

/* ================= GRAMMAR ================= */
T('g1', ['Mức 1: *People use phones every day.* (S + V + O + A)', 'Mức 2: mở rộng **cụm danh từ** bằng tính từ + giới từ: *The **excessive use of smartphones in classrooms** can distract students.*', 'Mức 3: **cụm danh từ học thuật** (danh hoá + bổ ngữ): *The **growing availability of low-cost flights to regional airports** has transformed domestic tourism.*']);
A('g1', { bloom: 'apply', type: 'rewrite', title: 'Mở rộng cụm danh từ (Mức 2 → 3)', instr: 'Viết lại câu, biến chủ ngữ thành một **cụm danh từ học thuật** (danh hoá + giới từ), giữ nghĩa.',
  items: [
    { q: 'Many people now buy things online. This has hurt small shops.', a: ['The rapid growth of online shopping has hurt many small shops.', 'The increasing popularity of online shopping among consumers has damaged small retailers.'] },
    { q: 'Cars are becoming cheaper, so more families own one.', a: ['The falling cost of private cars has led to higher rates of car ownership among families.'] },
    { q: 'Young people use social media a lot, and this affects their sleep.', a: ['Excessive use of social media among young people can disrupt their sleep.'] },
  ] });
A('g1', { bloom: 'analyze', type: 'match', title: 'Bóc tách câu Mức 3', instr: 'Câu: *The increasing affordability of electric scooters in Asian cities has encouraged many commuters to abandon their motorbikes.*', options: ['S (cụm danh từ)', 'V', 'O', 'C (bổ ngữ cho tân ngữ)'],
  pairs: [{ l: 'The increasing affordability of electric scooters in Asian cities', r: 'S (cụm danh từ)' }, { l: 'has encouraged', r: 'V' }, { l: 'many commuters', r: 'O' }, { l: 'to abandon their motorbikes', r: 'C (bổ ngữ cho tân ngữ)' }] });

T('g3', ['Mức 2: hiện tại hoàn thành cho xu hướng kéo dài trong Task 2: *Over the past decade, remote work **has attracted** both praise and criticism.*', 'Mức 3: **tương lai hoàn thành** + dự đoán: *Experts predict that by 2035, electric vehicles **will have overtaken** petrol cars in new sales.*']);
A('g3', { bloom: 'apply', type: 'rewrite', title: 'Hiện tại hoàn thành & tương lai hoàn thành', instr: 'Viết lại câu theo yêu cầu trong ngoặc.',
  items: [
    { q: 'Many cities started to ban plastic bags ten years ago and they still ban them. (hiện tại hoàn thành, mở đầu bằng Over the last decade)', a: ['Over the last decade, many cities have banned plastic bags.'] },
    { q: 'Scientists say solar power will be cheaper than coal before 2030. (tương lai hoàn thành, by 2030)', a: ['Scientists predict that by 2030, solar power will have become cheaper than coal.'] },
    { q: 'The company plans that half of its delivery vans will be electric by 2028. (tương lai hoàn thành, bị động)', a: ['The company has announced that by 2028 half of its delivery vans will have been replaced by electric ones.'] },
  ] });
A('g3', { bloom: 'evaluate', type: 'mcq', title: 'Chọn thì chính xác nhất', instr: 'Chọn câu đúng nhất về thì.',
  items: [
    { q: '', options: ['By 2040, the city will have built three new metro lines.', 'By 2040, the city builds three new metro lines.', 'By 2040, the city has built three new metro lines.'], a: 0 },
    { q: '', options: ['Since 2015, the number of cyclists rose steadily.', 'Since 2015, the number of cyclists has risen steadily.', 'Since 2015, the number of cyclists is rising steadily.'], a: 1 },
    { q: 'Task 1, biểu đồ 1990–2010:', options: ['Coal consumption has fallen sharply between 1990 and 2010.', 'Coal consumption fell sharply between 1990 and 2010.'], a: 1 },
  ] });

T('g8', ['Mức 1 (Band 5 hay mắc): khẳng định tuyệt đối: *Violent films **will** turn teenagers into criminals.*', 'Mức 2: modal giảm nhẹ: *Violent films **may** encourage aggressive behaviour in some teenagers.*', 'Mức 3: modal + **much/far more likely to** + bị động/điều kiện rút gọn: *Teenagers exposed to such content **could be far more likely to** act aggressively **if left unsupervised**.*']);
A('g8', { bloom: 'apply', type: 'rewrite', title: 'Hedging Mức 3', instr: 'Viết lại câu khẳng định tuyệt đối thành câu **hedging Mức 3** (modal + likely/much more likely + điều kiện hoặc bị động).',
  items: [
    { q: 'Children who play online games all day will fail at school.', a: ['Children who spend most of their free time gaming could be much more likely to fall behind at school if left unsupervised.'] },
    { q: 'Banning cars from city centres will solve air pollution.', a: ['Restricting car access to city centres may significantly reduce air pollution, although it is unlikely to solve the problem on its own.'] },
    { q: 'People who work from home are lazy.', a: ['Some people working from home may find it harder to stay motivated, particularly if they lack a dedicated workspace.'] },
  ] });
A('g8', { bloom: 'evaluate', type: 'mcq', title: 'Câu nào là Mức 3?', instr: 'Chọn câu thể hiện hedging tinh tế nhất.',
  items: [{ q: '', options: [
    'Fast food makes people obese.',
    'Fast food can make people obese.',
    'A diet high in fast food is likely to increase the risk of obesity, particularly among children who are already physically inactive.'], a: 2 }] });

T('g6', ['Mức 2: so sánh hơn + trạng từ mức độ: *The figure for girls was **significantly lower**, at 12%.*', 'Mức 3: **so sánh kép** *the more..., the more...*; *pale in comparison with*; *by a large margin*: *The impact of public health campaigns **pales in comparison with** that of constant junk-food advertising.*']);
A('g6', { bloom: 'apply', type: 'rewrite', title: 'So sánh kép & "pale in comparison with"', instr: 'Viết lại theo cấu trúc trong ngoặc.',
  items: [
    { q: 'If cities build more roads, more people drive. (the more..., the more...)', a: ['The more roads cities build, the more people drive.'] },
    { q: 'Recycling helps the environment a little; reducing consumption helps it much more. (pale in comparison with)', a: ['The environmental benefits of recycling pale in comparison with those of reducing consumption.'] },
    { q: 'Male sprinters run 100 m much faster than female sprinters. (by a large margin, counterparts)', a: ['Male sprinters can complete a 100-metre race faster than their female counterparts by a large margin.'] },
  ] });
A('g6', { bloom: 'analyze', type: 'gap', title: 'So sánh trong Task 1 (Mức 3)', instr: 'Điền MỘT từ.', chart: BAR_SPORT,
  items: [
    { q: 'The proportion of boys playing team sports was more than ___ that of girls.', a: ['double', 'twice'] },
    { q: 'Girls were over five times as ___ as boys to dance regularly.', a: ['likely'] },
    { q: 'Swimming was the only activity in which girls slightly outnumbered their male ___.', a: ['counterparts'] },
  ] });

T('g5', ['Mức 2: bị động trong Process/Map: *After being transported to the plant, the ore is crushed...*; *The woodland was cleared to make way for...*', 'Mức 3: **bị động khách quan** (*It is widely argued that...*, *X is predicated on the assumption that...*) và **bị động giả định** (*It is essential that such experiments **be** strictly regulated.*)']);
A('g5', { bloom: 'apply', type: 'rewrite', title: 'Bị động khách quan & giả định', instr: 'Viết lại theo yêu cầu.',
  items: [
    { q: 'Many people believe that homework improves discipline. (It is widely believed...)', a: ['It is widely believed that homework improves discipline.'] },
    { q: 'Governments must regulate animal testing strictly. (It is essential that ... be ...)', a: ['It is essential that animal testing be strictly regulated.'] },
    { q: 'Workers dug up the clay and took it to the factory. (After being..., bị động)', a: ['After being dug up, the clay is transported to the factory.', 'After being excavated, the clay was taken to the factory.'] },
  ] });
A('g5', { bloom: 'evaluate', type: 'mcq', title: 'Bị động giả định', instr: 'Chọn câu đúng.',
  items: [
    { q: '', options: ['It is vital that every child is given access to clean water.', 'It is vital that every child be given access to clean water.'], a: 1, ex: 'Cả hai đều chấp nhận được trong tiếng Anh hiện đại, nhưng "be" (giả định) là dạng học thuật chuẩn mà khoá học hướng tới.' },
    { q: '', options: ['The argument is predicated on the assumption that all citizens have internet access.', 'The argument predicates the assumption that all citizens have internet access.'], a: 0 },
  ] });

T('g9', ['Mức 2: *Not until women\'s sports attract larger audiences **should they** be given more airtime.* / *Only by investing in research **could we** solve...*', 'Mức 3: đảo ngữ điều kiện: ***Were we to** ignore..., we would...* (loại 2); ***Had it not been for** X, Y would have...* (loại 3); ***Should** the policy fail, ...* (loại 1).']);
A('g9', { bloom: 'apply', type: 'rewrite', title: 'Đảo ngữ điều kiện (Mức 3)', instr: 'Viết lại bằng đảo ngữ theo gợi ý.',
  items: [
    { q: 'If we ignored climate warnings, future generations would suffer. (Were we to...)', a: ['Were we to ignore climate warnings, future generations would suffer.'] },
    { q: 'If mobile banking had not existed, many rural farmers would have struggled to access credit. (Had it not been for...)', a: ['Had it not been for mobile banking, many rural farmers would have struggled to access credit.'] },
    { q: 'Cities should only expand public transport when they have reliable funding. (Only when..., should...)', a: ['Only when cities have reliable funding should they expand public transport.'] },
    { q: 'We can reduce traffic deaths only by changing driver behaviour. (Only by...)', a: ['Only by changing driver behaviour can we reduce traffic deaths.'] },
  ] });
A('g9', { bloom: 'evaluate', type: 'mcq', title: 'Đảo ngữ đúng chỗ', instr: 'Chọn câu đúng ngữ pháp.',
  items: [
    { q: '', options: ['Not until governments act will the problem disappear.', 'Not until governments act the problem will disappear.'], a: 0 },
    { q: '', options: ['Had it not been for vaccines, millions more would die last century.', 'Had it not been for vaccines, millions more would have died last century.'], a: 1 },
    { q: '', options: ['Were the government to raise fuel taxes, public transport use would rise.', 'Were the government raise fuel taxes, public transport use would rise.'], a: 0 },
  ] });

T('g10', ['Mức 2: *whether*-clause sau giới từ: *Opinions are divided **on whether** phones should be banned in schools.*', 'Mức 3: **mệnh đề danh từ làm chủ ngữ**: ***What lies at the core of** the problem is...*, ***What can be inferred from** this gap is that...*, ***That** education should be free **is a belief shared by** many.*']);
A('g10', { bloom: 'apply', type: 'rewrite', title: 'Mệnh đề danh từ làm chủ ngữ (Mức 3)', instr: 'Viết lại theo khung trong ngoặc.',
  items: [
    { q: 'The main cause of traffic jams is the lack of public transport. (What lies at the core of...)', a: ['What lies at the core of traffic congestion is the lack of reliable public transport.'] },
    { q: 'We can see from this data that young people prefer cities. (What can be inferred from...)', a: ['What can be inferred from this data is that young people prefer to live in cities.'] },
    { q: 'Many teachers believe that every child should learn to code. (That ... is a belief shared by...)', a: ['That every child should learn to code is a belief shared by many teachers.'] },
    { q: 'People disagree about whether tourism helps local culture. (Opinions are divided on...)', a: ['Opinions are divided on whether tourism helps local culture.'] },
  ] });
A('g10', { bloom: 'evaluate', type: 'mcq', title: 'Mệnh đề danh từ chuẩn', instr: 'Chọn câu đúng.',
  items: [
    { q: '', options: ['What causes the problem are poor planning.', 'What causes the problem is poor planning.'], a: 1, ex: 'Mệnh đề danh từ làm chủ ngữ → động từ số ít.' },
    { q: '', options: ['The chart shows how much rice was exported by Vietnam.', 'The chart shows how much rice did Vietnam export.'], a: 0 },
  ] });

T('g4', ['Mức 2: giới từ + which, **whose**: *Singapore, **whose** public transport is world-class, ...*; *matches **in which** professional players compete*.', 'Mức 3: **all of which / most of which / none of which** nối tiếp: *Home schooling can protect children from bullying, peer pressure and early relationships, **all of which** may harm their studies.*']);
A('g4', { bloom: 'apply', type: 'rewrite', title: 'whose / in which / all of which', instr: 'Gộp thành MỘT câu theo gợi ý.',
  items: [
    { q: 'Norway is a small country. Its electric car sales are the highest in the world. (whose)', a: ['Norway, whose electric car sales are the highest in the world, is a small country.', 'Norway is a small country whose electric car sales are the highest in the world.'] },
    { q: 'Online courses offer flexibility, low fees and global access. All of these attract working adults. (all of which)', a: ['Online courses offer flexibility, low fees and global access, all of which attract working adults.'] },
    { q: 'Newspapers provide a lot of knowledge. Most of it is useful later in life. (most of which)', a: ['Newspapers provide a wealth of knowledge, most of which can prove useful later in life.'] },
  ] });
A('g4', { bloom: 'evaluate', type: 'mcq', title: 'Mệnh đề quan hệ nâng cao', instr: 'Chọn câu đúng.',
  items: [
    { q: '', options: ['The factory, which workers went on strike last year, has closed.', 'The factory, whose workers went on strike last year, has closed.'], a: 1 },
    { q: '', options: ['Many students face debt, stress and long hours, all of them harm their health.', 'Many students face debt, stress and long hours, all of which can harm their health.'], a: 1 },
  ] });

T('g11', ['Mức 2: điều kiện/nhượng bộ: *as long as / provided that*.', 'Mức 3: **As + adj + as + S + may + V** (nhượng bộ đảo tính từ): ***As admirable as** this proposal **may appear**, it is unworkable in practice.*; *insomuch as* (vì lẽ rằng).']);
A('g11', { bloom: 'apply', type: 'rewrite', title: 'Nhượng bộ "As adj as..." (Mức 3)', instr: 'Viết lại bằng cấu trúc *As + adj + as + S + may + V, ...*',
  items: [
    { q: 'Although a four-day week sounds attractive, many businesses cannot afford it.', a: ['As attractive as a four-day week may sound, many businesses cannot afford it.'] },
    { q: 'Although the plan is ambitious, it ignores the needs of rural areas.', a: ['As ambitious as the plan may be, it ignores the needs of rural areas.'] },
  ] });
A('g11', { bloom: 'analyze', type: 'gap', title: 'Liên từ trạng ngữ Mức 2–3', instr: 'Điền MỘT từ.',
  items: [
    { q: 'People should be free to do extreme sports ___ that they understand the risks.', a: ['provided', 'providing'] },
    { q: '___ people are forced to change jobs, they tend to experience stress.', a: ['whenever'] },
    { q: 'As effective ___ the ban may seem, it is difficult to enforce.', a: ['as'] },
  ] });

T('g12', ['Mức 2: rút gọn đầu câu: ***Given** the availability of cheap flights, ...*; kết quả: *..., **thereby allowing** patients to recover faster.*', 'Mức 3: **cấu trúc tuyệt đối** *with + N + V-ing / V3*: *..., **with** single-use plastics **being** discarded daily*; nhượng bộ ***albeit** + adj/V-ing*.']);
A('g12', { bloom: 'apply', type: 'rewrite', title: 'thereby / with + N + V-ing / albeit', instr: 'Viết lại theo cấu trúc trong ngoặc.',
  items: [
    { q: 'Better vaccines treat diseases earlier. This allows people to live longer. (thereby + V-ing)', a: ['Better vaccines prevent diseases earlier, thereby allowing people to live longer.'] },
    { q: 'Our society throws things away. Plastic bags are used once and waste is piling up. (with + N + V-ing)', a: ['Our society has become a throw-away one, with plastic bags being used only once and waste piling up rapidly.'] },
    { q: 'Home schooling has some benefits, but it is not suitable for most families. (albeit)', a: ['Home schooling, albeit beneficial in some respects, is not suitable for most families.', 'Home schooling, albeit having some benefits, is not suitable for most families.'] },
    { q: 'Because cheap flights are available, travelling abroad is no longer a luxury. (Given + N)', a: ['Given the availability of cheap flights, travelling abroad is no longer a luxury.'] },
  ] });

T('g13', ['Mức 3: song song ở **mệnh đề danh từ** và **điệp cấu trúc** cho nhịp văn: *Instead of..., they can...; instead of..., they can...; and instead of..., they can...*']);
A('g13', { bloom: 'apply', type: 'rewrite', title: 'Song song Mức 3', instr: 'Sửa lỗi song song hoặc viết lại bằng điệp cấu trúc.',
  items: [
    { q: 'Whether students choose a course depends on what they enjoy and their future job.', a: ['Whether students choose a course depends on what they enjoy and what job they hope to do in the future.'] },
    { q: 'Running awareness campaigns and to have healthier school meals would reduce obesity.', a: ['Running awareness campaigns and providing healthier school meals would reduce obesity.'] },
    { q: 'Tourists can stop littering, stop picking flowers and stop touching ancient walls. (điệp "Instead of..., they can...")', a: ['Instead of littering, tourists can take their rubbish home; instead of picking flowers, they can photograph them; and instead of touching ancient walls, they can admire them from a distance.'] },
  ] });

T('g14', ['Ngoài fragment, run-on, comma splice còn **choppy sentences** (nhiều câu đơn rời rạc) và **stringy sentences** (nối quá nhiều and/but/so).', 'Cách sửa stringy: gom hành động bằng song song + mệnh đề phụ: *Because many students attend classes, work part-time and study at night, they are exhausted by the weekend.*']);
A('g14', { bloom: 'apply', type: 'rewrite', title: 'Sửa choppy & stringy sentences', instr: 'Viết lại thành MỘT câu chuẩn.',
  items: [
    { q: 'Many nurses work long shifts, and then they look after their families, and they also study, so they are often exhausted.', a: ['Because many nurses work long shifts, look after their families and study, they are often exhausted.'] },
    { q: 'Rents are high. Salaries are low. Young people cannot buy homes.', a: ['With rents high and salaries low, young people cannot afford to buy homes.', 'Because rents are high and salaries are low, young people cannot afford homes.'] },
    { q: 'Prices rose sharply, people bought less.', a: ['Prices rose sharply, so people bought less.', 'Prices rose sharply; as a result, people bought less.'] },
  ] });

T('g15', ['Đoạn văn Band 8 thường kết hợp trong 2 câu: mệnh đề danh từ (*It is true that...*), so sánh mở rộng (*the same... as... did*), cụm giới từ nguyên nhân (*due primarily to...*), động từ song song (*yield... but cause...*), rút gọn (*including...*).']);
A('g15', { bloom: 'analyze', type: 'match', title: 'Giải phẫu đoạn văn Band 8', instr: 'Đoạn: *It is undeniable that teenagers today rarely socialise in the same way as their parents did, due largely to the spread of smartphones. I would argue that this shift offers few benefits but creates serious problems, including weaker communication skills and poorer sleep.*', options: ['Mệnh đề danh từ', 'So sánh mở rộng', 'Cụm giới từ chỉ nguyên nhân', 'Động từ song song', 'Rút gọn phân từ'],
  pairs: [
    { l: 'that teenagers today rarely socialise...', r: 'Mệnh đề danh từ' }, { l: 'in the same way as their parents did', r: 'So sánh mở rộng' },
    { l: 'due largely to the spread of smartphones', r: 'Cụm giới từ chỉ nguyên nhân' }, { l: 'offers few benefits but creates serious problems', r: 'Động từ song song' },
    { l: 'including weaker communication skills and poorer sleep', r: 'Rút gọn phân từ' },
  ] });
A('g15', { bloom: 'create', type: 'write', kind: 'grammar', title: 'Viết 2 câu Band 8 đủ 5 cấu trúc', prompt: 'Chủ đề: *Fewer young people today read printed books than their parents did.*\n\nViết **2 câu** (khoảng 50–70 từ) dùng đủ 5 cấu trúc: mệnh đề danh từ, so sánh mở rộng, cụm giới từ chỉ nguyên nhân, động từ song song, rút gọn phân từ.', minWords: 40, focus: ['mệnh đề danh từ', 'so sánh mở rộng', 'due to + N', 'song song', 'rút gọn phân từ'] });

T('g16', ['Grammar Nazi Mức 3: thay *Firstly / Secondly / Moreover* bằng **referencing + nominalisation**: *This line of reasoning..., Such a change..., The corollary of this..., Added to this is the fact that...*', 'Danh từ đếm được số ít **không bao giờ đứng trơ trọi**: ✗ *Government should...* → ✓ ***The** government should...* / ***Governments** should...*']);
A('g16', { bloom: 'apply', type: 'rewrite', title: 'Thay từ nối máy móc bằng referencing', instr: 'Viết lại câu thứ hai, bỏ từ nối đầu câu và dùng referencing / nominalisation.',
  items: [
    { q: 'Many cities have introduced bike-sharing schemes. Moreover, bike-sharing schemes reduce traffic.', a: ['Many cities have introduced bike-sharing schemes. Such schemes help to reduce traffic.'] },
    { q: 'Some argue that exams measure ability. However, the argument that exams measure ability is weak.', a: ['Some argue that exams measure ability. This line of reasoning, however, is weak.'] },
    { q: 'Governments invest in adult literacy. Therefore, the economy grows and families benefit.', a: ['Governments invest in adult literacy. The corollary of this investment is a stronger economy and better-supported families.'] },
  ] });
A('g16', { bloom: 'analyze', type: 'mcq', title: 'Soi lỗi danh từ đếm được', instr: 'Chọn câu KHÔNG có lỗi.',
  items: [
    { q: '', options: ['Government should invest in public transport.', 'The government should invest in public transport.', 'Government should invests in public transport.'], a: 1 },
    { q: '', options: ['Student who works part-time has less time to study.', 'Students who work part-time have less time to study.', 'Students who works part-time have less time to study.'], a: 1 },
  ] });

T('g2', ['Mạo từ Mức 3: danh từ số nhiều nói chung **không dùng the**: *Smartphones have changed how we communicate.*; danh từ trừu tượng nói chung không mạo từ: *Education is a right.*']);
T('g7', ['Mức 3: thay *Firstly/Moreover* bằng cụm liên kết học thuật: *Added to this is the fact that..., This predisposition manifests itself in..., Compounding the problem is...*']);
A('g7', { bloom: 'apply', type: 'rewrite', title: 'Liên kết học thuật', instr: 'Viết lại câu thứ hai bằng *Added to this is the fact that...* hoặc *Compounding the problem is...*',
  items: [
    { q: 'Housing in big cities is expensive. In addition, salaries for young workers are low.', a: ['Housing in big cities is expensive. Added to this is the fact that salaries for young workers are low.'] },
    { q: 'Traffic is heavy in Hanoi. Moreover, public transport is limited.', a: ['Traffic is heavy in Hanoi. Compounding the problem is the limited public transport network.'] },
  ] });

/* ================= TASK 1 ================= */
T('t1a', ['Intro Mức 3: paraphrase bằng **how much / how many** + đổi cấu trúc: *The chart illustrates **how many** people cycled to work...*', 'Overview Mức 3: 2 ý (xu hướng + thứ hạng), gộp bằng *while... / with... witnessing...* và **không số liệu**.']);
A('t1a', { bloom: 'apply', type: 'rewrite', title: 'Paraphrase bằng how much / how many', instr: 'Paraphrase đề bằng how much (không đếm được) hoặc how many (đếm được).',
  items: [
    { q: 'The chart shows the proportion of adults who smoked in Australia from 1995 to 2020.', a: ['The chart illustrates how many adults smoked in Australia between 1995 and 2020.'] },
    { q: 'The graph shows household spending in Canada on four types of energy in 2010 and 2020.', a: ['The graph illustrates how much money Canadian households spent on four types of energy in 2010 and 2020.'] },
    { q: 'The table shows the amount of water used by three industries in 2015.', a: ['The table illustrates how much water was consumed by three industries in 2015.'] },
  ] });

T('t1h', ['Bố cục chuẩn khoá học: Intro **1 câu** → Overview **2 câu** → Body 1 **3–4 câu** → Body 2 **3–4 câu**; 160–190 từ.', 'Overview Change: Ý 1 **trend** (xu hướng chung + đường tăng/giảm mạnh nhất); Ý 2 **order** (đối tượng luôn cao/thấp nhất).']);
A('t1h', { bloom: 'evaluate', type: 'mcq', title: 'Overview đạt Band 8?', instr: 'Biểu đồ điện gió. Chọn overview đủ Trend + Order, không số liệu.', chart: LINE_WIND,
  items: [{ q: '', options: [
    'Overall, wind power generation rose in all four countries, with Germany witnessing the most dramatic growth. In addition, Germany produced the most wind electricity for most of the period, while Denmark consistently generated the least.',
    'Overall, Germany increased from 38 TWh to 131 TWh, and Denmark rose from 8 to 16 TWh.',
    'Overall, wind power is becoming more important in Europe because of climate change.'], a: 0, ex: 'Lưu ý: năm 2010 Spain cao hơn Germany, nên "for most of the period" chính xác hơn "throughout".' }] });
A('t1h', { bloom: 'create', type: 'write', kind: 'task1', title: 'Change over time (Band 8 target)', prompt: 'The graph below shows the amount of electricity generated from wind power in four countries between 2010 and 2020.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: LINE_WIND, minWords: 150, focus: ['Intro 1 câu, Overview 2 câu (trend + order)', 'điểm giao cắt Germany vượt Spain', 'Super Boosters'] });

T('t1i', ['Mức 1: *In 2010, X was 10. In 2012, X rose to 20.* (câu đơn từng mốc)', 'Mức 2: nối 2 mốc bằng *before/after + V-ing*, *while/whereas*.', 'Mức 3: gộp **3 giai đoạn** vào 1 câu bằng Boosters 2–4–7, luân phiên để không lặp cấu trúc.']);
A('t1i', { bloom: 'apply', type: 'rewrite', title: 'Booster 2, 3, 4, 6, 7 với số liệu thật', instr: 'Viết MỘT câu theo Booster được chỉ định (dựa vào biểu đồ điện gió).', chart: LINE_WIND,
  items: [
    { q: 'Booster 2 – UK (started at..., after which..., before ending the period at...)', a: ['The amount of wind electricity generated in the UK started at 10 TWh in 2010, after which it experienced a steady rise to 57 TWh in 2018, before ending the period at 75 TWh.'] },
    { q: 'Booster 3 – Spain (..., with a subsequent... and a final...)', a: ['Spain generated 44 TWh of wind power in 2010, with a subsequent rise to 52 TWh in 2014, a slight dip, and a final increase to 56 TWh in 2020.'] },
    { q: 'Booster 4 – Germany (was at..., followed by...)', a: ['The figure for Germany was at 38 TWh in 2010, followed by a significant increase to 131 TWh by the end of the period.'] },
    { q: 'Booster 6 – Denmark so với Spain (Similar changes can be seen in the figure for..., which...)', a: ['Similar changes can be seen in the figure for Denmark, which rose modestly from 8 TWh to 16 TWh over the period.'] },
    { q: 'Booster 7 – Spain 2014–2018 (fluctuated..., ending...)', a: ['The figure for Spain fluctuated in the range from 49 to 52 TWh between 2014 and 2018, before ending the period at 56 TWh.'] },
  ] });
A('t1i', { bloom: 'evaluate', type: 'mcq', title: 'Overview Booster 1', instr: 'Chọn câu Overview đúng khung Booster 1.', chart: LINE_WIND,
  items: [{ q: '', options: [
    'Overall, there was an increase in wind power generation in all four countries, with Germany witnessing the most dramatic rise. In addition, Germany surpassed Spain early in the period and generally had the highest figures.',
    'Overall, there was an increase. Germany was the highest.',
    'Overall, with Germany witnessing, wind power increased the most dramatic rise.'], a: 0 }] });

T('t1b', ['Mức 3: **3 cách viết một câu số liệu tiền**: *The amount of money spent on X was...* / *$1 million was spent on X by...* / *$1 million was expended on X by...*', '**4 cách paraphrase % người**: *the proportion of female MPs* = *the percentage of MPs who are female* = *the share of MPs who are women* = *the percentage of women holding a seat in parliament*.', 'Từ vựng: *hover around, hit a trough of, reach parity with, surpass / overtake*.']);
A('t1b', { bloom: 'apply', type: 'rewrite', title: '3 cách viết câu số liệu tiền', instr: 'Số liệu: *Japanese households spent $2.4 billion on pet food in 2020.* Viết theo cách được yêu cầu.',
  items: [
    { q: 'Cách 1: The amount of money...', a: ['The amount of money spent on pet food by Japanese households in 2020 was $2.4 billion.'] },
    { q: 'Cách 2: bị động, số tiền làm chủ ngữ (spent)', a: ['$2.4 billion was spent on pet food by Japanese households in 2020.'] },
    { q: 'Cách 3: bị động với expended', a: ['$2.4 billion was expended on pet food by households in Japan in 2020.'] },
  ] });
A('t1b', { bloom: 'analyze', type: 'rewrite', title: '4 cách paraphrase % người', instr: 'Paraphrase cụm *the proportion of female engineers* theo 3 cách khác nhau (mỗi ô một cách).',
  items: [
    { q: 'Cách 1 (the percentage of ... who ...)', a: ['the percentage of engineers who are female', 'the percentage of engineers who are women'] },
    { q: 'Cách 2 (the share of ...)', a: ['the share of engineers who are women'] },
    { q: 'Cách 3 (the percentage of women + V-ing)', a: ['the percentage of women working as engineers', 'the percentage of women holding engineering jobs'] },
  ] });
A('t1b', { bloom: 'evaluate', type: 'gap', title: 'Từ vựng xu hướng Mức 3', instr: 'Điền MỘT từ (biểu đồ điện gió).', chart: LINE_WIND,
  items: [
    { q: 'Spain\'s figure ___ around 50 TWh between 2012 and 2018.', a: ['hovered'] },
    { q: 'Germany ___ Spain in 2012 and remained the largest producer thereafter.', a: ['overtook', 'surpassed'] },
    { q: 'Denmark\'s output remained ___ unchanged at around 13–14 TWh from 2014 to 2018.', a: ['virtually', 'almost', 'largely', 'relatively'] },
  ] });

T('t1j', ['Mức 3 cho 5+: gom nhóm trong một câu bằng *respectively* hoặc *while the figures for A, B and C all rose to around...*', 'Mức 3 cho <4: chia theo giai đoạn, **mỗi đoạn so sánh các đường với nhau** trong giai đoạn đó.']);
A('t1j', { bloom: 'apply', type: 'rewrite', title: 'Câu gom nhóm 5+ hạng mục', instr: 'Bảng giờ làm việc nhà (ở trên). Viết MỘT câu gom nhóm theo yêu cầu.', chart: U('t1j').exercises.find(e => e.chart).chart,
  items: [
    { q: 'Gom Sweden, Canada, Japan (dùng respectively)', a: ['Sweden, Canada and Japan recorded the lowest figures in 2020, at 12, 13 and 16 hours respectively.'] },
    { q: 'Gom cả 6 nước về xu hướng (all fell...)', a: ['The time spent on chores fell in all six countries, with the figures for India, Mexico and Italy remaining above 20 hours.'] },
  ] });

T('t1d', ['Mức 3: kết hợp xu hướng và so sánh trong cùng một câu: *Coal, **which remained the largest source in both years**, **saw its share halve** from 55% to 30%.*']);
A('t1d', { bloom: 'apply', type: 'rewrite', title: 'Xu hướng + so sánh trong một câu', instr: 'Biểu đồ 2 năm (ở trên). Viết MỘT câu kết hợp ngôn ngữ xu hướng và so sánh.', chart: U('t1d').exercises.find(e => e.chart)?.chart,
  items: [
    { q: 'Hạng mục lớn nhất và thay đổi của nó', a: ['Coal, which remained the largest energy source in both years, saw its share fall significantly between 2000 and 2020.'] },
    { q: 'Hạng mục tăng nhanh nhất so với hạng mục khác', a: ['Renewables grew faster than any other source, more than doubling their share over the two decades.'] },
  ] });

T('t1k', ['Mức 3: nối dữ liệu thật và dự đoán trong một câu: *Having risen to 54% in 2020, the share in Norway **is projected to reach** 100% by 2035.*', '*Projections show that...*, *is estimated to...*']);
A('t1k', { bloom: 'apply', type: 'rewrite', title: 'Nối quá khứ và dự đoán', instr: 'Biểu đồ xe điện. Viết MỘT câu nối số liệu thật và dự đoán.', chart: U('t1k').exercises[0].chart,
  items: [
    { q: 'Norway: 22% (2015) → 54% (2020) → dự đoán 100% (2035). (Having + V3..., is projected to...)', a: ['Having risen from 22% in 2015 to 54% in 2020, the share of electric cars in Norway is projected to reach 100% by 2035.'] },
    { q: 'USA: 1% → 2% → dự đoán 50% (2035). (Projections show that...)', a: ['Projections show that the USA, where electric cars accounted for only 2% of sales in 2020, will see this figure rise to 50% by 2035.'] },
  ] });

T('t1c', ['Mức 3: luân phiên **7 cấu trúc** cho một cặp số liệu; thêm cấu trúc gộp 3–5 đối tượng: *X is highest, accounting for..., and the figures for A and B are lower, at... and... respectively.* / *..., compared to... in A and... in B. Meanwhile, the figures for C and D are about...*']);
A('t1c', { bloom: 'apply', type: 'rewrite', title: 'Một cặp số liệu, 7 cấu trúc', instr: 'Số liệu: *42% of men and 17% of women in a survey regularly played video games.* Viết theo từng cấu trúc.',
  items: [
    { q: '..., and the figure for... was significantly lower, at...', a: ['The proportion of men who regularly played video games was 42%, and the figure for women was significantly lower, at 17%.'] },
    { q: 'far exceeded that of..., with respective figures being...', a: ['The proportion of men playing video games far exceeded that of women, with respective figures being 42% and 17%.'] },
    { q: 'far exceeded that of..., and the figures were... respectively', a: ['The proportion of men playing video games far exceeded that of women, and the figures were 42% and 17% respectively.'] },
    { q: 'While..., only... did so', a: ['While 42% of the men surveyed regularly played video games, only 17% of women did so.'] },
    { q: 'Số % làm chủ ngữ + compared to only...', a: ['42% of the men surveyed regularly played video games, compared to only 17% of the women asked.'] },
    { q: '(ngoặc đơn) + , which was only...', a: ['The proportion of men playing video games (42%) was far higher than that of women, which was only 17%.'] },
    { q: 'A significant difference can be seen... in that order', a: ['A significant difference can be seen in the percentage of men and women playing video games, which was 42% and 17% in that order.'] },
  ] });
A('t1c', { bloom: 'analyze', type: 'rewrite', title: 'Gộp 3–5 đối tượng trong một hạng mục', instr: 'Số liệu % thu nhập chi cho nhà ở: *Ireland 35%, Netherlands 32%, Belgium 29%, Austria 21%, Portugal 20%.* Viết 1–2 câu gộp đủ 5 nước.',
  items: [{ q: 'Viết 1–2 câu', a: ['Ireland spent the highest proportion of income on housing, at 35%, followed by the Netherlands and Belgium, at 32% and 29% respectively. Meanwhile, the figures for Austria and Portugal were considerably lower, at around 20%.'] }] });

T('t1l', ['Mức 3 cho bảng nhiều thông tin: **chia theo hạng mục** (không theo quốc gia/tuổi), gom số trung bình: *ranging between X and Y*, *both at 71%*.', 'Overview: *Also notable is that there is **a parity in** the percentage of... across all groups, **with the exception of**...*']);
A('t1l', { bloom: 'evaluate', type: 'mcq', title: 'Overview có Similarities (Mức 3)', instr: 'Bảng bằng cấp theo độ tuổi.', chart: TABLE_DEGREE,
  items: [{ q: '', options: [
    'Overall, most residents under 50 held a university degree, while the majority of those aged 65 and over had no qualifications. Also notable is that there was a broad parity in the percentage of high school graduates across the four youngest groups.',
    'Overall, 64% of 25–34-year-olds had a degree, and 60% of people over 65 had no qualification.',
    'Overall, young people are better educated because universities are more accessible today.'], a: 0 }] });
A('t1l', { bloom: 'apply', type: 'rewrite', title: 'Body theo hạng mục, gom nhóm số liệu', instr: 'Viết 2 câu về cột University degree, gom các nhóm tuổi có số liệu gần nhau.', chart: TABLE_DEGREE,
  items: [{ q: 'University degree', a: ['Regarding university education, 64% of residents aged 25–34 held a degree, followed by the 18–24 and 35–49 age groups, at 58% and 57% respectively. The figures for older residents were much smaller, with 39% of 50–64-year-olds and only 18% of those over 65 holding a degree.'] }] });
A('t1l', { bloom: 'create', type: 'write', kind: 'task1', title: 'No change: bảng nhiều thông tin (Band 8)', prompt: 'The table below shows the highest qualification held by residents of a city in 2021, by age group.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: TABLE_DEGREE, minWords: 150, focus: ['chia theo hạng mục', 'Overview: differences + similarities', 'gom số liệu (respectively, both at...)'] });
A('t1l', { bloom: 'create', type: 'write', kind: 'task1', title: 'No change: 2 items (Band 8)', prompt: 'The chart below shows the percentage of teenage boys and girls who regularly took part in five activities in 2022.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.', chart: BAR_SPORT, minWords: 150, focus: ['Body 1: Boys > Girls', 'Body 2: Girls ≥ Boys', '7 cấu trúc so sánh'] });

T('t1g', ['Mức 3: Intro gộp 2 biểu đồ bằng *while*; mỗi câu Overview một biểu đồ; giữ thì phù hợp với từng biểu đồ (Change dùng quá khứ, No change một năm dùng quá khứ đơn).']);
T('t1f', ['Overview Mức 3: *Overall, the X underwent a number of significant changes, **the most important of which are** A and B.*', 'Body: kết hợp vị trí + thay đổi + mục đích: *The woodland in the northeast **was cleared to facilitate the construction of**...*; *... **was removed to allow** the office next to it **to expand**.*']);
A('t1f', { bloom: 'apply', type: 'rewrite', title: 'Câu bản đồ Band 9', instr: 'Viết MỘT câu theo yêu cầu.',
  items: [
    { q: 'Overview: thư viện cũ xây thêm tầng và bãi xe bị bỏ (the most important of which...)', a: ['Overall, the library underwent a number of significant changes, the most important of which are the addition of a new floor and the removal of the car park.'] },
    { q: 'Rừng phía đông nam bị chặt để xây nhà thi đấu (to facilitate the construction of)', a: ['The trees in the southeast were cleared to facilitate the construction of a sports hall.'] },
    { q: 'Phòng in bị dỡ để văn phòng bên cạnh mở rộng (was removed to allow ... to expand)', a: ['The printing room was removed to allow the office next to it to expand.'] },
  ] });

T('t1e', ['Overview Mức 3: *Overall, the process comprises **a number of consecutive steps**, **starting with**..., **through**..., **and ending with**...*', 'Body: bị động + *After being V3*, *..., which moves... to be...*, *Once...*, *before being V3*.']);
A('t1e', { bloom: 'apply', type: 'rewrite', title: 'Overview & câu quy trình Band 9', instr: 'Viết theo yêu cầu (quy trình làm giấy tái chế: thu gom giấy → phân loại → ngâm nước & nghiền thành bột → lọc mực → ép & sấy → cuộn thành giấy mới → giao đến nhà in).',
  items: [
    { q: 'Overview (starting with..., through..., and ending with...)', a: ['Overall, the process comprises a number of consecutive steps, starting with the collection of waste paper, through several cleaning and pulping stages, and ending with the delivery of new paper rolls to printers.'] },
    { q: 'Gộp bước ngâm/nghiền và lọc mực (After being..., ..., which...)', a: ['After being sorted, the paper is soaked in water and turned into pulp, which is then filtered to remove ink.'] },
    { q: 'Gộp bước ép & sấy và cuộn (before being...)', a: ['The clean pulp is pressed and dried before being rolled into new sheets of paper.'] },
  ] });
A('t1e', { bloom: 'analyze', type: 'rewrite', title: 'Natural process: chủ động & thời gian', instr: 'Vòng đời ếch: *eggs (6–21 days) → tadpole (lives in water, ~6 weeks) → tadpole grows legs → froglet → adult frog lays eggs*. Viết theo yêu cầu.',
  items: [
    { q: 'Câu dùng "Lasting for about..., the ... then develops into..."', a: ['Lasting for about six weeks, the tadpole stage ends when the tadpole grows legs and develops into a froglet.'] },
    { q: 'Overview chu trình (cyclical)', a: ['Overall, the life cycle of the frog is a cyclical process consisting of five main stages, beginning with eggs and ending with an adult frog that lays eggs of its own.'] },
  ] });

T('t1m', ['Body 1 (cấu tạo): mô tả **từ ngoài vào trong / từ trên xuống dưới**: *consists of, comprises, is equipped with, is attached to*.', 'Body 2 (vận hành): **nhân – quả**: *As..., ...; This causes...; which in turn...*']);
A('t1m', { bloom: 'apply', type: 'rewrite', title: 'Cấu tạo & vận hành', instr: 'Thiết bị: máy lọc nước bằng năng lượng mặt trời (khung kính phía trên, khay đen chứa nước bẩn ở dưới, máng hứng nước sạch ở cạnh, ống dẫn ra bình). Viết theo yêu cầu.',
  items: [
    { q: 'Body 1: câu mô tả cấu tạo từ trên xuống', a: ['The device consists of a sloping glass cover at the top, a black tray containing dirty water at the bottom, and a collecting channel attached to one side, which is connected to a storage container by a pipe.'] },
    { q: 'Body 2: câu nhân – quả (As..., which in turn...)', a: ['As sunlight heats the black tray, the water evaporates and condenses on the cooler glass, which in turn causes clean droplets to run down into the collecting channel.'] },
  ] });

/* ================= TASK 2 ================= */
T('t2a', ['Mở bài Mức 3: câu 1 dẫn nhập **có lý do/bối cảnh** (*Given..., Of all the..., There is little doubt that...*); câu 2 thesis trả lời trực diện.', 'Ví dụ khung: *Given the [bối cảnh], [vấn đề]. I strongly believe that..., as it benefits not only X but also Y.*']);
A('t2a', { bloom: 'apply', type: 'rewrite', title: 'Mở bài Band 8', instr: 'Viết mở bài 2 câu (dẫn nhập có bối cảnh + thesis) cho đề.',
  items: [
    { q: 'Some people think governments should spend more on teaching adults new job skills rather than on university education for young people. To what extent do you agree or disagree?', a: ['Given the speed at which automation is reshaping the job market, many adults now risk being left behind. While university education remains important, I believe that greater investment in retraining adults is justified, as it benefits not only the workers themselves but also the wider economy.'] },
    { q: 'Many people now shop online rather than in local stores. Is this a positive or negative development?', a: ['There is little doubt that the convenience of online shopping has transformed the way people buy goods. Although this shift offers clear benefits to consumers, I believe its overall impact on local communities is largely negative.'] },
  ] });

T('t2f', ['CC Mức 3: **nominalisation + referencing**: *This predisposition manifests itself in..., The corollary of this would be..., Such a measure...*', 'LR Mức 3: collocation sắc bén: *reap financial rewards, a necessary evil, pale in comparison with, compound the problem, bring to the fore, reverberate through generations, of their own volition*.']);
A('t2f', { bloom: 'apply', type: 'gap', title: 'Collocation học thuật', instr: 'Điền MỘT từ.',
  items: [
    { q: 'Countries that invest in adult education will ___ financial rewards in the long term.', a: ['reap'] },
    { q: 'For many commuters, the car remains a necessary ___.', a: ['evil'] },
    { q: 'The lack of affordable housing only serves to ___ the problem of urban poverty.', a: ['compound'] },
    { q: 'The pandemic brought the importance of public health to the ___.', a: ['fore'] },
    { q: 'Many volunteers choose to help of their own ___.', a: ['volition', 'accord'] },
    { q: 'Poor parenting can ___ through generations.', a: ['reverberate'] },
  ] });
A('t2f', { bloom: 'evaluate', type: 'mcq', title: 'Ba mức Coherence & Cohesion', instr: 'Xếp đoạn nào đạt Mức 3?',
  items: [{ q: '', options: [
    'Firstly, cars cause pollution. Secondly, cars cause traffic. Moreover, cars are expensive.',
    'Cars cause pollution. They also lead to traffic jams, and this makes commuting stressful.',
    'Private cars are a major source of urban pollution. Compounding the problem is the congestion they create, which not only lengthens commutes but also increases fuel consumption. The corollary of this is a city that is both dirtier and less productive.'], a: 2 }] });

T('t2b', ['1-idea Mức 3: TS → **This is because...** → **Consider X, which...** / *This can be seen in the case of...* → **This example sheds light on why...** / *The corollary of this would be...*', '2-idea Mức 3: *The key argument here is that...* (ý 1) → giải thích bằng ví dụ cụ thể → *Furthermore, exposure to... helps...* (ý 2) → kết quả.']);
A('t2b', { bloom: 'apply', type: 'rewrite', title: 'Hoàn thiện đoạn 1-idea Band 8', instr: 'Đề: *Historic town centres should only allow new buildings that match the traditional style.* Viết câu theo vai trò được yêu cầu.',
  items: [
    { q: 'Topic sentence (1 ý: lợi ích du lịch)', a: ['If new buildings conform to the traditional style, the uniform appearance of a historic centre could bring considerable economic benefits through tourism.'] },
    { q: 'Example (Consider X, which...) — ví dụ phố cổ Hà Nội hoặc một thị trấn châu Âu', a: ['Consider Hanoi\'s Old Quarter, which attracts millions of visitors largely because of its tube houses and narrow streets; allowing glass towers there could damage both its character and its tourist appeal.'] },
    { q: 'Link (This example sheds light on why...)', a: ['This example sheds light on why it makes sense to require residents to follow traditional styles in culturally important areas.'] },
  ] });
A('t2b', { bloom: 'create', type: 'write', kind: 'task2', title: 'Đoạn 1-idea Band 8', prompt: 'Đề: *Governments should invest more in public libraries than in new sports stadiums. To what extent do you agree or disagree?*\n\nViết **một đoạn 1-idea** (130–170 từ) theo khung: Topic sentence → This is because... → Consider X, which... → This example sheds light on why...', minWords: 120, focus: ['khung 1-idea của khoá học', 'ví dụ cụ thể có tên', 'câu link chốt lại'] });

T('t2g', ['Bộ đầy đủ: **Point**: *Granted, one might argue that... / Admittedly, some people argue that...* → **Explain**: *This is predicated on / based on the assumption that... / This argument presupposes that...* → **Counter**: *However, this line of reasoning is not sound because it fails to factor in... / However, this reasoning is not grounded in facts as...*', 'Phần counter Mức 3 cần **bằng chứng/ví dụ cụ thể** và một câu kết luận về hệ quả.']);
A('t2g', { bloom: 'apply', type: 'rewrite', title: 'Counter-argument đủ 3 bước', instr: 'Viết đủ 3 câu Point → Explain → Counter cho đề.',
  items: [
    { q: 'Đề: *Physical classrooms are no longer necessary because students can learn everything online.* (Bạn: không đồng ý)', a: ['Granted, one might argue that physical classrooms are obsolete. This is predicated on the assumption that every student has a reliable device and the self-discipline to study alone. However, this line of reasoning is not sound because it fails to factor in the many learners, especially younger children, who depend on face-to-face guidance and the structure that a school day provides.'] },
    { q: 'Đề: *Cash will soon disappear completely.* (Bạn: không đồng ý)', a: ['Admittedly, some people argue that cash will soon vanish. This argument presupposes that digital payments are universally accessible. However, this reasoning is not grounded in facts, as millions of elderly and rural people still lack bank accounts or smartphones and continue to rely on cash for daily purchases.'] },
  ] });
A('t2g', { bloom: 'evaluate', type: 'mcq', title: 'Câu counter nào đạt Mức 3?', instr: 'Point: *Granted, one might argue that public museums should charge entry fees.*',
  items: [{ q: '', options: [
    'However, I think museums should be free.',
    'However, this line of reasoning is not sound because it fails to factor in the educational value of free access: when national museums in some countries removed fees, visitor numbers among low-income families rose sharply, which suggests that charges exclude precisely those who stand to benefit most.',
    'However, museums are good for culture and history and people like them.'], a: 1 }] });
A('t2g', { bloom: 'create', type: 'write', kind: 'task2', title: 'Bài Opinion có counter-argument (Band 8)', prompt: 'Some people say that printed books will soon be replaced entirely by digital media. To what extent do you agree or disagree?\n\nWrite at least 250 words. Dùng một đoạn counter-argument đủ 3 bước.', minWords: 250, focus: ['Granted... This is predicated on... However, this line of reasoning...', 'bằng chứng trong phần counter', 'quan điểm nhất quán'] });

T('t2h', ['Mức 3: không chỉ tránh 12 lỗi mà còn **giữ câu 20–35 chữ**, đa dạng độ dài; thay *etc.* bằng *countless...* hoặc *such as A and B*.']);
A('t2h', { bloom: 'analyze', type: 'rewrite', title: 'Sửa đoạn vi phạm nhiều no-nos', instr: 'Viết lại đoạn cho sạch 12 điều cấm kỵ, giữ ý.',
  items: [{ q: 'Social media is bad. It wastes time. It causes stress. And it doesn\'t help students study, they spend hours on TikTok, Facebook, Instagram etc and their grades go down and their parents are worried and teachers are also worried so the school should ban phones.', a: ['Social media can harm students in several ways. Apart from wasting valuable time, it often causes stress and distracts learners from their studies. Many students spend hours on platforms such as TikTok and Instagram, which can lead to lower grades and growing concern among parents and teachers. For this reason, schools may need to restrict phone use during lessons.'] }] });

T('t2i', ['Should – Totally Agree: Body 1 lợi ích **cá nhân**, Body 2 lợi ích **xã hội/kinh tế**; mở bài: *...as it benefits not only the recipients but also the country as a whole.*', 'Should – Disagree: Body 1 **counter-argument** bẻ tính khả thi; Body 2 nêu tác hại.', 'A better than B: Hướng 1 (A tốt hơn): Body 1 lợi thế A; Body 2 **counter-argument** về B. Hướng 2: mỗi bên có giá trị riêng.', 'Each better for a group: *this idea is only relevant to [nhóm thiểu số], who...; for the vast majority of people, ...*']);
A('t2i', { bloom: 'apply', type: 'rewrite', title: 'Thesis "Each is better for a certain group"', instr: 'Viết thesis theo khung *only relevant to..., who...; for the vast majority..., ...*',
  items: [
    { q: 'Đề: *It is better for students to take a gap year before university than to start immediately.*', a: ['Personally, I believe that a gap year is only beneficial for students with financial support, who can afford to travel or volunteer without earning; for the vast majority of students, it is wiser to start university straight away.'] },
    { q: 'Đề: *Living in the countryside is better than living in a city.*', a: ['In my view, rural life is only preferable for retirees and remote workers, who no longer depend on urban job markets; for the vast majority of young people, cities offer far better opportunities.'] },
  ] });
A('t2i', { bloom: 'create', type: 'write', kind: 'task2', title: 'Should – Totally Agree (Band 8)', prompt: 'Some people think that the government should provide free public transport for all citizens. To what extent do you agree or disagree?\n\nWrite at least 250 words. Theo hướng đồng ý hoàn toàn: Body 1 lợi ích cá nhân, Body 2 lợi ích xã hội/kinh tế.', minWords: 250, focus: ['not only... but also... ở thesis', 'Body 1 cá nhân, Body 2 xã hội', 'ví dụ cụ thể'] });
A('t2i', { bloom: 'create', type: 'write', kind: 'task2', title: 'Each is better for a certain group (Band 8)', prompt: 'It is better for people to work for themselves than to work for a company. To what extent do you agree or disagree?\n\nWrite at least 250 words.', minWords: 250, focus: ['phân nhóm đối tượng', 'đa số vs thiểu số', 'quan điểm rõ'] });

T('t2c', ['"The only way" luôn **Disagree**: mở bài *...many believe that only by X can Y be achieved. However, in this essay, I will challenge this school of thought.*']);
A('t2c', { bloom: 'apply', type: 'rewrite', title: 'Mở bài "The only way" (Mức 3)', instr: 'Viết mở bài theo khung *Given..., many believe that only by... can... However, in this essay, I will challenge this school of thought.*',
  items: [
    { q: 'Đề: *The only way to reduce crime among young people is to impose harsher prison sentences.*', a: ['Given the rising number of offences committed by teenagers, many people believe that only by imposing harsher prison sentences can youth crime be reduced. However, in this essay, I will challenge this school of thought.'] },
    { q: 'Đề: *The only way to protect endangered animals is to ban all hunting.*', a: ['Given the alarming decline of many wildlife species, many believe that only by banning hunting entirely can endangered animals be protected. However, in this essay, I will challenge this school of thought.'] },
  ] });

T('t2m', ['Mức 3 hướng **No**: Body 1 chỉ ra X **không chạm đến gốc rễ** (nguyên nhân thật sự nằm ở đâu); Body 2 nêu Y tốt hơn và so sánh trực tiếp.', 'Mức 3 hướng **Yes**: so sánh X với **các lựa chọn khác cụ thể** (cảnh sát, cha mẹ, thầy cô...) để chứng minh X vượt trội.']);
A('t2m', { bloom: 'apply', type: 'rewrite', title: 'Câu chứng minh "không chạm gốc rễ"', instr: 'Đề: *The best way to reduce plastic pollution is to charge customers for plastic bags.* Viết câu theo yêu cầu (hướng No).',
  items: [
    { q: 'Body 1: X không giải quyết gốc rễ', a: ['Charging for plastic bags may reduce their use, but it fails to address the root of the problem, since bags make up only a small share of plastic waste compared with packaging produced by manufacturers.'] },
    { q: 'Body 2: Y tốt hơn, so sánh trực tiếp', a: ['A far more effective approach would be to require manufacturers to use recyclable packaging, as this would cut plastic waste at its source rather than relying on individual shoppers.'] },
  ] });
A('t2m', { bloom: 'create', type: 'write', kind: 'task2', title: '"The best" – hướng Yes (Band 8)', prompt: 'Some people believe that former drug addicts are the best people to educate teenagers about the dangers of drugs. To what extent do you agree or disagree?\n\nWrite at least 250 words. Theo hướng đồng ý, so sánh với giáo viên, cha mẹ và cảnh sát.', minWords: 250, focus: ['so sánh với lựa chọn khác', 'trải nghiệm thật', 'quan điểm rõ'] });

T('t2d', ['Discussion Mức 3: mở bài *Opinions are divided on whether... I believe that...*; Body 1 (view không ủng hộ) có thể **kèm counter ngay trong đoạn**.', 'Outweigh Mức 3: Body 1 không chỉ liệt kê bất lợi mà **address/mitigate** chúng (*While..., this problem can be mitigated by...*).']);
A('t2d', { bloom: 'apply', type: 'rewrite', title: 'Address the problems (outweigh)', instr: 'Đề: *More people work and study from home. Do the advantages outweigh the disadvantages?* Viết câu nêu bất lợi rồi làm suy yếu nó.',
  items: [
    { q: 'Bất lợi: cô lập xã hội', a: ['While working from home may leave some employees feeling isolated, this problem can be largely mitigated by regular video meetings and occasional in-person team days.'] },
    { q: 'Bất lợi: khó tập trung ở nhà', a: ['Admittedly, distractions at home can reduce concentration; however, setting up a dedicated workspace and fixed working hours can address this issue effectively.'] },
  ] });
A('t2d', { bloom: 'create', type: 'write', kind: 'task2', title: 'Discussion (Band 8)', prompt: 'Some people believe that, to protect local culture, tourism should be restricted in some areas. Others think that cultural change is inevitable and restricting tourism brings no benefits. Discuss both views and give your own opinion.\n\nWrite at least 250 words.', minWords: 250, focus: ['Opinions are divided on whether...', 'Body 1 view không ủng hộ + counter', 'Body 2 view ủng hộ'] });

T('t2j', ['Mức 3: chia 2 body theo **2 nhóm đối tượng** nêu trong đề; trong mỗi đoạn xử lý rủi ro bằng *Of course... However, ...*']);
A('t2j', { bloom: 'create', type: 'write', kind: 'task2', title: 'Positive/negative chia nhóm (Band 8)', prompt: 'It is now possible for both researchers and tourists to visit deep-sea environments using new submarine technology. Is this a positive or negative development?\n\nWrite at least 250 words.', minWords: 250, focus: ['Body 1 tourists, Body 2 researchers', 'Of course... However...', 'quan điểm rõ'] });

T('t2e', ['**Make your solutions better!** (Band 6 → 8.5): Giải pháp → **rào cản** khi thực hiện (*However, X would be reluctant to... due to...*) → **bước bổ trợ** gỡ rào cản (*Thus, the government would need to...*).']);
A('t2e', { bloom: 'apply', type: 'rewrite', title: 'Giải pháp → rào cản → bước bổ trợ', instr: 'Viết 3 câu (giải pháp, rào cản, bước bổ trợ) cho vấn đề.',
  items: [
    { q: 'Vấn đề: chênh lệch mức sống thành thị – nông thôn. Giải pháp: khuyến khích doanh nghiệp về nông thôn.', a: ['One solution would be to offer tax incentives to companies that relocate to rural areas. However, many firms would be reluctant to move due to poor infrastructure and a shortage of skilled workers. Thus, the government would also need to invest in roads, internet access and vocational training to make such relocation viable.'] },
    { q: 'Vấn đề: học sinh thiếu kỹ năng thực tế. Giải pháp: thực tập bắt buộc.', a: ['Schools could make work placements compulsory for older students. However, many small businesses may lack the time or staff to supervise interns. To overcome this, local authorities could subsidise companies that take part and provide them with simple mentoring guidelines.'] },
  ] });
A('t2e', { bloom: 'create', type: 'write', kind: 'task2', title: 'Problems – Solutions (Band 8)', prompt: 'In many developing countries, young people are leaving rural areas to work in cities. What problems does this cause, and how can these problems be solved?\n\nWrite at least 250 words. Mỗi giải pháp phải có rào cản và bước bổ trợ.', minWords: 250, focus: ['make your solutions better', 'giải pháp khớp vấn đề', 'ai làm, làm gì, kết quả'] });

T('t2k', ['Causes Mức 3: chia nguyên nhân theo góc nhìn **nước phát triển vs đang phát triển** để ý sâu hơn.', 'Effects Mức 3: hệ quả lên **kinh tế** và **chất lượng sống**, có chuỗi nhân – quả 2 bước (*..., which in turn...*).']);
A('t2k', { bloom: 'apply', type: 'rewrite', title: 'Nguyên nhân theo 2 góc nhìn', instr: 'Đề: *Why are fewer students choosing science subjects?* Viết 1 câu cho mỗi góc nhìn.',
  items: [
    { q: 'Nước phát triển', a: ['In developed countries, many students are drawn to well-paid careers in finance and media, which appear more glamorous and less academically demanding than science.'] },
    { q: 'Nước đang phát triển', a: ['In developing countries, a shortage of laboratories and qualified science teachers often makes these subjects seem difficult and abstract, discouraging students from pursuing them.'] },
    { q: 'Hệ quả 2 bước (which in turn)', a: ['A shortage of science graduates slows technological innovation, which in turn weakens a country\'s long-term economic competitiveness.'] },
  ] });
A('t2k', { bloom: 'create', type: 'write', kind: 'task2', title: 'Causes – Effects (Band 8)', prompt: 'In many countries, fewer students are choosing to study science subjects at university. Why is this the case? What effects does this have on society?\n\nWrite at least 250 words.', minWords: 250, focus: ['nguyên nhân theo 2 góc nhìn', 'hệ quả kinh tế & chất lượng sống', 'chuỗi nhân – quả'] });

T('t2l', ['Sửa bài Mức 3: đi từ **dàn ý → câu chủ đề → luận cứ**, rồi nâng từ vựng và **rút gọn câu** để cô đọng (bỏ từ thừa, dùng phân từ, mệnh đề quan hệ rút gọn).']);
A('t2l', { bloom: 'evaluate', type: 'rewrite', title: 'Cô đọng câu (Lesson 20)', instr: 'Viết lại cho cô đọng hơn mà giữ nghĩa (dùng phân từ / mệnh đề rút gọn / danh hoá).',
  items: [
    { q: 'There are many people who think that the government should be the one that pays for the education of adults who cannot read.', a: ['Many people think the government should fund literacy education for adults.'] },
    { q: 'Because of the fact that technology is developing very fast, there are many jobs that are being replaced by machines.', a: ['Given the rapid pace of technological change, many jobs are being replaced by machines.'] },
  ] });
A('t2l', { bloom: 'create', type: 'write', kind: 'task2', title: '2-part question (Band 8)', prompt: 'More and more people are spending large sums of money on cosmetic procedures to look younger. Why do people want to look younger? Is this a positive or negative development?\n\nWrite at least 250 words. Mở bài trả lời ngắn cả 2 câu hỏi.', minWords: 250, focus: ['mở bài trả lời cả 2 câu', 'Body 1 câu 1, Body 2 câu 2', 'check-list 5 câu'] });
A('g2', { bloom: 'apply', type: 'rewrite', title: 'Soát mạo từ & hoà hợp (Mức 3)', instr: 'Sửa MỌI lỗi mạo từ, số ít/số nhiều và hoà hợp chủ–vị.',
  items: [
    { q: 'The number of student who studies abroad have increased, and the most of them choose the English-speaking country.', a: ['The number of students who study abroad has increased, and most of them choose English-speaking countries.'] },
    { q: 'A knowledge of foreign language give young people the advantage in the job market.', a: ['Knowledge of a foreign language gives young people an advantage in the job market.'] },
    { q: 'Each of the policy have the different effect on the economy.', a: ['Each of the policies has a different effect on the economy.'] },
  ] });
A('t1g', { bloom: 'apply', type: 'rewrite', title: 'Intro + Overview Mixed (Mức 3)', instr: 'Biểu đồ ở bài trên (khách đến Đà Nẵng + mục đích chuyến đi). Viết theo yêu cầu.', chart: U('t1g').exercises.find(e => e.chart) && U('t1g').exercises.find(e => e.chart).chart,
  items: [
    { q: 'Intro gộp 2 biểu đồ (while)', a: ['The line graph illustrates how many international visitors came to Da Nang between 2015 and 2023, while the pie chart shows the main reasons for their visits.'] },
    { q: 'Overview: mỗi câu một biểu đồ, không số liệu', a: ['Overall, international arrivals to Da Nang grew strongly until 2019, collapsed in 2021 and then recovered to almost their earlier peak. Regarding the purpose of visits, leisure was by far the most common reason.'] },
  ] });
})();
