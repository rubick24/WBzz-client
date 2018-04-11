<template>
  <div class="card">
    <slot>Card content</slot>
  </div>
</template>
<script>
export default {
  name: 'Card'
}
</script>
<style scoped>
  .card {
    box-sizing: border-box;
    box-shadow:
      0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
</style>
