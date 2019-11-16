<template>
  <div class="goods-box">
    <template v-if="shopCartList.sort != 39 && shopCartList.sort != 47">
      <ul class="item" v-for="item in shopCartList.dataList" :key="item.imageUrl">
        <!-- v-lazy="img.src" -->
        <!-- <li> <img :src="item.imageUrl" alt=""> </li> -->
        <li> <img v-lazy="item.imageUrl" alt=""> </li>
        <li> {{item.data.name}} </li>
        <li>
          <template v-if="item.data.promotionPrice < item.data.price">
            <em class="price">¥ {{item.data.promotionPrice / 100}} </em> <br>
          </template>
            ¥{{ item.data.price ? item.data.price / 100 : item.data.promotionPrice / 100}}
          <span class="add" @click="bindAddItem(item)">+</span>
        </li>
      </ul>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    shopCartList:Object
  },
  created() {
    // console.log(this.shopCartList, 'shopCartList')
  },
  methods: {
    bindAddItem(item) {
      // this.$store.commit('mutions中的函数名字', '用户提交的数据') 
      // console.log(item, 'item---------------cartlist')
      this.$set(item, 'state', false)

      // dispatch 提交给action
      // commit   提交给mutaion
      this.$store.dispatch('toCart', item)
      // this.$store.commit('toCart', item)
    }
  },
}
</script>
<style lang="scss">
  .goods-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 33.3%;
      min-height: 170px;
      padding: 10px;
      li {
        &:nth-child(1) {
          img {
            width: calc(1.05rem *2);
            height: calc(1.05rem *2);
          }
        }
        &:nth-child(2) {
          overflow: hidden;
          width: calc(1.05rem *2);
          height: calc(.36rem *2);
          // text-align: center;
          line-height: calc(.18rem *2);
          color: #21292b;
          font-size: 14px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;

          margin-bottom: 10px;
          color: #21292b;
        }
        &:nth-child(3) {
          color: #ff712b;
          font-size: 12px;
          // line-height: 1.2;
          .price {
            line-height: 1.1;
            opacity: .8;
            text-decoration: line-through;
            font-style: normal;
            color: grey;
            font-size: 12px;
          }
          span {
            display: inline-block;
            width: .6rem;
            height: .45rem;
            border:1px solid lightsalmon;
            text-align: center;
            line-height: .45rem;
            font-size: 25px;
            margin-left: 10px;
          }
        }
      }
    }
  }
</style>