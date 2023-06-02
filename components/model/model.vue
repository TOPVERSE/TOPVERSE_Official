<script setup lang="ts">
import { Model as LingoModel, OrbitCamera, World, useAnimation } from 'lingo3d-vue'

$defineProps<{
  src: string
  width: number
}>()

const anim = useAnimation({ from: 180, to: 0, duration: 5000 })
</script>

<template>
  <div class="relative h-200px w-500px flex items-center justify-center bg-transparent">
    <div class="absolute h-250px w-250px lg:(h-500px w-500px) md:(h-350px w-350px)">
      <World color="transparent" default-light="studio">
        <LingoModel :src="src" :y="0" :rotation-z="anim" :box-visible="false" />
        <OrbitCamera active :z="200" :y="80" :zoom="1.2" auto-rotate enable-damping />
      </World>
    </div>
  </div>
</template>
