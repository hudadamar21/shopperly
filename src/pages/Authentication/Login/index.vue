<template>
  <div class="relative h-screen w-full">
    <Back to="/" class="absolute top-0 left-0 z-50" />
    <div class="absolute top-1/2 transform -translate-y-1/2 right-0 text-left w-full md:w-[25rem] z-10 px-2 md:px-0 md:mx-16">

      <!-- Title -->
      <div class="text-center mb-3">
        <h1 class="brand text-6xl md:text-7xl text-gradient bg-gradient-to-r from-shopperly-blue to-shopperly-green-300 inline-block">
          Shopperly
        </h1>
        <p class="text-sm md:text-lg text-gray-700 font-medium leading-4 ">
          Shopping With No <span class="text-red-500">Worries</span>!
        </p>
        <p>
          Only on <span class="text-sm md:text-lg font-medium italic text-shopperly-green-400">Shopperly</span>!
        </p>
      </div>

      <!-- Card Form Login -->
      <div class="border-2 border-shopperly-blue rounded-md rounded-tr-3xl rounded-bl-3xl p-10 bg-white w-full">
        <div class="text-center mb-3">
          <h2 class="text-3xl font-semibold mb-1">Login</h2>
        </div>
        <FormLogin @formSubmit="formSubmit"/>
        <div class="flex justify-between items-center text-sm mt-2">
          <router-link to="forget-password" class="text-shopperly-blue hover:underline">Forget Password?</router-link>
          <div >
            <span>Baru di Sopperly? </span>
            <router-link to="/signup" class="text-shopperly-blue hover:underline">Sign up</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Background -->
    <img 
      src="@/assets/images/bg-login-decoration.svg" 
      class="absolute bottom-0 right-0 h-[85%] pl-10" 
      alt="background login decoration"
    >
    <img 
      src="@/assets/images/bg-login.svg" 
      class="absolute top-1/2 transform -translate-y-1/2 left-0 h-[50%] pl-10"
      alt="background login"
    >
  </div>
</template>

<script>

import FormLogin from "./FormLogin.vue";
import Back from "@/components/Back.vue";

export default {
  components: {
    FormLogin,
    Back
  },
  setup(){
    const formSubmit = () => {
      alert('ok')
    }
    return {
      formSubmit
    }
  }
}
</script>