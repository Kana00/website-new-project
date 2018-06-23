const path = require('path');

const sourcePath = path.join(__dirname, './src');

module.exports = {
  contentBase: sourcePath,
  hot: true,
  inline: true,
  historyApiFallback: {
    disableDotRule: true,
  },
  stats: 'minimal',
};
