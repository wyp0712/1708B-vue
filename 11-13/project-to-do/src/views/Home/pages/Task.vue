<template>
  <div class="goods-box">
    <template class="goods-item" v-for="item in dmallData" >
        <a :class="{activeItem:item.dataList.length === 1, activeBanner: item.dataList.length > 1 }" v-for="val in item.dataList" :key="val.spId">
          <img :src="val.imageUrl" alt="">
        </a>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dmallData: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$http.get('/api/dmall').then(res => {
        console.log(res.data.data.pageModules)
        this.dmallData = res.data.data.pageModules
      }) 
    }
  }
}
</script>
<style lang="scss">
  .goods-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .activeBanner {
      display: inline-block;
      width: 125px;
      height: 223px;
      img {
        width: 105px;
        height: 105px;
      }
    }
    .activeItem {
      display: block;
      width: 100%;
    }
  }
</style>