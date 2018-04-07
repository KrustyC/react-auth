const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: [
    'regenerator-runtime/runtime',
    './src/app.jsx'
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true
  },
  devtool: 'source-map', // Make a development only file for this and the one below
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(css|scss|less)$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }, {
          loader: 'less-loader',
          options: { javascriptEnabled: true } 
        }]
      }
    ]
  },
  resolve: {
    alias: {
      uikit: path.join(__dirname, 'src/uikit')
    },
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new Dotenv({
      safe: true
    })
  ]
}
