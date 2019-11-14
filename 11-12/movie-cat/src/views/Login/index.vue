<template>
  <div>
    账号：<input type="text" v-model="username"><br>
    密码：<input type="text" v-model="pwd"><br>
    
    <button @click="bindLoginEvent">提交</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      pwd: ''
    }
  },
  methods: {
    bindLoginEvent() {
      if (this.username && this.pwd) {
        this.$http.get('/api/login', {
          params: {
            user: this.username,
            pwd: this.pwd
          }
        }).then(res => {
          console.log(res)  
          if (res.data.errCode === 0) {
            // 将token存在本地存储中
            localStorage.setItem('token', res.data.token)   
            console.log(this.$route.query.path, '$route-------------') 
            // 根据带过来的参数路径，跳回到用户想去的页面
            this.$router.push({
              path: this.$route.query.path
            })
          } else {
            alert('')
          }

        }) 
      } else {
        alert('请输入账号密码')
      }

    }
  }
}
</script>
<style lang="scss">
  input {
    border:1px solid black;
  }
</style>