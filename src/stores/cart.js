import { defineStore } from "pinia";
import { ref, computed } from "vue";

// 使用 Composition API 風格（推薦）
export const useCartStore = defineStore("cart", () => {
  // ****** 狀態（state）******
  const items = ref([]);
  const productList = ref([]);

  // ****** 計算屬性（getters）******
  // 計算購物車中商品的總數量
  const quantity = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  );
  // 計算購物車中商品的總價格
  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  // ****** 方法（actions）******
  // 透過商品 ID 找出商品在購物車中的索引值
  function findItemIndexById(id) {
    // 回傳商品在購物車中的索引值，找不到則回傳 -1
    return items.value.findIndex((item) => item.id === id);
  }

  // 添加商品到購物車
  function addItem(item, quantity=1) {
    const index = findItemIndexById(item.id);
    if (index !== -1) {
      // 購物車已有此商品，更新數量
      items.value[index].quantity += quantity;
    } else {
      // 購物車沒有此商品，新增商品
      items.value.push({
        ...item,
        quantity: quantity,
      });
    }
  }

  // 從購物車中移除商品
  function removeItem(id) {
    const index = findItemIndexById(id);
    if (index !== -1) {
      items.value.splice(index, 1);
    }
  }

  // 清空購物車
  function clearCart() {
    items.value = [];
  }
  // TODO: 變更商品數量

  // 模擬從 API 獲取商品列表 (教學用途)
  async function fetchProducts() {
    try {
      const response = await fetch("/vue3-basic/data/products.json");
      productList.value = await response.json();
      console.log(productList.value);
      
    } catch (error) {
      console.error("無法取得商品資料:", error);
    }
  }

  // 必須返回所有要露出的內容
  return {
    items,
    productList,
    quantity,
    totalPrice,
    addItem,
    removeItem,
    clearCart,
    fetchProducts,
  };
}, {
  persist: {
    // 自訂 key
    key: 'cinder-cart-store',
    // 使用 sessionStorage 而不是 localStorage
    storage: sessionStorage
  }
});
