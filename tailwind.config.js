const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: "class",
  content: ["pages/**/*.{js,jsx}", "components/**/*.{js,jsx}"],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      grey: colors.gray,
      indigo: colors.indigo,
    },
    fontFamily: {
      serif: ["Playfair Display", "serif"],
      sans: ["Nunito", "sans-serif"],
    },
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1440px",
          xl: "1760px",
        },
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      lineHeight: {
        xl: "1",
      },
      zIndex: {
        1: "1",
        100: "100",
        200: "200",
        500: "500",
        999: "999",
        max: "2147483647",
      },
    },
  },
}
