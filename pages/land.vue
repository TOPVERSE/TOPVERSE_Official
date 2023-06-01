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
  <div flex flex-col items-center justify-center pt-30>
    <Typography title="在线体验" topic="3D场景实时交互" description="鼠标移动到画面中，点击即可进入到场景内部，巴拉巴拉巴拉巴拉" />

    <div class="relative mt-20 h-600px w-1000px border-5px border-stone rounded shadow md:h-800px md:w-1500px">
      <div class="absolute w-full flex items-center justify-between pb-3 -translate-y-full">
        <div class="flex gap-4">
          <!-- 👉 Sales -->
          <div class="flex items-center gap-x-3">
            <AAvatar
              icon="i-emojione-monotone-letter-w"
              color="success"
              class="rounded-lg text-[1.25rem]"
            />
            <ATypography
              :title="['键盘W键', 'text-sm font-normal !text-medium-emphasis']"
              :subtitle="['前进', 'font-semibold !text-high-emphasis']"
            />
          </div>

          <!-- 👉 Revenue -->
          <div class="flex items-center gap-x-3">
            <AAvatar
              icon="i-emojione-monotone-letter-a"
              class="rounded-lg text-[1.25rem]"
            />
            <ATypography
              :title="['键盘A键', 'text-sm !text-medium-emphasis font-normal']"
              :subtitle="['左走', 'font-semibold !text-high-emphasis']"
            />
          </div>

          <!-- 👉 Customer -->
          <div class="flex items-center gap-x-3">
            <AAvatar
              icon="i-emojione-monotone-letter-s"
              color="info"
              class="rounded-lg text-[1.25rem]"
            />
            <ATypography
              :title="['键盘S键', 'text-sm !text-medium-emphasis font-normal']"
              :subtitle="['右走', 'font-semibold !text-high-emphasis']"
            />
          </div>

          <!-- 👉 Returns -->
          <div class="flex items-center gap-x-3">
            <AAvatar
              icon="i-emojione-monotone-letter-d"
              color="danger"
              class="rounded-lg text-[1.25rem]"
            />
            <ATypography
              :title="['键盘D键', 'text-sm !text-medium-emphasis font-normal']"
              :subtitle="['后退', 'font-semibold !text-high-emphasis']"
            />
          </div>
        </div>
        <div>
          <div class="flex items-center gap-x-3">
            <AAvatar
              icon="i-ic-baseline-mouse"
              color="orange"
              class="rounded-lg text-[1.25rem]"
            />
            <ATypography
              :title="['鼠标拖动', 'text-sm !text-medium-emphasis font-normal']"
              :subtitle="['转换视角', 'font-semibold !text-high-emphasis']"
            />
          </div>
        </div>
      </div>
      <canvas id="canvas" ref="canvasRef" style="width: 100%; height: 100%" class="rounded-sm" />
    </div>
  </div>
</template>
