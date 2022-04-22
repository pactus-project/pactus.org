const { description } = require("../../package");

const mathml = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mglyph',
  'mi',
  'mlabeledtr',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'msgroup',
  'mstack',
  'msline',
  'mspace',
  'msqrt',
  'msrow',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'annotation',
  'annotation-xml',
  'mprescripts',
  'none',
];
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
    editLinkText: "Help us improve this page!",
    sidebarDepth: 0,
    navbar: [
      {
        text: "What is Zarb",
        link: "/guide/learn-index",
      },
      {
        text: "Get started",
        link: "/guide/run-index",
      },
      {
        text: "Download",
        link: "https://github.com/zarbchain/zarb-go/releases/latest",
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
          text: "Learn",
          collapsable: false,
          children: [
            "learn-index",
            "learn-cryptography",
            "learn-serialization",
            "learn-genesis",
            {
              text: "Consensus protocol",
              collapsable: true,
              children: [
                "consensus-zarb.md",
                "consensus-without-delegation.md",
                "consensus-sortition.md",
              ],
            },
            "learn-block",
            "learn-certificate",
            "learn-state-hash",
            "learn-account",
            "learn-validator",
            "learn-committee",
            {
              text: "Transactions",
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
          text: "Run",
          collapsable: false,
          children: [
            "run-index",
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
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-4250Z4G496'},],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-4250Z4G496');
    `]
  ],
};
