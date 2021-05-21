<template>
  <swiper
    class="swiper"
    :class="classSwiper"
    :spaceBetween="10"
    :slidesPerView="slideCount"
    :speed="slideSpeed"
    :loop="true"
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
      class="flex items-center justify-center"
      :class="classSlide"
      v-for="(slide, index) in data"
      :key="index"
    >
    <slot name="body" :slideData="slide" ></slot>
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

<style lang="postcss" >
.swiper {
  --navigation-slider-size: 40px;
}

.swiper-button-prev {
  background: #fff;
  height: var(--navigation-slider-size);
  width: var(--navigation-slider-size);
  border-radius: 100%;
  background-image: url(../assets/icons/arrow-left.svg) !important;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}
.swiper-button-next {
  background: #fff;
  height: var(--navigation-slider-size);
  width: var(--navigation-slider-size);
  border-radius: 100%;
  background-image: url(../assets/icons/arrow-right.svg) !important;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}
</style>