<template>
  <el-container>
  <el-header>
    <h3>调查问卷</h3>
    <div>
      <router-link to="/login">Go to Foo</router-link>
      <a>导出共享层</a>
    </div>
  </el-header>
  <el-container class="lowpart">
    <el-aside width="300px">
      <NavMenu v-on:tableChange="updateTable"></NavMenu>
    </el-aside>
    <el-main>

      <el-button @click="addLink" type="primary" icon="el-icon-circle-plus-outline" plain>增加关联</el-button>
      <el-dialog title="新建关联" :visible.sync="dialogFormVisible">
      <el-form :model="ruleform" :rules="rules" ref="ruleform">
        <el-form-item label="本领域" :label-width="formLabelWidth">
          <el-select v-model="ruleform.region" disabled>
          </el-select>
        </el-form-item>
        <el-form-item label="本领域构件名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="ruleform.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="关联领域" :label-width="formLabelWidth" prop="region2">
          <el-select v-model="ruleform.region2">
            <el-option v-for="item in scopes" :label="item.name" :value="item.name" :key="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关联构件名称" :label-width="formLabelWidth" prop="name2">
          <el-input v-model="ruleform.name2" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleform')">立即创建</el-button>
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
      </el-dialog>
      <Table :tabledata="mdata" :curscope="ruleform.region"></Table>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import NavMenu from "./NavMenu.vue";
import Table from "./Table.vue";
import axiosapi from "../axios.js";
export default {
  name: 'HelloWorld',
  components: {
    NavMenu,
    Table,
  },
  methods: {
    updateTable: function(item) {
      this.ruleform.region = item.name;
      axiosapi.getTableData(item.name).then(response => (this.mdata = response.data.body));
    },
    addLink: function() {
      this.dialogFormVisible = true;
      //clear form
      this.ruleform.name = '';
      this.ruleform.name2 = '';
      this.ruleform.region2 = '';
    },
    submitForm: function(formName) {
      console.log(this.$refs[formName]);
      this.$refs[formName].validate((valid) => {
        console.log(valid);
        if(valid) {

          this.dialogFormVisible = false;
          let self = this;
          axiosapi.postAddLink(this.ruleform).then(function(response){
            if(response.data.code === 0) {
              self.mdata.push(response.data.body);
              self.$notify({
                title: '成功',
                message: '关联已增加',
                type: 'success'
              });
            } else {
              self.$notify({
                title: '失败',
                message: '输入不和要求',
                type: 'error'
              });
            }
          }).catch(function(error) {
            self.$notify({
              title: '失败',
              message: '访问出错',
              type: 'error'
            });
          });
        } else {
          return false;
        }
      });

    }
  },
  data() {
    return {
      dialogFormVisible: false,
      ruleform: {
          name: '',
          name2: '',
          region: '电网工程',
          region2: '',
      },
      rules: {
          name:[{require:true, message:'请输入构件名称', trigger:'submit'},
          { min: 1, max: 5, message: '长度在 3 到 5 个字符', trigger: 'submit' }],
          region2:[{require:true, message:'请选择关联领域名称', trigger:'submit'}],
          name2:[{require:true, message:'请输入关联构件名称', trigger:'submit'}],
      },
      scopes: [
        {
            name:"电网工程",
        },
        {
            name:"建筑工程",
        },
        {
            name:"铁路领域",
        },
        {
            name:"公路工程",
        },
        {
            name:"水利工程",
        },
        {
            name:"民航工程",
        },
        {
            name:"石油管道",
        },
        {
            name:"城市轨道",
        },
        {
            name:"机械制造",
        }
      ],
      formLabelWidth: '120px',
      mdata: [],
    }
  },
  mounted() {
    axiosapi.getTableData("电网工程").then(response => (this.mdata = response.data.body));
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
  display: flex;
  width: 100%;
  position: fixed;
  z-index: 2;
  justify-content: space-between;
  a {
    margin-left: 30px;
  }
}

.lowpart {
  .el-aside {
    color: #333;
  }

  .el-main {
    .el-button {
      margin-bottom: 20px;
    }
  }
  margin-top: 60px;

}

</style>
