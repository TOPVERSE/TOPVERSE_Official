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
    <div class="mask-img opacity-0 group-hover:opacity-100">
      <div class="text-h6 w-full">
        <p :title="$t(topic)" class="w-90% truncate text-white">
          {{ $t(topic) }}
        </p>
      </div>
      <div i-solar-arrow-right-linear stroke-3 font-bold text-white />
    </div>
  </NuxtLink>
</template>

<style scoped>
.mask-img{
    --uno:'absolute bottom-0 left-0 z-1 flex h-50px w-full items-center justify-center border-t-2px border-dark-50/10 bg-black/15 p-2 px-10 backdrop-blur-md transition ';
    box-shadow: 0 -5px 25px rgba(0,0,0,0.4);
  }
</style>
