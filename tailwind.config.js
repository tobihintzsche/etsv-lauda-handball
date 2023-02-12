module.exports = {
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fcd34d',
      },
      fontFamily: {
        sans: ['Teko', 'sans-serif'],
      },
      flex: {
        2: '2',
        3: '3',
      },
    },
  },
  variants: {},
  plugins: [],
}
