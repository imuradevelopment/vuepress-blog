# vuepress
## markdown参考
1. [Qiita Markdown 書き方 まとめ](https://qiita.com/shizuma/items/8616bbe3ebe8ab0b6ca1)
1. [Markdown記法 チートシート](https://qiita.com/Qiita/items/c686397e4a0f4f11683d)
1. [[VuePress/Netlify]markdownだけでWebページを作成して公開するまで](https://qiita.com/ozaki25/items/a1988b01f83f6616b7f9)
---
## ディレクトリ構成
```
.
├── docs
│   ├── .vuepress (任意)
│   │   ├── components (任意)
│   │   ├── theme (任意)
│   │   │   └── Layout.vue
│   │   ├── public (任意)
│   │   ├── styles (任意)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (任意, 危険区域)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (任意)
│   │   └── enhanceApp.js (任意)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json


```

- .vuepress  
  ```
  グローバル構成
  コンポーネント
  静的リソースなどを格納するために使用されます。
  ```
    - components  
      ```
      このディレクトリーのVueコンポーネントは、
      グローバルコンポーネントとして自動的に登録されます。
      ```
    - theme  
      ```
      ローカルテーマを格納するために使用されます。
      ```
