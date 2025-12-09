<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Snow')

// 可寫的計算屬性
const fullName = computed({
  // getter：讀取時執行
  get() {
    return `${firstName.value} ${lastName.value}`
  },
  // setter：寫入時執行
  set(newValue) {
    const names = newValue.split(' ')
    firstName.value = names[0]
    lastName.value = names[1] || ''
  }
})
</script>

<template>
  <div>
    <p>名：{{ firstName }}</p>
    <p>姓：{{ lastName }}</p>
    <p>全名：{{ fullName }}</p>
    <input v-model="fullName" placeholder="輸入全名">
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