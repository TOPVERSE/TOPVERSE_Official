import { colors } from 'unocss/preset-mini'
import { pwa } from './config/pwa'
import { appDescription } from './constants/index'
import { hex2hsl } from './utils/colors'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@anu-vue/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    // '@nuxtjs/strapi',
    '@vue-macros/nuxt',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/devtools',
  ],
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
  },

  components: [{
    path: '~/components',
    global: true,
  }],
  anu: {
    // initialTheme: 'dark',
    themes: {
      // @ts-expect-error
      light: {
        colors: {
          primary: hex2hsl(colors.indigo[500]).toString(),
          success: hex2hsl(colors.green[500]).toString(),
          warning: hex2hsl(colors.amber[500]).toString(),
          danger: hex2hsl(colors.rose[500]).toString(),
          info: hex2hsl(colors.blue[500]).toString(),
        },
        cssVars: {
          // 'base-c': hex2hsl(colors.white).toString(),
          'body-bg-c': hex2hsl(colors.white).toString(),
        },
      },
      // @ts-expect-error
      dark: {
        colors: {
          primary: hex2hsl(colors.indigo[500]).toString(),
          success: hex2hsl(colors.green[500]).toString(),
          warning: hex2hsl(colors.amber[500]).toString(),
          danger: hex2hsl(colors.rose[500]).toString(),
          info: hex2hsl(colors.blue[500]).toString(),
        },
        cssVars: {
          'body-bg-c': hex2hsl(colors.dark[900]).toString(),
        },
      },
    },
  },
  css: [
    // '@unocss/reset/tailwind.css',
    'anu-vue/dist/style.css',
    '@anu-vue/preset-theme-default/dist/style.css',
    '~/styles/ui.css',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-UK.json',
      },
      {
        code: 'zh',
        file: 'zh-CN.json',
      },
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'zh',
  },
  colorMode: {
    classSuffix: '',
  },
  // strapi: {
  //   devtools: true,
  // },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/topverse.icon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  pwa,

  devtools: {
    enabled: true,
  },

  telemetry: false,
})
