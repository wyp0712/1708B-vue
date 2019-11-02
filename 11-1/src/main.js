
// 主入口文件

import './js/index.js'
import './css/index.scss'

import Swiper from 'swiper'
import 'swiper/css/swiper.css'

import './iconfont/iconfont.css'


import axios from 'axios'

const wrapper = document.querySelector('.swiper-wrapper')

axios.get('/carousel').then(res => {
  console.log(res)
  wrapper.innerHTML = res.data.map(item => {
    return `<div class="swiper-slide">
             <img src=${item.img} alt="">
           </div>`
  }).join('')

  new Swiper('.swiper-container', {
    loop:true
  })
})

