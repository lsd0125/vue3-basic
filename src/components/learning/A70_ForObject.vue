<script setup>
import { ref } from 'vue'

const userInfo = ref({
  name: 'John Snow',
  email: 'john@example.com',
  age: 25,
  city: 'Taipei'
})
</script>

<template>
  <div>
    <!-- 遍歷物件的值 -->
    <ul>
      <li v-for="value in userInfo">{{ value }}</li>
    </ul>

    <!-- 遍歷物件的值、鍵和索引 -->
    <ul>
      <li v-for="(value, key, index) in userInfo">
        {{ index }}. {{ key }}: {{ value }}
      </li>
    </ul>
  </div>
</template>