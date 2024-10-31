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
        primary: {
          10: '#333',
          20: '#2BCFBB',
          30: '#03C75A',
          40: '#FEE500',
          50: '#8D8D8D',
          60: '#E1E1E1',
          70: '#FF5384',
          80: '#3EA2FF',
          85: '#F2F2F2',
          90: '#DDDDDD',
          95: '#00A58C',
          99: '#511CFF',
        },
        secondary: {
          10: '#F8F8F8;',
          20: '#191700;',
        },
        'custom-border-gray': 'rgba(51, 51, 51, 0.1)',
        'custom-bg': 'rgba(51, 51, 51, 0.03)',
      },
      fontSize: {
        'font-10': '10px',
        'font-11': '11px',
        'font-13': '13px',
        'font-15': '0.9375rem',
        'font-17': '17px',
        'font-25': '25px',
      },
      borderColor: {
        'border-gray': '#ddd'
      },
      width: {
        20:'20%',
        90:'90%',
      },
    },
  },
  plugins: [
  
  ],
}