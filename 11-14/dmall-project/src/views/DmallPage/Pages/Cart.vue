<template>
  <div class="box">

    <template>
      <div class="total-check">
        所有物品：<input type="checkbox" v-model="totalState" @change="totalCheck"> 
        <hr>
         <button style="border:1px solid black;" v-show="totalState" @click="bindRemove()">删除选中</button>
      </div>
   
      <ul class="item" v-for="(item, index) in getGoodsItem" :key="item.spId">
        <!-- <input type="checkbox"> -->
        <template >
          <li>
            <input type="checkbox" v-model="item.state" @change="itemCheck()">
            <img :src="item.imageUrl" alt="">
            {{item.data.name}} <br>
            ¥ {{item.data.price/100}}
          </li>
          <li>
            <span class="removeItem" @click="removeItem(index)">-</span>
            <span> {{item.data.skuType}} </span>
            <span class="add" @click="addItem(item)">+</span>
          </li>
        </template>
      </ul>
    </template>
     
    <TotalPrice />

  </div>
</template>
<script>
/**
 * vuex拿取数据。通过计算属性
 * this.$store.state.cartList
 */
import TotalPrice from '@/components/TotalPrice'
export default {
  components: {
    TotalPrice
  },
  data() {
    return {
      totalState: false
    }
  },
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
      this.$store.commit('addItem', item)
    },
    totalCheck() {
      this.getGoodsItem.forEach(item => {
        item.state = this.totalState
      })
    },
    itemCheck() {
      this.totalState = this.getGoodsItem.every(item => {
        return item.state
      })
    },
    bindRemove() {
      for(let i = 0; i < this.getGoodsItem.length; i++) {
        if (this.getGoodsItem[i].state) {
          this.$store.commit('removeAll', i)
          i--
        }
      }
      this.totalState = false
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
          flex: 7;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: calc(1.05rem *2);
            height: calc(1.05rem *2);
          }
        }
        &:nth-child(2) {
          flex:3;
          // height: calc(.36rem *2);
          // text-align: center;
          // line-height: calc(.36rem *2);
          color: #21292b;
          font-size: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            display: inline-block;
            width: .45rem;
            height: .45rem;
            border:1px solid lightsalmon;
            text-align: center;
            line-height: .45rem;
            font-size: 20px;
            margin: 5px;
          }
        }
      }
    }
  }
</style>