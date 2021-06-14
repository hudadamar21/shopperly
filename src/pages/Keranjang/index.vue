<template>
  <MainLayout noFooter>
    <div class="flex items-start justify-between w-full px-10 gap-10">
      <KeranjangList />
      <div class="sticky top-0 pt-3 w-1/3">
        <RingkasanBelanja/>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/Main.vue'
import KeranjangList from "./KeranjangList.vue";
import RingkasanBelanja from "./RingkasanBelanja.vue";

export default {
  components: { 
    MainLayout,
    KeranjangList,
    RingkasanBelanja
  },
  
}
</script>

<style>

</style>