<template>
  <div class="table-box">
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">

    <el-table-column
      label="ID"
      prop="id">
    </el-table-column>

    <el-table-column
      label="Date"
      prop="date">
    </el-table-column>

    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>

    <el-table-column
      align="center"
      width="300"
      >
      <template slot-scope="scope">
        <el-button
          size="medium"
          type="success"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="medium"
          type="info"
          @click="handlePublish(scope.$index, scope.row)">publish</el-button>
        <el-button
          size="medium"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>



    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">

         <el-form-item label="类型" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="时间" :label-width="formLabelWidth">
            <el-date-picker
              v-model="value2"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>

          <el-form-item label="标题" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          
          <el-form-item label="评分" :label-width="formLabelWidth">
            <el-rate v-model="value1"></el-rate>
          </el-form-item>

          <el-form-item label="状态" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Remark" :label-width="formLabelWidth">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>

      </el-dialog>

    </div>
</template>
<script>
  export default {
    data() {
      return {
        textarea: '',
        value1:   3,
        value2: '',
        formLabelWidth: '120px',
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData: [{
          id: 0,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 0,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 0,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 0,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        this.dialogFormVisible = true
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handlePublish() {

      }
    },
  }
</script>
<style lang="scss">
  .table-box {
    width: 700px;
    margin: 0 auto;
  }
</style>