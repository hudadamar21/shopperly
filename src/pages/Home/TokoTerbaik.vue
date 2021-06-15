<template>
  <!-- Toko Terbaik -->
  <section class="mt-24">
    <div class="w-full flex justify-center mb-5">
      <section-title name="Toko Terbaik"/>
    </div>
    <!-- Slider Product -->
    <SwiperSlider 
      classSwiper="h-[300px]"
      classSlide="rounded-md shadow pb-1 bg-shopperly-green-100"
      :slideCount="2"
      withPagination
      withLoopSlider
      :breakpoints="{
          768: {
            slidesPerView: 3
          }
        }"
      :data="sliderData"
    >
      <template #body="{ slideData }">
        <div :class="[
          'w-full h-full grid place-content-center rounded-md cursor-pointer',
          slideData.bg
        ]">
          <h1 class="font-bold text-white text-2xl">{{  slideData.text }}</h1>
        </div>
      </template>
    </SwiperSlider>
  </section>
</template>

<script>
import { reactive } from "vue";

import SwiperSlider from "@/components/SwiperSlider.vue";
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  components: {
    SwiperSlider,
    SectionTitle
  },
  setup(){
    const sliderData = reactive([
        {
          text: 'Samsung',
          bg: 'bg-gradient-to-br from-blue-500 to-blue-700'
        },
        {
          text: 'Xiaomi',
           bg: 'bg-gradient-to-br from-yellow-400 to-yellow-600'
        },
        {
          text: 'Huawei',
           bg: 'bg-gradient-to-br from-green-400 to-green-600'
        },
        {
          text: 'Apple',
           bg: 'bg-gradient-to-br from-gray-500 to-gray-700'
        },
      ])
    return {
      sliderData 
    }
  }
}
</script>