<script setup lang="ts">
$defineProps<{
  href?: string
}>()

const localePath = useLocalePath()
</script>

<template>
  <NuxtLink :href="href && localePath(href)">
    <slot />
  </NuxtLink>
</template>
