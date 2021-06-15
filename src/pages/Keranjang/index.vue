<template>
  <MainLayout noFooter>
    <div class="flex flex-col lg:flex-row items-start justify-between w-full px-0 lg:px-10 gap-10">
      <KeranjangList />
      <div class="lg:sticky top-0 pt-3 w-full lg:w-1/3">
        <RingkasanBelanja/>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/Main.vue'
import KeranjangList from "./Keranjang.vue";
import RingkasanBelanja from "./RingkasanBelanja.vue";

export default {
  components: { 
    MainLayout,
    KeranjangList,
    RingkasanBelanja
  },
  
}
</script>