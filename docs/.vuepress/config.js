const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Zarb',
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
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/zarbchain/zarb.network',
    docsDir: '',
    lastUpdated: false,
    smoothScroll: true,
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'Run a node',
        link: '/guide/run-index',
      },
      {
        text: 'Learn',
        link: '/guide/learn-index'
      },
      {
        text: 'Github',
        link: 'https://github.com/zarbchain/'
      }
    ],
    sidebar: {
      '/guide/': [
        '',
        {
          title: 'Run',
          collapsable: false,
          children: [
            'run-index',
            'run-compile',
            'run-docker',
            'run-ansible',
          ]
        },
        {
          title: 'Learn',
          collapsable: false,
          children: [
            'learn-index',
            'learn-consensus',
            'learn-cryptography',
            'learn-serialization',
            'learn-params',
            'learn-account',
            'learn-validator',
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
