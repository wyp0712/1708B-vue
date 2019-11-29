
// const CartData = require('./public/Mock/index')
module.exports = {
  lintOnSave: false,
  devServer: {
    before(app) {

      // 列表接口
      // app.get('/api/list', (req, res) => {
      //   res.json({
      //     errCode: 0,
      //     list: CartData
      //   })
      // })

      // 详情接口
      // app.get('/api/detail', (req, res) => {
      //   let { id } = req.query
      //   res.json({
      //     errCode: 0,
      //     list: CartData.filter(val => val.id == id)
      //   })
      // })


    }
  }
}