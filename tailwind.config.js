module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        testCol: 'repeat(auto-fit, minmax(223.33px, 1fr))',
      },
      gridTemplateRows: {
        testRow: 'repeat(auto-fit, minmax(96px, 1fr))',
      },
    },
  },
  plugins: [],
};
