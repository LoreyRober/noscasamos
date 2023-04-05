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
        'black': '#1F1F1F',
        'primary-brown': '#734D37',
      }
    },
    fontFamily: {
      'sans': ['Jost', 'Lato', 'Arial', 'sans-serif'],
      'fantasy': ['Dancing Script', 'cursive', 'sans-serif'],
    }
  },
  plugins: [],
}
