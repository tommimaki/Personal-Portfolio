/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular"],
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
