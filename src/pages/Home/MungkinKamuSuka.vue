<template>
  <!-- Product Populer -->
  <section class="mt-10 flex flex-col items-center">
    <section-title name="Mungkin Kamu Suka" />
    <div class="flex items-center justify-evenly w-full mt-3 flex-wrap">
      <div class="p-2 w-full md:w-1/4" v-for="i of 8" :key="i">
        <div class="bg-shopperly-green-100 rounded shadow h-[400px]">

        </div>
      </div>

    </div>

    <button class="px-3 py-1 rounded bg-shopperly-green-400 focus:hover:bg-opacity-80 focus:outline-none mt-5 text-white font-semibold border-2 border-shopperly-green-400 transition">
      Tamplikan lebih banyak
    </button>
  </section>
</template>

<script>
import SectionTitle from '../../components/SectionTitle.vue'
export default {
  components: { SectionTitle },

}
</script>

<style>

</style>