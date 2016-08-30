const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    style: path.join(__dirname, 'src/stylesheets/style.css')
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css')
    }, {
      test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file'
    }]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[id].js',
    path: path.join(__dirname, 'public', 'assets'),
    publicPath: '/assets/'
  }
};
