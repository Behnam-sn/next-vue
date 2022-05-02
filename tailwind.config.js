module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#BFBFBF",
          500: "#CCCCCC",
          600: "#D9D9D9",
          700: "#E6E6E6",
          800: "#F2F2F2",
          900: "#FFFFFF",
        },
        secondary: {
          300: "#565052",
          400: "#474143",
          500: "#433E40",
          600: "#3F3A3C",
          700: "#373335",
          800: "#302C2E",
          900: "#282426",
        },
        tertiary: {
          400: "#B655F7",
          500: "#AC3CF6",
          600: "#A124F5",
          700: "#970BF4",
          800: "#880ADB",
          900: "#7209B7",
        },
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
