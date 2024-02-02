/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins' : 'Poppins'
      },
      colors:{
        'heroBg': 'rgba(255, 247, 238, 1)',
        'outerBox': 'rgba(255, 200, 121, 1)',
        'cardBox': 'rgba(255, 248, 219, 1)'
      }
    },
  },
  plugins: [],
}

