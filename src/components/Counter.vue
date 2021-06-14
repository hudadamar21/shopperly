<template>
  <div class="px-2 py-1 flex items-center justify-between">
    <button class="button-counter" @click="decrementJumlahItem()">-</button>
    <input ref="elementJumlahItem" type="text" class="border-b-2 w-1/2 focus:outline-none focus:border-shopperly-green-400 text-center transition" @change="validateJumlahItem" v-model="jumlahItem">
    <button class="button-counter" @click="IncrementJumlahItem()">+</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    jumlahItem: {
      type: Number,
      required: true,
      default: 0
    },
    maxItem: {
      type: Number,
      required: true,
      default: 1
    }
  },
  emits: ['counter'],
  setup(props, {emit}){

    const jumlahItem = ref(props.jumlahItem)
    const maxItem = ref(props.maxItem)

    const validateJumlahItem = () => {
      // Jika jumlah barang lebih besar dari stock barang
      if(jumlahItem.value > maxItem.value) {

        // maka balikan nilainya sesuai stock yang tersedia
        jumlahItem.value = maxItem.value

        // dan berikan respon dengan mengubah border bawah menjadi merah
        elementJumlahItem.classList.add('border-red-500','focus:border-red-500')

        // setalah 1 detik border akan kembali seperti semula
        setTimeout(() => {
          elementJumlahItem.classList.remove('border-red-500','focus:border-red-500')
        }, 1000);
      }
    }

    const IncrementJumlahItem = () => {
      if(jumlahItem.value < maxItem.value) {
        jumlahItem.value++
        emit('counter', jumlahItem.value)
      }
    }

    const decrementJumlahItem = () => {
      if(jumlahItem.value > 1){
        jumlahItem.value--
        emit('counter', jumlahItem.value)
      }
    }

    return {
      resultJumlahItem: jumlahItem,
      validateJumlahItem,
      IncrementJumlahItem,
      decrementJumlahItem
    }
  }
}
</script>

<style lang="postcss" scoped>
  .button-counter {
    @apply bg-shopperly-green-300 hover:bg-shopperly-green-400 text-white w-6 h-6 rounded-full flex items-center justify-center focus:outline-none
  }
</style>