"""Gộp index.html + style.css + content/*.js + app.js thành một file luyen-viet-ielts.html."""
import re, pathlib
root = pathlib.Path(__file__).parent
import hashlib
# 1) Gắn ?v=<hash> vào từng file trong index.html để trình duyệt luôn tải bản mới cùng lúc
idx = root / 'index.html'
src_html = idx.read_text(encoding='utf-8')
def stamp(m):
    attr, path = m.group(1), m.group(2)
    h = hashlib.sha1((root / path).read_bytes()).hexdigest()[:8]
    return f'{attr}="{path}?v={h}"'
src_html = re.sub(r'(src|href)="((?:content/)?[\w.-]+\.(?:js|css))(?:\?v=\w+)?"', stamp, src_html)
idx.write_text(src_html, encoding='utf-8')
# 2) Bản một file
html = re.sub(r'\?v=\w+"', '"', src_html)
html = html.replace('<link rel="stylesheet" href="style.css">', '<style>\n' + (root / 'style.css').read_text(encoding='utf-8') + '\n</style>')
def inline(m):
    src = m.group(1)
    return '<script>\n' + (root / src).read_text(encoding='utf-8').replace('</script', '<\\/script') + '\n</script>'
html = re.sub(r'<script src="([^"]+)"></script>', inline, html)
out = root / 'dist' / 'luyen-viet-ielts.html'
out.parent.mkdir(exist_ok=True)
out.write_text(html, encoding='utf-8')
print(out, len(html))
