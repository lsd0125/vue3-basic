<script setup>
import Layout from './B30_Layout.vue';
</script>

<template>
  <Layout>
    <!-- 使用 v-slot 指定插槽名稱 -->
    <template v-slot:header>
      <h1>網站標題</h1>
      <nav>
        <a href="/">首頁</a> / 
        <a href="/about">關於</a>
      </nav>
    </template>

    <!-- 預設插槽（不需要指定名稱） -->
    <h2>主要內容</h2>
    <p>這是頁面的主要內容區域</p>

    <template #footer><!-- 具名插槽縮寫（使用 #） -->
      <p>&copy; 2025 小新的網站</p>
    </template>
  </Layout>
</template>