<template>
  <div>
     {{list}}
  </div>
</template>
<script>
import Bus from '../eventBus/index'
export default {
  props: {
    tabContent: Array
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    Bus.$on('toTabList', (res) => {
      console.log(res, 'tablist')
      this.list = res
    })
  },
}
</script>