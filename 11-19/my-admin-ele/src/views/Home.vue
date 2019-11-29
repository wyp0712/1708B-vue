<template>
  <el-container>

    <el-aside style="width:200px">
      <LeftRouter />
    </el-aside> 
    <el-main >
      <router-view></router-view>
    </el-main>

  </el-container>
</template>

<script>
// @ is an alias to /src
import LeftRouter from '../components/LeftRouter'
export default {
  name: 'home',
  components: {
    LeftRouter
  }
}
</script>
<style lang="scss">
  .el-container {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .el-aside {
    // background: red;
  }
  .el-main {
    flex:1;
    height: 100%;
    background: #ccc;

  }
</style>
