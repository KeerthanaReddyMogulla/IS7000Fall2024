// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Custom blue color
      },
      fontSize: {
        'xxl': '2rem', // Custom large font size
      },
    },
  },
  plugins: [],
};
