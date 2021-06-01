<template>
  <MainLayout>
    <detail-product/>
    <!-- Ulasan -->
    <ulasan-product/>
  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/Main.vue";
import DetailProduct from './DetailProduct.vue';
import UlasanProduct from './UlasanProduct.vue';

export default {
  components: {
    MainLayout,
    DetailProduct,
    UlasanProduct
  }
}
</script>