<template>
    <el-table
    :data="tableData"
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
      width="200">
    </el-table-column>
    <el-table-column
      prop="props"
      label="相似属性"
      width="400">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="150">
    </el-table-column>
    <el-table-column
      fixed="right"
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
    
    created: function() {
        this.EventBus.$on("listenToMenuClick", function(data){
            console.log("data"+data);
        })
    },

    methods: {
      handleClickConfirm: function (row) {
          row.status="正确"
      },
      handleClickCancel: function (row) {
          row.status="错误"
      },
      statusClass: function({row}) {
          if(row.status === "正确") return "right-row";
          else return "wrong-row";
      },
      updateTableData: function(data)
      {
          console.log("hear"+data);
      }

    },

    data() {
      return {
        tableData: [{
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