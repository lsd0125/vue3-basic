<script setup>
import Card from './B10_CardItem.vue'
</script>

<template>
  <div>
    <!-- 在 <Card> 標籤內的內容會被插入到 <slot> 位置 -->
    <Card>
      <h2>標題</h2>
      <p>這是卡片內容</p>
    </Card>

    <Card>
      <!-- 可以插入任何內容，包括其他元件 -->
      <img src="/images/cake01.png" alt="蛋糕圖片" width="300"/>
      <p>圖片說明</p>
    </Card>

    <Card></Card>
  </div>
</template>