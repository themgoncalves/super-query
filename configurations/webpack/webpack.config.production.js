const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rules = require('./webpack.rules');

module.exports = {
  entry: {
    app:
      [
        '@babel/polyfill',
        './example/index.jsx',
      ],
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../../demo'),
    filename: 'js/[name].bundle.[hash].js',
    chunkFilename: 'js/[name].[hash].[chunkhash].chunk.js',
    crossOriginLoading: 'anonymous',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@themgoncalves/super-query': path.resolve(__dirname, '../../src'),
    },
  },
  module: {
    rules,
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
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          minChunks: 2,
        },
        default: {
          minChunks: 2,
          reuseExistingChunk: true,
        },
      },
    },
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
    new HtmlWebpackPlugin({
      template: './example/index.html',
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true,
      },
    }),
  ],
};
