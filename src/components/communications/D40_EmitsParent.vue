<script setup>
import { ref } from 'vue'
import ChildComponent from './D30_EmitsChild.vue'

const count = ref(0)
const doIncrease = () => count.value++
const doDecrease = () => count.value--
// 接收子元件事件傳來的參數
const doReset = (val) => count.value = val
</script>

<template>
  <div class="parent">
    <h2>父元件</h2>
    <p>訊息：{{ count }}</p>

    <!-- 監聽子元件的事件 -->
    <ChildComponent :count="count" @increase="doIncrease" @decrease="doDecrease" @reset="doReset" />
  </div>
</template>