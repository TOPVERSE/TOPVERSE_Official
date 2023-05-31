<script setup lang="ts">
const props = $defineProps<{
  img: string
  title?: string
  topic?: string
  description?: string
  link?: {
    href: string
    name: string
  }
  mask?: 'top' | 'bottom' | 'both'
}>()

function getMask() {
  switch (props.mask) {
    case 'top':
      return 'linear-gradient(0deg,#000, transparent);'
    case 'bottom':
      return 'linear-gradient(0deg, transparent, #000);'
    case 'both':
    default:
      return 'linear-gradient(0deg, transparent, #000, transparent);'
  }
}
</script>

<template>
  <Section
    relative h-380px md:h-400px xl:h-450px
  >
    <div class=" absolute left-0 top-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat"  :style="`-webkit-mask-image:${getMask()}`" >
      <!-- <NuxtImg :src="img" loading="lazy" width="1000" height="300" class="w-full h-full"/> -->
      <ImageLoading :src="img" loading="lazy" width="1000" height="300" class="w-full h-full"/>
    </div>
    <Section class="left-0 top-0 h-full w-full flex flex-col items-center justify-center text-shadow">
      <Typography :title="title" :topic="topic" :description="description" :link="link" />
    </Section>
  </Section>
</template>
