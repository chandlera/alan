// webpack.config.js
var path = require('path');

module.exports = {
  entry: ['./public/js/main'], // file extension after index is optional for .js files
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js'
  }
};
