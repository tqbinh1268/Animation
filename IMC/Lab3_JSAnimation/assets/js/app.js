// Bài 1: Nút bấm đổi nền trang
document.getElementById('toggle-bg').addEventListener('click', function() {
    document.body.classList.toggle('dark');
});

// Bài 2: Menu highlight khi cuộn trang
const sections = document.querySelectorAll('section');
const menuLinks = document.querySelectorAll('#menu a');

window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Bài 3: Hiệu ứng xuất hiện khi cuộn
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', function() {
    boxes.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (boxTop < windowHeight - 50) {
            setTimeout(() => {
                box.classList.add('show');
            }, index * 200); // Stagger by 200ms
        }
    });
});

// Bài 4: Nút "nhảy lên" khi hover
const jumpButton = document.querySelector('.jump');

jumpButton.addEventListener('mouseover', function() {
    jumpButton.classList.add('animate');
});

jumpButton.addEventListener('animationend', function() {
    jumpButton.classList.remove('animate');
});

// Bài 5: Hình tròn di chuyển theo chuột
const circle = document.querySelector('.circle');

document.addEventListener('mousemove', function(e) {
    circle.style.left = (e.clientX + window.scrollX - 0) + 'px';
    circle.style.top = (e.clientY + window.scrollY + 15) + 'px';
});