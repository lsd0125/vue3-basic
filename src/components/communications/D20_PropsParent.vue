<script setup>
import { ref } from 'vue'
import ChildComponent from './D10_PropsChild.vue'

const message = ref('父元件傳來的訊息')
const count = ref(100)
</script>

<template>
  <div class="parent">
    <h2>父元件</h2>
    <p>訊息：<input type="text" v-model="message"></p>
    <p><button @click="count++">count: {{ count }}</button></p>

    <!-- 傳遞 props 給子元件 -->
    <ChildComponent :message="message" :count="count" />
  </div>
</template>