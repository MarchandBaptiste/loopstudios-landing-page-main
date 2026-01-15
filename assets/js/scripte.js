const burger = document.querySelector(".burger");

burger.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
  burger.classList.toggle('is-open');
});