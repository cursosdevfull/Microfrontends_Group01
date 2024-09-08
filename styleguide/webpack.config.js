const path = require("node:path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    libraryTarget: "system",
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/i,
        use: {
          loader: "babel-loader",
        },
      },
      {
        //test: /\.(png|jpg|jpeg|gif)/i
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "images/[name].[hash:8].[ext]",
            publicPath: "/",
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[hash:8].[ext]",
              publicPath: "/",
            },
          },
        ],
      },
    ],
  },
  plugins: [],
  externals: ["single-spa"],
  devServer: {
    port: 9004,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
