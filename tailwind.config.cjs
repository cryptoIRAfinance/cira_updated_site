/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#4e6591",
        secondary: "#f5f6fa",
        button: "#fac25f",
        dimWhite: "#fff",
        navBarURL: "#1ab6d8",
        dimBlue: "#000",
        headerDark: "#1e3a64",
        headerAccent: "#009dc8",
        accent: "#fac25f",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
