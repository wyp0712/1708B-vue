<template>
  <div class="app-ele">
    <el-container>
      <el-aside style="width:200px">
         <el-menu>
           <el-submenu index="0">
             <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>

           </el-submenu>

           <el-menu-item index="1">
            <span>项目1</span>
           </el-menu-item>  

          <el-menu-item index="2">
            <span>项目1</span>
           </el-menu-item>
         </el-menu>



      </el-aside> 

      <el-main>

        <el-header>
          <el-menu :default-active="activeIndex" mode="horizontal">
            <el-menu-item index="1">
              处理中心 
            </el-menu-item>
            <el-menu-item index="2">
              处理中心 
            </el-menu-item>
            <el-menu-item index="3">
              处理中心 
            </el-menu-item>
          </el-menu>  

        </el-header>

        <span>图标</span> : <i class="el-icon-edit"></i>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>

        <el-button type="success">成功色</el-button>
        <el-button type="info">成功色</el-button>
        <el-button type="danger" circle icon="el-icon-s-tools"></el-button>
        <el-button type="warning" round>成功色</el-button>

        <el-button size="medium">中等按钮</el-button>
        <el-button size="small">小型按钮</el-button>
        <el-button size="mini">超小按钮</el-button>

        <hr>
        <el-radio v-model="radio" label="1">A</el-radio>
        <el-radio v-model="radio" label="2">B</el-radio>
        <el-radio v-model="radio" label="3">C</el-radio>
        <el-radio v-model="radio" label="4">D</el-radio>

       <hr>

       <el-form label-width="80px" style="width:400px;margin:0 auto;">
         <el-form-item label="账号">
           <el-input v-model="input" placeholder="请输入内容"></el-input>
         </el-form-item>
         <el-form-item label="账号">
           <el-input v-model="input" placeholder="请输入内容"></el-input>
         </el-form-item>

         <el-form-item style="margin-left:100px;">
           <el-button type="info"> 确定 </el-button>
         </el-form-item>
       </el-form>

       <hr>

       <el-table :data="tableData" width="100%">
         <el-table-column label="时间" width="100" prop="date"></el-table-column>
         <el-table-column label="名字" width="80" prop="name"></el-table-column>
         <el-table-column label="地址" width="180" prop="address"></el-table-column>

         <el-table-column label="地址" width="180">
           <template>
             <el-rate disabled v-model="value2"></el-rate>
           </template>
         </el-table-column>

         <el-table-column>
           <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" >draft</el-button>
            <el-button size="mini">deleted</el-button>
           </template>
         </el-table-column>
       </el-table>

       <hr>
        
        <el-date-picker type="date" v-model="value1">

        </el-date-picker>


      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      value1: '',
      value2: 2,
      radio: "1",
      input: '',
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          rate: '🌟'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          rate: '🌟'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          rate: '🌟'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          rate: '🌟'
        }]
    }
  },
  methods: {
    handleEdit(index, item) {
      console.log(index, item)
    }
  },
}
</script>
<style lang="scss">
  .app-ele {
    width: 100%;
    height: 700px;
  }
  .el-container {
    width: 100%;
    height: 100%;
  }
  .el-header{
    width: 100%;
    height: 60px;
    background: #ccc;
    margin-bottom:20px;
  }
  .el-aside {
    // width: 80px;
    height: 100%;
    display: inline-block;
    // background: navy;
  }
  .el-main {
    display: inline-block;
    width: calc(100%-150px);
    height: 100%;
    background: #eee;
  }

</style>
