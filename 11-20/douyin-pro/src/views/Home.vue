<template>
  <div class="home">
    <van-button type="info" @click="bindMenuShowEvent">信息按钮</van-button>

    <van-action-sheet v-model="show" title="标题">
      <div class="content">
        <ContentList :list="list" />
      </div>

      <div class="input-box">
        <van-cell-group>
          <van-field style="width:85%;margin-left:20px;" v-model="value" @keyup.enter="bindEvent()" placeholder="请输入用户名" />
        </van-cell-group>
      </div>
    </van-action-sheet>
  </div> 
</template>

<script>
import { Toast } from 'vant';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ContentList from '../components/ContentList'
export default {
  name: 'home',
  data() {
    return {
      show: false,
      list: [],
      value: '',
      activeKey: 1
    }
  },
  components: {
    ContentList
  },
  methods: {
    bindMenuShowEvent() {
      Toast('我是需要执行的语句')
      // this.show = true 
    },
    bindEvent() {
      // this.list.unshift(this.value)
      let obj = {
        value: this.value,
        state: false
      }
      this.list = [...this.list, { ...obj }] // JSON.parse(JSON.stringify())
      this.value = ''
      // 深拷贝；
      // let list = ['item1', 'item2', 'item3']
      // let arr = []
      // arr = JSON.parse(JSON.stringify(list))
      // arr[1] = 'hello world'
      // console.log(list, 'list')
    }
  },
}
</script>
<style lang="scss">
  .van-popup {
    width: 100%;
    height: 400px;
    overflow: hidden;
    .van-action-sheet__content {
      height: 100%;
      display: flex;
      flex-direction: column;
      .content {
        flex: 1;
        overflow: auto;
      }
      .input-box {
        position: fixed;
        bottom: 0;
        left: 0;
        border: 1px;
        width: 100%;
        input {
          width: 100%;
          height: 50px;
          border:1px solid black;
        }
      }
    }
  }
</style>
