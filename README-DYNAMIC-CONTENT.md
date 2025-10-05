# 動態內容管理系統使用指南

## 🎯 系統概述

這個靜態網站現在支援透過 JSON 檔案動態管理以下內容：

- 👨‍🏫 **講者介紹**
- 🛍️ **技術創作市集**
- 🤝 **贊助夥伴**
- 🏪 **社群擺攤**

## 📁 檔案結構

```
/
├── data/
│   ├── speakers.json      # 講者資料
│   ├── markets.json       # 技術創作市集攤位
│   ├── sponsors.json      # 贊助夥伴
│   └── about.json         # 關於我們
├── js/
│   ├── dynamic-content.js # 動態內容管理核心
│   └── main.js           # 主要 JavaScript（已整合）
├── admin.html            # 管理介面（示範用）
└── index.html            # 主頁面（已更新）
```

## 🚀 快速開始

### 方法1：直接編輯 JSON 檔案（推薦）

1. **新增講者**：編輯 `data/speakers.json`

```json
{
  "speakers": [
    {
      "id": "newSpeaker",
      "name": {
        "zh": "新講者姓名",
        "en": "New Speaker Name"
      },
      "org": {
        "zh": "公司名稱",
        "en": "Company Name"
      },
      "title": {
        "zh": "職稱",
        "en": "Job Title"
      },
      "topic_category": {
        "zh": "議程分類：主題",
        "en": "Category: Topic"
      },
      "bio": {
        "zh": "講者簡介...",
        "en": "Speaker bio..."
      },
      "session": {
        "name": {
          "zh": "議程名稱",
          "en": "Session Name"
        },
        "abstract": {
          "zh": "議程摘要",
          "en": "Session abstract"
        }
      },
      "tags": ["標籤1", "標籤2"],
      "photo": "images/speaker-photo.jpg"
    }
  ]
}
```

2. **新增贊助商**：編輯 `data/sponsors.json`
3. **新增關於我們**：編輯 `data/about.json`
4. **新增技術市集攤位**：編輯 `data/markets.json`

### 方法2：使用管理介面

1. 開啟 `admin.html` 檔案
2. 填寫表單資料
3. 點擊提交（注意：這只是示範，實際需要後端支援）

### 方法3：使用 JavaScript API

```javascript
// 新增講者
const newSpeaker = {
  id: "speaker-id",
  name: { zh: "中文名", en: "English Name" },
  // ... 其他資料
};
await window.dynamicContentManager.addSpeaker(newSpeaker);

// 新增贊助商
await window.dynamicContentManager.addSponsor(sponsorData);

// 新增社群擺攤
await window.dynamicContentManager.addBooth(boothData);

// 新增技術市集攤位
await window.dynamicContentManager.addMarketBooth(boothData);
```

## 📄 資料格式說明

### 講者 (speakers.json)

```json
{
  "id": "唯一識別碼",
  "name": { "zh": "中文名", "en": "英文名" },
  "org": { "zh": "公司中文", "en": "公司英文" },
  "title": { "zh": "職稱中文", "en": "職稱英文" },
  "topic_category": { "zh": "分類中文", "en": "分類英文" },
  "bio": { "zh": "簡介中文", "en": "簡介英文" },
  "session": {
    "name": { "zh": "議程中文", "en": "議程英文" },
    "abstract": { "zh": "摘要中文", "en": "摘要英文" }
  },
  "tags": ["標籤陣列"],
  "photo": "圖片路徑"
}
```

### 贊助商 (sponsors.json)

```json
{
  "id": "唯一識別碼",
  "name": { "zh": "公司中文名", "en": "公司英文名" },
  "description": { "zh": "描述中文", "en": "描述英文" },
  "category": { "zh": "類別中文", "en": "類別英文" },
  "tier": "gold|silver|bronze",
  "logo": "圖片路徑",
  "website": "網站連結",
  "social": {
    "facebook": "FB連結",
    "linkedin": "LinkedIn連結"
  }
}
```

### 關於我們 (about.json)

```json
{
  "id": "唯一識別碼",
  "name": { "zh": "社群中文名", "en": "社群英文名" },
  "description": { "zh": "描述中文", "en": "描述英文" },
  "logo": "圖片路徑",
  "website": "網站連結",
  "social": {
    "facebook": "FB連結",
    "telegram": "Telegram連結"
  },
  "activities": {
    "zh": ["活動1", "活動2"],
    "en": ["Activity 1", "Activity 2"]
  }
}
```

### 技術創作市集 (markets.json)

```json
{
  "id": "唯一識別碼",
  "name": { "zh": "攤位中文名", "en": "攤位英文名" },
  "description": { "zh": "描述中文", "en": "描述英文" },
  "items": { "zh": "販售物品中文", "en": "販售物品英文" },
  "logo": "圖片路徑",
  "website": "網站連結",
  "social": {
    "facebook": "FB連結",
    "discord": "Discord連結"
  }
}
```

## 🔧 系統功能

### 自動功能

- ✅ 多語言支援（繁體中文/英文）
- ✅ 響應式設計
- ✅ 自動載入 JSON 資料
- ✅ 語言切換時自動更新內容
- ✅ 講者卡片點擊展開功能

### 管理功能

- ✅ 動態新增/載入內容
- ✅ JSON 檔案結構驗證
- ✅ 錯誤處理
- ✅ 瀏覽器 Console 除錯

## ⚠️ 注意事項

1. **圖片檔案**：請確保 `images/` 目錄中有對應的圖片檔案
2. **語言一致性**：每個項目都必須有中英文版本
3. **ID 唯一性**：每個項目的 `id` 必須是唯一的
4. **JSON 格式**：請確保 JSON 檔案格式正確，可使用線上 JSON 驗證工具
5. **後端需求**：要真正儲存資料變更，需要後端 API 支援

## 🛠️ 開發建議

### 本地開發

```bash
# 使用簡單的 HTTP 伺服器
python -m http.server 8000
# 或
npx serve .
```

### 生產部署

1. 確保所有 JSON 檔案可被存取
2. 設定正確的 CORS 標頭（如果需要）
3. 考慮使用 CDN 來加速圖片載入

## 📞 支援

如有問題，請檢查：

1. 瀏覽器開發者工具的 Console
2. Network 面板是否有載入錯誤
3. JSON 檔案格式是否正確

這個系統讓您可以輕鬆管理活動內容，而不需要每次都修改 HTML 或 JavaScript 程式碼！
