<template>
  <div id="app">
    <!-- <Three></Three> -->
    <!-- <ForgeViewer></ForgeViewer> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import ForgeViewer from './components/forge/ForgeViewer'
// import Three from './components/Three/index'

export default {
  // components: { ForgeViewer, Three },
  // 监听unload方法，如果重载页面就把state存入sessionStorage，然后在需要state的时候从sessionStorage中取值
  mounted () {},
  methods: {}
}
</script>

<style lang="less" scoped>
// @import "./style/index.less";

#app {
  background: #eee;
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
