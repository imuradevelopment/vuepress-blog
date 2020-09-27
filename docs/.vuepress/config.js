module.exports = {
  //base: '/baseURL/',
  locales: {
    "/": {
      lang: "ja",
      title: "ADHDの休憩所",
      description: " メモ用ブログ ",
      head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
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
  themeConfig: {
    locales: {
      "/": {
        // // text for the language dropdown
        // selectText: "Languages",
        // // label for this locale in the language dropdown
        // label: "English",
        // // Aria Label for locale in the dropdown
        // ariaLabel: "Languages",
        // // text for the edit-on-github link
        // editLinkText: "Edit this page on GitHub",
        // // config for Service Worker
        // serviceWorker: {
        //   updatePopup: {
        //     message: "New content is available.",
        //     buttonText: "Refresh"
        //   }
        // }
      },
    },
    // algolia docsearch options for current locale
    algolia: {},
    sidebar: {
      "/blog/": ["", "/blog/vuepress"],
      "/": ["/", "/article_1", "/article_2", "/article_3"],
    },
    //sidebar: ["/", "/article_1", "/article_2", "/article_3", "/vuepress"],
    nav: [
      {
        text: "blog",
        link: "/blog/",
        ariaLabel: "blog",
      },
    ],
  },
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [1, 2, 3] },
  },
  seo: {},
};
