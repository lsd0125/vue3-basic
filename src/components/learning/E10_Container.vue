<script setup>
import { ref } from 'vue'
import MyChild from "./E50_Lifecycle3.vue";

const showChildren = ref(false)

</script>

<template>
  <div>
    <h2>父元件</h2>
    <button @click="showChildren = !showChildren">
      {{ showChildren ? '卸載' : '掛載' }} 子元件
    </button>
    <div v-if="showChildren">
      <MyChild />
    </div>
  </div>
</template>