<template>
  <div class="py-8 w-full flex flex-col gap-5 font-medium">
    <h1 class="text-xl font-bold">Profile Saya</h1>
    <div class="input-wrapper">
      <label for="nama" class="input-label">Nama</label>
      <input id="nama" type="text" class="flex-grow border px-3 py-2">
    </div>
    <div class="input-wrapper">
      <label class="input-label">Tanggal Lahir</label>
      <div class="flex-grow flex items-center gap-3">
        <select class="border px-3 py-2">
          <option selected disabled hidden>tanggal</option>
          <option v-for="tanggal of range(1,31)" :key="tanggal" :value="tanggal">{{ tanggal }}</option>
        </select>
        <select class="border px-3 py-2 flex-grow">
          <option selected disabled hidden>bulan</option>
          <option v-for="bulan of bulans" :key="bulan" :value="bulan">{{ bulan }}</option>
        </select>
        <select class="border px-3 py-2">
          <option selected disabled hidden>tahun</option>
          <option v-for="tahun of range(1980, 2021).reverse()" :key="tahun" :value="tahun">{{ tahun }}</option>
        </select>
      </div>
    </div>
    <div class="input-wrapper">
      <label class="input-label">Jenis Kelamin</label>
      <div class="flex items-center">
        <div class="flex items-center mr-5">
          <input id="laki-laki" type="radio" name="jenis_kelamin" value="laki-laki">
          <label for="laki-laki" class="ml-2 cursor-pointer">Laki-laki</label>
        </div>
        <div class="flex items-center">
          <input id="perempuan" type="radio" name="jenis_kelamin" value="perempuan">
          <label for="perempuan" class="ml-2 cursor-pointer">Perempuan</label>
        </div>
      </div>
    </div>
    <div class="mt-8 ">
      <h1 class="text-xl font-bold mb-5">Kontak Saya</h1>
      <div class="input-wrapper mb-5">
        <label for="email" class="input-label">Alamat Email</label>
        <input id="email" type="text" class="flex-grow border px-3 py-2">
      </div>
      <div class="input-wrapper">
        <label for="nomer_hp" class="input-label mb-4">Nomor HP</label>
        <div class="flex-grow">
          <input id="nomer_hp" type="text" class="w-full border px-3 py-2">
          <p class="text-xs mt-1">Kami akan mengirimkan kode verifikasi melalui SMS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(){
    const bulans = ref([
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'July',
      'Agustus',
      'September',
      'November',
      'Desember'
    ])

    const range = (min, max) => {
      let result = []
      for (let i = min; i <= max; i++) {
        result.push(i)     
      }
      return result
    }

    return {
      bulans,
      range
    }
  }
}
</script>

<style>
  .input-wrapper {
    @apply flex flex-col lg:flex-row items-stretch md:items-center
  }
  .input-label {
    @apply w-full lg:w-1/4 mb-1 lg:mb-0
  }
</style>