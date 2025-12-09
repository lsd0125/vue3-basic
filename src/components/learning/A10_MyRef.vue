<script setup>
import { ref } from "vue"
const counter = ref(0) // 宣告一個響應式變數 counter
const increase = () => {
  counter.value++
}
</script>

<template>
  <h2>計數器</h2>{{ console.log("counter =", counter) }}
  <!-- 在 template 直接使用 [響應式變數] -->
  <p>目前數值：{{ counter }}</p>
  <button v-on:click="increase">加 1</button>
  <button @click="counter--">減 1</button>
</template>

<style scoped>
button {
  margin-right: 8px;
  border: 1px solid #888;
}
</style>
