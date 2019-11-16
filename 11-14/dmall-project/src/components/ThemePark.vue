<template>
  <div>

    <div class="theme-park-img" v-if="themeParkData.sort === 18">
      <img v-lazy="themeParkData.dataList[0].imageUrl" alt="">
    </div>
    <div class="theme-park-box" v-if="themeParkData.sort === 19">
      <div class="left">
        <img v-lazy="themeParkData.dataList[0].imageUrl" alt="">
      </div>
      <div class="right">
        <img v-lazy="themeParkData.dataList[1].imageUrl" alt=""><img :src="themeParkData.dataList[2].imageUrl" alt="">
      </div>
    </div>
    <div class="theme-park-recommend" v-if="themeParkData.sort === 20">
      <img v-lazy="themeParkData.dataList[0].imageUrl" alt="">
    </div>
    
  </div>
</template>
<script>
export default {
  props: {
    themeParkData: Object
  },
  created() {
    // console.log(this.themeParkData, 'themeParkData')
  },
}
</script>
<style lang="scss">
  .theme-park-img {
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    line-height: 12px;
    img {
      width: 100%;
    }
  }
  .theme-park-box {
    width: 100%;
    display: flex;
    .left {
      flex:1;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      flex:1;
      img {
        width: 100%;
        height: 50%;
      }
    }
  }
  .theme-park-recommend {
    width: 100%;
    img {
      width: 100%;
    }
  }
</style>