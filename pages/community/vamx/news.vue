<script setup>
import { useNewsArticle } from '~/config/pages/community/news/use-news-article'
import { useNewsTag } from '~/config/pages/community/news/use-news-tag'

const items = useNewsArticle()
const tags = useNewsTag()
const data = ref([])

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
  <div
    class="fixed bottom-16 right-6 md:hidden"
  >
    <ABtn
      class="text-xl"
      icon-only
      icon="i-material-symbols-view-headline"
    >
      <ATooltip
        trigger="click"
        class="[&_.a-tooltip]-bg-transparent"
      >
        <ACard
          shadow="none"
          :title="$t('community.vamx.news.title')"
          :subtitle="$t('community.vamx.news.discription')"
          class="w-300px"
        >
          <!-- <img
            src="/images/demo/minimal-1.jpg"
            alt="girl"
          > -->

          <div class="a-card-body divide-y-1 divide-dark-50/10 a-card-spacer">
            <LocaleNuxtLink href="/community/vamx" class="block p-2 font-bold hover:opacity-80">
              {{ $t('community.vamx.sider.title') }}
            </LocaleNuxtLink>

            <LocaleNuxtLink href="/community/vamx/structure" class="block p-2 font-bold hover:opacity-80">
              {{ $t('community.vamx.structure.title') }}
            </LocaleNuxtLink>

            <LocaleNuxtLink href="/community/vamx/join" class="block p-2 font-bold hover:opacity-80">
              {{ $t('community.vamx.join.title') }}
            </LocaleNuxtLink>
          </div>
        </ACard>
      </ATooltip>
    </ABtn>
  </div>
  <div class="mt-0 md:mt-20">
    <Section class="flex flex-col gap-4 md:flex-row">
      <div>
        <ACard
          shadow="none"
          :title="$t('community.vamx.news.title')"
          :subtitle="$t('community.vamx.news.discription')"
          class="hidden w-full md:block md:w-300px"
        >
          <!-- <img
            src="/images/demo/minimal-1.jpg"
            alt="girl"
          > -->

          <div class="a-card-body divide-y-1 divide-dark-50/10 a-card-spacer">
            <LocaleNuxtLink href="/community/vamx" class="block p-2 font-bold hover:opacity-80">
              {{ $t('community.vamx.sider.title') }}
            </LocaleNuxtLink>

            <LocaleNuxtLink href="/community/vamx/structure" class="block p-2 font-bold hover:opacity-80">
              {{ $t('community.vamx.structure.title') }}
            </LocaleNuxtLink>

            <LocaleNuxtLink href="/community/vamx/join" class="block p-2 font-bold hover:opacity-80">
              {{ $t('community.vamx.join.title') }}
            </LocaleNuxtLink>
          </div>
        </ACard>
      </div>

      <div class="3xl:grid-cols-4 grid-row w-full pb-10 2xl:grid-cols-3 lg:grid-cols-2">
        <!-- 👉 2nd card -->
        <Card
          v-for="(item, i) in list"
          :key="i"
          :class="[`animated-delay-${i * 100}ms`]"
          :title="item.title"
          :href="item.href"
          :description="item.subtitle"
          :img="item.img"
          :avatar="item.avatar"
          :author="item.author"
          :profession="item.profession"
          :create-time="item.createTime"
        >
          <template #footer>
            <div class="flex flex-shrink-0 items-center gap-2">
              <div class="h-10px w-10px rounded-full" :class="status[item.level].color" />
              {{ $t(status[item.level].text) }}
            </div>
          </template>
        </Card>
      </div>
    </Section>
  </div>
</template>
