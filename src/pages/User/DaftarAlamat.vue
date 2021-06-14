<template>
  <div class="py-8 w-full flex flex-col gap-5">
    <div class="flex items-center justify-between">
      <div class="flex items-stretch w-1/2">
        <input type="text" class="w-full px-3 py-1.5 rounded-l border focus:ring-2 ring-opacity-30 ring-shopperly-green-400 text-sm" placeholder="cari alamat atau nama penerima">
        <button class="bg-gray-200 rounded-r px-2 ring-opacity-30 text-gray-500">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </div>
      <button 
        class="btn-daftar-alamat text-sm"
        @click="setOpenModal(true)"
      > Tambah Alamat Baru
      </button>
    </div>

    <!-- List Alamat -->
    <ul class="flex flex-col gap-10">
      <li 
        v-for="alamat of alamatList" 
        :key="alamat.alamatName"
        class="relative border shadow border-shopperly-green-400 rounded-md p-5"
      >
        <div class="absolute top-5 left-0 w-[0.6rem] h-7 rounded-r-lg bg-shopperly-green-400"></div>
        <div class="flex items-center justify-between">
          <div class="">
            <h1 class="font-bold">{{ alamat.alamatName }}</h1>
            <h1 class="font-bold mb-1">{{ alamat.username }}</h1>
            <p class="text-sm ">{{ alamat.nomor }}</p>
            <p class="text-sm ">{{ alamat.alamat }}</p>
            <div class="flex items-center gap-2 mt-3">
              <button class="px-2 py-1 rounded text-shopperly-green-400 hover:bg-gray-100">Ubah Alamat</button>
              <button class="px-2 py-1 rounded text-shopperly-green-400 hover:bg-gray-100">Jadikan Alamat Utama & Pilih</button>
              <button class="px-2 py-1 rounded text-shopperly-green-400 hover:bg-gray-100">Hapus</button>
            </div>
          </div>
          <button v-if="alamat.isUsed" class="ml-5 rounded-full p-2 hover:bg-gray-100 text-shopperly-green-400">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          </button>
          <button v-else class="btn-daftar-alamat">
            Pilih
          </button>
        </div>
      </li>
    </ul>

    <ModalTambahAlamatBaru v-if="openModal" @close="setOpenModal"/>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

import ModalTambahAlamatBaru from "./ModalTambahAlamatBaru.vue";

export default {
  components: {
    ModalTambahAlamatBaru
  },
  setup(){
    const alamatList = reactive([
      {
        alamatName: 'Rumah',
        username: 'Nama User',
        nomor: '08124124312',
        alamat: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque quod corporis rerum. Ducimus nobis velit ut eveniet, quos fuga rerum labore expedita magnam porro eos sit animi nostrum vero unde, accusantium ipsa dolorem debitis, hic provident itaque pariatur! Minima!',
        isUsed: true
      },
      {
        alamatName: 'Kantor',
        username: 'Nama User',
        nomor: '08124124312',
        alamat: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, omnis?',
        isUsed: false
      },
    ])

    const openModal = ref(false)

    const setOpenModal = (val) => {
      openModal.value = val
    }

    return {
      alamatList,
      openModal,
      setOpenModal
    }
  }
}
</script>

<style lang="postcss" scoped>
  .btn-daftar-alamat {
    @apply bg-shopperly-green-400 px-3 py-1.5 text-white rounded filter hover:brightness-110 ring-shopperly-green-400 ring-opacity-30
  }
</style>