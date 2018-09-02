<template>
    <el-table
    :data="tabledata"
    :row-class-name="statusClass"
    height="800"
    border
    style="width: 100%">
    <el-table-column
      prop="code"
      label="分类编码"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="link_full_name"
      label="相似属性"
      width="400">
    </el-table-column>
    <el-table-column
      :formatter="formatStatus"
      label="状态"
      width="150">
    </el-table-column>
    <el-table-column
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button @click="handleClickConfirm(scope.row)" type="text" size="small">确认</el-button>
        <el-button @click="handleClickCancel(scope.row)" type="text" size="small">取消</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "Table",

    props: {
      'tabledata': Array,
    },

    methods: {
      handleClickConfirm: function (row) {
          row.status=1;
      },
      handleClickCancel: function (row) {
          row.status=0;
      },
      statusClass: function({row}) {
          if(row.status === 1 ) return "right-row";
          else return "wrong-row";
      },
      formatStatus: function(row, column, cellValue) {
          var newStatus = row.status == 1? "已确认":"未确认";
          return newStatus
      }


    }
  }
</script>

<style lang="scss">
.el-table {
    .right-row {
        background: #f0f9eb;
    }
    .wrong-row {
        background: oldlace;
    }

}
</style>
