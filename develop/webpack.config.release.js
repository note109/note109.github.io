const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: "./app/app",
  output: {
    path: path.resolve("../"),
    publicPath: "/app/",
    filename: "app/bundle.js",
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "production"),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader?modules!sass-loader",
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
