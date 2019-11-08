<template>

  <ul class="cart-box">
    <li v-for="(item, index) in cartList" :key="index">
      <span> <img :src="item.img" alt=""> </span>
      <span> {{item.title}}</span><br>
      <span class="remove" @click="removeItem(item, index)">-</span>
      <span class="count"> {{item.count}} </span>
      <span class="add" @click="addItem(item, index)">+</span>
      <hr>
    </li>

    <TotalPrice :total="total"/>
    <Dialog @toParent="toParent" v-show="isShowDialog" />
</ul>
</template>
<script>
import TotalPrice from './TotalPrice'
import Dialog from './Dialog'
export default {
  props: {
    cartList: Array, // 接收列表数据
    default() {
      return 'item'
    }
  },
  data() {
    return {
      total: 0,
      isShowDialog: false, // 控制弹出框显示隐藏
      removeIndex: 0       // 删除下标
    }
  },
  components: {
    TotalPrice,
    Dialog
  },
  watch: {
    cartList(v) {
      this.getTotalPrice()
    }
  },
  created() {
    this.getTotalPrice()  // 进入页面先调用总价函数
  },
  methods: {
    // 接收弹出框组件通过子传父传过来的值
    toParent(msg) {
      if (msg.code == 0) { // 如果为0删除数据
        this.cartList.splice(this.removeIndex, 1)
      }
      this.getTotalPrice() // 并且调用总价函数
      this.isShowDialog = false // 取消弹出框
    },
    // 总价函数
    getTotalPrice() {
      this.total = this.cartList.reduce((pre, next) => {
        return  pre += next.count * next.price
      }, 0)
      // console.log(this.total, 'total-------zongjia')
    },
    // 删除函数
    removeItem(item, index) {
      this.removeIndex = index // 每次点击减的时候更新下标
      if (item.count <=1 ) { // 判断到1的情况，
        this.isShowDialog = true // 调出弹出框，并且判断代码是否要接着往下运行
        return
      }
      item.count--

      this.getTotalPrice()
    },
    addItem(item, index) {
      item.count++
      this.getTotalPrice()
    }
  }
}
</script>
<style lang="scss">
  
</style>