<template>
  <div class="app-footer">

    <template v-for="item in list">
      <router-link :key="item.path" :to="item.path">
        <i class="iconfont" :class="item.icon"></i>
        {{item.name}}
      </router-link>
    </template>

  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: '配送到家',
          icon: 'icon-home2',
          path: '/home'
        },
        {
          name: '分类',
          icon: 'icon-fenlei',
          path: '/classify'
        },
        {
          name: '会员',
          icon: 'icon-huiyuan',
          path: '/vip'
        },
        {
          name: '购物车',
          icon: 'icon-gouwuche',
          path: '/cart'
        },        {
          name: 'wode',
          icon: 'icon-profile',
          path: '/mine'
        }

      ]
    }
  }
}
</script>
<style lang="scss">
  .app-footer {
    width: 100%;
    height: .9rem;
    display: flex;
    a {
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: -2px;
      font-size: 12px;
      line-height: 1.2;
      color: grey;
      &.router-link-exact-active {
        color: #ff712b;
        font-weight: 400;
      }
    }
  }
</style>