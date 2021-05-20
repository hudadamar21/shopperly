<template>
  <!-- Product Populer -->
  <section class="mt-10 flex flex-col items-center">
    <SectionTitle name="Produk Populer"/>
    <div class="flex items-center justify-evenly w-full mt-3 flex-wrap">
      <div class="p-2 w-full md:w-1/4" v-for="i of 4" :key="i">
        <div class="bg-shopperly-green-100 rounded shadow h-[400px]">

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "../../components/SectionTitle.vue";
export default {
  components: {
    SectionTitle
  }
}
</script>

<style>

</style>