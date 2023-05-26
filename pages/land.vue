<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import UnityWebgl from 'unity-webgl'

const canvasRef = ref(null)
let unityComponent = null

onMounted(() => {
  if (!unityComponent) {
    unityComponent = new UnityWebgl(canvasRef.value, {
      loaderUrl:
        '/unity/test/Build/Builds.loader.js',
      dataUrl:
        '/unity/test/Build/Builds.data',
      frameworkUrl:
        '/unity/test/Build/Builds.framework.js',
      codeUrl:
        '/unity/test/Build/Builds.wasm',
    })
  }
})
onBeforeUnmount(() => {
  if (unityComponent) {
    unityComponent.destroy()
    unityComponent = null
  }
})
</script>

<template>
  <div class="h-screen w-screen">
    <canvas id="canvas" ref="canvasRef" style="width: 100%; height: 100%" />
  </div>
</template>
