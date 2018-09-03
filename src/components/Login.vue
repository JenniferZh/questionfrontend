<template lang="html">
  <div id="login">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input type="text" v-model="ruleForm2.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      ruleForm2: {
        name:'',
        password:''
      },
      rules2: {
        name: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
        password:[{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      }
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
}
</script>

<style lang="scss" scoped>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  height:600px;
  .demo-ruleForm {
    width:30%;
    height:400px;
  }
}

</style>
