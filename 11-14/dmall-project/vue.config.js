
const dmallData = require('./public/Mock/dmall.json')
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
    }
  }
}