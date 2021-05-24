<template>
  <div class="bg-white rounded-md shadow-md border border-gray-300 h-[310px] md:h-[375px] w-full overflow-hidden text-shopperly-gray-800 ">
    <div class="h-[60%] md:h-[65%] w-full bg-gradient-to-br from-shopperly-green-400 to-shopperly-green-300">
      <img src="" alt="">
    </div>
    <div class="p-3 h-[50%] md:h-[45%]">
      <h1 class="line-clamp-2 text-sm md:text-base">{{ title }}</h1>
      <p class="font-semibold my-1">{{ formatPrice }}</p>
      <div class="text-gray-500 text-xs md:text-sm flex items-center">
        <p class="flex items-center">
          <!-- star -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {{ rating.toFixed(1) }}
        </p>
        <span class="px-1">|</span>
        <p>Terjual {{ formatSold }}</p>
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
    price: {
      type: Number,
      required: true,
      default: 0
    },
    rating: {
      type: Number,
      required: true,
      default: 0
    },
    sold: {
      type: Number,
      required: true,
      default: 0
    }
  },
  computed: {
    formatPrice(){
      let currencyNumber = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
      });
      return currencyNumber.format(this.price)
    },
    formatSold(){
      if (this.sold >= 1000000){
        let resultSold = (this.sold / 1000000) + 'jt' // 1jt , 1.5jt
        return resultSold
      } else if (this.sold >= 1000) {
        let resultSold = (this.sold / 1000) + 'rb' // 1rb , 1.5rb
        return resultSold
      } else {
        return this.sold
      }
    }
  }
}
</script>

<style>

</style>