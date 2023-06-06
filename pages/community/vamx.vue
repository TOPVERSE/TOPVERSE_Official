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

      <div class="3xl:grid-cols-4 grid-row w-full pb-10 2xl:grid-cols-3 lg:grid-cols-2">
        <!-- 👉 2nd card -->
        <ACard
          v-for="(item, i) in 8"
          :key="i"
          title="Card title"
          subtitle="Chocolate cake tiramisu donut"
          text="Ice cream sweet pie pie dessert sweet danish. Jelly jelly beans cupcake jelly-o chocolate bonbon chocolate bar."
          img="/imgs/Home.Creatorverse.jpg"
        >
          <div class="a-card-body">
            <ABtn>Read more</ABtn>
          </div>
        </ACard>
      </div>
    </Section>
  </div>
</template>
