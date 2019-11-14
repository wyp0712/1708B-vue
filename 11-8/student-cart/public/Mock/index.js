
const Mock = require('mockjs')
// import Mock from 'mockjs'
const CartData = []

for(let i = 0; i < 10; i++) {
  CartData.push({
     id: Mock.Random.id(),
     title: '苹果' + Mock.Random.title(2),
     img: Mock.Random.image('200x300', Mock.Random.color(), Mock.Random.city()),
     count: 1,
     price: 100
  })
}
// export default { CartData }
module.exports = {
  CartData
}

/**
 *  
 * 模块化： 
 * 
 *  前端模块化
 *   ES6模块
 *     import  from 
 *     
 *     export default 
 * 
 *  后端模块化  CommonJs
 *     
 *    require()
 * 
 *    module.exports = {}  
 *    
 * 
 */