export default {
  mode: 'spa',
  // headers
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // loader
  loading: false,
  // global css
  css: [
    '~/style/reset.scss',
    '~/style/type.scss',
    '~/style/util.scss',
  ],
  // plugins
  plugins: [
  ],
  devModules: [
  ],
  // dev server
  server: {
    port: 8000,
    host: '0.0.0.0'
  },
  // nuxt js modules
  modules: [
    '@nuxtjs/pwa',
  ],
  // build config
  build: {
    extend (config, ctx) {
    }
  }
}
