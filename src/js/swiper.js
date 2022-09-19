import "swiper/css/bundle";
import Swiper, { Navigation } from "swiper";

new Swiper(".swiper", {
  modules: [Navigation],
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
