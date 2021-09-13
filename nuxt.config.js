import holidays from './shared/holidays'

export default {
  // https://go.nuxtjs.dev/config-target
  target: 'static',

  ssr: false,

  // https://go.nuxtjs.dev/config-head
  head: {
    title: 'Countdown Works',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'ms-application-Tilecolor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' }
    ]
  },

  // https://go.nuxtjs.dev/config-css
  css: ['@/styles/styles.scss'],

  // https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: './plugins/vuefire',
      mode: 'client'
    },
    {
      src: './plugins/firebaseConfig',
      mode: 'client'
    },
    {
      src: './plugins/axe',
      mode: 'client'
    },
    {
      src: './plugins/gtag',
      mode: 'client'
    }
  ],

  // https://go.nuxtjs.dev/config-components
  components: true,

  // https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: [300, 400, 500]
        }
      }
    ],
    '@nuxtjs/eslint-module'
  ],

  // https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    [
      'nuxt-social-meta',
      {
        url: 'https://countdownworks.com',
        title: 'Countdown Works',
        description: 'Create elegant countdowns for the current year',
        img: 'https://countdownworks.com/img.webp',
        img_size: {
          width: 866,
          height: 487
        },
        twitter_card: 'summary_large_image'
      }
    ]
  ],

  generate: {
    fallback: '404.html'
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'Error',
        path: '*',
        component: resolve(__dirname, './layouts/error.vue')
      })
    }
  },

  sitemap: {
    hostname: 'https://countdownworks.com',
    filter() {
      return holidays.map(item => ({
        url: `${item.link}`,
        priority: 1.0
      }))
    }
  },

  // https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Countdown Works',
      short_name: 'Countdown Works',
      description: 'Create elegant countdowns for the current year',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      display: 'standalone',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  },

  // https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        cssnano: {
          preset: 'default'
        }
      }
    }
  },

  // Include mixins, variables, etc. for all SFCs
  styleResources: {
    scss: ['@/styles/_abstracts.scss']
  }
}
