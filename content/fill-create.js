/* Bậc Create – Mức 1 (Band 5–6): bài viết có hướng dẫn, ngắn hơn, có khung câu gợi ý. Dựng từ đề Create sẵn có của từng chủ đề. */
(function () {
const lvOf = e => e.lv || (e.bloom === 'remember' || e.bloom === 'understand' ? 1 : 2);
const STARTERS = {
  grammar: 'Khung gợi ý: *In my opinion, ... because ... / For example, ... / As a result, ...*',
  task1: 'Khung gợi ý:\n- Introduction: *The [chart/graph/table/diagram/maps] illustrate(s) ...*\n- Overview: *Overall, it is clear that ... In addition, ...*',
  task2: 'Khung gợi ý:\n- Introduction: *It is often argued that ... In my opinion, ...*\n- Body: *The main reason is that ... This is because ... For example, ... Therefore, ...*',
};
const TASK = {
  grammar: ['Viết **3–5 câu** (khoảng 40–60 từ) theo đề dưới đây. Tập trung dùng đúng cấu trúc của bài, chưa cần câu dài.', 40, ['đúng cấu trúc trọng tâm', 'đúng chia động từ', 'câu rõ nghĩa']],
  task1: ['Chỉ viết **Introduction + Overview** (khoảng 50–70 từ) cho đề dưới đây. Không đưa số liệu vào Overview.', 45, ['paraphrase đề', 'Overview có xu hướng/đặc điểm chính', 'không số liệu trong Overview']],
  task2: ['Chỉ viết **Introduction + MỘT đoạn thân bài** (khoảng 120–150 từ) cho đề dưới đây.', 110, ['Introduction có quan điểm rõ', 'Topic sentence → giải thích → ví dụ', 'không viết tắt']],
};
for (const u of window.UNITS) {
  const src = u.exercises.find(e => e.bloom === 'create' && e.type === 'write' && lvOf(e) === 2) || u.exercises.find(e => e.bloom === 'create' && e.type === 'write');
  if (!src) continue;
  const kind = src.kind || 'grammar';
  const [lead, minWords, focus] = TASK[kind] || TASK.grammar;
  const ex = { bloom: 'create', lv: 1, type: 'write', kind, title: 'Viết có hướng dẫn: ' + src.title.replace(/\s*\(Band 8[^)]*\)|\s*\(Mức \d\)/g, ''),
    prompt: lead + '\n\n' + src.prompt + '\n\n' + (STARTERS[kind] || STARTERS.grammar), minWords, focus };
  if (src.chart) ex.chart = src.chart;
  u.exercises.push(ex);
}
})();
