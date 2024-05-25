<script setup lang="ts">
import { useWeb3 } from '~/config/pages/solutions/use-web3'

const content = useWeb3()
</script>

<template>
  <SectionBanner :img="content.head?.img" :title="content.head?.title" :topic="content.head?.topic" :description="content.head?.description" font-bold text-white />
  <!-- <SectionGradientCard :content="content.feature.content" :topic="content.feature.topic" /> -->

  <Section>
    <div class="grid grid-cols-2 gap-20 pb-20 lg:(grid-cols-4)">
      <div
        v-for="(item, i) in content.feature.content"
        :key="i"
        class="w-full text-center"
      >
        <div :class="item.icon" mb-5 h-60px w-full />
        <h4 text-h4 mb-1 font-bold>
          {{ $t(item.title) }}
        </h4>
        <p text-h7>
          {{ $t(item.description) }}
        </p>
      </div>
    </div>
  </Section>

  <Section>
    <div class="flex flex-col rounded-lg bg-light-800/5 p-10 md:flex-row">
      <div class="flex-1/2 md:px-12">
        <BrandLogo class="flex scale-90 justify-center md:justify-start" />
        <div class="h-full flex flex-col items-center justify-center pb-100px md:pb-300px">
          <Typography
            description-class="line-clamp-none"
            :topic="$t(content.solutions.topic)" :description="$t(content.solutions.description)" :link="{
              href: content.solutions.link.href,
              name: $t(content.solutions.link.name),
            }" class="pt-5 md:text-start"
          />
        </div>
      </div>

      <div class="3xl:grid-cols-4 grid flex-grow pb-10 2xl:grid-cols-3 lg:grid-cols-2">
        <!-- 👉 2nd card -->
        <Card
          v-for="(item, i) in content.solutions.content"
          :key="i"
          class="bg-transparent" :class="[`animated-delay-${i * 100}ms`] "
          :title="item.title"
          :description="item.subtitle"
          :img="item.img"
          :href="item.href"
          :avatar="item?.avatar"
          :author="item?.author"
          :profession="item?.profession"
          :create-time="item?.createTime"
        />
      </div>
    </div>
  </Section>

  <Typography :topic=" $t(content.ending)" class="pt-5" />
</template>
