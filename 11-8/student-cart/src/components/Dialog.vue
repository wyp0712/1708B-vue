<template>
  <div class="dialog-box">
     <div class="mask"></div>
     <div class="tip">
        <button @click="bindSureEvent">确定</button>
        <button @click="bindCloseEvent">取消</button>
     </div>
  </div>
</template>
<script>
export default {
  methods: { // 子父传参数
    bindSureEvent() {
      this.$emit('toParent', {
        msg: '确定删除',
        code: 0
      })
    },
    bindCloseEvent() {
      this.$emit('toParent', {
        msg: '取消删除',
        code: -1
      })
    }
  }
}
</script>
<style lang="scss">
  .dialog-box {
    width: 100%;
    height: 100%;
    position: fixed;
    left:0;
    top:0;
    .mask {
      width: 100%;
      height: 100%;
      background: #000;
      opacity: .6;
      position: absolute;
      left:0;
      top:0;
    }
    .tip {
      width: 60%;
      height: 60%;
      background: #fff;
      position: absolute;
      left:50%;
      top: 50%;
      transform: translate(-50%, -50%); 
    }
  }
</style>