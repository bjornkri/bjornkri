const path = require('path');

module.exports = {
  context: path.join(__dirname, '/app'),
  entry: {
    javascript: './js/bjornkri.jsx',
    html: './index.html',
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '/dist'),
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
