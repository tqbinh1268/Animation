// ... (Phần 1, 2, 3, 4 giữ nguyên như cũ) ...
// ======================================================
// 1. KHỞI TẠO HIỆU ỨNG CUỘN (AOS)
// ======================================================
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000, once: true, offset: 100
        });
    }
});

// ======================================================
// 2. XỬ LÝ MENU MOBILE
// ======================================================
const mobileBtn = document.getElementById('mobile-btn');
const navMenu = document.getElementById('nav-menu');
if (mobileBtn) {
    mobileBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}

// ======================================================
// 3. CƠ SỞ DỮ LIỆU PHIM
// ======================================================
const moviesDB = [
    { id: "spider", title: "Người Nhện: Không Còn Nhà", time: "148", img: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", desc: "..." },
    { id: "dune", title: "Dune: Hành Tinh Cát", time: "155", img: "https://image.tmdb.org/t/p/w500/cDbNAY0KM84cxXhmj8f0dLWza3t.jpg", desc: "..." },
    { id: "avatar", title: "Avatar: Dòng Chảy Của Nước", time: "192", img: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", desc: "..." }
];

// ======================================================
// 4. LOGIC TRANG CHI TIẾT
// ======================================================
if (window.location.pathname.includes("detail.html")) {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get("id");
    const movieData = moviesDB.find(m => m.id === movieId);
    if (movieData) {
        document.getElementById("d-title").innerText = movieData.title;
        // ... (các phần điền thông tin khác giữ nguyên)
        document.getElementById("d-img").src = movieData.img;
    }
}

// ======================================================
// 5. LOGIC FORM ĐẶT VÉ & HIỂN THỊ VÉ (CÓ QR CODE)
// ======================================================
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('fullname').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const movieVal = document.getElementById('movieSelect').value;
        const tickets = document.getElementById('ticketCount').value;
        
        document.getElementById('error-name').innerText = "";
        document.getElementById('error-phone').innerText = "";
        let isValid = true;

        if (name === "") {
            document.getElementById('error-name').innerText = "Vui lòng nhập họ tên!";
            isValid = false;
        }
        if (phone.length < 10 || isNaN(phone)) {
            document.getElementById('error-phone').innerText = "SĐT không hợp lệ!";
            isValid = false;
        }

        if (isValid) {
            const orderID = Date.now(); // ID này sẽ được dùng cho QR code
            const orderDate = new Date().toLocaleDateString('vi-VN');

            // Lưu LocalStorage
            const newOrder = { id: orderID, customerName: name, customerPhone: phone, movieName: movieVal, ticketQty: tickets, date: new Date().toLocaleString() };
            let orders = JSON.parse(localStorage.getItem('cinema_orders')) || [];
            orders.push(newOrder);
            localStorage.setItem('cinema_orders', JSON.stringify(orders));

            // --- TẠO QR CODE ---
            const qrcodeContainer = document.getElementById('qrcode-container');
            if (qrcodeContainer) {
                qrcodeContainer.innerHTML = ''; // Xóa QR code cũ nếu có
                // Tạo QR code mới chứa ID đơn hàng
                new QRCode(qrcodeContainer, {
                    text: orderID.toString(),
                    width: 120,
                    height: 120,
                    colorDark : "#000000",
                    colorLight : "#ffffff",
                    correctLevel : QRCode.CorrectLevel.H
                });
            }

            // Điền thông tin vào vé
            let movieDisplay = movieVal;
            const selectedMovie = moviesDB.find(m => m.id === movieVal);
            if (selectedMovie) movieDisplay = selectedMovie.title;

            document.getElementById('t-movie-name').innerText = movieDisplay;
            document.getElementById('t-customer').innerText = name;
            document.getElementById('t-phone').innerText = phone;
            document.getElementById('t-qty').innerText = tickets + " vé";
            document.getElementById('t-date').innerText = orderDate;
            document.getElementById('t-id').innerText = orderID.toString().slice(-8);

            // Hiển thị Modal Vé
            document.getElementById('ticketModal').style.display = 'flex';
        }
    });

    // Xử lý nút "Xác nhận" (Vẫn quay về trang chủ)
    document.getElementById('closeTicketBtn').addEventListener('click', function() {
        window.location.href = "index.html";
    });
}