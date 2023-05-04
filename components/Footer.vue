<script setup>
import { useFoot } from '~/config/use-foot'

const footer = useFoot()
</script>

<template>
  <Divider />
  <div class="grid-row p-20 py-10 lg:(grid-cols-3) md:(grid-cols-2 px-30) xl:px-60">
    <div
      v-for="(col, i) in footer"
      :key="i"
      class="w-full flex flex-col items-center gap-4"
    >
      <h5 text-title opacity-60>
        {{ $t(col.title) }}
      </h5>

      <NuxtLink v-for="(item, i) in col.child" :key="i" class="font-bold" :href="item.link.href">
        {{ item.link.name }}
      </NuxtLink>
    </div>
  </div>
  <div my-10 mt-20 flex items-center justify-center gap-4>
    <BrandLogo />
    © Copyright 2022 - 2023 LandVault · Wam Group · All rights reserved
    <DarkToggle />
  </div>
</template>
