<template>
  <div class="content" :class="{contentList: isShow}">
     <div class="box">1</div>
     <div class="box">2</div>
     <div class="box">3</div>
     <div class="box">4</div>
     <div class="box">5</div>
     <div class="box">6</div>
     <div class="box">7</div>
     <div class="box">8</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    getDir() {
      return this.$store.state.isContent
    }
  },
  watch: {
    getDir(v) {
      console.log(v, 'v')
      if (v === 'left') {
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  },
}
</script>
<style lang="scss">
  .content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .box {
      width: 48%;
      height: 200px;
      border:1px solid black;
      text-align: center;
      line-height: 200px;
      margin: 2px;
      font-size: 50px;
    }
  }
    .contentList {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .box {
      width: 98%;
      margin-left: 1%;
      height: 200px;
      border:1px solid black;
      text-align: center;
      line-height: 200px;
      font-size: 50px;
    }
  }
</style>