<template>
  <div>
    <p v-for="(item, index) in list" @click="bindClickEvent(item)" :class="{active: item.state}" :key="index">
        {{item.value}}
      </p>
  </div>
</template>
<script>
export default {
  props: {
    list: Array
  },
  methods: {
    bindClickEvent(item) {
      item.state = !item.state
    }
  },
}
</script>
<style lang="scss">
  .active {
    background: red;
    color:#fff;
  }
</style>