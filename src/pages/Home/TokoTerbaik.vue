<template>
  <!-- Toko Terbaik -->
  <section class="mt-10">
    <div class="w-full flex justify-center mb-5">
      <section-title name="Toko Terbaik"/>
    </div>
    <!-- Slider Product -->
    <SwiperSlider 
      classSwiper="h-[300px] pb-1"
      classSlide="rounded-md shadow"
      :slideCount="3"
      :data="sliderData"
    />
  </section>
</template>

<script>
import { reactive } from "vue";

import SwiperSlider from "../../components/SwiperSlider.vue";
import SectionTitle from "../../components/SectionTitle.vue";

export default {
  components: {
    SwiperSlider,
    SectionTitle
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