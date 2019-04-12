const webpack = require('webpack');
const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  devtool:'source-map',
  mode: 'development',
  entry: path.join(__dirname, 'client', 'src', 'client.js'),
  output: {
    filename: 'client_bundle.js',
    // output.path needs to be absolute
    path: path.join(__dirname, 'dist', 'public'),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new HtmlWebPackPlugin({
    //   template: path.join(__dirname, 'public', 'index.html'),
    //   filename: './index.html', // defined for the dist folder
    // }),
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: '[name].css',
    //   chunkFilename: '[id].css',
    // }),
  ],
};

module.exports = config;