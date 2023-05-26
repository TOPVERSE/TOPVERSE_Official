<script setup lang="ts">
import { Model as LingoModel, OrbitCamera, World, useAnimation } from 'lingo3d-vue'

const anim = useAnimation({ from: 180, to: 0, duration: 5000 })
</script>

<template>
  <div class="relative h-96 w-96 bg-transparent">
    <World color="transparent" default-light="studio">
      <LingoModel src="/model/apple_watch/scene.gltf" :y="0" :rotation-z="anim" :box-visible="false" />
      <OrbitCamera active :z="100" :y="80" :zoom="1" auto-rotate enable-damping />
    </World>
  </div>
</template>
