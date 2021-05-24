<template>
  <swiper
    class="swiper"
    :class="classSwiper"
    :spaceBetween="spaceBetween"
    :slidesPerView="slideCount"
    :speed="slideSpeed"
    :loop="withLoopSlider"
    :autoplay="autoplay ? {
      delay: 10000,
      disableOnInteraction: false,
    } : false"
    :navigation="withNavigation"
    :pagination="withPagination ? {
      dynamicBullets: true,
      clickable: true,
    } : false"
    :breakpoints="breakpoints"
  >
    <swiper-slide
      class="flex items-center justify-center"
      :class="classSlide"
      v-for="(slide, index) in data"
      :key="index"
    >
      <slot name="body" :slideData="slide"></slot>
    </swiper-slide>
    <swiper-slide
      v-if="lookMoreTo"
      class="flex items-center justify-center"
      :class="classSlide"
    >
      <div class="bg-white rounded-md shadow-md border border-gray-300 h-[310px] md:h-[375px] w-full overflow-hidden text-shopperly-gray-800 grid place-items-center">
        
        <router-link :to="lookMoreTo" class="px-3 py-1 rounded-md text-shopperly-green-400 font-semibold hover:underline">
          Lihat lebih banyak
        </router-link>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

// Import Swiper styles
import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    // class
    classSwiper: String,
    classSlide: String,

    // options
    autoplay: Boolean,
    withPagination: Boolean,
    withNavigation: Boolean,
    withLoopSlider: Boolean,
    lookMoreTo: {
      type: [String, Object, Boolean],
      default: false
    },
    slideSpeed: {
      type: Number,
      default: 300,
    },
    spaceBetween: {
      type: Number,
      default: 10
    },
    slideCount: {
      type: [String, Number],
      default: 1,
    },
    breakpoints: {
      type: Object,
      default: {}
    },

    // data
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="postcss" >
.swiper {
  --navigation-slider-size: 40px;
  --swiper-theme-color: #fcfcfc;
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
  transition: 0.2s;
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
  transition: 0.2s;
}
.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{
  opacity:0;cursor:auto;pointer-events:none
  }
.swiper-button-next:after,.swiper-button-prev:after{
  font-family: '' !important;
}
.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{
  content:'' !important;
}
.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{
  content:'' !important;
}
</style>