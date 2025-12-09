<script setup>
// 定義接收的 props
const props = defineProps({
  message: String,
  count: Number
})

// script 中使用 props
console.log(props.message)
console.log(props.count)
</script>

<template>
  <div class="child">
    <h3>子元件</h3>
    <p>收到的訊息：{{ message }}</p>
    <p>收到的計數：{{ count }}</p>
    <!-- 點擊按鈕：會得到 count 為唯讀的警告 -->
    <p><button @click="count++">變更 count 值</button></p>
  </div>
</template>
<style scoped>
.child {
  border: 2px solid #666;
  padding: 10px;
  margin-top: 10px;
}
</style>