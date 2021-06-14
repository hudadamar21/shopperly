<template>
  <div ref="elKeranjang" class="absolute top-full mt-1 md:right-40 p-3 mx-1 bg-white shadow-md border rounded min-h-32 min-w-1/3 z-10">
    <div class="text-gray-700">

      <!-- title and see more -->
      <div class="border-b pb-1 flex items-end justify-between font-medium">
        <h3>Keranjang ({{keranjangProductList.length}})</h3>
        <router-link :to="{ name: 'keranjang' }" class="text-xs text-shopperly-green-400 hover:text-shopperly-blue">selengkapnya</router-link>
      </div>

      <!-- product list on cart -->
      <div class="my-1 pr-3 max-h-[25rem] overflow-auto">
        <div v-for="(product, i) of keranjangProductList" :key="i" class="border-b flex items-center justify-between py-2">
          <div class="flex">
            <img src="#" class="bg-gray-300 w-16 h-16 object-cover">
            <div class="ml-2">
              <h3 class="line-clamp-1 font-bold">{{ product.title }}</h3>
              <p class="text-sm">{{ product.jumlah }} Barang (100kg)</p>
            </div>
          </div>
          <p class="text-red-500 w-1/3 text-right font-semibold">{{ product.price }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { formatPrice } from "@/utils/format";

export default {
  setup(){
    const productLists = reactive([
      {
        title: 'Title yang kepanjangan ya haha',
        jumlah: 200,
        price: 1200000000
      },
      {
        title: 'Title lumayan panjang',
        jumlah: 200,
        price: 2000000
      },
      {
        title: 'Title biasa',
        jumlah: 5,
        price: 100000
      },
      {
        title: 'Title yang kepanjangan ya haha',
        jumlah: 200,
        price: 1200000000
      },
      {
        title: 'Title lumayan panjang',
        jumlah: 200,
        price: 2000000
      },
      {
        title: 'Title biasa',
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

<style>

</style>