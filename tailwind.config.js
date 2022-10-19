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
        100: '#202142',
        200: 'rgba(0,0,0,0.4)',
        300: '#333',
      },
      accent: {
        turquoise: '#2FE6DE',
        green: '#18F2B2',
        pink: '#ff6a95',
      },
      purple: '#663399',
      brown: '#89043D',
    },
  },
  plugins: [],
};
