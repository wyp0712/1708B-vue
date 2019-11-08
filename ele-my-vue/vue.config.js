
const eleData = require('./public/mock/data.json')
// 此文件一旦修改要重启服务
module.exports = {
  // 关闭代码检测工具
  lintOnSave: false,
  devServer: {
    before: function(app) {
      // 
      app.get('/api/list', (req, res) => {
        res.json({
          list: eleData,
          errCode: 0
        }) 
      })
    }
  }
}