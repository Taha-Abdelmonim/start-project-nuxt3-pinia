<template>
  <home-slider-top />
</template>
<style lang="scss" scoped></style>

<script setup>
import { useAllData } from "@/store/getAllDataApi";
const store = useAllData();
// console.log(store.name);
// store.getAllDataApi("activities");
useHead({
  title: "Basmit Khair",
  htmlAttrs: {
    lang: "ar",
    dir: "rtl",
  },

  /* script: [
    {
      src: "https://unpkg.com/vue@3/dist/vue.global.js",
      body: true,
    },
  ], */
  // style: [{ src: "" }],
  link: [{ rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" }],
});
</script>
