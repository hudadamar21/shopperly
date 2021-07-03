<template>
  <div class="relative flex-grow">
    <input
    type="text"
    v-model="searchKeyword"
    @keyup.enter="onSearch()"
    placeholder="Cari Produk.."
    class="px-3 py-1 w-full rounded-lg border-2 border-shopperly-green-200 focus:outline-none !ring-shopperly-green-200 !ring-opacity-100">
    <button @click="onSearch()" class="absolute top-1/2 transform -translate-y-1/2 right-3 rounded-full focus:outline-none text-shopperly-green-400 hover:text-shopperly-green-300">
      <icon-search/>
    </button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from "vue-router";

import { IconSearch } from "@/components/icons";

export default {
  components: {
    IconSearch
  },
  setup(){
    const router = useRouter()

    const searchKeyword = ref('')
    const onSearch = () => {
      router.push({ name: 'search_result', query: { keyword: searchKeyword.value }})
    }

    return {
      searchKeyword,
      onSearch
    }
  }
}
</script>