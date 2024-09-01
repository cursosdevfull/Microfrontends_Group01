module.exports = {
  output: {
    filename: "app.bundle.js",
  },
  module: {
    rules: [{ test: /\.txt$/i, use: "raw-loader" }],
  },
};
