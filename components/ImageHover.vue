<script setup lang="ts">
$defineProps<{
  img: string
  topic: string
  href: string
}>()
</script>

<template>
  <NuxtLink
    :href="href"
    class="group relative h-full w-full overflow-hidden rounded-lg bg-primary bg-opacity-35 shadow-lg"
  >
    <img :src="img" class="h-full w-full" style="object-fit: cover;">
    <div class="mask-img h-50px bg-dark-700/70 transition-all group-hover:(h-full)">
      <div class="text-h6 flex-grow">
        <p :title="$t(topic)" class="line-clamp-1 w-full text-white group-hover:(line-clamp-3 h-full)">
          {{ $t(topic) }}
        </p>
      </div>
      <div i-solar-arrow-right-linear mx-2 stroke-3 font-bold text-white />
    </div>
  </NuxtLink>
</template>

<style scoped>
.mask-img{
    --uno:'absolute bottom-0 left-0 z-1 flex w-full items-center justify-center border-t-2px border-dark-50/10 p-2 px-10 backdrop-blur-md transition ';
    box-shadow: 0 -5px 25px rgba(0,0,0,0.4);
  }
</style>
