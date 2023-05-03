<script setup lang="ts">
import { useSectionFive } from '~/config/pages/home/use-section-five'
import { useSectionFour } from '~/config/pages/home/use-section-four'
import { useSectionOne } from '~/config/pages/home/use-section-one'
import { useSectionSix } from '~/config/pages/home/use-section-six'
import { useSectionThree } from '~/config/pages/home/use-section-three'
import { useSectionTwo } from '~/config/pages/home/use-section-two'

const sectionOne = useSectionOne()
const sectionTwo = useSectionTwo()
const sectionThree = useSectionThree()
const sectionFour = useSectionFour()
const sectionFive = useSectionFive()
const sectionSix = useSectionSix()
</script>

<template>
  <Carousel class="mb-5" />
  <Divider />
  <!-- Section One -->
  <Section>
    <h2 class="text-h2" :title="$t(sectionOne.topic)">
      {{ $t(sectionOne.topic) }}
    </h2>
    <div class="grid-row md:(grid-cols-2)" :class="`lg:grid-cols-${sectionOne.content.length}`">
      <div
        v-for="(col, i) in sectionOne.content"
        :key="i"
        class="w-full overflow-hidden text-center"
      >
        <h2 :title="$t(col.title)" class="text-h3 break-words from-pink-500 to-violet-500 bg-gradient-to-r bg-clip-text font-bold text-transparent">
          {{ $t(col.title) }}
        </h2>
        <Divider />
        <h5 :title="$t(col.subtext)" class="text-h4 text-h5 mt-3 break-words">
          {{ $t(col.subtext) }}
        </h5>
        <Divider />
        <p :title="$t(col.description)" class="text-h6 mt-1 break-words !line-clamp-3">
          {{ $t(col.description) }}
        </p>
      </div>
    </div>
  </Section>

  <!-- Section Two -->
  <Section class="border-b-2 border-dark-50/20 border-b-solid from-dark/10 bg-gradient-to-t dark:(border-light-50/10 from-light/5)">
    <p class="text-title">
      {{ $t(sectionTwo.title) }}
    </p>
    <div class="grid-row grid-cols-2 py-10 md:grid-cols-3" :class="`lg:grid-cols-${sectionTwo.content.length}`">
      <NuxtLink
        v-for="(content, i) in sectionTwo.content"
        :key="i"
        class="h-10 w-full flex justify-center"
        :href="content.href"
        :title="$t(content.title)"
      >
        <img :src="content.img">
      </NuxtLink>
    </div>
  </Section>

  <!-- Section Three -->
  <Section text-center>
    <p class="text-title">
      {{ $t(sectionThree.title) }}
    </p>
    <h2 class="text-h2">
      {{ $t(sectionThree.topic) }}
    </h2>
    <p class="text-h6">
      {{ $t(sectionThree.description) }}
    </p>

    <div>
      <div class="grid-row py-10 md:(grid-cols-2)" :class="`lg:grid-cols-${sectionThree.contentPrimary.length}`">
        <NuxtLink
          v-for="(content, i) in sectionThree.contentPrimary"
          :key="i"
          :href="content.href"
          class="group relative w-full overflow-hidden rounded-lg bg-primary bg-opacity-35 shadow-lg"
        >
          <img :src="content.img">
          <div class="absolute bottom-0 left-0 z-1 hidden h-50px w-full items-center justify-center bg-black/15 p-2 px-10 backdrop-blur-md transition group-hover:(flex)">
            <div class="text-h4 w-full">
              <p :title="content.topic" class="w-90% truncate text-white">
                {{ content.topic }}
              </p>
            </div>
            <div i-solar-arrow-right-linear stroke-3 font-bold text-white />
          </div>
        </NuxtLink>
      </div>
      <div class="grid-row pb-10 md:(grid-cols-2)" :class="`lg:grid-cols-${sectionThree.contentSecondary.length}`">
        <NuxtLink
          v-for="(content, i) in sectionThree.contentSecondary"
          :key="i"
          :href="content.href"
          class="group relative w-full overflow-hidden rounded-lg bg-primary bg-opacity-35 shadow-lg"
        >
          <img :src="content.img">
          <div class="absolute bottom-0 left-0 z-1 hidden h-50px w-full items-center justify-center bg-black/15 p-2 px-10 backdrop-blur-md transition group-hover:(flex)">
            <div class="text-h4 w-full">
              <p :title="content.topic" class="w-90% truncate text-white">
                {{ content.topic }}
              </p>
            </div>
            <div i-solar-arrow-right-linear stroke-3 font-bold text-white />
          </div>
        </NuxtLink>
      </div>
      <div class="grid-row pb-20 md:(grid-cols-2)" :class="`lg:grid-cols-${sectionThree.contentThird.length}`">
        <NuxtLink
          v-for="(content, i) in sectionThree.contentThird"
          :key="i"
          :href="content.href"
          class="group relative w-full overflow-hidden rounded-lg bg-primary bg-opacity-35 shadow-lg"
        >
          <img :src="content.img">
          <div class="absolute bottom-0 left-0 z-1 hidden h-50px w-full items-center justify-center bg-black/15 p-2 px-10 backdrop-blur-md transition group-hover:(flex)">
            <div class="text-h4 w-full">
              <p :title="content.topic" class="w-90% truncate text-white">
                {{ content.topic }}
              </p>
            </div>
            <div i-solar-arrow-right-linear stroke-3 font-bold text-white />
          </div>
        </NuxtLink>
      </div>
    </div>
    <NuxtLink :href="sectionThree.link.href">
      <ABtn>{{ $t(sectionThree.link.name) }}</ABtn>
    </NuxtLink>
  </Section>

  <!-- Section Four -->
  <Section
    relative h-380px md:h-400px xl:h-450px
  >
    <div absolute left-0 top-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat :style="`background-image: url('${sectionFour.img}');-webkit-mask-image:linear-gradient(0deg, transparent, #000);`" />
    <Section absolute left-0 top-0 h-full w-full flex flex-col items-center justify-center text-shadow>
      <h2 class="text-h2">
        {{ $t(sectionFour.topic) }}
      </h2>
      <p text-h6 pb-5>
        {{
          $t(sectionFour.description)
        }}
      </p>
      <NuxtLink :href="sectionFour.link.href">
        <ABtn>
          {{ $t(sectionFour.link.name) }}
        </ABtn>
      </NuxtLink>
    </Section>
  </Section>

  <!-- Section Five -->
  <Section class="from-violet-500 to-fuchsia-500 text-white dark:(from-violet-600 to-fuchsia-600)" bg-gradient-to-r>
    <p class="text-title text-start">
      {{ $t(sectionFive.title) }}
    </p>
    <h2 class="text-h2 text-start text-white">
      {{ $t(sectionFive.topic) }}
    </h2>
    <p class="text-h6 mb-10 text-start">
      {{ $t(sectionFive.description) }}
    </p>

    <div class="grid-row gap-12 pb-20 lg:(grid-cols-3) md:(grid-cols-2)">
      <div
        v-for="(content, i) in sectionFive.content"
        :key="i"
        class="w-full"
      >
        <h4 text-h4 class="break-words text-start font-bold text-white !line-clamp-2">
          {{ content.topic }}
        </h4>
        <p text-h5 class="break-words text-start !line-clamp-3">
          {{ content.description }}
        </p>
      </div>
    </div>
  </Section>

  <!-- Section Six -->
  <Section>
    <h2 class="text-h2">
      {{ $t(sectionSix.topic) }}
    </h2>
    <p class="text-h6">
      {{ $t(sectionSix.description) }}
    </p>

    <div v-for="(item, i) in sectionSix.content" :key="i" class="flex flex-wrap gap-6 py-10 md:flex-nowrap" :class="{ 'flex-row-reverse': i % 2 === 0 }">
      <div class="w-50% flex-grow">
        <div class="relative h-full w-full flex items-center justify-center overflow-hidden border-6px border-dark-50/10 rounded-xl" style="mask-image:linear-gradient(0deg, transparent, #000);-webkit-mask-image:linear-gradient(0deg, transparent, #000 60%);">
          <img :src="item.img">
        </div>
      </div>

      <div class="w-50% flex-grow">
        <div class="h-full w-full flex flex-col items-center justify-center md:items-start">
          <p class="text-title">
            {{ item.title }}
          </p>
          <h4 class="text-h4 font-bold">
            {{ item.topic }}
          </h4>
          <p class="text-h6 md:text-left">
            {{ item.description }}
          </p>
          <div w-full py-2 text-center>
            <NuxtLink :href="item.link.href">
              <ABtn variant="text">
                {{ item.link.name }}
              </ABtn>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </Section>

  <!-- Section Seven -->
  <Section
    relative h-380px md:h-400px xl:h-450px
  >
    <div absolute left-0 top-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat style="background-image: url(https://landvault.io/img/asset/YXNzZXRzL2ltYWdlcy9vdGhlcnNpZGUuanBn?w=1920&h=480&fit=crop&fm=webp&s=a53969e9e8ddeda15dab9b724a6af3f6);-webkit-mask-image:linear-gradient(0deg, transparent, #000);" />
    <Section absolute left-0 top-0 h-full w-full flex flex-col items-center justify-center text-white text-shadow>
      <p class="text-title">
        {{ $t('home.sectionSeven.title') }}
      </p>
      <h2 class="text-h2">
        {{ $t('home.sectionSeven.topic') }}
      </h2>
    </Section>
  </Section>
  <Section>
    <div class="grid-row pb-20 lg:(grid-cols-4) md:(grid-cols-2)">
      <div
        v-for="col in 8"
        :key="col"
        class="h-10 w-full rounded-lg bg-primary bg-opacity-35"
      />
    </div>

    <div class="grid-row rounded-lg from-violet-500 to-fuchsia-500 bg-gradient-to-r p-5 shadow-lg lg:(grid-cols-2) md:(grid-cols-2)">
      <ATypography
        title="Awesome mobile"
        subtitle="Biscuit liquorice apple pie candy canes"
        :text="['Donut jelly beans cake lollipop sweet biscuit. Pie apple pie powder apple pie gummi bears. Jelly apple pie croissant candy canes liquorice halvah.', 'text-sm']"
      />
      <div h-full w-full flex flex-col items-center justify-center gap-3>
        <div flex items-center gap-3>
          <AInput class="col-start-1 w-full text-sm" input-wrapper-classes="bg-light-50" />
          <ABtn>test</ABtn>
        </div>
        <ACheckbox>
          <span>I am agreed to terms and conditions</span>
        </ACheckbox>
      </div>
    </div>
  </Section>
  <Divider />

  <Section my-10 from-green-500 to-lime-300 bg-gradient-to-r>
    <p class="text-title text-start">
      {{ $t('home.sectionFive.title') }}
    </p>
    <h2 class="text-h2 text-start">
      {{ $t('home.sectionFive.topic') }}
    </h2>
    <p class="text-h6 mb-10 text-start">
      {{ $t('home.sectionFive.description') }}
    </p>
  </Section>
  <Divider />
</template>
