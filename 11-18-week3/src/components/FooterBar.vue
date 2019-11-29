<template>
  <van-tabbar
    v-model="active"
    route
    >
    <van-tabbar-item icon="home-o"
      replace
      to="/"
    >首页</van-tabbar-item>

    <van-tabbar-item icon="search"  :info="getCount"
    replace
    to="/cart"
    >购物车</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  computed: {
    getCount() {
      return this.$store.getters.TotalCount
    }
  },
  
}
</script>
<style lang="scss">
  
</style>