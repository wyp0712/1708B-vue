
const CartData = require('./public/Mock/index')

module.exports = {
  lintOnSave: false,
  devServer: {
    
    before: function(app) {
      
      // 接口，列表接口
      app.get('/api/list', (req, res) => {
        res.json({
          list: CartData,
          errCode: 0
        })
      })

    }
  }
}