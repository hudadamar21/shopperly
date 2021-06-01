<template>
  <!-- Slider Product -->
  <SwiperSlider 
    classSwiper="h-[350px] rounded-lg rounded-br-[5rem] rounded-tl-[4rem]"
    classSlide="bg-shopperly-green-100"
    :slideSpeed="1000"
    autoplay
    withNavigation
    withLoopSlider
    withPagination
    :data="sliderData"
  >
    <template #body="{ slideData }">
      {{ slideData.text }} 
    </template>
  </SwiperSlider>
</template>

<script>
import { reactive } from "vue";

import SwiperSlider from "@/components/SwiperSlider.vue";
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
          text: 'back'
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