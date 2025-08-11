
const swiperTop = new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".swiper .top-button-next",
        prevEl: ".swiper .top-button-prev",
    },

    pagination: {
        el: ".swiper .swiper-pagination",
        clickable: true,

    }
})
