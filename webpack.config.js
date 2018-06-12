const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index:
      [
        'babel-polyfill',
        './source/index.js',
      ],
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, './dist'),
    filename: '[name].umd.js',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: 'babel-loader',
      },
    ],
  },
  target: 'web',
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
};
