<template lang="html">
  <div id="login">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="account">
        <el-input type="text" v-model="ruleForm2.account" auto-complete="off"></el-input>
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
import axiosapi from "../axios.js";
export default {
  name: 'Login',
  data() {
    return {
      ruleForm2: {
        account:'',
        password:''
      },
      rules2: {
        account: [{ required: true, message: '请填写用户名', trigger: 'blur' }],
        password:[{ required: true, message: '请填写密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
      submitForm(formName) {
          // var self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {

            axiosapi.postLogin(this.ruleForm2).then((response)=>{

                if(response.data.body.pass) {
                    localStorage.setItem("token", response.data.body.token);
                    this.$router.push('/');
                }
            }).catch(function(error){
              this.$notify.error({
                title: '错误',
                message: '登陆错误'
              });
            });

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
