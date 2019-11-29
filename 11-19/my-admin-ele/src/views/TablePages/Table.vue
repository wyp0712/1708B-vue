<template>
  <div class="app-table">
    <el-table  :data="tableData">
       <el-table-column align="center" label="时间" prop="date">

       </el-table-column>
       <el-table-column align="center" label="Title" prop="title">

       </el-table-column>
       <el-table-column align="center" label="Author" prop="name">

       </el-table-column>

       <el-table-column align="center" label="rate">
         <template slot-scope="scope">
           <!-- <el-button @click="bindEvent(scope)">点击时间</el-button> -->
           <el-rate disabled v-model="scope.row.val" ></el-rate>
         </template>
       </el-table-column>

       <el-table-column align="center" label="编辑" width="300">
          <template slot-scope="scope">
            <el-button type="info" size="mini" @click="bindEditEvent(scope.$index, scope.row, 'edit')">edit</el-button>
            <el-button type="success" size="mini">draft </el-button>
            <el-button type="danger" size="mini">delete </el-button>
          </template> 

       </el-table-column>   
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
      
    </el-pagination>


  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          title: '1',
          address: '上海市普陀区金沙江路 1518 弄',
          val: 2
        }, {
          date: '2016-05-04',
          name: '王小虎',
                    title: '1',
          address: '上海市普陀区金沙江路 1517 弄',
                    val: 4
        }, {
          date: '2016-05-01',
          name: '王小虎',
          title: '1',
          address: '上海市普陀区金沙江路 1519 弄',
          val: 5
        }, {
          date: '2016-05-03',
          name: '王小虎',
          title: '1',
          address: '上海市普陀区金沙江路 1516 弄',
          val: 2
        }],
    }
  },
  methods: {
    bindEvent(item) {
      console.log(item, 'item', item.row.val)
    },
    bindEditEvent(index, item, type) {
      // 提交action
      this.$store.commit('changeType', 'edit')
      // console.log(item, 'item--------utenm')
      this.$emit('toParent', {
        data: item,
        type: type
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
}
</script> 