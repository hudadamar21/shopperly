<template>
  <nav class="relative h-16 bg-white flex items-center justify-evenly text-gray-700 rounded-b-3xl shadow mb-10 px-6 md:px-10">
    <brand-title class="text-2xl md:text-4xl"/>
  </nav>
  <section class="
    container px-5 md:px-10 m-auto mb-10 w-full
    flex flex-col lg:flex-row gap-6
  ">
    <div class="flex-grow border border-gray-300 rounded-lg p-5">
      <h1 class="text-2xl font-semibold pb-2 border-b-2 mb-5">Checkout</h1>
      <h1 class="font-bold">Nama Toko</h1>
      <h2>Alamat Toko</h2>
      <div class="w-full">
        <div class="w-full flex flex-col lg:flex-row gap-5 ">
          <ProductList/>
          <section class="w-full lg:w-[40%] ">
            <PilihKurir/>
          </section>
        </div>
        <section class="mt-10 border-t-4 w-full py-2">
          <RincianHarga/>
        </section>
      </div>
    </div>
    <div class="sticky top-3  border border-gray-300 rounded-md w-full lg:w-[25%] h-[max-content]">
      <rincian-checkout/>
    </div>
  </section>
</template>

<script>
import BrandTitle from '@/components/BrandTitle.vue'
import ProductList from "./ProductList.vue";
import PilihKurir from "./PilihKurir.vue";
import RincianHarga from "./RincianHarga.vue";
import RincianCheckout from "./RincianCheckout.vue";

export default {
  components: { 
    BrandTitle, 
    ProductList, 
    PilihKurir, 
    RincianHarga,
    RincianCheckout
  },
}
</script>