module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: false,
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        // ...theme('colors'),
        orangish: "#ffb500",
        redish: "#ff5514",
      }),
      fontFamily: {
        display: ["Titillium Web"],
        body: ["Titillium Web"],
      },
      colors: {
        blackish: "#464b4d",
        tealish: "#00eae2",
        orangish: "#ffb500",
        albastru: "blue",
      },
    },
  },
  variants: {},
  plugins: [],
};
