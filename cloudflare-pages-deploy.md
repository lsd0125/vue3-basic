# Cloudflare Pages 部署指南

本文件說明如何將此 Vue 3 專案部署到 Cloudflare Pages。

## 方法一：透過 Cloudflare Dashboard（推薦）

### 1. 準備設定

Cloudflare Pages 會將專案部署在根路徑（不像 GitHub Pages 需要 `/vue3-basic/` base path），因此需要調整建置設定。

**選項 A：單獨為 Cloudflare Pages 設定（推薦）**

修改 `vite.config.js`：

```javascript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: process.env.CF_PAGES ? '/' : '/vue3-basic/',
});
```

**選項 B：完全使用根路徑**

如果只部署到 Cloudflare Pages，保持 `vite.config.js` 不設定 base path 即可。

### 2. 在 Cloudflare 建立專案

1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 選擇左側選單的 **Workers & Pages**
3. 點擊 **Create application**
4. 選擇 **Pages** 分頁
5. 點擊 **Connect to Git**
6. 授權 Cloudflare 存取你的 GitHub 帳號
7. 選擇 `vue3-basic` repository

### 3. 設定建置參數

在建置設定頁面輸入以下資訊：

| 設定項目 | 值 |
|---------|-----|
| **Framework preset** | Vue |
| **Build command** | `pnpm build` |
| **Build output directory** | `dist` |
| **Root directory** | (留空) |

**環境變數**：

點擊 **Add environment variable** 新增：

- 變數名稱：`NODE_VERSION`
- 值：`20`

（可選）如果使用選項 A 的設定，額外新增：

- 變數名稱：`CF_PAGES`
- 值：`true`

### 4. 部署

1. 點擊 **Save and Deploy**
2. Cloudflare 會自動開始建置和部署
3. 完成後會提供一個預覽網址（例如：`https://vue3-basic.pages.dev`）

### 5. 後續更新

之後每次 push 到 `main` 分支時，Cloudflare Pages 會自動：

- 觸發建置流程
- 部署最新版本
- 保留舊版本以便回滾

---

## 方法二：使用 Wrangler CLI

適合偏好使用指令列工具或需要本地建置的開發者。

### 1. 安裝 Wrangler

```bash
pnpm add -D wrangler
```

### 2. 登入 Cloudflare

首次使用需要登入：

```bash
pnpm wrangler login
```

這會開啟瀏覽器進行 OAuth 認證。

### 3. 建置並部署

```bash
# 建置專案
pnpm build

# 部署到 Cloudflare Pages
pnpm wrangler pages deploy dist --project-name=vue3-basic
```

首次部署時，Wrangler 會：

- 建立新的 Cloudflare Pages 專案
- 上傳建置產物
- 提供專案網址

### 4. 新增部署腳本（選用）

為方便使用，可在 `package.json` 加入部署指令：

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "pnpm build && wrangler pages deploy dist --project-name=vue3-basic"
  }
}
```

之後只需執行：

```bash
pnpm deploy
```

---

## 進階設定

### 自訂網域

1. 在 Cloudflare Pages 專案頁面，選擇 **Custom domains**
2. 點擊 **Set up a custom domain**
3. 輸入網域名稱（例如：`vue3-basic.yourdomain.com`）
4. 依指示設定 DNS 記錄
5. 等待 SSL 憑證自動配置完成

### 環境變數管理

在 Cloudflare Dashboard 的專案設定中：

1. 選擇 **Settings** → **Environment variables**
2. 可分別為 **Production** 和 **Preview** 環境設定不同變數
3. 支援加密的 secret 變數

### 預覽部署

Cloudflare Pages 自動為每個 Pull Request 建立預覽環境：

- 每個 PR 都會取得獨立的預覽網址
- 方便在合併前測試變更
- 預覽環境可套用不同的環境變數

### 回滾到先前版本

1. 進入專案的 **Deployments** 頁面
2. 找到要回滾的版本
3. 點擊 **⋯** 選單
4. 選擇 **Rollback to this deployment**

---

## 同時維護多個部署平台

如果需要同時部署到 GitHub Pages 和 Cloudflare Pages：

### 方法：使用環境變數控制 base path

**vite.config.js**：

```javascript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: process.env.CF_PAGES ? '/' : '/vue3-basic/',
});
```

**GitHub Actions** (`.github/workflows/deploy.yml`) 維持不變，因為預設不會設定 `CF_PAGES` 環境變數。

**Cloudflare Pages** 在環境變數設定中加入 `CF_PAGES=true`。

這樣兩個平台會使用不同的 base path：

- GitHub Pages: `/vue3-basic/`
- Cloudflare Pages: `/`

---

## 重要注意事項

### 1. Base Path 差異

- **GitHub Pages**: 專案部署在 `https://username.github.io/vue3-basic/`，需要 base path
- **Cloudflare Pages**: 專案部署在 `https://vue3-basic.pages.dev`，使用根路徑

### 2. 路由處理

專案使用 Vue Router 的 `createWebHistory` 模式，Cloudflare Pages 會自動處理 SPA 路由：

- 所有找不到的路徑會自動導向 `index.html`
- 不需要額外設定 `_redirects` 或 `_headers` 檔案

### 3. 靜態資源

`public/` 目錄中的檔案會自動複製到建置輸出：

- `public/data/*.json` → `dist/data/*.json`
- `public/images/*` → `dist/images/*`

確保程式碼中使用的路徑正確（例如：`/data/products.json`）。

### 4. 建置工具

專案使用 `rolldown-vite` 版本的 Vite，Cloudflare Pages 建置環境會自動安裝正確版本（透過 `pnpm-lock.yaml`）。

### 5. Node.js 版本

建議設定 `NODE_VERSION=20` 環境變數，確保建置環境使用與本地開發相同的 Node.js 版本。

---

## 疑難排解

### 建置失敗

**症狀**：部署時顯示 `Build failed`

**解決方法**：

1. 檢查 Cloudflare Pages 的建置日誌
2. 確認 `NODE_VERSION` 環境變數已設定
3. 確認 `pnpm-lock.yaml` 已提交到 repository
4. 本地執行 `pnpm build` 確認可成功建置

### 路由 404 錯誤

**症狀**：重新整理頁面時出現 404

**解決方法**：

- Cloudflare Pages 應自動處理 SPA 路由
- 若仍有問題，在 `public/` 目錄建立 `_redirects` 檔案：

  ```
  /*    /index.html   200
  ```

### 資源載入失敗

**症狀**：部署後圖片或 JSON 檔案無法載入

**解決方法**：

1. 確認資源路徑使用絕對路徑（以 `/` 開頭）
2. 檢查 `base` 設定是否正確
3. 確認檔案確實存在於 `public/` 目錄

---

## 參考資源

- [Cloudflare Pages 官方文件](https://developers.cloudflare.com/pages/)
- [Wrangler CLI 文件](https://developers.cloudflare.com/workers/wrangler/)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
