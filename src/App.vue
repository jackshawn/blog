<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    background: #f7f7f7;
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }

  /* 隐藏webkit浏览器滚动条 */
  body::-webkit-scrollbar {
    display: none
  }

  /* 隐藏百度LOGO */
  .anchorBL {
    display: none;
  }
</style>
