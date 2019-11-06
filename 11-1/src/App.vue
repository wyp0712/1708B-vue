<template>
  <!-- html 外面一定要包一层大盒子 -->
  <ul>
      {{msg}}
  </ul>
</template>

<script>
// js  es6模块化
import './app.css'
export default {
  data() {
    return {
       msg: "hello world"
    }
  }
}
</script>

<style>
/* css */
  
</style>