<template>
  <div>
    即将上映
    <SwiperComponent :carouselData="carouselData"/>
  </div>
</template>
<script>
import SwiperComponent from '@/components/Swiper.vue'
export default {
  data() {
    return {
      carouselData: []
    }
  },
  components: {
    SwiperComponent
  },
  created() {
    this.getCarouselData()
  },
  methods: {
    getCarouselData() {
      this.$http.get('/api/carousel').then(res => {
        console.log(res.data.list.coming)
        this.carouselData = res.data.list.coming
      }) 
    }
  },
}
</script>