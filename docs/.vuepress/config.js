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
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
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
}
