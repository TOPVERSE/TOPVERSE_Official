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

const path = `/${locale.value}/terms-of-use`

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>

<template>
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
</template>
