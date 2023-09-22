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
        "colour-text": colours.gray[700],
        "colour-muted": colours.gray[400],
        "colour-background": colours.white,
        "colour-background-elevated": colours.gray[200],
      },
    },
  },
  plugins: [],
};
