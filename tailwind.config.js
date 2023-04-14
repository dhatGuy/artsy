const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-bellefair)", ...fontFamily.sans],
        sans: ["var(--font-satoshi)", ...fontFamily.serif],
        "clash-display": ["var(--font-clash-display)", ...fontFamily.sans],
        "stix-two": ["var(--font-stix-two)", ...fontFamily.sans],
        baskervville: ["var(--font-baskervville)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
