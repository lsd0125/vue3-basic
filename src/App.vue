<script setup>
import { onMounted } from 'vue';
import Navbar from './views/components/Navbar.vue';
import { useCartStore } from './stores/cart.js';

const cart = useCartStore()

onMounted(() => {
  cart.fetchProducts(); // 元件掛載時取得商品列表
});
</script>

<template>
  <div id="app">
    <div class="container">
      <Navbar />
    </div>

    <div class="container">
      <!-- 路由匹配到的元件會顯示在這裡 -->
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
