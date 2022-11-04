src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"

    // <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
		effect:"fade",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });