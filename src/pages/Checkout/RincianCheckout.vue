<template>
  <Expandable title="Alamat Pengiriman" maxheight="max-h-64" borderBottom>
    <div class="text-sm border-b-2 py-2 pb-4">
      <h1 class="font-medium">Nama User <span class="font-normal">(Rumah)</span></h1>
      <h2 class="font-medium py-1">0813241212342</h2>
      <p class="text-xs text-gray-700">Jl. Duren I No.129, Rangkapan Jaya Baru, Kec. Duren Mas, Kota Depok, Jawa Barat 16434 Pancoran Mas, Kota Depok, 16434
      </p>
    </div>
    <div class="py-3 flex gap-3 text-xs">
      <button class="rounded ring-2 ring-gray-300 font-medium p-1.5">
        Pilih Alamat Lain
      </button>
      <button class="rounded ring-2 ring-gray-300 font-medium p-1.5">
        Kirim Ke Beberapa Alamat
      </button>
    </div>
  </Expandable>
  <Expandable title="Ringkasan Belanja">
    <div class="flex flex-col w-full pt-2 pb-4 text-sm text-gray-700 border-b-2 border-gray-300">
      <div class="flex justify-between">
        <span>Total Harga (2 barang)</span>
        <span >Rp 12.000.000</span>
      </div>
      <div class="flex justify-between">
        <span>Total Ongkir</span>
        <span >Rp 12.000</span>
      </div>
      <div class="flex justify-between">
        <span>Asuransi</span>
        <span >Rp 1.000</span>
      </div>
    </div>
  </Expandable>
  <div class="px-3">
    <div class="flex items-center justify-between font-medium">
      <h1 class="text-xl">Total Belanja</h1>
      <p class="text-[#FA591D]">Rp 12.000.000</p>
    </div>
    <p class="text-xs mt-3">
      Dengan mengaktifkan asuransi, Saya menyetujui  <span class="text-shopperly-lightblue">syarat dan ketentuan yang berlaku.</span>
    </p>
    <button class="bg-shopperly-green-400 px-3 py-1.5 rounded text-white w-full my-4">Pilih Pembayaran</button>
  </div>
</template>

<script>
import Expandable from "@/components/Expandable.vue";
export default {
  components: {
    Expandable
  }
}
</script>

<style>

</style>