<template>
  <div class="grid-row py-10 lg:(grid-cols-3) md:(grid-cols-2)">
    <div
      v-for="col in 3"
      :key="col"
      class="h-10 w-full rounded-lg bg-primary bg-opacity-35"
    />
  </div>
</template>
