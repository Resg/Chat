const webpack = require('webpack');
const path = require('path');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const outPath = path.join(__dirname, '/dist');


module.exports = {
  entry: {
    main: [
      './src/main.js',
      './src/main.scss',
    ],
  },
  output: {
    path: outPath,
    filename: 'bundle.js',
  },

  target: 'web',
  resolve: {
    extensions: ['.js'],
    mainFields: ['browser', 'main'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {loader: 'url-loader?limit=10000'},
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 8000,
  },
  watch: true,
  devtool: 'source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
    }),
  ],
  node: {
    fs: 'empty',
    net: 'empty',
  },
};
