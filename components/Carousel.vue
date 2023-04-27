<script setup lang="ts">
import { useCarousel } from '~/config/pages/home/use-carousel'

const { state: pages, next, prev } = useCycleList(Array(4).fill('').map((_, i) => i), {
  initialValue: 1,
})
const carousels = useCarousel()

useIntervalFn(() => {
  next()
}, 2500)
</script>

<template>
  <AViews
    v-model="pages"
  >
    <AView v-for="(item, i) in carousels" :key="i" :value="i">
      <div class="relative h-full max-h-700px min-h-500px w-full flex items-center justify-center bg-transparent">
        <div class="absolute absolute z-10 text-white text-shadow">
          <h2 class="text-h2 text-start text-white">
            {{ $t(item.title) }}
          </h2>
          <p class="text-h3 text-start">
            {{ $t(item.description) }}
          </p>
          <ABtn class="text-xl">
            {{ $t(item.entry) }}
          </ABtn>
        </div>
        <div class="absolute left-0 top-0 h-full w-full" style="background-image: linear-gradient(0deg,hsl(var(--a-body-bg-c)),transparent 75%, hsl(var(--a-body-bg-c)) 99%);" />
        <img :src="item.img">
      </div>
      <!-- <ACard
        :title="item.title"
        class="h-300px shadow-none"
        :text="item.description"
      /> -->
    </AView>
  </AViews>
</template>
