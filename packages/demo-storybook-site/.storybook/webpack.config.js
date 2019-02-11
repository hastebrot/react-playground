const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: [/\.stories\.js$/, /index\.js$/, /[A-Z]*\.story\.js/],
        loaders: [require.resolve("@storybook/addon-storysource/loader")],
        include: [path.resolve(__dirname, "../src")],
        enforce: "pre"
      }
    ]
  }
};
