<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="user">
    <div class="alert alert-danger mt-5" role="alert">
      用戶 {{ route.params.id }} 文章列表
    </div>
  </div>
</template>