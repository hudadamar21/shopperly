<template>
  <div class="relative h-screen w-full flex flex-col">
    <Back to="/"/>
    <div class="text-center">
      <h1 class="brand text-7xl mt-5 mb-3 text-gradient bg-gradient-to-r from-shopperly-blue to-shopperly-green-300 inline-block">Shopperly</h1>
    </div>
    <div class="w-1/2 flex-grow relative z-10">
      <div class="flex justify-center items-start mt-5">
        <div class="border-2 border-shopperly-blue rounded-md rounded-tr-3xl rounded-bl-3xl p-10 bg-white w-[60%]">
          <div class="text-center mb-3">
            <h2 class="text-3xl font-semibold mb-1">Sign up</h2>
            <div>
              <span>Sudah punya akun Shopperly? </span>
              <router-link to="/login" class="text-shopperly-blue">Log in</router-link>
            </div>
          </div>
          <AuthForm @formSubmit="formSubmit"/>
        </div>
      </div>
    </div>
    <img :src="bgSignup" class="absolute bottom-0 right-0 h-[80%]" alt="background signup">
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue'
import Back from "@/components/Back.vue";

import bgSignup from "@/assets/images/bg-signup.svg";
export default {
  components: { AuthForm, Back },
  data(){
    return {
      bgSignup
    }
  },
  setup(){

    const formSubmit = (value) => {
      console.log(value)
    }

    return {
      formSubmit
    }
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