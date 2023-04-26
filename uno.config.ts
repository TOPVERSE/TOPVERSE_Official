import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetMini,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetAnu, presetIconExtraProperties } from 'anu-vue'
import { presetExtra } from 'unocss-preset-extra'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import { presetScrollbarHide } from 'unocss-preset-scrollbar-hide'
import { presetThemeDefault } from '@anu-vue/preset-theme-default'

export default defineConfig({
  include: [/.*\/anu-vue\.js(.*)?$/, './**/*.vue', './**/*.md'],
  shortcuts: {
    'text-title': 'text font-bold opacity-90 text-center uppercase',
    'text-body': 'text-base text-center  tracking-normal',
    'text-description': 'text-md text-stone text-center',
    'text-h2': 'text-5xl text-center leading-20 font-bold',
    'text-h3': 'text-4xl text-center leading-18',
    'text-h4': 'text-2xl text-center leading-14',
    'text-h5': 'text-xl text-center leading-10',
    'text-h6': 'text-lg text-center leading-6',
    'text-h7': 'text text-center',
  },
  presets: [
    presetAnu(),
    // default theme preset
    presetThemeDefault({
      shortcutOverrides: {
        'a-btn': 'ring-3 ring-primary',
        'a-base-input-root': 'ring-3',
      },
    }),
    presetUno(),
    presetMini(),
    presetWind(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
      extraProperties: presetIconExtraProperties,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
    presetExtra(),
    presetScrollbar(),
    presetScrollbarHide(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
