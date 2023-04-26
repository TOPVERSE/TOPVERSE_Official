<script setup lang="ts">
const imgs = [
  {
    img: 'https://landvault.io/img/asset/YXNzZXRzL2ltYWdlcy9tYXAuanBn?w=581&h=358&fit=crop&fm=webp&s=1eeea55d816b6b9fb182d2a469db110c',
    title: 'land concierge',
    topic: 'Rent or buy land in minutes',
    description: 'Browse the best location and price for your project through our Metaverse Discovery tool, and rent Land from us, with or without crypto.',
    link: {
      href: '#',
      name: 'Learn more about the metaverse',
    },
  },
  {

    img: 'https://landvault.io/img/asset/YXNzZXRzL2ltYWdlcy9tYXAuanBn?w=581&h=358&fit=crop&fm=webp&s=1eeea55d816b6b9fb182d2a469db110c',
    title: 'land concierge',
    topic: 'Rent or buy land in minutes',
    description: 'Browse the best location and price for your project through our Metaverse Discovery tool, and rent Land from us, with or without crypto.',
    link: {
      href: '#',
      name: 'Learn more about the metaverse',
    },
  },
  {

    img: 'https://landvault.io/img/asset/YXNzZXRzL2ltYWdlcy9tYXAuanBn?w=581&h=358&fit=crop&fm=webp&s=1eeea55d816b6b9fb182d2a469db110c',
    title: 'land concierge',
    topic: 'Rent or buy land in minutes',
    description: 'Browse the best location and price for your project through our Metaverse Discovery tool, and rent Land from us, with or without crypto.',
    link: {
      href: '#',
      name: 'Learn more about the metaverse',
    },
  },
  {

    img: 'https://landvault.io/img/asset/YXNzZXRzL2ltYWdlcy9tYXAuanBn?w=581&h=358&fit=crop&fm=webp&s=1eeea55d816b6b9fb182d2a469db110c',
    title: 'land concierge',
    topic: 'Rent or buy land in minutes',
    description: 'Browse the best location and price for your project through our Metaverse Discovery tool, and rent Land from us, with or without crypto.',
    link: {
      href: '#',
      name: 'Learn more about the metaverse',
    },
  },
]
</script>

