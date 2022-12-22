/* eslint-env node */
const path = require('path');
const HandlebarsPlugin = require('handlebars-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/js/main.js',
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
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
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
        use: [{ loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } }],
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
