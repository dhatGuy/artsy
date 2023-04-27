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
      gridTemplateColumns: {
        "auto-fill-3": "repeat(auto-fill, minmax(245px, 1fr))",
      },
      backgroundImage: {
        auctionBg1: `
        linear-gradient(0deg, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52)), 
        url("/images/antenna.jpg"),
        linear-gradient(104.57deg, rgba(0, 0, 0, 0) 21.03%, rgba(0, 0, 0, 0.2) 56.5%, rgba(0, 0, 0, 0.2) 93.84%)`,

        auctionBg2: `
        linear-gradient(0deg, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52)), 
        url("/images/ghost.jpg"),
        linear-gradient(104.57deg, rgba(0, 0, 0, 0) 21.03%, rgba(0, 0, 0, 0.2) 56.5%, rgba(0, 0, 0, 0.2) 93.84%)`,

        auctionBg3: `
        linear-gradient(0deg, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52)), 
        url("/images/sink.jpg"),
        linear-gradient(104.57deg, rgba(0, 0, 0, 0) 21.03%, rgba(0, 0, 0, 0.2) 56.5%, rgba(0, 0, 0, 0.2) 93.84%)`,
      },
      backgroundSize: {
        auctionBg1: "100%",
        auctionBg2: "100%",
        auctionBg3: "100%",
      },
      colors: {
        black: "#292929",
        gray: {
          DEFAULT: "#333333",
        },
      },
      fontFamily: {
        serif: ["var(--font-bellefair)", ...fontFamily.sans],
        sans: ["var(--font-satoshi)", ...fontFamily.serif],
        "clash-display": ["var(--font-clash-display)", ...fontFamily.sans],
        "stix-two": ["var(--font-stix-two)", ...fontFamily.sans],
        baskervville: ["var(--font-baskervville)", ...fontFamily.sans],
        cardo: ["var(--font-cardo)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
