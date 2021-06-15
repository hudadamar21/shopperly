<template>
  <div class="bg-white rounded-md shadow-md border border-gray-300 h-[310px] md:h-[375px] w-full overflow-hidden text-shopperly-gray-800 cursor-pointer" @click="openProductDetail">

    <!-- Image Product -->
    <div class="h-[60%] md:h-[65%] overflow-hidden w-full bg-gradient-to-br from-shopperly-green-400 to-shopperly-green-300">
      <img :src="image" class="image-thumbnail" alt="product image">
    </div>

    <!-- Description Product -->
    <div class="p-3 h-[50%] md:h-[45%]">
      <h1 class="line-clamp-2 text-sm md:text-base">{{ title }}</h1>
      <p class="font-semibold my-1">{{ resultPrice }}</p>
      <div class="text-gray-500 text-xs md:text-sm flex items-center">
        <p class="flex items-center">
          <!-- star -->
          <icon-star class="text-yellow-400"/>
          {{ rating.toFixed(1) }}
        </p>
        <span class="px-1">|</span>
        <p>Terjual {{ resultSold }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router'

import { formatPrice, formatSold } from "@/utils/format";
import IconStar from "./icons/IconStar.vue";

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
    image: {
      type: String,
      required: true,
      default: ''
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
    const router = useRouter()

    const resultPrice = computed(() => formatPrice(props.price))
    const resultSold = computed(() => formatSold(props.sold))
    const openProductDetail = () => {
      router.push({ 
        name: 'product', 
        params: { name: props.title }
      })
    }
    return {
      resultPrice,
      resultSold,
      openProductDetail
    }
  }
}
</script>