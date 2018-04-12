<template>
  <div class="text-input">
    <input :value="value" :type="type" :placeholder="placeholder" @input="emitInput($event.target.value)">
  </div>

</template>
<script>
export default {
  name: 'TextInput',
  props: ['value', 'placeholder', 'type'],
  methods: {
    emitInput (value) {
      this.$emit('input', value)
    }
  }
}
</script>
<style scoped>
  .text-input {
    box-sizing:border-box;
  }
  input {
    color: #0e6252;
    display: block;
    box-sizing: border-box;
    width: 200px;
    margin: 0 auto;
    border: none;
    padding: 10px;
    outline: none;
    border-bottom: solid 1px #1abc9c;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #1abc9c 4%);
    background-position: -200px 0;
    background-size: 200px 100%;
    background-repeat: no-repeat;
    transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  }

  input:focus {
    background-position: 0 0;
  }
  input::-webkit-input-placeholder, input::-webkit-input-placeholder {
    text-align: center;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

</style>
