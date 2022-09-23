<template>
  <header class="header bg-white">
    <div class="container flex items-center justify-between p-4">
      <NuxtLink class="w-2/12" to="/">
        <img src="@/src/images/Global/logo.png" class="" alt="logo" />
      </NuxtLink>
      <nav class="w-8/12 mr-10">
        <NuxtLink class="mr-4 font-bold text-2xl relative" to="/">الرئيسية</NuxtLink>
        <NuxtLink class="mr-4 font-bold text-2xl relative" to="/about">عن المؤسسة</NuxtLink>
        <NuxtLink class="mr-4 font-bold text-2xl relative" to="/"> الأنشطة </NuxtLink>
        <NuxtLink class="mr-4 font-bold text-2xl relative" to="/contact">تواصل معنا</NuxtLink>
      </nav>
      <button class="global-button w-2/12"><i class="fa-solid fa-heart"></i> تبرع الان</button>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  nav > a {
    cursor: pointer;
    transition: all 0.3s;
    &::before,
    &::after {
      transition: all 0.5s;
      content: "";
      position: absolute;
      width: 0;
      height: 3px;
      background: var(--mainColor-1);
      left: -10px;
      transition: var(--mainTransition);
      opacity: 0;
    }
    &::before {
      top: -3px;
    }
    &::after {
      bottom: -3px;
    }
    &:hover,
    .router-link-exact-active {
      color: var(--mainColor-1) !important;
      /* svg {
        path {
          fill: var(--mainColor-1) !important;
        }
      } */
      &::before,
      &::after {
        right: 0px;
        width: 100%;
        opacity: 1;
      }
    }
  }
}
</style>
