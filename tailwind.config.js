/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#FD8814",
        primarylight: "#FFD5BC",
        secondary: "#3E2E55",
        light: "#F8F7FF",
      },
      fontFamily: {
        poppins: ["Poppins"],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
