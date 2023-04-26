<script setup lang="ts">
const { state: pages, next, prev } = useCycleList(Array(4).fill('').map((_, i) => i), {
  initialValue: 1,
})
const transitionPages = ref('view-next')
const carousels = [
  {
    title: 'carousel.one.topic',
    description: 'carousel.one.description',
    entry: 'carousel.one.entry',
    img: '/imgs/1 (1).jpg',
  },
  {
    title: 'carousel.two.topic',
    description: 'carousel.two.description',
    entry: 'carousel.two.entry',
    img: '/imgs/1 (2).jpg',
  },
  {
    title: 'carousel.third.topic',
    description: 'carousel.third.description',
    entry: 'carousel.third.entry',
    img: '/imgs/1 (3).jpg',
  },
  {
    title: 'carousel.four.topic',
    description: 'carousel.four.description',
    entry: 'carousel.four.entry',
    img: '/imgs/1 (4).jpg',
  },
]

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
        <img style="-webkit-mask-image:linear-gradient(0deg,transparent ,#000 80%, transparent 190%)" :src="item.img">
      </div>
      <!-- <ACard
        :title="item.title"
        class="h-300px shadow-none"
        :text="item.description"
      /> -->
    </AView>
  </AViews>
</template>
