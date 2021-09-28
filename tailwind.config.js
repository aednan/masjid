module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      backgroundImage: {
        'hero-pattern': "url('img/heropattern.svg')",
        'footer-pattern': "url('img/footerwave.svg')",
       },
      fontFamily:{
         dosis: "'Dosis', sans-serif",
        
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
