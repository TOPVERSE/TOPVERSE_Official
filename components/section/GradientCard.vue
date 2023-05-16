<script setup lang="ts">
$defineProps<{
  topic: string
  content: {
    title: string
    subtext: string
    description: string
  }[]
}>()

const colors = [
  'text-gradient-pink',
  'text-gradient-blue',
  'text-gradient-green',
  'text-gradient-rose',
  'text-gradient-purple',
  'text-gradient-yello',
]
</script>

<template>
  <Section>
    <Typography :topic="$t(topic)" />
    <div class="grid-row gap-10 pt-20 md:(grid-cols-2)" :class="`lg:grid-cols-${content.length}`">
      <div
        v-for="(col, i) in content"
        :key="i"
        class="h-full w-full flex flex-col items-center justify-center"
      >
        <h2 :title="$t(col.title)" class="text-h2 w-full text-center text-7xl font-bold text-transparent" :class="colors[i]">
          {{ $t(col.title) }}
        </h2>
        <h5 :title="$t(col.subtext)" class="text-h4 text-h5 mt-3 text-center">
          {{ $t(col.subtext) }}
        </h5>
        <p :title="$t(col.description)" class="text-h6 mt-1 text-center">
          {{ $t(col.description) }}
        </p>
      </div>
    </div>
  </Section>
</template>
