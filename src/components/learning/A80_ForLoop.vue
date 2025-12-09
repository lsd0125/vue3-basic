<template>
  <div>
    <!-- 產生 1 到 10 的數字 -->
    <p v-for="n in 10" :key="n">{{ n }} </p>
  </div>
</template>