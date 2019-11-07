<template>
  <div class="goods-left">
    <span 
      v-for="(item, index) in leftArr" 
      :key="index"
      @click="bindLeftClick(index)"
    >
      {{item}}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    leftArr: Array
  },
  methods: {
    bindLeftClick(index) {
      this.$emit('toGoodsLeft', index)
    }
  },

}
</script>
<style lang="scss">
  .goods-left {
    width: 100%;
    span {
      display: block;
      height: 60px;
      text-align: center;
      font-size: 16px;
      color: #000000;
      border-bottom:1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>