

const cartData = require('./public/mock/index')
// 此文件一旦修改要重启服务
module.exports = {
  // 关闭代码检测工具
  lintOnSave: false,
  devServer: {
    before: function(app) {
      // 
      app.get('/api/list', (req, res) => {
        res.json({
          list: cartData,
          errCode: 0
        }) 
      })
    }
  }
}