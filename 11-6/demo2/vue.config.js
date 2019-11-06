
// 此文件夹一旦修改必须重启服务
const movieData = require('./public/mock/movie.json')
module.exports = {
  // 关闭eslint
  lintOnSave: false,
  devServer: {
    before: function(app) {
      app.get('/list', (req, res) => {
        res.json(movieData)
      })
    }
  }
}