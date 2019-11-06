
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin  = require('vue-loader/lib/plugin')

const movie = require('./mock/movie.json')

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // 解析.vue文件
      {
        test: /\.vue$/,
        loader: 'vue-loader' 
      },
      // 解析sass文件 
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    // 确保引入这个插件 让所有的loader 在.vue文件中生效
    new VueLoaderPlugin(), 
    new HtmlWebpackPlugin()
  ],
  devServer: {
    port: '8080',
    host: '127.0.0.1', // 0.0.0.0 
    open:true,
    before: function(app) {
      app.get('/list', (req, res) => {
        res.json({
          list: movie,
          errCode: 0 
        })
      }) 
    }
  }
}