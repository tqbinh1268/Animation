/* --- BÀI 1: LAYOUT & RESPONSIVE LOGIC --- */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight Active Menu
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-btn');
    const navMenu = document.getElementById('nav-menu');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Animation icon xoay nhẹ (Optional)
            mobileBtn.querySelector('i').classList.toggle('fa-times');
            mobileBtn.querySelector('i').classList.toggle('fa-bars');
        });
    }

    // 3. Sticky Header Shadow on Scroll
    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        }
    });

    /* --- BÀI 3: SCROLL ANIMATION (AOS) --- */
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    /* --- BÀI 5: SLIDER (Swiper) --- */
    if (typeof Swiper !== 'undefined' && document.querySelector('.mySwiper')) {
        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            }
        });
    }

    /* --- BÀI 5: TABS LOGIC --- */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active
                tabBtns.forEach(b => b.classList.remove('active'));
                tabPanes.forEach(p => p.classList.remove('active'));

                // Add active
                btn.classList.add('active');
                const tabId = btn.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    /* --- BÀI 4: FORM VALIDATION & LOCALSTORAGE --- */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Get values
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            const btnSubmit = document.querySelector('.btn-submit');

            // Simple Validation
            if (name.value.trim() === '') {
                showError(name, 'Vui lòng nhập họ tên');
                isValid = false;
            } else removeError(name);

            if (!email.value.includes('@')) {
                showError(email, 'Email không hợp lệ');
                isValid = false;
            } else removeError(email);

            if (message.value.trim().length < 10) {
                showError(message, 'Lời nhắn phải dài hơn 10 ký tự');
                isValid = false;
            } else removeError(message);

            if (isValid) {
                // Loading Effect
                btnSubmit.classList.add('loading');
                btnSubmit.disabled = true;

                // Simulate API Call
                setTimeout(() => {
                    btnSubmit.classList.remove('loading');
                    btnSubmit.disabled = false;

                    // Save to LocalStorage
                    const contactData = { name: name.value, email: email.value, date: new Date().toISOString() };
                    localStorage.setItem('lastContact', JSON.stringify(contactData));

                    // Show Toast
                    showToast('Gửi tin nhắn thành công!', 'success');
                    contactForm.reset();
                }, 2000);
            }
        });
    }
});

// Helper Functions
function showError(input, msg) {
    input.classList.add('invalid');
    input.nextElementSibling.nextElementSibling.innerText = msg;
}
function removeError(input) {
    input.classList.remove('invalid');
    input.nextElementSibling.nextElementSibling.innerText = '';
}
function showToast(msg, type) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${msg}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}