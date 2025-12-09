<script setup>
import { ref } from 'vue'
import TodoList from './B50_TodoList.vue'

const todos = ref([
  { id: 5, text: '學習 Vue3', done: false },
  { id: 6, text: '打電話給客戶', done: true },
  { id: 7, text: '訂到高雄的高鐵票', done: false },
  { id: 8, text: '找餐廳', done: false }
])
</script>

<template>
  <div>
    <!-- 使用 v-slot 接收子元件傳遞的資料 -->
    <TodoList :todos="todos" v-slot="slotProps">
      <!-- slotProps 名稱可以自行決定 -->
      <span :class="{ done: slotProps.todo.done }">
        {{ slotProps.index }}. {{ slotProps.todo.text }}
      </span>
    </TodoList>
    <hr/>
    <!-- 解構寫法（推薦） -->
    <!-- <TodoList :todos="todos" #default="{ todo, index }"> -->
    <TodoList :todos="todos" #="{ todo, index }">
      <span :class="{ done: todo.done }">
        {{ index }}. {{ todo.text }}
      </span>
    </TodoList>
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  opacity: 0.6;
}
</style>