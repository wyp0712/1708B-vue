<template>
  <div id="app">
    <header class="header"></header> 

    <KeyUpComponent />
    <div class="main">
      <CartList  :cartList="cartList" />
    </div>
  </div>
</template>

<script>

import CartList from './components/CartList'
import KeyUpComponent from './components/KeyUp'
export default {
  name: 'app',
  data() {
    return {
       cartList: [],
       inputVal: false
    }
  },
  components: {
    CartList,
    KeyUpComponent
  },
  created() {
    this.getData()
  },
  methods: {
    submit() {
      console.log(this.inputVal)
    },
    getData() { // 请求购物车列表数据
      this.$http.get('/api/list').then(res => {
         console.log(res.data.list.CartData)
         this.cartList = res.data.list.CartData
      })
    }
  },
}
</script>

<style lang="scss">
@import url('./assets/css/reset.scss');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header, footer {
  width: 100%;
  height: 45px;;
  background: #ccc;
}
.main {
  width: 100%;
  flex:1;
  overflow: auto;
}

.cart-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 45%;
    padding: 10px;
    span {
      // display:  flex;
      // justify-content: center;
      // align-items: center;

      img {
        width: 80%;
        height: 60%; 
      }
    }
    .remove, .add, .count {
      display: inline-block;
      width: 25px;
      height: 25px;
      margin: 5px;
      border-radius: 4px;
      background: #eee;
      text-align: center;
      line-height: 25px;
      cursor: pointer;
    }
  }
}

</style>
