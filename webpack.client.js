const path = require("path");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'src/client/index.js'),
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
        },
      },
      {
        test: /\.css?$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
     }
    ],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
  },
};