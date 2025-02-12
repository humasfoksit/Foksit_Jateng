// Efek Parallax
var rellax = new Rellax(".rellax", {
  callback: function (position) {},
});

// Mendapatkan tombol
const backToTopButton = document.getElementById("backToTop");

// Menambahkan event listener untuk scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // Tombol muncul jika scroll lebih dari 200px
    backToTopButton.classList.remove("hidden");
    backToTopButton.classList.add("flex");
  } else {
    // Tombol hilang jika berada di posisi paling atas
    backToTopButton.classList.remove("flex");
    backToTopButton.classList.add("hidden");
  }
});

// Menambahkan event listener untuk tombol klik
backToTopButton.addEventListener("click", () => {
  // Scroll ke atas dengan efek smooth
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Ketik
gsap.registerPlugin(TextPlugin);
gsap.to("#username", {
  duration: 1,
  text: { value: "FOKSIT", scrambleText: true },
  delay: 0.5,
});

// Animasi scramble teks untuk #underscore
gsap.to("#underscore", {
  duration: 1,
  text: { value: "JATENG.", scrambleText: true },
  delay: 1.5,
});

var options = {
  strings: [
    '<span style="font-weight: bold;">Forum Komunikasi Siswa Islam Terpadu.</span>',
    '<span style="font-weight: bold;">🔥Totalitas Berintergritas🔥.</span>',
    '<span style="font-weight: bold;">🔥Sinergi untuk Kontribusi🔥.</span>',
  ],
  typeSpeed: 40,
  backSpeed: 20,
  backDelay: 1000,
  startDelay: 100,
  loop: true,
  showCursor: true,
  cursorChar: "|",
};
var typed = new Typed("#animated-text", options);

// Navbar
const mobileMenu = document.getElementById("mobile-menu");
const openMenuBtn = document.getElementById("mobile-menu-toggle");
const closeMenuBtn = document.getElementById("close-menu");
const header = document.getElementById("header");

// Menampilkan menu mobile
openMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  mobileMenu.style.opacity = "1";
  mobileMenu.style.pointerEvents = "auto";
  openMenuBtn.setAttribute("aria-expanded", "true");
});

// Menyembunyikan menu mobile
closeMenuBtn.addEventListener("click", () => {
  mobileMenu.style.opacity = "0";
  mobileMenu.style.pointerEvents = "none";
  setTimeout(() => {
    mobileMenu.classList.add("hidden");
    openMenuBtn.setAttribute("aria-expanded", "false");
  }, 300);
});

// Menambahkan event listener untuk scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("backdrop-blur-lg", "bg-gray-800", "bg-opacity-95");
  } else {
    header.classList.remove("backdrop-blur-lg", "bg-gray-800", "bg-opacity-95");
  }
});
