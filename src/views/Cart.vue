<script setup>
import { useCartStore } from '../stores/cart.js';
const cart = useCartStore()
</script>

<template>
  <div class="row">
    <div class="col" v-if="cart.quantity">
      <button class="btn btn-sm btn-danger my-2" @click="cart.clearCart()">
        清空購物車
      </button>
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th class="bg-warning">編號</th>
            <th class="bg-warning">書名</th>
            <th class="bg-warning">價格</th>
            <th class="bg-warning">數量</th>
            <th class="bg-warning">小計</th>
            <th class="bg-warning">移除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in cart.items" :key="p.id">
            <td>{{ p.id }}</td>
            <td>{{ p.book_name }}</td>
            <td>{{ p.price }}</td>
            <td>{{ p.quantity }}</td>
            <td>{{ p.price * p.quantity }}</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="cart.removeItem(p.id)">移除</button>
            </td>
          </tr>

        </tbody>
      </table>
      <div class="d-flex justify-content-end">
        <h4>總計：{{ cart.totalPrice }}</h4>
      </div>
    </div>
    <div class="col" v-else>
      <h5>購物車是空的</h5>
    </div>
  </div>
</template>

<style scoped>
.row {
  margin-top: 20px;
}
</style>
