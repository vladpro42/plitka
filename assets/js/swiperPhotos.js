
document.addEventListener('DOMContentLoaded', event => {
    const swiperPhotos = new Swiper(".photos-swiper", {
        slidesPerView: 3,
        loop: true,
        direction: "horizontal",
        spaceBetween: 32,
        navigation: {
            nextEl: ".photos-swiper .swiper-button-next",
            prevEl: ".photos-swiper .swiper-button-prev",
        },
        pagination: {
            el: ".photos-swiper .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 32
            }
        }
    });
})
