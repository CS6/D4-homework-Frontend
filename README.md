# D4-homework-Frontend

## 啟動

啟動將使用到 yarn 與 serve。

### 複製該專案內容


### 安裝相關套件

```bash
yarn
```

### 開發與預覽可用

```bash
yarn run dev
```

### 產出靜態頁面供其他應用

```bash
yarn run export
```

產出後的檔案將在該專案目錄的 `/out` 資料夾中。

#### 以 serve 為例

```bash
cd ./out
serve -p 3000
```

正常狀態下將顯示該畫面:

```bash
   ┌────────────────────────────────────────────────────┐
   │                                                    │
   │   Serving!                                         │
   │                                                    │
   │   - Local:            http://localhost:3000        │
   │   - On Your Network:  http://xxx.xxx.xxx.xxx:3000  │
   │                                                    │
   │   Copied local address to clipboard!               │
   │                                                    │
   └────────────────────────────────────────────────────┘
```

請使用畫面中的網址瀏覽網頁。

## 預覽


## 說明

主要語言為 typescript，使用 next.js 進行所有功能的開發。
