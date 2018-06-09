require('dotenv').config(); // Loads environment variables from a .env file into process.env
const webpack = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const path = require('path');

module.exports = {
  entry: {
    index:
      [
        'babel-polyfill',
        './src/index.js',
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
      }
    ]
  },
  performance: {
    hints: 'error',
    maxAssetSize: 250000,
    maxEntrypointSize: 400000,
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    },
  },
  optimization: {
    nodeEnv: 'production',
    minimize: true,
  },
  target: 'web',
  plugins: [
    new WebpackCleanupPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
};
