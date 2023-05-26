<script setup lang="ts">
$defineProps<{
  src: string
}>()
</script>

<template>
  <ClientOnly>
    <Model :src="src" />
  </ClientOnly>
</template>
