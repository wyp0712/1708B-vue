<template>
  <div class="app-footer">
    <!-- tag="span" -->
     <router-link  to="/movie/released">电影</router-link>
     <router-link to="/cinema">电影院</router-link>
     <router-link to="/mine">我的</router-link>
  </div>
</template>

<style lang="scss">
  .app-footer {
    width: 100%;
    height: 45px;
    display: flex;
    background: #ccc;
    a {
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
        &.router-link-exact-active {
          color: #42b983;
        }
    }
  }
</style>