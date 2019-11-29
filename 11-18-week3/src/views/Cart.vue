<template>
  <div class="about">
    <template v-for="item in getCartData">
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
          <van-button size="mini" @click="removeItem()">-</van-button>
          <!-- <van-button size="mini" @click="addItem(item)">+</van-button> -->
        </div>
      </van-card>  
    </template> 
  </div>
</template>
<script>
import { Dialog } from 'vant';
export default {
  computed: {
    getCartData() {
      return this.$store.state.cartList
    }
  },
  methods: {
    removeItem() {
      // 弹出框
      Dialog.confirm({
        title: '标题',
        message: '弹窗内容'
      }).then(() => {
        // on confirm
        console.log('确定删除')
      }).catch(() => {
        // on cancel
        console.log('取消删除')
      });
    }
  },
}
</script>
