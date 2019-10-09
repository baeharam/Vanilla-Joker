const initFullpage = function initFullpage() {
  new fullpage('#fullpage', {
    autoScrolling: true,
    afterLoad: function(origin, destination, direction){
      origin.item.classList.remove('view');
      destination.item.classList.add('view');
    }
  });
  fullpage_api.setAllowScrolling(true);
};

window.onload = () => {
  initFullpage();
};
