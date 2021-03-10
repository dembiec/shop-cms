module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cst-gray-1': '#30303d',
        'cst-gray-2': '#414052',
        'cst-gray-3': '#21212b',
        'cst-gray-4': '#1b1b24',
        'cst-black': '#181820'
      },
      borderWidth: {
        '5': '5px'
      }
    },
  },
  variants: {
    extend: {
      borderStyle: ['focus'],
    },
  },
  plugins: [],
}
