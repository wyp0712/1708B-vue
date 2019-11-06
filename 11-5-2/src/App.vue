<template>
  <div id="app">
     
     <span></span> 

     <h1 
     v-for="(item, index) in tabList" 
     :key="index"
     @click="handleClickTab(index)"
     :class="{active: item.state === tabIndex}"
     >
     {{item.name}}
     </h1> 

     <ul>
       <li v-for="(item, index) in movieArr" :key="index">
         <img :src="item.img" alt="">
         {{item.nm}}
       </li>
     </ul>
     <SwiperComponent />
  </div>
</template>

<script>
/* 
 vue指令：
  1. 循环指令：
    v-for ="(item, index） in list"
  2. 动态绑定指令： 
     v-bind:key  简写形式  :key 绑定
  3. 事件指令：
    v-on:click 简写形式 @click   
  4. 动态绑定类名
     1> 字符串方式  "" 只能接收变量
     2> 数组方式  "[]" 只能接收变量
     3> 对象方式  "{}" key: value   key可以是类名

  5. 条件渲染 v-if 
  6. 显示隐藏 v-show   
  7. from表单元素的双向绑定功能  v-model 
  8. 监听 watch: {}

  9. 计算属性
*/
// 引入轮播图组件  1. 定义组件  2. 引入组件 3. 注册组件  4.使用组件
import SwiperComponent from './component/Swiper.vue'
export default {
  components: {
    SwiperComponent
  },
  data() {
    return {
     tabIndex: 0,
     tabList: [
       {
         name: 'vue',
         state: 0
       },
       {
         name: 'react',
         state: 1
       }
     ],
     movieArr: [],
     message: 'vue学习第一天' 
    }
  },
  // 计算属性 缓存功能  函数  带有逻辑计算的功能函数放在此处
  computed: { // 也可以定义变量
    // 
    reverseString() {
      return this.message.split('').reverse().join('')
    },
    getToalCount() {
      let num = 0;
      for(let i = 0; i < 101; i++) {
        num += i
      }
      return num
    }
  },
  // 生命周期
  // beforeCreate() {
  //   console.log(this, 'vue实例')
  //   console.log(this.$el)
  // },
  created() {
    // 请求数据
    this.getMovieData(0)
  
    console.log(this.$el, 'created')
  },
  // beforeMount() {
  //   // console.log(this, 'vue实例-before-mounted')
  //   console.log(this.$el, 'before-mounted')
  // },
  mounted() {
    // 操作dom地方
    console.log(this.$el, 'mounted')
  },
  // beforeUpdate() {
    
  // },
  // updated() {
    
  // },
  // beforeDestroy() {
    
  // },
  // destroyed() {
    
  // },
  watch: { // 监听
    inputVal(newV, oldV) {
       console.log(newV, 'newV')
      this.searchInput(newV)
    }
  },
  methods: { // 方法
    handleClickTab(index) {
      this.tabIndex = index 
      this.getMovieData(index)
    },
    getMovieData(index) {
      this.$http.get('/list').then(res => {
        this.movieArr = res.data.list.movieList.filter(val => {
          if (index == 0 && val.globalReleased) {
            return val
          }else if (index == 1 && !val.globalReleased) {
            return val
          }
        })
      })
    }
  }
}
</script>
<style lang="scss">

html,body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  .box {
    width: 200px;
    height: 200px;
    border:1px solid red;
    // background: red;
    // border:1px dashed red;
  }
  h1 {
    display: inline-block;
    padding: 10px;
    margin: 5px;
    border:1px solid black;
    cursor: pointer;
  }
  .active {
    background: red;
    color:#fff;
  }
  ul {
    li {
      width: 200px;
      display: inline-block;
    }
  }
  .todoItem {
    &:hover {
      background: #eee;
    }
  }
}
  
</style>