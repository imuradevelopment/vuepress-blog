<!-- TOC -->

- [ブログ構築](#%E3%83%96%E3%83%AD%E3%82%B0%E6%A7%8B%E7%AF%89)
  - [参考](#%E5%8F%82%E8%80%83)
- [vuepress](#vuepress)
  - [ディレクトリ構成一覧](#%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E6%A7%8B%E6%88%90%E4%B8%80%E8%A6%A7)
  - [ディレクトリ構成詳細](#%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E6%A7%8B%E6%88%90%E8%A9%B3%E7%B4%B0)
    - [docs-.vuepress](#docs-vuepress)
    - [docs-.vuepress-components](#docs-vuepress-components)
    - [docs-.vuepress-theme](#docs-vuepress-theme)
    - [docs-.vuepress-styles](#docs-vuepress-styles)
    - [docs-.vuepress-styles-index.styl](#docs-vuepress-styles-indexstyl)
    - [docs-.vuepress-styles-palette.styl](#docs-vuepress-styles-palettestyl)
    - [docs-.vuepress-public](#docs-vuepress-public)
    - [docs-.vuepress-templates](#docs-vuepress-templates)
    - [docs-.vuepress-templates-dev.html](#docs-vuepress-templates-devhtml)
    - [docs-.vuepress-templates-ssr.html](#docs-vuepress-templates-ssrhtml)
    - [docs-.vuepress-config.js](#docs-vuepress-configjs)
    - [docs-.vuepress-enhanceApp.js](#docs-vuepress-enhanceappjs)

<!-- /TOC -->
## ブログ構築

### 参考
1. [Qiita Markdown 書き方 まとめ](https://qiita.com/shizuma/items/8616bbe3ebe8ab0b6ca1)
1. [Markdown記法 チートシート](https://qiita.com/Qiita/items/c686397e4a0f4f11683d)
1. [[VuePress/Netlify]markdownだけでWebページを作成して公開するまで](https://qiita.com/ozaki25/items/a1988b01f83f6616b7f9)
1. [Markdown記法 チートシート](https://qiita.com/Qiita/items/c686397e4a0f4f11683d)
1. [vuepressドキュメント](https://vuepress.vuejs.org/guide/getting-started.html#prerequisites)
1. [Gitでやりたいこと、ここで見つかる](https://qiita.com/shimotaroo/items/b73d896ace10894fd290)
1. [TermuxでgitのAndroid設定](https://debslink.hatenadiary.jp/entry/20180922/1537573651)

## vuepress

### ディレクトリ構成一覧
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

### ディレクトリ構成詳細

#### docs-.vuepress
  ```
    グローバル構成、コンポーネント、静的リソースなどを格納するために使用されます。
  ```

#### docs-.vuepress-components
  ```
    このディレクトリーのVueコンポーネントは、グローバルコンポーネントとして自動的に登録されます。
  ```

#### docs-.vuepress-theme
  ```
    ローカルテーマを格納するために使用されます。
  ```

#### docs-.vuepress-styles
  ```
    スタイル関連ファイルを格納します。
  ```

#### docs-.vuepress-styles-index.styl
  ```
    CSSファイルの最後に生成される、自動的に適用されるグローバルスタイルファイルは、デフォルトスタイルよりも優先されます。
  ```

#### docs-.vuepress-styles-palette.styl
  ```
    パレットは、デフォルトの色定数を上書きし、スタイラスの色定数を設定するために使用されます。
   ```

#### docs-.vuepress-public
  ```
    静的リソースディレクトリ。
  ```

#### docs-.vuepress-templates
  ```
    HTMLテンプレートファイルを保存します。
  ```

#### docs-.vuepress-templates-dev.html
  ```
    開発環境用のHTMLテンプレートファイル。
  ```

#### docs-.vuepress-templates-ssr.html
  ```
    ビルド時のVue SSRベースのHTMLテンプレートファイル。
  ```

#### docs-.vuepress-config.js
  ```
    構成のエントリファイル。ymlまたはにすることもできますtoml。
  ```

#### docs-.vuepress-enhanceApp.js
  ```
    アプリレベルの機能強化
  ```
