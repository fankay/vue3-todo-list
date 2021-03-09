module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    theme: {
      minWidth: {
       '0': '0',
       '1/4': '25%',
       'full': '100%',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
