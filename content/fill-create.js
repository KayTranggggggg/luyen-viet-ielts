/* Bậc Create – Mức 1 (Band 5–6): bài viết có hướng dẫn, ngắn hơn, có khung câu gợi ý. Dựng từ đề Create sẵn có của từng chủ đề. */
(function () {
const lvOf = e => e.lv || (e.bloom === 'remember' || e.bloom === 'understand' ? 1 : 2);
const STARTERS = {
  grammar: 'Suggested frame: *In my opinion, ... because ... / For example, ... / As a result, ...*',
  task1: 'Suggested frame:\n- Introduction: *The [chart/graph/table/diagram/maps] illustrate(s) ...*\n- Overview: *Overall, it is clear that ... In addition, ...*',
  task2: 'Suggested frame:\n- Introduction: *It is often argued that ... In my opinion, ...*\n- Body: *The main reason is that ... This is because ... For example, ... Therefore, ...*',
};
const TASK = {
  grammar: ['Write **3–5 sentences** (about 40–60 words) for the prompt below. Focus on using the lesson\'s structures correctly; long sentences are not needed yet.', 40, ['the target structures are correct', 'verbs are conjugated correctly', 'sentences are clear']],
  task1: ['Write only the **Introduction + Overview** (about 50–70 words) for the prompt below. Do not put figures in the Overview.', 45, ['paraphrase of the prompt', 'The Overview has the main trends/features', 'no figures in the overview']],
  task2: ['Write only the **Introduction + ONE body paragraph** (about 120–150 words) for the prompt below.', 110, ['The Introduction has a clear position', 'Topic sentence → explanation → example', 'no contractions']],
};
for (const u of window.UNITS) {
  const src = u.exercises.find(e => e.bloom === 'create' && e.type === 'write' && lvOf(e) === 2) || u.exercises.find(e => e.bloom === 'create' && e.type === 'write');
  if (!src) continue;
  const kind = src.kind || 'grammar';
  const [lead, minWords, focus] = TASK[kind] || TASK.grammar;
  const ex = { bloom: 'create', lv: 1, type: 'write', kind, title: 'Guided writing: ' + src.title.replace(/\s*\(Band 8[^)]*\)|\s*\((?:Mức|Level) \d\)/g, ''),
    prompt: lead + '\n\n' + src.prompt + '\n\n' + (STARTERS[kind] || STARTERS.grammar), minWords, focus };
  if (src.chart) ex.chart = src.chart;
  u.exercises.push(ex);
}
})();
