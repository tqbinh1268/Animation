// app.js for Lab 4

// Khởi tạo AOS
AOS.init({
    duration: 800,
    once: true
});

// Bài 4: GSAP Tween cơ bản
window.addEventListener('load', () => {
    gsap.to(".box", {
        x: 80,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out"
    });
});

// Bài 5: GSAP Timeline
window.addEventListener('load', () => {
    const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power2.out" } });
    tl.from("header", { y: -60, opacity: 0 })
      .from(".hero-title", { opacity: 0, y: 20 })
      .from(".hero-cta", { scale: 0.9, opacity: 0 });
});

// Bài 6: Kết hợp - GSAP stagger cho cards
let animated = false;
window.addEventListener('scroll', () => {
    const cardList = document.querySelector('.card-list');
    if (cardList) {
        const rect = cardList.getBoundingClientRect();
        if (rect.top < window.innerHeight && !animated) {
            animated = true;
            gsap.from(".card", { 
                opacity: 0, 
                y: 20, 
                scale: 0.98, 
                duration: 0.6, 
                stagger: 0.08, 
                ease: "power1.out" 
            });
        }
    }
});