<script lang="ts" setup>
const items = [
  {
    icon: 'i-bx-link-external text-sm cursor-pointer',
    title: 'Electronics',
    subtitle: 'Mobile, Earbuds, TV',
    avatarProps: { icon: 'i-bx-mobile-alt' },
  },
  {
    icon: 'i-bx-link-external text-sm cursor-pointer',
    title: 'Fashion',
    subtitle: 'T-shirt, Jeans, Shoes',
    avatarProps: { icon: 'i-bx-closet' },
  },
  {
    icon: 'i-bx-link-external text-sm cursor-pointer',
    title: 'Decor',
    subtitle: 'Fine Art, Dining',
    avatarProps: { icon: 'i-bx-home' },
  },
  {
    icon: 'i-bx-link-external text-sm cursor-pointer',
    title: 'Sports',
    subtitle: 'Football, Cricket Kit',
    avatarProps: { icon: 'i-bx-football' },
  },
  {
    icon: 'i-bx-link-external text-sm cursor-pointer',
    title: 'Sports',
    subtitle: 'Football, Cricket Kit',
    avatarProps: { icon: 'i-bx-football' },
  },
  {
    icon: 'i-bx-link-external text-sm cursor-pointer',
    title: 'Sports',
    subtitle: 'Football, Cricket Kit',
    avatarProps: { icon: 'i-bx-football' },
  },
]
</script>

<template>
  <div class="mt-10 md:mt-20">
    <Section class="flex flex-col gap-4 md:flex-row">
      <div>
        <ACard
          shadow="none"
          title="搜索"
          subtitle="根据条件查询"
          class="w-full md:w-300px"
        >
          <!-- <img
            src="/images/demo/minimal-1.jpg"
            alt="girl"
          > -->

          <div class="a-card-body a-card-spacer">
            <p class="text-sm">
              Macaroon cake powder pie cake cake gingerbread oat cake chocolate cake.
            </p>
            <ABtn>Read more</ABtn>
          </div>
        </ACard>
      </div>

      <ACard w-full shadow="none">
        <AList
          :items="items"
          icon-append
          class="[--a-list-item-gap:1rem]"
        >
          <template #item-prepend>
            <div class="h-150px w-300px overflow-hidden rounded bg-light-50/10" style="mask-image:linear-gradient(270deg, transparent, #000);-webkit-mask-image:linear-gradient(290deg, transparent 12%, #000 80%);">
              <ImageLoading class="h-full w-full" src="/imgs/Home-Stories/Circulus.jpg" />
            </div>
          </template>
        </AList>
      </ACard>
    </Section>
  </div>
</template>
