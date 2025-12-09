<script setup>
import { useCartStore } from '../stores/cart.js';
const cart = useCartStore()
</script>

<template>
  <div class="row">
    <div class="col">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>編號</th>
            <th>書名</th>
            <th>作者</th>
            <th>頁數</th>
            <th>價格</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in cart.productList" :key="p.id">
            <td>{{ p.id }}</td>
            <td>{{ p.book_name }}</td>
            <td>{{ p.author }}</td>
            <td>{{ p.pages }}</td>
            <td>{{ p.price }}</td>
            <td>
              <button class="btn btn-primary btn-sm" @click="cart.addItem(p)">加入購物車</button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.row {
  margin-top: 20px;
}
</style>
