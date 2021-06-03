<template>
  <div class="pt-5 flex flex-col items-center lg:flex-row w-full lg:w-[80%]">

    <!-- Image Product and Info Toko -->
    <div class="mb-4 lg:mb-0 lg:mr-12">

      <!-- Images Product -->
      <div class="mb-8">
        <div class="w-[300px] h-[400px] bg-shopperly-blue rounded-md mb-2">
          <img :src="selectedImage" class="object-cover h-full w-full object-center" alt="">
        </div>
        <div class="flex items-center gap-2">
          <div 
            v-for="(image, index) of images" 
            :key="index" 
            @click="setSelectedImage(image)"
            class="w-20 h-20 bg-black rounded overflow-hidden cursor-pointer filter hover:brightness-105" 
            :class="{
              'border-2 border-shopperly-green-400' : selectedImage === image,
            }"
          >
            <img :src="image" :class="selectedImage !== image ? 'opacity-80' : ''" alt="product image ">
          </div>
        </div>
      </div>

      <!-- Info Toko -->
      <div class="hidden lg:block">
        <div class="flex items-center border border-shopperly-green-400 px-5 py-2 rounded-sm">
          <div class="rounded-full w-16 h-16 bg-shopperly-green-400">
            <img src="" alt="">
          </div>
          <div class="ml-3">
            <h2 class="font-bold ">NAMA TOKO DISINI Terbaik</h2>
            <p>Online <span class="font-medium">1 jam yang lalu</span> </p>
            <p class="flex items-center">
              <icon-star class="text-yellow-300"/>
              <span class="mr-1 font-semibold">4.8</span>
              rata rata ulasan
            </p>
          </div>
        </div>
        <div class="py-2 border border-shopperly-green-400 rounded-b-xl mt-2 grid place-items-center font-bold text-xl">
          FOLLOW
        </div>
      </div>
    </div>

    <!-- Product Description -->
    <div class="">
      <h1 class="text-lg font-bold mb-2">
        Jaket Sweater Hoodie Zipper Polos Pria
      </h1>
      <div class="flex items-center">
        <p>Terjual <span>10</span></p>
        <div class="mx-1">•</div>
        <div class="flex items-center">
          <icon-star class="inline text-yellow-300"/>
          <span class="font-medium">5</span> 
          <p class="ml-1">(100 ulasan)</p>
        </div>
      </div>
      <h2 class="text-4xl font-bold mt-3 mb-6">Rp1.000.000</h2>
      <ul class="border-t border-b flex items-center gap-5 font-semibold">
        <li class="px-3 py-1 hover:text-shopperly-green-400 cursor-pointer text-shopperly-green-400 border-b-2 border-shopperly-green-400">
          Detail
        </li>
        <li class="px-3 py-1 hover:text-shopperly-green-400 cursor-pointer text-gray-600 ">
          Catatan Penjual
        </li>
      </ul>
      <div class="flex flex-col justify-start gap-3 py-5 text-[0.92rem]">
        <h5>Kondisi : <span class="font-medium ml-2">Baru</span></h5>
        <h5>Berat : <span class="font-medium ml-2">100kg</span></h5>
        <h5>Kategori : <span class="text-shopperly-green-400 font-medium ml-2">100kg</span></h5>
        <p>
          Deskripsi produk akan tertulis disini dan panjang tulisannya bebas sampai kebawah dan tidak ada batasan tapi hanya 8 baris yang bisa di lihat langsung dan jika lebih dari 8 baris maka akan muncul tulisan tampilkan semuanya dan jika di tekan maka akan membuka semua textnya. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero impedit facere nesciunt voluptas totam facilis quae libero consequuntur laborum ratione? Suscipit rerum laudantium harum maiores nisi voluptas
        </p>
        <a class="text-sm inline text-shopperly-green-400 hover:underline cursor-pointer">
          Tampilkan Semuanya
        </a>
      </div>
      <div class="border-t p-3">
        <h1 class="font-bold mb-3">Pengiriman</h1>
        <p>Dikirim dari <span class="font-medium">Jakarta</span></p>
        <p>Ongkir Regular 10rb</p>
        <p class="text-gray-400">Estimasi tiba besok 20 april</p>
        <div class="flex items-center justify-between">
          <p>
            Kurir lainnya: <span class="bg-gray-300 rounded px-1">Instan</span>
          </p>
          <a class="text-shopperly-green-400 hover:underline cursor-pointer">Lihat kurir lainnya</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { IconStar } from "@/components/icons";
import { reactive, ref } from 'vue';

import jaket_red from '@/assets/images/jaket_red.jpg'
import jaket_green from '@/assets/images/jaket_green.jpg'
import jaket_navy from '@/assets/images/jaket_navy.jpg'
import jaket_black from '@/assets/images/jaket_black.jpg'
export default {
  components: {
    IconStar
  },
  setup(){
    const images = reactive([
      jaket_red,
      jaket_green,
      jaket_navy,
      jaket_black,
    ])

    const selectedImage = ref(jaket_red)

    const setSelectedImage = (image) => {
      selectedImage.value = image
    }

    return {
      selectedImage,
      setSelectedImage,
      images
    }
  }
}
</script>