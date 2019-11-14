<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('./assets/css/reset.scss');
@import url('./assets/iconfont/iconfont.css');
html {
  font-size: calc(100 / 750 * 100vw);
}
#app {
  width: 7.5rem;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
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
