<script setup>
import { useFoot } from '~/config/use-foot'

const footer = useFoot()
</script>

<template>
  <!-- <Divider /> -->
  <div class="grid-row grid-cols-2 p-20 pt-30 lg:(grid-cols-3) md:(px-30) xl:px-60">
    <div
      v-for="(col, i) in footer.links"
      :key="i"
      class="w-full flex flex-col items-center gap-8"
    >
      <h5 text-title opacity-60>
        {{ $t(col.title) }}
      </h5>

      <LocaleNuxtLink v-for="(item, i) in col.child" :key="i" :href="item.link.href">
        <ABtn v-if="item.img" variant="text" color="slate-200" class="dark:!text-light/50" :icon="item.icon">
          {{ $t(item.link.name) }}
          <ATooltip class="[&_.a-tooltip]-bg-dark-600" placement="left">
            <span class="a-tooltip-text">
              <img :src="item.img" class="h-40 rounded">
            </span>
          </ATooltip>
        </ABtn>
        <ABtn v-else variant="text" color="slate-200" class="dark:!text-light/50" :icon="item.icon">
          {{ $t(item.link.name) }}
        </ABtn>
      </LocaleNuxtLink>
    </div>
  </div>
  <div my-10 flex flex-col items-center justify-center gap-4>
    <div flex items-center gap-4>
      <BrandLogo />
      <DarkToggle />
    </div>
    <p class="text-center">
      {{ $t(footer.copyright) }}
    </p>
    <p class="text-center">
      {{ $t(footer.release) }}
    </p>
    <p v-for="(record, i) in footer.record" :key="i" class="text-center">
      {{ $t(record) }}
    </p>
    <p class="text-center">
      <img src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png" class="inline scale-90 px-1">
      京公网安备 11010502052580号
    </p>
  </div>
</template>
