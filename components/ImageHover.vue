<script setup lang="ts">
$defineProps<{
  img: string
  topic: string
  description?: string
  href: string
  imgClass: string
}>()
</script>

<template>
  <LocaleNuxtLink
    :href="href"
    class="group h-min-200px relative block h-full w-full overflow-hidden overflow-hidden rounded-lg bg-primary bg-opacity-35 shadow-lg"
  >
    <!-- <NuxtImg loading="lazy" :src="img" class="h-full w-full" fit="cover" width="300" height="180" /> -->
    <ImageLoading :src="img" :class="imgClass" class="h-full w-full transition-all group-hover:(scale-110 blur)" />
    <div class="mask-img h-50px bg-dark-700/70 transition-all group-hover:(h-full)">
      <div class="flex-grow text-h6">
        <p :title="$t(topic)" class="line-clamp-1 w-full text-white group-hover:(line-clamp-3 h-full)">
          {{ $t(topic) }}
        </p>
        <small v-if="description" class="hidden group-hover:block">
          {{ description }}
        </small>
      </div>
      <div i-solar-arrow-right-linear mx-2 stroke-3 font-bold text-white />
    </div>
  </LocaleNuxtLink>
</template>

<style scoped>
.mask-img{
    --uno:'absolute bottom-0 left-0 z-1 flex w-full items-center justify-center border-t-2px border-dark-50/10 p-2 px-10  transition ';
    box-shadow: 0 -5px 25px rgba(0,0,0,0.4);
  }
</style>
