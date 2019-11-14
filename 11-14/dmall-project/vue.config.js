
const dmallData = require('./public/Mock/dmall.json')
const dmallData2 = require('./public/Mock/dmall2.json')
module.exports = {
  lintOnSave: false,
  devServer: {
    before (app) {

      // dmall列表数据
      app.get('/api/list', (req, res) => {
        res.json({
          errCode: 0,
          list: dmallData
        })
      })

      app.get('/api/list2', (req, res) => {
        res.json({
          errCode: 0,
          list: dmallData2
        }) 
      })
    }
  }
}