const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: {
        100: '#2A4A61',
        200: '#1C3041',
      },
      accent: {
        100: '#2FE6DE',
        200: '#18F2B2',
      },
      purple: '#B2ABF2',
      brown: '#89043D',
    },
  },
  plugins: [],
};
