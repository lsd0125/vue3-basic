<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="user">
    <div class="alert alert-warning mt-5" role="alert">
      用戶 {{ route.params.id }} 個人資料
    </div>
  </div>
</template>