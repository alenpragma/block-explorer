/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blackBg: "#141414",
        primary: "#079ce0",
        primaryHover: "rgba(7, 176, 255, 0.164)",
        liteBlack: "#414243",
        ashText: "#a3a6ad",
        transparentLayer: "#14141492",
        grayWhite: "#d0d0d0",
      },
    },
  },
  plugins: [],
};
