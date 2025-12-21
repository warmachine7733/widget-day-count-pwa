const CompressionPlugin = require("compression-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  entry: "./src/index.tsx",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "main.[contenthash].js",
    clean: true
  },
  plugins: [new CompressionPlugin()],
});
