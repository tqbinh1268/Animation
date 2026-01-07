// Script cho hiệu ứng fade-in của banner
document.addEventListener('DOMContentLoaded', function() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    // Subtitle sẽ fade-in
    setTimeout(() => {
        heroSubtitle.classList.add('show');
    }, 500);
});