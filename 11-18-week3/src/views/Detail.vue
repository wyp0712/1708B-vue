<template>
  <div>
    <template v-for="item in list">
      <van-card
        :key="item.id"
        :num="item.count"
        :price="item.price"
        :title="item.name"
        :thumb="item.img"
        :thumb-link="item.path"
      >
        <div slot="tags">
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </div>

        <div slot="footer">
          <van-button size="mini" @click="removeItem(index)">-</van-button>
          <van-button size="mini" @click="addItem(item)">+</van-button>
        </div>
      </van-card>  
    </template> 
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getDetailData()
  },
  methods: {
    getDetailData() {
      this.$http.get('/api/detail', {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        this.list = res.data.list
      })
    }
  },
}
</script>