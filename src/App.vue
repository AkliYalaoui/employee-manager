<template>
  <navBar></navBar>
</template>

<script>

import navBar from './components/nav'
export default {
  name:"app",
  components:{
    navBar
  }
}
</script>
<style>

:root{
  --main-color:#009688;
  --hover-color:#19a093;
}
*,*::after,*::before{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html{
  font-size: 62.5%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
