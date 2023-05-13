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
    'text-title': ' font-bold opacity-90 uppercase break-words',
    'text-body': 'text-base  tracking-normal break-words',
    'text-description': 'text-md text-stone break-words',
    'text-h2': 'line-clamp-2 text-5xl leading-20 break-words font-bold',
    'text-h3': 'line-clamp-2 text-4xl leading-13 break-words',
    'text-h4': 'line-clamp-2 text-2xl leading-10 break-words',
    'text-h5': 'line-clamp-3 text-xl leading-8 break-words',
    'text-h6': 'line-clamp-3 text-lg leading-6 break-words',
    'text-h7': 'line-clamp-3 text-base break-words',
    'bg-gradient-pink': 'from-pink to-violet bg-gradient-to-r ',
    'bg-gradient-blue': 'from-sky to-indigo bg-gradient-to-r ',
    'bg-gradient-green': 'from-lime to-green bg-gradient-to-r ',
    'bg-gradient-purple': 'from-purple to-fuchsia bg-gradient-to-r ',
    'bg-gradient-rose': 'from-orange to-rose bg-gradient-to-r ',
    'bg-gradient-yellow': 'from-yellow to-amber bg-gradient-to-r ',
    'text-gradient-pink': 'from-pink to-violet bg-gradient-to-r bg-clip-text ',
    'text-gradient-blue': 'from-blue to-indigo bg-gradient-to-r bg-clip-text ',
    'text-gradient-green': 'from-lime to-green bg-gradient-to-r bg-clip-text ',
    'text-gradient-purple': 'from-purple to-fuchsia bg-gradient-to-r bg-clip-text ',
    'text-gradient-rose': 'from-orange to-rose bg-gradient-to-r bg-clip-text ',
    'text-gradient-yellow': 'from-yellow to-amber bg-gradient-to-r bg-clip-text ',
  },
  safelist: [
    ...Array(10).fill('').map((_, i) => `grid-cols-${i + 1}`),
    ...Array(10).fill('').map((_, i) => `lg:grid-cols-${i + 1}`),
    'i-solar-airbuds-left-bold-duotone',
    'text-gradient-pink',
    'text-gradient-blue',
    'text-gradient-green',
    'text-gradient-rose',
    'text-gradient-purple',
    'text-gradient-yello',
    'i-flag-gb-4x3',
    'i-flag-cn-4x3',

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
      cdn: 'http://esm.sh/',
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
