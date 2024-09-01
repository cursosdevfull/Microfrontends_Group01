const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: "app.bundle.js",
  },
  module: {
    rules: [{ test: /\.txt$/i, use: "raw-loader" }],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  mode: "development",
};
