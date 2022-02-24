var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

// webpack config
module.exports = {
  mode: 'none', // mode에는 3가지 종류가 있다. production, development, none
  entry: './index.js',
  output: {
    filename: 'bundle.js', //'[name][chunkhash].js'
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
