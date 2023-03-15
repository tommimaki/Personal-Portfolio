/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      backgroundColor: {
        "blue-600": "#1e3a8a",
      },
    },
  },
  variants: {
    extend: {
      textAlign: ["responsive"],
    },
  },
  plugins: [],
};
