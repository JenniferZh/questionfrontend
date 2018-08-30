<template>
  <el-container>
  <el-header>
    <h3>调查问卷</h3>
    <div>
      <a>导出结果</a>
      <a>导出共享层</a>
    </div>
  </el-header>
  <el-container>
    <el-aside width="300px">
      <NavMenu v-on:tableChange="updateTable"></NavMenu>
    </el-aside>
    <el-main>
      <Table :tabledata="mdata"></Table>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import NavMenu from "./NavMenu.vue";
import Table from "./Table.vue";
export default {
  name: 'HelloWorld',
  components: {
    NavMenu,
    Table,
  },
  methods: {
    updateTable: function(item) {
      this.mdata = [{
        code: 'SL-53.01.10.00.00',
        name: '坝体',
        props: '公路工程：坝体',
        status: '错误',
      }, {
        code: 'SL-53.01.10.00.00',
        name: '坝体2',
        props: '公路工程：坝体',
        status: '正确',
      }];
      console.log("hear"+item.name);
    }
  },
  data() {
    return {
      mdata: [{
        code: 'SL-53.01.10.00.00',
        name: '坝体',
        props: '公路工程：坝体',
        status: '错误',
      }, {
        code: 'SL-53.01.10.00.00',
        name: '坝体2',
        props: '公路工程：坝体',
        status: '正确',
      }, {
        code: 'SL-53.01.10.00.00',
        name: '坝体3',
        props: '公路工程：坝体',
        status: '错误',
      }, {
        code: 'SL-53.01.10.00.00',
        name: '坝体4',
        props: '公路工程：坝体',
        status: '错误',
      }]
    }
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
  justify-content: space-between;
  a {
    margin-left: 30px;
  }
}

.el-aside {
  color: #333;
}
</style>
