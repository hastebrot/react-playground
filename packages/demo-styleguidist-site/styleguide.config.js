const { version } = require("./package")

module.exports = {
  // https://react-styleguidist.js.org/docs/configuration.html

  version,
  title: "styleguidist site",

  showSidebar: true,
  pagePerSection: true,
  defaultExample: false,
  skipComponentsWithoutExample: true,

  sections: [
    {
      name: "Welcome",
      content: "docs/welcome.md",
      sectionDepth: 1,
    },
    {
      name: "Components",
      components: "src/components/**/[A-Z]*.js",
      pagePerSection: true,
      sectionDepth: 0,
      exampleMode: "collapse",
      usageMode: "expand",
    },
  ],

  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader",
        },
      ],
    },
  },
}
