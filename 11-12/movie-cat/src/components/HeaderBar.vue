<template>
  <div class="app-header">
      {{$route.meta.title}}
  </div>
</template>

<style lang="scss">
  .app-header {
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