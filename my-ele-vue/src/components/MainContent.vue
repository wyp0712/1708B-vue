<template>
  <div class="content">
    <div class="main-left">
      <MainLeft :leftItem="leftItem" @toRight="toRight"/>
    </div>

    <div class="main-right">
      <MainRight/>
    </div>

  </div>
</template>
<script>
import MainLeft from './MainLeft'
import MainRight from './MainRight'
export default {
  props: {
    eleData: Object
  },
  data() {
    return {
      leftItem: [],
      rightItem: []
    }
  },
  watch: {
    eleData(v) {
      this.getGoodsItem(v)
    }
  },
  components: {
    MainLeft,
    MainRight
  },
  created() {
    if (this.eleData.length) {
      this.getGoodsItem(this.eleData)
    }
  },
  methods: {
    toRight(msg) {
      console.log(msg, 'msg')
    },
    getGoodsItem(data) {
      data.goods.forEach(item => {
        this.leftItem.push(item.name)
      })
    }
  },
}
</script>
<style lang="scss">
  .main-content {

  }
</style>