<script setup lang="ts">
$defineProps<{
  src: string
  width:number
}>()
</script>

<template>
  <ClientOnly>
    <Model :src="src" :width="width" />
  </ClientOnly>
</template>
