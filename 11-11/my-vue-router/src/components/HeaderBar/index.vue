<template>
  <div>
    头部组件
    <button @click="bindEvent">点击切换</button>
  </div>
</template>
<script>

export default {
  methods: {
    bindEvent() {
      this.$EventBus.$emit('toFooter', {
        msg: 'hello world'
      }) 
    }
  }
}
</script>