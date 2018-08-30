<template>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">

        <el-menu-item v-for="item in entries" :key="item.index" :index=item.index @click="onMenuItemClick(item)">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.name}}</span>
        </el-menu-item>

    </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
  methods: {
      onMenuItemClick: function (item) {
          console.log(item);
          this.EventBus.$emit("listenToMenuClick", {"id": item.name});
      }
  },
  data() {
      return {
          entries: [
              {
                  name:"电网工程",
                  index:"1"
              },
              {
                  name:"建筑工程",
                  index:"2"
              },
              {
                  name:"铁路领域",
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
          ]
      }
  }
}
</script>