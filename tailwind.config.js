/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white': '#FFFCF9',
        'white-with-opacity': 'rgba(255, 252, 249, .7)',
        'black': '#1F1F1F',
        'primary-brown': '#734D37',
        'dark-grey': '#828894',
        'primary-grey': '#DDDDDD',
        'light-grey': '#FAFAFA'
      }
    },
    fontFamily: {
      'sans': ['Jost', 'Lato', 'Arial', 'sans-serif'],
      'fantasy': ['Dancing Script', 'cursive', 'sans-serif'],
    }
  },
  plugins: [],
}
