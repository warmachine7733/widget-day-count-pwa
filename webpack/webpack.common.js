const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

const SRC_DIR = path.resolve("src");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        include: SRC_DIR,
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        include: SRC_DIR,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
     new CopyWebpackPlugin({
      patterns: [
        { from: "public/manifest.json", to: "manifest.json" },
        { from: "public/service-worker.js", to: "service-worker.js" },
        { from: "public/icon-192.png", to: "icon-192.png" },
        { from: "public/icon-512.png", to: "icon-512.png" },
      ]}),
    new HtmlWebpackPlugin({     
      favicon: "./public/favicon.ico",
      template: path.resolve(__dirname, "../public/index.html"),
      inject: "body",
      scriptLoading: "defer", 
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
