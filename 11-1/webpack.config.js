/**
 *           webpack  webpack-cli 
 *           
 * 1. 入口
 * 2. 出口
 * 3. loader 
 *        css
 *        image
 *        html
 *        js --babel-loader @babel/core @babel/preset-env 
 * 4. 插件 html-webpack-plugin
 * 
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const list = require('./mock/data.json')
const webpack = require('webpack')
// 抽离css 合并
const MiniCss = require('mini-css-extract-plugin')
// 压缩css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development', // production
  entry: './src/main.js', // 主入口文件
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // css sass scss
      {
        test: /\.(sa|sc|c)ss$/,
        use: [  // 执行顺序 从下往上执行
          // 'style-loader',
          MiniCss.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      // image  file-loader  url-loader
      {
        test: /\.(jpg|png|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 小于这个大小 就打包成base64编码图片
              outputPath: 'img/',
              name: '[name].[ext]'
            }
          }
        ]
      },
      // iconfont 字体处理  file-loader
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'iconfont/',
            }
          }
        ]
      },

      // js es6转es5
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
       // html-loader 处理内联图片 DOM结构图片 <img src> 
      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'html-loader',
            options: ['img:src', ':data-src']
          }
        ]
      }
    ]
  },
  plugins: [
    new OptimizeCSSAssetsPlugin(), // 压缩css插件
    // 热更新插件
    new webpack.HotModuleReplacementPlugin({}),
    // 抽离css插件
    new MiniCss({
      filename: 'css/[name].css'
    }),
    // html插件，自动将js css注入在文件中
    new HtmlWebpackPlugin({
      template: path.join('src', 'index.html')
    }),
  ],
  // webpack-dev-server 起服务 下包  
  devServer: {
    contentBase: './dist', // 查找打开服务的目录
    open: true,
    hot: true, // 热更新
    before: function(app) { // 写接口的地方
      // 轮播图接口
      app.get('/carousel', (req, res) => {
         res.json(list)
      })

    }
  }

}