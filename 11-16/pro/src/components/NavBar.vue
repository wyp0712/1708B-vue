<template>
  <div class="nav-bar">
     <span>综合</span> 
     <span>综合</span> 
     <span>综合</span> 
     <span>综合</span> 
     <span @click="bindTabQiehuan" :class="{active: isActive}">切换样式</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true
    }
  },
  methods: {
    bindTabQiehuan() {
      this.isActive = !this.isActive
      if (this.isActive) {
        this.$store.commit('setClass', 'left')
      } else {
        this.$store.commit('setClass', 'right')
      }
    }
  },
}
</script>
<style lang="scss">
  .nav-bar {
    width: 100%;
    line-height: 35px;
    display: flex;
    span {
      flex:1;
      text-align: center;
      line-height: 35px;
    }
    .active {
      background: red;
      color:#fff;
      font-size: 16px;
      text-align: center;
      line-height: 35px;
    }
  }
</style>