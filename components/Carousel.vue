<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'

const modules = [Autoplay, EffectFade, Navigation, Pagination]
</script>

<template>
  <Swiper
    :space-between="30"
    effect="fade"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :modules="modules"
    loop
  >
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg">
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="https://swiperjs.com/demos/images/nature-2.jpg"
      >
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="https://swiperjs.com/demos/images/nature-3.jpg"
      >
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://swiperjs.com/demos/images/nature-4.jpg">
    </SwiperSlide>

    <div className="absolute z-1 h-1/3 w-full top-0 from-[hsl(var(--a-body-bg-c))]  bg-gradient-to-b w-full bg-opacity-30 " />
    <div className="absolute z-1 h-1/2 w-full bottom-0 from-[hsl(var(--a-body-bg-c))]  bg-gradient-to-t w-full bg-opacity-30 " />
  </Swiper>
</template>

<style scoped>
.swiper {
  --uno:'w-full h-500px lg:h-600px 2xl:h-700px relative';
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}
</style>
