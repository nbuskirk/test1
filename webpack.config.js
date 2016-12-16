var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: [APP_DIR + '/index.jsx','file?name=index.html!jade-html!./src/statics/index.jade'],
    output: {
      path: BUILD_DIR,
      filename: 'bundle.js'
  },
  module : {
    loaders : [{ test : /\.jsx?/, include : APP_DIR, loader : 'babel' },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.jade$/, include : 'index.jade', loader: "jade" },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9\.=]+)?$/, loader: 'file-loader' }]
  }
}

module.exports = config;
