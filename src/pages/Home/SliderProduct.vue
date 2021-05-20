<template>
  <!-- Slider Product -->
  <SwiperSlider 
    classSwiper="h-[300px] rounded-lg rounded-br-[5rem] rounded-tl-[4rem]"
    :slideSpeed="1000"
    :autoplay="true"
    :data="sliderData"
  />
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