const webpack = require('webpack');
const merge = require('webpack-merge');
const { resolve } = require('path');
const baseConfig = require('./webpack.config.base');

const config = merge.smart(baseConfig, {
  devtool: 'source-map',
  mode: 'production',
  output: {
    path: resolve(__dirname, 'build'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.(png|gif|jpg|woff2|ttf|svg)$/,
        use: ['url-loader'],
      },
    ],
  },
});

const appConfig = merge.smart(config, {
  target: 'electron-renderer',

  entry: {
    app: ['./src/renderer/app'],
  },
});

const newTabConfig = merge.smart(config, {
  target: 'web',

  entry: {
    newtab: ['./src/renderer/newtab'],
  },
});

const historyConfig = merge.smart(config, {
  target: 'web',

  entry: {
    history: ['./src/renderer/history'],
  },
});

const aboutConfig = merge.smart(config, {
  target: 'web',

  entry: {
    about: ['./src/renderer/about'],
  },
});

const bookmarksConfig = merge.smart(config, {
  target: 'web',

  entry: {
    bookmarks: ['./src/renderer/bookmarks'],
  },
});

module.exports = [
  appConfig,
  newTabConfig,
  historyConfig,
  aboutConfig,
  bookmarksConfig,
];
