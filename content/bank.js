/* Trình đọc ngân hàng bài tập dạng văn bản gọn.
   @unitId                         → chọn chủ đề
   #bloom lv type Tiêu đề | Hướng dẫn
   mcq:     câu hỏi :: +đáp án đúng || sai || sai   (câu hỏi có thể để trống)
   gap:     câu có ___ = đáp án / đáp án khác
   rewrite: đề => câu mẫu / câu mẫu khác
   match:   vế trái => vế phải
   order:   cụm 1 / cụm 2 / cụm 3   (đúng thứ tự)
   write:   #create lv write Tiêu đề | minWords | trọng tâm 1; trọng tâm 2 | TÊN_BIỂU_ĐỒ (tuỳ chọn)
            các dòng tiếp theo là đề bài
   Dòng bắt đầu bằng // là ghi chú. */
window.KL_BANK = function (text, charts = {}) {
  const U = id => window.UNITS.find(u => u.id === id);
  let unit = null, ex = null;
  const hash = s => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
  const flush = () => {
    if (!ex || !unit) return;
    if (ex.type === 'write') { ex.prompt = ex._lines.join('\n').trim(); }
    delete ex._lines;
    const ok = ex.type === 'write' ? ex.prompt : ex.type === 'match' ? ex.pairs.length > 1 : ex.items.length;
    if (ok) unit.exercises.push(ex);
    ex = null;
  };
  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('//')) { if (ex && ex.type === 'write' && !line.startsWith('//')) ex._lines.push(''); continue; }
    if (line.startsWith('@')) { flush(); unit = U(line.slice(1).trim()); if (!unit) console.warn('KL_BANK: không thấy chủ đề', line); continue; }
    const h = line.match(/^#(remember|understand|apply|analyze|evaluate|create)\s+([123])\s+(mcq|gap|rewrite|match|order|write)\s+(.*)$/);
    if (h) {
      flush();
      const [, bloom, lv, type, rest] = h; const parts = rest.split('|').map(s => s.trim());
      ex = { bloom, lv: +lv, type, title: parts[0], _lines: [] };
      if (type === 'write') {
        ex.kind = unit.stage === 'grammar' ? 'grammar' : unit.stage;
        ex.minWords = +parts[1] || (ex.kind === 'task2' ? 250 : ex.kind === 'task1' ? 150 : 80);
        ex.focus = (parts[2] || '').split(';').map(s => s.trim()).filter(Boolean);
        if (parts[3]) { ex.chart = charts[parts[3]]; if (!ex.chart) console.warn('KL_BANK: thiếu biểu đồ', parts[3]); }
      } else {
        ex.instr = parts[1] || '';
        if (type === 'match') ex.pairs = []; else ex.items = [];
      }
      continue;
    }
    if (!ex) continue;
    const t = ex.type;
    if (t === 'write') { ex._lines.push(raw.replace(/^\s+/, '')); continue; }
    if (t === 'mcq') {
      const i = line.indexOf('::'); const q = i < 0 ? '' : line.slice(0, i).trim();
      let opts = (i < 0 ? line : line.slice(i + 2)).split('||').map(s => s.trim());
      let a = opts.findIndex(o => o.startsWith('+')); if (a < 0) a = 0;
      opts = opts.map(o => o.replace(/^\+\s*/, ''));
      const k = hash(ex.title + line) % opts.length; const o = opts.slice(k).concat(opts.slice(0, k));
      const sp = o.map(x => x.split(' ## ')); const opt2 = sp.map(x => x[0].trim()); const note = sp.map(x => x[1]).find(Boolean);
      ex.items.push({ q, options: opt2, a: (a - k + o.length) % o.length, ex: note });
    } else if (t === 'gap') {
      const i = line.lastIndexOf(' = '); if (i < 0) continue;
      ex.items.push({ q: line.slice(0, i).trim(), a: line.slice(i + 3).split(' / ').map(s => s.trim()) });
    } else if (t === 'rewrite') {
      const i = line.indexOf(' => '); if (i < 0) continue;
      ex.items.push({ q: line.slice(0, i).trim(), a: line.slice(i + 4).split(' / ').map(s => s.trim()) });
    } else if (t === 'match') {
      const i = line.indexOf(' => '); if (i < 0) continue;
      ex.pairs.push({ l: line.slice(0, i).trim(), r: line.slice(i + 4).trim() });
    } else if (t === 'order') {
      ex.items.push({ words: line });
    }
  }
  flush();
};
