<template>
  <div ref="elKeranjang" class="absolute top-full mt-1 md:right-40 p-3 mx-1 bg-white shadow-md border rounded min-h-32 min-w-1/3 z-10">
    <div class="text-gray-700">

      <!-- title and see more -->
      <div class="border-b pb-1 flex items-end justify-between font-medium">
        <h3>Keranjang ({{keranjangProductList.length}})</h3>
        <router-link :to="{ name: 'keranjang' }" class="text-xs text-shopperly-green-400 hover:text-shopperly-blue">selengkapnya</router-link>
      </div>

      <!-- product list on cart -->
      <ul class="my-1 pr-3 max-h-[25rem] overflow-auto">
        <li 
          v-for="(product, i) of keranjangProductList" 
          :key="i" 
          class="border-b flex items-center justify-between py-2 hover:bg-gray-100 cursor-pointer"
        >
          <div class="flex">
            <img :src="product.image" class="bg-gray-300 w-16 h-16 object-cover">
            <div class="ml-2">
              <h3 class="line-clamp-1 font-bold">{{ product.title }}</h3>
              <p class="text-sm">{{ product.jumlah }} Barang (100kg)</p>
            </div>
          </div>
          <p class="text-[#FA591D] w-1/3 text-right font-semibold">{{ product.price }}</p>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { formatPrice } from "@/utils/format";

import jaket_black from "@/assets/images/jaket_black.jpg";
import jaket_green from "@/assets/images/jaket_green.jpg";
import jaket_navy from "@/assets/images/jaket_navy.jpg";
import jaket_red from "@/assets/images/jaket_red.jpg";

export default {
  setup(){
    const productLists = reactive([
      {
        title: 'Title yang kepanjangan ya haha',
        image: jaket_black,
        jumlah: 200,
        price: 1200000000
      },
      {
        title: 'Title lumayan panjang',
        image: jaket_green,
        jumlah: 200,
        price: 2000000
      },
      {
        title: 'Title biasa',
        image: jaket_navy,
        jumlah: 5,
        price: 100000
      },
      {
        title: 'Title yang kepanjangan ya haha',
        image: jaket_red,
        jumlah: 200,
        price: 1200000000
      },
      {
        title: 'Title lumayan panjang',
        image: jaket_black,
        jumlah: 200,
        price: 2000000
      },
      {
        title: 'Title biasa',
        image: jaket_navy,
        jumlah: 5,
        price: 100000
      },
    ])

    const keranjangProductList = reactive(
      productLists.map(product => {
        return {
          ...product,
          price: formatPrice(product.price)
        }
      })
    )

    return {
      keranjangProductList
    }
  }
}
</script>