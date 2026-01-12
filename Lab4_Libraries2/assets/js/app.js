// --- BÀI 1: CẤU HÌNH AOS [cite: 63-67] ---
AOS.init({
    duration: 1000, // Hiệu ứng chạy trong 1 giây
    once: true,     // Chỉ chạy 1 lần khi cuộn xuống
    offset: 100     // Cách mép dưới 100px thì bắt đầu chạy
});

// --- BÀI 3: GSAP BASIC [cite: 141-144] ---
// Đợi trang tải xong mới chạy
window.addEventListener('load', () => {
    gsap.to(".gsap-box", {
        x: 200,             // Di chuyển tới vị trí x = 200 (so với gốc)
        opacity: 1,         // Hiện rõ dần
        duration: 1.5,      // Mất 1.5 giây
        ease: "power2.out", // Chuyển động nhanh rồi chậm dần
        delay: 0.5          // Đợi 0.5s sau khi load mới chạy
    });
});

// --- BÀI 4: GSAP TIMELINE [cite: 159-162] ---
// Tạo dòng thời gian
const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power2.out" } });

// Định nghĩa thứ tự xuất hiện
tl.from(".header-anim", { y: -50, opacity: 0 })     // 1. Header trượt từ trên xuống
  .from(".hero-title", { y: 30, opacity: 0 })       // 2. Tiêu đề trượt từ dưới lên
  .from(".hero-cta", { scale: 0, opacity: 0 });     // 3. Nút phóng to từ 0

// --- BÀI 5: KẾT HỢP CUỘN VÀ STAGGER [cite: 176-177] ---
// Sử dụng sự kiện cuộn chuột để kích hoạt animation cho Card
window.addEventListener('scroll', () => {
    const section5 = document.querySelector('#bai5');
    const cards = document.querySelectorAll('.card');
    
    // Lấy vị trí của section 5 so với đỉnh màn hình
    const sectionPos = section5.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3; // Điểm kích hoạt (1/3 màn hình dưới)

    // Nếu section 5 trồi lên đến điểm kích hoạt
    if(sectionPos < screenPos) {
        gsap.to(cards, {
            opacity: 1,
            y: 0,               // Về vị trí gốc
            duration: 0.6,
            stagger: 0.2,       // Quan trọng: Mỗi card cách nhau 0.2 giây
            ease: "back.out(1.7)" // Hiệu ứng nảy nhẹ
        });
    }
});