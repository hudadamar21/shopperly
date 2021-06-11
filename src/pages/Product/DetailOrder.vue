<template>
    <div class="border shadow-md rounded-md">

      <!-- Pilih Varian -->
      <Expandable 
        title="Pilih Varian" 
        :expand="pilihVarianOpen"
      >
        <div class="p-3 grid grid-cols-4 gap-3">
          <div v-for="i of 8" :key="i" class="bg-gray-300 w-full h-14 "></div>
        </div>
      </Expandable>

      <!-- Jumlah Barang -->
      <Expandable 
        title="Jumlah Barang" 
        :expand="jumlahBarangOpen"
      >
        <div class="flex items-center justify-between gap-3 pt-5 mx-4">
          <div class="px-2 py-1 w-[60%] flex items-center justify-between">
            <button class="button-counter" @click="decrementJumlahBarang()">-</button>
            <input ref="elementJumlahBarang" type="text" class="border-b-2 w-1/2 focus:outline-none focus:border-shopperly-green-400 text-center transition" @change="validateJumlahBarang" v-model="jumlahBarang">
            <button class="button-counter" @click="IncrementJumlahBarang()">+</button>
          </div>
          <p class="w-[40%] border-2 px-3 py-1 rounded font-semibold text-center">
            Stock: {{ stockBarang }}
          </p>
        </div>
        <div class="flex items-center justify-between border-2 px-3 p-2 my-5 rounded mx-4">
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
import { IconArrowDown, IconChat, IconLove, IconShare} from '@/components/icons'
import { reactive, ref, toRefs } from "vue";
import Expandable from "@/components/Expandable.vue";

export default {
  components: { 
    IconArrowDown, 
    IconChat, 
    IconLove, 
    IconShare, 
    Expandable
  },
  setup(){
    const detailOrder = reactive({
      pilihVarianOpen: true,
      jumlahBarangOpen: true,
    })

    const jumlahBarang = ref(1)
    const stockBarang = ref(10)
    const elementJumlahBarang = ref(null)

    const validateJumlahBarang = () => {
      // Jika jumlah barang lebih besar dari stock barang
      if(jumlahBarang.value > stockBarang.value) {

        // maka balikan nilainya sesuai stock yang tersedia
        jumlahBarang.value = stockBarang.value

        // dan berikan respon dengan mengubah border bawah menjadi merah
        elementJumlahBarang.value.classList.add('border-red-500','focus:border-red-500')

        // setalah 1 detik border akan kembali seperti semula
        setTimeout(() => {
          elementJumlahBarang.value.classList.remove('border-red-500','focus:border-red-500')
        }, 1000);
      }
    }

    const IncrementJumlahBarang = () => {
      if(jumlahBarang.value > 1){
        jumlahBarang.value--
      }
    }

    const decrementJumlahBarang = () => {
      if(jumlahBarang.value < stockBarang.value) {
        jumlahBarang.value++
      }
    }

    return {
      ...toRefs(detailOrder),
      jumlahBarang,
      stockBarang,
      elementJumlahBarang,
      validateJumlahBarang,
      IncrementJumlahBarang,
      decrementJumlahBarang
    }
  }
}
</script>

<style lang="postcss" scoped>
  .button-counter {
    @apply bg-shopperly-green-300 hover:bg-shopperly-green-400 text-white w-6 h-6 rounded-full flex items-center justify-center focus:outline-none
  }
</style>