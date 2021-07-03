<template>

  <!-- Jenis Toko, Lokasi -->
  <template v-for="data of [jenis_toko, lokasi]" :key="data.title">
    <Expandable :title="data.title" :expand="true" :borderBottom="true">
      <div v-for="data of data.options" :key="data.name">
        <input class="mr-2" type="checkbox" :checked="data.checked" :id="data.name">
        <label :for="data.name">{{ data.name }}</label>
      </div>
    </Expandable>
  </template>

  <!-- Range harga -->
  <Expandable :title="range_harga.title" :expand="true" :borderBottom="true" maxheight="max-h-64">
    <div class="flex items-center rounded-md border overflow-hidden mb-2">
      <p class="py-1 px-2 bg-gray-300">Rp</p>
      <input type="text" class="px-2 py-1 w-full" placeholder="Harga minimum">
    </div>
    <div class="flex items-center rounded-md border overflow-hidden mb-2">
      <p class="py-1 px-2 bg-gray-300">Rp</p>
      <input type="text" class="px-2 py-1 w-full" placeholder="Harga maximum">
    </div>
    <button class="px-3 py-1 rounded-2xl border mt-2">5000 - 15rb</button>
    <button class="px-3 py-1 rounded-2xl border mt-2">15rb - 50rb</button>
    <button class="px-3 py-1 rounded-2xl border my-2">50rb - 100rb</button>
  </Expandable>

  <!-- Kondisi, Pengiriman, Rating, Penawaran -->
  <template v-for="data of [kondisi, pengiriman, rating, penawaran]" :key="data.title">
    <Expandable :title="data.title" :expand="true" :borderBottom="true">
      <div v-for="data of data.options" :key="data.name">
        <input class="mr-2" type="checkbox" :checked="data.checked" :id="data.name">
        <label :for="data.name">{{ data.name }}</label>
      </div>
    </Expandable>
  </template>

  <!-- Warna -->
  <Expandable :title="warna.title" :expand="true" :borderBottom="true">
    <div class="flex gap-3 flex-wrap">
      <div
        :title="warna.split('-')[1]"
        v-for="warna of warna.options" 
        :key="warna" 
        :class="[
          warna, 
          warna === 'bg-white' ? 'border-2 border-gray-300' : '',
          'rounded-full w-10 h-10', 
        ]"
      ></div>
    </div>
  </Expandable>
</template>

<script>
import { reactive } from "vue";
import Expandable from "@/components/Expandable.vue";
export default {
  components: {
    Expandable
  },
  setup(){
    const jenis_toko = reactive({
      title: 'Jenis Toko',
      options: [
        { name: 'Official Store', checked: false },
        { name: 'Power Merchant Pro', checked: false },
        { name: 'Power Merchant', checked: true },
      ]
    })

    const lokasi = reactive({
      title: 'Lokasi',
      options: [
        { name: 'Depok', checked: false },
        { name: 'Jakarta', checked: false },
        { name: 'Bogor', checked: true },
        { name: 'Tanggerang', checked: false },
        { name: 'Solo', checked: true },
      ]
    })

    const range_harga = reactive({
      title: 'Harga',
      harga_min: 10000,
      hargs_max: 200000
    })

    const kondisi = reactive({
      title: 'Kondisi',
      options: [
        { name: 'Baru', checked: false },
        { name: 'Bekas', checked: true },
      ]
    })

    const pengiriman = reactive({
      title: 'Pengiriman',
      options: [
        { name: 'Kurir Instan', checked: false },
        { name: 'SiCepat', checked: true },
        { name: 'AnterAja', checked: true },
        { name: 'Gosend', checked: false },
        { name: 'Gojek', checked: false },
        { name: 'Tiki', checked: false },
        { name: 'J&T', checked: true },
        { name: 'Pos Indonesia', checked: false },
      ]
    })

    const rating = reactive({
      title: 'Rating',
      options: [
        { name: '4 Keatas', checked: true },
      ]
    })

    const penawaran = reactive({
      title: 'Penawaran',
      options: [
        { name: 'Cashback', checked: false },
        { name: 'Gratis Ongkir', checked: false },
        { name: 'COD', checked: true },
        { name: 'Diskon', checked: false },
        { name: 'Harga Grosir', checked: true },
      ]
    })

    const warna = reactive({
      title: 'Penawaran',
      options: [
        'bg-red-500',
        'bg-blue-500',
        'bg-yellow-500',
        'bg-black',
        'bg-pink-500',
        'bg-green-500',
        'bg-purple-500',
        'bg-white'
      ],
      selected: 'bg-red-500'
    })

    return {
      jenis_toko,
      lokasi,
      range_harga,
      kondisi,
      pengiriman,
      rating,
      penawaran,
      warna
    }
  }
}
</script>

<style>
  
</style>