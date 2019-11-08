<template>
  <div>
    <!-- <input type="text" v-model="" @keyup.enter="handleSubmit"> -->
    <input type="checkbox" v-model="checkState" @change="totalCheckEvent()"> 水果
     
     <hr>
     <template v-for="(item, index) in list">
       <input :key="index" type="checkbox" v-model="item.state" @change="itemCheckEvent()"> {{item.title}}
     </template>
     
  </div>
</template>
<script>
/* v-model */
export default {
  data() {
    return {
      checkState: false,
      list: [
        {
          title: '苹果',
          state: false
        },
        {
          title: 'list',
          state: false
        },
        {
          title: 'orange',
          state: false
        }
      ]
    }
  },
  methods: {
    // 全选事件
    totalCheckEvent() {
      this.list.map(val => {
        val.state = this.checkState
      })
    },
    itemCheckEvent() {
      this.checkState = this.list.every((item) => {
        return item.state
      }) 
    },
    handleSubmit() {
      console.log(this.checkState, 'checkstate')
    }
  }
}
</script>
<style lang="scss">
  input {
    width: 50px;
    margin: 5px;
    border:1px solid black;
    height: 50px;
  }
</style>