<template>
  <!-- Product Populer -->
  <section class="mt-24 flex flex-col items-center">
    <SectionTitle name="Produk Populer"/>
    <div class="flex items-start justify-evenly w-full mt-3 flex-wrap">
      <SwiperSlider 
        classSwiper="px-1"
        classSlide="rounded-md"
        withNavigation
        lookMoreTo="/"
        :slideCount="2"
        :breakpoints="{
          768: {
            slidesPerView: 4
          }
        }"
        :data="products"
      >
        <template #body="{ slideData: { title, price,image, productDetailUrl, rating, sold }}"> 
          <ProdukCard
            :title="title"
            :price="price"
            :image="image"
            :productDetailUrl="productDetailUrl"
            :rating="rating"
            :sold="sold"
          />
        </template>
      </SwiperSlider>
      
    </div>
    
  </section>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";
import ProdukCard from "@/components/ProdukCard.vue";
import SwiperSlider from "@/components/SwiperSlider.vue";

import jaket_black from "@/assets/images/jaket_black.jpg";
import jaket_green from "@/assets/images/jaket_green.jpg";
import jaket_navy from "@/assets/images/jaket_navy.jpg";
import jaket_red from "@/assets/images/jaket_red.jpg";

import { reactive } from 'vue';
export default {
  components: {
    SectionTitle,
    ProdukCard,
    SwiperSlider
  },
  setup(){
    const products = reactive([
        {
          id: 1,
          title: 'Jaket Sweater Hoodie Zipper Polos Pria',
          image: jaket_red,
          price: 80000,
          rating: 4.5,
          sold: 1000
        },
        {
          id: 2,
          title: 'amet consectetur adipisicing elit. Adipisci ea recusandae atque! Beatae assumenda adipisci.',
          image: jaket_black,
          price: 2500000,
          rating: 4.5,
          sold: 1200000
        },
        {
          id: 3,
          title: 'Adipisci ea recusandae atque! Beatae assumenda adipisci. Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
          image: jaket_navy,
          price: 2000000,
          rating: 4.0,
          sold: 1400
        },
        {
          id: 4,
          title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci ea recusandae atque! Beatae assumenda adipisci.',
          image: jaket_green,
          price: 5000000,
          rating: 4.8,
          sold: 100
        },
      ])

      return {
        products
      }
  }
}
</script>