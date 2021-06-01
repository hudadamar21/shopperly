<template>
  <Navbar/>
  <section class="container px-5 md:px-10 lg:px-16 m-auto mb-10 text-shopperly-gray-700 w-full">
    <slot />
  </section>
  <App-footer/>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  components: {
    Navbar,
    AppFooter
  }
}
</script>

<style>

</style>