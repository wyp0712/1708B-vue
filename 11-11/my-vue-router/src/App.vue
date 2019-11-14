<template>
  <div id="app">

    <header class="header">
      <HeaderBar />
    </header>

    <div class="main">
       <router-view></router-view> 
    </div>

    <footer class="footer">
       <FooterBar />
    </footer>
  </div>
</template>
<script>
import FooterBar from './components/FooterBar/index'
import HeaderBar from './components/HeaderBar/index'
export default {
  components: {
    FooterBar,
    HeaderBar
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html,body {
  width: 100%;
  height:100%
};
#app {
  width: 100%;
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
.header, .footer  {
  width: 100%;
  height: 45px;
  background: #ccc;
}
.main {
  width: 100%;
  flex:1;
  overflow: auto;
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
