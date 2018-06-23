/* eslint "import/no-extraneous-dependencies": off */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';

const plugins = [
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
    DEBUG: false,
  }),
  new WebpackCleanupPlugin(),
  new MiniCssExtractPlugin({
    filename: 'style.[contenthash].css',
    disable: !isProduction,
  }),
  new HtmlWebpackPlugin({
    template: './index.html',
  }),
];

if (isProduction) {
  plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
}

module.exports = plugins;
