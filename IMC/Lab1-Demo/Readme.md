![alt text](image.png)

🎯 TỔNG QUAN: CÁC “ĐÒN BẨY” TẠO CHUYỂN ĐỘNG
Đòn bẩy	Thuộc tính CSS
Độ mờ	opacity
Vị trí	transform: translate()
Kích thước	transform: scale()
Màu sắc	background-color
(nâng cao)	kết hợp nhiều đòn bẩy
1️⃣ ĐỘ MỜ – OPACITY (Fade In / Fade Out)
📘 Giải thích
opacity nhận giá trị từ 0 → 1
Thường dùng cho: load trang, popup, banner
🧪 DEMO 1: Fade In khi load trang
STEP 1 – HTML
<div class="box fade"></div>
STEP 2 – CSS cơ bản
.box {
  width: 120px;
  height: 120px;
  background: #4a90e2;
}
STEP 3 – Animation
.fade {
  animation: fadeIn 1.2s ease-in forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
✅ Giảng trên lớp:
Giải thích forwards
Thử đổi 1.2s → 3s
🧩 BÀI TẬP
Tạo 3 khối xuất hiện lần lượt bằng animation-delay
2️⃣ VỊ TRÍ – POSITION (Translate)
📘 Giải thích
Không dùng left/top → dùng transform: translate()
Mượt hơn, tối ưu hiệu năng
🧪 DEMO 2: Slide từ trái sang phải
HTML
<div class="box move"></div>
CSS
.move {
  animation: slideIn 1s ease-out forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(-200px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
🎓 GV nhấn mạnh:
Vì sao thêm opacity → chuyển động “có hồn” hơn
🧩 BÀI TẬP
Slide từ dưới lên + delay 0.5s
3️⃣ KÍCH THƯỚC – SIZE (Scale)
📘 Giải thích
scale(1) = kích thước gốc
Hay dùng cho hover, button, card
🧪 DEMO 3: Phóng to khi xuất hiện
CSS
.scale {
  animation: zoomIn 0.8s ease-out forwards;
}

@keyframes zoomIn {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
📌 Giảng thêm:
scale(1.2) → cảm giác “nảy”
Kết hợp ease-out
🧩 BÀI TẬP
Hover vào thẻ → phóng to 110%
4️⃣ MÀU SẮC – COLOR
📘 Giải thích
background-color có thể transition
Dùng cho hover, trạng thái active
🧪 DEMO 4: Đổi màu mượt
CSS
.color {
  background: #3498db;
  transition: background-color 0.5s ease;
}

.color:hover {
  background: #e74c3c;
}
🎓 GV mở rộng:
Thêm border-radius
So sánh có / không transition
🧩 BÀI TẬP
Hover đổi màu + bo góc + scale nhẹ
5️⃣ KẾT HỢP – “ĐÒN BẨY KÉP” (RẤT QUAN TRỌNG)
⛔ Dạy animation mà không dạy kết hợp là thiếu.
🧪 DEMO 5: Slide + Fade + Scale
.combo {
  animation: comboIn 1s ease-out forwards;
}

@keyframes comboIn {
  from {
    transform: translateY(40px) scale(0.8);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

🧩 BÀI TẬP LỚN (CUỐI BUỔI) 🔥 
Tạo card sản phẩm:
Load: slide + fade
Hover: scale + đổi màu
Có delay từng card


-----------

🔁 CÁCH LÀM ANIMATION LẶP LẠI
Trong CSS, để animation chạy lặp, ta dùng:
animation-iteration-count
1️⃣ LẶP VÔ HẠN (PHỔ BIẾN NHẤT)
👉 Chỉ cần thêm infinite
✅ Ví dụ: Fade lặp mãi
.fade {
  animation: fadeIn 2s ease-in infinite;
}
📌 Kết quả:
Mờ → rõ → mờ → rõ… liên tục
2️⃣ LẶP CÓ SỐ LẦN CỤ THỂ
Ví dụ: chạy đúng 3 lần
.move {
  animation: slideIn 1s ease-out 3;
}
👉 Phù hợp cho:
Banner
Intro chạy vài lần rồi dừng
3️⃣ LẶP QUA LẠI (RẤT ĐẸP) – animation-direction
Nếu chỉ lặp mà không có direction → chạy xong là nhảy về đầu (hơi gắt).
👉 Giải pháp: alternate
Ví dụ: Zoom in – zoom out
.scale {
  animation: zoomIn 0.8s ease-in-out infinite alternate;
}
📌 Hiệu ứng:
Phóng to → thu nhỏ → phóng to → thu nhỏ
Mượt, dễ nhìn
4️⃣ LẶP CÓ NGHỈ NHỊP – animation-delay
Ví dụ: combo lặp sau mỗi 1s
.combo {
  animation: comboIn 1.2s ease-out infinite alternate;
  animation-delay: 1s;
}
🎓 GV giải thích:
Delay chỉ áp dụng lần đầu
Muốn nghỉ giữa các vòng → dùng keyframes (nâng cao)
5️⃣ KẾT HỢP ĐẦY ĐỦ (CHUẨN DẠY)
👉 Viết gọn trong 1 dòng (rất nên dạy SV)
.fade {
  animation: fadeIn 2s ease-in-out infinite alternate;
}
📘 Cú pháp chuẩn:
animation: name duration timing iteration direction;
6️⃣ SO SÁNH ĐỂ GIẢNG (RẤT HAY)
Cấu hình	Cảm giác
infinite	máy móc
infinite + alternate	tự nhiên
ease-in	chậm đầu
ease-out	chậm cuối
ease-in-out	mượt nhất
7️⃣ BÀI TẬP CHO SINH VIÊN
🧩 Bài 1
Làm khối nhấp nháy mờ – rõ liên tục
🧩 Bài 2
Khối trượt trái – phải qua lại
🧩 Bài 3
Khối phóng to – thu nhỏ giống icon loading
8️⃣ GỢI Ý DẠY NÂNG CAO (BUỔI SAU)
animation-play-state: paused;
Dừng animation khi hover
Kết hợp JS bật/tắt animation