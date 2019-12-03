const initTransition = () => {
  const posters = document.querySelectorAll('.poster');
  setInterval(() => {
    let prevIndex, nextIndex;
    posters.forEach((poster, idx) => {
      if(poster.classList.contains('active')){
        prevIndex = idx;
        nextIndex = (idx + 1 === posters.length ? 0 : idx + 1);
      }
    });
    posters[prevIndex].classList.remove('active');
    posters[nextIndex].classList.add('active');
  }, 3000);
};

window.onload = () => initTransition();