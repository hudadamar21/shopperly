<template>
  <swiper
    class="swiper"
    :class="classSwiper"
    :spaceBetween="10"
    :slidesPerView="slideCount"
    :speed="slideSpeed"
    :autoplay="autoplay ? {
      delay: 10000,
      disableOnInteraction: false,
    } : false"
    :navigation="true"
    :pagination="{
      dynamicBullets: true,
      clickable: true,
    }"
  >
    <swiper-slide
      :class="['slider', classSlide]"
      v-for="(slide, index) in data"
      :key="index"
      >{{ slide.text }}
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    classSwiper: String,
    classSlide: String,
    slideSpeed: {
      type: Number,
      default: 300,
    },
    autoplay: Boolean,
    data: {
      type: Array,
      required: true,
    },
    slideCount: {
      type: Number,
      default: 1,
    },
  },
  methods: {
  },
};
</script>

<style lang="postcss" scoped>
.slider {
  @apply flex items-center justify-center bg-shopperly-green-100
}
</style>