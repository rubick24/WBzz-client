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
    z-index: 1;
    width: 80px;
    height: 80px;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #1abc9c;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
