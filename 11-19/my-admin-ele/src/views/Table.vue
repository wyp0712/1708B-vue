<template>
  <div class="app-table">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">table</el-menu-item>
      <el-menu-item index="2">处理中心</el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>

    <div class="line"></div>
    
    <!-- <div class="box-table"> -->
      <!-- 动态路由 -->
      <transition name="tableCom">
        <component @toParent = "toParent" :is="componentId"></component>
      </transition>
    <!-- </div> -->

    <el-dialog :visible.sync="dialogVisible" width="80%">
      <el-form ::model="form" label-width="130px">
        <el-form-item label="时间" >
          <el-date-picker type="date" v-model="form.date"></el-date-picker>
        </el-form-item>

        <el-form-item label="标题" >
          <el-input style="width: 230px" v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item label="作者" >
          <el-input style="width: 200px" v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="星星" >
          <el-rate v-model="form.val"></el-rate>
        </el-form-item>
      </el-form>
      {{getType}}

      <span slot="footer" class="dialog-footer">

        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSure()">确 定</el-button>
      </span>
    </el-dialog>
    
     
  </div>
</template>
<script>
import HandleCenter from './TablePages/HandleCenter'
import MessageCom from './TablePages/Message'
import TableCom from './TablePages/Table'
import OrderCom from './TablePages/Order'

// import { mapState } from 'vuex'

import Moment from 'moment'
export default {
  data() {
    return {
      form: {
        date: '',
        title: '',
        name: '',
        val: 0,
        address: ''
      },
      activeIndex: '1',
      componentId: 'TableCom',
      dialogVisible: false,
      dataType: ''
    }
  },
  // 拿取vuex中更改过的数据
  computed: {
    // ...mapState({
    //   hel: state => state.type
    // })
    getType() {
      return this.$store.state.type
    }
  },
  mounted() {
    
  },
  watch: {
    getType(v) {
      //  console.log(v, 'v-------v---------v')
      // console.log(v, 'dataType============dataType')
    }
  },
  components: {
    HandleCenter,
    MessageCom,
    TableCom,
    OrderCom
  },
  watch: {
    // activeIndex(v) {
    //   console.log(v, 'v')
    // }
  },
  methods: {
    // 点击dialog确定按钮
    handleSure() {
      console.log(this.getType, 'this.$store.state.type')
      this.dialogVisible = false
      //  this.$store.commit('changeType', 'edit')
    //   console.log(Moment(this.form.date).format('l'), 'momentjs')
    //  console.log(this.form, 'form')
     this.form.date = Moment(this.form.date).format('l')
    },
    toParent(v) {
      // if (v.type == 'edit') {
        console.log('vvv')
        this.dialogVisible = true; 
        this.form = v.data
      // }
    },
    handleSelect(key, keyPath) {
      console.log(typeof key)
      switch(key) {
        case '1':
         this.componentId = 'TableCom'
          break
          case '2':
         this.componentId = 'HandleCenter'
          break
          case '3':
         this.componentId = 'MessageCom'
          break
          case '4':
         this.componentId = 'OrderCom'
          break
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.app-table {
  width: 100%;
  height: 100%;
  overflow: hidden;
  // position: absolute;
  // transition: all 0.8s ease;
}
  .tableCom-enter-active {
    // opacity: 0;
     transition: all 1s linear;
    transform: translate(0%, 0%)
  }
  .tableCom-leave-active {
    // opacity: 0;
    transition: all 0.8s ease;
    transform: translate(-100%, 0)
  }
  .tableCom-enter /* .fade-leave-active below version 2.1.8 */ {
    // opacity: 0;
    // transform: translate(100%, 0)
  }
  .tableCom-leave-to {
      // transform: translate(100%, 0)
  }
</style>