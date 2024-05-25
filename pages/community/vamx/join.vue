<script setup>
const { locale } = useI18n()

const path = `/${locale.value}/community/join`

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>

<template>
  <ClientOnly>
    <Teleport to="#pages-sider">
      <ACard
        shadow="none"
        :title="$t('community.vamx.join.title')"
        :subtitle="$t('community.vamx.join.description')"
        class="w-full"
      >
        <!-- <img
            src="/images/demo/minimal-1.jpg"
            alt="girl"
          > -->

        <div class="a-card-body divide-y-1 divide-dark-50/10 a-card-spacer">
          <div class="grid grids-2 gap-y-3">
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

          <LocaleNuxtLink href="/community/vamx/structure" class="block p-2 font-bold hover:opacity-80">
            {{ $t('community.vamx.structure.title') }}
          </LocaleNuxtLink>
        </div>
      </ACard>
    </Teleport>
  </ClientOnly>
  <div class="mt-0 lg:mt-20">
    <Section class="flex flex-col gap-4 md:flex-row">
      <div>
        <ACard
          shadow="none"
          :title="$t('community.vamx.join.title')"
          :subtitle="$t('community.vamx.join.description')"
          class="hidden lg:(block w-300px)"
        >
          <!-- <img
            src="/images/demo/minimal-1.jpg"
            alt="girl"
          > -->

          <div class="a-card-body divide-y-1 divide-dark-50/10 a-card-spacer">
            <div class="grid grids-2 gap-y-3">
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

            <LocaleNuxtLink href="/community/vamx/structure" class="block p-2 font-bold hover:opacity-80">
              {{ $t('community.vamx.structure.title') }}
            </LocaleNuxtLink>
          </div>
        </ACard>
      </div>

      <ACard class="w-full p-8">
        <Typography :title="data?.title" :description="data?.description" :topic="data?.topic" class="pb-5" />
        <!-- <SectionBanner :img="data?.img" :title="data?.title" :topic="data?.topic" :description="data?.description" font-bold text-white /> -->
        <ContentRenderer v-if="data" :value="data" class="mx-auto prose xl:max-w-900px" />
      </ACard>
    </Section>
  </div>
</template>
