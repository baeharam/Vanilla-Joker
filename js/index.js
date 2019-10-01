const initFullpage = function initFullpage() {
  new fullpage('#fullpage', {
    autoScrolling: true,
  });
  fullpage_api.setAllowScrolling(true);
};

window.onload = () => {
  initFullpage();
};
