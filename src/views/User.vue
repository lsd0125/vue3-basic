<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const userId = computed(() => route.params.id)
</script>

<template>
  <div class="user">
    <h1>用戶: {{ userId }}</h1>

    <nav>
      <RouterLink :to="`/vue3-basic/user/${userId}`">個人首頁</RouterLink>
      <RouterLink :to="`/vue3-basic/user/${userId}/profile`">個人資料</RouterLink>
      <RouterLink :to="`/vue3-basic/user/${userId}/posts`">文章列表</RouterLink>
    </nav>

    <!-- 子路由會顯示在這裡 -->
    <RouterView />
  </div>
</template>
<style scoped>
.user nav a {
  margin: 1rem;
}
.router-link-exact-active {
  font-weight: bold;
  color: #0d6efd;
  text-decoration: none;
  border: #0d6efd solid 2px;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
}
</style>
