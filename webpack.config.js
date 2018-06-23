const plugins = require('./webpack/plugins');
const path = require('path');
const modules = require('./webpack/modules');
const resolve = require('./webpack/resolve');
const devServer = require('./webpack/devServer');
const optimization = require('./webpack/optimization');
const node = require('./webpack/node');

// variables
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './dist');
const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';


const webpackConfig = {
  context: sourcePath,
  entry: {
    app: './start.tsx',
  },
  output: {
    path: outPath,
    filename: 'main.js',
    chunkFilename: '[chunkhash].js',
  },
  target: 'web',
  devtool: (isProduction) ? false : 'cheap-module-eval-source-map',
};

webpackConfig.module = modules;
webpackConfig.resolve = resolve;
webpackConfig.optimization = optimization;
webpackConfig.plugins = plugins;
webpackConfig.devServer = devServer;
webpackConfig.node = node;

module.exports = webpackConfig;