<template>
  <Carousel class="mb-5" />
  <Divider />
  <Section>
    <h2 class="text-h2">
      {{ $t('home.sectionOne.topic') }}
    </h2>
    <div class="grid-row lg:(grid-cols-3) md:(grid-cols-2)">
      <div
        v-for="col in 3"
        :key="col"
        class="h-10 w-full rounded-lg bg-primary bg-opacity-35"
      />
    </div>
  </Section>
  <Section class="border-b-2 border-light-50/10 border-b-solid from-light/5 bg-gradient-to-t">
    <p class="text-title">
      {{ $t('home.sectionTwo.title') }}
    </p>
    <div class="grid-row grid-cols-2 py-10 lg:(grid-cols-7) md:(grid-cols-3)">
      <div
        v-for="col in 7"
        :key="col"
        class="h-10 w-full rounded-lg bg-primary bg-opacity-35"
      />
    </div>
  </Section>
  <Section text-center>
    <p class="text-title">
      {{ $t('home.sectionThird.title') }}
    </p>
    <h2 class="text-h2">
      {{ $t('home.sectionThird.topic') }}
    </h2>
    <p class="text-h6">
      {{ $t('home.sectionThird.description') }}
    </p>

    <div>
      <div class="grid-row py-10 pb-20 lg:(grid-cols-2) md:(grid-cols-2)">
        <div
          v-for="col in 2"
          :key="col"
          class="h-10 w-full rounded-lg bg-primary bg-opacity-35"
        />
      </div>
      <div class="grid-row pb-20 lg:(grid-cols-3) md:(grid-cols-2)">
        <div
          v-for="col in 3"
          :key="col"
          class="h-10 w-full rounded-lg bg-primary bg-opacity-35"
        />
      </div>
      <div class="grid-row pb-20 lg:(grid-cols-4) md:(grid-cols-2)">
        <div
          v-for="col in 4"
          :key="col"
          class="h-10 w-full rounded-lg bg-primary bg-opacity-35"
        />
      </div>
    </div>
    <ABtn>{{ $t('home.sectionThird.entry') }}</ABtn>
  </Section>
  <Section
    relative h-380px md:h-400px xl:h-450px
  >
    <div absolute left-0 top-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat style="background-image: url(https://landvault.io/img/asset/YXNzZXRzL2ltYWdlcy9vdGhlcnNpZGUuanBn?w=1920&h=480&fit=crop&fm=webp&s=a53969e9e8ddeda15dab9b724a6af3f6);-webkit-mask-image:linear-gradient(0deg, transparent, #000);" />
    <Section absolute left-0 top-0 h-full w-full flex flex-col items-center justify-center text-white text-shadow>
      <h2 class="text-h2">
        {{ $t('home.sectionFour.topic') }}
      </h2>
      <p pb-5 text-h6>
        {{
          $t('home.sectionFour.description')
        }}
      </p>
      <ABtn>
        {{ $t('home.sectionFour.entry') }}
      </ABtn>
    </Section>
  </Section>
  <Section from-violet-500 to-fuchsia-500 bg-gradient-to-r>
    <p class="text-title text-start">
      {{ $t('home.sectionFive.title') }}
    </p>
    <h2 class="text-h2 text-start">
      {{ $t('home.sectionFive.topic') }}
    </h2>
    <p class="mb-10 text-h6 text-start">
      {{ $t('home.sectionFive.description') }}
    </p>

    <div class="grid-row pb-20 lg:(grid-cols-3) md:(grid-cols-2)">
      <div
        v-for="col in 6"
        :key="col"
        class="h-10 w-full rounded-lg bg-primary bg-opacity-35"
      />
    </div>
  </Section>
  <Section>
    <h2 class="text-h2">
      {{ $t('home.sectionSix.topic') }}
    </h2>
    <p class="text-h6">
      {{ $t('home.sectionSix.description') }}
    </p>

    <div v-for="(item, i) in imgs" :key="i" class="flex flex-wrap gap-4 py-10 md:flex-nowrap" :class="{ 'flex-row-reverse': i % 2 === 0 }">
      <div class="w-50% flex-grow">
        <div class="relative h-full w-full flex items-center justify-center overflow-hidden rounded-xl shadow-lg" style="mask-image:linear-gradient(0deg, transparent, #000);">
          <img :src="item.img">
        </div>
      </div>

      <div class="w-50% flex-grow">
        <div class="h-full w-full flex flex-col items-center justify-center md:items-start">
          <p class="text-title">
            {{ item.title }}
          </p>
          <h4 class="text-h4">
            {{ item.topic }}
          </h4>
          <p class="text-h6 text-stone-300 text-shadow-lg md:text-left">
            {{ item.description }}
          </p>
          <div w-full py-2 text-center>
            <NuxtLink :href="item.link.href">
              <ABtn variant="text">
                {{ item.link.name }}
              </ABtn>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </Section>
  <Section
    relative h-380px md:h-400px xl:h-450px
  >
    <div absolute left-0 top-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat style="background-image: url(https://landvault.io/img/asset/YXNzZXRzL2ltYWdlcy9vdGhlcnNpZGUuanBn?w=1920&h=480&fit=crop&fm=webp&s=a53969e9e8ddeda15dab9b724a6af3f6);-webkit-mask-image:linear-gradient(0deg, transparent, #000);" />
    <Section absolute left-0 top-0 h-full w-full flex flex-col items-center justify-center text-white text-shadow>
      <p class="text-title">
        {{ $t('home.sectionSeven.title') }}
      </p>
      <h2 class="text-h2">
        {{ $t('home.sectionSeven.topic') }}
      </h2>
    </Section>
  </Section>
  <Section>
    <div class="grid-row pb-20 lg:(grid-cols-4) md:(grid-cols-2)">
      <div
        v-for="col in 8"
        :key="col"
        class="h-10 w-full rounded-lg bg-primary bg-opacity-35"
      />
    </div>

    <div class="grid-row rounded-lg from-violet-500 to-fuchsia-500 bg-gradient-to-r p-5 shadow-lg lg:(grid-cols-2) md:(grid-cols-2)">
      <ATypography
        title="Awesome mobile"
        subtitle="Biscuit liquorice apple pie candy canes"
        :text="['Donut jelly beans cake lollipop sweet biscuit. Pie apple pie powder apple pie gummi bears. Jelly apple pie croissant candy canes liquorice halvah.', 'text-sm']"
      />
      <div h-full w-full flex flex-col items-center justify-center gap-3>
        <div flex items-center gap-3>
          <AInput class="col-start-1 w-full text-sm" input-wrapper-classes="bg-light-50" />
          <ABtn>test</ABtn>
        </div>
        <ACheckbox>
          <span>I am agreed to terms and conditions</span>
        </ACheckbox>
      </div>
    </div>
  </Section>
  <Divider />

  <Section my-10 from-green-500 to-lime-300 bg-gradient-to-r>
    <p class="text-title text-start">
      {{ $t('home.sectionFive.title') }}
    </p>
    <h2 class="text-h2 text-start">
      {{ $t('home.sectionFive.topic') }}
    </h2>
    <p class="mb-10 text-h6 text-start">
      {{ $t('home.sectionFive.description') }}
    </p>
  </Section>
  <Divider />
</template>
