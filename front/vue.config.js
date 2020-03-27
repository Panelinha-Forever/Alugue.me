const path = require('path');
// const version = require("./appversion.json").version_app;

let cssConfig = {};
let chainWebpackConfig = config => config;
const contentHash =
  process.env.NODE_ENV === 'production' ? '.[contenthash:8]' : '';

cssConfig.extract = {
  filename: `css/[name]${contentHash}.${1}.css`,
  chunkFilename: `css/[name]${contentHash}.${1}.css`
};

chainWebpackConfig = config => {
  config.output
    .filename(`js/[name]${contentHash}.${1}.js`)
    .chunkFilename(`js/[name]${contentHash}.${1}.js`),
    config.module.rules.delete('eslint');
};

module.exports = {
  chainWebpack: chainWebpackConfig,
  css: cssConfig,
  outputDir: path.resolve(__dirname, 'dist')
};
