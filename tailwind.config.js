/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homebg': 'url("/src/img/homeBg.png")',
        'footerbg': 'url("/src/img/world.png")'
      }
    },
  },
  plugins: [],
}