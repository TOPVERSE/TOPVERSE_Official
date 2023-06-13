<script setup>
const { locale, locales, setLocale } = useI18n()

const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  // @ts-expect-error
  return (locales.value).filter(i => i.code !== locale.value)
})

const flag = {
  en: 'i-flag-gb-4x3',
  zh: 'i-flag-cn-4x3',
}
</script>

<template>
  <LocaleNuxtLink
    v-for="l in availableLocales" :key="l.code" :to="switchLocalePath(l.code)"
  >
    <ABtn
      variant="text"
    >
      <span :class="flag[l.code]" />
    <!-- {{ flag[locale.code] }} -->
    </ABtn>
  </LocaleNuxtLink>
</template>
