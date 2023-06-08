<script setup>
const route = useRoute()
const { locale } = useI18n()

const path = `/${locale.value}/community/${route.params.id.join('/')}`

const { data, error } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>

<template>
  <div v-if="!error">
    <SectionBanner :img="data?.img" :title="data?.title" :topic="data?.topic" :description="data?.description" font-bold text-white />
    <main class="m-auto prose xl:max-w-900px">
      <ContentRenderer v-if="data" :value="data" />
    </main>
    <div class="m-auto my-30 flex flex-col text-right text-right prose xl:max-w-900px">
      <span class="text-lg font-bold">
        {{ data?.author }}
      </span>
      <small class="opacity-80">
        {{ data?.resume }}
      </small>
      <span class="pt-5">
        {{ data?.publish }}
      </span>
    </div>
  </div>
  <div v-else>
    <main p="x4 y-50" text="center teal-700 dark:gray-200">
      <div text-4xl>
        <div i-carbon-warning inline-block />
      </div>

      <h2 p-12 text-4xl uppercase>
        {{ $t('notfound') }}
      </h2>
    </main>
  </div>
</template>
