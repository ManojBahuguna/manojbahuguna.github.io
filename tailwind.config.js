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
      transparent: "transparent",
      current: "currentColor",
      black: "black",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
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
