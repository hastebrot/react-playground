const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin")

module.exports = function({ env, paths }) {
  return {
    devServer: {
      port: 5050,
      open: false,
    },
    webpack: {
      plugins: [
        new MonacoWebpackPlugin({
          languages: ["json"],
        }),
      ],
    },
    babel: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }],
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-modules-commonjs",
        "@babel/plugin-transform-runtime",
      ],
    },
    jest: {
      configure: {
        testEnvironment: "node",
        testMatch: ["**/src/**/*.(test|spec).(jsx?|tsx?)"],
        testPathIgnorePatterns: ["/node_modules"],
        transform: {
          "^.+\\.jsx?$": "babel-jest",
        },
        moduleFileExtensions: ["js", "jsx", "json", "node"],
      },
    },
  }
}
