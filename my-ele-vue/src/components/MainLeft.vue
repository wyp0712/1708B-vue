<template>
  <div class="left">
    <span 
    v-for="(item, index) in arr" 
    :key="index"
    @click="handleLeftClick(index)"
    >
      <div v-html="item"></div>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    leftItem: Array
  },
  data() {
    return {
      brr: [],
      arr: []
    }
  },
  created() {
    this.filterData(this.leftItem)
  },
  watch: {
    leftItem(v) {
      this.filterData(v)
    }
  },
  computed: {},
  methods: {
    handleLeftClick(index) {
      console.log(index, 'index')
      this.$emit('toRight', index)
    },
    filterData(v) {
      this.arr = v.map(item => {
         return item = item.length > 4 ? item.replace(item.slice(0, 4), item.slice(0, 4) + '<br>') : item
      })
      console.log(this.arr, 'this.leftItem')
    }
  },
}
</script>
<style lang="scss">
  .left {
    width: 100%;
    span {
      display: block;
      text-align: center;
      width: 100%;
      height: 60px;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top:1px solid black;
      border-bottom:1px solid black;
    }
  }
</style>