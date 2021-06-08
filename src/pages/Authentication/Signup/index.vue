<template>
  <div class="h-screen w-full">
    <Back to="/" class="absolute top-0 left-0 z-50"/>

    <!-- Title -->
    <div class="text-center">
      <h1 class="brand text-6xl md:text-7xl mt-5 text-gradient bg-gradient-to-r from-shopperly-blue to-shopperly-green-300 inline-block">
        Shopperly
      </h1>
      <p class="text-sm md:text-lg text-gray-700 font-medium leading-4 ">
        Shopping With No <span class="text-red-500">Worries</span>!
      </p>
      <p>
        Only on <span class="text-sm md:text-lg font-medium italic text-shopperly-green-400">Shopperly</span>!
      </p>
    </div>

    <div class="absolute top-1/2 left-0 transform -translate-y-1/2 text-left w-full md:w-[25rem] z-10 px-2 md:px-0 md:mx-16 mt-7">
      <div class="flex items-start">

        <!-- Card Form Signup -->
        <div class="border-2 border-shopperly-blue rounded-md rounded-tr-3xl rounded-bl-3xl p-10 bg-white w-full">
          <div class="text-center mb-3">
            <h2 class="text-3xl font-semibold mb-1">Sign up</h2>
            <div>
              <span>Sudah punya akun Shopperly? </span>
              <router-link to="/login" class="text-shopperly-blue">Log in</router-link>
            </div>
          </div>
          <FormSignUp @formSubmit="formSubmit"/>
        </div>

      </div>
    </div>
    <img 
      src="@/assets/images/bg-signup.svg" 
      class="absolute bottom-0 right-0 h-[80%]" 
      alt="background signup"
    />
  </div>
</template>

<script>
import FormSignUp from './FormSignUp.vue'
import Back from "@/components/Back.vue";

export default {
  components: { FormSignUp, Back },
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