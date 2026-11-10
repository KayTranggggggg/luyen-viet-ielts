# Luyện Viết IELTS (Bloom · Gemini)

App cá nhân luyện IELTS Writing: Grammar → Task 1 → Task 2, mỗi bài học đi qua 6 bậc Bloom
(Remember → Understand → Apply → Analyze → Evaluate → Create). Bài khách quan chấm ngay trên máy;
bài viết câu/đoạn/bài luận do Gemini chấm, chữa lỗi, ước tính band.

## Chạy
- Cách nhanh: mở `luyen-viet-ielts.html` (một file duy nhất) bằng Chrome/Edge.
- Bấm **⚙ API key**, dán Gemini API key (tạo miễn phí ở https://aistudio.google.com/apikey), bấm **Thử kết nối**.
- Nếu trình duyệt chặn gọi API khi mở file trực tiếp, chạy server tĩnh: `python -m http.server 8000` trong thư mục này rồi mở http://localhost:8000.

## Dữ liệu
Key, tiến độ, bài Gemini sinh thêm và lịch sử chấm đều lưu trong localStorage của trình duyệt.
Dùng **Sao lưu dữ liệu / Khôi phục** trong hộp cài đặt để chuyển sang máy khác.

## Sửa nội dung
Nội dung nằm ở `content/grammar.js`, `content/task1.js`, `content/task2.js`. Mỗi bài tập có `bloom` và `type`:
`mcq`, `gap` (dùng `___`), `match`, `order` (cụm cách nhau bởi ` / `), `rewrite` (AI chấm), `write` (AI chấm, `kind`: grammar/task1/task2).
Task 1 hỗ trợ biểu đồ `line`, `bar`, `pie`, `table`, `process`, `map`. Sau khi sửa, chạy `python build.py` để tạo lại file gộp.
