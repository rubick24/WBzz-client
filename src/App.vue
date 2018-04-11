<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
    <my-footer/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import MyFooter from './components/MyFooter'
export default {
  name: 'App',
  components: {
    NavBar, MyFooter
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  box-sizing: border-box;
  position: relative;
  margin: 0;
  padding-top: 60px;
  min-height: 100%;
}
.nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
