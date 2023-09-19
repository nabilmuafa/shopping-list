/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: false,
  content: ["./templates/**/*.html", "./main/templates/*.html"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
