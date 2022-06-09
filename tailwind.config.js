module.exports = {
  content: ['./*/*.html',],
  theme: {
    extend: {

      colors: {
        'hdblue': '#1C51FE',
        'hdbg': '#151414',
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '2rem',
        },
      },

        screens: {
          lg: "1024px",
          xl: "1024px",
          "2xl": "1024px",
        },

        fontFamily: {
          'body': ['Space Grotesk']
        }
    },
  },
  plugins: [],
}
