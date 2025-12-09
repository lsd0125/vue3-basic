<script setup>
// 定義接收的 props
const props = defineProps({
  count: Number
})

// 定義要發射的事件
const emit = defineEmits(['increase', 'decrease', 'reset'])
</script>

<template>
  <div class="child">
    <h3>子元件</h3>
    <p>收到的計數：{{ count }}</p>
    <p><button @click="$emit('increase')">發送 increase 事件</button></p>
    <p><button @click="emit('decrease')">發送 decrease 事件</button></p>
    <p><button @click="emit('reset', 123)">發送 reset 事件</button></p>
  </div>
</template>
<style scoped>
.child {
  border: 2px solid #666;
  padding: 10px;
  margin-top: 10px;
}
</style>