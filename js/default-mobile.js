const initHeaderFunction = function initHeaderFunction() {
  const header = document.getElementById("header");
  const headerIcon = document.querySelector(".header__icon");
  headerIcon.addEventListener("click", () => {
    header.classList.toggle("active");
  });
};

const initHeaderScroll = function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    if(scrollTop >= 50) header.classList.add('sticky');
    else header.classList.remove('sticky'); 
  });
};

const preventScroll = function preventScroll() {
  window.addEventListener('scroll', (e) => {
    e.preventDefault();
  });
};

window.onload = () => {
  initHeaderFunction();
  initHeaderScroll();
  preventScroll();
};

