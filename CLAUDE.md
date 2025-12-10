# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 專案概述

這是一個 Vue 3 學習專案，使用 Vite 作為建置工具。專案展示了 Vue 3 的核心概念與功能，包括組合式 API (Composition API)、狀態管理 (Pinia)、路由 (Vue Router) 等。

## 開發指令

```bash
# 啟動開發伺服器
pnpm dev

# 建置專案
pnpm build

# 預覽建置結果
pnpm preview
```

## 部署

專案使用 GitHub Actions 自動部署到 GitHub Pages：

- Workflow 檔案：`.github/workflows/deploy.yml`
- 觸發條件：push 到 `main` 分支
- 部署來源：需在 Repository Settings → Pages 中選擇 "GitHub Actions"
- 網站 URL：`https://<username>.github.io/vue3-basic/`

## 技術架構

### 核心技術棧

- **Vue 3.5.22** - 使用 `<script setup>` 語法和 Composition API
- **Vite 7.1.14** - 使用 rolldown-vite 版本
- **Vue Router 4.6.3** - 路由管理，支援巢狀路由與動態路由
- **Pinia 3.0.3** - 狀態管理，使用 Composition API 風格
- **pinia-plugin-persistedstate** - 狀態持久化（使用 sessionStorage）

### 建置設定

- 專案設定了 `base: "/vue3-basic/"` 用於部署到 GitHub Pages
- 建置輸出目錄為預設的 `dist/`

## 程式碼結構

### 應用程式入口點

`src/main.js` 是應用程式的進入點，初始化順序為：

1. 建立 Pinia instance 並註冊 persistedstate 插件
2. 註冊 Pinia 到 Vue app
3. 註冊 Vue Router
4. 掛載應用程式到 #app

### 狀態管理架構

專案使用 **Pinia Composition API 風格**：

- Store 定義在 `src/stores/` 目錄
- 使用 `defineStore` 配合箭頭函數返回 state、getters、actions
- 範例：`useCartStore` (src/stores/cart.js)
  - State: `items` (購物車項目), `productList` (商品列表)
  - Getters: `quantity` (總數量), `totalPrice` (總價格)
  - Actions: `addItem`, `removeItem`, `clearCart`, `fetchProducts`
  - 持久化設定：使用 sessionStorage，key 為 `cinder-cart-store`

### 路由架構

路由設定於 `src/router/index.js`：

- 使用 `createWebHistory` 模式
- 混合使用靜態導入（Home, About）與動態導入（Post, User 相關頁面）
- 支援巢狀路由：`/user/:id` 下有子路由 (profile, posts)
- 動態路由參數：`/post/:category/:id`, `/user/:id`

### 元件組織結構

**學習範例元件** (`src/components/learning/`)

- 依字母前綴組織：A 系列（基礎）、C 系列（computed/watch）、E 系列（生命週期）
- 檔名採用 PascalCase 並包含兩位數字前綴（如 A10_MyRef.vue）

**通訊範例元件** (`src/components/communications/`)

- D 系列：展示父子元件通訊（props, emits, provide/inject）
- 使用數字前綴表示學習順序（D10, D20...）

**插槽範例元件** (`src/components/slots/`)

- B 系列：展示 slot 的各種使用方式

**頁面元件** (`src/views/`)

- 路由對應的頁面元件
- 包含巢狀路由的子頁面（User 系列）

### 資料來源

- 靜態資料檔案位於 `public/data/`（countries.json, products.json）
- 圖片資源位於 `public/images/`
- Store 透過 fetch API 從 `/data/products.json` 讀取商品資料

## 編碼慣例

### Vue 元件風格

- 統一使用 `<script setup>` 語法
- 使用 Composition API (`ref`, `reactive`, `computed` 等)
- 元件檔名使用 PascalCase

### 命名規範

- Store: 使用 `use` 前綴（如 `useCartStore`）
- 元件事件：使用小寫加連字號（如元件內部定義）
- Props/Emits: 在 `<script setup>` 中使用 `defineProps()` 和 `defineEmits()`

### 注釋語言

- 程式碼註解使用**正體中文**
- 變數、函數名稱使用英文

## 注意事項

1. **路由 base path**: 所有路由和資源路徑需考慮 `/vue3-basic/` 的 base path
2. **狀態持久化**: 購物車 store 使用 sessionStorage，關閉瀏覽器後資料會清除
3. **套件管理**: 專案使用 pnpm，且覆寫了 vite 套件為 rolldown-vite 版本
4. **元件命名**: 學習範例元件使用字母+數字前綴系統，新增元件時請遵循相同規則
