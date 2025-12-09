<script setup>
import { ref } from 'vue'

const throwError = () => {
  throw new Error('子元件故意拋出的錯誤')
}
</script>

<template>
  <div class="MyErrorComp">
    <h2>子元件</h2>
    <button @click="throwError">
      點擊拋出錯誤
    </button>
  </div>
</template>