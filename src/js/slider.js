const csFeaturedSlider = new Swiper(".swiper.is-featured", {
    // Optional parameters
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 16,

    /*
    // If we need pagination
    pagination: {
      el: ".swiper-pagination"
    },
    */

    /*
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    */

    /*
    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar"
    }
    */

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 16
        },
        768: {
            slidesPerView: "auto",
            spaceBetween: 16
        }
    }
});