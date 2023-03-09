const {VantResolver, VarletUIResolver} = require("unplugin-vue-components/resolvers");
const ComponentsPlugin = require("unplugin-vue-components/webpack");
const sdate = require('silly-datetime');
const path = require("path");
// const webpackAanalyzer = require('webpack-bundle-analyzer');

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugins.delete('prefetch');
    config.plugins.delete('preload');
    config.plugin('define').tap(args => {
      args[0]['process.env'].PACK_DATE = JSON.stringify(sdate.format(new Date(), 'YYYYMMDD HHmmss'));
      return args;
    });
    // config.plugin('webpack-bundle-analyzer').use(webpackAanalyzer.BundleAnalyzerPlugin)


  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver(), VarletUIResolver()],
      }),
    ],
  },

  devServer: {
    port: 8413,
  },
};

