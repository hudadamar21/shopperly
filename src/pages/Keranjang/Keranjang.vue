<template>
  <div class="w-full md:w-2/3">
    <h1 class="text-2xl font-bold mb-3">Keranjang</h1>
    <div class="sticky top-0 bg-white flex items-center justify-between border-b-4 py-2 mb-2">
      <div class="flex items-center ">
        <input type="checkbox" id="pilih_semua">
        <label for="pilih_semua" class="ml-3 font-semibold">Pilih Semua</label>
      </div>
      <button class="text-shopperly-green-400 px-1 rounded">Hapus</button>
    </div>
    <ul>
      <li v-for="(keranjang, i) of keranjangList" :key="i" class="pt-5 border-b-2">
        <div class="flex items-center">
          <input type="checkbox" id="pilih_semua">
          <div class="ml-3">
            <label for="pilih_semua" class="text-lg font-bold">{{ keranjang.namaToko }}</label>
            <p>{{ keranjang.alamatToko}}</p>
          </div>
        </div>
        <ul>
          <KeranjangList
            v-for="(barang, i) of keranjang.listBarang"
            :key="i"
            :barang="barang"
            :class="[
              'py-5',
              i !== keranjang.listBarang.length - 1 ? 'border-b' : ''
            ]"
          />
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue'

import KeranjangList from "./KeranjangItem.vue";

import jaket_black from "@/assets/images/jaket_black.jpg";
import jaket_green from "@/assets/images/jaket_green.jpg";
import jaket_navy from "@/assets/images/jaket_navy.jpg";
import jaket_red from "@/assets/images/jaket_red.jpg";

export default {
  components: {
    KeranjangList
  },
  setup(){
    const keranjangList = reactive([
      {
        namaToko: 'Nama Toko',
        alamatToko: 'Alamat Toko',
        listBarang: [
          {
            image: jaket_black,
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
            image: jaket_red,
            nama: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus reiciendis amet id in magni quisquam eius, corrupti consequuntur qui libero.',
            harga: 'Rp. 1000',
          },
          {
            image: jaket_navy,
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
            image: jaket_green,
            nama: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus reiciendis amet id in magni quisquam eius, corrupti consequuntur qui libero.',
            harga: 'Rp. 1000',
          },
          {
            image: jaket_red,
            nama: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus reiciendis amet id in magni quisquam eius, corrupti consequuntur qui libero.',
            harga: 'Rp. 1.000.000',
          }
        ]
      },
    ])

    return {
      keranjangList
    }
  }
}
</script>