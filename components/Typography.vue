<script setup lang="ts">
$defineProps<{
  title?: string
  titleClass?: string
  topic?: string
  topicClass?: string
  description?: string
  descriptionClass?: string
  linkClass?: string
  linkBtnClass?: string
  link?: {
    href: string
    name: string
  }
  textColor?: 'white' | 'black'
}>()
</script>

<template>
  <div class="text-center">
    <p v-if="title" class="text-title" :class="[`text-${textColor}`, titleClass]" drop-shadow>
      {{ title }}
    </p>
    <h2 v-if="topic" class="md:text-h2 text-h4 font-bold" :class="[`text-${textColor}`, topicClass]" drop-shadow>
      {{ topic }}
    </h2>
    <p v-if="description" :class="[`text-${textColor}`, descriptionClass]" text-h6 pb-5 drop-shadow>
      {{
        description
      }}
    </p>
    <LocaleNuxtLink v-if="link" :href="link?.href" :class="linkClass">
      <ABtn variant="light" :class="linkBtnClass" class="group" color="white" icon="i-solar-arrow-right-linear transition-all group-hover:px-4">
        {{ link?.name }}
      </ABtn>
    </LocaleNuxtLink>
  </div>
</template>
