<template>
  <footer>
    <p> Hand crafted with love by <a href="https://arthas.me" target="_blank">Deadalus</a>.</p>
  </footer>
</template>
<script>
export default {
  name: 'MyFooter'
}
</script>
<style scoped>
  footer {
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
  }
  footer a {
    text-decoration: none;
    color: #1abc9c;
  }
</style>
