module.exports = {
  title: "ADHDの休憩所",
  themeConfig: {
    sidebar: [
      "/",
      "/article_1",
      "/article_2",
      "/article_3",
      "ブログ構築/vuepress",
    ],
  },
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [1, 2, 3] },
  },
  locales: {
    "/": {
      lang: "ja",
      title: "ADHDの休憩所",
      description: " メモ用ブログ ",
      head: [
        //        ['meta', { name: 'keywords', content: 'xxx, vueブログ' }],
        //        ['meta', { property: 'og:title', content: 'xxx' }],
        [
          //  "meta",
          {
            //    name: "og:description",
            //    content: " Description",
          },
        ],
        //["meta", { property: "og:locale", content: "ja" }],
        //["meta", { property: "og:type", content: "website" }],
        //["meta", { property: "og:url", content: "https://xxx.com" }],
        //["meta", { property: "og:site_name", content: "xxx Blog" }],
        [
          //  "meta",
          {
            //    property: "og:image",
            //    content: "https://xxx.com/images/icons/icon-192x192.png",
          },
        ],
      ],
    },
  },
  seo: {},
};
