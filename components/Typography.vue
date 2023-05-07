<script setup lang="ts">
$defineProps<{
  title?: string
  topic?: string
  description?: string
  link?: {
    href: string
    name: string
  }
  textColor?: 'white' | 'black'
}>()
</script>

<template>
  <div class="text-center">
    <p v-if="title" class="text-title" :class="`text-${textColor}`" drop-shadow>
      {{ title }}
    </p>
    <h2 v-if="topic" class="text-h2" :class="`text-${textColor}`" drop-shadow>
      {{ topic }}
    </h2>
    <p v-if="description" :class="`text-${textColor}`" text-h6 pb-5 drop-shadow>
      {{
        description
      }}
    </p>
    <NuxtLink v-if="link" :href="link?.href">
      <ABtn>
        {{ link?.name }}
      </ABtn>
    </NuxtLink>
  </div>
</template>
