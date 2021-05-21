<template>
  <!-- Product Populer -->
  <section class="mt-24 flex flex-col items-center">
    <SectionTitle name="Produk Populer"/>
    <div class="flex items-center justify-evenly w-full mt-3 flex-wrap">
      <div class="p-2 w-full md:w-1/4" v-for="i of 4" :key="i">
        <ProdukCard
          title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci ea recusandae atque! Beatae assumenda adipisci."
          harga="1000000"
          rating="5.0"
          :terjual="1000"
        />
      </div>
    </div>
    
  </section>
</template>

<script>
import SectionTitle from "../../components/SectionTitle.vue";
import ProdukCard from "../../components/ProdukCard.vue";
export default {
  components: {
    SectionTitle,
    ProdukCard
  }
}
</script>

<style>

</style>