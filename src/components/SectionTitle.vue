<template>
  <h1 class="border-2 border-shopperly-green-400 rounded text-xl md:text-2xl text-shopperly-green-400 px-3 pb-1 rounded-2xl rounded-tl-none mb-1">
    {{ name }}
  </h1>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>