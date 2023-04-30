<script setup lang="ts">
import { useNav } from '~/config/use-nav'

const navs = useNav()
</script>

<template>
  <nav
    :class="{
      hidden: y > 10,
    }"
  >
    <NuxtLink v-for="(nav, i) in navs" :key="i" class="mx-2 border-primary p-1 pb-5 transition-all" :to="nav.href" active-class="border-b-3px">
      <ABtn variant="text" color="white">
        <AMenu v-if="nav.child" color="white" trigger="hover" z-1000 mt-5 placement="bottom">
          <AList
            :items="nav.child"
            avatar-append
            class="[--a-list-item-gap:1rem]"
          >
            <NuxtLink v-for="(item, index) in nav.child" :key="index" :href="item.href" class="mx-2 my-1 max-w-250px overflow-hidden rounded py-2 hover:bg-light-50/5" active-class="bg-light-50/5">
              <AListItem
                :title="$t(item.title)"
                :subtitle="$(item.subtitle)"
                :icon="item.icon"
              />
            </NuxtLink>
          </AList>
        </AMenu>
        <span>{{ $t(nav.title) }}</span>
      </ABtn>
    </NuxtLink>
  </nav>
</template>

<style scoped>
.a-btn-content{
  --uno:text-white;
}
</style>
