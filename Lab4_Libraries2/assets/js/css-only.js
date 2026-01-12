// CSS Animations Only - Thay thế cho libraries
// Trigger on-scroll cho Bài 1 và Bài 5

document.addEventListener('DOMContentLoaded', () => {
    // Bài 1: Trigger khi cuộn
    const observer1 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
            }
        });
    });

    document.querySelectorAll('#bai1 .box').forEach(box => {
        observer1.observe(box);
    });

    // Bài 5: Trigger khi cuộn đến section
    const observer5 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll('.card');
                cards.forEach(card => {
                    card.style.animationPlayState = 'running';
                });
            }
        });
    }, { threshold: 0.3 });

    observer5.observe(document.querySelector('#bai5'));

    // Các bài khác chạy ngay khi load (không cần JS)
});