<script setup lang="ts">
$defineProps<{
  href: string
  img: string
  title: string
  avatar: string
  author: string
  description?: string
  profession: string
  createTime: string
}>()
</script>

<template>
  <div
    class="w-full overflow-hidden rounded-lg bg-[hsla(var(--a-surface-c),var(--un-bg-opacity,1))] animated animated-fade-in-up animated-faster"
  >
    <ImageHover
      :href="href"
      :description="description"
      :img="img"
      :topic="title"
      img-class="h-250px w-full "
      class="rounded-b-3xl"
    />
    <!-- <ImageLoading style="-webkit-mask-image:linear-gradient(0deg, transparent, #000 60%);" :src="item.img" class="h-250px w-full rounded-b-3xl" fit="cover" loading="lazy" />
          <div class="relative w-full">
            <div class="absolute bottom-0 left-70px">
              <h3 class="w-200px truncate text-h4 font-bold" :title="item.title">
                {{ item.title }}
              </h3>
            </div>
          </div> -->
    <div class="flex items-center justify-between gap-2 p-3 pt-5">
      <AAvatar :src="avatar" class="flex-shrink-0" />
      <div class="flex-grow pl-2">
        <div
          class="h-80px flex items-center"
        >
          <h4 class="line-clamp-3" :title="author">
            {{ author }}
          </h4>
        </div>
        <p>
          <small class="truncate">
            {{ profession }}
          </small>
        </p>
        <p>
          <small>
            {{ createTime }}
          </small>
        </p>
      </div>
      <slot name="footer" />
    </div>
  </div>
</template>
