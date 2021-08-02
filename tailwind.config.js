module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        infleux: {
          800: "#F51C65",
          700: "#F73B7A",
          600: "#F84F87",
          500: "#F96294",
          400: "#FA6E9C",
          300: "#FA7BA5",
          200: "#FA87AD",
          100: "#FA92B4",
        },
      },
    },
  },
  variants: {
    extend: { opacity: ["disabled"], cursor: ["hover", "focus", "disabled"] },
  },
  plugins: [require("@tailwindcss/forms")],
};
