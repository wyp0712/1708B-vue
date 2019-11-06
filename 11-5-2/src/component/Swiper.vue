<template>
<swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data() {
    return {
      swiperOption: {
        autoplay: true
      }
    }
  },
  components: { // 注册组件的地方
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss">
  .swiper-container {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>