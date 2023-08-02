<script setup lang="ts">
import { useSectionSix } from '~/config/pages/home/use-section-six'

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

const sectionSix = useSectionSix()
</script>

<template>
  <SectionBanner :img="data?.img" :title="data?.title" :topic="data?.topic" :description="data?.description" font-bold text-white />

  <Section>
    <Typography :topic=" $t(sectionSix.topic) " :description=" $t(sectionSix.description) " />

    <div v-for="(item, i) in sectionSix.content" :key="i" class="flex flex-wrap gap-6 py-10 md:flex-nowrap" :class="{ 'flex-row-reverse': i % 2 === 0 }">
      <div class="w-45% flex-grow">
        <div class="relative h-full w-full flex items-center justify-center overflow-hidden border-6px border-dark-50/10 rounded-xl dark:border-light-50/10" style="mask-image:linear-gradient(0deg, transparent, #000);-webkit-mask-image:linear-gradient(0deg, transparent, #000 60%);">
          <ImageLoading quality="20" :src="item.img" :err-src="item.errImg" class="h-full w-full" fit="cover" height="300" width="600" loading="lazy" />
          <!-- <NuxtImg quality="20" :src="item.img" class="h-full w-full" fit="cover" height="300" width="600" loading="lazy"/> -->
        </div>
      </div>

      <div class="w-55% flex-grow">
        <div class="h-full w-full flex flex-col items-center justify-center px-2 md:(items-start px-16)">
          <p class="text-title">
            {{ $t(item.title) }}
          </p>
          <h4 class="text-h4 font-bold">
            {{ $t(item.topic) }}
          </h4>
          <p class="text-h6 text-center md:text-left">
            {{ $t(item.description) }}
          </p>
          <div v-if="item.link" class="w-full py-10 text-center md:text-left">
            <LocaleNuxtLink :href="item.link.href">
              <ABtn variant="light" class="group">
                {{ $t(item.link.name) }} <div i-solar-arrow-right-linear class="transition-all group-hover:px-4" />
              </ABtn>
            </LocaleNuxtLink>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
