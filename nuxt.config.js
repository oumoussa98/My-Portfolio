export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'oumoussa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Abdelouahed oumoussa a self-taught javascript developer from morocco, interested in jamstack and new web technologies',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
  },

  css: ['@/assets/style/index.scss'],

  plugins: [{ src: '~/plugins/ohVueIcon.js', mode: 'client' }],

  components: true,

  buildModules: [
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },

  modules: ['@nuxt/content', '@nuxtjs/sitemap'],

  pwa: {
    manifest: {
      name: 'Oumoussa',
      lang: 'en',
      useWebmanifestExtension: false,
    },
  },

  content: {},

  build: {},

  sitemap: {
    hostname: 'https://oumoussa.tech',
    gzip: true,
    exclude: ['/admin', '/admin/**'],
    routes: ['/about', '/contact', '/blog'],
  },
}
