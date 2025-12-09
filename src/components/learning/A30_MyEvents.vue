<script setup>
// 處理函式自動接收 event 參數
function handleMouse(event) {
  console.log(event.type, event.target)
}
function handleSubmit(event) {
  event.preventDefault()
  console.log('表單送出事件')
}
function handleInput(event) {
  console.log('輸入值：', event.target.value)
}

function handleChange(event) {
  console.log('改變值：', event.target.value)
}
</script>

<template>
  <div class="container">
    <!-- 滑鼠事件 -->
    <button @click="console.log('點擊')">點擊</button>
    <button @dblclick="console.log('雙擊')">雙擊</button>
    <div @mouseenter="handleMouse" @mouseleave="handleMouse">
      滑鼠移入/移出區域
    </div>
    <!-- 提交事件 -->
    <form @submit="handleSubmit">
      <!-- 文字輸入欄的事件 -->
      <input @input="handleInput" placeholder="輸入事件">
      <input @change="handleChange" placeholder="改變事件">
      <input @focus="console.log('獲得焦點')" @blur="console.log('失去焦點')" placeholder="焦點事件">
      <input type="submit" value="表單送出" />
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
}

.container>div {
  width: 100%;
  height: 100px;
  background-color: blue;
}

input {
  display: inline-block;
  width: 100%;
  height: 2rem;
  margin-bottom: 0.5rem;
}
</style>
