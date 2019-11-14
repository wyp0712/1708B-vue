
const Mock = require('mockjs')

const Home = []
const Guonei = []
const Guoji = []
const History = []

for(let i = 0; i < 10; i++) {
   Home.push({
       id: Mock.Random.id(),
       img: Mock.Random.image('100x100', Mock.Random.color()),
       name: '首页' + Mock.Random.city()
    }),
   Guonei.push({
      id: Mock.Random.id(),
      img: Mock.Random.image('100x100', Mock.Random.color()),
      name: '国内' + Mock.Random.city()
    }),
    Guoji.push({
      id: Mock.Random.id(),
      img: Mock.Random.image('100x100', Mock.Random.color()),
      name: '国际' + Mock.Random.city()
    }),
    History.push({
      id: Mock.Random.id(),
      img: Mock.Random.image('100x100', Mock.Random.color()),
      name: '历史' + Mock.Random.city()
    })
}

const dataList = {
  'home': Home,
  'guonei': Guonei,
  'guoji': Guoji,
  'history': History
}
// console.log(dataList, 'datalist')
module.exports = dataList
