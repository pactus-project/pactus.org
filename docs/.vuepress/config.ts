const { description } = require("../../package");

module.exports = {
  lang: 'en-US',
  title: "Zarb",
  description: "Zarb blockchain, of the people, by the people, for the people",

  theme: '@vuepress/theme-default',
  themeConfig: {
    hostname: "https://zarb.netwotk/",
    docsRepo: "https://github.com/zarbchain/zarb.network",
    docsDir: "docs",
    docsBranch: "main",
    lastUpdated: "Last Updated",
    editLinks: true,
    contributors: false,
    editLinkText: "Help us improve this page!",
    sidebarDepth: 0,
    navbar: [
      {
        text: "Download",
        link: "/run/download",
      },
      {
        text: "What is Zarb",
        link: "/learn/",
      },
      {
        text: "Get started",
        link: "/run/",
      },
      {
        text: "Github",
        link: "https://github.com/zarbchain/",
      },
      {
        text: "Twitter",
        link: "https://twitter.com/ZarbBlockchain",
      },
    ],
    sidebar: {
      "/": [
        {
          text: "Learn",
          link: "/learn/",
          children: [
            "/learn/crypto.md",
            "/learn/serialization",
            "/learn/genesis",
            "/learn/block",
            "/learn/certificate",
            "/learn/account",
            "/learn/validator",
            "/learn/committee",
            "/learn/state-root",
            "/learn/incentive",
            {
              text: "Consensus protocol",
              link: "/learn/consensus/",
              collapsible: true,
              children: [
                "/learn/consensus/consensus-mechanism",
                "/learn/consensus/without-delegation",
                "/learn/consensus/sortition",
              ],
            },
            {
              text: "Transactions",
              link:"/learn/transaction/",
              collapsible: true,
              children: [
                "/learn/transaction/stamping",
                "/learn/transaction/format",
                "/learn/transaction/fee",
                "/learn/transaction/send",
                "/learn/transaction/bond",
                "/learn/transaction/sortition",
              ],
            },
            {
              text: "Wallet",
              link:"/learn/wallet/",
              collapsible: true,
              children: [
                "/learn/wallet/key-generation",
                "/learn/wallet/encryption",
              ],
            },
          ],
        },
        {
          text: "Run",
          link: "/run/",
          children: [
            "/run/download",
            "/run/how-to-gui",
            "/run/how-to-cli",
          ],
        },
      ],
    },
  },
  plugins: [
    [
      '@snippetors/vuepress-plugin-code-copy', {}
    ],
    [
      '@snippetors/vuepress-plugin-tabs', {}
    ],
    [
      'vuepress-plugin-smooth-scroll', {}
    ],
    [
      '@vuepress/plugin-pwa', {}
    ],
    [
      '@vuepress/plugin-pwa-popup', {}
    ],
    [
      'vuepress-plugin-zooming', {
        selector: ' :not(a) > img',
        options: {
          margin: 16
        }
      }
    ],
    [
      '@vuepress/container', {
        type: 'quote',
        defaultTitle: '',
      },
    ],
    [
      '@vuepress/container', {
        type: 'right',
        defaultTitle: '',
      },
    ]
  ],
  markdown: {
    code: {
      lineNumbers: false, // Whether to show line numbers to the left of each code blocks.
    },
  },
  extendsMarkdown: (md) => {
    md.use(require('markdown-it-footnote'))
    md.use(require('markdown-it-texmath'))
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/markdown-it-texmath@0.9.7/css/texmath.css' }],
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-4250Z4G496' },],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-4250Z4G496');
    `]
  ],
};
