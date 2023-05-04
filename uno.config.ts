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
    'text-h2': 'line-clamp-2 text-5xl text-center leading-20 font-bold',
    'text-h3': 'line-clamp-2 text-4xl text-center leading-13',
    'text-h4': 'line-clamp-2 text-2xl text-center leading-10',
    'text-h5': 'line-clamp-2 text-xl text-center leading-8',
    'text-h6': 'line-clamp-2 text-lg text-center leading-6',
    'text-h7': 'line-clamp-3 text text-center',
  },
  safelist: [
    ...Array(10).fill('').map((_, i) => `grid-cols-${i + 1}`),
    ...Array(10).fill('').map((_, i) => `lg:grid-cols-${i + 1}`),
    'i-solar-airbuds-left-bold-duotone',
  ],
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
