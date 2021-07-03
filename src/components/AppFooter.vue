<template>
  <footer class="p-10 md:p-16 bg-shopperly-green-100 w-full text-shopperly-gray-700 cursor-default">
    <div class="w-full rounded-xl h-3 bg-gradient-to-r from-shopperly-green-200 to-shopperly-lightblue"></div>
    <div class="px-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
      <div class="flex flex-col md:flex-row gap-5 md:gap-16 ">
        <div>
          <!-- <h1 class="brand text-4xl text-gradient bg-gradient-to-r from-shopperly-blue to-shopperly-green-300">Shopperly</h1> -->
          <h3 class="text-2xl font-semibold mb-2">Shopperly</h3>
          <ul>
            <li class="mb-2">
              <router-link to="#">Tentang Kami</router-link>
            </li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <h3 class="text-2xl font-semibold mb-2">Beli</h3>
          <ul>
            <li class="mb-2">Jelajahi</li>
            <li>Cara Membeli</li>
          </ul>
        </div>
        <div>
          <h3 class="text-2xl font-semibold mb-2">Jual</h3>
          <ul>
            <li class="mb-2">Cara Jadi Penjual</li>
            <li>Daftar Jadi Penjual</li>
          </ul>
        </div>
        <!-- <div class="text-left lg:text-center">
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
        </div> -->
      </div>

      <div class="h-full pt-5 rounded grid place-content-center">
        <img src="@/assets/images/image_footer.svg" alt="">
      </div>
    </div>
    <div class="w-full rounded-xl h-3 bg-gradient-to-r from-shopperly-green-200 to-shopperly-lightblue"></div>
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