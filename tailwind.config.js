module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#4b5557',
        dark: '#1c1c1c',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
