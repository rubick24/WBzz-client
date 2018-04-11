<template>
  <div class="loading"></div>
</template>
<script>
export default {
  name: 'Loding'
}
</script>
<style scoped>
  .loading {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    width: 80px;
    height: 80px;
    margin: -40px 0 0 -40px;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #1abc9c;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
