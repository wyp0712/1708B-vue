
const eleData = require('./public/mock/data.json')
module.exports = {
  lintOnSave: false, // 关闭eslint代码检测
  devServer: {
    before: function(app) {
        
      // ele 列表接口
      app.get('/api/list', (req, res) => {
        res.json(eleData)
      })
    }
  }
}