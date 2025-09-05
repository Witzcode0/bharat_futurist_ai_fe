const toggler = document.querySelector(".navbar-toggler");
  const navMenu = document.querySelector(".navbar-nav");

  toggler.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    toggler.classList.toggle("open");
  });

const overlayImage = document.querySelector('.hero-image.overlay');
const mainImage = document.querySelector('.hero-image:not(.overlay)');

let toggle = false;
setInterval(() => {
  overlayImage.style.opacity = toggle ? 0 : 1;
  toggle = !toggle;
}, 4000);
