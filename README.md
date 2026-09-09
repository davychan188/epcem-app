# EPCEM

Electronic Platform for Communication Exchange and Monitoring Work Performance

前線園藝同事手機平台（康文署園藝／樹木保養合約）

PWA App：派工、GPS 打卡、施工前／後相片、完工提交、組長審核。

## 目錄

```
根目錄          PWA（GitHub Pages 由 / 部署）
  index.html     App 介面
  manifest.json  加到主畫面
  sw.js          離線快取
  icon.svg
data/            資料結構 Excel（工種、場地、隊伍、工單欄位）
docs/            概念規格 Word
```

## 本機預覽

```bash
python3 -m http.server 8080
```

瀏覽器打開 http://127.0.0.1:8080

## 放到 GitHub + 手機當 App 用

1. 開新 repo（建議名 `epcem-app`），Visibility 可 Private
2. 上載本資料夾全部檔案
3. Repo → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / folder `/`（root）
4. 等 1–2 分鐘，會有網址：
   `https://<你的帳號>.github.io/epcem-app/`
5. 前線用手機打開該網址
   - iPhone：Safari → 分享 → 加入主畫面
   - Android：Chrome → 選單 → 安裝應用程式

**相機／定位要 https。** GitHub Pages 已係 https，本機 `file://` 部分功能會受限。

## 而家示範版做咩

| 角色 | 操作 |
|------|------|
| 前線 | 今日工單 → 到場打卡 → 拍前／後相 → 填數量提交 |
| 組長 | 切換「組長審核」→ 通過或退回 |

資料存在該部手機 `localStorage`（key: `epcem2`），未接雲端。重置：App「我的」→ 重置示範數據。

## 建議之後接上 GitHub 一齊做

- [ ] 用 GitHub Issues 記場地／工種清單
- [ ] 接 Supabase 或 Firebase（帳戶、多機同步、相片 Storage）
- [ ] 真實 `<input type="file" accept="image/*" capture="environment">` 開相機
- [ ] 匯出對康文署「附相片工作報告」PDF
- [ ] 需要時再用 Capacitor / Flutter 包 APK、上架

## 工種代碼（第一期）

WAT 灌溉 · WEED 除草 · PRN-S 灌木修剪 · PRN-T 喬木修剪 · FERT 施肥 · PEST 病蟲害 · INSP 巡查 · COMP 投訴 · TYPH 風後清理

完整欄位見 `data/EPCEM_康文署_資料結構.xlsx`

## 授權

內部使用。上 GitHub 前請自行決定 Private / Public。
