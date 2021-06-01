<template>
  <div class="w-[80%]">
    <h1 class="font-bold">ULASAN (10)</h1>
    <p>Title judul produk tertulis disini sesuai dengan titlenya </p>
    <div class="w-full">
      <h3 class="my-8 font-bold">Semua Ulasan (10)</h3>

      <!-- list ulasan -->
      <div class="w-full">
        <div class="border border-gray-300 rounded-md flex p-5 w-full mb-5">
          <div class="flex flex-col items-center w-[15%]">
            <div class="rounded-full w-20 h-20 bg-gray-500">
              <img src="" alt="">
            </div>
            <h3 class="text-lg font-bold">Nama Pembeli</h3>
            <p class="text-sm">seminggu yang lalu</p>
          </div>
          <div class="py-5 pl-8 w-[85%]">
            <span class="flex iteme-center text-yellow-300">
              <icon-star/>
              <icon-star/>
              <icon-star/>
              <icon-star/>
              <icon-star class="text-gray-300"/>
            </span>
            <p class="mb-5">
              Barang nya keren banget dan saya sangat suka dengan kualitas barang dari Toko ini!
            </p>
            <div class="bg-shopperly-green-100 rounded-md flex p-4 w-full">
              <div class="flex flex-col items-center justify-center w-[15%]">
                <div class="rounded-full w-14 h-14 bg-gray-500">
                  <img src="" alt="">
                </div>
                <h3 class="text-sm font-bold">Nama Pembeli</h3>
                <p class="text-xs">1 jam yang lalu</p>
              </div>
              <p class="w-[85%] pl-3 text-sm">
                Terima kasih sudah memberikan ulasan yang bagus untuk toko ini, dukung terus kami agar selalu menjadi toko yang paling bagus di shopperly!hapy shopping happy shopperly! dan berikan pb-2 untuk jarak antar ulasan pembeli dan ulasan penjual.
              </p>
            </div>
          </div>
        </div>
        <div class="border border-gray-300 rounded-md flex p-5 w-full">
          <div class="flex flex-col items-center w-[15%]">
            <div class="rounded-full w-20 h-20 bg-gray-500">
              <img src="" alt="">
            </div>
            <h3 class="text-lg font-bold">Nama Pembeli</h3>
            <p class="text-sm">seminggu yang lalu</p>
          </div>
          <div class="py-5 pl-8 w-[85%]">
            <span class="flex iteme-center text-yellow-300">
              <icon-star/>
              <icon-star/>
              <icon-star/>
              <icon-star/>
              <icon-star class="text-gray-300"/>
            </span>
            <p class="mb-5">
              Barang nya keren banget dan saya sangat suka dengan kualitas barang dari Toko ini!
            </p>
            <div class="bg-shopperly-green-100 rounded-md flex p-4 w-full">
              <div class="flex flex-col items-center justify-center w-[15%]">
                <div class="rounded-full w-14 h-14 bg-gray-500">
                  <img src="" alt="">
                </div>
                <h3 class="text-sm font-bold">Nama Pembeli</h3>
                <p class="text-xs">1 jam yang lalu</p>
              </div>
              <p class="w-[85%] pl-3 text-sm">
                Terima kasih sudah memberikan ulasan yang bagus untuk toko ini, dukung terus kami agar selalu menjadi toko yang paling bagus di shopperly!hapy shopping happy shopperly! dan tunggu selalu produk produk dari toko kesayangan kalian dan jangan lupa untuk selalu memberikan rating tinggi  kepada kami karena rating mu membantu penjualan kita selalu dan terima  kasih terlah berbelanja di toko ini ! thank you so much dan selalu selalu belanja disini yaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaa intinya jika panjang maka background nya ikut turun sampai kebawah terus menerus kebawah dan selalu dan terus turun dan berikan padding py-2.5
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
export default {
  components: {
    IconStar
  }
}
</script>