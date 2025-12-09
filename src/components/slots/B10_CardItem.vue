<template>
  <div class="card">
    <slot>
      <!-- 預設內容：當父元件沒有提供內容時顯示 -->
      卡片預設內容
    </slot>
  </div>
</template>

<style scoped>
.card {
  margin: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>