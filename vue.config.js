/*const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
*/
const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/dental-blade/' : '/',
  outputDir: 'dist',
  filenameHashing: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'dental-blade';
        return args;
      });
  }/*,
  chainWebpack: config => {
    const fileLoaderRule = config.module.rule('images');
    fileLoaderRule.uses.clear();
    fileLoaderRule
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .tap(options => ({
        name: 'img/[name].[hash:7].[ext]',
        ...options
      }));
  }*/
};

