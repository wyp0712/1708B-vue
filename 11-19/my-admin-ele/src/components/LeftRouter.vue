<template>
  <div class="left-router">
    <router-link to="/table">表格</router-link>
    <router-link to="/article">文章</router-link>
  </div>
</template>
<style lang="scss">
  .left-router {
    width: 100%;
    a {
      display: block;
      height: 60px;
      text-align: center;
      line-height: 60px
    }
  }
</style>