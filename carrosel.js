let swiper = new Swiper(".content-swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    breakpoints: {
     
      992: {
        initialSlide: 1,
        slidesPerView: 2.59,
      },
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      centeredSlides: true,
      clickable: true,
    },
  });
  

