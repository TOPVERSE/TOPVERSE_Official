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

      <ACard w-full shadow="none" class="divide-y divide-dark-50/10">
        <LocaleNuxtLink v-for="(item, i) in list" :key="i" class="group relative m-4 h-150px w-full flex items-center justify-start" :href="item.href">
          <div :href="item.href" class="absolute h-full w-1/3 overflow-hidden rounded bg-light-50/10 transition-all group-hover:(w-full opacity-50) md:w-1/2" style="mask-image:linear-gradient(270deg, transparent, #000);-webkit-mask-image:linear-gradient(290deg, transparent 12%, #000 80%);">
            <ImageLoading class="h-full w-full" :src="item.img" />
          </div>
          <div class="h-full flex flex-grow flex-col items-end justify-between py-2">
            <div>
              <div class="text-title text-right">
                {{ item.title }}
              </div>
              <div class="text-description text-right text-opacity-80">
                {{ item.subtitle }}
              </div>
            </div>
            <small>
              {{ item.createTime }}
            </small>
          </div>
          <ABtn
            variant="text" icon="i-bx-link-external" icon-only class="mx-2 h-50px w-50px"
            @click.prevent="copy(`http://www.topverse.world${item.href}`)"
          >
            <ATooltip
              transition="fade"
              :text="$t('copylink')"
            />
          </ABtn>
        </LocaleNuxtLink>

        <div v-if="!list.length" class="flex items-center justify-center py-20 text-7xl font-bold text-dark-50/10">
          EMPTY
        </div>
      </ACard>
    </Section>
  </div>
</template>
