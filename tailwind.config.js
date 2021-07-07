module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "2xl" : "1080px",
      }
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
