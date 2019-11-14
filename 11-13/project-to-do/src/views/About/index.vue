<template>
  <div class="about">
    <!-- <template v-for="item in list">
      <template v-if="item.sort === 19">
          <p class="img1" :key="item.sort"> <img :src="item.dataList[0].imageUrl" alt=""> </p> 
          <p class="img2" :key="item.dataList[1].imageUrl"> <img :src="item.dataList[1].imageUrl" alt=""> </p> 
          <p class="img3" :key="item.dataList[2].imageUrl"> <img :src="item.dataList[2].imageUrl" alt=""> </p> 
      </template>
    </template> -->

    <div>
      <span 
        v-for="(item, index) in tabList" 
        :key="index"
        @click="bindEvent(index)"
        :class="{active: item.ind === tabIndex}"
      >
      {{item.name}}
      </span>


      <div 
        v-for="(val, index) in leftItem" 
        :key="index"
        @click="bindItemEvent(item, index)"
      >
      

      </div>

    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      tabIndex: 0,
      tabList: [
        {
          name: '项目',
          ind: 0
        },
         {
          name: '归档',
          ind: 1
        }
      ],
      leftItem: [
        {
          name: '项目1'
        },
        {
          name: '项目2'
        }
      ],
      rightItem: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    bindEvent(index) {
      this.tabIndex = index;
    },
    bindItemEvent(item, index) {
      this.rightItem.push(item)
      this.leftItem.splice(index, 1)
    },
    getData() {
      //
      this.$http.get('/api/list').then(res => {
        console.log(res.data.data.pageModules)
        this.list = res.data.data.pageModules
      })
    }
  }
}
</script>
<style lang="scss">
  span {
    width: 100px;
    display: inline-block;
    line-height: 35px;
    margin: 5px;
    text-align: center;
  }
  .active {
    color:#fff;
    background: red;
  }
</style>
