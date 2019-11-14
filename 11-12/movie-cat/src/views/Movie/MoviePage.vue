<template>
  <div class="home">
     电影
     <hr>
      <router-link to="/movie/released">正在上映</router-link>
      <router-link to="/movie/upcoming">即将上映</router-link>
     <hr>

     <!-- 路由显示区域 -->

      <router-view></router-view>  

     <div class="back" @click="bindBackTopEvent" ref="back">back</div>


  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {

  },
  mounted() {
    // dom更新之后执行的函数
    this.$nextTick(() => {
      // 操作dom代码放在这个回调中
      const mainDom = document.querySelector('.main')
      const BackDom = document.querySelector('.back')
      mainDom.addEventListener('scroll', () => {
        // console.log(mainDom.scrollTop)
        let scrollTop = mainDom.scrollTop
        // console.log(BackDom)
        if (scrollTop > 100) {
          BackDom.classList.add('show')
        } else {
          BackDom.classList.remove('show')
        }
      })
    })
  },
  watch: {

  },
  methods: {
    bindBackTopEvent() {
      const mainDom = document.querySelector('.main')
      mainDom.scrollTop = 0;
    }
  },
}
</script>
<style lang="scss">
  .back {
    width: .7rem;
    height: .7rem;
    border-radius: 50%;
    background: lightcoral;
    text-align: center;
    line-height: .7rem;
    position: fixed;
    right: 5%;
    bottom: 15%;
    color:#fff;
    opacity: 0;
    transition: opacity 1s;
  }
  .show {
    opacity: 1;
  }
</style>
