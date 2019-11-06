// npm   npm publish  
//  cnpm

import './css/index.scss'
import './iconfont/iconfont.css'
import axios from 'axios'

const spans = document.querySelectorAll('.box span')

spans.forEach((item, index) => {
  item.onclick = function() {
    console.log(index)
    getData(index)
  }
})


function getData() {
  axios.get('/list').then(res => {
    console.log(res.data.list.movieList, 'res')
  })
}
