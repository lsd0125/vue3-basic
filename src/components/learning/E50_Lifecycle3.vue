<!-- 父層使用：src/components/learning/E10_Container.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

let count = 0;
const elRef = ref(null)

onMounted(() => {
  console.log('onMounted() - 元件已掛載')

  const intervalId = setInterval(() => {
    count++
    // 直接操作 DOM 更新內容
    elRef.value.textContent = count // 不好的做法，但為了示範副作用清理
    console.log(`自動計數：${count}`)
  }, 1000)
  // 在掛載後，設定在卸載時清除 interval
  onUnmounted(() => {
    clearInterval(intervalId)
    console.log('清除自動計數的 interval')
  })
})
</script>

<template>
  <h2>自動計數 <span ref="elRef"></span></h2>
  {{ console.log('更新 View') }}
</template>
