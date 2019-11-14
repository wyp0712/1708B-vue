<template>
  <div class="app-footer">
     <router-link to="/">首页</router-link>
     <router-link to="/about">关于</router-link>
     <router-link to="/about">关于</router-link>
     <router-link to="/about">关于</router-link>
  </div>
</template>
<script>

export default {
  created() {
    this.$EventBus.$on('toFooter', res => {
      console.log(res, 'res')
    })
  }
}
</script>
<style lang="scss">
  .app-footer {
    width: 100%;
    display: flex;
    a {
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>