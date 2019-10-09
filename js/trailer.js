const inittrailerControl = function inittrailerControl() {
  const trailerWrapper = document.querySelectorAll('.trailer__video-wrapper');
  const playBtns = document.querySelectorAll('.trailer__play');
  const trailers = document.querySelectorAll('.trailer__video');
  playBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      trailerWrapper[index].classList.add('playing');
      trailers[index].play();
    });
  });
  trailers.forEach((trailer, index) => {
    trailer.addEventListener('click', () => {
      trailerWrapper[index].classList.remove('playing');
      trailers[index].pause();
    });
  });
};

const initCarousel = function initCarousel() {
  const trailers = document.querySelectorAll('.trailer__video-wrapper');
  trailers.forEach((trailer, index) => {
    trailer.addEventListener('click', () => {
      if (trailer.classList.contains('previous')) {
        trailer.classList.remove('previous');
        const previous2 = document.querySelector('.previous2');
        if (previous2){
          previous2.classList.replace('previous2','previous');
        }
        const next = document.querySelector('.next');
        if (next) {
          next.classList.replace('next', 'next2');
        }
        trailers[index + 1].classList.add('next');
      } else if (trailer.classList.contains('next')) {
        trailer.classList.remove('next');
        const next2 = document.querySelector('.next2');
        if (next2) {
          next2.classList.replace('next2', 'next');
        }
        const previous = document.querySelector('.previous');
        if (previous) {
          previous.classList.replace('previous', 'previous2');
        }
        trailers[index - 1].classList.add('previous');
      }
    });
  });
};

window.onload = () => {
  inittrailerControl();
  initCarousel();
};
