<template>
  <!-- Kategori Product -->
  <section class="min-h-[400px] flex flex-col items-center gap-3 mt-10">
    <div class="flex flex-col lg:flex-row gap-3">
      <div class="bg-shopperly-green-100">
        <img src="@/assets/images/events.svg" class="image-thumbnail" alt="events">
      </div>
      <div class="flex gap-3">
        <div class="bg-shopperly-green-100 w-1/2">
          <img src="@/assets/images/coming_soon.svg" class="image-thumbnail" alt="coming soon">
        </div>
        <div class="bg-shopperly-green-100 w-1/2">
          <img src="@/assets/images/coming_soon.svg" class="image-thumbnail" alt="coming soon">
        </div>
      </div>
    </div>
    <div class="category relative overflow-hidden rounded-md bg-shopperly-green-100 grid place-items-center py-4">
      <SwiperSlider 
        classSwiper="w-full px-2"
        classSlide="rounded-md !w-auto"
        slideCount="auto"
        :spaceBetween="15"
        :data="categories"
      >
        <template #body="{ slideData: { icon, name }}"> 
          <div class="border-2 border-shopperly-green-400 rounded-2xl flex items-center px-2.5 py-1.5 cursor-pointer">
          <div class="bg-shopperly-green-400 rounded-full p-2 lg:p-3">
            {{ icon }}
          </div>
          <h3 class="pl-2 text-lg lg:text-2xl">{{ name }}</h3>
        </div>
        </template>
      </SwiperSlider>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue'

import SwiperSlider from "@/components/SwiperSlider.vue";

export default {
  components: {
    SwiperSlider
  },
  setup(){
    const categories = reactive([
      {
        icon: '',
        name: 'Fashion'
      },
      {
        icon: '',
        name: 'Health'
      },
      {
        icon: '',
        name: 'Technology'
      },
      {
        icon: '',
        name: 'Electronic'
      },
      {
        icon: '',
        name: 'Handphone'
      },
      {
        icon: '',
        name: 'Fashion'
      },
      {
        icon: '',
        name: 'Health'
      },
      {
        icon: '',
        name: 'Technology'
      },
      {
        icon: '',
        name: 'Electronic'
      },
      {
        icon: '',
        name: 'Handphone'
      },
    ])

    return {
      categories
    }
  }
}
</script>

<style lang="postcss">
.category:before {
  content: '';
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.05);
  z-index: 1;
  @apply absolute top-0 -left-5 w-5 h-full
}
.category:after {
  content: '';
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.05);
  z-index: 1;
  @apply absolute top-0 -right-5 w-5 h-full
}
</style>