<template>
  <div class="w-full lg:w-[80%] mt-20">
    <h1 class="font-bold">ULASAN (10)</h1>
    <p>Title judul produk tertulis disini sesuai dengan titlenya </p>
    <div class="w-full">
      <h3 class="my-8 font-bold">Semua Ulasan (10)</h3>

      <!-- list ulasan -->
      <div class="w-full">
        <div v-for="(ulasan, index) of ulasanList" :key="index" class="border border-gray-300 rounded-md flex flex-col lg:flex-row p-5 w-full mb-3">
          <div class="flex flex-row lg:flex-col items-center lg:w-[15%]">
            <div class="rounded-full w-16 lg:w-20 h-16 lg:h-20 bg-gray-500 mr-3 lg:mr-0">
              <img src="" alt="">
            </div>
            <div>
              <h3 class="text-base lg:text-lg font-bold">{{ ulasan.namaPembeli }}</h3>
              <p class="text-sm">{{ ulasan.waktuBerlalu }}</p>
            </div>
          </div>
          <div class="py-5 lg:pl-8 lg:w-[85%]">
            <span class="flex iteme-center text-yellow-300">
              <icon-star/>
              <icon-star/>
              <icon-star/>
              <icon-star/>
              <icon-star class="text-gray-300"/>
            </span>
            <p class="mb-5">
              {{ ulasan.ulasan }}
            </p>
            <div class="bg-shopperly-green-100 rounded-md flex flex-col lg:flex-row p-4 w-full">
              <div class="flex flow-row lg:flex-col items-center lg:w-[15%] mb-2 lg:mb-0">
                <div class="rounded-full w-12 lg:w-14 h-12 lg:h-14 bg-gray-500 mr-3 lg:mr-0">
                  <img src="" alt="">
                </div>
                <div>
                  <h3 class="text-sm font-bold">{{ ulasan.tanggapanToko.namaToko }}</h3>
                  <p class="text-xs">{{ ulasan.tanggapanToko.waktuBerlalu }}</p>
                </div>
              </div>
              <p class="w-[85%] pl-3 text-sm">
               {{  ulasan.tanggapanToko.tanggapan }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { IconStar } from "@/components/icons";
import { reactive } from 'vue';
export default {
  components: {
    IconStar
  },
  setup(){
    const ulasanList = reactive([
      {
        namaPembeli: 'Nama Pembeli',
        waktuBerlalu: 'seminggu yang lalu',
        ulasan: 'Barang nya keren banget dan saya sangat suka dengan kualitas barang dari Toko ini!',
        tanggapanToko: {
          namaToko: 'Nama Toko',
          waktuBerlalu: '1 jam yang lalu',
          tanggapan: 'Terima kasih sudah memberikan ulasan yang bagus untuk toko ini, dukung terus kami agar selalu menjadi toko yang paling bagus di shopperly!hapy shopping happy shopperly! dan berikan pb-2 untuk jarak antar ulasan pembeli dan ulasan penjual.'
        }
      },
      {
        namaPembeli: 'Nama Pembeli',
        waktuBerlalu: 'seminggu yang lalu',
        ulasan: 'Barang nya keren banget dan saya sangat suka dengan kualitas barang dari Toko ini!!',
        tanggapanToko: {
          namaToko: 'Nama Toko',
          waktuBerlalu: '2 jam yang lalu',
          tanggapan: 'Terima kasih sudah memberikan ulasan yang bagus untuk toko ini, dukung terus kami agar selalu menjadi toko yang paling bagus di shopperly!hapy shopping happy shopperly! dan tunggu selalu produk produk dari toko kesayangan kalian dan jangan lupa untuk selalu memberikan rating tinggi  kepada kami karena rating mu membantu penjualan kita selalu dan terima  kasih terlah berbelanja di toko ini ! thank you so much dan selalu selalu belanja disini yaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa intinya jika panjang maka background nya ikut turun sampai kebawah terus menerus kebawah dan selalu dan terus turun dan berikan padding py-2.5'
        }
      },
    ])

    return {
      ulasanList
    }
  }
}
</script>