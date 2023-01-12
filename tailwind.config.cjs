/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#4e6591",
        secondary: "#f5f6fa",
        button: "#466eab",
        dimWhite: "#fff",
        dimBlue: "#009aff",
        headerDark: "#1e3a64",
        headerAccent: "#009dc8",
        accent: "#fad000",
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
