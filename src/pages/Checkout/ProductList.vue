<template>
  <ul class="w-full lg:w-[60%] pb-5">
    <li class="w-full mb-8" v-for="i of 2" :key="i">
      <div class="flex items-center mt-3">
        <img src="" class="w-20 h-20 bg-gray-200 mr-4" alt="">
        <div class="text-sm">
          <h3 class="font-medium text-base">Nama Item disini dengan lengthnya sesuai dengan produknya</h3>
          <p>2 Barang (1kg)</p>
          <p class="font-bold"><span class="line-through font-normal mr-2">Rp 1.000.000</span>Rp 500.000</p>
        </div>
      </div>
      <div class="w-full lg:w-[80%]">
        <div class="mt-6 flex items-center">
          <label class="mr-2">Catatan: </label>
          <input type="text" placeholder="(optional) Tinggalkan Pesan ke penjual" class="border px-2 py-1.5 rounded-lg flex-grow text-sm">
        </div>
        <div class="flex items-center gap-3 justify-center mt-3">
          <input type="checkbox" class="w-5 h-5">
          <div>
            <h3 class="text-sm font-medium">Tambahkan Asuransi</h3>
            <p class="text-xs text-gray-600">Ganti rugi hingga 70% jika barang rusak total akibat pemakaian dalam 90 hari</p>
          </div>
          <router-link to="" class="text-sm text-shopperly-green-400 hover:underline">Pelajari</router-link>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>