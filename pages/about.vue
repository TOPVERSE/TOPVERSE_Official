<!-- <script setup>

</script>

<template>
  <div class="mt-10 md:mt-20">
    <Section>
      <Typography title="关于我们" topic="TOPVERSE" description="asfasgdgagadgadjlkajdljfa;dj;lfajd;lkfja;ldjf;laj;lfja;d" />
    </Section>
  </div>
</template> -->

<script setup>
const { locale } = useI18n()

const path = `/${locale.value}/about`

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>

<template>
  <SectionBanner :img="data?.img" :title="data?.title" :topic="data?.topic" :description="data?.description" font-bold text-white />
  <main class="m-auto prose xl:max-w-900px">
    <ContentRenderer v-if="data" :value="data" />
  </main>
</template>
