<script setup>
const log = console.log;
</script>
<template>
  <div class="container">
    <div @mousemove="log($event.offsetX, $event.offsetY)">
      滑鼠移入/移出區域
    </div>
  </div>
</template>

<style scoped>
.container>div {
  width: 300%;
  height: 100px;
  background-color: blue;
}
</style>
