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
    <div absolute left-0 top-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat :style="`background-image: url('${img}');-webkit-mask-image:${getMask()}`" />
    <Section absolute left-0 top-0 h-full w-full flex flex-col items-center justify-center text-white text-shadow>
      <p v-if="title" class="text-title" drop-shadow>
        {{ title }}
      </p>
      <h2 v-if="topic" class="text-h2" text-white drop-shadow>
        {{ topic }}
      </h2>
      <p v-if="description" text-h6 pb-5 drop-shadow>
        {{
          description
        }}
      </p>
      <NuxtLink v-if="link" :href="link?.href">
        <ABtn>
          {{ link?.name }}
        </ABtn>
      </NuxtLink>
    </Section>
  </Section>
</template>
