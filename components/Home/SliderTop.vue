<template>
  <section class="slider-top">
    <Splide
      class="main-slider sm:h-96 md:h-[560px]"
      :options="options_2"
      aria-label="My Favorite Images"
      v-if="sliders.length > 0"
    >
      <SplideSlide v-for="slider in sliders" :key="slider.id">
        <img class="w-full h-full absolute top-0 -z-10 sm:hidden" :src="slider.photo_lg" alt="Sample 1" />
        <img class="w-full h-full absolute top-0 -z-10 md:hidden" :src="slider.photo_sm" alt="Sample 1" />
      </SplideSlide>
    </Splide>
  </section>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { useAllData } from "@/store/getAllDataApi";
const store = useAllData();
let sliders;
await store.getAllDataApi("sliders").then(() => {
  sliders = store.sliders;
});
const options_2 = {
  rewind: true,
  gap: "1rem",
  direction: "rtl",
  // autoplay: true,
  type: "loop",
  pagination: true,
  breakpoints: {
    767: {
      // perPage: 1,
      pagination: true,
      arrows: false,
    },
  },
};

// let sliders = data.value.sliders;
</script>

<style lang="scss">
.main-slider {
  padding: 0 !important;

  @media (max-width: 767px) {
    .splide__arrow--prev {
      right: 0.3rem !important;
    }
    .splide__arrow--next {
      left: 0.3rem !important;
    }
  }
  .splide__arrow {
    font-size: 16px;
    background: var(--backGround-1);
    opacity: 1;
    padding: 10px;
    border-radius: 50%;
    svg {
      fill: #fff;
    }
    &:hover {
      background: var(--backGround-hover-1);
      opacity: 1 !important;
      svg {
        fill: #fff !important;
      }
    }
    &:focus {
      outline: none !important;
      outline-offset: 0;
    }
  }
  .splide__slide {
    margin: 0 !important;
  }
  .splide__track {
    height: 100%;
  }
  .splide__pagination__page {
    border-radius: 50% !important;
    height: 20px;
    width: 20px;
    &.is-active {
      transform: scale(1);
      background: var(--backGround-1);
      opacity: 1 !important;
    }
  }
}
</style>
