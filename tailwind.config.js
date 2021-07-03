module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'shopperly-green': {
          100: '#EEEEEE',
          200: '#BEEBE9',
          300: '#8AC6D1',
          400: '#00ADB5'
        },
        'shopperly-blue': '#005FA4',
        'shopperly-lightblue': '#08B5FF',
        'shopperly-gray': {
          700: '#393E46',
          800: '#222831'
        },
        white: '#ffffff'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
