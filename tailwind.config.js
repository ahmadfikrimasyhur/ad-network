module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: { opacity: ["disabled"], cursor: ["hover", "focus", "disabled"] },
  },
  plugins: [require("@tailwindcss/forms")],
};
