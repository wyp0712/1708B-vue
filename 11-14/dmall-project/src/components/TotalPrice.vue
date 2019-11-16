<template>
  <div class="price">
    {{Math.round(getTotalPrice * 100) / 100}}
  </div>
</template>
<script>
export default {
  computed: {
    // this.$store.state.getTotalPrice
    getTotalPrice() {
      return this.$store.getters.getTotalPrice
    }
  },
}
</script>
<style lang="scss">
 .price {
    color: #ff712b;
    width: 100%;
    line-height: 35px;
    text-align: left;
    padding-left: 20px;
    border:1px solid #ccc;
 }
</style>