<template>
  <h1 class="text-lg font-medium mb-1">Pilih Kurir</h1>
  <div class="border border-shopperly-green-400 rounded-md">
    <expandable 
      title="Pengiriman" 
      headerClass="bg-shopperly-green-400 text-white"
    >
      <ul class="pt-1">
        <li 
          v-for="(kurir, index) of listKurir" 
          :key="kurir.name" 
          :class="[
            'border-gray-300 py-2 flex justify-between',
            index !== listKurir.length - 1 ? 'border-b' : 'pb-0'
          ]">
          <div>
            <h1 class="text-sm font-medium">{{ kurir.name }}</h1>
            <p class="text-xs text-gray-700">{{ kurir.estimasi }}</p>
          </div>
          <span class="text-sm text-gray-700">{{ kurir.harga }}</span>
        </li>
      </ul>
    </expandable>
  </div>
</template>

<script >
import Expandable from '@/components/Expandable.vue'
import { reactive } from '@vue/reactivity'
export default {
  components: { Expandable },
  setup(){
    const listKurir = reactive([
      {
        name: 'Next Day',
        estimasi: 'Estimasi tiba 15 jun - 16 jun',
        harga: 'Rp 13.000'
      },
      {
        name: 'Regular',
        estimasi: 'Estimasi tiba 16 jun - 18 jun',
        harga: 'Rp 20.000'
      },
      {
        name: 'Ekonomi',
        estimasi: 'Estimasi tiba 16 jun - 18 jun',
        harga: 'Rp 5.000'
      },
    ])

    return {
      listKurir
    }
  }
}
</script>

<style>

</style>