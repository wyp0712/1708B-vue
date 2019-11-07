<template>
  <div id="app">
    <div class="app-header">
     <HeaderBar />
    </div>
    <NavBar @toNavEvent="toNavEvent" />

    <div class="main">
      <transition name="component-slide" >
        <component class="Router" :eleData="eleData" :is="componentId"></component>
      </transition>
    </div>
    <div class="app-footer">
      <FooterBar/>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar'
import FooterBar from './components/FooterBar'
import NavBar from './components/NavBar'

import MainContent from './components/MainContent'
import Evaluate from './components/Evaluate'
import Merchant from './components/Merchant'
export default {
  name: 'app',
  components: {
    HeaderBar,
    FooterBar,
    NavBar,
    MainContent,
    Evaluate,
    Merchant
  },
  data() {
    return {
      componentId: 'MainContent',
      eleData: {}
    }
  },
  created() {
    this.geteleData()
  },
  methods: {
    geteleData() {
      this.$http.get('/api/list').then(res => {
        console.log(res.data.goods)
        this.eleData = res.data
      })
    },
    toNavEvent(ind) {
      switch(ind) {
        case 0:
         this.componentId = 'MainContent'
        break;
        case 1:
          this.componentId = 'Evaluate'
        break;
        case 2:
          this.componentId = 'Merchant'
        break
      }
      this.geteleData()
    }
  },
}
</script>

<style lang="scss">
@import url('./assets/css/reset.scss');

.Router {
  transition: all 0.3s ease;
}
.component-slide-enter-active {
  // opacity: 0;
  transform : translate(100%,0)
}
.component-slide-leave-active {
  // opacity: 0;
  transform:translate(-100%,0);
}


#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
.app-header {
    width: 100%;
    height: 100px;
    border-bottom:1px solid black;
  }
  .main {
    width: 100%;
    height: 100%;
    flex:1;
    overflow: hidden;
    .content {
      width: 100%;
      height: 100%;
      display: flex;
    }
    .main-left {
      flex:3;
      overflow: auto;
      border-right: 1px solid black;
    }
    .main-right{
      flex:7;
      overflow: auto;
    }
  }
  .app-footer {
    width: 100%;
    height: 45px;
    border-top:1px solid black;
  }
</style>
