<template>
  <swiper :swiperOption="swiperOption">
    <swiper-slide v-for="item in swiperData" :key="item.sort">
       <img v-lazy="item.imageUrl" alt=""> 
    </swiper-slide>
  </swiper>
</template>
<script>
// require styles
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: {
    swiperData: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: true
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