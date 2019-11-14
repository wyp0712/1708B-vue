<template>
  <div class="box">
    {{getTotalPrice}}
    <template>
      <ul class="item" v-for="(item, index) in getGoodsItem" :key="item.spId">
        <template v-if="item.sort != 39 && item.sort != 47">
          <li>
            <img :src="item.imageUrl" alt="">
            {{item.data.name}}
          </li>

          <li>
            <span class="removeItem" @click="removeItem(index)">-</span>
            <span> {{item.data.skuType}} </span>
            <span class="add" @click="addItem(item)">+</span>
          </li>
        </template>
      </ul>
    </template>
    

  </div>
</template>
<script>
/**
 * vuex拿取数据。通过计算属性
 * this.$store.state.cartList
 */
export default {
  computed: {
    getGoodsItem() {
      return this.$store.state.cartList
    },
    // 计算属性取值
    getTotalPrice() {
      return this.$store.getters.getTotalPrice
    }
  },
  methods: {
    removeItem(index) {
      this.$store.commit('removeItem', index)
    },
    addItem(item) {
      console.log(item, 'item--------cartlist')
      this.$store.commit('addItem', item)
    }
  },
}
</script>
<style lang="scss">
  .box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 100%; 
      display: flex;
      padding: 10px;
      li {
        &:nth-child(1) {
          flex:4;
          img {
            width: calc(1.05rem *2);
            height: calc(1.05rem *2);
          }
        }
        &:nth-child(2) {
          flex:6;
          // height: calc(.36rem *2);
          text-align: center;
          // line-height: calc(.36rem *2);
          color: #21292b;
          font-size: 14px;
          span {
            display: inline-block;
            width: .6rem;
            height: .6rem;
            border:1px solid lightsalmon;
            text-align: center;
            line-height: .6rem;
            font-size: 25px;
          }
        }
      }
    }
  }
</style>