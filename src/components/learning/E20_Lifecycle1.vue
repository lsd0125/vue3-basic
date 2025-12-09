<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

const count = ref(0)
const log = (message) => console.log(message, Date.now())

log('1. setup() 執行') // setup 執行（最早）
onBeforeMount(() => log('2. onBeforeMount() - 掛載前'))
onMounted(() => log('3. onMounted() - 掛載後'))
onBeforeUpdate(() => log('4. onBeforeUpdate() - 更新前'))
onUpdated(() => log('5. onUpdated() - 更新後'))
onBeforeUnmount(() => log('6. onBeforeUnmount() - 卸載前'))
onUnmounted(() => log('7. onUnmounted() - 卸載後'))
</script>

<template>
  <div class="lifecycle">
    <h2>子元件生命週期</h2>
    <div class="control">
      <p>計數：{{ count }}</p>
      <button @click="count++">增加（觸發更新）</button>
    </div>
    <p class="hint">提示：點擊「增加」按鈕會觸發更新生命週期</p>
  </div>
</template>

<style scoped>
.lifecycle {
  border: 2px solid #f0de97;
  padding: 10px;
  margin-top: 10px;
}
</style>
