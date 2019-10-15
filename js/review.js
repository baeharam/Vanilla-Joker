const initScrollEffect = function initScrollEffect() {

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.toggle('active');
        observer.unobserve(entry.target);
      }
    });
  });

  const initObserver = function initObserver() {
    const reviews = document.querySelectorAll(".review__component");
    reviews.forEach((review) => io.observe(review));
  };

  initObserver();
};

window.onload = () => initScrollEffect();