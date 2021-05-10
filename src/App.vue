<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App",
  }
</script>

<style>
  @import "./assets/css/reset.min.css";

  @font-face {
    font-family: "Roboto";
    src: local("Roboto"),   url(./assets/fonts/Roboto-Regular.ttf) format("truetype");
  }

  #app {
    font-family: "Roboto", sans-serif;
    color: #333333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .container {
    width: 100%;
    height: 100vh;
    position: relative;
  }
</style>
