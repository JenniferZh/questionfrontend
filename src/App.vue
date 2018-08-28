<template>
  <div id="app">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'
  export default {
    name: 'App',
    components: {
      HelloWorld
    }
  }
</script>
<style>
</style>
