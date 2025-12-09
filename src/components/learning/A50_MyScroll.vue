<script setup>
function handleScroll(event) {
  console.log('捲動位置：', event.target.scrollTop)
  // 注意：不能在這裡使用 event.preventDefault()
}
</script>

<template>
  <!-- 告訴瀏覽器不會呼叫 preventDefault()，提升滾動效能 -->
  <div @scroll.passive="handleScroll" class="scroll-container">
    <div class="content">
      捲動內容...
    </div>
  </div>
</template>

<style scoped>
.scroll-container {
  height: 300px;
  overflow-y: scroll;
  border: 1px solid #ccc;
}

.content {
  height: 1000px;
  padding: 20px;
}
</style>