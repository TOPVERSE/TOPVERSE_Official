<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main p="x4 y-50" text="center teal-700 dark:gray-200">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    
    <h2 text-4xl p-12>
      {{ $t('waiting') }}
    </h2>
  </main>
</template>
