const {VantResolver, VarletUIResolver} = require("unplugin-vue-components/resolvers");
const ComponentsPlugin = require("unplugin-vue-components/webpack");
const TerserPlugin = require("terser-webpack-plugin");
const sdate = require('silly-datetime');
const path = require("path");
const { config } = require("process");
// const webpackAanalyzer = require('webpack-bundle-analyzer');

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  // chunks:[], // 和下边的  cacheGroups  相匹配
  configureWebpack: () => {
    config.externals = {}
    if (process.env.NODE_ENV === 'prod') {
      const plugins = []
      plugins.push(
        new TerserPlugin({
          terserOptions: {
            compress: {
              pure_funcs: ['console.log'] // 移除console
            },
          },
        })
      )
      config.plugins = [...config.plugins, ...plugins]
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch');
    config.plugins.delete('preload');
    config.plugin('define').tap(args => {
      args[0]['process.env'].PACK_DATE = JSON.stringify(sdate.format(new Date(), 'YYYYMMDD HHmmss'));
      return args;
    });
    // config.plugin('webpack-bundle-analyzer').use(webpackAanalyzer.BundleAnalyzerPlugin)
    // 打包体积优化
    // 分包加载
    config.merge({
      optimization:{
        splitChunks: {
          chunks: 'all',
          chunks: 'async', // 代码分割时对异步代码生效，all：所有代码有效，inital：同步代码有效
          minSize: 30000, // 代码分割最小的模块大小，引入的模块大于 30000B 才做代码分割
          minChunks: 1, // 引入的次数大于等于1时才进行代码分割
          maxAsyncRequests: 6, // 最大的异步请求数量,也就是同时加载的模块最大模块数量
          maxInitialRequests: 4, // 入口文件做代码分割最多分成 4 个 js 文件
          automaticNameDelimiter: '.',
          cacheGroups: {
            // 配置准备分包的组件和插件
          }
        },
        // 只有在生产环境才分包
        minimize: (process.env.NODE_ENV === 'prod')
      }
    })

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

