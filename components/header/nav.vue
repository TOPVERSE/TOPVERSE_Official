<script setup lang="ts">
import { useNav } from '~/config/use-nav'

const navs = useNav()

const { locale, locales, setLocale } = useI18n()

const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  // @ts-expect-error
  return (locales.value).filter(i => i.code !== locale.value)
})

const flag: any = {
  en: 'i-flag-gb-4x3',
  zh: 'i-flag-cn-4x3',
}

// const flag: any = {
//   en: 'En',
//   zh: '中',
// }
</script>

<template>
  <nav class="flex flex-wrap">
    <LocaleNuxtLink v-for="(nav, i) in navs" :key="i" class="mx-2 p-1 pb-5 shadow-transparent transition-all" :href="nav.href" active-class="active-nav">
      <ABtn variant="text">
        <AMenu v-if="nav.child" style="--un-bg-opacity:0.6;--a-spacing:2" class="" z-1000 mt-5 placement="bottom">
          <AList
            :items="nav.child"
            avatar-append
            class="[--a-list-item-gap:1rem] [--a-spacing:1] border-1px border-light-50/20 backdrop-blur-md !m-0 divide-y divide-dark-50/10 dark:(border-dark-50/20 divide-light-50/10)"
          >
            <LocaleNuxtLink v-for="(item, index) in nav.child" :key="index" :href="item.href" class="overflow-hidden py-1 hover:(bg-primary/20)" active-class="bg-primary/20">
              <AListItem
                class="[--a-spacing:1] max-w-300px"
                :title="$t(item.title)"
                :subtitle="item.subtitle && $t(item.subtitle)"
              >
                <template #prepend>
                  <AAvatar
                    class="shrink-0 rounded-lg"
                    :icon="item.icon"
                  />
                </template>
              </AListItem>
            </LocaleNuxtLink>
          </AList>
        </AMenu>
        <span style="color: hsla(var(--a-base-c), 0.87); " class="font-bold">{{ $t(nav.title) }}</span>
      </ABtn>
    </LocaleNuxtLink>
    <LocaleNuxtLink
      v-for="l in availableLocales" :key="l.code" :to="switchLocalePath(l.code)"
      class="mx-2 border-primary p-1 pb-5 transition-all"
    >
      <ABtn
        variant="text"
      >
        <span :class="flag[l.code]" />
        <!-- {{ flag[locale.code] }} -->
      </ABtn>
    </LocaleNuxtLink>
  </nav>
</template>

<style>
.active-nav{
  box-shadow: 0 3px 0px 0px lightblue;
}
</style>
