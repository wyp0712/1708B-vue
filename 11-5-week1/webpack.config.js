// webpack.config.js

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // {
      //   test: /\.(sa|sc|c)ss$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //     'sass-loader'
      //   ]
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 确保引入这个插件
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
  },
  // resolve:{
  //   alias:{
  //     "@": path.join(__dirname,'src')
  //   }
  // },
}