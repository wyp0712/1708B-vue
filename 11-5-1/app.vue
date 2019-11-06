<template>
  <div id="app">
    {{msg}}
     <span @click="bindEventTab(index)" v-for = "(item, index) in tabData" :key="index">{{item}}</span>
  </div>
</template>

<script>
// 抛出一个对象 
export default {
  // 数据仓库 具有双向数据绑定功能
  data() {
    return {
       msg: 'hello world',
       tabData: ['正在上映','即将上映']
    }
  },
  // 生命周期函数
  created() {
    // 初始化函数
    // console.log(this.$axios)
    this.$axios.get('/movie/list').then(res => {
      console.log(res.data, 'res')
    })
  },
  methods: {
    bindEventTab(index) {
      console.log(index, 'index')
    }
  },
}
</script>
<style >
  
</style>