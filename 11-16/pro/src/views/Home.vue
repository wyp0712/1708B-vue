<template>
  <div>
    <NavBar />
    <ContentList />
  
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar'
import ContentList from '@/components/ContentList'
export default {
  name: 'home',
  components: {
    NavBar,
    ContentList
  }
}
</script>
