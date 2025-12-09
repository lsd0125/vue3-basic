<script setup>
import { ref, reactive } from 'vue'
const fruits = ref(['蘋果', '香蕉', '橘子'])
const users = reactive([
  { id: 7, name: 'John', age: 30 },
  { id: 8, name: 'Jane', age: 25 },
  { id: 9, name: 'Bob', age: 35 }
])
</script>

<template>
  <div>
    <!-- 帶索引的迴圈 -->
    <ul>
      <li v-for="(fruit, index) in fruits" :key="index">
        {{ index }}. {{ fruit }}
      </li>
    </ul>
    <!-- 物件陣列迴圈 -->
    <div v-for="user in users" :key="user.id" class="user-card">
      <h3>{{ user.name }}</h3>
      <p>編號：{{ user.id }}, 年齡：{{ user.age }}</p>
    </div>
  </div>
</template>

<style scoped>
.user-card {
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>