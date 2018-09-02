const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const browserConfig = {
  entry: "./src/browser/index.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace(/public/, "")
        }
      },
      {
         test: /\.scss$/,
         use: [
           {
             loader: 'style-loader'
           },
             {
             loader: 'css-loader', // translates CSS into CommonJS
             options: {
               sourceMap: true,
             },
           },
           {
             loader: 'sass-loader', // compiles Sass to CSS
             options: {
               sourceMap: true,
             },
           }
         ]
       },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: { presets: ["react-app"] }
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  output: {
    path: __dirname,
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace(/public/, ""),
          emit: false
        }
      },
      {
         test: /\.scss$/,
         use: [
           {
             loader: 'style-loader'
           },
             {
             loader: 'css-loader', // translates CSS into CommonJS
             options: {
               sourceMap: true,
             },
           },
           {
             loader: 'sass-loader', // compiles Sass to CSS
             options: {
               sourceMap: true,
             },
           }
         ]
       },
       {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: { presets: ["react-app"] }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

};

module.exports = [browserConfig, serverConfig];
