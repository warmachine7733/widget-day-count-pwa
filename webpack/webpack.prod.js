const CompressionPlugin = require("compression-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require('path');

module.exports = merge(common, {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  mode: "production",
  output: {
    publicPath: "/",
    filename: "main.js",
  },
  plugins: [new CompressionPlugin()],
});
