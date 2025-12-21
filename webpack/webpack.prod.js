const CompressionPlugin = require("compression-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require('path');

module.exports = merge(common, {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "main.js",
    clean: true,
  },
  plugins: [new CompressionPlugin()],
});
