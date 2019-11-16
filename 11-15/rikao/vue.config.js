
const TabData = require('./public/Mock/index')

module.exports = {
  lintOnSave: false,
  devServer: {
    before(app) {
      // tab接口
      app.get('/api/tab', (req, res) => {
        let { type } = req.query;
        res.json({
          list: TabData[type],
          errCode: 0
        })
      })
    }
  }
}