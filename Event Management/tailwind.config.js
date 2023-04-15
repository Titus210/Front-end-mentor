/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primaryBlue: '#00D6FA',
      mainWhite: '#ffffff',
      mainBlack: '#000000',
      mainOrange: '#FF8C00',
      lightGrey: '#f5f5f5',
      darkGrey: '#ececec',
    },
    extend: {

      backgroundImage: {
        heroBackground: "linear-gradient(90deg, rgba(3, 21, 43, 0.6) 0 %, rgba(0, 0, 0, 0) 105.07 %)",
        heroImage: "url('./Assets/image-1.png')",
      },
    }
  },
  plugins: [],
}

