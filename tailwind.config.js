/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    color:{
      'background': "#000000",
    },
    fontFamily: {
      sans: ['Satoshi', 'sans-serif'], // Set Satoshi as the default sans font
    },
    extend: {},
  },
  plugins: [],
}

