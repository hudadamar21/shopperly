<template>
  <div class="border shadow rounded-md p-2">
    <Expandable 
      title="Ringkasan Belanja" 
      :expand="ringkasanBelanja"
      maxheight="max-h-20"
      borderBottom
    >
      <div class="pt-2 pb-5 leading-relaxed">
        <div class="flex items-center justify-between">
          <p>Total Harga (2 Barang)</p>
          <p>Rp 12.000.000</p>
        </div>
        <div class="flex items-center justify-between">
          <p>Total Diskon Barang</p>
          <p>Rp 12.000</p>
        </div>
      </div>
    </Expandable>
    <div class="px-3 py-5">
      <div class="flex items-center justify-between ">
        <h1 class="text-xl font-bold">Total Belanja</h1>
        <h3 class="font-semibold text-[#FA591D]">Rp 12.000.000</h3>
      </div>
      <p class="text-xs my-3 text-gray-600">
        Dengan mengaktifkan asuransi, Saya menyetujui 
        <span class="text-blue-400">syarat dan ketentuan yang berlaku.</span>
      </p>
      <router-link to="/checkout" class="block text-center mt-2 w-full px-4 py-2 rounded-md bg-shopperly-green-400 filter hover:brightness-110 text-lg font-semibold text-white">
        Checkout
      </router-link>
    </div>
  </div>
</template>

<script>
import Expandable from "@/components/Expandable.vue";
import { ref } from 'vue';

export default {
  components: {
    Expandable
  },
  setup(){
    const ringkasanBelanja = ref(true)

    return {
      ringkasanBelanja
    }
  }
}
</script>