module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#4D4D4D",
          600: "#343334",
          700: "#272527",
          800: "#1B1A1B",
          900: "#020102",
        },
        secondary: "#ffffff",
        // secondary: "#FCFCFC",
        tertiary: "#826AED",
      },
      fontFamily: {
        Ubuntu: ["'Ubuntu'", "sans-serif"],
        Quicksand: ["'Quicksand'", "sans-serif"],
        Roboto: ["'Roboto'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
