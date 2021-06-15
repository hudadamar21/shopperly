<template>
  <!-- Product Populer -->
  <section class="mt-24 flex flex-col items-center">
    <section-title name="Product yang terkait" />
    <div class="flex items-center justify-center w-full mt-3 flex-wrap">
      <div class="p-2 w-1/2 sm:w-1/3 md:w-1/4" v-for="(product, i) of products" :key="i">
        <ProdukCard
          :title="product.title"
          :price="product.price"
          :image="product.image"
          :rating="product.rating"
          :sold="product.sold"
        />
      </div>
    </div>

    <button class="px-3 py-1 rounded bg-shopperly-green-400 hover:bg-opacity-80 focus:outline-none mt-5 text-white font-semibold border-2 border-shopperly-green-400 transition">
      Tamplikan lebih banyak
    </button>
  </section>
</template>

<script>
import { reactive } from "vue";

import SectionTitle from '@/components/SectionTitle.vue'
import ProdukCard from "@/components/ProdukCard.vue";

import jaket_black from "@/assets/images/jaket_black.jpg";
import jaket_green from "@/assets/images/jaket_green.jpg";
import jaket_navy from "@/assets/images/jaket_navy.jpg";
import jaket_red from "@/assets/images/jaket_red.jpg";

export default {
  components: { SectionTitle, ProdukCard },
  setup(){
    const products = reactive([
        {
          id: 1,
          title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci ea recusandae atque! Beatae assumenda adipisci.',
          image: jaket_green,
          price: 5000000,
          rating: 4.8,
          sold: 100
        },
        {
          id: 2,
          title: 'Jaket Sweater Hoodie Zipper Polos Pria',
          image: jaket_navy,
          price: 80000,
          rating: 4.5,
          sold: 1000
        },
        {
          id: 3,
          title: 'amet consectetur adipisicing elit. Adipisci ea recusandae atque! Beatae assumenda adipisci.',
          image: jaket_red,
          price: 2500000,
          rating: 4.5,
          sold: 1200000
        },
        {
          id: 4,
          title: 'Adipisci ea recusandae atque! Beatae assumenda adipisci. Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
          image: jaket_black,
          price: 2000000,
          rating: 4.0,
          sold: 1400
        },
      ])

      return {
        products
      }
  }
}
</script>