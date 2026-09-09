# 由 App 上存去公司 Drive 資料夾

普通 Drive「共用連結」唔可以俾網頁 App 直接寫入。做法係用 **Google Apps Script 上存網址**（效果等同你講嘅 share link）：App 上存 → 自動入公司資料夾。

## 管理員一次設定（約 10 分鐘）

1. Google Drive 開資料夾，例如「樹木工作紀錄」，分享俾公司同事可睇／可編輯。
2. 複製資料夾 ID（網址 `/folders/` 後面嗰串）。
3. 打開 https://script.google.com → 新增專案。
4. 貼上 `docs/drive-upload.gs` 全部內容，把 `FOLDER_ID` 改成你嘅 ID。
5. **部署 → 新增部署 → 網頁應用程式**
   - 執行身分：我
   - 存取權：任何人
6. 複製結束嘅網址（`https://script.google.com/macros/s/.../exec`）。
7. 喺手機 App → **說明** → 貼上存網址 → 儲存。

## 前線用法

填樹木號碼、影事前／事後相 → **儲存並上存公司資料夾**。  
同事之後打開嗰個 Drive 資料夾就睇到每筆紀錄嘅子資料夾（相片 + 紀錄.txt）。
