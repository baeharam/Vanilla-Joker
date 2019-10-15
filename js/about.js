const initMore = function initMore() {
  const moreBtn = document.querySelector('.intro__synopsis__more');
  const closeBtn = document.querySelector('.synopsis__inside span');
  moreBtn.addEventListener('click', () => {
    document.getElementById('main').classList.add("more");
  });
  closeBtn.addEventListener('click', () => {
    document.getElementById("main").classList.remove("more");
  });
};

window.onload = () => {
  initMore();
};
