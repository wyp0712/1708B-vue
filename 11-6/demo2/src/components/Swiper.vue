<template>
   <swiper :options="swiperOption">
     <swiperSlide v-for="(item, index) in movieArr" :key="index">
        <img :src="item.img" alt=""> 
     </swiperSlide>
   </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    movieArr: Array
  }, // 接收父组件传过来的数据
  name: 'SwiperComponent',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 .swiper-container {
   width: 100%;
   height: 200px;
   border:1px solid black;
   img {
     width: 100%;
     height: 100%;
   }
 }
</style>
