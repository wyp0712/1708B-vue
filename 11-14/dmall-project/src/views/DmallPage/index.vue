<template>
  <div class="app-home">
    <header class="header">
    
    </header>
    <main class="main">
      <router-view></router-view> 
    </main>
    <footer class="footer">
      <FooterBar />
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import FooterBar from '@/components/FooterBar'
export default {
  name: 'home',
  components: {
    FooterBar
  },
}
</script>
<style lang="scss">
  .app-home {
    width: 7.5rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .header {
    width: 100%;
  }
  .main {
    width: 100%;
    flex:1;
    overflow: auto;
  }
  .footer {
    width: 100%;
  }
</style>
