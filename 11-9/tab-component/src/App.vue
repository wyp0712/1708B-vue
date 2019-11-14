<template>
  <div id="app">
    <div class="tab-box">
      <span @click="bindTabEvent(index, item)" :class="{active: item.state === tabIndex}" v-for="(item, index) in tabList" :key="index">
        {{item.title}}
      </span> 
    </div>

    <!-- <TabList :tabContent="tabContent"/> -->
    <TabList />



  </div>
</template>

<script>
import TabList from './components/TabList'
import Bus from './eventBus/index'
export default {
  name: 'app',
  components: {
    TabList
  },
  data() {
    return {
      tabIndex: 0,
      tabContent: [],
      tabType: 'home',
      tabList: [
        {
          title: '首页',
          type: 'home',
          state: 0
        },
        {
          title: '国内',
          type: 'guonei',
          state: 1
        },
        {
          title: '国际',
          type: 'guoji',
          state: 2
        },
        {
          title: '历史',
          type: 'history',
          state: 3
        }
      ]
    }
  },
  created() {
    this.getTabData()
  },
  methods: {
    // 切换事件方法
    bindTabEvent(index,item) {
      this.tabIndex = index;
      // 每次更新tab切换的type类型
      this.tabType = item.type;
      this.getTabData()
    },
    getTabData() {
      this.$http.get('/api/tab', {
        params: {
          type: this.tabType
        }
      }).then(res => {
        console.log(res.data.list)
        this.tabContent = res.data.list

        Bus.$emit('toTabList', this.tabContent)
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
  color: #2c3e50;
}
.tab-box {
  display: flex;
  width: 100%;
  height: 50px;
  line-height: 50px;
  .active {
    background: red;
    color:#fff;
  }
  span {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
