const Mock = require('mockjs')

const free = []
const pay = []
const payNew = []

for(let i = 0; i < 10; i++) {
  free.push({
    id: Mock.Random.id(),
    name: 'free',
    img: Mock.Random.image('100x100',Mock.Random.color(), Mock.Random.city()),
    title: Mock.Random.ctitle()
  })
  pay.push({
    id: Mock.Random.id(),
    name: 'free',
    img: Mock.Random.image('100x100',Mock.Random.color(), Mock.Random.city()),
    title: Mock.Random.ctitle()
  })
  payNew.push({
    id: Mock.Random.id(),
    name: 'free',
    img: Mock.Random.image('100x100',Mock.Random.color(), Mock.Random.city()),
    title: Mock.Random.ctitle()
  })
}

const TabData = {
  free: free,
  pay: pay,
  payNew: payNew
}

module.exports = TabData