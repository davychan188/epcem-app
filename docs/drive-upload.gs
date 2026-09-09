/**
 * 樹木紀錄上存腳本（貼去 script.google.com）
 *
 * 設定：
 * 1. 喺 Google Drive 開一個公司共用資料夾
 * 2. 打開資料夾，網址似：
 *    https://drive.google.com/drive/folders/XXXXXXXX
 *    把 XXXXXXXX 填入下面 FOLDER_ID
 * 3. 開 https://script.google.com → 新增專案 → 貼呢份碼
 * 4. 部署 → 新增部署 → 類型選「網頁應用程式」
 *    - 執行身分：我
 *    - 具有存取權的使用者：任何人
 * 5. 複製「網頁應用程式網址」（…/exec）→ 貼去手機 App「說明」頁
 */

var FOLDER_ID = '請改成你的資料夾ID';

function doPost(e) {
  try {
    var raw = (e && e.postData && e.postData.contents) ? e.postData.contents : '{}';
    var data = JSON.parse(raw);
    if (!data.treeNo) {
      return json_({ ok: false, error: '缺少樹木號碼' });
    }
    var root = DriveApp.getFolderById(FOLDER_ID);
    var stamp = Utilities.formatDate(new Date(data.ts || Date.now()), 'Asia/Hong_Kong', 'yyyyMMdd-HHmmss');
    var folderName = (data.treeNo + '_' + stamp).replace(/[\\/:*?"<>|]/g, '_');
    var folder = root.createFolder(folderName);

    saveImage_(folder, data.treeNo + '_資料.jpg', data.info);
    saveImage_(folder, data.treeNo + '_事前.jpg', data.before);
    saveImage_(folder, data.treeNo + '_事後.jpg', data.after);

    var meta = [
      '樹木號碼: ' + data.treeNo,
      '時間: ' + (data.timeText || ''),
      '備註: ' + (data.note || ''),
      '紀錄ID: ' + (data.id || ''),
      '資料夾: ' + folder.getUrl()
    ].join('\n');
    folder.createFile('紀錄.txt', meta, MimeType.PLAIN_TEXT);

    return json_({ ok: true, folderUrl: folder.getUrl(), folderName: folderName });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({ ok: true, message: '樹木紀錄上存服務運作中。請用 App POST。' });
}

function saveImage_(folder, name, b64) {
  if (!b64) return;
  var bytes = Utilities.base64Decode(b64);
  var blob = Utilities.newBlob(bytes, 'image/jpeg', name);
  folder.createFile(blob);
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
