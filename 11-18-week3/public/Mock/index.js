
const Mock = require('mockjs')
const UserData = []
for(let i= 0; i < 10; i++) {
  UserData.push({
    id: Mock.Random.id(),
    img: Mock.Random.image('100x100', Mock.Random.color()),
    name: Mock.Random.cname(3),
    price: 100,
    count: 0,
    path: `detail/${i}`,
    isJian: false
  })
}
console.log(UserData, 'UserData')
module.exports = UserData