<script setup lang="ts">
const el = ref<HTMLElement | null>(null)
const { y } = useScroll(el)
</script>

<template>
  <main :ref="el" class="h-screen w-screen overflow-auto scrollbar-thumb-color-dark-50 scrollbar-track-color-transparent scrollbar-radius-2 scrollbar-thumb-radius-4 scrollbar-w-6px scrollbar scrollbar-rounded">
    <Header
      :class="{
        hidden: !!y,
      }"
    />
    <slot />
    <Footer />
  </main>
</template>
