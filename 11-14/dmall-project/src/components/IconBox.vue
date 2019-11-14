<template>
  <div class="icon-box">
    <ul class="icon-item" v-for="item in iconData" :key="item.sort">
      <li> <img :src="item.imageUrl" alt=""> </li>
      <li>{{item.data.title}}</li>
    </ul>
  </div>
</template>

<script>
 export default {
   props: {
     iconData: Array,
   },
   watch: {
     iconData(v) {
      //  console.log(v, 'v')
     }
   },
   created() {
    //  console.log(this.iconData, 'iconData')
   },
 }
</script>

<style lang="scss">
  .icon-box {
    width: 100%;
    display: flex;
    .icon-item {
      width: 25%;
      height: 1.4rem;
      li {
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          height: 100%;
        }
        &:nth-child(2) {
          width: 100%;
          height: .38rem;
          color: #888;
          font-size: 12px;
        }
      }
    }
  }
</style>