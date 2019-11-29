<template>
  <div class="home">
    <HomeList :cartData="cartData"/>
  </div>
</template>

<script>
import HomeList from '../components/HomeList'
// @ is an alias to /src
import { Dialog } from 'vant';
export default {
  name: 'home',
  components: {
    HomeList
  },
  data() {
    return {
      cartData: []
    }
  },
  computed: {
    getCartData() {
      return this.$store.state.cartList
    },
    getShowDialog() {
      return this.$store.state.showDialog
    }
  },
  created() {
    this.getData()
  },
  methods: {
    bindDetail(item) {
      this.$router.push({
        path: `/detail/${item.id}`
      })
    },
    addItem(item) {
      item.isJian = true
      this.$store.commit('toCart', item) 
      // 每次点击的时候都去调用一次比对数据
      this.compareData()
    },
    removeItem(index, item) {
      this.$store.commit('removeItem', index);
    },
    compareData() {
      this.cartData.forEach(item => {
        this.getCartData.map(val => {
          if (item.id === val.id) {
            item.count = val.count
          }
        })
      })
    },
    getData() {
      this.$http.get('/api/list').then(res => {
        this.cartData = res.data.list 
        // 进入页面 比对数据
        this.compareData()
      })
    }
  },
}
</script>
