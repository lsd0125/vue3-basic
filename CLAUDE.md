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

# 建置並部署到 Cloudflare Pages
pnpm deploy
```

## 部署

專案有兩種部署方式：

### GitHub Pages（`main` 分支）

- Workflow 檔案：`.github/workflows/deploy.yml`
- 觸發條件：push 到 `main` 分支
- `vite.config.js` 設定 `base: "/vue3-basic/"`
- 詳細說明：`README.md`

### Cloudflare Pages（`root-directory` 分支）

- 指令：`pnpm deploy`（透過 wrangler pages deploy）
- 專案名稱：`vue3-basic`
- `vite.config.js` 未設定 base path（使用根目錄 `/`）
- 詳細說明：`cloudflare-pages-deploy.md`

## 技術架構

### 核心技術棧

- **Vue 3** - 使用 `<script setup>` 語法和 Composition API
- **Vite (rolldown-vite)** - 透過 pnpm overrides 將 vite 替換為 rolldown-vite
- **Vue Router** - 路由管理，使用 `createWebHistory` 模式，支援巢狀路由與動態路由
- **Pinia** - 狀態管理，使用 Composition API 風格（`defineStore` + 箭頭函數）
- **pinia-plugin-persistedstate** - 狀態持久化（使用 sessionStorage）
- **Bootstrap 5** - 透過 CDN 引入於 `index.html`

## 程式碼結構

### 應用程式入口點

`src/main.js` 初始化順序：Pinia（含 persistedstate 插件）→ Vue Router → 掛載到 #app

### 狀態管理

- Store 定義在 `src/stores/`，使用 Pinia Composition API 風格
- 持久化使用 sessionStorage（關閉瀏覽器即清除）

### 路由架構

路由設定於 `src/router/index.js`：

- 混合使用靜態導入與動態導入（lazy loading）
- 巢狀路由：`/user/:id` 下有子路由 (profile, posts)
- 動態路由參數：`/post/:category/:id`

### 元件組織結構

學習範例元件依字母前綴分類，每系列以 10 為間距遞增編號：

| 目錄 | 前綴 | 主題 |
|------|------|------|
| `src/components/learning/` | A 系列 | 基礎（ref, reactive, 事件, 迴圈） |
| `src/components/learning/` | C 系列 | computed 與 watch |
| `src/components/learning/` | E 系列 | 生命週期、AJAX、錯誤處理 |
| `src/components/communications/` | D 系列 | 元件通訊（props, emits, provide/inject） |
| `src/components/slots/` | B 系列 | Slot 使用方式 |

頁面元件位於 `src/views/`，靜態資料位於 `public/data/`。

## 編碼慣例

- 統一使用 `<script setup>` 語法與 Composition API
- 元件檔名使用 PascalCase，學習範例加字母+兩位數字前綴（如 `A10_MyRef.vue`）
- Store 使用 `use` 前綴（如 `useCartStore`）
- Props/Emits 使用 `defineProps()` 和 `defineEmits()`
- 程式碼註解使用**正體中文**，變數與函數名稱使用英文

## 注意事項

1. **套件管理**: 專案使用 pnpm，且透過 overrides 將 vite 替換為 rolldown-vite
2. **元件命名**: 新增學習範例元件時，遵循字母+數字前綴系統，以 10 為間距
