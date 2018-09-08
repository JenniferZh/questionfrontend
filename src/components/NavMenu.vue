<template>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo">

        <el-menu-item v-for="item in entries" :key="item.index" :index=item.index @click="onMenuItemClick(item)">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.name}}</span>
        </el-menu-item>

    </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
      'entries': Array,
  },
  methods: {
      onMenuItemClick: function (item) {
        this.$emit('tableChange', item);
      }
  },
}
</script>
