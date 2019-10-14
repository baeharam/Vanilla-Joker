const initMore = function initMore() {
  const moreBtn = document.querySelector('.intro__synopsis__more');
  const closeBtn = document.querySelector('.synopsis__inside span');
  moreBtn.addEventListener('click', () => {
    document.getElementById('main').classList.add('overlay');
  });
  closeBtn.addEventListener('click', () => {
    document.getElementById('main').classList.remove('overlay');
  });
};

const initGallery = function initGallery() {
  const images = document.querySelectorAll('.gallery__item');
  images.forEach((image) => {
    image.addEventListener('mouseenter', () => { image.classList.add('active'); });
    image.addEventListener('mouseleave', () => { image.classList.remove('active'); });
  });
};

window.onload = () => {
  initMore();
  initGallery();
};
