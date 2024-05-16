/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
     extend: {
      fontFamily:{
        custom:["Raleway", "sans-serif"],
        maven:["Maven Pro", "sans-serif"],
        Inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}

