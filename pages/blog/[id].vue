<script setup>
const route = useRoute()
const { locale } = useI18n()

const path = `/${locale.value}/${route.params.id}`

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})

console.log(data)
</script>

<template>
  <SectionBanner :img="data?.img" :title="data?.title" :topic="data?.topic" :description="data?.description" font-bold text-white />
  <main class="m-auto prose xl:max-w-900px">
    <ContentRenderer v-if="data" :value="data" />
  </main>
  <div class="m-auto mb-20 text-right prose xl:max-w-900px">
    <span>
      {{ data?.author }}
    </span>
    <span>
      {{ data?.resume }}
    </span>
    <span>
      {{ data?.publish }}
    </span>
  </div>
</template>
