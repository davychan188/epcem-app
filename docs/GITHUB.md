# 上 GitHub 步驟（複製即用）

在已安裝 Git 的電腦：

```bash
cd epcem-app
git init
git add .
git commit -m "Initial EPCEM PWA for LCSD frontline"
git branch -M main
git remote add origin https://github.com/YOUR_USER/epcem-app.git
git push -u origin main
```

GitHub 網頁上載：

1. 開 https://github.com/new
2. Repository name: `epcem-app`
3. Private
4. Create repository
5. Upload files → 把本資料夾所有檔案拖入 → Commit

Pages：

Settings → Pages → Deploy from a branch → `main` → `/public` → Save

若介面無 `/public` 選項：把 `public` 內四個檔（index.html, manifest.json, sw.js, icon.svg）放到 repo 根目錄再開 Pages（folder `/`）。
