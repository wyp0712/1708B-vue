<template>
  <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide v-for="item in carouselData" :key="item.id">
     <img :src="item.img" alt="">
    </swiper-slide>
    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->

  </swiper>
</template>
<script>
// require styles
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: {
    carouselData: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        spaceBetween: 10, // 每一个slide之间隔开的距离
        slidesPerView: 4, // 每一页放slide
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss">
  .swiper-container {
    width: 100%;
    height: 3rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>