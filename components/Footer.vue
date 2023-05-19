<script setup>
import { useFoot } from '~/config/use-foot'

const footer = useFoot()
</script>

<template>
  <Divider />
  <div class="grid-row p-20 pt-30 lg:(grid-cols-3) md:(grid-cols-2 px-30) xl:px-60">
    <div
      v-for="(col, i) in footer.links"
      :key="i"
      class="w-full flex flex-col items-center gap-8"
    >
      <h5 text-title opacity-60>
        {{ $t(col.title) }}
      </h5>

      <LocaleNuxtLink v-for="(item, i) in col.child" :key="i" class="flex gap-2 font-bold" :href="item.link.href">
        <span :class="item.icon" />{{ $t(item.link.name) }}
      </LocaleNuxtLink>
    </div>
  </div>
  <div my-10 flex flex-col items-center justify-center gap-4>
    <div flex items-center gap-4>
      <BrandLogo />
      <DarkToggle />
    </div>
    <p>
      {{ $t(footer.copyright) }}
    </p>
    <p>
      {{ $t(footer.release) }}
    </p>
    <p v-for="(record, i) in footer.record" :key="i">
      {{ $t(record) }}
    </p>
  </div>
</template>
