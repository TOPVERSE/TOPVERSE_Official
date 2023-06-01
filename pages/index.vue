<script setup lang="ts">
import { useSectionEight } from '~/config/pages/home/use-section-eight'
import { useSectionFive } from '~/config/pages/home/use-section-five'
import { useSectionFour } from '~/config/pages/home/use-section-four'
import { useSectionNine } from '~/config/pages/home/use-section-nine'
import { useSectionOne } from '~/config/pages/home/use-section-one'
import { useSectionSeven } from '~/config/pages/home/use-section-seven'
import { useSectionSix } from '~/config/pages/home/use-section-six'
import { useSectionThree } from '~/config/pages/home/use-section-three'
import { useSectionTwo } from '~/config/pages/home/use-section-two'

const sectionOne = useSectionOne()
const sectionOneEl = ref(null)
const sectionOneVis = useElementVisibility(sectionOneEl)
const sectionTwo = useSectionTwo()
const sectionTwoEl = ref(null)
const sectionTwoVis = useElementVisibility(sectionTwoEl)
const sectionThree = useSectionThree()
const sectionThreeEl = ref(null)
const sectionThreeVis = useElementVisibility(sectionThreeEl)
const sectionFour = useSectionFour()
const sectionFive = useSectionFive()
const sectionSix = useSectionSix()
const sectionSeven = useSectionSeven()
const sectionEight = useSectionEight()
const sectionNine = useSectionNine()
</script>

<template>
  <Carousel class="mb-25" />
  <Divider />
  <!-- Section One -->
  <SectionGradientCard :content="sectionOne.content" :topic="sectionOne.topic" />

  <!-- Section Two -->
  <Section ref="sectionTwoEl" class="border-b-2 border-dark/40 border-b-solid from-dark/30 bg-gradient-to-t dark:(border-light-50/10 from-light/5)">
    <div v-for="(item, i) in sectionTwo.content" :key="i" class="pb-8">
      <Typography :title=" $t(item.title) " />

      <div class="grid-row grid-cols-2 gap-2 md:(grid-cols-3 gap-10)" :class="`lg:grid-cols-${item.imgs.length} lg:gap-2 `">
        <!-- <Typography  :title=" $t(item.title) " /> -->
        <a
          v-for="(img, j) in item.imgs"
          :key="j"
          class="h-100px w-full flex justify-center md:h-200px"
          :class="[`animated-delay-${j * 100}ms`, {
            'animated animated-fade-in-up animated-faster': sectionTwoVis,
          }]"
          :href="img.href"
          :title="$t(img.title)"
        >
          <!-- <NuxtImg :src="img.img" height="200" fit="cover" loading="lazy"/> -->
          <ImageLoading :src="img.img" height="200" fit="cover" loading="lazy" />
        </a>
      </div>
    </div>
  </Section>

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

  <!-- Section Four -->
  <SectionBanner
    :img="$t(sectionFour.img)" :topic="$t(sectionFour.topic)" :description="$t(sectionFour.description)" :link="{
      href: sectionFour.link.href,
      name: $t(sectionFour.link.name),
    }" mask="bottom"
  />

  <!-- Section Five -->
  <Section class="bg-gradient-blue text-white">
    <Typography :title=" $t(sectionFive.title) " :topic=" $t(sectionFive.topic) " :description=" $t(sectionFive.description) " class="pb-20 text-start" />
    <div class="grid-row gap-26 pb-10 lg:(grid-cols-3) md:(grid-cols-2)">
      <div
        v-for="(content, i) in sectionFive.content"
        :key="i"
        class="w-full"
      >
        <h4 text-h4 class="break-words text-start font-bold text-white !line-clamp-2">
          {{ $t(content.topic) }}
        </h4>
        <p text-h7 class="break-words text-start !line-clamp-3">
          {{ $t(content.description) }}
        </p>
      </div>
    </div>
  </Section>

  <!-- Section Six -->
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
        <div class="h-full w-full flex flex-col items-center justify-center px-16 md:items-start">
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

  <!-- Section Seven -->
  <SectionBanner :img="$t(sectionSeven.img)" :title="$t(sectionSeven.title)" :topic="$t(sectionSeven.topic)" mask="bottom" />

  <!-- Section Eight -->
  <Section>
    <div class="grid-row grid-cols-2 gap-20 pb-20 lg:(grid-cols-4)">
      <div
        v-for="(content, i) in sectionEight.content"
        :key="i"
        class="w-full text-center"
      >
        <div :class="content.icon" mb-5 h-60px w-full />
        <h4 text-h4 mb-1 font-bold>
          {{ $t(content.title) }}
        </h4>
        <p text-h7>
          {{ $t(content.description) }}
        </p>
      </div>
    </div>

    <!-- <div class="grid-row rounded-lg from-violet-500 to-fuchsia-500 bg-gradient-to-r p-5 text-white shadow-lg lg:(grid-cols-2)">
      <ATypography
        class="text-white"
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
    </div> -->
  </Section>
  <!-- <Divider /> -->

  <!-- Section Nine -->
  <Section class="my-10 flex bg-gradient-pink">
    <Typography :title="$t(sectionNine.title)" :topic=" $t(sectionNine.topic)" :description=" $t(sectionNine.description)" class="text-start" />

    <ModelContent src="/model/house/Night-City.gltf" :width="300" />
  </Section>
  <!-- <Divider /> -->
</template>

<style scoped lang="scss">
.section-three{
  .mask-img{
    --uno:'absolute bottom-0 left-0 z-1 flex h-50px w-full items-center justify-center border-t-2px border-dark-50/10 bg-black/15 p-2 px-10 backdrop-blur-md transition ';
    box-shadow: 0 -5px 25px rgba(0,0,0,0.4);
  }
}
</style>
