<script setup>
import { ref, reactive, watch } from 'vue'
const objRef = ref({
  name: { first: 'John', last: 'Wick' },
  age: 40,
})
const objReactive = reactive({
  name: { first: 'Shinder', last: 'Lin' },
  age: 40,
})

// 一般監聽一個 ref 響應式變數
watch(objRef, (newVal, oldVal) => {
  console.log(`沒有深度監聽：objRef 變更了`)
  console.log(newVal)
})
// 深度監聽一個 ref 響應式變數
watch(objRef, (newVal, oldVal) => {
  console.log(`深度監聽：objRef 變更了`)
  console.log(newVal)
}, { deep: true })

// 監聽一個 reactive 響應式變數，預設會深度監聽
watch(objReactive, (newVal, oldVal) => {
  console.log(`objReactive 變更了`)
  console.log(newVal)
})
</script>

<template>
  <div>
    <input v-model="objRef.name.first">
    {{ objRef.name.last }}<br>
    <input v-model="objReactive.name.first">
    {{ objReactive.name.last }}<br>
  </div>
</template>
<style scoped>
input {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;
}
</style>