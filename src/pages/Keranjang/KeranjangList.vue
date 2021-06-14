<template>
  <div class="w-2/3">
    <h1 class="text-2xl font-bold mb-3">Keranjang</h1>
    <div class="sticky top-0 bg-white flex items-center justify-between border-b-4 py-2 mb-2">
      <div class="flex items-center ">
        <input type="checkbox" id="pilih_semua">
        <label for="pilih_semua" class="ml-3 font-semibold">Pilih Semua</label>
      </div>
      <button class="text-shopperly-green-400">Hapus</button>
    </div>
    <ul>
      <li v-for="(keranjang, i) of keranjangList" :key="i" class="py-3 border-b-2">
        <div class="flex items-center mb-5">
          <input type="checkbox" id="pilih_semua">
          <div class="ml-3">
            <label for="pilih_semua" class="text-lg font-bold">{{ keranjang.namaToko }}</label>
            <p>{{ keranjang.alamatToko}}</p>
          </div>
        </div>
        <ul>
          <li v-for="(barang, i) of keranjang.listBarang" :key="i" class="flex items-center pb-4">
            <input type="checkbox" id="pilih_semua">
            <img :src="barang.image" class="w-20 h-20 bg-gray-200 mx-4" alt="">
            <div class="text-sm">
              <h3>{{ barang.nama }}</h3>
              <h4 class="font-bold">{{ barang.harga }}</h4>
            </div>
          </li>
        </ul>
        <div class="flex w-full items-center justify-end text-sm">
          <button>Pindahkan ke Wishlist</button>
          <div class="h-4 w-px bg-gray-400 mx-3"></div>
          <button class="text-gray-400 hover:text-gray-500">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
          </button>
          <div class="w-1/5 ml-3">
            <Counter
              :jumlahItem="jumlah" 
              :maxItem="stock" 
              @counter="setJumlahBarang"
            />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

import Counter from "@/components/Counter.vue";

export default {
  components: {
    Counter
  },
  setup(){
    const keranjangList = reactive([
      {
        namaToko: 'Nama Toko',
        alamatToko: 'Alamat Toko',
        listBarang: [
          {
            image: '',
            nama: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus reiciendis amet id in magni quisquam eius, corrupti consequuntur qui libero.',
            harga: 'Rp. 500.000',
          }
        ]
      },
      {
        namaToko: 'Nama Toko',
        alamatToko: 'Alamat Toko',
        listBarang: [
          {
            image: '',
            nama: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus reiciendis amet id in magni quisquam eius, corrupti consequuntur qui libero.',
            harga: 'Rp. 1000',
          },
          {
            image: '',
            nama: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus reiciendis amet id in magni quisquam eius, corrupti consequuntur qui libero.',
            harga: 'Rp. 1.000.000',
          }
        ]
      },
      {
        namaToko: 'Nama Toko',
        alamatToko: 'Alamat Toko',
        listBarang: [
          {
            image: '',
            nama: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus reiciendis amet id in magni quisquam eius, corrupti consequuntur qui libero.',
            harga: 'Rp. 1000',
          },
          {
            image: '',
            nama: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus reiciendis amet id in magni quisquam eius, corrupti consequuntur qui libero.',
            harga: 'Rp. 1.000.000',
          }
        ]
      },
    ])

    const barang = reactive({
      jumlah: 1,
      stock: 10
    })

    const setJumlahBarang = (value) => {
      barang.jumlah = value
    }

    return {
      keranjangList,
      ...toRefs(barang),
      setJumlahBarang
    }
  }
}
</script>

<style>

</style>