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
  <ClientOnly>
    <Teleport to="#pages-sider">
      <ACard
        shadow="none"
        :title="$t('filtrate')"
        :subtitle="$t('filtrate.discription')"
        class="w-full"
      >
        <!-- <img
            src="/images/demo/minimal-1.jpg"
            alt="girl"
          > -->

        <div class="a-card-body a-card-spacer">
          <div class="grid grids-2 gap-y-3">
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
    </Teleport>
  </ClientOnly>
  <div class="mt-0 lg:mt-20">
    <Section class="flex flex-col gap-4 md:flex-row">
      <div>
        <ACard
          shadow="none"
          :title="$t('filtrate')"
          :subtitle="$t('filtrate.discription')"
          class="hidden lg:(block w-300px)"
        >
          <!-- <img
            src="/images/demo/minimal-1.jpg"
            alt="girl"
          > -->

          <div class="a-card-body a-card-spacer">
            <div class="grid grids-2 gap-y-3">
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

      <div class="3xl:grid-cols-4 grid gap-4 w-full pb-10 2xl:grid-cols-3 lg:grid-cols-2">
        <!-- 👉 2nd card -->
        <Card
          v-for="(item, i) in list"
          :key="i"
          :class="[`animated-delay-${i * 100}ms`]"
          :title="item.title"
          :description="item.subtitle"
          :img="item.img"
          :href="item.href"
          :avatar="item?.avatar"
          :author="item?.author"
          :profession="item?.profession"
          :create-time="item?.createTime"
        >
          <template #footer>
            <ABtn
              variant="text" icon="i-bx-link-external" icon-only class="h-50px w-20px"
              @click.prevent="copy(`http://www.topverse.world${item.href}`)"
            >
              <ATooltip
                transition="fade"
                :text="$t('copylink')"
              />
            </ABtn>
          </template>
        </Card>
      </div>
      <!--
      <ACard w-full shadow="none" class="divide-y divide-dark-50/10">
        <LocaleNuxtLink v-for="(item, i) in list" :key="i" class="group relative my-4 h-350px w-full flex flex-col items-center justify-start md:mx-4 md:h-150px md:flex-row" :href="item.href">
          <div :href="item.href" class="h-200px w-full overflow-hidden rounded bg-light-50/10 transition-all md:absolute group-hover:(w-full opacity-50) md:h-full md:w-1/2" style="mask-image:linear-gradient(270deg, transparent, #000);-webkit-mask-image:linear-gradient(290deg, transparent 12%, #000 80%);">
            <ImageLoading class="h-full w-full" :src="item.img" />
          </div>
          <div class="h-130px flex flex-grow flex-col items-center justify-between px-8 py-2 md:h-full md:items-end md:px-0">
            <div>
              <div class="line-clamp-2 text-title text-center md:text-right">
                {{ item.title }}
              </div>
              <div class="line-clamp-2 text-description text-center text-opacity-80 md:text-right">
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
      </ACard> -->
    </Section>
  </div>
</template>
