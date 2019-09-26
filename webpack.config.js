const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    // [name] — filenames for multiple entry points
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    // for devServer
    publicPath: '/dist'
  },
  module: {
    // rules for loading and processing specific files
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  devServer: {
    // display errors on screen, not in console
    overlay: true
  }
};