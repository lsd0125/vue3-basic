<script setup>
import { inject } from 'vue'

// 注入祖先提供的資料
const theme = inject('theme')
const user = inject('user')
const toggleTheme = inject('toggleTheme')

// 提供預設值
const settings = inject('settings', { fontSize: 16 })
</script>

<template>
  <div class="child">
    <h3>子元件</h3>
    <p>主題：{{ theme }}</p>
    <p>使用者：{{ user.name }} ({{ user.role }})</p>
    <p>字體大小：{{ settings.fontSize }}px</p>
    <button @click="toggleTheme">子元件內切換主題</button>
  </div>
</template>
<style scoped>
.child {
  border: 2px solid #b5f097;
  padding: 10px;
  margin-top: 10px;
}
</style>