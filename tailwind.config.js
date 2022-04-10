module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#565052",
          400: "#474143",
          500: "#433E40",
          600: "#3F3A3C",
          700: "#373335",
          800: "#302C2E",
          900: "#282426",
        },
        secondary: {
          500: "#ADB5BD",
          600: "#CED4DA",
          700: "#DEE2E6",
          800: "#E9ECEF",
          900: "#F8F9FA",
        },
        tertiary: "#7209b7",
        // tertiary: "#ca3cff",
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
