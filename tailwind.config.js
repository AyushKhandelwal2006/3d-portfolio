/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a855f7",       // purple
        primaryDark: "#7e22ce",
      },
    },
  },
  plugins: [],
};

