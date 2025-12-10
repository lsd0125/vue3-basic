<script setup>
import { useCartStore } from '../../stores/cart.js';
const cart = useCartStore()
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/vue3-basic/">新德</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/vue3-basic">首頁</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/vue3-basic/about">關於</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/vue3-basic/post/旅遊/6?a=1">來去淡水</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/vue3-basic/user/2">用戶二</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/vue3-basic/products">商品</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/vue3-basic/cart">購物車
              <span class="badge text-bg-warning">{{ cart.quantity }}</span></RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-exact-active {
  font-weight: bold;
  color: #0d6efd;
}
</style>