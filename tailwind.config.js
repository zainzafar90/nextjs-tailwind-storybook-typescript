const defaultTheme = require("tailwindcss/defaultTheme");
const forms = require("@tailwindcss/forms");
const typography = require("@tailwindcss/typography");

module.exports = {
  purge: ["./{components,pages}/**/*.{js,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue: {
          450: "#007CFF",
          550: "#0371E6",
        },
      },
      fontFamily: {
        sans: ['"SF Pro Display"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [forms, typography],
};
