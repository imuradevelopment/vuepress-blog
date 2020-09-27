module.exports = {
  //base: '/baseURL/',
  locales: {
    "/": {
      lang: "ja",
      title: "ADHDの休憩所",
      description: " メモ用ブログ ",
      head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
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
    navber: true,
    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: "検索...",
    lastUpdated: "最終更新",
    nextLinks: false,
    prevLinks: false,
    // Assumes GitHub. Can also be a full GitLab url.
    repo: "imuradevelopment/vuepress-blog",
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: "助ける！",

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: "vuejs/vuepress",
    // if your docs are not at the root of the repo:
    docsDir: "docs",
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "Setup",
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "このページの改善にご協力ください。",
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
    logo: "/favicon.ico",
    sidebar: [
      {
        title: "vuepressブログ構築",
        path: "/",
        collapsable: true,
        sidebarDepth: 3,
        children: ["/", "/vuepress", "/markdown拡張"],
      },
      {
        title: "ブログ",
        path: "/blog/",
        collapsable: true,
        sidebarDepth: 3,
        children: ["/blog/", "/blog/article_2", "/blog/article_3"],
      },
      // {
      //   "/blog/": ["", "/blog/article_2", "/blog/article_3"],
      //   "/": [["/", "技術メモブログ"], "/vuepress", "/markdown拡張"],
      // },
    ],
    nav: [
      {
        text: "ホーム",
        link: "/",
        ariaLabel: "Home",
      },
      {
        text: "ブログ",
        link: "/blog/",
        ariaLabel: "Blog",
      },
      {
        text: "Twitter",
        link: "https://twitter.com/ADHD66502327",
        ariaLabel: "Twitter",
      },
    ],
  },
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [1, 2, 3] },
  },
  seo: {},
};
