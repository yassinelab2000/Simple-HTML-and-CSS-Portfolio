const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobileMenu = document.querySelector(".header .nav-bar .nav-list ul");
const mobileItem = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});
document.addEventListener("scroll", () => {
  var scrollPosition = window.scrollY;
  if (scrollPosition > 250) {
    header.style.backgroundColor = "#000000";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
mobileItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});
