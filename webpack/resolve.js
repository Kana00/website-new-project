const path = require('path');

module.exports = {
  extensions: ['.js', '.ts', '.tsx'],
  // Fix webpack's default behavior to not load packages with jsnext:main module
  // (jsnext:main directs not usually distributable es6 format, but es6 sources)
  mainFields: ['module', 'browser', 'main'],
  alias: {
    app: path.resolve(__dirname, 'src/app/'),
  },
};
