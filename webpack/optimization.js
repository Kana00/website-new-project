module.exports = {
  splitChunks: {
    name: true,
    cacheGroups: {
      commons: {
        chunks: 'initial',
        minChunks: 2,
      },
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        chunks: 'all',
        priority: -10,
      },
    },
  },
  runtimeChunk: true,
};
