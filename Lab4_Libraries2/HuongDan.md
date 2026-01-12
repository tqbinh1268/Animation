# Hướng Dẫn Tạo Dự Án Lab4_Libraries2 Sử Dụng Thư Viện Animation

## Bước 1: Tạo Dự Án Mới
1. Mở Terminal (hoặc Command Prompt).
2. Tạo folder mới cho dự án:
   ```
   mkdir Lab4_Libraries2
   cd Lab4_Libraries2
   ```
3. Tạo cấu trúc thư mục cơ bản:
   ```
   mkdir -p assets/css assets/js assets/libs
   ```
   - `assets/css`: Chứa file CSS (styles.css).
   - `assets/js`: Chứa file JS (app.js).
   - `assets/libs`: Chứa thư viện (aos.js, animate.min.css, gsap.min.js).

## Bước 2: Tải Files Thư Viện
Download các thư viện từ CDN (hoặc source chính thức) và đặt vào `assets/libs`:

1. **AOS (Animate On Scroll)**:
   - Tải CSS: `curl -o assets/libs/aos.css https://unpkg.com/aos@2.3.1/dist/aos.css`
   - Tải JS: `curl -o assets/libs/aos.js https://unpkg.com/aos@2.3.1/dist/aos.js`

2. **Animate.css**:
   - Tải CSS: `curl -o assets/libs/animate.min.css https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css`

3. **GSAP (GreenSock Animation Platform)**:
   - Tải JS: `curl -o assets/libs/gsap.min.js https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`

(Kiểm tra version mới nhất trên trang chủ nếu cần).

## Bước 3: Tạo Files Cơ Bản
1. **Tạo index.html** (file chính):
   ```
   <!DOCTYPE html>
   <html lang="vi">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Lab 4 - Animation Libraries</title>
       <link rel="stylesheet" href="assets/libs/animate.min.css">
       <link rel="stylesheet" href="assets/libs/aos.css">
       <link rel="stylesheet" href="assets/css/styles.css">
   </head>
   <body>
       <!-- Nội dung từng bài sẽ thêm ở đây -->
       <script src="assets/libs/aos.js"></script>
       <script src="assets/libs/gsap.min.js"></script>
       <script src="assets/js/app.js"></script>
   </body>
   </html>
   ```

2. **Tạo styles.css** (trong `assets/css`):
   ```
   /* Cài đặt chung */
   body { font-family: sans-serif; margin: 0; padding: 0; padding-bottom: 200px; }
   section {
       min-height: 80vh;
       border-bottom: 2px dashed #ccc;
       padding: 50px;
       overflow: hidden;
   }

   /* Style cho các khối Box */
   .container-flex { display: flex; gap: 20px; justify-content: center; }
   .box {
       width: 100px; height: 100px;
       color: white; display: flex; align-items: center; justify-content: center;
       font-weight: bold; border-radius: 8px;
   }
   .box-red { background: red; }
   .box-green { background: green; }
   .box-blue { background: blue; }
   .box-orange { background: orange; }

   /* Style cho Bài 3 */
   .gsap-box { opacity: 0; transform: translateX(-100px); }

   /* Style cho Bài 4 */
   #bai4 { background: #f0f0f0; text-align: center; }
   .header-anim { background: #333; color: white; padding: 15px; width: 100%; margin-bottom: 50px; }
   .hero-cta { padding: 10px 20px; background: tomato; color: white; border: none; font-size: 18px; cursor: pointer; }

   /* Style cho Bài 5 */
   .card-list { display: flex; gap: 15px; justify-content: center; margin-top: 30px; }
   .card {
       width: 150px; height: 200px; background: purple; color: white;
       display: flex; align-items: center; justify-content: center;
       opacity: 0; transform: translateY(50px);
   }
   ```

3. **Tạo app.js** (trong `assets/js`):
   ```
   // Bài 1: AOS
   AOS.init({
       duration: 1000,
       once: true,
       offset: 100
   });

   // Bài 3: GSAP Basic
   window.addEventListener('load', () => {
       gsap.to(".gsap-box", {
           x: 200,
           opacity: 1,
           duration: 1.5,
           ease: "power2.out",
           delay: 0.5
       });
   });

   // Bài 4: GSAP Timeline
   const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power2.out" } });
   tl.from(".header-anim", { y: -50, opacity: 0 })
     .from(".hero-title", { y: 30, opacity: 0 })
     .from(".hero-cta", { scale: 0, opacity: 0 });

   // Bài 5: GSAP Stagger
   window.addEventListener('scroll', () => {
       const section5 = document.querySelector('#bai5');
       const cards = document.querySelectorAll('.card');
       const sectionPos = section5.getBoundingClientRect().top;
       const screenPos = window.innerHeight / 1.3;
       if (sectionPos < screenPos) {
           gsap.to(cards, {
               opacity: 1,
               y: 0,
               duration: 0.6,
               stagger: 0.2,
               ease: "back.out(1.7)"
           });
       }
   });
   ```

## Bước 4: Implement Từng Bài (Thêm vào index.html)
Thêm nội dung vào `<body>` của `index.html`, trước các `<script>`.

1. **Bài 1: AOS Fade Up**
   ```
   <section id="bai1" class="section-padding">
       <h2>Bài 1: Hiệu ứng AOS (Cuộn xuống để xem)</h2>
       <div class="container-flex">
           <div data-aos="fade-up" class="box box-red">Box 1</div>
           <div data-aos="fade-up" data-aos-delay="200" class="box box-green">Box 2</div>
           <div data-aos="fade-up" data-aos-delay="400" class="box box-blue">Box 3</div>
       </div>
   </section>
   ```

2. **Bài 2: Animate.css**
   ```
   <section id="bai2" class="section-padding">
       <div class="hero-text">
           <h1 class="animate__animated animate__bounceIn">BÀI 2: CHÀO MỪNG ĐẾN WEBSITE</h1>
           <p class="animate__animated animate__fadeInUp animate__delay-1s">Dòng này hiện sau 1 giây</p>
       </div>
   </section>
   ```

3. **Bài 3: GSAP Basic Tween**
   ```
   <section id="bai3" class="section-padding">
       <h2>Bài 3: GSAP Basic Tween</h2>
       <div class="gsap-box box box-orange">GSAP Move</div>
   </section>
   ```

4. **Bài 4: GSAP Timeline**
   ```
   <section id="bai4" class="section-padding">
       <div class="header-anim">MENU HEADER</div>
       <div class="hero-content">
           <h2 class="hero-title">Nội Dung Chính</h2>
           <button class="hero-cta">MUA NGAY</button>
       </div>
   </section>
   ```

5. **Bài 5: GSAP Stagger**
   ```
   <section id="bai5" class="section-padding">
       <h2>Bài 5: Sản phẩm (Stagger)</h2>
       <div class="card-list">
           <div class="card">Sản phẩm 1</div>
           <div class="card">Sản phẩm 2</div>
           <div class="card">Sản phẩm 3</div>
           <div class="card">Sản phẩm 4</div>
       </div>
   </section>
   ```

## Bước 5: Chạy Dự Án
1. Start local server: `python3 -m http.server 8000` (trong folder Lab4_Libraries2).
2. Mở browser: `http://localhost:8000`.
3. Test: Cuộn để xem animations trigger.

## Lưu Ý
- Nếu gặp lỗi (ví dụ AOS không load), kiểm tra paths và versions.
- Để customize: Thay đổi duration/ease trong JS hoặc data attributes.
- Nếu cần version CSS thuần, follow hướng dẫn trước đó cho `css-only.html`.