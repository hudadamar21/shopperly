<template>
  <LayoutMain noFooter>
     <div class="flex flex-col lg:flex-row justify-center container mx-auto text-gray-800">
       
      <!-- Photo Profile -->
      <div class="w-full lg:w-[20%] flex flex-col flex-grow lg:pr-8 pb-8 lg:pb-0">
        <ProfileImage/>
        <button class="mt-5 w-full border-2 py-3 text-2xl">
          Update Profile
        </button>
      </div>

      <!-- Detail Profile -->
      <div class="flex-grow border p-3 lg:p-8 pb-8 lg:pb-0">
        <ul class="flex items-center w-full">
          <li class="detail-list active">Biodata Diri</li>
          <li class="detail-list">Daftar Alamat</li>
          <li class="detail-list">Pembayaran</li>
        </ul>
        <BiodataDiri/>
      </div>

      <!-- Profile Menu -->
      <div class="w-full lg:w-[18%] lg:pl-8 flex-grow pt-8 lg:pt-0">
        <ProfileMenu/>
      </div>

     </div>
  </LayoutMain>
 
</template>

<script>
import LayoutMain from "@/layouts/Main.vue";
import ProfileImage from "./ProfileImage.vue";
import BiodataDiri from "./BiodataDiri.vue";
import ProfileMenu from "./ProfileMenu.vue";

export default {
  components: {
    LayoutMain,
    ProfileImage,
    BiodataDiri,
    ProfileMenu
  },
}
</script>

<style lang="postcss">
  input,select, button {
    @apply transition focus:ring ring-gray-200
  }
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