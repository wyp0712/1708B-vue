<template>
  <div>
    <h1 @click="bindBackEvent">back</h1>
    <dl v-if="detailList.length">
      <dt> <img :src="detailList[0].img" alt=""> </dt>
      <dd> {{detailList[0].nm}} </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detailList: []
    }
  },
  created() {
    this.getDetailItem()
  },
  methods: {
    // 详情接口
    getDetailItem() {
      this.$http.get('/api/detail', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        console.log(res.data.list)
        this.detailList = res.data.list
     })
    },
    bindBackEvent() {
      this.$router.back() 
    }
  }
}
</script>
<style lang="scss">
  h1 {
    width: 40px;
    height: 40px;
    background: lightsalmon;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    color: #fff;
  }
</style>