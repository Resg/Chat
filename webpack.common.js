const path = require('path');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const outPath = path.join(__dirname, '/dist');


module.exports = {
  watch: true,
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
      {
        test: /\.s[ac]ss$/,
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
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
    }),

    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'src/assets'),
        to: path.join(outPath, 'assets')
      },
    ]),
  ],
  node: {
    fs: 'empty',
    net: 'empty',
  },
};
