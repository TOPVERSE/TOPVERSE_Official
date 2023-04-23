<script setup lang="ts">
$defineProps<{
  asChild?: boolean
  title?: string
}>()
</script>

<template>
  <div className="relative col-span-full lg:col-span-10 lg:col-start-2 px-50">
    <hr className="border-0 h-px opacity-20 from-white/0 to-white/0 via-[#fff_21.5%,#fff_80%] bg-gradient-to-r">
    <div v-if="title" className="font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[hsl(var(--a-body-bg-c))] leading-none text-center whitespace-nowrap p-2 z-10 ">
      {{ title }}
    </div>
    <slot v-if="asChild" />
  </div>
</template>
