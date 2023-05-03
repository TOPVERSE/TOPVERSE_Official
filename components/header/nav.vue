<script setup lang="ts">
import { useNav } from '~/config/use-nav'

const navs = useNav()
</script>

<template>
  <nav>
    <NuxtLink v-for="(nav, i) in navs" :key="i" class="mx-2 border-primary p-1 pb-5 transition-all" :to="nav.href" active-class="border-b-3px">
      <ABtn variant="text">
        <AMenu v-if="nav.child" style="--un-bg-opacity:0.5;--a-spacing:2" class="backdrop-blur-md" z-1000 mt-5 placement="bottom">
          <AList
            :items="nav.child"
            avatar-append
            class="[--a-list-item-gap:1rem] [--a-spacing:1] !m-0 divide-y"
          >
            <NuxtLink v-for="(item, index) in nav.child" :key="index" :href="item.href" class="overflow-hidden py-1 hover:(bg-primary/20)" active-class="bg-primary/20">
              <AListItem
                class="[--a-spacing:1] max-w-300px"
                :title="$t(item.title)"
                :subtitle="item.subtitle && $t(item.subtitle)"
              >
                <template #prepend>
                  <AAvatar
                    class="shrink-0"
                    :icon="item.icon"
                  />
                </template>
              </AListItem>
            </NuxtLink>
          </AList>
        </AMenu>
        <span style="color: hsla(var(--a-base-c), 0.87); " class="font-bold">{{ $t(nav.title) }}</span>
      </ABtn>
    </NuxtLink>
  </nav>
</template>
