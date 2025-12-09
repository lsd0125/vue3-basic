<script setup>
import { reactive } from "vue"
// 宣告一個響應式變數 user，內容是一個物件
const user = reactive({
  name: "John",
  age: 18,
})

const age_increase = () => user.age++
</script>

<template>
  <h2>reactive() 用法</h2>{{ console.log(user) }}
  <h3>名字: {{ user.name }}</h3>
  <h3>年齡: {{ user.age }}</h3>
  <button @click="age_increase">歲數加 1</button>
  <pre>{{ JSON.stringify(user, null, 4) }}</pre>
</template>

<style scoped>
pre {
  text-align: left;
}
</style>
