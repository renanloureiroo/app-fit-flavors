/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      brand: {
        primary: {
          200: '#AAEFCC',
          300: '#52DE98',
          400: '#00CF67',
          500: '#00AE57',
          600: '#007C3E',
          700: '#001A0D',
        },
      },
      grey: {
        100: '#C2D9CD',
        200: '#A0B2A9',
        300: '#67736D',
        400: '#000D06',
      },
    },
    extend: {},
  },
  plugins: [],
}
