// ---------- Mobile Navbar Toggle ----------
const toggler = document.querySelector(".navbar-toggler");
const navMenu = document.querySelector(".navbar-nav");

toggler.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  toggler.classList.toggle("open");
});

// ---------- Mega Menu Toggle on Mobile ----------
document.querySelectorAll(".has-megamenu > a").forEach(link => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      const parent = link.parentElement;
      const mega = parent.querySelector(".megamenu");

      // Close all other mega menus
      document.querySelectorAll(".has-megamenu").forEach(item => {
        if (item !== parent) {
          const m = item.querySelector(".megamenu");
          if (m) m.style.maxHeight = null; // collapse
          item.classList.remove("show-megamenu");
        }
      });

      // Toggle current menu
      if (parent.classList.contains("show-megamenu")) {
        mega.style.maxHeight = null; // collapse
        parent.classList.remove("show-megamenu");
      } else {
        mega.style.maxHeight = mega.scrollHeight + "px"; // expand to content height
        parent.classList.add("show-megamenu");
      }
    }
  });
});

// ---------- Reset menus on resize ----------
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    navMenu.classList.remove("active");
    toggler.classList.remove("open");
    document.querySelectorAll(".has-megamenu").forEach(item => {
      const mega = item.querySelector(".megamenu");
      if (mega) mega.style.maxHeight = null; // collapse
      item.classList.remove("show-megamenu");
    });
  }
});

// ---------- Hero Image Overlay Animation ----------
const overlayImage = document.querySelector(".hero-image.overlay");
const mainImage = document.querySelector(".hero-image:not(.overlay)");

if (overlayImage && mainImage) {
  let toggle = false;
  setInterval(() => {
    overlayImage.style.opacity = toggle ? 0 : 1;
    toggle = !toggle;
  }, 4000);
}


var swiper = new Swiper(".partners-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: { slidesPerView: 4 },
    768: { slidesPerView: 3 },
    576: { slidesPerView: 2 },
    0: { slidesPerView: 1 }
  }
});
