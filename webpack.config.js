const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  devServer: {
    port:8080,
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    hot: true
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader","css-loader", "sass-loader"]
      },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
}