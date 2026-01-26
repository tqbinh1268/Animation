# BÁO CÁO BÀI TẬP LỚN - OMG DIGITAL

> **Sinh viên:** Trần Quang Bình  
> **Lớp:** WE24-01

## 📝 Mô tả dự án
Website **OMG Digital** là một trang web giới thiệu Digital Agency với giao diện hiện đại, tập trung vào trải nghiệm người dùng (UX) và các hiệu ứng chuyển động (Animation).

- **Quy mô:** 4 trang (Home, Services, Portfolio, Contact).
- **Đặc điểm:** Responsive trên mọi thiết bị, tích hợp Dark/Light mode (cơ bản), Animation mượt mà.

## 🛠 Công nghệ sử dụng
- **Core:** HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6).
- **Thư viện:** 
  - `AOS` (Animate On Scroll)
  - `SwiperJS` (Carousel/Slider)
  - `GSAP` (Animation nâng cao)
  - `FontAwesome` (Icons)

---

## 📚 TỔNG HỢP KỸ THUẬT THEO BÀI

### 📌 BÀI 1: LAYOUT & RESPONSIVE
**Mục tiêu:** Xây dựng khung sườn và menu điều hướng thích ứng.

- **Kỹ thuật:** 
  - `position: sticky`: Làm thanh Header dính chặt khi cuộn trang.
  - `Flexbox`: Căn chỉnh Logo và Menu.
  - `Media Queries (@media)`: Xử lý giao diện Mobile (ẩn menu, hiện nút Hamburger).
- **Áp dụng:** 
  - **Header & Menu** (Tất cả các trang): Menu tự động chuyển thành dạng trượt ngang trên điện thoại.
  - **Footer**: Luôn nằm dưới cùng (`min-height: 100vh` + `flex-direction: column`).

!Minh họa Layout & Responsive

### 📌 BÀI 2: CSS ANIMATION & KEYFRAMES
**Mục tiêu:** Tạo điểm nhấn thị giác bằng chuyển động CSS thuần.

- **Kỹ thuật:**
  - `@keyframes`: Tạo chuyển động lặp lại hoặc xuất hiện.
  - `transform: rotateY`: Hiệu ứng lật 3D.
  - `transition`: Làm mượt các trạng thái Hover.
- **Áp dụng:**
  - **Trang Home (Hero Section):** Hình ảnh bay lơ lửng (`float`), chữ xuất hiện dần (`fadeInUp`).
  - **Trang Services:** Thẻ Card lật mặt sau khi di chuột (Flip Card 3D).
  - **Nút bấm (Buttons):** Hiệu ứng ánh sáng lướt qua (`glow-effect`).

!Minh họa Animation & Flip Card

### 📌 BÀI 3: SCROLL ANIMATION & PARALLAX
**Mục tiêu:** Tăng tương tác khi người dùng cuộn trang.

- **Kỹ thuật:**
  - `background-attachment: fixed`: Tạo hiệu ứng Parallax (nền trôi chậm hơn nội dung).
  - `AOS Library`: Kích hoạt animation khi phần tử đi vào khung nhìn.
- **Áp dụng:**
  - **Trang Portfolio (Hero):** Banner đầu trang có hiệu ứng chiều sâu Parallax.
  - **Toàn bộ dự án:** Các khối nội dung tự động trượt lên (`fade-up`) hoặc sang ngang khi cuộn tới.

!Minh họa Parallax Scroll

### 📌 BÀI 4: FORM & JAVASCRIPT INTERACTION
**Mục tiêu:** Xử lý dữ liệu người dùng và phản hồi.

- **Kỹ thuật:**
  - **Floating Label:** CSS `input:focus ~ label` để nhãn bay lên khi nhập liệu.
  - **Validation:** Kiểm tra rỗng, định dạng email bằng JS.
  - **LocalStorage:** Lưu thông tin liên hệ vào trình duyệt.
  - **Toast Notification:** Hiển thị thông báo góc màn hình khi gửi thành công.
- **Áp dụng:**
  - **Trang Contact:** Form liên hệ với hiệu ứng Loading khi bấm gửi và thông báo kết quả.

!Minh họa Form & Toast

### 📌 BÀI 5: ADVANCED LAYOUT & LIBRARIES
**Mục tiêu:** Sử dụng các cấu trúc phức tạp và thư viện ngoài.

- **Kỹ thuật:**
  - **CSS Grid (Masonry):** Bố cục lưới không đều (ô to, ô nhỏ) bằng `grid-column: span`.
  - **SwiperJS:** Slider cảm ứng.
  - **Tabs Logic:** Chuyển đổi nội dung không cần tải lại trang.
- **Áp dụng:**
  - **Trang Home:** 
    - Timeline (Lịch sử phát triển) dùng `::after` để vẽ trục thời gian.
    - Testimonial Slider (Khách hàng nói gì) dùng Swiper.
  - **Trang Services:** Tabs quy trình làm việc (Khảo sát - Thiết kế - Kiểm thử).
  - **Trang Portfolio:** Lưới dự án (Masonry Grid) hiển thị ảnh so le đẹp mắt.

!Minh họa Masonry Grid & Tabs