/* eslint-disable */
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
          presets: ['es2015', 'stage-0', 'react']
        }
      }, {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
      }
    ]
  },
};