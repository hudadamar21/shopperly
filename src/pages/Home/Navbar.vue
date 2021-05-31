<template>
  <nav class="relative h-20 bg-white flex items-center justify-evenly text-gray-700 rounded-b-3xl shadow mb-10 px-6 md:px-10">

    <!-- Brand Title -->
    <h1 class="brand hidden md:block text-3xl md:text-5xl pr-5 text-gradient bg-gradient-to-r from-shopperly-blue to-shopperly-green-300">Shopperly</h1>

    <!-- Search Product -->
    <div class="relative flex-grow">
      <input
      type="text" 
      placeholder="Cari Produk.."
      class="px-3 py-1 w-full rounded-lg border-2 border-shopperly-green-200 focus:outline-none focus:ring ring-shopperly-green-200 transition">
      <button class="absolute top-1/2 transform -translate-y-1/2 right-3 rounded-full focus:outline-none text-shopperly-green-400 hover:text-shopperly-green-300 transition">
        <icon-search/>
      </button>
    </div>

    <!-- Menus -->
    <div class="flex items-center pl-5 h-full">
      <ul class="menu">
        <li class="" @click="showKeranjang = !showKeranjang">

          <div class="relative">
            <!-- keranjang count -->
            <div class="absolute -top-2 -right-2 h-3 md:h-4 w-3 md:w-4 rounded-full bg-red-500 text-[8px] md:text-[10px] grid place-items-center text-white">3</div>

            <icon-keranjang/>
          </div>
        </li>
        <li>
          <icon-notifikasi/>
        </li>
        <li>
          <icon-pesan/>
        </li>
      </ul>
      <div class="h-[80%] w-px bg-shopperly-green-100 mx-5"></div>
      <ul class="menu" >
        <li>
          <icon-toko/>
        </li>
        <li class="!w-auto !rounded-md" :class="{'px-1 md:px-2' : !isAuthenticate}">
          <router-link v-if="isAuthenticate" to="/login">
            <icon-user/>
          </router-link>
          <router-link v-else to="/login" class="text-base md:text-lg font-semibold flex items-center">
            login
          </router-link>
        </li>
      </ul>
    </div>
    <Keranjang v-if="showKeranjang" />
  </nav>
</template>

<script>
import { ref } from "vue";
import { 
  IconKeranjang, 
  IconNotifikasi, 
  IconPesan, 
  IconToko, 
  IconUser,
  IconSearch
} from '../../components/icons';
import Keranjang from '../../components/Keranjang.vue';

export default {
  components: { 
    IconKeranjang,
    IconNotifikasi,
    IconPesan,
    IconToko,
    IconUser,
    IconSearch,
    Keranjang 
  },
  setup(){
    const isAuthenticate = ref(false)
    const showKeranjang = ref(false)
    return {
      isAuthenticate,
      showKeranjang
    }
  }
}
</script>

<style lang="postcss">
ul.menu {
  @apply flex items-center gap-3
}
ul.menu li {
  @apply w-6 md:w-10 h-6 md:h-10 rounded-full grid place-items-center text-shopperly-green-400 hover:bg-shopperly-green-100 cursor-pointer transition duration-200
}
</style>