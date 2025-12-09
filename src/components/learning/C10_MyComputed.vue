<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

// 計算屬性：自動追蹤 firstName 和 lastName
const fullName = computed(() => {
  console.log('執行計算屬性函式', firstName.value, lastName.value)
  return `${firstName.value} ${lastName.value}`
})
</script>

<template>
  <div>
    <p>名：<input v-model="firstName"></p>
    <p>姓：<input v-model="lastName"></p>
    <p>全名：{{ fullName }}</p>
    <p>全名：{{ fullName }}</p> <!-- 不會重新計算，使用快取 -->
  </div>
</template>