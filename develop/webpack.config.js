const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: [
    "webpack-hot-middleware/client",
    "./app/app",
  ],
  output: {
    path: path.resolve("./dist"),
    publicPath: "/app/",
    filename: "bundle.js",
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: ["react-hmre"],
        },
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader?modules&localIdentName=[path]__[local]___[hash:base64:5]!sass-loader",
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        include: __dirname,
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.ico$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file-loader?name=[path][name].[ext]",
      },
    ],
  },
  resolve: {
    root: [
      path.resolve("./"),
    ],
  },
};
