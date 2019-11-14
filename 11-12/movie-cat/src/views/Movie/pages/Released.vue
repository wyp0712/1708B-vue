<template>
  <div>
    <dl class="movie-list" v-for="(item) in list" :key="item.id">
      <dt @click="bindDetailEvent(item)">
        <img :src="item.img" alt="">
      </dt>
      <dd>
        {{item.nm}} <br>
        <span class="btn"
        :class="{active1: item.globalReleased, active2: !item.globalReleased}"> 

        {{ item.globalReleased ? "购票": "预售" }} </span>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getMovieData() 
  },
  methods: {
    getMovieData() {
      this.$http.get('/api/list').then(res => {
        console.log(res.data.list.movieList)
        this.list = res.data.list.movieList
      })
    },
    // 跳转详情页面函数
    bindDetailEvent(item) {
      this.$router.push({
        path: `/detail/${item.id}`
      })
    }
  },
}
</script>
<style lang="scss">
  .movie-list {
    width: 100%;
    display: flex;
    dt {
      flex:7;

    }
    dd {
      flex:3;
      .active1 {
        background: lightcoral;
        color:#fff; 
      }
      .active2 {
        background: lightgreen;

      }
    }
  }
</style>