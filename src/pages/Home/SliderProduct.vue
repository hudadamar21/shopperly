<template>
  <!-- Slider Product -->
  <SwiperSlider 
    classSwiper="h-[200px] lg:h-[350px] rounded-lg rounded-br-[5rem] rounded-tl-[4rem]"
    classSlide="bg-shopperly-green-100"
    :slideSpeed="1000"
    autoplay
    withNavigation
    withLoopSlider
    withPagination
    :data="sliderData"
  >
    <template #body="{ slideData }">
      <img :src="slideData.image" class="image-thumbnail">
    </template>
  </SwiperSlider>
</template>

<script>
import { reactive } from "vue";

import SwiperSlider from "@/components/SwiperSlider.vue";

import image_slider1 from "@/assets/images/Image_slider_1.svg";
import image_slider2 from "@/assets/images/Image_slider_2.svg";

export default {
  components: {
    SwiperSlider
  },
  setup(){
    const sliderData = reactive([
        {
          image: image_slider1
        },
        {
          image: image_slider2
        },
      ])
    return {
      sliderData 
    }
  }
}
</script>
