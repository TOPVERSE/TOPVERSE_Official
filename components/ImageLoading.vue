<script setup lang="ts">
import { useImage } from '@vueuse/core'

const props = $defineProps<{
  src: string
  errSrc?: string
}>()
// const isGIF =
const avatarUrl = props.src
const { isLoading, error } = useImage({ src: avatarUrl })
</script>

<template>
  <div v-if="isLoading" class="h-min-200px h-full w-full flex animate-pulse items-center justify-center bg-slate/10">
    <div class="i-line-md-loading-twotone-loop" />
  </div>
  <!-- <div v-if="error" class="animate-pulse w-full h-full bg-rose/10 flex items-center justify-center">
    Error
  </div> -->
  <img v-else :src="error ? errSrc : src" style="object-fit: cover;">
</template>
