const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'public/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'public/js/bundled'),
    filename: 'bundle.js',
    clean: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
