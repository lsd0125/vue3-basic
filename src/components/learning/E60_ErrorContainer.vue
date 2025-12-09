<script setup>
import { onErrorCaptured } from 'vue'
import ChildComponent from './E70_ErrorComponent.vue';

onErrorCaptured((error, instance, info) => {
  console.warn('捕獲到錯誤：', error)
  console.log('錯誤來源元件：', instance)
  console.log( instance.$el ) // 子元件的 DOM 元素
  console.log( instance.$el.className ) // 子元件的 class 名稱
  console.log('錯誤資訊：', info)

  // 返回 false 阻止錯誤繼續向上傳播
  return false
})
</script>

<template>
  <h2>父元件</h2>
  <div>
    <!-- 子元件發生的錯誤會被捕獲 -->
    <ChildComponent />
  </div>
</template>