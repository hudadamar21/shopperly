<template>
  <LayoutMain noFooter>
     <div class="flex flex-col lg:flex-row justify-center container mx-auto text-gray-800">
       
      <!-- Photo Profile -->
      <div class="w-full lg:w-[25%] flex flex-col pb-8 lg:pb-0">
        <ProfileImage/>
        <button class="mt-5 w-full border-2 py-3 text-2xl">
          Update Profile
        </button>
      </div>

      <!-- Detail Profile -->
      <div class="w-full lg:w-[55%] flex-grow px-5">
        <div class="border p-3 lg:p-8 pb-8 lg:pb-0 min-h-full max-h-full">
          <ul class="flex items-center w-full">
            <li 
              v-for="menu of profileMenu" 
              :key="menu" 
              :class="[
                'detail-list',
                profileMenuSelected === menu ? 'active' : ''
              ]"
              @click="setProfileMenu(menu)"
              >{{ menu }}
            </li>
          </ul>
          <BiodataDiri v-if="profileMenuSelected === 'Biodata Diri'" />
          <DaftarAlamat v-else-if="profileMenuSelected === 'Daftar Alamat'" />
          <Pembayaran v-else-if="profileMenuSelected === 'Pembayaran'" />
        </div>
      </div>

      <!-- Profile Menu -->
      <div class="w-full lg:w-[20%] pt-8 lg:pt-0">
        <ProfileMenu/>
      </div>

     </div>
  </LayoutMain>
 
</template>

<script>
import { ref } from "vue";

import LayoutMain from "@/layouts/Main.vue";
import ProfileImage from "./ProfileImage.vue";
import ProfileMenu from "./ProfileMenu.vue";

import BiodataDiri from "./BiodataDiri.vue";
import DaftarAlamat from "./DaftarAlamat.vue";


export default {
  components: {
    LayoutMain,
    ProfileImage,
    ProfileMenu,
    BiodataDiri,
    DaftarAlamat
  },
  setup(){
    const profileMenu = ref([
      'Biodata Diri',
      'Daftar Alamat',
      'Pembayaran'
    ])

    const profileMenuSelected = ref('Biodata Diri')

    const setProfileMenu = (value) => {
      profileMenuSelected.value = value
    }

    return {
      profileMenu,
      profileMenuSelected,
      setProfileMenu
    }
  }
}
</script>

<style lang="postcss">
  .detail-list {
    @apply w-1/3 text-center hover:text-shopperly-green-400 border-b-2 hover:border-shopperly-green-400 cursor-pointer text-lg pb-1
  }
  .active {
    @apply text-shopperly-green-400 border-shopperly-green-400 
  }
  .profile-list {
    @apply px-3 py-1 rounded hover:bg-gray-200 mb-1 cursor-pointer
  }
  
</style>