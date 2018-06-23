/* eslint "import/no-extraneous-dependencies": off */
/* eslint "global-require": off */
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';

module.exports = {
  rules: [


    // ---------------------------------------------------------------------------------- .ts, .tsx
    {
      test: /\.tsx?$/,
      use: [
        isProduction && {
          loader: 'babel-loader',
          // all this.states from react component is kept when the page is reloading
          options: { plugins: ['react-hot-loader/babel'] },
        },
        'ts-loader',
      ].filter(Boolean),
    },


    // ---------------------------------------------------------------------------------- css
    {
      test: /\.css$/,
      use: [
        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
        {
          loader: 'css-loader',
          query: {
            modules: true,
            sourceMap: !isProduction,
            importLoaders: 1,
            localIdentName: isProduction ? '[hash:base64:5]' : '[local]__[hash:base64:5]',
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('postcss-import')({ addDependencyTo: webpack }),
              require('postcss-url')(),
              require('postcss-cssnext')(),
              require('postcss-reporter')(),
              require('postcss-browser-reporter')({
                disabled: isProduction,
              }),
            ],
          },
        },
      ],
    },


    // ---------------------------------------------------------------------------------- html
    { test: /\.html$/, use: 'html-loader' },


    // ---------------------------------------------------------------------------------- image
    { test: /\.(png|svg)$/, use: 'url-loader?limit=8192' },
    { test: /\.(jpg|gif)$/, use: 'file-loader' },


    // ---------------------------------------------------------------------------------- font
    { test: /\.(woff2?|eot|ttf|otf)$/, use: 'file-loader' },


    // ---------------------------------------------------------------------------------- less
    {
      test: /\.less$/,
      loader: 'less-loader', // compiles Less to CSS
    },
  ],
};
