<template>
  <div class="nav">
     <span 
     v-for="(item, index) in tabList" 
     :key="index"
     :class="{active: item.state === tabIndex}"
     @click="bindTabClick(index)"
     >
       {{item.name}}
     </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabIndex: 0,
      tabList: [
        {
          name: '商品',
          state: 0
        },
        {
          name: '评价',
          state: 1
        },
        {
          name: '商家',
          state: 2
        }
      ]
    }
  },
  methods: {
    bindTabClick(index) {
      this.tabIndex = index
      this.$emit('toNavEvent', index)
    }
  },
}
</script>
<style lang="scss">
  .nav {
    width: 100%;
    height: 40px;
    display: flex;
    border-bottom: 1px solid black;
    span {
      flex:1;
      text-align: center;
      line-height: 40px;
    }
  }
</style>