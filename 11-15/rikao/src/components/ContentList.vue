<template>
  <div class="content">
    <h3 v-for="item in ContentData" :key="item.id">
    <img :src="item.img" alt="">
    {{item.name}}
    {{item.title}}
    </h3>
  </div>
</template>
<script>
export default {
  props: {
    ContentData:Array
  }
}
</script>