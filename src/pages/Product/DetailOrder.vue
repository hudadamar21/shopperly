<template>
    <div class="border shadow-md rounded-md">

      <!-- Pilih Varian -->
      <Expandable 
        title="Pilih Varian" 
        :expand="pilihVarianOpen"
      >
        <div class="grid grid-cols-4 gap-3">
          <div v-for="i of 8" :key="i" class="bg-gray-300 w-full h-14 "></div>
        </div>
      </Expandable>

      <!-- Jumlah Barang -->
      <Expandable 
        title="Jumlah Barang" 
        :expand="jumlahBarangOpen"
      >
        <div class="flex items-center justify-between gap-3 pt-5 mx-1">
          <Counter 
            class="w-[60%]"
            :jumlahItem="jumlah" 
            :maxItem="stock" 
            @counter="setJumlahBarang"
          />
          <p class="w-[40%] border-2 px-3 py-1 rounded font-semibold text-center">
            Stock: {{ stock }}
          </p>
        </div>
        <div class="flex items-center justify-between border-2 px-3 p-2 my-5 rounded mx-1">
          <p>Harga Barang</p>
          <p class="text-xl font-bold">Rp 10.000.000</p>
        </div>
      </Expandable>

      <!-- Button Confirm -->
      <div class="p-3 pb-0">
        <button class="text-center w-full border-2 border-shopperly-green-400 text-shopperly-green-400 rounded-md py-2 mb-3 text-lg font-medium focus:outline-none">Keranjang +</button>
        <button class="text-center w-full bg-shopperly-green-400 hover:bg-opacity-90 text-white rounded-md py-2 mb-3 text-lg font-medium focus:outline-none">Pesan Sekarang</button>
      </div>

      <!-- Footer Icon -->
      <div class="flex items-center justify-center gap-3 text-gray-600 pt-1 p-3">
        <router-link to="" class="hover:opacity-80">
          <icon-chat class="inline-block"/>
          Chat
        </router-link>
        <div class="h-4 w-px bg-gray-300"></div>
        <router-link to="" class="hover:opacity-80">
          <icon-love class="inline-block"/>
          Wishlist
        </router-link>
        <div class="h-4 w-px bg-gray-300"></div>
        <router-link to="" class="hover:opacity-80">
          <icon-share class="inline-block"/>
          Share
        </router-link>
      </div>
    </div>
</template>

<script>
import { reactive, toRefs } from "vue";

import { IconArrowDown, IconChat, IconLove, IconShare} from '@/components/icons'
import Counter from "@/components/Counter.vue";
import Expandable from "@/components/Expandable.vue";

export default {
  components: { 
    IconArrowDown, 
    IconChat, 
    IconLove, 
    IconShare,
    Counter,
    Expandable
  },
  setup(){
    const detailOrder = reactive({
      pilihVarianOpen: true,
      jumlahBarangOpen: true,
    })

    const barang = reactive({
      jumlah: 1,
      stock: 10
    })

    const setJumlahBarang = (value) => {
      barang.jumlah = value
    }

    return {
      ...toRefs(detailOrder),
      ...toRefs(barang),
      setJumlahBarang
    }
  }
}
</script>