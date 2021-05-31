<template>
  <div class="bg-white rounded-md shadow-md border border-gray-300 h-[310px] md:h-[375px] w-full overflow-hidden text-shopperly-gray-800 ">
    <div class="h-[60%] md:h-[65%] w-full bg-gradient-to-br from-shopperly-green-400 to-shopperly-green-300">
      <img src="" alt="">
    </div>
    <div class="p-3 h-[50%] md:h-[45%]">
      <h1 class="line-clamp-2 text-sm md:text-base">{{ title }}</h1>
      <p class="font-semibold my-1">{{ resultPrice }}</p>
      <div class="text-gray-500 text-xs md:text-sm flex items-center">
        <p class="flex items-center">
          <!-- star -->
          <icon-star/>
          {{ rating.toFixed(1) }}
        </p>
        <span class="px-1">|</span>
        <p>Terjual {{ resultSold }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import IconStar from "./icons/IconStar.vue";
import { formatPrice, formatSold } from "@/utils/format";
import { computed } from 'vue';

export default {
  components: {
    IconStar
  },
  props: {
    title: {
      type: String,
      required: true,
      default: 'No Title'
    },
    price: {
      type: Number,
      required: true,
      default: 0
    },
    rating: {
      type: Number,
      required: true,
      default: 0
    },
    sold: {
      type: Number,
      required: true,
      default: 0
    }
  },
  setup(props){
    const resultPrice = computed(() => formatPrice(props.price))
    const resultSold = computed(() => formatSold(props.sold))

    return {
      resultPrice,
      resultSold
    }
  }
}
</script>

<style>

</style>