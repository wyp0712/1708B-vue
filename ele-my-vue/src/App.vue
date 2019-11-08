<template>
  <div id="app">
     <div class="app-header">
       <HeaderBar />
     </div>

     <NavBar @toNavBar="toNavBar" />

     <div class="app-main">
        <component :is="componentId" :floorIndex="floorIndex" @toParent="toParent" @toFooterBar="toFooterBar"  :eleData="eleData"></component>
     </div>
     <div class="app-footer">
       <!-- {{getTotalPrice}} -->
       <FooterBar :totalCount="getTotalPrice"/>
     </div>
  </div>
</template>

<script>
/*
 动态组件：
  <component :is="动态绑定组件名字"></component>
  通过数据的动态切换去实现组件的切换

 子父传参数： 
   子：this.$emit('自定义事件名字', '你要传的值')
   父：组件标签上进行监听 <NavBar @toNavBar="toNavBar" /> 并且在methods中定义函数，拿到数据
*/ 
import HeaderBar from './components/HeaderBar'   // 头部组件
import FooterBar from './components/FooterBar'   // 尾部组件
import NavBar from './components/NavBar'        // 导航组件

import Students from './components/student'

import GoodsItem from './components/GoodsItem' // 商品组件
import EvaluateCom from './components/Evaluate' // 评价组件
import MerchantCom from './components/Merchant' // 商家组件
export default {
  name: 'app',
  data() {
    return {
      componentId: 'GoodsItem',
      eleData: {},
      totalCount: 0,
      cartList: [],
      floorIndex: 0
    }
  },
  components: {
    Students,
    HeaderBar,
    FooterBar,
    NavBar,
    GoodsItem,
    EvaluateCom,
    MerchantCom
  },
  created() {
    this.getEleData()
  },
  computed: {
    getTotalPrice() {
      return this.cartList.reduce((prev, next) => {
        return prev + next.count 
      }, 0)
    }
  },
  methods: {
    // 监听右边组件中数量的增减
    toFooterBar(cartData) {
      // console.log(cartData, 'carrdata')
      this.cartList = cartData
      //  console.log(count, 'count------count') 
    },
    toParent(ind) {
      // console.log(ind, 'ind-------ind')
      this.floorIndex = ind
    },
    // 获取数据函数
    getEleData() {
      this.$http.get('/api/list').then(res => {
        // console.log(res.data.list)
        this.eleData = res.data.list
      })
    },
    toNavBar(ind) {
      // console.log(ind, '我是子元素传过来的下标')
      switch(ind) {
        case 0:
          this.componentId = 'GoodsItem'
        break;

        case 1:
          this.componentId = 'EvaluateCom'
        break;

        case 2:
          this.componentId = 'MerchantCom'
        break;
      }
    }
  },

}
</script>

<style lang="scss">
@import url('./assets/css/reset.scss');
html {
  font-size: calc(100 / 750 * 100vw);
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.app-header {
  width: 100%;
  height: 3rem;
  border-bottom:1px solid black;
}
.app-main {
  width: 100%;
  height: 100%;
  flex:1;
  overflow: auto;
}
.app-footer {
  width: 100%;
  height: .9rem;
  border-top:1px solid black;
}

</style>
