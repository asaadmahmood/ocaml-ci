/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.html'
  ],
  theme: {
    extend: {
      colors: {
        warning: {
          50: "#FFFAEB",
          500: "#F79009",
        }
      }
    },
  },
  plugins: [],
}
