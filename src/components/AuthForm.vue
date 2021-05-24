<template>
  <form @submit.prevent="formSubmit">
    <div class="mb-2">
      <label for="email" class="form-label" >Email</label>
      <input class="form-input" id="email" type="email" v-model="email" placeholder="example@gmail.com">
    </div>
    <div class="mb-2">
      <label for="password" class="form-label">Password</label>
      <input class="form-input" id="password" type="password" v-model="password" placeholder="*********">
    </div>
    <div class="py-4 flex items-center gap-3 ">
      <div class="flex-grow h-px bg-gray-400"></div>
      <span class="text-gray-500">or sign up</span>
      <div class="flex-grow h-px bg-gray-400"></div>
    </div>
    <div class="flex items-center gap-5">
      <button class="form-button flex-grow">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.84672 17V9.25811H8.51221L8.90842 6.22692H5.84672V4.29617C5.84672 3.42148 6.09544 2.8226 7.37661 2.8226H9V0.120123C8.21013 0.0371794 7.41618 -0.00286969 6.62179 0.000159793C4.26575 0.000159793 2.64814 1.40949 2.64814 3.99673V6.22125H0V9.25245H2.65392V17H5.84672Z" fill="#3378FF"/>
        </svg>
        <span class="ml-2">Facebook</span>
      </button>
      <button class="form-button flex-grow">
        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
        <span class="ml-2">Google</span>
      </button>
    </div>
    <button type="submit" class="form-button w-full mt-3 justify-center font-semibold">Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
  emits: ['formsubmit'],
  setup(props, { emit }){
    const email = ref('')
    const password = ref('')

    const formSubmit = () => {
      alert('ok')
      emit('formsubmit', { email, password })
    }

    return {
      email, 
      password,
      formSubmit
    }
  }
}
</script>

<style>

</style>