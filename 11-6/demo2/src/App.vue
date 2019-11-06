<template>
  <div id="app">
    <SwiperComponent :movieArr="movieArr"/>
  </div>
</template>

<script>
import SwiperComponent from './components/Swiper'
export default {
  name: 'app',
  data() {
    return {
      movieArr: []
    }
  },
  components: {
    SwiperComponent
  },
  created() {
    this.getMovieData()
  },
  methods: {
    getMovieData() {
      this.$http.get('/list').then(res => {
        console.log(res.data.movieList)
        this.movieArr = res.data.movieList
      }) 
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
