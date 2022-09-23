/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
        },
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "color-1": "#20598e",
        "color-2": "#2777c1",
        "color-3": "#ffffff",
        "color-4": "#e9791e",
        "color-5": "#333333",
        "color-6": "#82b440",
      },

      screens: {
        sm: { max: "767px" },
      },
    },
  },
  plugins: [],
};
