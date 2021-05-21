<template>
  <!-- Product Populer -->
  <section class="mt-24 flex flex-col items-center">
    <section-title name="Mungkin Kamu Suka" />
    <div class="flex items-center justify-evenly w-full mt-3 flex-wrap">
      <div class="p-2 w-full md:w-1/4" v-for="i of 8" :key="i">
        <ProdukCard
          title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci ea recusandae atque! Beatae assumenda adipisci."
          harga="1000000"
          rating="5.0"
          :terjual="1000"
        />
      </div>

    </div>

    <button class="px-3 py-1 rounded bg-shopperly-green-400 hover:bg-opacity-80 focus:outline-none mt-5 text-white font-semibold border-2 border-shopperly-green-400 transition">
      Tamplikan lebih banyak
    </button>
  </section>
</template>

<script>
import SectionTitle from '../../components/SectionTitle.vue'
import ProdukCard from "../../components/ProdukCard.vue";
export default {
  components: { SectionTitle, ProdukCard },

}
</script>

<style>

</style>