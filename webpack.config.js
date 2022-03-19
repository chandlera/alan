/* eslint-env node */
const path = require('path');
const HandlebarsPlugin = require('handlebars-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/js/main.js',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
    ],
  },
  plugins: [
    new HandlebarsPlugin({
      entry: path.join(__dirname, 'src', 'views', '*.hbs'),
      output: path.join(__dirname, 'dist', '[name].html'),
      partials: [
        path.join(__dirname, 'dist', 'partials', '*.hbs'),
        path.join(__dirname, 'src', 'views', 'partials', '*.hbs'),
        path.join(__dirname, 'src', 'views', 'layouts', '*.hbs'),
      ],
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public', '.well-known', 'cf-2fa-verify.txt'),
          to: path.resolve(__dirname, 'dist', '.well-known', 'cf-2fa-verify.txt'),
        },
      ],
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } },
          {
            loader: 'eslint-loader',
            options: {
              useEslintrc: true,
              failOnError: true,
              configFile: path.join(__dirname, '.eslintrc'),
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
              outputPath: 'images/',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: false,
              optipng: {
                enabled: true,
              },
            },
          },
        ],
      },
    ],
  },
};
