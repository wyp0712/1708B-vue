<template>
  <div class="total-price">
     总价组件： {{total}}
  </div>
</template>
<script>
export default {
  props: {
    total: Number
  }
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