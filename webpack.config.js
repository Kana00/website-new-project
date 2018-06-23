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


const defaultConfiguration = {
  context: sourcePath,
  entry: {
    app: './start.tsx',
  },
  output: {
    path: outPath,
    filename: 'bundle.js',
    chunkFilename: '[chunkhash].js',
  },
  target: 'web',
};

defaultConfiguration.module = modules;
defaultConfiguration.resolve = resolve;
defaultConfiguration.optimization = optimization;
defaultConfiguration.plugins = plugins;
defaultConfiguration.devServer = devServer;
defaultConfiguration.node = node;

module.exports = defaultConfiguration;
