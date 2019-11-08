<template>
  <div id="app">
     <ToDoList /> 
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    // ToDoList
  },
  created() {
    this.getCartData()
  },
  methods: {
    getCartData() {
      this.$http.get('/api/list').then(res => {
        console.log(res.data.list.UserData, 'res')
      })
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
