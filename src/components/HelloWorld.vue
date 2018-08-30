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
      <NavMenu></NavMenu>
    </el-aside>
    <el-main>
      <Table></Table>
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
  props: {
    msg: String
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
