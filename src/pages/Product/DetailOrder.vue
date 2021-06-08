<template>
    <div class="border shadow-md rounded-md">

      <!-- Pilih Varian -->
      <div class="border-b">
        <header class="flex items-center justify-between p-3">
          <h2 class="text-lg font-medium">Pilih Varian</h2>
          <div 
            class="cursor-pointer hover:opacity-70" 
            @click="toggleDetailOrder('pilihVarianOpen')"
          >
            <icon-arrow-down/>
          </div>
        </header>
        <main 
          class="overflow-hidden transition-all duration-500"
          :class="detailOrder.pilihVarianOpen ? 'max-h-48' : 'max-h-0'"  
        >
        <div class="p-3 grid grid-cols-4 gap-3">
          <div v-for="i of 8" :key="i" class="bg-gray-300 w-full h-14 "></div>
        </div>
        </main>
      </div>

      <!-- Jumlah Barang -->
      <div>
        <header class="flex items-center justify-between p-3">
          <h2 class="text-lg font-medium">Jumlah Barang</h2>
          <div 
            class="cursor-pointer hover:opacity-70" 
            @click="toggleDetailOrder('jumlahBarangOpen')"
          > 
            <icon-arrow-down/>
          </div>
        </header>
        <main 
          class="px-3 border-b overflow-hidden transition-all duration-500"
          :class="detailOrder.jumlahBarangOpen ? 'max-h-48' : 'max-h-0'"
        >
          <div class="flex items-center justify-between gap-3 pt-3">
            <div class="px-2 py-1 w-[60%] flex items-center justify-between">
              <button class="button-counter" @click="setJumlahBarang('-')">-</button>
              <input ref="elementJumlahBarang" type="text" class="border-b-2 w-1/2 focus:outline-none focus:border-shopperly-green-400 text-center transition" @change="validateJumlahBarang" v-model="jumlahBarang">
              <button class="button-counter" @click="setJumlahBarang('+')">+</button>
            </div>
            <p class="w-[40%] border-2 px-3 py-1 rounded font-semibold text-center">
              Stock: {{ stockBarang }}
            </p>
          </div>
          <div class="flex items-center justify-between border-2 px-3 p-2 my-4 rounded">
            <p>Harga Barang</p>
            <p class="text-xl font-bold">Rp 10.000.000</p>
          </div>
        </main>
      </div>

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
import { reactive, ref } from "vue";
export default {
  components: { IconArrowDown, IconChat, IconLove, IconShare },
  setup(){
    const detailOrder = reactive({
      pilihVarianOpen: true,
      jumlahBarangOpen: true,
    })

    const toggleDetailOrder = (key) => {
      detailOrder[key] = !detailOrder[key]
    }

    const jumlahBarang = ref(1)
    const stockBarang = ref(10)
    const elementJumlahBarang = ref(null)

    const validateJumlahBarang = () => {
      if(jumlahBarang.value > stockBarang.value) {
        jumlahBarang.value = stockBarang.value
        elementJumlahBarang.value.classList.add('border-red-500','focus:border-red-500')
        setTimeout(() => {
          elementJumlahBarang.value.classList.remove('border-red-500','focus:border-red-500')
        }, 1000);
      }
    }

    const setJumlahBarang = (mode) => {
      if(mode === '-'){
        if(jumlahBarang.value > 1){
          jumlahBarang.value--
        }
      } else if(mode === '+'){
        if(jumlahBarang.value < stockBarang.value){
          jumlahBarang.value++
        }
      }
    }

    

    return {
      detailOrder,
      toggleDetailOrder,
      jumlahBarang,
      stockBarang,
      elementJumlahBarang,
      validateJumlahBarang,
      setJumlahBarang,
    }
  }
}
</script>

<style lang="postcss" scoped>
  .button-counter {
    @apply bg-shopperly-green-300 hover:bg-shopperly-green-400 text-white w-6 h-6 rounded-full flex items-center justify-center focus:outline-none
  }
</style>