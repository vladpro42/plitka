
document.addEventListener('DOMContentLoaded', event => {
    const swiperPhotos = new Swiper(".photos-swiper", {
        slidesPerView: 2,
        loop: true,
        direction: "horizontal",
        spaceBetween: 32,
        navigation: {
            nextEl: ".photos-next",
            prevEl: ".photos-prev",
        },
        pagination: {
            el: ".photos-pagination",
            clickable: true,
        },
        scrollbar: {
            el: '.photos-scrollbar',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 32
            }
        }
    });
})
