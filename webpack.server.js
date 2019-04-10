const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  target: 'node',
  entry: path.join(__dirname, 'server', 'src', 'server.js'),
  output: {
    filename: 'server_bundle.js',
    // output.path needs to be absolute
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    //   {
    //     test: /\.css$/,
    //     use: ['style-loader', 'css-loader'],
    //   },
    //   {
    //     test: /\.html$/,
    //     use: [
    //       {
    //         loader: 'html-loader',
    //         options: { minimize: false },
    //       },
    //     ],
    //   },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: [webpackNodeExternals()],
};

module.exports = config;