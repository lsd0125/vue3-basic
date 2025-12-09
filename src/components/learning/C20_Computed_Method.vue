<script setup>
import { ref, computed } from 'vue'

const count = ref(0)

// 計算屬性：有快取
const doubleCount = computed(() => {
  console.log('計算 doubleCount')
  return count.value * 2
})

// 方法：無快取
const getDoubleCount = () => {
  console.log('執行 getDoubleCount()')
  return count.value * 2
}
</script>

<template>
  <div>
    <p>計數：{{ count }}</p>
    <button @click="count++">加一</button>

    <!-- 計算屬性：只在 count 改變時計算一次 -->
    <p>雙倍（computed）：{{ doubleCount }}</p>
    <p>雙倍（computed）：{{ doubleCount }}</p>

    <!-- 方法：每次渲染都會執行 -->
    <p>雙倍（method）：{{ getDoubleCount() }}</p>
    <p>雙倍（method）：{{ getDoubleCount() }}</p>
  </div>
</template>