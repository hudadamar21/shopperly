<template>
  <MainLayout>
    <detail-product/>
    <!-- Ulasan -->
    <ulasan-product/>
    <hr class="mt-20">
    <lainnya-dari-toko-ini/>
    <product-yang-terkait/>
  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/Main.vue";
import DetailProduct from './DetailProduct.vue';
import UlasanProduct from './UlasanProduct.vue';
import LainnyaDariTokoIni from './LainnyaDariTokoIni.vue';
import ProductYangTerkait from './ProductYangTerkait.vue';

export default {
  components: {
    MainLayout,
    DetailProduct,
    UlasanProduct,
    LainnyaDariTokoIni,
    ProductYangTerkait
  }
}
</script>