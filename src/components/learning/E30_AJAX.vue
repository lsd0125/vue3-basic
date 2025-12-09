<script setup>
import { computed, ref, onMounted, onBeforeMount } from 'vue'
const countriesURL = 'https://restcountries.com/v3.1/all?fields=name,flags'
/*
{
  "flags": {
    "png": "https://flagcdn.com/w320/tw.png",
    "svg": "https://flagcdn.com/tw.svg",
    "alt": ""
  },
  "name": {
    "common": "Taiwan",
    "official": "Republic of China (Taiwan)",
    "nativeName": {
      "zho": {
        "official": "中華民國",
        "common": "台灣"
      }
    }
  }
}
*/
const countries = ref([])

const tCountries = computed(() => {
  // 篩選出名稱以 T 開頭的國家
  return countries.value.filter(
    country => country.name.common[0].toUpperCase() === 'T'
  ).sort((a, b) =>
    a.name.common.localeCompare(b.name.common) // 按名稱排序
  )
})

onBeforeMount(() => {
  // 使用 Fetch API 載入各國家名稱資料
  fetch(countriesURL)
    .then(res => res.json())
    .then(data => {
      countries.value = data
    })
    .catch(err => {
      console.warn('載入國家資料失敗', err)
    })
})
</script>

<template>
  <div>
    <h2>T 開頭的國家</h2>
    <table>
      <thead>
        <tr>
          <th>國旗</th>
          <th>一般名稱</th>
          <th>官方正式名稱</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="country in tCountries" :key="country.name.common">
          <td>
            <img :src="country.flags.svg" :alt="country.name.common" width="100" />
          </td>
          <td>{{ country.name.common }}</td>
          <td>{{ country.name.official }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>