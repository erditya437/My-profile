// Toggle Menu
function toggleMenu() {
    const navbarLinks = document.getElementById('navbar-links');
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar'); // Pastikan memilih elemen navbar

    navbarLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
   
}

// Notifikasi submit form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let existingNotification = document.querySelector(".notification");
            if (existingNotification) existingNotification.remove();

            const notification = document.createElement("div");
            notification.classList.add("notification", "show");

            const text = document.createElement("span");
            text.textContent = "Pesan berhasil dikirim! ✔️";
            notification.appendChild(text);

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.classList.remove("show");
                setTimeout(() => notification.remove(), 500);
            }, 3000);

            form.reset();
        });
    }

    // Observer untuk efek fade-in
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.3 });

    fadeElements.forEach(el => observer.observe(el));

    // Loader page selesai
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("hidden");
        }, 500);
    }
});







// Fungsi untuk menampilkan pop-up notifikasi
function showNotification() {
    const notification = document.getElementById("notification");

    // Menampilkan notifikasi
    notification.classList.add("show");
}

// Fungsi untuk menutup pop-up secara manual
function closeNotification() {
    const notification = document.getElementById("notification");
    
    // Menyembunyikan notifikasi dan menunggu untuk tampil lagi setelah 5 detik
    notification.classList.remove("show");
    
    // Menampilkan pop-up kembali setelah 5 detik
    setTimeout(() => {
        showNotification();
    }, 10000); // Tampilkan lagi setelah 5 detik
}

// Menampilkan pop-up pertama kali saat halaman dimuat
window.addEventListener("load", function() {
    // Menampilkan pop-up setelah 3 detik
    setTimeout(showNotification, 3000); // Tampilkan setelah 3 detik
});



function toggleReadMore(event) {
    event.preventDefault(); // Mencegah link default behavior (scrolling)
    var moreContent = document.getElementById('more-content');
    var readMoreLink = document.getElementById('read-more');

    if (moreContent.style.display === "none") {
        moreContent.style.display = "inline"; // Tampilkan teks tambahan
        readMoreLink.textContent = "Baca Lebih Sedikit"; // Ubah teks link
    } else {
        moreContent.style.display = "none"; // Sembunyikan teks tambahan
        readMoreLink.textContent = "Baca Selengkapnya"; // Kembalikan teks link
    }
}
