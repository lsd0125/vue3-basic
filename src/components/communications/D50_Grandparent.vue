<script setup>
import { ref, provide } from 'vue'
import ParentComponent from './D60_Parent.vue'

const theme = ref('light')
const user = ref({ name: 'John', role: 'admin' })

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

// 提供資料給子孫層元件
provide('theme', theme)
provide('user', user)
provide('toggleTheme', toggleTheme) // 提供切換主題的函式
</script>

<template>
  <div :class="['app', theme]">
    <h1>祖父元件</h1>
    <button @click="toggleTheme">切換主題</button>
    <ParentComponent />
  </div>
</template>