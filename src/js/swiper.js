import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperTop = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: ".swiper .top-button-next",
        prevEl: ".swiper .top-button-prev",
    },

    pagination: {
        el: ".swiper .swiper-pagination",
        clickable: true,

    }
})
const swiperPhotos = new Swiper(".photos-swiper", {
    spaceBetween: 72,
    slidesPerView: 3,
    centeredSlides: true,
    roundLengths: true,
    loop: true,
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: ".photos-swiper .swiper-button-next",
        prevEl: ".photos-swiper .swiper-button-prev",
    },
    pagination: {
        el: ".photos-swiper .swiper-pagination",
        clickable: true,
    },
});