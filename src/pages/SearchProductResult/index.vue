<template>
  <MainLayout>
    <div class="flex gap-10 mb-32">
      <div class="w-[20%] h-[max-content] border rounded-md">
        <h1 class="text-center py-2 font-semibold text-2xl border-b">Filter</h1>
        <SearchFilter/>
      </div>
      <div class="w-[80%]">
        <ul class="w-full rounded-b-xl border flex items-center justify-center gap-5 mb-10">
          <li class="flex items-center gap-2 border-t-4 p-2 border-shopperly-lightblue hover:text-shopperly-lightblue cursor-pointer text-shopperly-lightblue">
            <icon-box-product/>
            <p class="text-lg font-semibold ">Product</p>
          </li>
          <li class="flex items-center gap-2 border-t-4 p-2 border-transparent hover:text-shopperly-lightblue cursor-pointer text-gray-400">
            <icon-store/>
            <p class="text-lg font-semibold ">Toko</p>
          </li>
        </ul>
        <div class="flex items-center justify-between">
          <p class="text-sm">Menampilkan 1 - 60 barang dari total 18rb+ untuk "{{ query }}"</p>
          <div>
            <label for="order" class="pr-2">Urutkan</label>
            <select id="order" class="rounded-t-lg border px-2 py-1.5">
              <option value="paling_sesuai">Paling Sesuai</option>
              <option value="ulasan">ulasan</option>
              <option value="terbaru">terbaru</option>
              <option value="harga_tertinggi">Harga Tertinggi</option>
              <option value="harga_terendah">Harga Terendah</option>
            </select>
          </div>
        </div>

        <!-- List Products -->
        <div class="flex items-center justify-center w-full mt-3 flex-wrap">
          <div class="p-2 w-1/2 sm:w-1/3 md:w-1/5" v-for="i of 25" :key="i">
            <ProdukCard
              :title="query || 'Nama Barang'"
              :image="jaket_green"
              price="1200000"
              :rating="4"
              sold="20000"
            />
          </div>
        </div>
        <div class="w-full flex justify-center mt-10">
          <div class="flex items-center justify-center rounded-2xl border border-shopperly-green-400 py-1 px-2">
            <icon-arrow-down class="transform rotate-90 opacity-50 cursor-pointer hover:text-shopperly-green-400"/>
            <div class="flex items-center">
              <span class="pagination-number">1</span>
              <span class="pagination-number">2</span>
              <span class="pagination-number">3</span>
              <span class="pagination-number">4</span>
              <span class="pagination-number">5</span>
              <span class="pagination-number">6</span>
              <span class="pagination-number">7</span>
              <span class="pagination-number">8</span>
              <span>...</span>
              <span class="pagination-number">10</span>
            </div>
            <icon-arrow-down class="transform -rotate-90 cursor-pointer hover:text-shopperly-green-400"/>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

import MainLayout from '@/layouts/Main.vue'
import ProdukCard from "@/components/ProdukCard.vue";
import SearchFilter from "./SearchFilter.vue";
import { IconArrowDown, IconStore, IconBoxProduct } from '@/components/icons';
import jaket_green from "@/assets/images/jaket_green.jpg";

export default {
  components: { 
    MainLayout, 
    ProdukCard, 
    SearchFilter, 
    IconArrowDown, 
    IconStore,
    IconBoxProduct
  },
  setup(){
    const route = useRoute()
    const query = computed(() => route.query.keyword)
    
    return {
      query,
      jaket_green
    }
  }
}
</script>

<style>
  .pagination-number {
    @apply hover:text-shopperly-green-400 hover:underline px-2.5 cursor-pointer
  }
</style>