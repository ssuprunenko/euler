'use strict';
var webpack = require('webpack');

module.exports = {
  entry: './web/static/js/app.js',
  output: {
    filename: 'main.js',
    path: './priv/static/js/'
  },
  resolve: {
    extensions: ['', '.js', '.cjsx', '.coffee'],
    modulesDirectories: [
      './node_modules',
      './deps/phoenix/web/static/js',
      './deps/phoenix_html/web/static/js'
    ],
  },
  debug: true,
  devtool: 'source-map',
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,                       loader: 'babel?presets[]=es2015', exclude: /(node_modules)/ },
      { test: /\.(png|jpg)$/,                  loader: 'url-loader?prefix=assets/' },
      { test: /\.(sass|scss)$/,                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax' },
      { test: /\.css$/,                        loader: 'style-loader!css-loader' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
};
