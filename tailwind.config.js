/* eslint-disable @typescript-eslint/no-var-requires */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightPrimary: "#FEF6E4",
      lightSecondary: "#F3D2C1",
      darkPrimary: "#001858",
      darkSecondary: "#172C66",
      accentLight: "#F582AE",
      white: "white",
      transparent: colors.transparent,
      current: colors.current,
      black: colors.black,
      gray: colors.gray,
      slate: colors.slate,
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "2rem",
          lg: "2rem",
          xl: "7rem",
          "2xl": "14rem",
        },
      },
    },
  },
  plugins: [],
};
