let navLinks = document.querySelector(".nav-links");
let burger = document.querySelector(".burger");
let links = navLinks.querySelectorAll("a");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});
