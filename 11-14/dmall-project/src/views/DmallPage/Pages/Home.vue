<template>
  <div>
     <template v-for="item in dmallData">
       <!-- 轮播图 -->
       <template v-if="item.sort === 1">
         <SwiperComponent :key="item.sort" :swiperData="item.dataList" />
       </template>
       <!-- icon -->
       <template v-if="item.sort === 8 || item.sort === 9">
          <IconBox :key="item.sort" :iconData="item.dataList"/>
       </template>
       <!-- ThemePark -->
       <template v-if="item.sort === 18 || item.sort === 19 || item.sort === 20">
          <ThemePark :key="item.sort" :themeParkData="item" /> 
       </template>
       <!-- 极至生鲜 -->
       <!-- <template v-if="item.sort === 33">

       </template> -->
     </template>

     <template v-for="val in shopCartData">
        <HomeCartList :key="val.sort" :shopCartList = "val" />
     </template>

  </div>
</template>
<script>
import SwiperComponent from '@/components/Swiper.vue'
import IconBox from '@/components/IconBox'
import ThemePark from '@/components/ThemePark.vue'
import HomeCartList from '@/components/HomeCartList'
export default {
  data() {
    return {
      dmallData: [],
      shopCartData: []
    }
  },
  components: {
    SwiperComponent,
    IconBox,
    ThemePark,
    HomeCartList
  },
  created() {
    this.getDmallData()
  },
  methods: {
    getDmallData() {
      this.$http.get('/api/list').then(res => {
        // console.log(res.data.list.pageModules)
        this.dmallData = res.data.list.pageModules
      })

      this.$http.get('/api/list2').then(res => {
        this.shopCartData = res.data.list.pageModules
        console.log(this.shopCartData, 'shopData')
      })
    }
  },
}
</script>