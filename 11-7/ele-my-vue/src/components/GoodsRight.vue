<template>
     <ul class="list-item">
       <li v-for="(item) in list" :key="item.name">
         <h2> {{item.name}} </h2>
         <template v-for="(val, ind) in item.foods">
           <a :key="ind">
             <dl>
               <dt><img :src="val.image" alt=""> </dt>
               <dd>
                  <p class="name">{{val.name}}</p>
                  <p class="description"> {{val.description}} </p>
                  <p class="sellCount">月售 {{val.sellCount}}份 好评率:{{val.rating}} </p>
                  <p class="price">¥{{val.price}} </p>
               </dd>
             </dl>

             <div class="count-box">
                <span @click="removeItem(ind)"> - </span>
                <b> {{val.count}} </b>
                <span @click="addItem(val)">+</span>  
              </div> 
           </a>
         </template>
          
       </li>
     </ul>
</template>
<script>
export default {
  props: {
    eleData: Object
  },
  data() {
    return {
      list: [],
      cartData: [],
      totalCount: 0
    }
  },
  watch: {
    eleData() {
      this.addCount() 
    }
  },
  created() {
    this.addCount()
  },
  methods: {
    addCount() {
      if (this.eleData.goods) {
        this.eleData.goods.forEach(item => {
          item.foods.map(val => {
            // val.count = 'count'
            this.$set(val, "count", 0)
          })
        })
        this.list = this.eleData.goods
        console.log(this.list, '我是右边组件的数据')
      }
    },
    getTotalCount() {
      this.totalCount = 0;
      this.cartData.forEach(item => {
        this.totalCount+= item.count
      })
    },
    // 删除函数
    removeItem(index) {
      console.log(index, 'index------------------index')
      this.list.forEach(item => {
        console.log(item.foods[index], 'arr--foods')
        // item.foods[index].count--;
      })
    },
    // 添加函数
    addItem(item) {
      item.count++;

      let goods = this.cartData.find(val => val.name === item.name)
      if (goods) {
        goods.count ++
      } else {
        this.cartData.push({
          count: 1,
          img: item.image,
          name: item.name,
          description: item.description,
          sellCount: item.sellCount,
          rating: item.rating,
          price: item.price
        })
      }

      this.getTotalCount()

      this.$emit('toGoodsItem', this.totalCount)
    },

  },
}
</script>
<style lang="scss">
.list-item {
    width: 100%;
    li {
      width: 100%;
      h2 {
        width: 100%;
        font-size: .24rem;
        padding-left: .2rem;
        color: rgb(147, 153, 159);
        height: .52rem;
        font-weight: 700;
        line-height: .48rem;
        background: #eee;
      }
      a {
        position: relative;
        // margin: 20px;
        .count-box {
            position: absolute;
            right: -252px;
            bottom: -94px;
            z-index: 2;
          span {
            display: inline-block;
            width: .4rem;
            height: .4rem;
            border-radius: 50%;
            background: #ccc;
            text-align: center;
            line-height: .4rem;
            background: #479DD7;
            color:#fff;
            font-weight: 700;
            margin-left: 10px;
            &:nth-child(1) {
              margin-right:10px;  
            }
          }
        }
      }
      dl {
        width: 100%;
        display: flex;
        dt {
          width: 1.65rem;
          
          img {
            width: 1.15rem;
            height: 1.15rem;
            margin-top: .36rem;
            margin-left: .36rem;
          }
        }
        dd {

          width: 4.16rem;
          margin-top: .37rem;
          margin-left: .2rem;
          margin-bottom: .36rem;
          .name {
            font-size: .28rem;
            color: rgb(7, 17, 27);
            line-height: .28rem;
          }
          .description {
            margin-top: .16rem;
            font-size: .2rem;
            line-height: .2rem;
            color: rgb(147, 153, 159);
          }
          .sellCount {
            margin-top: .16rem;
            font-size: .2rem;
            line-height: .2rem;
            color: rgb(147, 153, 159);
          }
          .price {
            margin-top: .16rem;
            font-size: .28rem;
            color: rgb(147, 153, 159);
            font-weight: 700;
            line-height: .48rem;
          }
        }
      }
    }
}
</style>