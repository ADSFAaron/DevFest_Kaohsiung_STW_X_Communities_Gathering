# 圖片載入優化系統 Image Loading Optimization System

## 概述 Overview

此圖片載入優化系統專為網路不穩定的使用者設計，提供更好的圖片載入體驗。

This image loading optimization system is designed for users with unstable network connections, providing a better image loading experience.

## 功能特色 Features

### 1. 懶加載 (Lazy Loading)

- 使用 Intersection Observer API
- 只在圖片進入可視區域時才載入
- 減少初始頁面載入時間
- 節省頻寬

### 2. 漸進式載入 (Progressive Loading)

- 圖片載入時顯示模糊效果
- 載入完成後平滑過渡到清晰圖片
- 提供視覺回饋，改善使用者體驗

### 3. Placeholder 佔位符

- 閃爍動畫 (Shimmer Animation)
- 在圖片載入前顯示灰色佔位符
- 避免頁面跳動，保持版面穩定

### 4. 錯誤處理與重試 (Error Handling & Retry)

- 自動重試機制（最多 3 次）
- 載入失敗時顯示友善的錯誤訊息
- 提供「重新載入」按鈕
- 支援多語言錯誤訊息（中文、英文、日文）

### 5. 圖片快取 (Image Caching)

- 瀏覽器端快取
- 避免重複載入相同圖片
- 提升頁面切換速度

## 技術架構 Technical Architecture

### 核心文件 Core Files

```
js/
├── image-loader.js          # 圖片載入優化系統
├── dynamic-content.js       # 動態內容管理（已整合）
└── main.js                  # 主要 JavaScript

css/
└── style.css                # 樣式表（包含圖片載入相關樣式）
```

### 使用方式 Usage

#### 在 JavaScript 中使用

```javascript
// 創建優化的圖片
const imageContainer = window.imageLoader.createOptimizedImage(
  'images/example.webp', // 圖片 URL
  'Example Image', // Alt 文字
  {
    className: 'my-image', // CSS class
    loading: 'lazy', // 'lazy' 或 'eager'
    placeholder: true, // 是否顯示 placeholder
    onClick: () => {}, // 點擊事件（可選）
    title: 'Title', // 標題（可選）
    dataAttributes: {}, // 自定義 data 屬性（可選）
  }
);

// 將容器添加到頁面
document.body.appendChild(imageContainer);
```

#### 預載入圖片

```javascript
// 預載入多張圖片
window.imageLoader.preloadImages(['images/image1.webp', 'images/image2.webp', 'images/image3.webp']);
```

## CSS 樣式 CSS Styles

### 關鍵 CSS Class

- `.image-container` - 圖片容器
- `.image-placeholder` - 載入中的佔位符
- `.image-loaded` - 載入完成的圖片
- `.image-error` - 錯誤訊息容器
- `.retry-button` - 重試按鈕

### 自訂樣式

你可以在 `css/style.css` 中自訂這些樣式：

```css
/* 自訂 placeholder 顏色 */
.image-placeholder {
  background: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);
}

/* 自訂淡入動畫時間 */
.image-container img {
  transition: opacity 0.4s ease-in-out;
}

/* 自訂模糊效果 */
.image-container[data-loading='true'] img {
  filter: blur(10px);
}
```

## 整合說明 Integration

### 已整合的組件 Integrated Components

此系統已整合到以下動態內容組件：

1. ✅ **輪播圖** (Carousel Slides)
2. ✅ **講者照片** (Speaker Photos)
3. ✅ **技術市集 Logo** (Market Booth Logos)
4. ✅ **贊助商 Logo** (Sponsor Logos)
5. ✅ **社群 Logo** (Community Logos)
6. ✅ **關於我們** (About Section)
7. ✅ **志工照片** (Staff Photos)
8. ✅ **議程頁面講者頭像** (Schedule Speaker Avatars)

### 向下相容 Backward Compatibility

系統設計為向下相容：

- 如果 `window.imageLoader` 不可用，會自動退回到傳統的 `<img>` 標籤
- 不會影響現有功能
- 可以逐步啟用

## 效能優化建議 Performance Recommendations

### 1. 圖片格式

- ✅ 已使用 WebP 格式
- 建議：提供 JPEG/PNG fallback 給不支援的瀏覽器

### 2. 圖片尺寸

- 使用適當的圖片尺寸
- 避免載入過大的圖片
- 考慮使用響應式圖片 (`srcset`)

### 3. 載入策略

- 首屏圖片使用 `loading: 'eager'`
- 下方圖片使用 `loading: 'lazy'`
- 輪播圖第一張使用 `eager`，其他使用 `lazy`

### 4. 預載入

```javascript
// 在頁面載入時預載入重要圖片
window.addEventListener('DOMContentLoaded', () => {
  window.imageLoader.preloadImages(['images/hero-image.webp', 'images/logo.webp']);
});
```

## 瀏覽器支援 Browser Support

- ✅ Chrome 51+
- ✅ Firefox 55+
- ✅ Safari 12.1+
- ✅ Edge 15+

**Intersection Observer 支援:**

- 不支援的瀏覽器會自動退回到立即載入模式

## 網路狀況偵測 Network Detection (未來功能)

未來可以加入網路狀況偵測：

```javascript
// 根據網路速度調整載入策略
if (navigator.connection) {
  const effectiveType = navigator.connection.effectiveType;

  if (effectiveType === '2g' || effectiveType === 'slow-2g') {
    // 2G 網路：延遲載入圖片
    imageLoader.setRetryDelay(3000);
  }
}
```

## 故障排除 Troubleshooting

### 問題：圖片沒有懶加載

**解決方案：**

1. 確認 `js/image-loader.js` 已正確載入
2. 檢查瀏覽器是否支援 Intersection Observer
3. 確認 `loading` 參數設定為 `'lazy'`

### 問題：Placeholder 沒有顯示

**解決方案：**

1. 確認 CSS 已正確載入
2. 檢查 `placeholder` 參數設定為 `true`
3. 檢查 CSS 中的 `.image-placeholder` 樣式

### 問題：錯誤訊息沒有顯示

**解決方案：**

1. 檢查圖片 URL 是否正確
2. 確認重試次數已用完（3 次）
3. 檢查瀏覽器控制台的錯誤訊息

## 授權 License

此圖片載入優化系統是 DevFest 2025 網站的一部分。

---

📝 **備註 Note:** 此系統針對網路不穩定的環境進行了特別優化，包括自動重試、友善的錯誤訊息和漸進式載入效果。
