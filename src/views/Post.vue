<script setup>
import { useRoute } from 'vue-router'
import { onMounted, watch } from 'vue'

const route = useRoute()

onMounted(() => {
  console.log('貼文元件已掛載', route.params, route.query)
})
// 監聽參數變化
watch(
  () => route.params,
  (newParams, oldParams) => {
    console.log(JSON.stringify({ newParams, oldParams }, null, 4))
    // 可以在這裡重新載入資料
  }
)
watch(
  () => route,
  ({params, query}) => {
    console.log(JSON.stringify({params, query}, null, 4))
  }, { deep: true } //  需要深度監聽
)
</script>

<template>
  <div>
    <h1>貼文資料</h1>
    <p>貼文分類: {{ route.params.category }}</p>
    <p>貼文編號: {{ route.params.id }}</p>
    <p>完整路徑: {{ route.path }}</p>
    <p>查詢參數: {{ route.query }}</p>
  </div>
  <div>
    <p>其他內容 &nbsp;
      <RouterLink class="btn btn-outline-primary" 
        to="/vue3-basic/post/爬山/7?b=go">爬山趣</RouterLink>
      &nbsp;
      <RouterLink class="btn btn-outline-success" 
        to="/vue3-basic/post/休閒/8?c=您好">看見螢火蟲</RouterLink>
      &nbsp;
      <RouterLink class="btn btn-outline-success" 
        to="/vue3-basic/post/休閒/8?c=再來">看見螢火蟲2</RouterLink>
    </p>
  </div>
</template>