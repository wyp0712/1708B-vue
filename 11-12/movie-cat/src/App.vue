<template>
  <div id="app">
    <header class="header" v-show="isShowHeader">
      <HeaderBar />
    </header>

    <main class="main">
      <router-view/>
    </main>

    <footer class="footer" v-show="isShowFooter">
      <FooterBar />
    </footer>
  </div>
</template>
<script>
import FooterBar from './components/FooterBar'
import HeaderBar from './components/HeaderBar'
export default {
  data() {
    return {
      isShowHeader: true,
      isShowFooter: true
    }
  },
  components: {
    FooterBar,
    HeaderBar
  },
  // 监听路由
  watch: {
    '$route'(to, from) {
      // console.log(to, 'to------to')
      if (to.name === 'detail' || to.name === 'login') {
        this.isShowHeader = false
        this.isShowFooter = false
      } else {
        this.isShowHeader = true
        this.isShowFooter = true
      }
    }
  },
}
</script>

<style lang="scss">
@import url('./assets/css/reset.scss');
html {
  font-size: calc(100 / 750 * 100vw)
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  font-size: 14px;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
}
.main {
  width: 100%;
  flex:1;
  overflow: auto;
  // 滚动条动画
  scroll-behavior: smooth;
}
.footer {
  width: 100%;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
