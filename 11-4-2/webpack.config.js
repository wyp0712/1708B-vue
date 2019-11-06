
const miniCss = require('mini-css-extract-plugin')
const optimizeCss = require('optimize-css-assets-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          miniCss.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
     new miniCss({
       filename: './css/[name].css'
     }),
     new optimizeCss()
  ]
}