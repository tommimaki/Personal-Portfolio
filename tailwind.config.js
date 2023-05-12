/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hackerman: ["Audiowide", "cursive"],
        text: ["Poppins", "sans-serif"],
        header: ["Days One", "sans-serif"],
      },
      backgroundColor: {
        "blue-400": "#1e3a8a",
      },
      colors: {
        customGreen: "rgb(163, 230, 53)",
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
