<template>
  <div class="fixed inset-0 bg-black bg-opacity-30 grid place-items-center">
    <div class="w-1/2 min-h-[80vh] bg-white rounded-md py-5 px-12 shadow-md">
      <h1 class="text-xl text-center font-bold text-gray-700 mb-10">Tambahkan Alamat Baru</h1>
      <form @submit.prevent="" class="w-full flex flex-col gap-3 ">
      <div>
        <label for="Alamat">Nama Alamat</label>
        <input type="text" id="Alamat" placeholder="Rumah, Kantor, dsb">
      </div>
      <div class="flex items-baseline gap-5">
        <div class="flex-grow">
          <label for="Nama Penerima">Nama Penerima</label>
          <input type="text" id="Nama Penerima" placeholder="tuliskan nama penerima">
        </div>
        <div class="flex-grow">
          <label for="No. Ponsel">No. Ponsel</label>
          <input type="text" id="No. Ponsel" placeholder="tulis nomor telepon">
        </div>
      </div>
      <div class="flex items-baseline gap-5">
        <div class="w-2/3">
          <label for="Kota atau Kecamatan">Kota atau Kecamatan</label>
          <input type="text" id="Kota atau Kecamatan" placeholder="tuliskan nama kota atau kecamatan">
        </div>
        <div class="w-1/3">
          <label for="Kode Pos">Kode Pos</label>
          <input type="text" id="Kode Pos" placeholder="5 digit kode pos">
        </div>
      </div>
      <div>
        <label for="Alamat">Alamat</label>
        <textarea 
          id="Alamat" 
          class="w-full resize-none" 
          rows="5" 
          placeholder="Tulis nama jalan, nomor rumah, nomor kompleks nama gedung"
        ></textarea>
      </div>
      <div class="flex items-center justify-center mt-5 gap-3">
        <button @click="closeModal" class="border-2 hover:!brightness-100">Batal</button>
        <button class="bg-shopperly-green-400 text-white">Tambah</button>
      </div>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  setup(props, { emit }){
    const closeModal = () => {
      emit('close', false)
    }

    return {
      closeModal
    }
  }
}
</script>

<style lang="postcss" scoped>
  label {
    @apply block text-sm font-medium mb-1
  }
  input, textarea {
    @apply px-3 py-1.5 w-full rounded-md border border-gray-300 ring-shopperly-green-400 ring-opacity-30 
  }
  button {
    @apply px-12 py-1.5 rounded-md ring-shopperly-green-400 ring-opacity-30 filter hover:brightness-110
  }
</style>