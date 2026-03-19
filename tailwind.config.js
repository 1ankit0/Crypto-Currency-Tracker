export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Instrument Sans"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 50px -30px rgba(15, 23, 42, 0.45)',
      },
    },
  },
  plugins: [],
}
