const Mock = require('mockjs')

const TableData = []
const staArr = ['Draft', 'Publish', 'Delete']
for(let i = 0; i < 100; i++) {
  TableData.push({
    id: i,
    date: Mock.Random.date(),
    name: Mock.Random.cname(),
    val: Mock.Random.integer(1, 5),
    readings: Mock.Random.integer(0, 10000),
    status: Mock.mock({
      "flag|+2": staArr,
    })
  })
}
console.log(TableData, 'TableData')
module.exports = {
  TableData
}