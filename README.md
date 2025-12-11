# GitHub Pages - 部署靜態網站

GitHub Pages 可以免費託管靜態網站。
範例網站 <https://lsd0125.github.io/vue3-basic/> 。

## 啟用 GitHub Pages

1. **建立包含網站檔案的 repository**

可以使用前端的 HTML、CSS、JavaScript 和圖檔等靜態檔案建立。或使用範例程式庫 <https://github.com/lsd0125/vue3-basic> 本專案。

```bash
# 複製專案（程式庫、repository）下來
git clone https://github.com/lsd0125/vue3-basic.git

# 進入專案目錄
cd vue3-basic

# 移除原來的 git 記錄
# bash
rm -fr ./.git

# 測試專案（查看 package.json 的設定）
npm run dev # 或 pnpm dev

# 重新建立 git 環境
git init

# 加入所有檔案
git add .

# 提交
git commit -m "打包專案"

# 專案裡面已經有 .github/workflows/deploy.yml 設定，會自動佈屬
```

2. **推送到 GitHub**

```bash
# 在 GitHub 建立沒有包含任何檔案的 repository
# git remote add origin https://github.com/your-username/my-website.git
git remote add origin git@github.com:你的帳號/你的程式庫.git
git branch -M main
git push -u origin main
```

3. **啟用 GitHub Pages**
   - 前往 Repository 的「Settings」
   - 左側選單點選「Pages」
   - Source 選擇「GitHub Actions」
   - 點選「Save」
   - 等待幾分鐘後，網站會部署到 `https://your-username.github.io/my-website/`

<img src="/public/images/github-repo-settings.png" alt="前往 Repository 的「Settings」" />
<br />
<br />
<img src="/public/images/github-repo-pages-source.png" alt="Source 選擇「GitHub Actions」" />

## GitHub Pages 的用途

- 個人作品集網站
- 專案文件（如 [React 文件](https://reactjs.org)）
- 部落格（使用 Jekyll）
- Landing Page

## 使用自訂網域

1. 在 Repository 的 Settings → Pages → Custom domain
2. 輸入你的網域（如 `www.example.com`）
3. 在網域的 DNS 設定中加入 CNAME 記錄：

   ```text
   CNAME: your-username.github.io
   ```

