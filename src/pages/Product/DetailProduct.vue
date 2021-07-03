<template>
  <div class="relative pt-5 flex flex-col items-center justify-center lg:items-start lg:flex-row w-full">

    <!-- Image Product and Info Toko -->
    <div class="mb-4 lg:mb-0 w-full lg:w-[35%]">
      <!-- Images Product -->
      <div class="mb-8 flex flex-col items-center">
        <div class="w-full lg:w-[300px] h-[400px] bg-shopperly-blue rounded-md mb-2">
          <img :src="selectedImage" class="object-cover h-full w-full object-center" alt="">
        </div>
        <div class="flex items-center gap-2">
          <div 
            v-for="(image, index) of images" 
            :key="index" 
            @click="setSelectedImage(image)"
            class="w-1/4 bg-black rounded overflow-hidden cursor-pointer filter hover:brightness-105" 
            :class="{
              'border-2 border-shopperly-green-400' : selectedImage === image,
            }"
          >
            <img 
              :src="image" 
              class="h-full w-full object-cover"
              :class="selectedImage !== image ? 'opacity-80' : ''" 
              alt="product image"
            >
          </div>
        </div>
      </div>

      <!-- Info Toko -->
      <div class="hidden lg:block">
        <div class="flex items-center border-2 border-shopperly-green-400 p-3 rounded-sm">
          <div class="rounded-full w-16 h-16 bg-shopperly-green-400 overflow-hidden">
            <img src="" class="w-full h-full object-cover" alt="">
          </div>
          <div class="ml-3">
            <h2 class="font-bold">NAMA TOKO DISINI Terbaik</h2>
            <p class="text-sm">Online <span class="font-medium">1 jam yang lalu</span> </p>
            <p class="flex items-center text-sm">
              <icon-star class="text-yellow-300"/>
              <span class="ml-1 mr-2 font-semibold">4.8</span>
              rata rata ulasan
            </p>
          </div>
        </div>
        <div class="py-2 border-2 border-shopperly-green-400 hover:bg-shopperly-green-400 hover:text-white transition duration-75 cursor-pointer rounded-b-xl mt-2 grid place-items-center font-bold text-xl">
          FOLLOW
        </div>
      </div>
    </div>

    <!-- Product Description -->
    <div class="mb-5 lg:mb-0 lg:ml-10 lg:mr-8 w-full lg:w-[50%]">
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
        <p class="line-clamp-6">
          Deskripsi produk akan tertulis disini dan panjang tulisannya bebas sampai kebawah dan tidak ada batasan tapi hanya 8 baris yang bisa di lihat langsung dan jika lebih dari 8 baris maka akan muncul tulisan tampilkan semuanya dan jika di tekan maka akan membuka semua textnya. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero impedit facere nesciunt voluptas totam facilis quae libero consequuntur laborum ratione? Suscipit rerum laudantium harum maiores nisi voluptas
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit exercitationem quia, hic sint nobis voluptate vero aliquam magnam architecto veritatis natus amet earum consequuntur officiis sed esse nemo dolorum ullam!
        </p>
        <a class="text-sm inline text-shopperly-green-400 hover:underline cursor-pointer">
          Tampilkan Semuanya
        </a>
      </div>
      <div class="border-t p-3">
        <h1 class="font-bold mb-3">Pengiriman</h1>
        <p class="mb-2">Dikirim dari <span class="font-medium">Jakarta</span></p>
        <p class="mb-2">Ongkir Regular 10rb</p>
        <p class="text-gray-400 mb-2">Estimasi tiba besok 20 april</p>
        <div class="flex items-center justify-between">
          <p>
            Kurir lainnya: <span class="bg-gray-300 rounded px-1">Instan</span>
          </p>
          <a class="text-shopperly-green-400 hover:underline cursor-pointer">Lihat kurir lainnya</a>
        </div>
      </div>
    </div>

    <!-- Order Detail -->
    <div class="sticky top-0 items-start w-[90%] lg:w-[35%] py-5">
      <DetailOrder/>
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
import DetailOrder from './DetailOrder.vue';
export default {
  components: {
    IconStar,
    DetailOrder
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