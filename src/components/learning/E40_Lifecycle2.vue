<!-- 父層使用：src/components/learning/E10_Container.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const count = ref(0)

onMounted(() => {
  console.log('onMounted() - 元件已掛載')

  const intervalId = setInterval(() => {
    count.value++
    console.log(`自動計數：${count.value}（觸發更新）`)
  }, 1000)

  onUnmounted(() => {
    clearInterval(intervalId)
    console.log('清除自動計數的 interval')
  })
})

</script>

<template>
  <h2>自動計數 {{ count }}</h2>
  {{ console.log('更新 View') }}
</template>
