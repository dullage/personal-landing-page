const colours = require("tailwindcss/colors");

module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  theme: {
    screens: {
      md: "720px",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Roboto Slab", "serif"],
      mono: ["Source Code Pro", "monospace"],
    },
    extend: {
      colors: {
        "colour-text": colours.gray[100],
        "colour-muted": colours.gray[500],
        "colour-background": colours.gray[900],
        "colour-background-light": colours.gray[700],
      },
    },
  },
  plugins: [],
};
