<template>
  <li>
    <div class="flex items-center ">
      <input type="checkbox" id="pilih_semua">
      <img :src="barang.image" class="w-20 h-20 bg-gray-200 mx-4" alt="">
      <div class="text-sm">
        <h3>{{ barang.nama }}</h3>
        <h4 class="font-bold">{{ barang.harga }}</h4>
      </div>
    </div>
    <div class="flex w-full items-center justify-end text-sm mt-3">
      <button class="px-1 rounded text-gray-500 hover:text-gray-700">Pindahkan ke Wishlist</button>
      <div class="h-4 w-px bg-gray-400 mx-3"></div>
      <button class="text-gray-400 hover:text-gray-500 rounded-full p-1">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
      </button>
      <div class="w-1/3 lg:w-1/5 ml-1 lg:ml-3 ">
        <Counter
          :jumlahItem="jumlah" 
          :maxItem="stock" 
          @counter="setJumlahBarang"
        />
      </div>
    </div>
  </li>
</template>

<script>
import { reactive, toRefs } from "vue";

import Counter from "@/components/Counter.vue";

export default {
  components: {
    Counter
  },
  props: {
    barang: {
      type: Object,
      required: true
    }
  },
  setup(){
    const barang = reactive({
      jumlah: 1,
      stock: 10
    })

    const setJumlahBarang = (value) => {
      barang.jumlah = value
    }

    return {
      ...toRefs(barang),
      setJumlahBarang
    }
  }
}
</script>

<style>

</style>