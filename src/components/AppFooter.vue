<template>
  <footer class="p-10 md:p-20 bg-shopperly-green-100 w-full text-shopperly-gray-700 cursor-default">
    <div class="w-full h-1 bg-gradient-to-r from-shopperly-green-300 to-shopperly-green-400"></div>
    <div class="lg:p-10 py-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
      <div class="flex flex-col md:flex-row gap-5 md:gap-16 mb-10 md:mb-0">
        <div>
          <h1 class="brand text-4xl text-gradient bg-gradient-to-r from-shopperly-blue to-shopperly-green-300">Shopperly</h1>
          <ul>
            <li>
              <router-link to="#">Tentang Kami</router-link>
            </li>
            <li>Blog</li>
            <li>Bantuan</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold">Beli</h3>
          <ul>
            <li>Jelajahi</li>
            <li>Cara Membeli</li>
          </ul>

          <h3 class="text-lg font-semibold mt-5">Jual</h3>
          <ul>
            <li>Cara Jadi Penjual</li>
            <li>Daftar Jadi Penjual</li>
          </ul>
        </div>
        <div class="text-left lg:text-center">
          <h3 class="text-lg font-semibold mb-1">Follow Us</h3>
          <ul class="flex items-center gap-4">
            <li class="filter hover:brightness-110 cursor-pointer">
              <icon-facebook/>
            </li>
            <li class="filter hover:brightness-110 cursor-pointer">
              <icon-telegram/>
            </li>
            <li class="filter hover:brightness-110 cursor-pointer">
              <icon-whatsapp/>
            </li>
            <li class="filter hover:brightness-110 cursor-pointer">
              <icon-twitter/>
            </li>
          </ul>
        </div>
      </div>

      <div class="h-[250px] w-[250px] rounded grid place-content-center mr-10">
        <h1 class="brand text-8xl text-gradient bg-gradient-to-r from-shopperly-blue to-shopperly-green-300">Shopperly</h1>
      </div>
    </div>
    <div class="w-full h-1 bg-gradient-to-r from-shopperly-green-300 to-shopperly-green-400"></div>
  </footer>
</template>

<script>
import { IconFacebook, IconTelegram, IconWhatsapp, IconTwitter } from './icons'
export default {
  components: { IconFacebook, IconTelegram, IconWhatsapp, IconTwitter },
}
</script>

<style lang="postcss" scoped>
  ul {
    @apply text-gray-600
  }
  li {
    @apply hover:text-gray-700 hover:underline cursor-pointer
  }
</style>