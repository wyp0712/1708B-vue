<template>
  <div class="nav-bar">
     <span 
      v-for="(item, index) in tabList" 
      :key="index"
      :class="{active: item.state === tabIndex}"
      @click="handleTabClick(index)"
      >
       {{item.name}}
     </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      ],
      tabIndex: 0
    }
  },
  methods: {
    handleTabClick(index) {
      this.tabIndex = index
      // 子父传参数
      // this.$emit('自定义事件名字', '你要传的值')
      this.$emit('toNavBar', index)
    }
  },
}
</script>
<style lang="scss">
.active {
  color: red;
}
.nav-bar {
  width: 100%;
  height: .8rem;
  display: flex;
  border-bottom:1px solid #eee;
  span {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>