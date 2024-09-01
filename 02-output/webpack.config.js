const path = require("node:path");

module.exports = {
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, "compile"),
    filename: "app.bundle.js",
  },
};
