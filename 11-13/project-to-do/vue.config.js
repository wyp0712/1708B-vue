
const DmallJson = require('./public/Mock/dmall.json')

const homeJson = require('./public/Mock/home.json')
module.exports = {
  lintOnSave:false,
  devServer: {
    before: function(app) {
        
      app.get('/api/dmall', (req, res) => {
        res.json(DmallJson)
      })

      app.get('/api/list', (req, res) => {
        res.json(homeJson)
      })

    }
  }
}