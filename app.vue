<script setup lang="ts">
import { appName } from './constants'

useHead({
  title: appName,
  meta: [
    {
      name: 'baidu-site-verification',
      content: 'codeva-Kp2zJogRLy',
    },
  ],
  bodyAttrs: {
    class: 'scrollbar-thumb-color-dark-50 scrollbar-track-color-transparent scrollbar-radius-2 scrollbar-thumb-radius-4 scrollbar-w-4px scrollbar scrollbar-rounded [&>div]:overflow-x-hidden',
  },
})
const dark = usePreferredDark()
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
