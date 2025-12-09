<script setup>
import ChildComponent from './D70_Child.vue'
</script>

<template>
  <div class="parent">
    <h2>父元件（中間層）</h2>
    <ChildComponent />
  </div>
</template>

<style scoped>
.parent {
  border: 2px solid #666;
  padding: 10px;
  margin-top: 10px;
}
</style>