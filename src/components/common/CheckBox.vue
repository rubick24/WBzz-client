<template>
  <div class="checkbox checkbox-inline">
    <input type="checkbox" :id="id" :value="value" @change="$emit('input', $event.target.checked)">
    <label :for="id">{{ label }}</label>
  </div>
</template>
<script>
export default {
  name: 'CheckBox',
  props: ['id', 'label', 'value']
}
</script>
<style scoped>
*, *:before, *:after {
  box-sizing: border-box;
}
.checkbox {
  position: relative;
  margin: 16px 0;
  text-align: left;
}
.checkbox.checkbox-inline {
  display: inline-block;
}
.checkbox label {
  cursor: pointer;
}
.checkbox label:before, .checkbox label:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
}
.checkbox label:before {
  width: 20px;
  height: 20px;
  background: #fff;
  border: 2px solid rgba(0, 0, 0, 0.54);
  border-radius: 2px;
  cursor: pointer;
  transition: background .3s;
}
.checkbox input[type="checkbox"] {
  outline: 0;
  margin-right: 10px;
  visibility: hidden;
}
.checkbox input[type="checkbox"]:checked + label:before {
  background: #337ab7;
  border: none;
}
.checkbox input[type="checkbox"]:checked + label:after {
  transform: rotate(-45deg);
  top: 5px;
  left: 4px;
  width: 12px;
  height: 6px;
  border: 2px solid #fff;
  border-top-style: none;
  border-right-style: none;
}
.checkbox input[type="checkbox"]:disabled + label:before {
  border-color: rgba(0, 0, 0, 0.26);
}
.checkbox input[type="checkbox"]:disabled:checked + label:before {
  background: rgba(0, 0, 0, 0.26);
}
</style>
