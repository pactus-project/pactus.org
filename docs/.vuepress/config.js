const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Zarb",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Zarb blockchain, of the people, by the people, for the people",

  // https://vuepress.vuejs.org/plugin/official/plugin-pwa.html
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    hostname: "https://zarb.netwotk/",
    docsRepo: "https://github.com/zarbchain/zarb.network",
    docsDir: "docs",
    docsBranch: "main",
    lastUpdated: "Last Updated",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    sidebarDepth: 0,
    nav: [
      {
        text: "What is Zarb",
        link: "/guide/learn-index",
      },
      {
        text: "Get started",
        link: "/guide/run-index",
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
      "/guide/": [
        {
          title: "Learn",
          collapsable: false,
          children: [
            "learn-index",
            "learn-cryptography",
            "learn-serialization",
            "learn-genesis",
            {
              title: "Consensus protocol",
              collapsable: true,
              children: [
                "consensus-zarb.md",
                "consensus-state-machine.md",
                "consensus-without-delegation.md",
                "consensus-sortition.md",
              ],
            },
            "learn-block",
            "learn-certificate",
            "learn-account",
            "learn-validator",
            "learn-committee",
            {
              title: "Transactions",
              collapsable: true,
              children: [
                "transaction-stamping.md",
                "transaction-format.md",
                "transaction-send.md",
                "transaction-mintbase.md",
                "transaction-bond.md",
                "transaction-sortition.md",
                "transaction-fee.md",
              ],
            },
            "learn-incentive",
          ],
        },
        {
          title: "Run",
          collapsable: false,
          children: [
            "run-index",
            "run-testnet",
            "run-compile",
            "run-docker",
            "run-validator",
            "run-ansible",
            "run-projects",
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    [
      '@vuepress/plugin-back-to-top', {}
    ],
    [
      '@vuepress/plugin-medium-zoom', {}
    ],
    [
      'vuepress-plugin-element-tabs', {}
    ],
    [
      'vuepress-plugin-smooth-scroll', {}
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
      '@vuepress/nprogress', {}
    ],
    [
      '@vuepress/pwa', {}
    ],
    [
      'vuepress-plugin-code-copy', {}
    ],
    [
      '@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }
    ],
    [
      'sitemap', {
        hostname: 'https://zarb.network'
      }
    ],
    [
      'vuepress-plugin-container', {
        type: 'quote',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container', {
        type: 'right',
        defaultTitle: '',
      },
    ]
  ],
  markdown: {
    lineNumbers: false, // Whether to show line numbers to the left of each code blocks.
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'))
      md.use(require('@iktakahiro/markdown-it-katex'))
    }
  },
};
