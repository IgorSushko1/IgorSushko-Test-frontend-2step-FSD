/* eslint-disable indent */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [{
        test: /\.pug$/,
        use: [{
          loader: 'pug-loader',
          options: {
            pretty: true,
            exports: false,
          },
        }],
      },
      {
        test: /(\.scss)$/,
        use: [{
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /(\.css)$/,
        use: [{
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'ui-kit.html',
      template: './src/ui-kit.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'landing.html',
      template: './src/pages/landing/landing.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'registration.html',
      template: './src/pages/registration__basis/registration__basis.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'registration-sign-up.html',
      template: './src/pages/registration__sign-up/registration__sign-up.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'registration-sign-in.html',
      template: './src/pages/registration__sign-in/registration__sign-in.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'base-page.html',
      template: './src/pages/basis/basis.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'search.html',
      template: './src/pages/search/search.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'room-detail.html',
      template: './src/pages/room-detail/room-detail.pug',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      options: {
        // hmr: process.env.NODE_ENV === 'development',
      },
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new CopyWebpackPlugin([{
      from: './src/assets/images/',
      to: './imgs',
    }]),
    new CopyWebpackPlugin([{
      from: './src/assets/favicons/',
      to: './favicons',
    }]),
  ],
};