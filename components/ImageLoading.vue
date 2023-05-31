<script setup lang="ts">


import { useImage } from '@vueuse/core'

const props = $defineProps<{
  src:string
}>()

const avatarUrl = props.src
const { isLoading,error } = useImage({ src: avatarUrl })
</script>

<template>
  <div v-if="isLoading" class="animate-pulse w-full h-full bg-slate/10  flex items-center justify-center">
    Loading
  </div>
  <div v-if="error" class="animate-pulse w-full h-full bg-rose/10 flex items-center justify-center">
    Error
  </div>
  <img v-else :src="avatarUrl" style="object-fit: cover;">
</template>
 