<template>
  <div class="student">

    {{count}} ------- {{num}}
    <hr>

    <span 
      v-for="(item, index) in list" 
      :key="index"
      @click="bindEvent(index)"
      :title="obj.name"
      :index="index"
      :class="{active: item.state === tabIndex}"
    >
      {{item.name}}
    </span>


  </div>
</template>
<script>
/* 
  指令：
   1. 循环指令  v-for
   2. 绑定指令 (动态绑定)  v-bind: 或者  简写 ：
   3. 事件指令            v-on:  或者  @
*/ 
export default {
  data() {
    return {
      // 定义数据的地方
      count: 0,
      tabIndex: 0,
      num: '1',
      list: [
        {
          name: 'tab1',
          state: 0
        },
         {
          name: 'tab1',
          state: 1
        },
         {
          name: 'tab1',
          state: 2
        }
      ],
      obj: {
        name: 'hello world'
      }
    }
  },
  methods: { // 放方法的地方，
    bindEvent(index) {
      console.log(index)
      this.tabIndex = index;
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