<template>
 <div class="app-login">
    <el-form :label-position="labelPosition" label-width="80px" :model="ruleForm">
      <el-form-item label="账号">
        <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
       <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>

    </el-form>
 </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        user: '',
        pass: '' 
      },
      labelPosition: 'right'
    }
  },
  methods: {
    submitForm() {

    },
    resetForm() {

    }
  } 
}
</script>
<style lang="scss">
  .app-login {
    margin: 0 auto;
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>