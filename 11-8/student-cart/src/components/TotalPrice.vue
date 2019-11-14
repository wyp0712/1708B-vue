<template>
  <div class="total-price">
     总价组件： {{priceCount}}
  </div>
</template>
<script>
import Bus from '../eventBus/index'

export default {
  props: {
    total: Number
  },
  data() {
    return {
      priceCount: 0
    }
  },
  created() {
    Bus.$on('toAppVue', (res) => {
      this.priceCount = res
      console.log(res, '我在totalPrice组件中')
    })
  },
}
</script>
<style lang="scss">
  .total-price {
    position: fixed;
    bottom:0;
    left: 0;
    width: 100%;
    height: 50px;
    background: #ccc;
  }
</style>