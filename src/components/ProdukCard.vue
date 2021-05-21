<template>
  <div class="bg-white rounded-md shadow-md border border-gray-300 h-[375px] w-full overflow-hidden text-shopperly-gray-800 ">
    <div class="h-[240px] w-full bg-gradient-to-br from-shopperly-green-400 to-shopperly-green-300">
      <img src="" alt="">
    </div>
    <div class="p-3">
      <h1 class="line-clamp-2">{{ title }}</h1>
      <p class="font-semibold my-1">Rp {{ harga }}</p>
      <div class="text-gray-500 text-sm flex items-center">
        <p class="flex items-center">
          <!-- star -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {{ rating }}
        </p>
        <span class="px-1">|</span>
        <p>Terjual {{ terjual }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'No Title'
    },
    harga: {
      type: String,
      required: true,
      default: '0'
    },
    rating: {
      type: String,
      required: true,
      default: '0'
    },
    terjual: {
      type: Number,
      required: true,
      default: 0
    }
  },
}
</script>

<style>

</style>