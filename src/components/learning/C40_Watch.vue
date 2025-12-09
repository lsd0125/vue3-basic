<script setup>
import { ref, reactive, watch } from 'vue'

const counter = ref(0)
const someone = reactive({
  firstName: 'John',
  lastName: 'Wick',
})
// 監聽一個 ref 響應式變數
watch(counter, (newVal, oldVal) => {
  console.log(`counter 從 ${oldVal} 變成 ${newVal}`)
})
// 監聽一個 reactive 響應式變數
watch(someone, (newVal) => {
  console.log('someone 物件有變化了')
  localStorage.setItem('someone', JSON.stringify(newVal))
})
// 監聽 reactive 物件中的特定屬性
watch(
  () => someone.firstName,
  (newVal, oldVal) => {
    console.log(`firstName 從 ${oldVal} 變成 ${newVal}`)
  }
)
// 同時監聽多個響應式變數
watch([counter, someone], ([newCounter, newSomeone], [oldCounter, oldSomeone]) => {
  console.log('counter 或 someone 物件有變化了')
  console.log({ newCounter, newSomeone, oldCounter, oldSomeone })
})
</script>

<template>
  <div>
    firstName: <input v-model="someone.firstName" placeholder="firstName"><br>
    lastName: <input v-model="someone.lastName" placeholder="lastName"><br>
    <button @click="counter++">counter: {{ counter }}</button>
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