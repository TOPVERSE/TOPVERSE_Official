<script setup lang="ts">
import { ref } from 'vue'
import { useNav } from '~/config/use-nav'

const isDrawerShown = ref(false)

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
  <ADrawer
    v-model="isDrawerShown"
    class="h-screen overflow-y-scroll px-2 scrollbar-thumb-color-dark-50 scrollbar-track-color-transparent scrollbar-radius-2 scrollbar-thumb-radius-4 scrollbar-w-4px !w-80% scrollbar scrollbar-rounded"
  >
    <div class="flex justify-center">
      <BrandLogo />
    </div>
    <Divider class="mb-5" />
    <LocaleNuxtLink v-for="(nav, i) in navs" :key="i" class="ml-3px block w-full shadow-transparent transition-all" :href="nav.href" active-class="active-nav ">
      <ABtn v-if="!nav.child" variant="text" class="w-full text-lg [&_.a-btn-content]:(w-full justify-start px-2)">
        <span style="color: hsla(var(--a-base-c), 0.87); " class="font-bold">{{ $t(nav.title) }}</span>
      </ABtn>

      <div v-if="nav.child" variant="text" class="text w-full p-5">
        <div class="rounded bg-black/10 py-5">
          <div style="color: hsla(var(--a-base-c), 0.87); " class="px-5 py-2 font-bold opacity-70">
            {{ $t(nav.title) }}
          </div>

          <div class="grid gap-1 sm:grid-cols-2">
            <LocaleNuxtLink v-for="(item, index) in nav.child" :key="index" :href="item.href" class="w-full overflow-hidden rounded py-1 hover:(bg-primary/20)" active-class="bg-primary/20">
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
          </div>
        </div>
      </div>
    </LocaleNuxtLink>

    <div class="p-5">
      <div id="pages-sider" class="bg-black/10" />
    </div>
  </ADrawer>

  <ABtn
    class="block text-xl lg:hidden"
    icon-only
    color="white"
    variant="light"
    icon="i-material-symbols-view-headline"
    @click="isDrawerShown = true"
  />
</template>

<style scoped>
.active-nav{
  box-shadow: -3px 0px 0px 0px lightblue;
}
</style>
