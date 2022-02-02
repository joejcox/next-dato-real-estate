const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: "class",
  content: ["pages/**/*.{js,jsx}", "components/**/*.{js,jsx}"],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      slate: colors.slate,
      stone: colors.stone,
      grey: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      amber: colors.amber,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      pink: colors.pink,
      rose: colors.rose,
      indigo: colors.indigo,
      dark: "hsl(234, 64%, 25%)",
      darker: "hsl(234, 64%, 18%)",
      highlight: "hsl(4, 84%, 56%)",
      "highlight-darker": "hsl(4, 84%, 45%)",
    },
    fontFamily: {
      serif: ["Playfair Display", "serif"],
      sans: ["Nunito", "sans-serif"],
    },
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          md: "1200px",
          lg: "1440px",
          xl: "1660px",
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
