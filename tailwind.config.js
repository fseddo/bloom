/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      regular: "0 0 8px 0 rgb(0 0 0 / 0.2)",
      heavy: "0 0 8px 0 rgb(0 0 0 / 0.4)",
    },
    colors: {
      transparent: "transparent",
      currentColor: "currentColor",
      white: "#ffffff",
      black: "#000000",
      beige: "#e4e2dd",
      subtext: "#000000",
      catalog: "#fbfbfb",
      pinkButton: "#ff839e",
      pinkButtonHover: "#eb7992",

      // https://colorkit.io/shades-tints#db6d6d-9 - REDS
      red: {
        400: "#E18989",
        600: "rgb(220 38 38)", // accessible test
        DEFAULT: "#db6d6d",
      },

      // https://colorkit.io/shades-tints#38a96a-9 - GREENS
      green: {
        400: "#60BB88",
        700: "rgb(21 128 61)", // accessible test
        dark: "#094911",
        DEFAULT: "#38a96a",
      },

      orange: {
        700: "#C45F1B", // test accessible
        DEFAULT: "#E37B10", // test this format change works
      },

      // https://colorkit.io/shades-tints/#00468b-4 - BLUES
      blue: {
        200: "#729CC5",
        300: "#3971A8",
        DEFAULT: "#00468B",
      },

      teal: { light: "#39c6e7", DEFAULT: "#00b5df", dark: "#008dad" },

      // https://colorkit.io/#ccdae8-#2B3232-9 - GRAYS
      gray: {
        50: "#F0F2F8",
        100: "#CCDAE8",
        200: "#B8C5D1",
        300: "#A4B0BA",
        400: "#909BA3",
        500: "#7C868C",
        600: "#687175",
        700: "#545C5E",
        800: "#404747",
        900: "#2B3232",
      },
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      playfair: ["Playfair Display"],
      quicksand: ["Quicksand"],
      quattrocento: ["Quattrocento"],
      jost: ["Jost"],
      josefinSans: ["Josefin Sans"],
    },
  },
  plugins: [],
};
