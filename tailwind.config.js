/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', 
  content: [
    "./src/main/resources/templates/**/*.html",
    "./src/main/resources/static/**/*.js",
    "./src/main/resources/static/css/*.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['SUIT', 'sans-serif'] 
      },
      colors: {
        'custom-gray': '#333',
        'custom-teal': '#2BCFBB',
        'custom-font-gray': 'rgba(51, 51, 51, 1)',
        'custom-border-gray': 'rgba(51, 51, 51, 0.1)',
        'custom-bg': 'rgba(51, 51, 51, 0.03)',
      },
      fontSize: {
        'font-10': '10px',
        'font-11': '11px',
        'font-13': '13px',
        'font-15': '0.9375rem',
        'font-17': '17px',

      },
      borderColor: {
        'border-gray': '#ddd'
      },
    },
  },
  plugins: [
  
  ],
}