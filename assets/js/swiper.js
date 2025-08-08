
const swiperTop = new Swiper(".swiper", {
    direction: "horizontal",
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
