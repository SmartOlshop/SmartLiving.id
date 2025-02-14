document.addEventListener("DOMContentLoaded", function () {
  console.log("Halaman dimuat tanpa fitur keranjang.");
});

// Back to Top Button Functionality
window.addEventListener("scroll", function() {
  const backToTop = document.getElementById("back-to-top");
  if (window.pageYOffset > 300) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

document.getElementById("back-to-top").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Optional: Smooth scrolling for navigation links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
