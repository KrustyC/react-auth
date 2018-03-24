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
      }
    ]
  },
  resolve: {
    // alias: {
    //   // UiKit: path.resolve(__dirname, 'src/uikit'),
    //   Components: path.resolve(__dirname, 'src/views/components'),
    //   Elements: path.resolve(__dirname, 'src/views/components/elements'),
    //   Utils: path.resolve(__dirname, 'src/utils/')
    // },
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
