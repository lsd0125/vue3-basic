# Cloudflare Pages 部署指南

本文件說明如何將此 Vue 3 專案部署到 Cloudflare Pages。使用命令列工具是比較方便的方式。

## 命令列工具部署

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
