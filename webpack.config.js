module.exports = {
  entry: "./src/index.js",
  resolve: {
    extensions: ["", ".js"]
  },
  output: {
    path: "./dist",
    filename: "index.js",
    library: "immutableDevTools",
    libraryTarget: "commonjs2"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }
    ]
  }
};
