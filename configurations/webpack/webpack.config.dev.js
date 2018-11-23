const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rules = require('./webpack.rules');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8080';

module.exports = {
  entry: {
    index:
      [
        '@babel/polyfill',
        './example/index.jsx',
      ],
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../../demo'),
    filename: '[name].js',
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
  target: 'web',
  devServer: {
    contentBase: './demo',
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST,
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './example/index.html',
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true,
      },
    }),
  ],
};
