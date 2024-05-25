import { colors } from 'unocss/preset-mini'
import { pwa } from './config/pwa'
import { appDescription } from './constants/index'
import { hex2hsl } from './utils/colors'

export default defineNuxtConfig({
  ssr: false,

  modules: [
    '@vueuse/nuxt',
    '@anu-vue/nuxt',
    '@unocss/nuxt', 
    '@nuxtjs/i18n', 
    '@vue-macros/nuxt',
    '@nuxt/content',
    '@nuxtjs/color-mode', 
    '@nuxt/devtools',
  ],

  // content: {
  //   experimental: {
  //     clientDB: true
  //   }
  // },
  // image: {
  //   // provider:"static"
  // },
  // optimizedImages: {
  //   optimizeImages: true
  // },
  // experimental: {
  //   // when using generate, payload js assets included in sw precache manifest
  //   // but missing on offline, disabling extraction it until fixed
  //   payloadExtraction: false,
  //   inlineSSRStyles: false,
  //   renderJsonPayloads: true,
  // },

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
        {
          name: 'baidu-site-verification',
          content: 'codeva-Kp2zJogRLy',
        },
        {
          name: 'baidu-site-verification',
          content: 'codeva-SHLbtRS3fs',
        },
        {
          name: 'baidu-site-verification',
          content: 'codeva-lpuY2ux6I7',
        },
        {
          name: 'msvalidate.01',
          content: '65342CA07E5F201B3D48569C2E706FDA',
        },
      ],
      // script: [{
      //   innerHTML: `
      //   (function(c,l,a,r,i,t,y){
      //     c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      //     t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      //     y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      //   })(window, document, "clarity", "script", "hmbju0mzmd");
      //   `,
      //   type: 'text/javascript',
      // }],
    },
  },

  // pwa,

  devtools: {
    enabled: true,
  },

  telemetry: false,
})
