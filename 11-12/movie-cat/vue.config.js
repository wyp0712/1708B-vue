
const MovieData = require('./public/mock/movie.json')
const CarouselData = require('./public/mock/mostExpacted.json')
module.exports = {
  lintOnSave: false,
  devServer: {
    before(app) {
      // movie接口
      // 路由名字和接口名字不能一样
      app.get('/api/list', (req, res) => {
        res.json({
          errCode: 0,
          list: MovieData
        })
      })

      // detail详情接口
      app.get('/api/detail', (req, res) => {
        let { id } = req.query;
        res.json({
          errCode: 0,
          list: MovieData.movieList.filter(item => item.id == id)
        })
      })

      // carousel接口
      app.get('/api/carousel', (req, res) => {
        res.json({
          errCode: 0,
          list: CarouselData
        })
      })

      const UserData = [
        {
          user: 'devin',
          pwd: 123
        }
      ]

      // 登陆接口
      const key = 'bawei'
      app.get('/api/login', (req, res) => {
        let { user, pwd } = req.query;
        let loginFlag = UserData.some(item => item.user == user && item.pwd == pwd)
        if (loginFlag) {
          res.json({
            errCode: 0,
            msg: '登陆成功',
            token: `${key}_${user}_${Date.now()}`
          })
        } else {
          res.json({
            errCode: -1,
            msg: 'fail'
          })
        }
      })

      // 
    }
  }
}