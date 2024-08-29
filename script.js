// Fungsi untuk menampilkan konten setelah animasi selesai
window.addEventListener('load', function() {
    var circle = document.getElementById('animation-circle');
    var content = document.getElementById('content');

    // Ketika animasi selesai, tampilkan konten
    circle.addEventListener('animationend', function() {
        circle.style.display = 'none'; // Sembunyikan bola
        content.style.display = 'block'; // Tampilkan konten utama
        document.body.style.overflow = 'auto'; // Aktifkan scrollbar
    });
});

// Validasi sederhana untuk memastikan semua field terisi
document.getElementById("login-form").addEventListener("submit", function(event) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        event.preventDefault(); // Mencegah form dari pengiriman jika ada input kosong
    } else {
        event.preventDefault(); // Mencegah pengiriman form untuk demo
        changeLogoAndShowSuccess(); // Menampilkan animasi sukses dan mengubah logo
    }
});

// Fungsi untuk mengubah logo dan menampilkan animasi sukses
function changeLogoAndShowSuccess() {
    const successElement = document.getElementById('login-success');
    const logoElement = document.getElementById('logo');
    const loginButton = document.querySelector('.login-container button');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    
    // Ubah gambar logo
    logoElement.src = 'hijau.png'; // Ganti dengan gambar logo baru
    logoElement.style.opacity = '0'; // Sembunyikan logo selama transisi

    // Tampilkan animasi sukses
    successElement.style.opacity = '1';
    successElement.style.top = '20px'; // Muncul dari atas

    // Mengubah warna tombol login
    loginButton.style.backgroundColor = '#4169E1'; // Warna awal tombol
    
    // Kosongkan field username dan password
    usernameField.value = '';
    passwordField.value = '';

    setTimeout(() => {
        successElement.style.top = '-60px'; // Kembali ke atas
        successElement.style.opacity = '0';

        // Setelah animasi selesai, kembalikan gambar logo dan warna tombol
        setTimeout(() => {
            logoElement.src = 'logo3.png'; // Kembali ke gambar logo awal
            logoElement.style.opacity = '1'; // Tampilkan kembali logo
            loginButton.style.backgroundColor = '#4169E1'; // Kembalikan warna tombol
        }, 400); // Waktu ini lebih kecil dari durasi animasi sukses agar tidak tertunda terlalu lama
    }, 1500); // Durasi animasi sukses
}

// Efek parallax untuk background saat scroll
window.addEventListener('scroll', function() {
    const offset = window.scrollY;
    document.body.style.backgroundPositionY = offset * 0.5 + 'px'; // Menyesuaikan background berdasarkan scroll
});