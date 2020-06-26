module.exports = {
  chainWebpack(config) {
    config.plugins.delete('prefetch');
  },
  productionSourceMap: false,
  devServer: {
    port: 3000,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
