<template>
  <!-- Pilihan Terbaik Untuk Kamu -->
  <section class="relative mt-10 h-[400px] w-full">
    <div class="absolute top-0 left-0 h-full w-1/2 md:w-[30%] bg-gradient-to-b from-shopperly-green-400 to-shopperly-blue rounded-md shadow-md p-5 shadow-inner">
      <h1 class="text-2xl md:text-4xl font-bold text-white w-1/2 md:w-full">Pilihan terbaik untuk kamu!</h1>
      <hr class="text-white my-8 w-2/3 md:w-1/2">
      <p class="text-white text-lg md:text-2xl w-2/3">Jelajahi Produk terbaik sekarang!</p>
    </div>
    <div class="absolute w-[75%] top-1/2 transform -translate-y-1/2 right-0 md:h-2/3">
      <SwiperSlider 
        classSwiper="h-[200px] md:h-[300px] pb-1"
        classSlide="rounded-md shadow-md"
        :slideCount="3"
        :data="sliderData"
      />
    </div>
  </section>
</template>

<script>
import { reactive } from "vue";

import SwiperSlider from "../../components/SwiperSlider.vue";
export default {
  components: {
    SwiperSlider
  },
  setup(){
    const sliderData = reactive([
        {
          text: 'hello'
        },
        {
          text: 'world'
        },
        {
          text: 'next1'
        },
        {
          text: 'next2'
        },
        {
          text: 'next3'
        },
        {
          text: 'next4'
        },
      ])
    return {
      sliderData 
    }
  }
}
</script>

<style>

</style>