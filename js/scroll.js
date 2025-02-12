window.addEventListener("scroll", function () {
    var header = document.querySelector("header"); // Ambil elemen header
    if (window.scrollY > 50) {  // Jika scroll lebih dari 50px
        header.classList.add("scrolled");  // Tambahkan class "scrolled"
    } else {
        header.classList.remove("scrolled");  // Hapus class jika scroll kembali ke atas
    }
});

