var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: './client',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};