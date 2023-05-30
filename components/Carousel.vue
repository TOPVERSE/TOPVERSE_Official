<script setup lang="ts">
import { useCarousel } from '~/config/pages/home/use-carousel'

const carousels = useCarousel()

const { state: pages, next, prev } = useCycleList(carousels.map((_, i) => i), {
  initialValue: 0,
})

onMounted(() => {
  useIntervalFn(() => {
    next()
  }, 3500)
})
</script>

<template>
  <div class="relative h-500px w-full overflow-hidden md:h-600px xl:h-700px">
    <AViews
      v-model="pages"
      h-full
      class="[&>.a-views-wrapper]:h-full"
    >
      <AView v-for="(item, i) in carousels" :key="i" :value="i" h-full>
        <NuxtImg :src="item.img" fit="cover" class="w-full" height="600" width="1000"/>
      </AView>
    </AViews>

    <div class="absolute top-0 z-10 h-full w-full flex items-center justify-center text-shadow">
      <Typography
        scale-135
        text-color="white"
        :topic="$t(carousels[pages].title)" :description="$t(carousels[pages].description)" :link="{
          ...carousels[pages].link,
          name: $t(carousels[pages].link.name),
        }"
      />
    </div>
    <div class="absolute left-0 top-0 z-1 h-full w-full" style="background-image: linear-gradient(0deg,hsl(var(--a-body-bg-c)),transparent 65%, hsl(var(--a-body-bg-c))); pointer-events: none; pointer-events: none;" />
  </div>
</template>
