<script setup>
const route = useRoute()
const { locale } = useI18n()

const path = `/${locale.value}${route.path.split('blog')[1]}`

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>

<template>
  <Banner :img="data?.img" :title="data?.title" :topic="data?.topic" :description="data?.description" />
  <main class="m-auto prose">
    <ContentRenderer v-if="data" :value="data" />
  </main>
</template>
