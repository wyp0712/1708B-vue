<template>
  <div class="home">
   <div class="header">
     <router-link to="/tab1">总裁</router-link> |
     <router-link to="/tab2">有声书</router-link> |
     <router-link to="/tab3">儿童</router-link> |
     <router-link to="/tab4">相声</router-link>
   </div>
   <div class="main">
     <router-view></router-view>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>
