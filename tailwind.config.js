module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'shopperly-green': {
        100: '#EEEEEE',
        200: '#BEEBE9',
        300: '#8AC6D1',
        400: '#00ADB5'
      },
      'shopperly-blue': '#005FA4',
      'shopperly-gray': {
        700: '#393E46',
        800: '#222831'
      },
      white: '#ffffff'
    },
    extend: {
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
