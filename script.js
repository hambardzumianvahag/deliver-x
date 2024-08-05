document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__menu");

  burger.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});
