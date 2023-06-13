<script setup>
const { locale } = useI18n()

const path = `/${locale.value}/community/join`

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>

<template>
  <div
    class="fixed bottom-16 right-6 md:hidden"
  >
    <ABtn
      class="text-xl"
      icon-only
      icon="i-material-symbols-view-headline"
    >
      <ATooltip
        trigger="click"
        class="[&_.a-tooltip]-bg-transparent"
      >
        <ACard
          shadow="none"
          :title="$t('community.vamx.structure.title')"
          :subtitle="$t('community.vamx.structure.discription')"
          class="w-300px"
        >
          <!-- <img
            src="/images/demo/minimal-1.jpg"
            alt="girl"
          > -->

          <div class="a-card-body divide-y-1 divide-dark-50/10 a-card-spacer">
            <div class="grid grid-rows-2 gap-y-3">
              <ACheckbox
                v-for="tag in tags"
                :key="tag.value"
                v-model="data"
                :value="tag.value"
                :label="$t(tag.label)"
              />
            </div>

            <!-- <ABtn>Read more</ABtn> -->
            <LocaleNuxtLink href="/community/vamx" class="block p-2 font-bold hover:opacity-80">
              {{ $t('community.vamx.sider.title') }}
            </LocaleNuxtLink>

            <LocaleNuxtLink href="/community/vamx/news" class="block p-2 font-bold hover:opacity-80">
              {{ $t('community.vamx.news.title') }}
            </LocaleNuxtLink>

            <LocaleNuxtLink href="/community/vamx/join" class="block p-2 font-bold hover:opacity-80">
              {{ $t('community.vamx.join.title') }}
            </LocaleNuxtLink>
          </div>
        </ACard>
      </ATooltip>
    </ABtn>
  </div>
  <div class="mt-10 md:mt-20">
    <Section class="flex flex-col gap-4 md:flex-row">
      <div>
        <ACard
          shadow="none"
          :title="$t('community.vamx.structure.title')"
          :subtitle="$t('community.vamx.structure.discription')"
          class="hidden w-full md:block md:w-300px"
        >
          <!-- <img
            src="/images/demo/minimal-1.jpg"
            alt="girl"
          > -->

          <div class="a-card-body divide-y-1 divide-dark-50/10 a-card-spacer">
            <div class="grid grid-rows-2 gap-y-3">
              <ACheckbox
                v-for="tag in tags"
                :key="tag.value"
                v-model="data"
                :value="tag.value"
                :label="$t(tag.label)"
              />
            </div>

            <!-- <ABtn>Read more</ABtn> -->
            <LocaleNuxtLink href="/community/vamx" class="block p-2 font-bold hover:opacity-80">
              {{ $t('community.vamx.sider.title') }}
            </LocaleNuxtLink>

            <LocaleNuxtLink href="/community/vamx/news" class="block p-2 font-bold hover:opacity-80">
              {{ $t('community.vamx.news.title') }}
            </LocaleNuxtLink>

            <LocaleNuxtLink href="/community/vamx/join" class="block p-2 font-bold hover:opacity-80">
              {{ $t('community.vamx.join.title') }}
            </LocaleNuxtLink>
          </div>
        </ACard>
      </div>

      <div class="w-full">
        <ContentRenderer v-if="data" :value="data" />
      </div>
    </Section>
  </div>
</template>
