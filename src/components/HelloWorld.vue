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

      <el-button @click="dialogFormVisible = true" type="primary" icon="el-icon-circle-plus-outline" plain>增加关联</el-button>
      <el-dialog title="新建关联" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="本领域" :label-width="formLabelWidth">
          <el-select v-model="form.region" disabled>
          </el-select>
        </el-form-item>
        <el-form-item label="本领域构件名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="关联领域" :label-width="formLabelWidth">
          <el-select v-model="form.region2">
            <el-option v-for="item in scopes" :label="item.name" :value="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="关联构件名称" :label-width="formLabelWidth">
          <el-input v-model="form.name2" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
      </el-dialog>
      <Table :tabledata="mdata"></Table>
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
      this.form.region = item.name;
      axiosapi.getTableData(item.name).then(response => (this.mdata = response.data));
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      form: {
          name: '',
          name2: '',
          region: '电网工程',
          region2: '',
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
    axiosapi.getTableData("电网工程").then(response => (this.mdata = response.data));
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
