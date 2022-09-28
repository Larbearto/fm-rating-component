/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        lightgrey: 'hsl(217, 12%, 63%)',
        mediumgrey: 'hsl(216, 12%, 54%)',
        darkblue: 'hsl(213, 19%, 18%)',
        verydarkblue: 'hsl(216, 12%, 8%)',
        primary: 'hsl(25, 97%, 53%)'
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif']
      }
    }
  },
  plugins: []
}
