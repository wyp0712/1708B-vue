<template>
  <div class="effect-box">
     <!-- <div class="left">
        <router-link to="/task">任务</router-link> 
        <router-link to="/note">便签</router-link> 
        <router-link to="/project">项目</router-link> 
        <router-link to="/position">地点</router-link> 
        <router-link to="/tag">标签</router-link> 
     </div> -->
     <div class="right">
        <router-view></router-view>
     </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {

  }
}
</script>
<style lang="scss">
  .effect-box {
    width: 100%;
    display: flex;
    .left {
      // flex: 3;
      a {
        display: block;
        line-height: 45px;
        text-align: center;
      }
    } 
    .right {
      flex:7;
    }
  }
</style>
