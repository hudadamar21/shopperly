<template>
  <div class="relative h-screen w-full flex flex-col">
    <Back to="/"/>
    <div class="w-1/2 self-end flex-grow relative z-10">
      <div class="text-center">
        <h1 class="brand text-7xl mt-8 text-gradient bg-gradient-to-r from-shopperly-blue to-shopperly-green-300 inline-block">Shopperly</h1>
      </div>
      <div class="flex justify-center items-start mt-3">
        <div class="border-2 border-shopperly-blue rounded-md rounded-tr-3xl rounded-bl-3xl p-10 bg-white w-[60%]">
          <div class="text-center mb-3">
            <h2 class="text-3xl font-semibold mb-1">Login</h2>
          </div>
          <AuthForm @formSubmit="formSubmit"/>
          <div class="flex justify-between items-center text-sm mt-2">
            <router-link to="forget-password" class="text-shopperly-blue hover:underline">Forget Password?</router-link>
            <div >
              <span>Baru di Sopperly? </span>
              <router-link to="/signup" class="text-shopperly-blue hover:underline">Sign up</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img :src="bgLogin" class="absolute top-1/2 transform -translate-y-1/2 left-0 h-[50%] pl-10" alt="background login">
    <img :src="bgLoginDecoration" class="absolute bottom-0 right-0 h-[85%] pl-10" alt="background login decoration">
  </div>
</template>

<script>

import AuthForm from "@/components/AuthForm.vue";
import Back from "@/components/Back.vue";

import bgLogin from "@/assets/images/bg-login.svg";
import bgLoginDecoration from "@/assets/images/bg-login-decoration.svg";

export default {
  data(){
    return {
      bgLogin,
      bgLoginDecoration
    }
  },
  components: {
    AuthForm,
    Back
  }
}
</script>

<style lang="postcss">
  .text-gradient {
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .form-label {
    @apply font-semibold block text-xl mb-1
  }

  .form-input {
    @apply px-3 py-1 rounded-md border-2 border-shopperly-blue focus:border-shopperly-green-400 w-full focus:outline-none transition
  }
  .form-button {
    @apply flex items-center px-3 py-1 border-2 border-shopperly-blue hover:border-shopperly-green-400 rounded-md focus:outline-none
  }
</style>