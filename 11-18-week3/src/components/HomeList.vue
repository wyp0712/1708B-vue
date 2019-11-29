<template>
  <div>
    <van-card v-for="(item, index) in cartData"
        :key="item.id"
        :price="item.price"
        :title="item.name"
        :thumb="item.img"
        @click="bindDetailEvent($event, item)"
      >
        <div slot="tags">
          <van-tag plain type="success">{{item.count}}</van-tag>
          <!-- <van-tag plain type="danger">标签</van-tag> -->
        </div>

        <div slot="footer">
          <van-button size="mini" v-if="item.isJian" @click="removeItem(index, item)">-</van-button>
          <van-button size="mini" @click="addItem(item)">+</van-button>
        </div>
      </van-card>  
  </div>
</template>
<script>
export default {
  props: {
    cartData: Array
  },
  methods: {
    bindDetailEvent(e, item){
      console.log(e, 'e')
      if (e.target.className === 'van-image__img') {
        this.$router.push({
          path: `/detail/${item.id}`
        })
      }
    }
  },
}
</script>