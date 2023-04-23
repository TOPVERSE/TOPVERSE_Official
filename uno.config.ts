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
  shortcuts: [
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
