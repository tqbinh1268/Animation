// Script cho hiệu ứng fade-in của banner
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    // Thêm class 'show' để kích hoạt fade-in
    heroTitle.classList.add('show');
    // Subtitle sẽ fade-in sau title
    setTimeout(() => {
        heroSubtitle.classList.add('show');
    }, 500);
});