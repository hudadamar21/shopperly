<template>
  <navbar/>

  <section class="container px-5 md:px-16 m-auto mb-10 text-shopperly-gray-700">
    <slider-product/>
    <kategori-product/>
    <product-populer/>
    <toko-terbaik/>
    <pilihan-terbaik/>
    <mungkin-kamu-suka/>
  </section>

  <app-footer/>
</template>

<script>
import Navbar from "./Navbar.vue";
import SliderProduct from './SliderProduct.vue';
import KategoriProduct from './KategoriProduct.vue';
import ProductPopuler from './ProductPopuler.vue';
import TokoTerbaik from './TokoTerbaik.vue';
import PilihanTerbaik from './PilihanTerbaik.vue';
import MungkinKamuSuka from './MungkinKamuSuka.vue';
import AppFooter from "./AppFooter.vue";

export default {
  components: {
    Navbar,
    SliderProduct,
    KategoriProduct,
    ProductPopuler,
    TokoTerbaik,
    PilihanTerbaik,
    MungkinKamuSuka,
    AppFooter
  }
}
</script>

<style
    KategoriProduct>

</style>