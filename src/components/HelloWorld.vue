<template>
  <el-container>
  <el-header>
    <h3>多领域关联调查</h3>
    <div>
      <router-link to="#">导出关联</router-link>
      <router-link to="#">导出共享层</router-link>
    </div>
  </el-header>
  <el-container class="lowpart">
    <el-aside width="200px">
      <NavMenu v-on:tableChange="updateTable" :entries="scopes"></NavMenu>
    </el-aside>
    <el-main>

      <el-button @click="addLink" type="primary" icon="el-icon-circle-plus-outline" plain>增加关联</el-button>
          <el-dialog title="新建关联" :visible.sync="dialogFormVisible">
            <LinkForm :scopes="scopes" :addForm="addForm" v-on:linkCreated="createLink"></LinkForm>
          </el-dialog>
      <Table :tabledata="mdata" :curscope="addForm.scope_name_1" :loading="loading"></Table>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import NavMenu from "./NavMenu.vue";
import Table from "./Table.vue";
import LinkForm from "./LinkForm.vue"
import axiosapi from "../axios.js";
export default {
  name: 'HelloWorld',
  components: {
    NavMenu,
    Table,
    LinkForm,
  },
  methods: {
    updateTable: function(item) {
        this.loading = true;  
      this.addForm.scope_name_1 = item.name;
      axiosapi.getTableData(item.name).then((response) => {
          if(response.data && response.data.body) {
              this.mdata = response.data.body.data;
              this.loading = false;
          }
      }).catch((err) => {
          this.loading = false;
      });
    },
    createLink: function(addForm) {
        this.dialogFormVisible = false;
        let self = this;
        axiosapi.postAddLink(addForm).then(function(response){
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
              message: '请检查输入构件是否存在/输入关联是否重复',
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
    },
    addLink: function() {
      this.dialogFormVisible = true;
      //clear form
      this.addForm.element_name_1 = '';
      this.addForm.element_name_2 = '';
      this.addForm.scope_name_2 = '';
    },
  },
  data() {
    return {
      loading: true,
      dialogFormVisible: false,
      addForm: {
          scope_name_1:'电网工程',
          scope_name_2:'',
          element_name_1:'',
          element_name_2:'',
      },
      scopes: [
          {
              name:"电网工程",
              index:"1"
          },
          {
              name:"建筑工程",
              index:"2"
          },
          {
              name:"铁路工程",
              index:"3"
          },
          {
              name:"公路工程",
              index:"4"
          },
          {
              name:"水利工程",
              index:"5"
          },
          {
              name:"民航工程",
              index:"6"
          },
          {
              name:"石油管道",
              index:"7"
          },
          {
              name:"城市轨道",
              index:"8"
          },
          {
              name:"机械制造",
              index:"9"
          }
      ],
      mdata: [],
    }
  },
  mounted() {
    axiosapi.getTableData("电网工程").then(response => {
        if(response.data && response.data.body) {
            this.mdata = response.data.body.data;
            this.loading = false;
            //console.log(this.mdata);
        }
    }).catch((err) => {
        this.loading = false;
    });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.el-header {
  background-color: #f5f5f5;
  color: #333;
  line-height: 60px;
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 2;
  justify-content: space-between;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);
  h3 {
      font-size: 1.2em;
      color: #2c3e50;
      font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
      font-weight: 500;
  }
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
