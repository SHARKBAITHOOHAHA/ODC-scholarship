/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        main: ['"DM Sans"'],
        sec: ['"Playfair Display"'],
      },
      colors: {
        mainBack: "#F9F9F7",
        mainText: "#AD343E",
        mainTextSec: "#414536",
        mainTextThird: "#2C2F24",
      },
      height: {
        101: "58rem",
        102: "42rem",
      },
      screens: {
        "3xl": "1616px",
      },
    },
  },
  plugins: [],
};
