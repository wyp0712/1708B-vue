<template>
  <div class="goods-box">
    <template >
      <ul class="item" v-for="item in shopCartList.dataList" :key="item.sort">
        <li> <img :src="item.imageUrl" alt=""> </li>
        <li> {{item.data ?  item.data.name : null}} </li>
        <li>
           {{ item.data ? item.data.price : null}}
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
      this.$store.commit('toCart', item)
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
      li {
        &:nth-child(1) {
          img {
            width: calc(1.05rem *2);
            height: calc(1.05rem *2);
          }
        }
        &:nth-child(2) {
          width: calc(1.05rem *2);
          // height: calc(.36rem *2);
          text-align: center;
          // line-height: calc(.36rem *2);
          color: #21292b;
          font-size: 14px;
        }
        &:nth-child(3) {
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