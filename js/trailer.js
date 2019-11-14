const initPlayControl = function initPlayControl() {
  const trailerWrapper = document.querySelectorAll('.trailer__wrapper');
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

const moveTrailer = (trailers, index) => {
  const trailer = trailers[index];
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
};

const initTrailerClick = (trailers) => {
  trailers.forEach((trailer, index) => {
    trailer.addEventListener('click', () => moveTrailer(trailers, index));
  });
};

const initTrailerKey = (trailers) => {
  const trailersArray = Array.from(trailers);
  let index = -1;
  window.addEventListener('keydown', (e) => {
    switch(e.key) {
      case 'ArrowLeft':
        const previous = trailersArray.filter((trailer) => trailer.classList.contains('previous'))[0];
        index = trailersArray.indexOf(previous);
        if(index === -1) break;
        moveTrailer(trailers, index);
        break;
      case 'ArrowRight':
        const next = trailersArray.filter((trailer) => trailer.classList.contains('next'))[0];
        index = trailersArray.indexOf(next);
        if(index === -1) break;
        moveTrailer(trailers, index);
      default:
        break;
    }
  });
};

const initCarousel = () => {
  const trailers = document.querySelectorAll('.trailer__wrapper');
  initTrailerClick(trailers);
  initTrailerKey(trailers);
};

window.onload = () => {
  initPlayControl();
  initCarousel();
};
