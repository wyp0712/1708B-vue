<template>
  <div>
    <div class="tab-box">
      <span
        v-for="(item, index) in tabList" :key="index"
       :class="{active: item.state === tabIndex}"
       @click="bindTabEvet(item, index)"
      >
       {{item.name}}
      </span>
    </div>
    <hr>

     <ContentComponent :ContentData = "contentData"/>
  </div>
</template>
<script>
// @    /src
import axios from 'axios'
import ContentComponent from '@/components/ContentList'
export default {
  data() {
    return {
      contentData: [],
      tabList: [
        {
          name: '免费',
          state: 0,
          type: 'free'
        },
        {
          name: '付费',
          state: 1,
          type: 'pay'
        },
        {
          name: '付费新品',
          state: 2,
          type: 'payNew'
        }
      ],
      tabIndex: 0
    }
  },
  components: {
    ContentComponent
  },
  created() {
    this.getData('free')
  },
  methods: {
    bindTabEvet(item, index) {
      this.tabIndex = index;
      this.getData(item.type)
    },
    getData(type) {
      axios.get('/api/tab', {
        params: {
          type: type
        }
      }).then(res => {
        this.contentData = res.data.list
        console.log(res.data.list)
      })
    }
  },
}
</script>
<style lang="scss">
  .tab-box {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      width: 80px;
      line-height: 30px;
      text-align: center;
      color:#000;
      border-radius: 20px;
      border:1px solid #ccc;
      display: inline-block;
      padding: 5px;


    }
    .active {
      color:red;
      border:1px solid red;
    }
  }
</style>