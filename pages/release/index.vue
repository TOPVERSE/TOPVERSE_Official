<script setup>
import { useArticle } from '~/config/pages/release/use-article'
import { useTag } from '~/config/pages/release/use-tag'

const items = useArticle()
const tags = useTag()
const data = ref([])

const { text, copy, copied, isSupported } = useClipboard()

const list = computed(() => {
  if (!data.value.length)
    return items

  return items.filter((i) => {
    return i.tags.some(j => data.value.includes(j))
  })
})
</script>

<template>
  <div class="mt-10 md:mt-20">
    <Section class="flex flex-col gap-4 md:flex-row">
      <div>
        <ACard
          shadow="none"
          title="筛选"
          subtitle="根据条件过滤"
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

      <ACard w-full shadow="none">
        <AList
          :items="list"
          icon-append
          class="[--a-list-item-gap:1rem] gap-2 divide-y-1 divide-dark-50/10"
        >
          <div v-if="!list.length" class="flex items-center justify-center py-20 text-7xl font-bold text-dark-50/10">
            EMPTY
          </div>
          <template #item-prepend="{ attrs }">
            <LocaleNuxtLink :href="attrs.href" class="h-150px w-300px overflow-hidden rounded bg-light-50/10" style="mask-image:linear-gradient(270deg, transparent, #000);-webkit-mask-image:linear-gradient(290deg, transparent 12%, #000 80%);">
              <ImageLoading class="h-full w-full" :src="attrs.img" />
            </LocaleNuxtLink>
          </template>
          <template #item-content="{ item, attrs }">
            <LocaleNuxtLink :href="attrs.href" class="h-full flex flex-grow flex-col justify-between py-2">
              <div>
                <div class="text-title">
                  {{ item.title }}
                </div>
                <div class="text-description text-opacity-80">
                  {{ item.subtitle }}
                </div>
              </div>
              <small>
                {{ attrs.createTime }}
              </small>
            </LocaleNuxtLink>
          </template>
          <template #item-append="{ attrs }">
            <ABtn
              variant="text" icon="i-bx-link-external" icon-only @click="copy(`http://www.topverse.world${attrs.href}`)"
            >
              <ATooltip
                transition="fade"
                :text="$t('copylink')"
              />
            </ABtn>
          </template>
        </AList>
      </ACard>
    </Section>
  </div>
</template>
