// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      exclude: ["date-fns"],
    },
  },

  runtimeConfig: {
    public: {
      baseURL: "https://backend.basmtkhair.com/api/",
    },
  },
  buildModules: ["@pinia/nuxt"],
  modules: ["@pinia/nuxt"],
  css: ["assets/sass/index.scss"],
  // plugins: [{ src: "./plugins/splide.js", mode: "client" }],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
