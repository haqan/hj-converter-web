const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require("autoprefixer");
const Dotenv = require('dotenv-webpack');
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';
const plugins = devMode ?
  [
    new Dotenv(),

    new webpack.WatchIgnorePlugin([
      path.join(__dirname, "node_modules")
    ]),
  ]
  :
  [
    new Dotenv(),
    new UglifyJsPlugin()
  ];

const modules = {
  rules: [
    {
      test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: "file-loader",
      options: {
        name: "dist/media/[name].[ext]",
        publicPath: url => url.replace(/dist/, "")
      }
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.jsx$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader"
      }
    }
  ]
};

const clientConfig = {
  entry: "./browser/index.js",
  mode: devMode ? "development" : "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  context: path.resolve(__dirname, 'src'),
  plugins: plugins,
  module: modules,
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};

const serverConfig = {
  entry: "./server/index.js",
  target: "node",
  mode: devMode ? "development" : "production",
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: modules,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: plugins
};

module.exports = [clientConfig, serverConfig];
