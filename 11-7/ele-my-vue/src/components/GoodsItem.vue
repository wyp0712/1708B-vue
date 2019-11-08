<template>
  <div class="goods-item">
    <div class="left">
      <GoodsLeft :leftArr="leftArr" @toGoodsLeft="toGoodsLeft"/>
    </div>
    <div class="right">
      <GoodsRight @toGoodsRight="toGoodsRight" :eleData="eleData" @toGoodsItem="toGoodsItem"/>
    </div>
  </div>
</template>
<script>
import GoodsLeft from './GoodsLeft'
import GoodsRight from './GoodsRight'
export default {
  props: {
    eleData: Object,
    floorIndex: Number
  },
  data() {
    return {
      leftArr: [],
      rightArr: {},
      floorHeight: []
    }
  },
  components: {
    GoodsLeft,
    GoodsRight
  },
  watch: { // 如果父组件通过ajax获取的数据传递给子组件，子组件接收的时候要监听，
    eleData(v) {
      // console.log(v.goods, 'v--------我是watch监听到的值')
      this.getItemdata(v)
    },
    toGoodsRight(v) {
      // console.log(v, 'v---------v')
    }
  },
  created() {
    // console.log(this.eleData.goods, 'this.evel----我在goodsitem组件中')
    if (this.eleData.goods) {
      this.getItemdata(this.eleData)
    }
  },
  mounted() {

  },
  methods: {
    toGoodsRight(heightArr) {
      // console.log(heightArr, 'heightArr')
      this.floorHeight = heightArr;
    },
    toGoodsItem(cartData) {
      // console.log(totalCount, '总数量--------') 
      this.$emit('toFooterBar', cartData)
    },
    // 自定义事件接收参数
    toGoodsLeft(ind) {
      // 根据子组件中传过来的下标匹配到的值
      // this.rightArr = this.eleData.goods[ind]
      // this.$emit('toParent', ind)
      let rightDom = document.querySelector('.right')
      console.log(this.floorHeight, this.floorIndex, this.floorHeight[ind], 'rightDom----------dom')
      rightDom.scrollTop = this.floorHeight[ind] - 190
    },
    // 获取数据
    getItemdata(data) { // 处理左边组件的数据
       data.goods.map(item => {
         this.leftArr.push(item.name)
       })
      //  console.log(this.leftArr, '我是左边组件的数据')
    }
  },
}
</script>
<style lang="scss">
  .goods-item {
    width: 100%;
    height: 100%;
    display: flex;
    .left {
      flex:3;
      border-right: 1px solid black;
      overflow: auto;
    }
    .right {
      flex:7;
      overflow: auto;
      scroll-behavior: smooth;
    }
  }
</style>