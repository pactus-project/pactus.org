const { description } = require("../../package");
const { config } = require("vuepress-theme-hope");

module.exports = config({
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Zarb",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Zarb blockchain",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    docsRepo: "https://github.com/zarbchain/zarb.network",
    docsDir: "docs",
    docsBranch: "main",
    lastUpdated: false,
    smoothScroll: true,
    editLinks: true,
    editLinkText: "Help us improve this page!",
    lastUpdated: "Last Updated",
    nav: [
      {
        text: "Run a node",
        link: "/guide/run-index",
      },
      {
        text: "Learn",
        link: "/guide/learn-index",
      },
      {
        text: "Github",
        link: "https://github.com/zarbchain/",
      },
    ],
    sidebar: {
      "/guide/": [
        "",
        {
          title: "Run",
          collapsable: false,
          children: ["run-index", "run-testnet", "run-compile", "run-docker"],
        },
        {
          title: "Learn",
          collapsable: false,
          children: [
            "learn-index",
            "learn-cryptography",
            "learn-serialization",
            {
              title: "Consensus protocol",
              collapsable: true,
              children: [
                "consensus-zarb.md",
                "consensus-state-machine.md",
                "consensus-without-delegation.md",
                "consensus-sortition.md",
                "consensus-seed.md",
              ],
            },
            "learn-address",
            "learn-params",
            "learn-block",
            "learn-certificate",
            "learn-genesis",
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
          ],
        },
      ],
    },

    // vuepress-theme-hope configs
    // https://vuepress-theme-hope.github.io/config/
    hostname: "https://zarb.netwotk/",
    footer: {
      display: true,
      content: "Made with ❤️"
    },
    themeColor: false,
    fullscreen: false,
    darkmode: "disable",
    mdEnhance: {
      align: true,
      lineNumbers: true,
      sup: true,
      sub: true,
      footnote: true,
      tex: true,
    },
    pageInfo: ['Time', 'ReadTime'],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
  ],
});
