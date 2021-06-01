<template>
  <MainLayout>
    <slider-product/>
    <kategori-product/>
    <product-populer/>
    <toko-terbaik/>
    <pilihan-terbaik/>
    <mungkin-kamu-suka/>
  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/Main.vue";
import SliderProduct from './SliderProduct.vue';
import KategoriProduct from './KategoriProduct.vue';
import ProductPopuler from './ProductPopuler.vue';
import TokoTerbaik from './TokoTerbaik.vue';
import PilihanTerbaik from './PilihanTerbaik.vue';
import MungkinKamuSuka from './MungkinKamuSuka.vue';

export default {
  components: {
    MainLayout,
    SliderProduct,
    KategoriProduct,
    ProductPopuler,
    TokoTerbaik,
    PilihanTerbaik,
    MungkinKamuSuka
  }
}
</script>