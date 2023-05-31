<script setup lang="ts">
import { Model as LingoModel, OrbitCamera, World, useAnimation } from 'lingo3d-vue'

$defineProps<{
  src: string
  width:number
}>()

const anim = useAnimation({ from: 180, to: 0, duration: 5000 })
</script>

<template>
  <div class="relative bg-transparent w-500px h-200px flex justify-center items-center">
    <div class="absolute h-500px w-500px">
      <World color="transparent" default-light="studio">
      <LingoModel :src="src" :y="0" :rotation-z="anim" :box-visible="false" />
      <OrbitCamera active :z="200" :y="80" :zoom="1.2" auto-rotate enable-damping />
    </World>
  
    </div>
  </div>
</template>
