<template>
  <router-link :to="to" class="absolute p-3 m-3 text-shopperly-green-400 hover:bg-shopperly-green-100 rounded-full transition-colors">
    <icon-back/>
  </router-link>
</template>

<script>
import IconBack from './icons/IconBack.vue'
export default {
  components: {
    IconBack
  },
  props: {
    to: {
      type: [String, Object],
      default: '/'
    }
  }
}
</script>