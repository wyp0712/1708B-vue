const Mock = require('mockjs');

const UserData = []

for(let i = 0; i < 20; i++) {
  UserData.push({
    id: Mock.Random.id(),
    name: Mock.Random.cname(),
    color: Mock.Random.color(),
    title: Mock.Random.ctitle(5),
    img: Mock.Random.image('300x200',Mock.Random.color(), Mock.Random.ctitle(2)),
    pro:Mock.Random.province(),
    date: Mock.Random.date()
  })
}

module.exports = {
  UserData
}

// console.log(UserData, 'UserData')