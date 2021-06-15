<template>
  <div class="border lg:rounded-r-3xl h-full">
    <div class="flex items-center py-3 border-b pl-5">
      <img 
        src="" 
        class="w-10 lg:w-16 h-10 lg:h-16 rounded-full object-center object-cover bg-gray-300 overflow-hidden" 
        alt="profile image"
      >
      <h3 class="font-semibold ml-3 text-xl">Username</h3>
    </div>
    <div class="px-1">
      <Expandable 
        title="Kotak Masuk" 
        :expand="expandMenu" 
        maxheight="max-h-32"
        :borderButton="false"
      >
        <ul class="px-3 pb-3">
          <li class="profile-list">Chat</li>
          <li class="profile-list">Ulasan Produk</li>
          <li class="profile-list">Diskusi Produk</li>
        </ul>
      </Expandable>
      <Expandable 
        title="Pembelian" 
        :expand="expandMenu" 
        maxheight="max-h-32"
        :borderButton="false"
      >
        <ul class="px-3 pb-3">
          <li class="profile-list">Pembayaran</li>
          <li class="profile-list">Daftar Transaksi</li>
        </ul>
      </Expandable>
      <Expandable 
        title="Profile Saya" 
        :expand="expandMenu" 
        maxheight="max-h-32"
        :borderButton="false"
      >
        <ul class="px-3 pb-3">
          <li class="profile-list">Wishlist</li>
          <li class="profile-list">Toko Favorit</li>
          <li class="profile-list">Ubah Password</li>
        </ul>
      </Expandable>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Expandable from "@/components/Expandable.vue";

export default {
  components: {
    Expandable
  },
  setup(){
    const expandMenu = ref(true)

    return {
      expandMenu
    }
  }
}
</script>