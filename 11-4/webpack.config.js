
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack')

const movieList = require('./mock/movie.json')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path:  __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // css
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader', // 生成节点，插入代码
          'css-loader',  // 转成可以使用的代码 CommonJs规范的代码 
          'sass-loader' // 编译css
        ]
      },
      // image file-loader  url-loader
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: '/img/',
              name: '[name].[ext]'
            }
          }
        ]
      },
      // 字体图标
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '/iconfont/',
            }
          }
        ]
      },
      // js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },
  plugins: [
     // html
     new HtmlWebpackPlugin({
       template: __dirname + '/src/index.html'
     }),
     new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new OptimizeCSSAssetsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000,
    host: '0.0.0.0', // localhost: 127.0.0.1   c   32 dirvers utc host
    before: function(app) {

      app.get('/list', (req, res) => {
        res.json({
          list: movieList,
          errCode: 0
        })
      })
    }
  }
}