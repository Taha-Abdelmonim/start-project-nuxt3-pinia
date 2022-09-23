import VueSplide from "@splidejs/vue-splide";
// Default theme
import "@splidejs/vue-splide/css";
// or other themes
import "@splidejs/vue-splide/css/skyblue";
import "@splidejs/vue-splide/css/sea-green";
import "@splidejs/vue-splide/css/core";

import { Splide, SplideSlide } from "@splidejs/vue-splide";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSplide, {});
});
