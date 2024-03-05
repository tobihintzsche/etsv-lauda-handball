const { withTV } = require('tailwind-variants/transformer')

module.exports = withTV({
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FF0000',
          200: '#FFD700',
        },
      },
      text: {
        primary: '#FFD700',
      },
      fontFamily: {
        sans: ['Hammersmith One', 'sans-serif'],
      },
      flex: {
        2: '2',
        3: '3',
      },
      boxShadow: {
        card: '10px 10px 30px 9px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
})
