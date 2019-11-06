// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin()
  ],
  devServer: {
    port: 8000, // 端口
    host: '0.0.0.0',
    open: true,
    before: function (app, server) {
      // console.log(server.options, 'server')
      app.get('/movie/list', function (req, res) {
        res.json({
          list: 'hello world'
        })
      })
    }
  }
}