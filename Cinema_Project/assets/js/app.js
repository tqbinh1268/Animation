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
    { 
        id: "spider", 
        title: "Người Nhện: Không Còn Nhà", 
        time: "148", 
        genre: "Hành động, Phiêu lưu",
        director: "Jon Watts",
        cast: "Tom Holland, Zendaya, Benedict Cumberbatch",
        img: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", 
        desc: "Lần đầu tiên trong lịch sử điện ảnh của Người Nhện, danh tính của anh ta được tiết lộ, mang lại xung đột giữa trách nhiệm làm Siêu Anh Hùng và cuộc sống bình thường. Khi anh nhờ Doctor Strange giúp khôi phục bí mật, phép thuật đã xé toạc lỗ hổng trong thế giới của họ.", 
        trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA" 
    },
    { 
        id: "dune", 
        title: "Dune: Hành Tinh Cát", 
        time: "155", 
        genre: "Khoa học viễn tưởng, Phiêu lưu",
        director: "Denis Villeneuve",
        cast: "Timothée Chalamet, Rebecca Ferguson, Oscar Isaac",
        img: "https://image.tmdb.org/t/p/w500/cDbNAY0KM84cxXhmj8f0dLWza3t.jpg", 
        desc: "Paul Atreides, một thanh niên rực rỡ và tài năng bẩm sinh, phải du hành đến hành tinh nguy hiểm nhất trong vũ trụ để đảm bảo tương lai của gia đình và người dân của mình. Khi các thế lực độc ác bùng nổ xung đột về nguồn cung cấp độc quyền của hành tinh.", 
        trailer: "https://www.youtube.com/watch?v=8g18jFHCLXk" 
    },
    { 
        id: "avatar", 
        title: "Avatar: Dòng Chảy Của Nước", 
        time: "192", 
        genre: "Khoa học viễn tưởng, Hành động",
        director: "James Cameron",
        cast: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
        img: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", 
        desc: "Lấy bối cảnh hơn một thập kỷ sau các sự kiện của bộ phim đầu tiên, Avatar: Dòng Chảy Của Nước bắt đầu kể câu chuyện về gia đình Sully, những rắc rối theo sau họ, những nỗ lực họ làm để giữ an toàn cho nhau và những trận chiến họ chiến đấu để sống sót.", 
        trailer: "https://www.youtube.com/watch?v=d9MyqF3bPhI" 
    },
    { 
        id: "avengers", 
        title: "Avengers: Hồi Kết", 
        time: "181", 
        genre: "Hành động, Viễn tưởng",
        director: "Anthony Russo, Joe Russo",
        cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo",
        img: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", 
        desc: "Sau những sự kiện tàn khốc của Avengers: Cuộc Chiến Vô Cực, vũ trụ đang nằm trong đống đổ nát. Với sự giúp đỡ của các đồng minh còn lại, Avengers tập hợp một lần nữa để đảo ngược hành động của Thanos và khôi phục lại sự cân bằng cho vũ trụ.", 
        trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c" 
    },
    { 
        id: "joker", 
        title: "Joker", 
        time: "122", 
        genre: "Tội phạm, Chính kịch",
        director: "Todd Phillips",
        cast: "Joaquin Phoenix, Robert De Niro, Zazie Beetz",
        img: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", 
        desc: "Mãi mãi cô đơn trong đám đông, Arthur Fleck tìm kiếm sự kết nối. Tuy nhiên, khi bước đi trên những con phố đầy rẫy tội phạm của Gotham, Arthur dần đeo lên hai chiếc mặt nạ. Một chiếc để tô vẽ cho công việc chú hề hàng ngày, chiếc còn lại che giấu nỗ lực vô vọng để trở thành một phần của thế giới xung quanh.", 
        trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY" 
    },
    { 
        id: "darkknight", 
        title: "Hiệp Sĩ Bóng Đêm", 
        time: "152", 
        genre: "Hành động, Tội phạm",
        director: "Christopher Nolan",
        cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
        img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", 
        desc: "Batman, Trung úy Gordon và Luật sư Harvey Dent bắt đầu triệt phá các tổ chức tội phạm đang hoành hành trên đường phố Gotham. Sự hợp tác này tỏ ra hiệu quả, nhưng họ sớm nhận ra mình đang trở thành con mồi của một chủ mưu tội phạm được biết đến với cái tên The Joker.", 
        trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY" 
    },
    { 
        id: "inception", 
        title: "Kẻ Đánh Cắp Giấc Mơ", 
        time: "148", 
        genre: "Hành động, Viễn tưởng",
        director: "Christopher Nolan",
        cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
        img: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", 
        desc: "Dom Cobb là một tên trộm lành nghề, người giỏi nhất trong nghệ thuật trích xuất nguy hiểm, đánh cắp những bí mật quý giá từ sâu trong tiềm thức khi đang mơ. Khả năng hiếm có của Cobb đã khiến anh trở thành một cầu thủ đáng thèm muốn trong thế giới gián điệp doanh nghiệp mới đầy trắc trở.", 
        trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0" 
    },
    { 
        id: "interstellar", 
        title: "Hố Đen Tử Thần", 
        time: "169", 
        genre: "Phiêu lưu, Chính kịch, Viễn tưởng",
        director: "Christopher Nolan",
        cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        img: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", 
        desc: "Nhân loại đang đứng trước nguy cơ tuyệt chủng do hạn hán và thay đổi khí hậu. Một nhóm các nhà thám hiểm phải sử dụng một lỗ sâu mới được phát hiện để vượt qua các giới hạn của du hành vũ trụ và chinh phục những khoảng cách to lớn trong chuyến hành trình giữa các vì sao.", 
        trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E" 
    },
    { 
        id: "batman", 
        title: "Người Dơi", 
        time: "176", 
        genre: "Tội phạm, Bí ẩn",
        director: "Matt Reeves",
        cast: "Robert Pattinson, Zoë Kravitz, Jeffrey Wright",
        img: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", 
        desc: "Trong năm thứ hai hành hiệp, Batman khám phá ra tham nhũng ở Gotham có liên hệ với gia đình mình, đồng thời phải đối mặt với một tên giết người hàng loạt được biết đến với cái tên Riddler.", 
        trailer: "https://www.youtube.com/watch?v=mqqft2x_Aa4" 
    },
    { 
        id: "tenet", 
        title: "Tenet", 
        time: "150", 
        genre: "Hành động, Viễn tưởng",
        director: "Christopher Nolan",
        cast: "John David Washington, Robert Pattinson, Elizabeth Debicki",
        img: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg", 
        desc: "Được trang bị chỉ một từ duy nhất - Tenet - và chiến đấu vì sự tồn vong của toàn thế giới, Nhân vật chính hành trình qua một thế giới gián điệp quốc tế trong một nhiệm vụ sẽ mở ra một thứ gì đó vượt ra ngoài thời gian thực.", 
        trailer: "https://www.youtube.com/watch?v=LdOM0x0XDMo" 
    }
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
        document.getElementById("d-desc").innerText = movieData.desc;
        
        // Cập nhật thời lượng nếu có element
        const timeEl = document.getElementById("d-time");
        if(timeEl) timeEl.innerText = movieData.time + " phút";

        // Cập nhật thêm thông tin chi tiết (Thể loại, Đạo diễn, Diễn viên)
        const genreEl = document.getElementById("d-genre");
        if(genreEl) genreEl.innerText = movieData.genre;

        const directorEl = document.getElementById("d-director");
        if(directorEl) directorEl.innerText = "Đạo diễn: " + movieData.director;

        const castEl = document.getElementById("d-cast");
        if(castEl) castEl.innerText = "Diễn viên: " + movieData.cast;

        // Cập nhật link trailer
        const trailerBtn = document.getElementById("btn-trailer");
        if(trailerBtn) trailerBtn.href = movieData.trailer;

        // Cập nhật nút Đặt vé để chuyển ID phim sang trang booking
        const bookingBtn = document.querySelector(".btn-cta");
        if(bookingBtn) bookingBtn.href = `booking.html?id=${movieData.id}`;

        document.getElementById("d-img").src = movieData.img;
    }
}

// ======================================================
// 5. LOGIC FORM ĐẶT VÉ & HIỂN THỊ VÉ (CÓ QR CODE)
// ======================================================
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    // Đổ dữ liệu phim từ moviesDB vào Dropdown
    const movieSelect = document.getElementById('movieSelect');
    if (movieSelect) {
        movieSelect.innerHTML = ""; // Xóa option cũ
        moviesDB.forEach(m => {
            const opt = document.createElement('option');
            opt.value = m.id;
            opt.innerText = m.title;
            movieSelect.appendChild(opt);
        });
    }

    // Thiết lập giá trị mặc định
    document.getElementById('fullname').value = "Trần Quang Bình";
    document.getElementById('phone').value = "1234567890";
    
    // Tự động chọn phim dựa trên URL (nếu có)
    const params = new URLSearchParams(window.location.search);
    const preSelectedId = params.get('id');
    if (preSelectedId) {
        document.getElementById('movieSelect').value = preSelectedId;
    } else {
        document.getElementById('movieSelect').value = "spider";
    }

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
                    text: orderID.toString().slice(-8),
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