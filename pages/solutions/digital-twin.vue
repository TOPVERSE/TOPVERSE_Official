<script setup lang="ts">
import { useSectionThree } from '~/config/pages/home/use-section-three'

const sectionOne = {
  topic: 'home.sectionOne.topic',
  description: 'home.sectionOne.description',
  content: [
    {
      title: 'home.sectionOne.content.title[0]',
      subtext: 'home.sectionOne.content.subtext[0]',
      description: 'home.sectionOne.content.description[0]',
    },
    {
      title: 'home.sectionOne.content.title[1]',
      subtext: 'home.sectionOne.content.subtext[1]',
      description: 'home.sectionOne.content.description[1]',
    },
    {
      title: 'home.sectionOne.content.title[2]',
      subtext: 'home.sectionOne.content.subtext[2]',
      description: 'home.sectionOne.content.description[2]',
    },
    {
      title: 'home.sectionOne.content.title[2]',
      subtext: 'home.sectionOne.content.subtext[2]',
      description: 'home.sectionOne.content.description[2]',
    },
  ],
}

const data = {
  img: '/imgs/Project/Metaverse-Build/MusicVenue.jpg',
  topic: 'Never Drink Alone：The Bar Symphony',
  title: 'Metaverse Space Design',
  description: 'Award-Winning Project',
}

const sectionThree = useSectionThree()
const sectionThreeEl = ref(null)
const sectionThreeVis = useElementVisibility(sectionThreeEl)
</script>

<template>
  <SectionBanner :img="data?.img" :title="data?.title" :topic="data?.topic" :description="data?.description" font-bold text-white />
  <SectionGradientCard :content="sectionOne.content" :topic="sectionOne.topic" />

  <!-- Section Three -->
  <Section text-center class="section-three">
    <Typography :title=" $t(sectionThree.title) " :topic=" $t(sectionThree.topic) " :description=" $t(sectionThree.description) " />

    <div ref="sectionThreeEl">
      <div
        class="grid-row py-10 md:(grid-cols-2)" :class="`lg:grid-cols-${sectionThree.contentPrimary.length}`"
      >
        <ImageHover
          v-for="(content, i) in sectionThree.contentPrimary"
          :key="i"
          :href="content.href" :img="content.img" :topic="content.topic"
          class="min-h-200px"
          :class="[`animated-delay-${i * 100}ms`, {
            'animated animated-fade-in-up animated-faster': sectionThreeVis,
          }]"
        />
      </div>
      <div class="grid-row pb-10 md:(grid-cols-2)" :class="`lg:grid-cols-${sectionThree.contentSecondary.length}`">
        <ImageHover
          v-for="(content, i) in sectionThree.contentSecondary"
          :key="i"
          :href="content.href" :img="content.img" :topic="content.topic"
          class="min-h-200px"
          :class="[`animated-delay-${i * 100}ms`, {
            'animated animated-fade-in-up animated-faster': sectionThreeVis,
          }]"
        />
      </div>
      <div class="grid-row pb-20 md:(grid-cols-2)" :class="`lg:grid-cols-${sectionThree.contentThird.length}`">
        <ImageHover
          v-for="(content, i) in sectionThree.contentThird"
          :key="i"
          :href="content.href" :img="content.img" :topic="content.topic"
          class="min-h-200px"
          :class="[`animated-delay-${i * 100}ms`, {
            'animated animated-fade-in-up': sectionThreeVis,
          }]"
        />
      </div>
    </div>
    <LocaleNuxtLink :href="sectionThree.link.href">
      <ABtn variant="light">
        {{ $t(sectionThree.link.name) }}
      </ABtn>
    </LocaleNuxtLink>
  </Section>
</template>
