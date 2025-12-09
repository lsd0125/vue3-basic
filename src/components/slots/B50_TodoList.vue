<script setup>
// 傳入屬性的資料型態定義
defineProps({
  todos: Array
})
</script>

<template>
  <ul class="todo-list">
    <li v-for="todo in todos" :key="todo.id">
      <!-- 子元件傳遞資料給父元件: todo, index -->
      <slot :todo="todo" :index="todo.id"></slot>
    </li>
  </ul>
</template>