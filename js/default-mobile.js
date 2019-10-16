const initHeader = function initHeader() {
  const header = document.getElementById('header');
  const headerIcon = document.querySelector('.header__icon');
  headerIcon.addEventListener('click', () => {
    header.classList.toggle('active');
  });
};

window.onload = () => initHeader();
