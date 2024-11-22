module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-main"         : "#009900",
        "theme-main-dark"    : "#006600",
        "theme-main-bright"  : "#6ede8a",
      },
    },
  },
  plugins: [],
};