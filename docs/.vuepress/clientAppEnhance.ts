import { defineClientAppEnhance } from '@vuepress/client'
import hexdump from './components/hexdump.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('hexdump', hexdump)
})

