const TabData = require('./public/mock/index')
module.exports = {
  lintOnSave: false,
  devServer: {
    before: function(app) {
      // tab切换接口
      app.get('/api/tab', (req, res) => {
        // 接收前端传输过来的参数
        let { type } = req.query;
        res.json({
          list: TabData[type],
          errCode: 0
        })
      })
    }
  }
}