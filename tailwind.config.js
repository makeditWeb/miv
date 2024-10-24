/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'custom-teal': '#2BCFBB'
      },
      fontSize: {
        'font-15': '0.9375rem'  // 15px를 rem으로 변환
      },
      borderColor: {
        'border-gray': '#ddd'
      },
    },
  },
  plugins: [
  
  ],
}