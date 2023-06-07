<script setup>
import { useCommunityArticle } from '~/config/pages/community/use-community-article'
import { useCommunityTag } from '~/config/pages/community/use-community-tag'

const items = useCommunityArticle()
const tags = useCommunityTag()
const data = ref([])

const { text, copy, copied, isSupported } = useClipboard()

const list = computed(() => {
  if (!data.value.length)
    return items

  return items.filter((i) => {
    return i.tags.some(j => data.value.includes(j))
  })
})

const status = [
  {
    color: 'bg-green',
    text: 'level[0]',
  },
  {
    color: 'bg-amber',
    text: 'level[1]',
  },
  {
    color: 'bg-rose',
    text: 'level[2]',
  },
]
</script>

<template>
  <div class="mt-10 md:mt-20">
    <Section class="flex flex-col gap-4 md:flex-row">
      <div>
        <ACard
          shadow="none"
          :title="$t('filtrate')"
          :subtitle="$t('filtrate.discription')"
          class="w-full md:w-300px"
        >
          <!-- <img
            src="/images/demo/minimal-1.jpg"
            alt="girl"
          > -->

          <div class="a-card-body a-card-spacer">
            <div class="grid grid-rows-2 gap-y-3">
              <ACheckbox
                v-for="tag in tags"
                :key="tag.value"
                v-model="data"
                :value="tag.value"
                :label="$t(tag.label)"
              />
            </div>

            <!-- <ABtn>Read more</ABtn> -->
          </div>
        </ACard>
      </div>

      <div class="3xl:grid-cols-4 grid-row w-full pb-10 2xl:grid-cols-3 lg:grid-cols-2">
        <!-- 👉 2nd card -->
        <LocaleNuxtLink
          v-for="(item, i) in list"
          :key="i"
          :href="item.href"
          class="w-full overflow-hidden rounded bg-[hsla(var(--a-surface-c),var(--un-bg-opacity,1))]"
        >
          <ImageLoading style="-webkit-mask-image:linear-gradient(0deg, transparent, #000 60%);" :src="item.img" class="rounded-b-3xl" height="400" fit="cover" loading="lazy" />
          <div class="relative w-full">
            <div class="absolute bottom-0 left-70px">
              <h3 class="text-h4 font-bold">
                {{ item.title }}
              </h3>
            </div>
          </div>
          <div class="flex items-center justify-between gap-2 p-3 pt-5">
            <AAvatar :src="item.avatar" />
            <div class="flex-grow pl-2">
              <h4>
                {{ item.author }}
              </h4>
              <p>
                <small>
                  {{ item.profession }}
                </small>
              </p>
              <p>
                <small>
                  {{ item.createTime }}
                </small>
              </p>
            </div>
            <div class="flex flex-shrink-0 items-center gap-2">
              <div class="h-10px w-10px rounded-full" :class="status[item.level].color" />
              {{ $t(status[item.level].text) }}
            </div>
          </div>
        </LocaleNuxtLink>
      </div>
    </Section>
  </div>
</template>
