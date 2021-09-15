# empty

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Thought
```
css 命名使用類似BEM命名方式，更容易看出是在哪一頁或是哪個組件的class。
css 檔案切分為 base layout components pages (視情況增減)，每個資料夾裏可能會有數個檔案，
    最後在引入主檔案app.scss，這樣可以更清楚知道哪個檔案裡面有哪些內容以及該去哪個檔案尋找或修改。

components inputType 依照prop 的 type 決定要利用組件裡的哪個元素，每個元素都有其雙向綁定的值，
此值可能是prop 進組件的某值或是初始值，每個元素也有其方法，發生值變化或是點擊時向父層emit方法與值，
雖然都在同一組件，但可依照prop的值去獨立選擇欲使用的元素，更易於維護與除錯。

vuex 裡用modules，更容易歸納、查找以及除錯，並另外創建了mutationType.js，此檔案專門拿來放置所有modules的mutation，
可更快速查看store裡有哪些mutation。

```