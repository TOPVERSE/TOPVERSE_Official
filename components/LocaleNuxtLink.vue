<script setup lang="ts">
const props = $defineProps<{
  href?: string
}>()

const localePath = useLocalePath()

const { locale, locales, setLocale, defaultDirection } = useI18n()

function getPath() {
  return locale.value === 'zh' ? props.href : `/en${props.href}`
}
</script>

<template>
  <NuxtLink :href="getPath()">
    <!-- <NuxtLink :href="href && localePath(href)"> -->
    <slot />
  </NuxtLink>
</template>
